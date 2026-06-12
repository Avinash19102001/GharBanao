from fastapi import APIRouter
from fastapi import Depends

from app.schemas.equipment_schema import EquipmentRegister

from app.dependencies.equipment_dependency import (
    get_equipment_service
)

router = APIRouter()


@router.post("/api/equipment/register")
def register_equipment(
    equipment: EquipmentRegister,
    service=Depends(get_equipment_service)
):

    service.register(equipment)

    return {
        "message": "Equipment Provider Registered Successfully",
         "data": {
            "full_name": equipment.full_name,
            "email": equipment.email,
            "equipment_type": equipment.equipment_type
        }
    }