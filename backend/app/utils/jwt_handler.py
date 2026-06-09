from jose import jwt
from datetime import datetime, timedelta

SECRET_KEY = "gharbanao_secret_key"
ALGORITHM = "HS256"

def create_reset_token(email):

    expire = datetime.utcnow() + timedelta(minutes=15)

    payload = {
        "sub": email,
        "exp": expire
    }

    return jwt.encode(
        payload,
        SECRET_KEY,
        algorithm=ALGORITHM
    )

def verify_reset_token(token):

    try:
        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )

        return payload["sub"]

    except Exception:
        return None