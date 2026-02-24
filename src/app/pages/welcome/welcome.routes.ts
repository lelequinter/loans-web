import { Routes } from '@angular/router';
import { Welcome } from './welcome';

export const WELCOME_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/app/dashboard' },
  {
    path: '',
    component: Welcome,
    children: [
      //todo: se puede validar con el guard el role para mandar al dashborda correspondiente
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
