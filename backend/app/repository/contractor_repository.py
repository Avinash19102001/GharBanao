from sqlalchemy.orm import Session
from app.models.contractor_model import User


class UserRepository:

    def __init__(self, db: Session):
        self.db = db

    def create_user(self, user_data):

        user = User(
            name=user_data.name,
            email=user_data.email,
            mobile=user_data.mobile
        )

        self.db.add(user)

        self.db.commit()

        self.db.refresh(user)

        return user

    def get_all_users(self):

        return self.db.query(User).all()