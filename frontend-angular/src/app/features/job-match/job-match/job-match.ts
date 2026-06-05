import {
  Component,
  signal
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { ResumeService } from '../../../services/resume';

import { MatCardModule } from '@angular/material/card';

import { MatButtonModule } from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatChipsModule } from '@angular/material/chips';

import { MatProgressSpinnerModule }
from '@angular/material/progress-spinner';

import {
  finalize
} from 'rxjs';

import {
  JobMatchResult
} from '../../../models/job-match.model';

@Component({
  selector: 'app-job-match',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatProgressSpinnerModule
  ],

  templateUrl: './job-match.html',

  styleUrl: './job-match.css'
})
export class JobMatch {

  jobDescription = '';

  result =
    signal<JobMatchResult | null>(null);

  isLoading =
    signal(false);

  errorMessage =
    signal('');

  constructor(
    private resumeService: ResumeService
  ) {
  }

  analyzeMatch(): void {

    if (!this.jobDescription.trim()) {

      return;
    }

    this.isLoading.set(true);

    this.result.set(null);

    this.errorMessage.set('');

    this.resumeService.analyzeJobMatch(

      'Current uploaded resume',

      this.jobDescription

    ).pipe(
      finalize(() => this.isLoading.set(false))
    )
    .subscribe({

      next: (response) => {

        this.result.set(response);
      },

      error: () => {

        this.errorMessage.set(
          'Unable to analyze this job match. Please try again.'
        );
      }
    });
  }
}
