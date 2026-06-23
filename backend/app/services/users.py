from app.models.users import User
from app.repository.users import UserRepository


class UserService:

    @staticmethod
    def create_user(db, user_data):

        existing_user = UserRepository.get_by_email(
            db,
            user_data.email
        )

        if existing_user:
            raise Exception("Email already exists")

        user = User(
            name=user_data.name,
            email=user_data.email,
            phone=user_data.phone,
            hashed_password=user_data.password,
            role=user_data.role,
            address=user_data.address,
            pincode=user_data.pincode
        )

        return UserRepository.create(db, user)