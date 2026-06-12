from fastapi import Depends

from sqlalchemy.orm import Session

from app.utils.database import get_db

from app.repository.equipment_repository import EquipmentRepository

from app.services.equipment_service import EquipmentService


def get_equipment_repository(
    db: Session = Depends(get_db)
):
    return EquipmentRepository(db)


def get_equipment_service(
    repository=Depends(get_equipment_repository)
):
    return EquipmentService(repository)