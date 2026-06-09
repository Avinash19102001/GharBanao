from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.utils.database import get_db
from app.schemas.login_schema import LoginSchema

from app.models.house_owner_registration import HouseOwner
from app.models.contractor_model import Contractor
from app.models.supplier_registration import Supplier
from app.models.equipment_model import EquipmentProvider

from app.utils.jwt import create_access_token

router = APIRouter(prefix="/auth", tags=["Auth"])


@router.post("/login")
def login(data: LoginSchema, db: Session = Depends(get_db)):

    # ---------------- HOUSE OWNER ----------------
    user = db.query(HouseOwner).filter(
        HouseOwner.email == data.email,
        HouseOwner.password == data.password
    ).first()

    if user:
        token = create_access_token({
            "user_id": user.id,
            "role": "house_owner",
            "email": user.email
        })
        return {
            "access_token": token,
            "token_type": "bearer",
            "role": "house_owner"
        }

    # ---------------- CONTRACTOR ----------------
    user = db.query(Contractor).filter(
        Contractor.email == data.email,
        Contractor.password == data.password
    ).first()

    if user:
        token = create_access_token({
            "user_id": user.id,
            "role": "contractor",
            "email": user.email
        })
        return {
            "access_token": token,
            "token_type": "bearer",
            "role": "contractor"
        }

    # ---------------- SUPPLIER ----------------
    user = db.query(Supplier).filter(
        Supplier.email == data.email,
        Supplier.password == data.password
    ).first()

    if user:
        token = create_access_token({
            "user_id": user.id,
            "role": "supplier",
            "email": user.email
        })
        return {
            "access_token": token,
            "token_type": "bearer",
            "role": "supplier"
        }


   # ---------------- equipment ----------------
    user = db.query(EquipmentProvider).filter(
        EquipmentProvider.email == data.email,
        EquipmentProvider.password == data.password
    ).first()

    if user:
        token = create_access_token({
            "user_id": user.id,
            "role": "supplier",
            "email": user.email
        })
        return {
            "access_token": token,
            "token_type": "bearer",
            "role": "EquipmentProvider"
        }

    # ---------------- INVALID ----------------
    raise HTTPException(
        status_code=401,
        detail="Invalid credentials"
    )