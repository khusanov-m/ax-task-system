import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent, SoonComponent } from './shared';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app',
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./features/auth/auth.component').then((c) => c.AuthComponent),
    title: 'Authentication',
  },
  {
    path: 'ui-demo',
    loadComponent: () => import('./shared').then((c) => c.UiDemoComponent),
    title: 'UI Demo Page',
  },
  {
    path: 'app',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./layout/main-layout/main-layout.component').then(
        (c) => c.MainLayoutComponent
      ),
    loadChildren: () => [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tasks',
      },
      {
        path: 'tasks',
        loadComponent: () =>
          import('./features/task/task.component').then(
            (c) => c.TaskPageComponent
          ),
      },
      {
        path: '**',
        component: SoonComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
