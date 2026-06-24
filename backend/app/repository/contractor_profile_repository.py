from app.models.contractor_profile_model import ContractorProfile


def create_profile(db, profile_data):
    profile = ContractorProfile(**profile_data.dict())

    db.add(profile)
    db.commit()
    db.refresh(profile)

    return profile


def get_profile_by_user_id(db, user_id):
    return db.query(ContractorProfile).filter(
        ContractorProfile.user_id == user_id
    ).first()