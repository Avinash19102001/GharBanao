from fastapi import APIRouter
# 1. Import your Pydantic schema class

from app.schemas.house_owner_registration import (
    HouseOwnerRegister,
    HouseOwnerLogin
)
from  app.database import Base,engine

Base.metadata.create_all(bind=engine)
router = APIRouter(
    prefix="/houseOwners",
    tags=["House Owners"]
)
router = APIRouter(
    prefix="/houseOwners",
    tags=["House Owners"]
)



# 2. Add the schema as a parameter in your function
@router.post("/register")
def register_house_owner(owner_data: HouseOwnerRegister):
    # If the code reaches here, it means validation passed successfully!
    
    return {
        "status": "success",
        "message": "House Owner Registered Successfully",
        "data": {
            "fullName": owner_data.fullName,
            "email": owner_data.email,
            "mobileNumber":owner_data.mobileNumber,
            "password":owner_data.password

        },

    }
@router.post("/login")
def login_house_owner(credentials: HouseOwnerLogin):
    user_email = credentials.email
    user_password = credentials.password
    # Simulating a successful login check for now
    print(f"User attempting login: {user_email}")

    return {
        "status": "success",
        "message": "Login successful!",
        "user": {
            "email": user_email
           
        }
    }