from fastapi import HTTPException

from app.models.users import User
from app.utils.jwt_handler import create_reset_token, verify_reset_token


def forgot_password(data, db):
    user = db.query(User).filter(
        User.email == data.email
    ).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="Email not found"
        )

    token = create_reset_token(data.email)

    return {
        "message": "Reset token generated",
        "token": token
    }


def reset_password(data, db):
    email = verify_reset_token(data.token)

    if not email:
        raise HTTPException(
            status_code=401,
            detail="Invalid or Expired Token"
        )

    if data.new_password != data.confirm_password:
        raise HTTPException(
            status_code=400,
            detail="Passwords do not match"
        )

    user = db.query(User).filter(
        User.email == email
    ).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    user.hashed_password = data.new_password
    db.commit()

    return {
        "message": "Password updated successfully"
    }
