from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from app.utils.database import Base


class SupplierCategory(Base):
    __tablename__ = "supplier_categories"

    id = Column(Integer, primary_key=True, index=True)

    supplier_id = Column(
        Integer,
        ForeignKey("supplier_profiles.id", ondelete="CASCADE"),
        nullable=False
    )

    category_name = Column(String(100), nullable=False)

    supplier = relationship(
        "SupplierProfile",
        back_populates="category_list"
    )