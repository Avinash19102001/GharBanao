from sqlalchemy import Column, Integer, String, Text, Date
from app.utils.database import Base


class Profile(Base):
    __tablename__ = "house_owners_profiles"

    id = Column(Integer, primary_key=True, index=True)

    first_name = Column(String(100), nullable=False)
    last_name = Column(String(100), nullable=False)

    mobile = Column(String(15), nullable=False)
    email = Column(String(255), unique=True, nullable=False)

    address = Column(Text, nullable=False)

    pincode = Column(String(10), nullable=False)
    state = Column(String(100), nullable=False)
    city = Column(String(100), nullable=False)

    gender = Column(String(20), nullable=False)

    dob = Column(Date, nullable=False)

    property_type = Column(String(100), nullable=False)
    project_type = Column(String(100), nullable=False)

    media_file = Column(String(255), nullable=True)