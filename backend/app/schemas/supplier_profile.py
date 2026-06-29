from typing import List, Optional

from pydantic import BaseModel, EmailStr


# -----------------------------
# Category Schema
# -----------------------------
class SupplierCategoryBase(BaseModel):
    category_name: str


class SupplierCategoryResponse(SupplierCategoryBase):
    id: int

    class Config:
        from_attributes = True


# -----------------------------
# Document Schema
# -----------------------------
class SupplierDocumentResponse(BaseModel):
    id: int
    document_type: str
    file_name: str
    file_url: str

    class Config:
        from_attributes = True


# -----------------------------
# Create Supplier Profile
# -----------------------------
class SupplierProfileCreate(BaseModel):

    user_id: int

    # User Table
    # name: str
    # email: EmailStr
    # phone: str
    # address: str
    # pincode: str

    # Supplier Table
    store_name: str

    store_logo_url: Optional[str] = None

    gstin: Optional[str] = None

    pan: Optional[str] = None

    website: Optional[str] = None

    business_type: Optional[str] = None

    registration_year: Optional[int] = None

    about: Optional[str] = None

    delivery_location1: Optional[str] = None

    delivery_location2: Optional[str] = None

    delivery_location3: Optional[str] = None

    categories: List[str] = []


# -----------------------------
# Update Supplier Profile
# -----------------------------
class SupplierProfileUpdate(BaseModel):

    # name: Optional[str] = None

    # email: Optional[EmailStr] = None

    # phone: Optional[str] = None

    # address: Optional[str] = None

    # pincode: Optional[str] = None

    store_name: Optional[str] = None

    store_logo_url: Optional[str] = None

    gstin: Optional[str] = None

    pan: Optional[str] = None

    website: Optional[str] = None

    business_type: Optional[str] = None

    registration_year: Optional[int] = None

    about: Optional[str] = None

    delivery_location1: Optional[str] = None

    delivery_location2: Optional[str] = None

    delivery_location3: Optional[str] = None

    categories: Optional[List[str]] = None


# -----------------------------
# Get Supplier Profile
# -----------------------------
class SupplierProfileResponse(BaseModel):

    # User

    # id: int

    # name: str

    # email: EmailStr

    # phone: str

    # address: str

    # pincode: str

    profile_image_url: Optional[str]

    # Supplier

    store_name: str

    store_logo_url: Optional[str]

    gstin: Optional[str]

    pan: Optional[str]

    website: Optional[str]

    business_type: Optional[str]

    registration_year: Optional[int]

    about: Optional[str]

    delivery_location1: Optional[str]

    delivery_location2: Optional[str]

    delivery_location3: Optional[str]

    categories: List[SupplierCategoryResponse]

    documents: List[SupplierDocumentResponse]

    class Config:
        from_attributes = True