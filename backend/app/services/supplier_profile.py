from sqlalchemy.orm import Session

from app.schemas.supplier_profile import SupplierProfileCreate
from app.repository.supplier_profile import SupplierProfileRepository


class SupplierProfileService:

    @staticmethod
    def create_supplier_profile(
        db: Session,
        supplier: SupplierProfileCreate
    ):

        return SupplierProfileRepository.create_supplier_profile(
            db,
            supplier
        )