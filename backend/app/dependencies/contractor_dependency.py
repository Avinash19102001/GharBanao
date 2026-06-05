from fastapi import Depends
from sqlalchemy.orm import Session

from backend.app.database import get_db

from backend.app.repository.contractor_repository import UserRepository

from backend.app.services.contractor_service import UserService


def get_user_repository(
    db: Session = Depends(get_db)
):

    return UserRepository(db)


def get_user_service(
    repository: UserRepository = Depends(
        get_user_repository
    )
):

    return UserService(repository)