from sqlalchemy import text
import json

from app.models.contractor_profile.contractor_profile_model import ContractorProfile


def ensure_profile_columns(db):
    db.execute(text(
        "ALTER TABLE contractor_profiles "
        "ADD COLUMN IF NOT EXISTS certification_file VARCHAR(500)"
    ))
    db.execute(text(
        "ALTER TABLE contractor_profiles "
        "ADD COLUMN IF NOT EXISTS license_file VARCHAR(500)"
    ))
    db.execute(text(
        "ALTER TABLE contractor_profiles "
        "ADD COLUMN IF NOT EXISTS work_update TEXT"
    ))
    db.commit()


def get_or_create_profile(
    db,
    contractor_id
):
    ensure_profile_columns(db)

    profile = db.query(ContractorProfile).filter(
        ContractorProfile.contractor_id == contractor_id
    ).first()

    if profile:
        return profile

    profile = ContractorProfile(
        contractor_id=contractor_id
    )

    db.add(profile)

    db.commit()

    db.refresh(profile)

    return profile


def create_profile(
    db,
    contractor_id,
    profile_data
):
    ensure_profile_columns(db)

    profile = db.query(ContractorProfile).filter(
        ContractorProfile.contractor_id == contractor_id
    ).first()

    data = profile_data.dict()

    if profile:
        for key, value in data.items():
            setattr(profile, key, value)
    else:
        profile = ContractorProfile(
            contractor_id=contractor_id,
            **data
        )

        db.add(profile)

    db.commit()

    db.refresh(profile)

    return profile


def update_profile_file(
    db,
    contractor_id,
    field_name,
    field_value
):
    profile = get_or_create_profile(
        db,
        contractor_id
    )

    setattr(
        profile,
        field_name,
        field_value
    )

    db.commit()

    db.refresh(profile)

    return profile


def add_work_update(
    db,
    contractor_id,
    work_update_data
):
    profile = get_or_create_profile(
        db,
        contractor_id
    )

    try:
        work_updates = json.loads(profile.work_update or "[]")
    except json.JSONDecodeError:
        work_updates = []

    work_updates.append(work_update_data)

    profile.work_update = json.dumps(work_updates)

    db.commit()

    db.refresh(profile)

    return profile
