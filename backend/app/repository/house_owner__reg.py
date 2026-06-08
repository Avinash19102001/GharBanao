from app.models.house_owner_registration import HouseOwner


class HouseOwnerRepository:

    def get_by_email(self, db, email):
        return db.query(HouseOwner).filter(
            HouseOwner.email == email
        ).first()

    def create(self, db, owner):
        db.add(owner)
        db.commit()
        db.refresh(owner)
        return owner

    def get_all_owners(self, db):
        return db.query(HouseOwner).all()