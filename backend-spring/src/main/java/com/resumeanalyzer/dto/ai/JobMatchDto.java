package com.resumeanalyzer.dto.ai;

import lombok.Data;

@Data
public class JobMatchDto {

    private String best_match;

    private Double score;
}