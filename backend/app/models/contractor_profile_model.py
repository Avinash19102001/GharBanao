from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    ForeignKey
)

from app.utils.database import Base


class ContractorProfile(Base):
    __tablename__ = "contractor_profiles"

    id = Column(Integer, primary_key=True, index=True)

    contractor_id = Column(
        Integer,
        ForeignKey("contractors.id"),
        nullable=False
    )

    first_name = Column(String(100))
    last_name = Column(String(100))

    phone_number = Column(String(20))

    gst_number = Column(String(30))
    pan_number = Column(String(20))
    aadhaar_number = Column(String(20))

    company_registered_name = Column(String(255))

    budget_range = Column(String(100))

    projects_completed = Column(Integer)

    years_of_experience = Column(Integer)

    location = Column(String(255))

    availability = Column(String(100))

    about = Column(Text)

    certification_file = Column(String(500))

    license_file = Column(String(500))

    work_update = Column(Text)
