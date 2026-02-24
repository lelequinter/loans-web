import { Routes } from '@angular/router';
import { Login } from './login/login';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/auth/login',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login').then(m => m.Login),
  },
  {
    path: '**',
    redirectTo: '/auth/login',
  }
];
