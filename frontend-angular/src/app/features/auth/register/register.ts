import { Component } from '@angular/core';

import {
  FormsModule
} from '@angular/forms';

import {
  Router
} from '@angular/router';

import {
  AuthService
} from '../../../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  fullName = '';

  email = '';

  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  register(): void {

    this.authService.register({
      fullName: this.fullName,
      email: this.email,
      password: this.password
    }).subscribe({

      next: () => {

        this.router.navigate([
          '/login'
        ]);
      },

      error: (error) => {

        console.error(error);
      }
    });
  }
}