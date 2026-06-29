from app.models.project_request_model import ProjectRequest
from app.models.project_model import Project
def get_recent_requests(db, contractor_id):
    return (
        db.query(ProjectRequest)
        .filter(ProjectRequest.receiver_id == contractor_id)
        .order_by(ProjectRequest.id.desc())
        .limit(5)
        .all()
    )


def get_total_projects(db, contractor_id):
    return db.query(Project).filter(
        Project.contractor_id == contractor_id
    ).count()


def get_total_requests(db, contractor_id):
    return db.query(ProjectRequest).filter(
        ProjectRequest.receiver_id == contractor_id
    ).count()

