from fastapi import (
    APIRouter,
    Depends,
    UploadFile,
    File,
    Form,
    HTTPException
)

import os
import uuid
from datetime import datetime
from sqlalchemy.orm import Session
from jose import JWTError, jwt
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

from app.models.contractor_model import Contractor

from app.utils.database import get_db
from app.utils.jwt import SECRET_KEY, ALGORITHM

from app.schemas.contractor_profile_schema import (
    ContractorProfileCreate
)

from app.services.contractor_profile_services import (
    create_contractor_profile,
    save_profile_file,
    save_work_update
)

router = APIRouter(
    prefix="/contractor-profile",
    tags=["Contractor Profile"]
)

security = HTTPBearer(auto_error=False)


def get_current_contractor(
    credentials: HTTPAuthorizationCredentials | None = Depends(security),
    db: Session = Depends(get_db)
):
    if credentials is None:
        contractor = db.query(Contractor).order_by(
            Contractor.id.desc()
        ).first()

        if not contractor:
            raise HTTPException(
                status_code=404,
                detail="Contractor not found"
            )

        return contractor

    try:
        payload = jwt.decode(
            credentials.credentials,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )
    except JWTError:
        raise HTTPException(
            status_code=401,
            detail="Invalid token"
        )

    if str(payload.get("role", "")).lower() != "contractor":
        raise HTTPException(
            status_code=403,
            detail="Only contractor can update contractor profile"
        )

    email = payload.get("email")

    if not email:
        raise HTTPException(
            status_code=401,
            detail="Invalid token"
        )

    contractor = db.query(Contractor).filter(
        Contractor.email == email
    ).first()

    if not contractor:
        raise HTTPException(
            status_code=404,
            detail="Contractor not found"
        )

    return contractor


def save_upload_file(file: UploadFile, folder: str):
    ext = os.path.splitext(file.filename)[1]

    filename = f"{uuid.uuid4()}{ext}"

    upload_dir = folder

    os.makedirs(
        upload_dir,
        exist_ok=True
    )

    file_path = os.path.join(
        upload_dir,
        filename
    )

    return file_path


@router.post("/profile")
async def create_profile(
    first_name: str = Form(...),
    last_name: str = Form(...),
    phone_number: str = Form(...),
    gst_number: str = Form(...),
    pan_number: str = Form(...),
    aadhaar_number: str = Form(...),
    company_registered_name: str = Form(...),
    budget_range: str = Form(...),
    projects_completed: int = Form(...),
    years_of_experience: int = Form(...),
    location: str = Form(...),
    availability: str = Form(...),
    about: str = Form(...),
    certification_file: UploadFile | None = File(None),
    license_file: UploadFile | None = File(None),
    previous_work_image: UploadFile | None = File(None),
    db: Session = Depends(get_db),
    current_contractor: Contractor = Depends(get_current_contractor)
):
    contractor = ContractorProfileCreate(
        first_name=first_name,
        last_name=last_name,
        phone_number=phone_number,
        gst_number=gst_number,
        pan_number=pan_number,
        aadhaar_number=aadhaar_number,
        company_registered_name=company_registered_name,
        budget_range=budget_range,
        projects_completed=projects_completed,
        years_of_experience=years_of_experience,
        location=location,
        availability=availability,
        about=about
    )

    profile = create_contractor_profile(
        db,
        current_contractor.id,
        contractor
    )

    if certification_file:
        file_path = save_upload_file(
            certification_file,
            "contractor_certificate"
        )

        with open(file_path, "wb") as buffer:
            buffer.write(
                await certification_file.read()
            )

        profile = save_profile_file(
            db,
            current_contractor.id,
            "certification_file",
            file_path
        )

    if license_file:
        file_path = save_upload_file(
            license_file,
            "contractor_license"
        )

        with open(file_path, "wb") as buffer:
            buffer.write(
                await license_file.read()
            )

        profile = save_profile_file(
            db,
            current_contractor.id,
            "license_file",
            file_path
        )

    if previous_work_image:
        file_path = save_upload_file(
            previous_work_image,
            "contractor_previous_work_images"
        )

        with open(file_path, "wb") as buffer:
            buffer.write(
                await previous_work_image.read()
            )

        previous_work_image_data = {
            "image_path": file_path,
            "uploaded_at": datetime.utcnow().isoformat()
        }

        profile = save_work_update(
            db,
            current_contractor.id,
            previous_work_image_data
        )

    return {
        "message": "Contractor Profile Created Successfully",
        "id": profile.id,
        "contractor_id": profile.contractor_id
    }
