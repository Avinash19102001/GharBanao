from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends, HTTPException

from app.utils.database import get_db
from app.schemas.House_owner_profile import ProfileCreate
from app.models.house_owner_profile import Profile

router = APIRouter(prefix="/house_owner", tags=["Profile"])


@router.post("/profile")
def create_profile(profile: ProfileCreate, db: Session = Depends(get_db)):

    new_profile = Profile(
    user_id=profile.user_id,
    building_type=profile.building_type,
    construction_type=profile.construction_type,
    budget=profile.budget,
    land_area=profile.land_area,
    floors=profile.floors,
    project_title=profile.project_title,
    project_description=profile.project_description,
    profile_image_url=profile.profile_image_url,
    start_timeline=profile.start_timeline
)

    db.add(new_profile)
    db.commit()
    db.refresh(new_profile)

    return {
    "id": new_profile.id,
    "user_id": new_profile.user_id,
    "building_type": new_profile.building_type,
    "construction_type": new_profile.construction_type,
    "budget": new_profile.budget,
    "land_area": new_profile.land_area,
    "floors": new_profile.floors,
    "project_title": new_profile.project_title,
    "project_description": new_profile.project_description,
    "profile_image_url": new_profile.profile_image_url,
    "start_timeline": new_profile.start_timeline
}
@router.get("/profile/{id}")
def get_profile(id: int, db: Session = Depends(get_db)):
    profile = db.query(Profile).filter(Profile.id == id).first()

    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")

    return {
        "id": new_profile.id,
        "email": profile.email,
        "property_type": profile.property_type,
        "project_type": profile.project_type
    }