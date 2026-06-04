import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  ResumeService
} from '../../../services/resume';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './upload-resume.html',
  styleUrl: './upload-resume.css'
})
export class UploadResume {

  selectedFile!: File;

  analysisResult: any;

  constructor(
    private resumeService: ResumeService
  ) {
  }

 onFileSelected(event: any): void {

  const file = event.target.files[0];

  if (file) {
    this.selectedFile = file;
  }
}

  uploadResume(): void {

    this.resumeService.uploadResume(
      this.selectedFile,
      'loumi@gmail.com'
    ).subscribe({

      next: (response) => {

        console.log(response);

        this.analysisResult = response;
      },

      error: (error) => {

        console.error(error);
      }
    });
  }
}