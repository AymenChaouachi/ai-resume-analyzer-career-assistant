from app.nlp.job_descriptions import (
    SOFTWARE_ENGINEER_JD,
    AI_ENGINEER_JD
)


def calculate_similarity(
        resume_text,
        job_description
):
    """
    Temporary lightweight version for deployment.
    Returns a simple score based on keyword overlap.
    """

    resume_words = set(
        resume_text.lower().split()
    )

    jd_words = set(
        job_description.lower().split()
    )

    common_words = resume_words.intersection(
        jd_words
    )

    if len(jd_words) == 0:
        return 0

    score = (
        len(common_words)
        / len(jd_words)
    ) * 100

    return round(score, 2)


def get_best_job_match(
        resume_text
):

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
            "best_match":
                "Software Engineering Intern",
            "score":
                software_score
        }

    return {
        "best_match":
            "AI Engineering Intern",
        "score":
            ai_score
    }