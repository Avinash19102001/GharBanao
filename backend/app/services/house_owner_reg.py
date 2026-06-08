from app.repository.house_owner__reg import HouseOwner
from app.models.house_owner_registration import HouseOwner


class HouseOwnerService:

    def register_owner(self, db, owner_data):

        existing_owner = repo.get_by_email(
            db,
            owner_data.email
        )

        if existing_owner:
            return {
                "success": False,
                "message": "Email already exists"
            }

        owner = HouseOwner(
            fullName=owner_data.fullName,
            email=owner_data.email,
            mobileNumber=owner_data.mobileNumber,
            password=owner_data.password,
            propertyType=owner_data.propertyType,
            projectType=owner_data.projectType
        )

        saved_owner = repo.create(
            db,
            owner
        )

        return {
            "success": True,
            "message": "Registration successful",
            "owner_id": saved_owner.id
        }

    def login_owner(self, db, login_data):

        owner = repo.get_by_email(
            db,
            login_data.email
        )

        if not owner:
            return {
                "success": False,
                "message": "Invalid Email"
            }

        if owner.password != login_data.password:
            return {
                "success": False,
                "message": "Invalid Password"
            }

        return {
            "success": True,
            "message": "Login Successful"
        }


service = HouseOwnerService()