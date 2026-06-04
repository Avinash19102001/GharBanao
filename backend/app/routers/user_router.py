from fastapi import APIRouter
from fastapi import Depends

from app.schemas.user_schema import (
    UserCreate,
    UserResponse
)

from app.services.user_service import UserService

from app.dependencies.user_dependency import (
    get_user_service
)

router = APIRouter(
    prefix="/users",
    tags=["Users"]
)


@router.post(
    "/",
    response_model=UserResponse
)
def create_user(
    user: UserCreate,
    service: UserService = Depends(
        get_user_service
    )
):

    return service.create_user(user)


@router.get("/")
def get_users(
    service: UserService = Depends(
        get_user_service
    )
):

    return service.get_all_users()