from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    UploadFile,
    File,
    Form
)

from sqlalchemy.orm import Session
import shutil
import os

from app.utils.database import get_db
from app.schemas.supplier_profile import (
    SupplierProfileCreate,
    SupplierProfileUpdate
)
from app.services.supplier_profile import SupplierProfileService

router = APIRouter(
    prefix="/supplier/profile",
    tags=["Supplier Profile"]
)

UPLOAD_DIR = "uploads"

os.makedirs(UPLOAD_DIR, exist_ok=True)


# ---------------------------------------------------------
# GET SUPPLIER PROFILE
# ---------------------------------------------------------
@router.get("/{user_id}")
def get_supplier_profile(
    user_id: int,
    db: Session = Depends(get_db)
):

    profile = SupplierProfileService.get_supplier_profile(
        db,
        user_id
    )

    if profile is None:
        raise HTTPException(
            status_code=404,
            detail="Supplier profile not found"
        )

    return profile


# ---------------------------------------------------------
# CREATE SUPPLIER PROFILE
# ---------------------------------------------------------
@router.post("/")
def create_supplier_profile(
    profile: SupplierProfileCreate,
    db: Session = Depends(get_db)
):

    supplier = SupplierProfileService.create_supplier_profile(
        db,
        profile
    )

    return {
        "message": "Supplier Profile Created Successfully",
        "supplier_id": supplier.id
    }


# ---------------------------------------------------------
# UPDATE SUPPLIER PROFILE
# ---------------------------------------------------------
@router.put("/{user_id}")
def update_supplier_profile(
    user_id: int,
    profile: SupplierProfileUpdate,
    db: Session = Depends(get_db)
):

    supplier = SupplierProfileService.update_supplier_profile(
        db,
        user_id,
        profile
    )

    if supplier is None:
        raise HTTPException(
            status_code=404,
            detail="Supplier Profile Not Found"
        )

    return {
        "message": "Supplier Profile Updated Successfully"
    }


# ---------------------------------------------------------
# UPLOAD DOCUMENT
# ---------------------------------------------------------
@router.post("/upload-document")
def upload_document(

    supplier_id: int = Form(...),

    document_type: str = Form(...),

    file: UploadFile = File(...),

    db: Session = Depends(get_db)

):

    file_path = os.path.join(
        UPLOAD_DIR,
        file.filename
    )

    with open(file_path, "wb") as buffer:

        shutil.copyfileobj(
            file.file,
            buffer
        )

    SupplierProfileService.upload_document(

        db=db,

        supplier_id=supplier_id,

        document_type=document_type,

        file_name=file.filename,

        file_url=file_path

    )

    return {
        "message": "Document Uploaded Successfully"
    }


# ---------------------------------------------------------
# UPLOAD STORE LOGO
# ---------------------------------------------------------
@router.post("/upload-logo")
def upload_logo(

    file: UploadFile = File(...)

):

    file_path = os.path.join(
        UPLOAD_DIR,
        file.filename
    )

    with open(file_path, "wb") as buffer:

        shutil.copyfileobj(
            file.file,
            buffer
        )

    return {
        "logo_url": file_path
    }