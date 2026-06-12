from fastapi import APIRouter, Depends, HTTPException,Response
from sqlalchemy.orm import Session

from app.utils.database import get_db
from app.schemas.login_schema import LoginSchema

from app.models.house_owner_registration import HouseOwner
from app.models.contractor_model import Contractor
from app.models.supplier_registration import Supplier
from app.models.equipment_model import EquipmentProvider
from app.models.auth_model import Login
from app.repository.login_repository import LoginRepository

from app.utils.jwt import create_access_token

router = APIRouter(prefix="/auth", tags=["Auth"])


@router.post("/login")
def login(data: LoginSchema, 
           response: Response,db: Session = Depends(get_db)):

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
        LoginRepository.save_login(
        db,
        user.email,
        user.password,
        "house_owner"
    )
        response.set_cookie(
        key="access_token",
        value=token,
        httponly=True,
        samesite="lax",
        secure=False
    )
    
        return {
            "message": "Login successful",
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
        LoginRepository.save_login(
        db,
        user.email,
        user.password,
        "supplier"
    )
        response.set_cookie(
        key="access_token",
        value=token,
        httponly=True,
        samesite="lax",
        secure=False
    )
        return {
             "message": "Login successful",
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
        LoginRepository.save_login(
        db,
        user.email,
        user.password,
        "equipment_provider"
    )
        response.set_cookie(
        key="access_token",
        value=token,
        httponly=True,
        samesite="lax",
        secure=False
    )

        return {
             "message": "Login successful",
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
        response.set_cookie(
        key="access_token",
        value=token,
        httponly=True,
        samesite="lax",
        secure=False
    )
        return {
            "message": "Login successful",
            "role": "EquipmentProvider"
        }

    # ---------------- INVALID ----------------
    raise HTTPException(
        status_code=401,
        detail="Invalid credentials"
    )
  