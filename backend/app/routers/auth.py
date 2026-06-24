from app.models.users import User
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
def login(data: LoginSchema, response: Response, db: Session = Depends(get_db)):

    user = db.query(User).filter(User.email == data.email).first()

    if not user or user.hashed_password != data.password:  # replace with hash check
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_access_token({
        "user_id": user.id,
        "role": user.role,
        "email": user.email
    })

    LoginRepository.save_login(db, user.email, user.role)

    response.set_cookie(
        key="access_token",
        value=token,
        httponly=True,
        samesite="lax",
        secure=False
    )

    return {
        "message": "Login successful",
        "role": user.role
    }