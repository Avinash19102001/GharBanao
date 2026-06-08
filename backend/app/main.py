from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.contractor_router import router
from app.routers.house_owner_register import router as house_owner_router
from app.routers.supplier_registration import router as supplier_router

app = FastAPI()

<<<<<<< Updated upstream
=======
origins = [
    "http://localhost:5176",  # React/Vue/Angular local dev
    "http://192.168.0.245:5176",  # Same network frontend
    "https://your-frontend-domain.com"  # Production domain
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

>>>>>>> Stashed changes
@app.get("/")
def home():
    return {
        "message": "GharBanao Contractor API Running Successfully"
    }

app.include_router(router)
app.include_router(house_owner_router)
<<<<<<< Updated upstream
app.include_router(supplier_router)
=======
app.include_router(supplier_router)

>>>>>>> Stashed changes
