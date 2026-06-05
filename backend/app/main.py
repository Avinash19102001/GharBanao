from fastapi import FastAPI
from app.routers.contractor_router import router
from app.routers.house_owner_register import router as house_owner_router
from app.routers.supplier_registration import router as supplier_router

app = FastAPI()

@app.get("/")
def home():
    return {
        "message": "GharBanao Contractor API Running Successfully"
    }

app.include_router(router)
app.include_router(house_owner_router)
app.include_router(supplier_router)