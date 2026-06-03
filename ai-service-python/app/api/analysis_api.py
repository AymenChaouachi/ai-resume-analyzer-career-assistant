from fastapi import APIRouter, UploadFile, File

from app.utils.pdf_parser import extract_text_from_pdf
from app.services.nlp_service import analyze_resume_text

router = APIRouter()


@router.post("/analyze")
async def analyze_resume(
        file: UploadFile = File(...)
):

    text = extract_text_from_pdf(file.file)

    analysis = analyze_resume_text(text)

    return {
        "file_name": file.filename,
        "analysis": analysis
    }