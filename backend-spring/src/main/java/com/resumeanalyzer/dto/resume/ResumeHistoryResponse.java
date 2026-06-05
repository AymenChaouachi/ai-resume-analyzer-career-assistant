package com.resumeanalyzer.dto.resume;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class ResumeHistoryResponse {

    private Long id;

    private String fileName;

    private Double atsScore;

    private String bestJobMatch;

    private LocalDateTime uploadedAt;
}