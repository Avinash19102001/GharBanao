from app.models.house_owner_registration import HouseOwner



class HouseOwnerRepository:

    def __init__(self, db):
        self.db = db

    def get_by_email(self, email):
        return self.db.query(HouseOwner).filter(
            HouseOwner.email == email
        ).first()

    def create_owner(self, owner):

        self.db.add(owner)
        self.db.commit()
        self.db.refresh(owner)

        return owner

  

    def get_all_owners(self):

        return self.db.query(HouseOwner).all()
