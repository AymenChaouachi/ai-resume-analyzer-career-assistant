export interface DashboardSummary {

  totalUploads: number;

  latestAtsScore: number | null;

  bestAtsScore: number | null;

  bestJobMatch: string | null;

  latestFileName: string | null;

  latestUploadedAt: string | null;

  topSkills: string[];

  recommendations: string[];
}
