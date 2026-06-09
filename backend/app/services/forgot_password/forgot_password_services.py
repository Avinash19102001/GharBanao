from fastapi import HTTPException

from app.utils.jwt_handler import (
    create_reset_token,
    verify_reset_token
)

from app.models.contractor_model import Contractor
from app.models.house_owner_registration import HouseOwner
from app.models.supplier_registration import Supplier

#forgot password

def forgot_password(data, db):

    print("EMAIL RECEIVED:", data.email)

    contractor = db.query(Contractor).filter(
        Contractor.email == data.email
    ).first()

    house_owner = db.query(HouseOwner).filter(
        HouseOwner.email == data.email
    ).first()

    print("Checking Supplier Table...")
    print("Email:", data.email)

    supplier = db.query(Supplier).filter(
        Supplier.email == data.email
    ).first()

    if not contractor and not house_owner and not supplier:
        raise HTTPException(
            status_code=404,
            detail="Email not found"
        )

    token = create_reset_token(data.email)

    return {
        "message": "Reset token generated",
        "token": token
    }

#reset password

def reset_password(data, db):

    email = verify_reset_token(data.token)

    if not email:
        raise HTTPException(
            status_code=401,
            detail="Invalid or Expired Token"
        )

    if data.new_password != data.confirm_password:
        raise HTTPException(
            status_code=400,
            detail="Passwords do not match"
        )

    contractor = db.query(Contractor).filter(
        Contractor.email == email
    ).first()

    if contractor:
        contractor.password = data.new_password
        db.commit()

        return {
            "message": "Contractor password updated successfully"
        }

    house_owner = db.query(HouseOwner).filter(
        HouseOwner.email == email
    ).first()

    if house_owner:
        house_owner.password = data.new_password
        db.commit()

        return {
            "message": "House Owner password updated successfully"
        }

    supplier = db.query(Supplier).filter(
        Supplier.email == email
    ).first()

    if supplier:
        supplier.password = data.new_password
        db.commit()

        return {
            "message": "Supplier password updated successfully"
        }

    raise HTTPException(
        status_code=404,
        detail="User not found"
    )
