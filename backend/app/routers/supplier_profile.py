from fastapi import APIRouter, Depends, Form, File, UploadFile
from sqlalchemy.orm import Session
import os
import shutil

from app.utils.database import get_db
from app.models.supplier_profile import SupplierProfile


router = APIRouter(
    prefix="/supplier-profile",
    tags=["Supplier Profile"]
)


# Folder where uploaded files will be stored
UPLOAD_DIR = "uploads"

os.makedirs(
    UPLOAD_DIR,
    exist_ok=True
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

    # -----------------------------
    # Save product images
    # -----------------------------

    product_image_names = []

    for file in product_images:

        file_path = os.path.join(
            UPLOAD_DIR,
            file.filename
        )

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(
                file.file,
                buffer
            )

        product_image_names.append(
            file.filename
        )


    product_images_string = ",".join(
        product_image_names
    ) if product_image_names else None



    # -----------------------------
    # Save GST certificate
    # -----------------------------

    gst_file = None

    if gst_certificate:

        gst_file = gst_certificate.filename

        file_path = os.path.join(
            UPLOAD_DIR,
            gst_file
        )

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(
                gst_certificate.file,
                buffer
            )



    # -----------------------------
    # Save Company certificate
    # -----------------------------

    company_file = None

    if company_registration_certificate:

        company_file = (
            company_registration_certificate.filename
        )

        file_path = os.path.join(
            UPLOAD_DIR,
            company_file
        )

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(
                company_registration_certificate.file,
                buffer
            )



    # -----------------------------
    # Save profile data in DB
    # -----------------------------

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

        product_images=product_images_string,

        gst_certificate=gst_file,

        company_registration_certificate=company_file
    )


    db.add(profile)

    db.commit()

    db.refresh(profile)



    return {

        "message": "Supplier Profile Created Successfully",

        "id": profile.id,

        "uploaded_files": {

            "product_images": product_images_string,

            "gst_certificate": gst_file,

            "company_certificate": company_file
        }
    }