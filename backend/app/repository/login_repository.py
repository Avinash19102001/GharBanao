from datetime import datetime
from app.models.auth_model import Login

from datetime import datetime
from app.models.auth_model import Login

class LoginRepository:

    @staticmethod
    def save_login(db, email, role):

        login_record = db.query(Login).filter(
            Login.email == email
        ).first()

        if login_record:
            login_record.last_login = datetime.utcnow()
            login_record.role = role
        else:
            login_record = Login(
                email=email,
                role=role,
                last_login=datetime.utcnow()
            )
            db.add(login_record)

        db.commit()
        db.refresh(login_record)
        return login_record