import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-task-dialog',
  standalone: true,
  imports: [],
  templateUrl: './task-dialog.component.html',
  styleUrl: './task-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskDialogComponent {

}
