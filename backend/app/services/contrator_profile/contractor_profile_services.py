from app.repository.contractor_profile.contractor_profile_repository import (
    create_profile,
    update_profile_file,
    add_work_update
)


def create_contractor_profile(
    db,
    contractor_id,
    profile_data
):
    return create_profile(
        db,
        contractor_id,
        profile_data
    )


def save_profile_file(
    db,
    contractor_id,
    field_name,
    field_value
):
    return update_profile_file(
        db,
        contractor_id,
        field_name,
        field_value
    )


def save_work_update(
    db,
    contractor_id,
    work_update_data
):
    return add_work_update(
        db,
        contractor_id,
        work_update_data
    )
