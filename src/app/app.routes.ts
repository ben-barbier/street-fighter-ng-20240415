import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadComponent: () => import('./pages/characters-list/characters-list.component') },
      { path: 'arena', loadComponent: () => import('./pages/arena/arena.component') },
    ],
  },
  { path: 'landing', component: LandingComponent },
  { path: '**', redirectTo: 'landing' },
];
