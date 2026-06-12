from sqlalchemy.orm import Session
from app.models.contractor_model import Contractor


class UserRepository:

    def __init__(self, db: Session):
        self.db = db

    def create_user(self, user_data):

        user = Contractor(
            name=user_data.name,
            email=user_data.email,
            mobile=user_data.mobile
        )

        self.db.add(Contractor)

        self.db.commit()

        self.db.refresh(Contractor)

        return user

    def get_all_users(self):

        return self.db.query(Contractor).all()