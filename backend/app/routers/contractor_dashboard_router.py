from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.utils.database import get_db
from app.services.contractor_dashboard_service import get_dashboard_stats
from app.services.contractor_dashboard_service import (
    get_dashboard_stats,
    get_recent_dashboard_requests
)

router = APIRouter(
    prefix="/contractor-dashboard",
    tags=["Contractor Dashboard"]
)

@router.get("/stats")
def dashboard_stats(
    contractor_id: int,
    db: Session = Depends(get_db)
):
    return get_dashboard_stats(
        db,
        contractor_id
    )
@router.get("/recent-requests")
def recent_requests(
    contractor_id: int,
    db: Session = Depends(get_db)
):
    return get_recent_dashboard_requests(
        db,
        contractor_id
    )