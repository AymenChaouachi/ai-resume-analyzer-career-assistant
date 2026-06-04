import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { AuthRequest } from '../models/auth-request.model';

import { AuthResponse } from '../models/auth-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl =
    `${environment.apiUrl}/auth`;

  constructor(
    private http: HttpClient
  ) {
  }

  register(
    request: AuthRequest
  ): Observable<AuthResponse> {

    return this.http.post<AuthResponse>(
      `${this.apiUrl}/register`,
      request
    );
  }

  login(
    request: AuthRequest
  ): Observable<AuthResponse> {

    return this.http.post<AuthResponse>(
      `${this.apiUrl}/login`,
      request
    );
  }

  saveToken(token: string): void {

    localStorage.setItem(
      'token',
      token
    );
  }

  getToken(): string | null {

    return localStorage.getItem(
      'token'
    );
  }

  logout(): void {

    localStorage.removeItem(
      'token'
    );
  }

  isAuthenticated(): boolean {

    return !!this.getToken();
  }
}