import {
  Component,
  DestroyRef,
  OnInit,
  signal
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import {
  MatButtonModule
} from '@angular/material/button';

import {
  MatChipsModule
} from '@angular/material/chips';

import {
  MatProgressBarModule
} from '@angular/material/progress-bar';

import {
  takeUntilDestroyed
} from '@angular/core/rxjs-interop';

import {
  DashboardSummary
} from '../../../models/dashboard-summary.model';

import {
  ResumeService
} from '../../../services/resume';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressBarModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  summary =
    signal<DashboardSummary | null>(null);

  isLoading =
    signal(false);

  errorMessage =
    signal('');

  constructor(
    private resumeService: ResumeService,
    private destroyRef: DestroyRef
  ) {
  }

  ngOnInit(): void {

    this.loadDashboard();

    this.resumeService.historyRefresh$
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => this.loadDashboard());
  }

  loadDashboard(): void {

    const email =
      localStorage.getItem('email') || '';

    if (!email) {

      this.summary.set(null);

      this.errorMessage.set('Please log in again to view dashboard analytics.');

      return;
    }

    this.isLoading.set(true);

    this.errorMessage.set('');

    this.resumeService
      .getDashboardSummary(email)
      .subscribe({

        next: (summary) => {

          this.summary.set(summary);

          this.isLoading.set(false);
        },

        error: () => {

          this.summary.set(null);

          this.errorMessage.set(
            'Unable to load dashboard analytics. Please try again.'
          );

          this.isLoading.set(false);
        }
      });
  }
}
