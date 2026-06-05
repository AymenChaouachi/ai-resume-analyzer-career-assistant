import { Routes } from '@angular/router';

import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';

import { Dashboard } from './features/dashboard/dashboard/dashboard';

import { UploadResume } from './features/resume/upload-resume/upload-resume';

import { Chatbot } from './features/chatbot/chatbot/chatbot';

import { JobMatch } from './features/job-match/job-match/job-match';

import {
  ResumeHistory
} from './features/resume/resume-history/resume-history';

import {
  authGuard
} from './services/auth.guard';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'register',
    component: Register
  },

  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [
      authGuard
    ]
  },

  {
    path: 'upload',
    component: UploadResume,
    canActivate: [
      authGuard
    ]
  },

  {
    path: 'chatbot',
    component: Chatbot,
    canActivate: [
      authGuard
    ]
  },

  {
    path: 'job-match',
    component: JobMatch,
    canActivate: [
      authGuard
    ]
  },

  {
  path: 'history',
  component: ResumeHistory,
  canActivate: [
    authGuard
  ]
  },


];
