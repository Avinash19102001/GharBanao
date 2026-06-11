from fastapi import APIRouter, Depends, Form, File, UploadFile
from sqlalchemy.orm import Session

from app.utils.database import get_db
from app.models.supplier_profile import SupplierProfile

router = APIRouter(
    prefix="/supplier-profile",
    tags=["Supplier Profile"]
)


@router.post("/")
async def create_supplier_profile(
    first_name: str = Form(...),
    last_name: str = Form(...),

    phone_number: str = Form(...),

    company_registered_name: str = Form(...),
    gst_number: str = Form(...),

    category: str = Form(...),

    business_address: str = Form(...),
    city: str = Form(...),
    state: str = Form(...),
    pincode: str = Form(...),

    years_of_experience: str = Form(...),

    product_images: list[UploadFile] = File([]),
    gst_certificate: UploadFile = File(None),
    company_registration_certificate: UploadFile = File(None),

    db: Session = Depends(get_db)
):

    product_image_names = ",".join(
        [file.filename for file in product_images]
    ) if product_images else None

    gst_file = (
        gst_certificate.filename
        if gst_certificate else None
    )

    company_file = (
        company_registration_certificate.filename
        if company_registration_certificate else None
    )

    profile = SupplierProfile(
        first_name=first_name,
        last_name=last_name,
        phone_number=phone_number,
        company_registered_name=company_registered_name,
        gst_number=gst_number,
        category=category,
        business_address=business_address,
        city=city,
        state=state,
        pincode=pincode,
        years_of_experience=years_of_experience,
        product_images=product_image_names,
        gst_certificate=gst_file,
        company_registration_certificate=company_file
    )

    db.add(profile)
    db.commit()
    db.refresh(profile)

    return {
        "message": "Supplier Profile Created Successfully",
        "id": profile.id
    }