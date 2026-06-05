export interface JobMatchResult {

  matchScore: number;

  missingSkills: string[];

  strengths: string[];

  recommendations: string[];
}