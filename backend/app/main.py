from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.contractor_router import router
from app.routers.house_owner_register import router as house_owner_router
from app.routers.supplier_registration import router as supplier_router

app = FastAPI()

# origins = [
#     "http://localhost:5173",  # React/Vue/Angular local dev
#     "http://192.168.0.245:5176",  # Same network frontend
#     "https://your-frontend-domain.com"  # Production domain
# ]
origins = [
    "http://localhost:5173",
    "http://localhost:5176",
    "http://192.168.0.245:3000",
    "http://192.168.0.245:5173",
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

app.include_router(router)
app.include_router(house_owner_router)
app.include_router(supplier_router)

