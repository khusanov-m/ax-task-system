import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { SvgIconComponent } from 'angular-svg-icon';
import { BadgeComponent, BadgePipe } from '../../../../shared';
import { TaskActions } from '../../store';
import { ITaskItem } from '../../task.type';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [SvgIconComponent, BadgeComponent, DatePipe, BadgePipe],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItemComponent {
  #store = inject(Store);
  public isLast = input.required<boolean>();
  public task = input<ITaskItem>();

  public removeTask(id: string): void {
    this.#store.dispatch(TaskActions.removeTask({ id }));
  }
}
