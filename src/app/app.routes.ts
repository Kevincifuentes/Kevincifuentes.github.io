import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    title: 'Kevin Cifuentes Salas, payments and distributed systems',
  },
  { path: '**', redirectTo: '' },
];
