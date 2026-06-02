package com.resumeanalyzer.controller;

import com.resumeanalyzer.dto.resume.ResumeResponse;
import com.resumeanalyzer.entity.Resume;
import com.resumeanalyzer.service.ResumeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/resumes")
@RequiredArgsConstructor
public class ResumeController {

    private final ResumeService resumeService;

    @PostMapping("/upload")
    public ResumeResponse uploadResume(
            @RequestParam("file") MultipartFile file,
            @RequestParam("email") String email
    ) throws IOException {

        return resumeService.uploadResume(file, email);
    }

    @GetMapping
    public List<Resume> getUserResumes(
            @RequestParam String email
    ) {

        return resumeService.getUserResumes(email);
    }
}