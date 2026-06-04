from fastapi import FastAPI

from app.utils.database import (
    engine,
    Base
)

from app.routers.user_router import router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="GharBanao API"
)

app.include_router(router)


@app.get("/")
def home():

    return {
        "message": "API Running"
    }