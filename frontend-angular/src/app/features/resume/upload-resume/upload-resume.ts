import {
  Component,
  signal
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  ResumeService
} from '../../../services/resume';

import {
  MatCardModule
} from '@angular/material/card';

import {
  MatChipsModule
} from '@angular/material/chips';

import {
  MatButtonModule
} from '@angular/material/button';

import {
  MatProgressBarModule
} from '@angular/material/progress-bar';

import {
  finalize
} from 'rxjs';

import {
  AIAnalysisResponse
} from '../../../models/analysis-result.model';

@Component({
  selector: 'app-upload-resume',

  standalone: true,

  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatProgressBarModule
  ],

  templateUrl: './upload-resume.html',

  styleUrl: './upload-resume.css'
})
export class UploadResume {

  selectedFile =
    signal<File | null>(null);

  analysisResult =
    signal<AIAnalysisResponse | null>(null);

  isLoading =
    signal(false);

  errorMessage =
    signal('');

  constructor(
    private resumeService: ResumeService
  ) {
  }

  onFileSelected(event: Event): void {

  const input =
    event.target as HTMLInputElement;

  const file =
    input.files?.[0] ?? null;

  this.selectedFile.set(file);

  this.analysisResult.set(null);

  this.errorMessage.set('');
  }

  uploadResume(): void {

    const file =
      this.selectedFile();

    const email =
      localStorage.getItem('email') || '';

    if (!file) {

      this.errorMessage.set('Select a resume file before analyzing.');

      return;
    }

    if (!email) {

      this.errorMessage.set('Please log in again before uploading a resume.');

      return;
    }

    this.isLoading.set(true);

    this.errorMessage.set('');

    this.resumeService.uploadResume(
      file,
      email
    ).pipe(
      finalize(() => this.isLoading.set(false))
    )
    .subscribe({

      next: (response) => {

        this.analysisResult.set(response);
      },

      error: () => {

        this.errorMessage.set(
          'Resume analysis failed. Please try again.'
        );
      }
    });
  }
}
