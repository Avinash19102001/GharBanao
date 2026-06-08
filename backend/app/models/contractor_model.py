from sqlalchemy import Column, Integer, String

from app.utils.database import Base


class Contractor(Base):

    __tablename__ = "contractors"

    id = Column(Integer, primary_key=True, index=True)

    full_name = Column(String(100))

    email = Column(String(100), unique=True)

    password = Column(String(255))

    project_type = Column(String(50))