from fastapi import APIRouter, Depends, UploadFile, File, Form, HTTPException
from sqlalchemy.orm import Session
from app.utils.database import get_db

from app.models.contractor_profile_model import ContractorProfile
from app.models.users import User

import os
import shutil

router = APIRouter(
    prefix="/contractor-profile",
    tags=["Contractor Profile"]
)

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


def save_file(file: UploadFile, folder: str):
    if not file:
        return None

    os.makedirs(folder, exist_ok=True)

    file_path = os.path.join(
        folder,
        file.filename
    )

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(
            file.file,
            buffer
        )

    return file_path


@router.get("/{user_id}")
def get_contractor_profile(
    user_id: int,
    db: Session = Depends(get_db)
):

    user = db.query(User).filter(
        User.id == user_id
    ).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    profile = db.query(
        ContractorProfile
    ).filter(
        ContractorProfile.user_id == user_id
    ).first()

    if not profile:
        raise HTTPException(
            status_code=404,
            detail="Contractor profile not found"
        )

    return {

        # Users Table

        "name": user.name,
        "email": user.email,
        "phone": user.phone,
        "address": user.address,
        "pincode": user.pincode,
        "profile_image": user.profile_image_url,

        # Existing Contractor Fields
"company_name": profile.company_name,
"license_number": profile.license_number,
"experience_years": profile.experience_years,
"completed_projects": profile.completed_projects,
"about": profile.about,

        # Contractor Profile

        "gstin": profile.gstin,
        "pan": profile.pan,
        "website": profile.website,
        "business_type": profile.business_type,
        "registration_year": profile.registration_year,
        "team_size": profile.team_size,

        "residential_construction": profile.residential_construction,
        "commercial_construction": profile.commercial_construction,
        "renovation_remodeling": profile.renovation_remodeling,
        "interior_work": profile.interior_work,
        "structural_work": profile.structural_work,
        "plumbing_electrical": profile.plumbing_electrical,

        "concrete_mixer": profile.concrete_mixer,
        "excavator": profile.excavator,
        "scaffolding": profile.scaffolding,
        "bar_bending_machine": profile.bar_bending_machine,
        "concrete_vibrator": profile.concrete_vibrator,
        "safety_equipment": profile.safety_equipment,

        "service_locations": profile.service_locations,

        "commercial_liability_insurance":
        profile.commercial_liability_insurance,

        "company_logo": profile.company_logo,
        "gallery_images": profile.gallery_images,
        "business_license": profile.business_license,
        "company_registration": profile.company_registration,
        "gst_certificate": profile.gst_certificate,
        "pan_card": profile.pan_card,
        "insurance_certificate": profile.insurance_certificate,
        "iso_certificate": profile.iso_certificate
    }


@router.post("/")
async def create_contractor_profile(

    # Existing User
    user_id: int = Form(...),

    # Existing Contractor Fields
company_name: str = Form(""),
license_number: str = Form(""),
experience_years: int = Form(0),
completed_projects: int = Form(0),
about: str = Form(""),

   

    # New Company Details
    gstin: str = Form(""),
    pan: str = Form(""),
    website: str = Form(""),
    business_type: str = Form(""),
    registration_year: int = Form(0),
    team_size: str = Form(""),

    # Services
    residential_construction: bool = Form(False),
    commercial_construction: bool = Form(False),
    renovation_remodeling: bool = Form(False),
    interior_work: bool = Form(False),
    structural_work: bool = Form(False),
    plumbing_electrical: bool = Form(False),

    # Equipment
    concrete_mixer: bool = Form(False),
    excavator: bool = Form(False),
    scaffolding: bool = Form(False),
    bar_bending_machine: bool = Form(False),
    concrete_vibrator: bool = Form(False),
    safety_equipment: bool = Form(False),

    # Service Location
    service_locations: str = Form(""),

    # Insurance
    commercial_liability_insurance: bool = Form(False),

    # Uploads
    company_logo: UploadFile = File(None),
    gallery_images: UploadFile = File(None),

    business_license: UploadFile = File(None),
    company_registration: UploadFile = File(None),
    gst_certificate: UploadFile = File(None),
    pan_card: UploadFile = File(None),
    insurance_certificate: UploadFile = File(None),
    iso_certificate: UploadFile = File(None),

    db: Session = Depends(get_db)
):

    user = db.query(User).filter(
        User.id == user_id
    ).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )


    # Company Logo
    company_logo_path = save_file(
        company_logo,
        "uploads/company_logos"
    )

    # Gallery Images
    gallery_images_path = save_file(
        gallery_images,
        "uploads/gallery"
    )

    # Documents
    business_license_path = save_file(
        business_license,
        "uploads/documents/business_license"
    )

    company_registration_path = save_file(
        company_registration,
        "uploads/documents/company_registration"
    )

    gst_certificate_path = save_file(
        gst_certificate,
        "uploads/documents/gst_certificate"
    )

    pan_card_path = save_file(
        pan_card,
        "uploads/documents/pan_card"
    )

    insurance_certificate_path = save_file(
        insurance_certificate,
        "uploads/documents/insurance_certificate"
    )

    iso_certificate_path = save_file(
        iso_certificate,
        "uploads/documents/iso_certificate"
    )


    profile = ContractorProfile(

    user_id=user_id,

    company_name=company_name,
    license_number=license_number,
    experience_years=experience_years,
    completed_projects=completed_projects,
    about=about,

    gstin=gstin,
    pan=pan,
    website=website,
    business_type=business_type,
    registration_year=registration_year,
    team_size=team_size,

    residential_construction=residential_construction,
    commercial_construction=commercial_construction,
    renovation_remodeling=renovation_remodeling,
    interior_work=interior_work,
    structural_work=structural_work,
    plumbing_electrical=plumbing_electrical,

    concrete_mixer=concrete_mixer,
    excavator=excavator,
    scaffolding=scaffolding,
    bar_bending_machine=bar_bending_machine,
    concrete_vibrator=concrete_vibrator,
    safety_equipment=safety_equipment,

    service_locations=service_locations,

    commercial_liability_insurance=commercial_liability_insurance,

    company_logo=company_logo_path,
    gallery_images=gallery_images_path,

    business_license=business_license_path,
    company_registration=company_registration_path,
    gst_certificate=gst_certificate_path,
    pan_card=pan_card_path,
    insurance_certificate=insurance_certificate_path,
    iso_certificate=iso_certificate_path
)



    
    db.add(profile)
    db.commit()
    db.refresh(profile)

    return {
        "message": "Contractor Profile Created Successfully",
        "profile_id": profile.id,
        "name": user.name,
        "email": user.email,
        "phone": user.phone,
        "address": user.address,
        "pincode": user.pincode,
        "profile_image": user.profile_image_url,

        "company_name": profile.company_name,
"license_number": profile.license_number,
"experience_years": profile.experience_years,
"completed_projects": profile.completed_projects,
"about": profile.about,
        
        "gstin": profile.gstin,
        "pan": profile.pan,
        "website": profile.website,
        "business_type": profile.business_type,
        "registration_year": profile.registration_year,
        "team_size": profile.team_size,

        "residential_construction": profile.residential_construction,
        "commercial_construction": profile.commercial_construction,
        "renovation_remodeling": profile.renovation_remodeling,
        "interior_work": profile.interior_work,
        "structural_work": profile.structural_work,
        "plumbing_electrical": profile.plumbing_electrical,

        "concrete_mixer": profile.concrete_mixer,
        "excavator": profile.excavator,
        "scaffolding": profile.scaffolding,
        "bar_bending_machine": profile.bar_bending_machine,
        "concrete_vibrator": profile.concrete_vibrator,
        "safety_equipment": profile.safety_equipment,

        "service_locations": profile.service_locations,

        "commercial_liability_insurance":
        profile.commercial_liability_insurance,

        "company_logo": profile.company_logo,
        "gallery_images": profile.gallery_images,
        "business_license": profile.business_license,
        "company_registration": profile.company_registration,
        "gst_certificate": profile.gst_certificate,
        "pan_card": profile.pan_card,
        "insurance_certificate": profile.insurance_certificate,
        "iso_certificate": profile.iso_certificate
    }