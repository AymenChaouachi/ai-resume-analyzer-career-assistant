import spacy

from app.nlp.skills import (
    TECHNICAL_SKILLS,
    SOFT_SKILLS
)

from app.services.semantic_service import (
    get_best_job_match
)

from app.services.recommendation_service import (
    generate_recommendations
)

nlp = spacy.load("en_core_web_sm")


def analyze_resume_text(text):

    processed_text = text.lower()

    doc = nlp(processed_text)

    found_technical_skills = []
    found_soft_skills = []

    for skill in TECHNICAL_SKILLS:
        if skill.lower() in processed_text:
            found_technical_skills.append(skill)

    for skill in SOFT_SKILLS:
        if skill.lower() in processed_text:
            found_soft_skills.append(skill)

    ats_score = calculate_ats_score(
        found_technical_skills,
        found_soft_skills
    )

    best_match = get_best_job_match(text)

    recommendations = generate_recommendations(
        found_technical_skills
    )

    return {
        "technical_skills": found_technical_skills,
        "soft_skills": found_soft_skills,
        "ats_score": ats_score,
        "job_match": best_match,
        "recommendations": recommendations
    }


def calculate_ats_score(
        technical_skills,
        soft_skills
):

    score = (
        len(technical_skills) * 8 +
        len(soft_skills) * 5
    )

    return min(score, 100)