export interface AnalysisResult {

  technical_skills: string[];

  soft_skills: string[];

  ats_score: number;

  job_match: {

    best_match: string;

    score: number;
  };

  recommendations: string[];
}