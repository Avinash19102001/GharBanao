from app.repository.contractor_dashboard_repository import (
    get_total_projects,
    get_total_requests,
    get_recent_requests
)
def get_recent_dashboard_requests(db, contractor_id):
    return get_recent_requests(db, contractor_id)

def get_dashboard_stats(db, contractor_id):
    return {
        "total_projects": get_total_projects(db, contractor_id),
        "total_requests": get_total_requests(db, contractor_id)
    }