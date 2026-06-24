from sqlalchemy import Column, Integer, String, ForeignKey
from app.utils.database import Base


class SupplierProfile(Base):
    __tablename__ = "supplier_profiles"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        unique=True,
        nullable=False
    )

    store_name = Column(String(160), nullable=False)

    categories = Column(String, nullable=False)

    about = Column(String, nullable=False)