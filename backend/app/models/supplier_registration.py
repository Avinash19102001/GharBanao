from sqlalchemy import Column, Integer, String
from app.utils.database import Base


from app.utils.database import Base


Base = declarative_base()

class Supplier(Base):
    __tablename__ = "suppliers"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    company_name = Column(String, nullable=False)