from fastapi import FastAPI

from app.api.analysis_api import router as analysis_router

app = FastAPI(
    title="AI Resume Analyzer API",
    version="1.0.0"
)

app.include_router(
    analysis_router,
    prefix="/api/ai"
)


@app.get("/")
def home():
    return {
        "message": "AI Resume Analyzer Service Running"
    }