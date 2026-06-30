from sqlalchemy import (
    Column,
    Integer,
    String,
    Numeric,
    ForeignKey
)

from app.utils.database import Base


class ProjectRequest(Base):
    __tablename__ = "project_requests"

    id = Column(Integer, primary_key=True, index=True)

    project_id = Column(
        Integer,
        ForeignKey("projects.id"),
        nullable=False
    )

    sender_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False
    )

    receiver_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False
    )

    request_type = Column(String(60))
    status = Column(String(30))
    quotation_amount = Column(Numeric(12, 2))