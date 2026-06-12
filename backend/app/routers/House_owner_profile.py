from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.utils.database import get_db
from app.schemas.House_owner_profile import ProfileCreate
from app.models.house_owner_profile import Profile

router = APIRouter(prefix="/house_owner", tags=["Profile"])


@router.post("/profile")
def create_profile(profile: ProfileCreate, db: Session = Depends(get_db)):

    new_profile = Profile(
        first_name=profile.first_name,
        last_name=profile.last_name,
        mobile=profile.mobile,
        email=profile.email,
        address=profile.address,
        pincode=profile.pincode,
        state=profile.state,
        city=profile.city,
        gender=profile.gender,
        dob=profile.dob,
        property_type=profile.property_type,
        project_type=profile.project_type,
        media_file=profile.media_file
    )

    db.add(new_profile)
    db.commit()
    db.refresh(new_profile)

    return new_profile