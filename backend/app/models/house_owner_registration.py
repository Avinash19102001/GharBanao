from sqlalchemy import Column, Integer, String
from app.utils.database import Base

class HouseOwner(Base):
    __tablename__ = "house_owners"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(100), nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    password = Column(String(255), nullable=False)
    propertyType = Column(String, nullable=False)
    projectType = Column(String, nullable=False)