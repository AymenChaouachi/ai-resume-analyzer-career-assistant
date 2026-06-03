package com.resumeanalyzer.dto.ai;

import lombok.Data;

import java.util.List;

@Data
public class AnalysisResultDto {

    private List<String> technical_skills;

    private List<String> soft_skills;

    private Double ats_score;

    private JobMatchDto job_match;

    private List<String> recommendations;
}