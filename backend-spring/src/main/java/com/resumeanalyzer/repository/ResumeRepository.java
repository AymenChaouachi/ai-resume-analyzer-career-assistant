package com.resumeanalyzer.repository;

import com.resumeanalyzer.entity.Resume;
import com.resumeanalyzer.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResumeRepository extends JpaRepository<Resume, Long> {

    List<Resume> findByUser(User user);
}