from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.utils.database import SessionLocal

from app.models.contractor_model import Contractor

from app.schemas.contractor_schema import (
    ContractorRegister,
    ContractorLogin
)

router = APIRouter()


def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


@router.post("/api/contractor/register")
def register_contractor(
    contractor: ContractorRegister,
    db: Session = Depends(get_db)
):

    existing = db.query(Contractor).filter(
        Contractor.email == contractor.email
    ).first()

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    if contractor.password != contractor.confirm_password:
        raise HTTPException(
            status_code=400,
            detail="Passwords do not match"
        )

    allowed_types = [
        "Residential",
        "Commercial",
        "Both"
    ]

    if contractor.project_type not in allowed_types:
        raise HTTPException(
            status_code=400,
            detail="Invalid Project Type"
        )

    new_contractor = Contractor(
        full_name=contractor.full_name,
        email=contractor.email,
        password=contractor.password,
        project_type=contractor.project_type
    )

    db.add(new_contractor)

    db.commit()

    return {
        "message": "Contractor Registered Successfully"
    }


# @router.post("/contractor/login")
# def login_contractor(
#     contractor: ContractorLogin,
#     db: Session = Depends(get_db)
# ):

#     user = db.query(Contractor).filter(
#         Contractor.email == contractor.email
#     ).first()

#     if not user:
#         raise HTTPException(
#             status_code=404,
#             detail="User not found"
#         )

#     if user.password != contractor.password:
#         raise HTTPException(
#             status_code=401,
#             detail="Invalid Password"
#         )

#     return {
#         "message": "Login Successful"
#     }