from fastapi import HTTPException

from app.models.equipment_model import EquipmentProvider


class EquipmentService:

    def __init__(self, repository):
        self.repository = repository

    def register(self, data):

        existing = self.repository.get_by_email(data.email)

        if existing:
            raise HTTPException(
                status_code=400,
                detail="Email already exists"
            )

        if data.password != data.confirm_password:
            raise HTTPException(
                status_code=400,
                detail="Passwords do not match"
            )

        equipment = EquipmentProvider(
            full_name=data.full_name,
            email=data.email,
            password=data.password,
            equipment_type=data.equipment_type
        )

        return self.repository.create(equipment)