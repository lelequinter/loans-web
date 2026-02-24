import { Routes } from '@angular/router';
import { Welcome } from './welcome';

export const WELCOME_ROUTES: Routes = [
  {
    path: '',
    component: Welcome,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('../client-dashboard/client-dashboard').then(m => m.ClientDashboard)
      },
      {
        path: 'admin-dashboard',
        loadComponent: () => import('../admin-dashboard/admin-dashboard').then(m => m.AdminDashboard)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  },
];
