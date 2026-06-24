from pydantic import BaseModel
from typing import Optional

class ProfileCreate(BaseModel):
    user_id: int

    building_type: str
    construction_type: str

    budget: float
    land_area: float

    floors: int

    project_title: str

    project_description: Optional[str] = None