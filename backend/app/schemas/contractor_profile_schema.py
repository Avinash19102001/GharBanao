from pydantic import BaseModel


class ContractorProfileCreate(BaseModel):
    user_id: int
    company_name: str
    license_number: str
    experience_years: int
    completed_projects: int
    about: str