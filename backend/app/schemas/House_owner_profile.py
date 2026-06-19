from pydantic import BaseModel, EmailStr
from datetime import date
from typing import Optional


class ProfileCreate(BaseModel):
    first_name: str
    last_name: str

    mobile: str
    email: EmailStr

    address: str

    pincode: str
    state: str
    city: str

    gender: str

    dob: date

    property_type: str
    project_type: str

    media_files: Optional[str] = None