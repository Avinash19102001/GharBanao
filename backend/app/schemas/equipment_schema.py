from pydantic import BaseModel, EmailStr


class EquipmentRegister(BaseModel):

    full_name: str

    email: EmailStr

    password: str

    confirm_password: str

    equipment_type: str


class EquipmentLogin(BaseModel):

    email: EmailStr

    password: str