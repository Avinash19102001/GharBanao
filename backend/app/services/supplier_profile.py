from sqlalchemy.orm import Session

from app.repository.supplier_profile import SupplierProfileRepository


class SupplierProfileService:

    # ---------------------------------------
    # Get Complete Supplier Profile
    # ---------------------------------------
    @staticmethod
    def get_supplier_profile(db: Session, user_id: int):

        result = SupplierProfileRepository.get_supplier_profile(
            db,
            user_id
        )

        if result is None:
            return None

        user = result["user"]
        supplier = result["supplier"]
        categories = result["categories"]
        documents = result["documents"]

        return {

            # User Details
            # "id": user.id,
            # "name": user.name,
            # "email": user.email,
            # "phone": user.phone,
            # "address": user.address,
            # "pincode": user.pincode,
            "profile_image_url": user.profile_image_url,

            # Supplier Details
            "store_name": supplier.store_name,
            "store_logo_url": supplier.store_logo_url,
            "gstin": supplier.gstin,
            "pan": supplier.pan,
            "website": supplier.website,
            "business_type": supplier.business_type,
            "registration_year": supplier.registration_year,
            "about": supplier.about,
            "delivery_location1": supplier.delivery_location1,
            "delivery_location2": supplier.delivery_location2,
            "delivery_location3": supplier.delivery_location3,

            "categories": categories,
            "documents": documents
        }

    # ---------------------------------------
    # Create Supplier Profile
    # ---------------------------------------
    @staticmethod
    def create_supplier_profile(db: Session, data):

        supplier = SupplierProfileRepository.create_supplier_profile(
            db,
            data
        )

        if data.categories:

            SupplierProfileRepository.save_categories(
                db,
                supplier.id,
                data.categories
            )

        return supplier

    # ---------------------------------------
    # Save Document
    # ---------------------------------------
    @staticmethod
    def upload_document(
        db: Session,
        supplier_id: int,
        document_type: str,
        file_name: str,
        file_url: str
    ):

        return SupplierProfileRepository.save_document(
            db,
            supplier_id,
            document_type,
            file_name,
            file_url
        )

    # ---------------------------------------
    # Update Supplier Profile
    # ---------------------------------------
    @staticmethod
    def update_supplier_profile(
        db: Session,
        user_id: int,
        data
    ):

        supplier = SupplierProfileRepository.update_supplier_profile(
            db,
            user_id,
            data
        )

        if supplier is None:
            return None

        if data.categories is not None:

            SupplierProfileRepository.delete_categories(
                db,
                supplier.id
            )

            SupplierProfileRepository.save_categories(
                db,
                supplier.id,
                data.categories
            )

        return supplier