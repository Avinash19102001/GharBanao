from fastapi import FastAPI
from app.routers.contractor_router import router
from app.routers.house_owner_register import router as house_owner_router

<<<<<<< Updated upstream
app = FastAPI()
=======
from app.utils.database import engine, Base
from app.routers.user_router import router
from app.routers.supplier_registration import router as supplier_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="GharBanao API"
)

# Existing User Router
app.include_router(router)

# Supplier Router
app.include_router(supplier_router)
>>>>>>> Stashed changes

@app.get("/")
def home():
    return {
        "message": "GharBanao Contractor API Running Successfully"
    }

app.include_router(router)
app.include_router(house_owner_router)