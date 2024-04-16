import { Routes } from '@angular/router';
import { CharactersListComponent } from './pages/characters-list/characters-list.component';
import { ArenaComponent } from './pages/arena/arena.component';
import { LayoutComponent } from './layout/layout.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: CharactersListComponent },
      { path: 'arena', component: ArenaComponent },
    ],
  },
  { path: 'landing', component: LandingComponent },
  { path: '**', redirectTo: 'landing' },
];
