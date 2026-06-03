from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

from app.nlp.job_descriptions import (
    SOFTWARE_ENGINEER_JD,
    AI_ENGINEER_JD
)

model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)


def calculate_similarity(
        resume_text,
        job_description
):

    embeddings = model.encode([
        resume_text,
        job_description
    ])

    similarity = cosine_similarity(
        [embeddings[0]],
        [embeddings[1]]
    )[0][0]

    return round(float(similarity) * 100, 2)


def get_best_job_match(resume_text):

    software_score = calculate_similarity(
        resume_text,
        SOFTWARE_ENGINEER_JD
    )

    ai_score = calculate_similarity(
        resume_text,
        AI_ENGINEER_JD
    )

    if software_score > ai_score:
        return {
            "best_match": "Software Engineering Intern",
            "score": software_score
        }

    return {
        "best_match": "AI Engineering Intern",
        "score": ai_score
    }