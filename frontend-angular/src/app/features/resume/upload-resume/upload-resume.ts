import { Component } from '@angular/core';

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

  selectedFile!: File;

  analysisResult: any;

  isLoading = false;

  email =
    localStorage.getItem('email') || '';

  constructor(
    private resumeService: ResumeService
  ) {
  }

  onFileSelected(event: any): void {

  const file = event.target.files[0];

  if (file) {

    this.selectedFile = file;

    console.log(
      'Selected file:',
      this.selectedFile
    );
  }
}

  uploadResume(): void {

    if (!this.selectedFile) {

      return;
    }

    this.isLoading = true;

    this.resumeService.uploadResume(
      this.selectedFile,
      this.email
    ).subscribe({

      next: (response) => {

        console.log(response);

        this.analysisResult = response;

        this.isLoading = false;
      },

      error: (error) => {

        console.error(error);

        this.isLoading = false;
      }
    });
  }
}