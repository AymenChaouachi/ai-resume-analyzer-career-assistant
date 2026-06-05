package com.resumeanalyzer.dto.ai;

import lombok.Data;

@Data
public class JobMatchRequestDto {

    private String resumeText;

    private String jobDescription;
}