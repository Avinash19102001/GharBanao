from app.repository.contractor_profile_repository import (
    create_profile,
    get_profile_by_user_id
)


def create_contractor_profile(
    db,
    profile_data
):
    return create_profile(
        db,
        profile_data
    )


def get_contractor_profile(
    db,
    user_id
):
    return get_profile_by_user_id(
        db,
        user_id
    )