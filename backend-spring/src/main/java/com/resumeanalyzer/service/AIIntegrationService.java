package com.resumeanalyzer.service;

import com.resumeanalyzer.dto.ai.AIAnalysisResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.io.File;

@Service
@RequiredArgsConstructor
public class AIIntegrationService {

    private final RestTemplate restTemplate;

    public AIAnalysisResponseDto analyzeResume(
            String filePath
    ) {

        String fastApiUrl =
                "http://localhost:8000/api/ai/analyze";

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
}