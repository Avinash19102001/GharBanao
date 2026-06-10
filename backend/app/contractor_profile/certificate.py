@router.post("/upload-certificate")
async def upload_certificate(
    file: UploadFile = File(...)
):

    ext = os.path.splitext(file.filename)[1]

    filename = f"{uuid.uuid4()}{ext}"

    file_path = os.path.join(
        "uploads",
        "contractor_certificate",
        filename
    )

    with open(file_path, "wb") as buffer:
        buffer.write(
            await file.read()
        )

    return {
        "message": "Certificate uploaded",
        "path": file_path
    }