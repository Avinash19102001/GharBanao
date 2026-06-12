from sqlalchemy import Column, Integer, String
from app.utils.database import Base

class EquipmentProvider(Base):
    __tablename__ = "equipment_providers"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(100))
    email = Column(String(100), unique=True)
    password = Column(String(255))
    equipment_type = Column(String(100))