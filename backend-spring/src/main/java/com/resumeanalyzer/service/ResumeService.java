package com.resumeanalyzer.service;

import com.resumeanalyzer.dto.resume.ResumeResponse;
import com.resumeanalyzer.entity.Resume;
import com.resumeanalyzer.entity.User;
import com.resumeanalyzer.repository.ResumeRepository;
import com.resumeanalyzer.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ResumeService {

    private final ResumeRepository resumeRepository;
    private final UserRepository userRepository;
    private final FileStorageService fileStorageService;

    public ResumeResponse uploadResume(
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

        return ResumeResponse.builder()
                .id(savedResume.getId())
                .fileName(savedResume.getFileName())
                .uploadedAt(savedResume.getUploadedAt())
                .build();
    }

    public List<Resume> getUserResumes(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return resumeRepository.findByUser(user);
    }
}