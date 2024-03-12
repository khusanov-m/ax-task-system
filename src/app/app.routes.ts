import { Routes } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { AuthGuard } from './features/auth/guard/auth.guard';
import { UiDemoComponent } from './shared/ui/ui-demo/ui-demo.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app',
  },
  {
    path: 'auth',
    loadComponent: () => AuthComponent,
    title: 'Authentication',
  },
  {
    path: 'ui-demo',
    loadComponent: () => UiDemoComponent,
    title: 'UI Demo Page',
  },
  {
    path: 'app',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/task/task.routes').then((r) => r.TASK_ROUTES),
  },
];
