from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.utils.database import get_db


from app.schemas.forgot_password.forgot_password_schema import (
    ForgotPasswordRequest,
    ResetPassword
)

from app.services.forgot_password.forgot_password_services import (
    forgot_password,
    reset_password
)

router = APIRouter(
    prefix="/auth",
    tags=["Forgot Password"]
)

@router.post("/forgot-password")
def forgot(data: ForgotPasswordRequest,
           db: Session = Depends(get_db)):
    return forgot_password(data, db)


@router.put("/reset-password")
def reset(data: ResetPassword,
          db: Session = Depends(get_db)):
    return reset_password(data, db)

