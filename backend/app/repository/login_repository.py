from datetime import datetime
from app.models.auth_model import Login

class LoginRepository:

    @staticmethod
    def save_login(db, email, password, role):
        login_record = Login(
            email=email,
            password_hash=password,
            role=role,
            last_login=datetime.utcnow()
        )

        db.add(login_record)
        db.commit()
        db.refresh(login_record)
        return login_record