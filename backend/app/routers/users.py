from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.utils.database import get_db
from app.schemas.users import UserCreate, UserResponse
from app.services.users import UserService


router = APIRouter()


@router.post("/users")
def create_user(
    user: UserCreate,
    db: Session = Depends(get_db)
):
    return UserService.create_user(db, user)

@router.get(
    "/users/{user_id}",
    response_model=UserResponse
)
def get_user(
    user_id: int,
    db: Session = Depends(get_db)
):
    return UserService.get_user(
        db,
        user_id
    )