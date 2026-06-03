import spacy

from app.nlp.skills import (
    TECHNICAL_SKILLS,
    SOFT_SKILLS
)

nlp = spacy.load("en_core_web_sm")


def analyze_resume_text(text):

    doc = nlp(text.lower())

    found_technical_skills = []
    found_soft_skills = []

    for skill in TECHNICAL_SKILLS:
        if skill.lower() in text.lower():
            found_technical_skills.append(skill)

    for skill in SOFT_SKILLS:
        if skill.lower() in text.lower():
            found_soft_skills.append(skill)

    ats_score = calculate_ats_score(
        found_technical_skills,
        found_soft_skills
    )

    return {
        "technical_skills": found_technical_skills,
        "soft_skills": found_soft_skills,
        "ats_score": ats_score
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