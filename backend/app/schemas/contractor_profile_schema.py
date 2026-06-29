from pydantic import BaseModel
from typing import Optional


# =====================================
# CREATE CONTRACTOR PROFILE
# =====================================

class ContractorProfileCreate(BaseModel):

    user_id: int

    # Existing Contractor Fields
    company_name: str
    experience_years: int
    license_number: str
    completed_projects: int = 0
    about: Optional[str] = None

    # Company Details
    gstin: Optional[str] = None
    pan: Optional[str] = None
    website: Optional[str] = None
    business_type: Optional[str] = None
    registration_year: Optional[int] = None
    team_size: Optional[str] = None

    # Services Offered
    residential_construction: bool = False
    commercial_construction: bool = False
    renovation_remodeling: bool = False
    interior_work: bool = False
    structural_work: bool = False
    plumbing_electrical: bool = False

    # Equipment Owned
    concrete_mixer: bool = False
    excavator: bool = False
    scaffolding: bool = False
    bar_bending_machine: bool = False
    concrete_vibrator: bool = False
    safety_equipment: bool = False

    # Service Location
    service_locations: Optional[str] = None

    # Insurance
    commercial_liability_insurance: bool = False


# =====================================
# RESPONSE SCHEMA
# =====================================

class ContractorProfileResponse(BaseModel):

    # Users Table
    id: int
    name: str
    email: str
    phone: str
    address: str
    pincode: str
    profile_image: Optional[str]


    gstin: Optional[str]
    pan: Optional[str]
    website: Optional[str]
    business_type: Optional[str]
    registration_year: Optional[int]
    team_size: Optional[str]

    residential_construction: bool
    commercial_construction: bool
    renovation_remodeling: bool
    interior_work: bool
    structural_work: bool
    plumbing_electrical: bool

    concrete_mixer: bool
    excavator: bool
    scaffolding: bool
    bar_bending_machine: bool
    concrete_vibrator: bool
    safety_equipment: bool

    service_locations: Optional[str]

    commercial_liability_insurance: bool

    # Uploads
    company_logo: Optional[str]
    gallery_images: Optional[str]

    business_license: Optional[str]
    company_registration: Optional[str]
    gst_certificate: Optional[str]
    pan_card: Optional[str]
    insurance_certificate: Optional[str]
    iso_certificate: Optional[str]

    class Config:
        from_attributes = True