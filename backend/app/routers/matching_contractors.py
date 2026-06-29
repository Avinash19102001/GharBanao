from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session, selectinload
from sqlalchemy import case

from app.utils.database import get_db
from app.models.users import User

router = APIRouter()


@router.get("/contractor/{pincode}")
def get_matching_contractors(pincode: str, db: Session = Depends(get_db)):

    users = (
        db.query(User)
        .options(selectinload(User.contractor_profile))
        .filter(User.role == "contractor")
        .order_by(
            case((User.pincode == pincode, 0), else_=1),
            User.pincode
        )
        .all()
    )

    if not users:
        raise HTTPException(
            status_code=404,
            detail="No contractors found."
        )

    result = []

    for user in users:
        profile = user.contractor_profile

        result.append({
            "id": user.id,
            "name": user.name,
            "email": user.email,
            "phone": user.phone,
            "address": user.address,
            "pincode": user.pincode,
            "profile_image_url": user.profile_image_url,

            # Contractor profile data
            "company_name": profile.company_name if profile else None,
            "experience": profile.experience if profile else None,
            "license_number": profile.license_number if profile else None,
            "specialization": profile.specialization if profile else None,
            "website": profile.website if profile else None,
        })

    return {
        "count": len(result),
        "contractors": result
    }