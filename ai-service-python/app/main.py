from fastapi import FastAPI

app = FastAPI(
    title="AI Resume Analyzer API",
    version="1.0.0"
)


@app.get("/")
def home():
    return {
        "message": "AI Resume Analyzer Service Running"
    }


@app.get("/api/ai/test")
def test_ai():
    return {
        "status": "AI service working successfully"
    }