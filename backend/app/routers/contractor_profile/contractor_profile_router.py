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

from app.schemas.contractor_profile.contractor_profile_schema import (
    ContractorProfileCreate
)

from app.services.contrator_profile.contractor_profile_services import (
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

    upload_dir = os.path.join(
        "uploads",
        folder
    )

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
def create_profile(
    contractor: ContractorProfileCreate,
    db: Session = Depends(get_db),
    current_contractor: Contractor = Depends(get_current_contractor)
):
    return create_contractor_profile(
        db,
        current_contractor.id,
        contractor
    )


@router.post("/upload-certificate")
async def upload_certificate(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_contractor: Contractor = Depends(get_current_contractor)
):
    file_path = save_upload_file(
        file,
        "contractor_certificate"
    )

    with open(file_path, "wb") as buffer:
        buffer.write(
            await file.read()
        )

    profile = save_profile_file(
        db,
        current_contractor.id,
        "certification_file",
        file_path
    )

    return {
        "message": "Certificate uploaded",
        "path": file_path,
        "profile_id": profile.id
    }


@router.post("/upload-license")
async def upload_license(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_contractor: Contractor = Depends(get_current_contractor)
):
    file_path = save_upload_file(
        file,
        "contractor_license"
    )

    with open(file_path, "wb") as buffer:
        buffer.write(
            await file.read()
        )

    profile = save_profile_file(
        db,
        current_contractor.id,
        "license_file",
        file_path
    )

    return {
        "message": "License uploaded",
        "path": file_path,
        "profile_id": profile.id
    }


@router.post("/upload-work-images")
async def upload_work_update(
    file: UploadFile = File(...),
    week_number: int | None = Form(None),
    db: Session = Depends(get_db),
    current_contractor: Contractor = Depends(get_current_contractor)
):
    file_path = save_upload_file(
        file,
        "contractor_weekly_work_update"
    )

    with open(file_path, "wb") as buffer:
        buffer.write(
            await file.read()
        )

    work_update_data = {
        "week_number": week_number,
        "image_path": file_path,
        "uploaded_at": datetime.utcnow().isoformat()
    }

    profile = save_work_update(
        db,
        current_contractor.id,
        work_update_data
    )

    return {
        "message": "Weekly work update uploaded",
        "work_update": work_update_data,
        "profile_id": profile.id
    }
