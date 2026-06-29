from sqlalchemy import (
    Column,
    Integer,
    String,
    ForeignKey,
    DateTime
)
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.utils.database import Base


class SupplierDocument(Base):
    __tablename__ = "supplier_documents"

    id = Column(Integer, primary_key=True, index=True)

    supplier_id = Column(
        Integer,
        ForeignKey("supplier_profiles.id", ondelete="CASCADE"),
        nullable=False
    )

    # Document Type
    # Example:
    # Shop License
    # GST Certificate
    # PAN Card
    # Trade License
    # Material Quality Certificate
    # Insurance Certificate
    document_type = Column(String(100), nullable=False)

    # Original uploaded filename
    file_name = Column(String(255), nullable=False)

    # File URL / Path
    file_url = Column(String(500), nullable=False)

    # Upload timestamp
    uploaded_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    supplier = relationship(
        "SupplierProfile",
        back_populates="documents"
    )