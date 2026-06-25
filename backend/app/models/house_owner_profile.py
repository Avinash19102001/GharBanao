from sqlalchemy import Column, Integer, String, Text, Float, Numeric, ForeignKey
from app.utils.database import Base

class Profile(Base):
    __tablename__ = "owner_profiles"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        unique=True
    )

    building_type = Column(String(60))

    construction_type = Column(String(60))

    budget = Column(Numeric(12, 2))

    land_area = Column(Float)

    floors = Column(Integer)

    project_title = Column(String(180))

    project_description = Column(Text)
    profile_image_url = Column(String(500))
    start_timeline = Column(String(100))