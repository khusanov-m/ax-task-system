import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  input,
} from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { BadgeComponent, BadgePipe } from '../../../../shared';
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
  public isLast = input.required<boolean>();
  public task = input<ITaskItem>();

  @Output() public onTaskOpen = new EventEmitter<void>();
  @Output() public onTaskRemove = new EventEmitter<void>();
}
