from sqlalchemy.orm import Session

from app.models.users import User
from app.models.supplier_profile import SupplierProfile
from app.models.supplier_category import SupplierCategory
from app.models.supplier_document import SupplierDocument


class SupplierProfileRepository:

    # ---------------------------------------
    # Get Complete Supplier Profile
    # ---------------------------------------
    @staticmethod
    def get_supplier_profile(db: Session, user_id: int):

        user = db.query(User).filter(User.id == user_id).first()

        if not user:
            return None

        supplier = (
            db.query(SupplierProfile)
            .filter(SupplierProfile.user_id == user_id)
            .first()
        )

        if not supplier:
            return None

        categories = (
            db.query(SupplierCategory)
            .filter(
                SupplierCategory.supplier_id == supplier.id
            )
            .all()
        )

        documents = (
            db.query(SupplierDocument)
            .filter(
                SupplierDocument.supplier_id == supplier.id
            )
            .all()
        )

        return {
            "user": user,
            "supplier": supplier,
            "categories": categories,
            "documents": documents
        }

    # ---------------------------------------
    # Create Supplier Profile
    # ---------------------------------------
    @staticmethod
    def create_supplier_profile(
        db: Session,
        data
    ):

        supplier = SupplierProfile(

            user_id=data.user_id,

            store_name=data.store_name,

            store_logo_url=data.store_logo_url,

            gstin=data.gstin,

            pan=data.pan,

            website=data.website,

            business_type=data.business_type,

            registration_year=data.registration_year,

            about=data.about,

            delivery_location1=data.delivery_location1,

            delivery_location2=data.delivery_location2,

            delivery_location3=data.delivery_location3,
        )

        db.add(supplier)

        db.commit()

        db.refresh(supplier)
        

        return supplier

    # ---------------------------------------
    # Save Categories
    # ---------------------------------------
    @staticmethod
    def save_categories(
        db: Session,
        supplier_id: int,
        categories: list
    ):

        for category in categories:

            db.add(
                SupplierCategory(
                    supplier_id=supplier_id,
                    category_name=category
                )
            )

        db.commit()

    # ---------------------------------------
    # Save Documents
    # ---------------------------------------
    @staticmethod
    def save_document(
        db: Session,
        supplier_id: int,
        document_type: str,
        file_name: str,
        file_url: str
    ):

        document = SupplierDocument(

            supplier_id=supplier_id,

            document_type=document_type,

            file_name=file_name,

            file_url=file_url

        )

        db.add(document)

        db.commit()

        db.refresh(document)

        return document

    # ---------------------------------------
    # Update Supplier Profile
    # ---------------------------------------
    @staticmethod
    def update_supplier_profile(
        db: Session,
        user_id: int,
        data
    ):

        supplier = (
            db.query(SupplierProfile)
            .filter(
                SupplierProfile.user_id == user_id
            )
            .first()
        )

        if supplier is None:
            return None

        update_data = data.dict(
            exclude_unset=True
        )

        for key, value in update_data.items():

            if hasattr(supplier, key):

                setattr(
                    supplier,
                    key,
                    value
                )

        db.commit()

        db.refresh(supplier)

        return supplier

    # ---------------------------------------
    # Delete Old Categories
    # ---------------------------------------
    @staticmethod
    def delete_categories(
        db: Session,
        supplier_id: int
    ):

        db.query(
            SupplierCategory
        ).filter(
            SupplierCategory.supplier_id == supplier_id
        ).delete()

        db.commit()