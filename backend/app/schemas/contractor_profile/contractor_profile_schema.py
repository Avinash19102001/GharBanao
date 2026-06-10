from pydantic import BaseModel
from typing import Optional


class ContractorProfileCreate(BaseModel):

    first_name: str
    last_name: str

    phone_number: str

    gst_number: str
    pan_number: str

    aadhaar_number: str

    company_registered_name: str

    budget_range: str

    projects_completed: int

    years_of_experience: int

    location: str

    availability: str

    about: str

    certification_file: Optional[str] = None

    license_file: Optional[str] = None

    work_update: Optional[str] = None
