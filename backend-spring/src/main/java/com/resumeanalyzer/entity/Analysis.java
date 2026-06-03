package com.resumeanalyzer.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "analyses")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Analysis {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 5000)
    private String technicalSkills;

    @Column(length = 3000)
    private String softSkills;

    private Double atsScore;

    private String bestJobMatch;

    private Double semanticScore;

    @Column(length = 5000)
    private String recommendations;

    private LocalDateTime analyzedAt;

    @OneToOne
    @JoinColumn(name = "resume_id")
    private Resume resume;
}