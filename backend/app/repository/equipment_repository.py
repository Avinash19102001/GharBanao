from sqlalchemy.orm import Session

from app.models.equipment_model import EquipmentProvider


class EquipmentRepository:

    def __init__(self, db: Session):
        self.db = db

    def get_by_email(self, email):

        return (
            self.db.query(EquipmentProvider)
            .filter(EquipmentProvider.email == email)
            .first()
        )

    def create(self, equipment):

        self.db.add(equipment)

        self.db.commit()

        self.db.refresh(equipment)

        return equipment