import { Injectable } from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import {
  Observable
} from 'rxjs';

import {
  AnalysisResult
} from '../models/analysis-result.model';

import {
  ResumeHistory
} from '../models/resume-history.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private apiUrl =
    'http://localhost:8080/api/resumes';

  constructor(
    private http: HttpClient
  ) {
  }

  uploadResume(
    file: File,
    email: string
  ): Observable<AnalysisResult> {

    const formData = new FormData();

    formData.append(
      'file',
      file
    );

    formData.append(
      'email',
      email
    );

    return this.http.post<AnalysisResult>(
      `${this.apiUrl}/upload`,
      formData
    );
  }

  getResumeHistory(
  email: string
  ) {

    return this.http.get<ResumeHistory[]>(

      `${this.apiUrl}/history?email=${email}`

    );
  }
}