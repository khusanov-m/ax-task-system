import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './components/task-header/task-header.component';
import { TaskListComponent } from './components/task-list/task-list.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskListComponent, HeaderComponent],
  templateUrl: './task.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskPageComponent {}
