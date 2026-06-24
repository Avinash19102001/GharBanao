from sqlalchemy.orm import Session

from app.models.supplier_profile import SupplierProfile
from app.schemas.supplier_profile import SupplierProfileCreate


class SupplierProfileRepository:

    @staticmethod
    def create_supplier_profile(
        db: Session,
        supplier: SupplierProfileCreate
    ):

        profile = SupplierProfile(
            user_id=supplier.user_id,
            store_name=supplier.store_name,
            categories=supplier.categories,
            about=supplier.about
        )

        db.add(profile)
        db.commit()
        db.refresh(profile)

        return profile