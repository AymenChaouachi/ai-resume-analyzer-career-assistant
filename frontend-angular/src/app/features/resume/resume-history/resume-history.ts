import {
  Component,
  DestroyRef,
  OnInit,
  signal
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  MatButtonModule
} from '@angular/material/button';

import {
  ResumeService
} from '../../../services/resume';

import {
  takeUntilDestroyed
} from '@angular/core/rxjs-interop';

import {
  ResumeHistory as ResumeHistoryItem
} from '../../../models/resume-history.model';

@Component({
  selector: 'app-resume-history',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './resume-history.html',
  styleUrl: './resume-history.css'
})
export class ResumeHistory implements OnInit {

  histories =
    signal<ResumeHistoryItem[]>([]);

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

    this.loadHistory();

    this.resumeService.historyRefresh$
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => this.loadHistory());
  }

  loadHistory(): void {

    const email =
      localStorage.getItem('email') || '';

    if (!email) {

      this.errorMessage.set('Please log in again to view resume history.');

      this.histories.set([]);

      return;
    }

    this.isLoading.set(true);

    this.errorMessage.set('');

    this.resumeService
      .getResumeHistory(email)
      .subscribe({

        next: (response) => {

          this.histories.set(response);

          this.isLoading.set(false);
        },

        error: () => {

          this.histories.set([]);

          this.errorMessage.set(
            'Unable to load resume history. Please try again.'
          );

          this.isLoading.set(false);
        }
      });
  }
}
