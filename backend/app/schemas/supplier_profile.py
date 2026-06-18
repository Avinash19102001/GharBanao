from pydantic import BaseModel
from typing import Optional


class SupplierProfileCreate(BaseModel):
    first_name: str
    last_name: str

    phone_number: str

    company_registered_name: str
    gst_number: str

    category: str

    business_address: str
    city: str
    state: str
    pincode: str

    years_of_experience: str

    product_images: Optional[str] = None
    gst_certificate: Optional[str] = None
    company_registration_certificate: Optional[str] = None