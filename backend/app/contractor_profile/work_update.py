@router.post("/upload-work-images")
async def upload_work_images(
    files: list[UploadFile] = File(...)
):

    uploaded_files = []

    for file in files:

        ext = os.path.splitext(
            file.filename
        )[1]

        filename = f"{uuid.uuid4()}{ext}"

        file_path = os.path.join(
            "uploads",
            "contractor_work_image",
            filename
        )

        with open(file_path, "wb") as buffer:
            buffer.write(
                await file.read()
            )

        uploaded_files.append(
            file_path
        )

    return {
        "message": "Images uploaded",
        "files": uploaded_files
    }