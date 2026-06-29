from sqlalchemy import (
    Column,
    Integer,
    String,
    ForeignKey,
    Text
)
from sqlalchemy.orm import relationship

from app.utils.database import Base


class SupplierProfile(Base):
    __tablename__ = "supplier_profiles"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        unique=True,
        nullable=False
    )

    # Existing Fields
    store_name = Column(String(160), nullable=False)
    categories = Column(Text)
    about = Column(Text)

    # New Fields
    store_logo_url = Column(String(500))

    gstin = Column(String(30))

    pan = Column(String(20))

    website = Column(String(255))

    business_type = Column(String(100))

    registration_year = Column(Integer)

    delivery_location1 = Column(String(255))

    delivery_location2 = Column(String(255))

    delivery_location3 = Column(String(255))

    # Relationships
    category_list = relationship(
        "SupplierCategory",
        back_populates="supplier",
        cascade="all, delete-orphan"
    )

    documents = relationship(
        "SupplierDocument",
        back_populates="supplier",
        cascade="all, delete-orphan"
    )