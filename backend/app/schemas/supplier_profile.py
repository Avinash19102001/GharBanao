from pydantic import BaseModel


class SupplierProfileCreate(BaseModel):
    user_id: int
    store_name: str
    categories: str
    about: str