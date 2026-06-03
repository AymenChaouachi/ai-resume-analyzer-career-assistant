from app.nlp.skills import TECHNICAL_SKILLS


def find_missing_skills(found_skills):

    missing_skills = []

    for skill in TECHNICAL_SKILLS:

        if skill not in found_skills:
            missing_skills.append(skill)

    return missing_skills[:5]


def generate_recommendations(
        technical_skills
):

    recommendations = []

    missing = find_missing_skills(
        technical_skills
    )

    for skill in missing:

        recommendations.append(
            f"Consider adding or learning {skill}"
        )

    return recommendations