from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.utils.database import get_db
from app.models.supplier_registration import Supplier
from app.schemas.supplier_registration import SupplierCreate, SupplierLogin

router = APIRouter(
    prefix="/supplier",
    tags=["Supplier"] 
)


# =========================
# REGISTER SUPPLIER
# =========================
@router.post("/register")
def register_supplier(
    data: SupplierCreate,
    db: Session = Depends(get_db)
):

    # Check password match
    if data.password != data.confirm_password:
        raise HTTPException(
            status_code=400,
            detail="Passwords do not match"
        )

    # Check email already exists
    existing_supplier = db.query(Supplier).filter(
        Supplier.email == data.email
    ).first()

    if existing_supplier:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    # Create supplier
    supplier = Supplier(
        full_name=data.full_name,
        email=data.email,
        password=data.password,
        company_name=data.company_name
    )

    db.add(supplier)
    db.commit()
    db.refresh(supplier)

    return {
        "message": "Supplier Registered Successfully",
        "supplier_name": supplier.full_name,
        "company_name": supplier.company_name
    }


# =========================
# LOGIN SUPPLIER
# =========================
# @router.post("/login")
# def login_supplier(
#     data: SupplierLogin,
#     db: Session = Depends(get_db)
# ):

#     supplier = db.query(Supplier).filter(
#         Supplier.email == data.email
#     ).first()

#     if not supplier:
#         raise HTTPException(
#             status_code=404,
#             detail="Supplier not found"
#         )

#     if supplier.password != data.password:
#         raise HTTPException(
#             status_code=401,
#             detail="Invalid password"
#         )

#     return {
#         "message": "Login Successful",
#         "supplier_name": supplier.full_name,
#         "company_name": supplier.company_name
#     }