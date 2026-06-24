from sqlalchemy import Column, Integer, String, Text, ForeignKey
from app.utils.database import Base


class ContractorProfile(Base):
    __tablename__ = "contractor_profiles"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        unique=True,
        nullable=False
    )

    company_name = Column(String(160))
    license_number = Column(String(100))
    experience_years = Column(Integer)
    completed_projects = Column(Integer)
    about = Column(Text)