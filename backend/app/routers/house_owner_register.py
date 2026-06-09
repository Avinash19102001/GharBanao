from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.utils.database import get_db
from app.schemas.house_owner_registration import (
    HouseOwnerRegister,
    HouseOwnerLogin
)
from app.models.house_owner_registration import HouseOwner
from app.services.house_owner_reg import service
router = APIRouter(
    prefix="/houseOwners",
    tags=["House Owners"]
)


@router.post("/register")
def register_house_owner(
    owner_data: HouseOwnerRegister,
    db: Session = Depends(get_db)
):
    return service.register_owner(
        db,
        owner_data
    )


# @router.post("/login")
# def login_house_owner(
#     credentials: HouseOwnerLogin,
#     db: Session = Depends(get_db)
# ):
#     return service.login_owner(
#         db,
#         credentials
#     )