from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    Boolean,
    ForeignKey
)

from app.utils.database import Base


class ContractorProfile(Base):
    __tablename__ = "contractor_profiles"

    id = Column(Integer, primary_key=True, index=True)

    # Foreign Key
    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        unique=True,
        nullable=False
    )

    # Existing Contractor Columns
    company_name = Column(String(160))
    license_number = Column(String(100))
    experience_years = Column(Integer)
    completed_projects = Column(Integer)
    about = Column(Text)

    # Company Details
    gstin = Column(String(50))
    pan = Column(String(20))
    website = Column(String(255))
    business_type = Column(String(100))
    registration_year = Column(Integer)
    team_size = Column(String(50))

    # Services Offered
    residential_construction = Column(Boolean, default=False)
    commercial_construction = Column(Boolean, default=False)
    renovation_remodeling = Column(Boolean, default=False)
    interior_work = Column(Boolean, default=False)
    structural_work = Column(Boolean, default=False)
    plumbing_electrical = Column(Boolean, default=False)

    # Equipment Owned
    concrete_mixer = Column(Boolean, default=False)
    excavator = Column(Boolean, default=False)
    scaffolding = Column(Boolean, default=False)
    bar_bending_machine = Column(Boolean, default=False)
    concrete_vibrator = Column(Boolean, default=False)
    safety_equipment = Column(Boolean, default=False)

    # Service Locations
    service_locations = Column(Text)

    # Insurance
    commercial_liability_insurance = Column(
        Boolean,
        default=False
    )

    # Uploaded File Paths
    company_logo = Column(String(500))
    gallery_images = Column(String(500))

    business_license = Column(String(500))
    company_registration = Column(String(500))
    gst_certificate = Column(String(500))
    pan_card = Column(String(500))
    insurance_certificate = Column(String(500))
    iso_certificate = Column(String(500))