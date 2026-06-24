from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.utils.database import get_db

from app.schemas.supplier_profile import SupplierProfileCreate

from app.services.supplier_profile import SupplierProfileService


router = APIRouter(
    prefix="/supplier-profile",
    tags=["Supplier Profile"]
)


@router.post("/")
def create_supplier_profile(
    supplier: SupplierProfileCreate,
    db: Session = Depends(get_db)
):

    profile = SupplierProfileService.create_supplier_profile(
        db,
        supplier
    )

    return {
        "message": "Supplier Profile Created Successfully",
        "data": profile
    }