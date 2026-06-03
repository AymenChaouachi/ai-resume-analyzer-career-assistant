package com.resumeanalyzer.dto.ai;

import lombok.Data;

@Data
public class AIAnalysisResponseDto {

    private String file_name;

    private AnalysisResultDto analysis;
}