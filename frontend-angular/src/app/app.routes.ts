import { Routes } from '@angular/router';

import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';

import { Dashboard } from './features/dashboard/dashboard/dashboard';

import { UploadResume } from './features/resume/upload-resume/upload-resume';

import { Chatbot } from './features/chatbot/chatbot/chatbot';

import {
  ResumeHistory
} from './features/resume/resume-history/resume-history';

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
    component: Dashboard
  },

  {
    path: 'upload',
    component: UploadResume
  },

  {
    path: 'chatbot',
    component: Chatbot
  },

  {
  path: 'history',
  component: ResumeHistory
  }

];