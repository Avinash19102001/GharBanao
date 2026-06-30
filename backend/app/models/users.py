from sqlalchemy import Column, Integer, String, Text, Float, DateTime
from datetime import datetime
from app.utils.database import Base
from sqlalchemy.orm import relationship


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(150), nullable=False)
    email = Column(String(255), nullable=False, index=True)
    phone = Column(String(30), unique=True, nullable=False)
    hashed_password = Column(String(255), nullable=False)
    role = Column(String(30), nullable=False)
    address = Column(Text)
    pincode = Column(String(20))
    rating = Column(Float, default=0.0)
    profile_image_url = Column(String(500))
    created_at = Column(DateTime, default=datetime.utcnow)
    supplier_profile = relationship(
    "SupplierProfile",
    back_populates="user",
    uselist=False
    ) 
    contractor_profile = relationship(
    "ContractorProfile",
    back_populates="user",
    uselist=False
)