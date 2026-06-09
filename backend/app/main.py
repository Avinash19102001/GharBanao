from app.utils.database import Base, engine
from fastapi import FastAPI 
from fastapi.middleware.cors import CORSMiddleware
from app.models.house_owner_registration import HouseOwner
from app.models.contractor_model import Contractor
from app.models.supplier_registration import Supplier
from app.routers.contractor_router import router
from app.routers.house_owner_register import router as house_owner_router
from app.routers.supplier_registration import router as supplier_router
from app.routers.auth import router as login
from app.models.auth_model import Login
from app.routers.equipment_router import router as equipment_router
from app.routers.forgot_password_routers import router as forgot_router
from app.routers.House_owner_profile import router as profile

app = FastAPI() 

# origins = [
#     "http://localhost:5173",  # React/Vue/Angular local dev
#     "http://192.168.0.245:5173",  # Same network frontend
#     "https://your-frontend-domain.com"  # Production domain
# ]
origins = [
    "http://localhost:5173",
    "http://localhost:5173",
    "http://192.168.0.245:3000",
    "http://192.168.0.245:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "GharBanao Contractor API Running Successfully"
    }

app.include_router(router)
app.include_router(house_owner_router)
app.include_router(supplier_router)
app.include_router(equipment_router)
app.include_router(login)
app.include_router(forgot_router)
app.include_router( profile)

Base.metadata.create_all(bind=engine)
