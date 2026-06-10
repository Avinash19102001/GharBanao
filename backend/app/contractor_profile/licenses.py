@router.post("/upload-license")
async def upload_license(
    file: UploadFile = File(...)
):

    ext = os.path.splitext(file.filename)[1]

    filename = f"{uuid.uuid4()}{ext}"

    file_path = os.path.join(
        "uploads",
        "contractor_license",
        filename
    )

    with open(file_path, "wb") as buffer:
        buffer.write(
            await file.read()
        )

    return {
        "message": "License uploaded",
        "path": file_path
    }