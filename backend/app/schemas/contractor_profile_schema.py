from pydantic import BaseModel, Field
from typing import Optional

class ContractorProfileCreate(BaseModel):

    first_name: str = Field(alias="firstName")
    last_name: str = Field(alias="lastName")

    phone_number: str = Field(alias="phoneNumber")

    gst_number: str = Field(alias="gstNumber")
    pan_number: str = Field(alias="panNumber")

    aadhaar_number: str = Field(alias="aadhaarNumber")

    company_registered_name: str = Field(alias="companyName")

    budget_range: str = Field(alias="typicalProjectBudget")

    projects_completed: int = Field(alias="projectsCompleted")

    years_of_experience: int = Field(alias="yearsOfExperience")

    location: str
    availability: str
    about: str

    certification_file: Optional[str] = None
    license_file: Optional[str] = None
    work_update: Optional[str] = None

    class Config:
        populate_by_name = True