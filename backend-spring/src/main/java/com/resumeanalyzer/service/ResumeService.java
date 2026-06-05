package com.resumeanalyzer.service;

import com.resumeanalyzer.dto.resume.ResumeHistoryResponse;
import com.resumeanalyzer.dto.resume.ResumeResponse;
import com.resumeanalyzer.entity.Resume;
import com.resumeanalyzer.entity.User;
import com.resumeanalyzer.repository.ResumeRepository;
import com.resumeanalyzer.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.resumeanalyzer.dto.ai.AIAnalysisResponseDto;
import com.resumeanalyzer.entity.Analysis;
import com.resumeanalyzer.repository.AnalysisRepository;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ResumeService {

    private final ResumeRepository resumeRepository;
    private final UserRepository userRepository;
    private final FileStorageService fileStorageService;

    private final AIIntegrationService aiIntegrationService;

    private final AnalysisRepository analysisRepository;

    public AIAnalysisResponseDto uploadResume(
            MultipartFile file,
            String email
    ) throws IOException {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        String filePath = fileStorageService.saveFile(file);

        Resume resume = Resume.builder()
                .fileName(file.getOriginalFilename())
                .filePath(filePath)
                .uploadedAt(LocalDateTime.now())
                .user(user)
                .build();

        Resume savedResume = resumeRepository.save(resume);

        AIAnalysisResponseDto aiResponse =
                aiIntegrationService.analyzeResume(filePath);

        Analysis analysis = Analysis.builder()
                .technicalSkills(
                        String.join(
                                ", ",
                                aiResponse.getAnalysis()
                                        .getTechnical_skills()
                        )
                )
                .softSkills(
                        String.join(
                                ", ",
                                aiResponse.getAnalysis()
                                        .getSoft_skills()
                        )
                )
                .atsScore(
                        aiResponse.getAnalysis()
                                .getAts_score()
                )
                .bestJobMatch(
                        aiResponse.getAnalysis()
                                .getJob_match()
                                .getBest_match()
                )
                .semanticScore(
                        aiResponse.getAnalysis()
                                .getJob_match()
                                .getScore()
                )
                .recommendations(
                        String.join(
                                ", ",
                                aiResponse.getAnalysis()
                                        .getRecommendations()
                        )
                )
                .analyzedAt(LocalDateTime.now())
                .resume(savedResume)
                .build();

        analysisRepository.save(analysis);

        savedResume.setAnalysis(analysis);

        resumeRepository.save(savedResume);

        return aiResponse;
    }

    public List<Resume> getUserResumes(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return resumeRepository.findByUser(user);
    }

    
    public List<ResumeHistoryResponse>
        getResumeHistory(
                String email
        ) {

        User user = userRepository
                .findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException(
                                 "User not found"
                        )
                );

        List<Resume> resumes =
                resumeRepository.findByUser(user);

                System.out.println("EMAIL: " + email);

System.out.println(
        "RESUMES SIZE: " + resumes.size()
);

for (Resume r : resumes) {

    System.out.println(
            "Resume: " + r.getFileName()
    );

    System.out.println(
            "Analysis: " + r.getAnalysis()
    );
}

        return resumes.stream()

        .filter(resume ->
                resume.getAnalysis() != null
        )

        .map(resume ->

                ResumeHistoryResponse.builder()

                        .id(
                                resume.getId()
                        )

                        .fileName(
                                resume.getFileName()
                        )

                        .uploadedAt(
                                resume.getUploadedAt()
                        )

                        .atsScore(
                                resume.getAnalysis()
                                        .getAtsScore()
                        )

                        .bestJobMatch(
                                resume.getAnalysis()
                                        .getBestJobMatch()
                        )

                        .build()
        )

        .collect(Collectors.toList());
        }


}