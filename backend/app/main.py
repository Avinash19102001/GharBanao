from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.utils.database import Base, engine

# Models
from app.models.house_owner_registration import HouseOwner
#from app.models.contractor import Contractor
from app.models.supplier_registration import Supplier
from app.models.auth_model import Login
from app.models.supplier_profile import SupplierProfile

# Routers
from app.routers.auth import router as login
from app.routers.forgot_password_routers import router as forgot_router
from app.routers.House_owner_profile import router as profile
from app.routers.contractor_profile_router import router as contractor_profile_router
from app.routers import supplier_profile
from app.routers.users import router as user_router

app = FastAPI()

Base.metadata.create_all(bind=engine)

origins = [
    "http://localhost:5173",
    "http://192.168.0.245:3000",
    "http://192.168.0.245:5173",
    "http://192.168.0.35:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "GharBanao Contractor API Running Successfully"
    }


app.include_router(login)
app.include_router(forgot_router)
app.include_router(profile)
app.include_router(contractor_profile_router)
app.include_router(supplier_profile.router)
app.include_router(user_router)