import { Routes } from '@angular/router';

import { ShellComponent } from './layout/shell/shell';
import { HomeComponent } from './features/home/home';
import { AboutComponent } from './features/about/about';
import { ProjectsComponent } from './features/projects/projects';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },

  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      { path: 'about', component: AboutComponent },
      {path: 'projects', component: ProjectsComponent }
    ],
  },
];
