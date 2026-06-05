import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ResumeService }
from '../../../services/resume';

@Component({
  selector: 'app-resume-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume-history.html',
  styleUrl: './resume-history.css'
})
export class ResumeHistory {

  histories: any[] = [];

  constructor(
    private resumeService: ResumeService
  ) {
  }

  ngOnInit(): void {

  const email = localStorage.getItem('email');

  console.log('Stored email:', email);

  if (!email) {
    console.error('No email found in localStorage');
    return;
  }

  this.resumeService
    .getResumeHistory(email)
    .subscribe({

  next: (response) => {

    console.log(response);

    this.histories = response;
  },

  error: (error) => {

    console.error(error);
  }
});
}
}