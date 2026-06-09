from pydantic import BaseModel, EmailStr, Field, model_validator
from datetime import date
from typing import Optional
from app.utils.database import Base,engine
Base.metadata.create_all(bind=engine)

class HouseOwnerRegister(BaseModel):
    # Personal Details
    fullName: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    mobileNumber: str = Field(..., min_length=10, max_length=15)
    password: str = Field(..., min_length=6)
    confirmPassword: str = Field(..., min_length=6)
    propertyType: str = Field(..., min_length=2)
    projectType: str = Field(..., min_length=2)
    
    @model_validator(mode="after")
    def validate_passwords(self):
     if self.password != self.confirmPassword:
        raise ValueError("Passwords do not match")
     return self


class HouseOwnerLogin(BaseModel):
    email: EmailStr
    password: str
