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
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';

  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  login(): void {

    this.authService.login({
      email: this.email,
      password: this.password
    }).subscribe({

      next: (response) => {

        this.authService.saveToken(
          response.token
        );

        this.router.navigate([
          '/dashboard'
        ]);
      },

      error: (error) => {

        console.error(error);
      }
    });
  }
}