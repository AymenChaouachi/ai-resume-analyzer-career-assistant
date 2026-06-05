export interface JobMatch {

  best_match: string;

  score: number;
}

export interface AnalysisResult {

  technical_skills: string[];

  soft_skills: string[];

  ats_score: number;

  job_match: JobMatch;

  recommendations: string[];
}

export interface AIAnalysisResponse {

  file_name: string;

  analysis: AnalysisResult;
}
