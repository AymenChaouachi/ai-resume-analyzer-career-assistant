import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  imports: [
  CommonModule,
  MatCardModule
],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
