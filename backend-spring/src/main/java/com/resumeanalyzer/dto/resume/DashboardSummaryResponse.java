package com.resumeanalyzer.dto.resume;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
public class DashboardSummaryResponse {

    private long totalUploads;

    private Double latestAtsScore;

    private Double bestAtsScore;

    private String bestJobMatch;

    private String latestFileName;

    private LocalDateTime latestUploadedAt;

    private List<String> topSkills;

    private List<String> recommendations;
}
