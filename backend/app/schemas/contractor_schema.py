from pydantic import BaseModel
from pydantic import EmailStr


class ContractorRegister(BaseModel):

    full_name: str

    email: EmailStr

    password: str

    confirm_password: str

    project_type: str


class ContractorLogin(BaseModel):

    email: EmailStr

    password: str