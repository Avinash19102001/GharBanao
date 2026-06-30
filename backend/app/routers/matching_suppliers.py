from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import case

from app.utils.database import get_db
from app.models.users import User
from sqlalchemy.orm import selectinload

router = APIRouter()


@router.get("/supplier/{pincode}")
def get_matching_suppliers(pincode: str, db: Session = Depends(get_db)):

    users = (
        db.query(User)
        .options(selectinload(User.supplier_profile))  # 🔥 important
        .filter(User.role == "supplier")
        .order_by(
            case((User.pincode == pincode, 0), else_=1),
            User.pincode
        )
        .all()
    )

    if not users:
        raise HTTPException(status_code=404, detail="No suppliers found")

    result = []

    for user in users:
        profile = user.supplier_profile

        result.append({
            "id": user.id,
            "name": user.name,
            "email": user.email,
            "phone": user.phone,
            "pincode": user.pincode,

            # supplier profile data
            "store_name": profile.store_name if profile else None,
            "gstin": profile.gstin if profile else None,
            "website": profile.website if profile else None,
            "business_type": profile.business_type if profile else None
        })

    return {
        "count": len(result),
        "suppliers": result
    }