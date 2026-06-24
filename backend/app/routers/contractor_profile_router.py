from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.utils.database import get_db

from app.schemas.contractor_profile_schema import (
    ContractorProfileCreate
)

from app.services.contractor_profile_services import (
    create_contractor_profile
)

router = APIRouter(
    prefix="/contractor-profile",
    tags=["Contractor Profile"]
)


@router.post("/")
def create_profile(
    profile: ContractorProfileCreate,
    db: Session = Depends(get_db)
):
    contractor_profile = create_contractor_profile(
        db,
        profile
    )

    return {
        "message": "Contractor Profile Created Successfully",
        "id": contractor_profile.id
    }