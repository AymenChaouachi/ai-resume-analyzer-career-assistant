import { Injectable } from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import {
  Observable,
  Subject,
  tap
} from 'rxjs';

import {
  environment
} from '../../environments/environment';

import {
  AIAnalysisResponse
} from '../models/analysis-result.model';

import {
  ResumeHistory
} from '../models/resume-history.model';

import {
  DashboardSummary
} from '../models/dashboard-summary.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private apiUrl =
    `${environment.apiUrl}/resumes`;

  private historyRefreshSubject =
    new Subject<void>();

  historyRefresh$ =
    this.historyRefreshSubject.asObservable();

  constructor(
    private http: HttpClient
  ) {
  }

  uploadResume(
    file: File,
    email: string
  ): Observable<AIAnalysisResponse> {

    const formData = new FormData();

    formData.append(
      'file',
      file
    );

    formData.append(
      'email',
      email
    );

    return this.http.post<AIAnalysisResponse>(
      `${this.apiUrl}/upload`,
      formData
    ).pipe(
      tap(() => this.refreshHistory())
    );
  }

  getResumeHistory(
  email: string
  ): Observable<ResumeHistory[]> {

    return this.http.get<ResumeHistory[]>(

      `${this.apiUrl}/history?email=${encodeURIComponent(email)}`

    );
  }

  getDashboardSummary(
    email: string
  ): Observable<DashboardSummary> {

    return this.http.get<DashboardSummary>(

      `${this.apiUrl}/dashboard?email=${encodeURIComponent(email)}`

    );
  }

  refreshHistory(): void {

    this.historyRefreshSubject.next();
  }
}
