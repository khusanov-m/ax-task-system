import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskItemComponent {

}
