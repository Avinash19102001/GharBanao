from sqlalchemy import Column, Integer, String
from app.utils.database import Base


class SupplierProfile(Base):
    __tablename__ = "supplier_profiles"

    id = Column(Integer, primary_key=True, index=True)

    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)

    phone_number = Column(String, nullable=False)

    company_registered_name = Column(String, nullable=False)
    gst_number = Column(String, nullable=False)

    category = Column(String, nullable=False)

    business_address = Column(String, nullable=False)
    city = Column(String, nullable=False)
    state = Column(String, nullable=False)
    pincode = Column(String, nullable=False)

    years_of_experience = Column(String, nullable=False)

    # file paths
    product_images = Column(String, nullable=True)
    gst_certificate = Column(String, nullable=True)
    company_registration_certificate = Column(String, nullable=True)