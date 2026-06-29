from pydantic import BaseModel
from pydantic import BaseModel
from decimal import Decimal


class RecentRequest(BaseModel):
    project_id: int
    sender_id: int
    quotation_amount: Decimal | None = None
    status: str | None = None

    class Config:
        orm_mode = True


class DashboardStats(BaseModel):
    owner_requests: int
    supplier_requests: int
    active_projects: int
    completed_projects: int
    profile_views: int