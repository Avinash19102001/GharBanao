from fastapi import FastAPI
from app.routers.contractor_router import router

app = FastAPI()

@app.get("/")
def home():
    return {
        "message": "GharBanao Contractor API Running Successfully"
    }

app.include_router(router)