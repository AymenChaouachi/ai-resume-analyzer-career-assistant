package com.resumeanalyzer.service;

import com.resumeanalyzer.dto.ai.AIAnalysisResponseDto;
import com.resumeanalyzer.dto.ai.JobMatchResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.io.File;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AIIntegrationService {

    private final RestTemplate restTemplate;

    public AIAnalysisResponseDto analyzeResume(
            String filePath
    ) {

        String fastApiUrl =
    "https://resume-analyzer-ai-jzgz.onrender.com/api/ai/analyze";

        File file = new File(filePath);

        MultiValueMap<String, Object> body =
                new LinkedMultiValueMap<>();

        body.add(
                "file",
                new FileSystemResource(file)
        );

        HttpHeaders headers = new HttpHeaders();

        headers.setContentType(
                MediaType.MULTIPART_FORM_DATA
        );

        HttpEntity<MultiValueMap<String, Object>>
                requestEntity =
                new HttpEntity<>(body, headers);

        ResponseEntity<AIAnalysisResponseDto>
                response =
                restTemplate.postForEntity(
                        fastApiUrl,
                        requestEntity,
                        AIAnalysisResponseDto.class
                );

        return response.getBody();
    }

    public JobMatchResponseDto analyzeJobMatch(
            String resumeText,
            String jobDescription
    ) {

        // temporary mock version first

        return JobMatchResponseDto.builder()
                .matchScore(82.0)
                .missingSkills(List.of(
                        "Docker",
                        "Kubernetes",
                        "AWS"
                ))
                .strengths(List.of(
                        "Java",
                        "Spring Boot",
                        "Angular"
                ))
                .recommendations(List.of(
                        "Learn Docker basics",
                        "Add cloud deployment projects",
                        "Highlight backend projects"
                ))
                .build();
    }
}
