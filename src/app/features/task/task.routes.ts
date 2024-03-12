import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';

export const TASK_ROUTES: Routes = [
  {
    path: '',
    component: TaskListComponent,
  },
  {
    path: ':id',
    component: TaskItemComponent,
  }
];

