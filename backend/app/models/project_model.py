from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    Numeric,
    ForeignKey,
    TIMESTAMP
)

from app.utils.database import Base


class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)

    owner_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False
    )

    contractor_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=True
    )

    title = Column(String(180))
    description = Column(Text)
    address = Column(Text)
    pincode = Column(String(20))
    budget = Column(Numeric(12, 2))
    status = Column(String(40))
    completion_percentage = Column(Integer)
    created_at = Column(TIMESTAMP)