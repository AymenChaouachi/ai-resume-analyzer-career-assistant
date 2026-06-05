import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatButtonModule } from '@angular/material/button';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  constructor(
    private router: Router
  ) {
  }

  logout(): void {

    localStorage.removeItem('token');

    localStorage.removeItem('email');

    this.router.navigate([
      '/login'
    ]);
  }
}