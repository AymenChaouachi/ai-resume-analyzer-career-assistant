package com.resumeanalyzer.dto.ai;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class JobMatchResponseDto {

    private Double matchScore;

    private List<String> missingSkills;

    private List<String> strengths;

    private List<String> recommendations;
}