from pydantic import BaseModel 



class SupplierCreate(BaseModel):
    full_name: str
    email: str
    password: str
    confirm_password: str
    company_name: str

class SupplierLogin(BaseModel):
    email: str
    password: str