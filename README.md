# 🚀 AI Resume Analyzer & Career Assistant

An AI-powered full-stack web application that helps users analyze resumes, improve ATS compatibility, identify missing skills, track resume performance over time, and compare resumes against job descriptions.

The platform combines Angular, Spring Boot, Python AI services, and PostgreSQL in a cloud-deployed microservice architecture.

---

## ✨ Features

### Authentication & User Management
- Secure JWT Authentication
- Login & Session Management
- Protected User Data

### Resume Analysis
- PDF Resume Upload
- AI-Powered Resume Analysis
- ATS Score Evaluation
- Skill Extraction
- Personalized Recommendations

### Career Assistance
- Job Description Matching
- Resume-to-Job Compatibility Analysis
- Best Matching Career Suggestions

### Analytics
- Resume History Tracking
- Dashboard Statistics
- ATS Score Monitoring
- Performance Insights

### Cloud Deployment
- Production-ready deployment
- Multi-service architecture
- Cloud-hosted PostgreSQL database
- Secure API communication

---

## 🏗️ System Architecture

```text
Angular Frontend
       │
       ▼
Spring Boot Backend
       │
 ┌─────┴─────┐
 ▼           ▼
PostgreSQL   Python AI Service
  (Neon)      (FastAPI)
```

---

## 🛠️ Tech Stack

### Frontend
- Angular
- TypeScript
- Angular Material
- RxJS

### Backend
- Spring Boot
- Spring Security
- JWT Authentication
- JPA / Hibernate
- Maven

### Database
- PostgreSQL
- Neon Database

### AI Service
- Python
- FastAPI

### Cloud & DevOps
- Render
- Neon
- Git
- GitHub

---

## 🚀 Deployment

The application is deployed as three independent cloud services:

### Frontend
- Angular Static Site
- Hosted on Render

### Backend API
- Spring Boot REST API
- Hosted on Render Web Service

### AI Analysis Service
- FastAPI Microservice
- Hosted on Render Web Service

### Database
- PostgreSQL
- Hosted on Neon

---

## 📸 Screenshots

### Dashboard

![Dashboard](screenshots/dashboard.png)

---

### Resume Upload & Analysis

![Upload](screenshots/upload.png)

---

### Resume History

![History](screenshots/history.png)

---

### Job Match Analyzer

![Job Match 1](screenshots/job-match1.png)

![Job Match 2](screenshots/job-match2.png)

---

### Authentication

![Login](screenshots/login.png)

---

## ⚙️ Local Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/ai-resume-analyzer-career-assistant.git
cd ai-resume-analyzer-career-assistant
```

### Backend

```bash
cd backend-spring
./mvnw spring-boot:run
```

### Frontend

```bash
cd frontend-angular
npm install
ng serve
```

### AI Service

```bash
cd ai-service
pip install -r requirements.txt
uvicorn app.main:app --reload
```

---

## 🎯 Key Learning Outcomes

This project demonstrates practical experience with:

- Full-Stack Development
- REST API Design
- Authentication & Authorization
- AI Service Integration
- Cloud Deployment
- PostgreSQL Database Design
- Microservice Architecture
- Environment Configuration
- CORS Management
- Git & GitHub Workflow

---

## 🔮 Future Improvements

- PDF Report Export
- Advanced LLM-Based Resume Analysis
- Real Semantic Job Matching
- Resume Version Comparison
- Recruiter Dashboard
- Dark Mode
- Email Notifications
- Interview Preparation Assistant

---

## 👨‍💻 Author

**Aymen Chaouachi**

Computer Science & Software Engineering Student

Interested in:
- Artificial Intelligence
- Backend Development
- Cybersecurity
- Cloud Technologies
