import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnDestroy,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SvgIconComponent } from 'angular-svg-icon';
import { Subject } from 'rxjs';
import {
  BadgePipe,
  ButtonComponent,
  IValueName,
  InputComponent,
  RadioGroupComponent,
  SelectComponent,
} from '../../../../shared';
import { InputCalendarComponent } from '../../../../shared/ui/input-calendar/input-calendar.component';
import { TaskActions, TaskSelectors } from '../../store';
import { TASK_MOCK_USERS, TASK_PRIORITY_OPTIONS } from '../../task.const';
import { ITaskItem } from '../../task.type';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    SvgIconComponent,
    InputComponent,
    SelectComponent,
    ButtonComponent,
    RadioGroupComponent,
    ReactiveFormsModule,
    InputCalendarComponent,
  ],
  templateUrl: './task-form.component.html',
  styles: ``,
  providers: [BadgePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskFormComponent implements OnInit, OnDestroy {
  #router = inject(Router);
  #route = inject(ActivatedRoute);
  #store = inject(Store);
  #destroy = inject(DestroyRef);
  #fb = inject(FormBuilder);
  #badgePipe = inject(BadgePipe);

  #taskForm = this.#fb.nonNullable.group({
    date: [''],
    title: ['', [Validators.required]],
    description: [''],
    priority: ['', [Validators.required]],
    userId: ['', [Validators.required]],
  });
  public get form(): FormGroup {
    return this.#taskForm;
  }

  public priorityOptions = TASK_PRIORITY_OPTIONS;
  public userOptions = TASK_MOCK_USERS;

  public task$ = this.#store.select(TaskSelectors.selectOneTask);

  public readonly close = new Subject<void>();
  public formOperation = signal('new');

  public get isDisabled(): boolean {
    return this.formOperation() === 'view';
  }

  public ngOnInit(): void {
    this.#route.queryParams
      .pipe(takeUntilDestroyed(this.#destroy))
      .subscribe((params) => {
        if (params['id'] && params['edit']) {
          this.formOperation.set('edit');
        } else if (params['id']) {
          this.formOperation.set('view');
          this.#taskForm.disable();
          this.#store.dispatch(TaskActions.loadOneTask({ id: params['id'] }));
        }
      });

    this.#checkLoadTask();
  }

  public onPriorityChange(priority: string): void {
    this.#taskForm.patchValue({ priority });
  }
  public onDateSelect(date: Date): void {
    this.#taskForm.patchValue({ date: date.toISOString() });
  }
  public onUserSelect(data: IValueName): void {
    this.#taskForm.patchValue({ userId: data.value });
  }

  public saveTask(): void {
    if (this.#taskForm.valid) {
      const date = this.#taskForm.value.date
        ? new Date(this.#taskForm.value.date as string)
        : new Date();
      const task: ITaskItem = {
        id: new Date().toISOString(),
        title: this.#taskForm.value.title as string,
        description: this.#taskForm.value.description as string,
        priority: this.#taskForm.value.priority as string,
        userId: this.#taskForm.value.userId as string,
        date: date,
      };

      this.#store.dispatch(TaskActions.addTask({ task }));
      this.closeDialog();
    }
  }
  public saveTaskTemplate(): void {}

  public closeDialog(): void {
    this.close.next();
    this.close.complete();
  }

  #checkLoadTask(): void {
    this.task$.pipe(takeUntilDestroyed(this.#destroy)).subscribe((task) => {
      if (task) {
        this.#taskForm.patchValue({
          date: task.date.toISOString(),
          title: task.title,
          description: task.description,
          priority: task.priority,
          userId: task.userId,
        });
      }
    });
  }

  public ngOnDestroy(): void {
    this.#store.dispatch(TaskActions.clearOneTask());
    this.#router.navigate([], {
      queryParams: {
        id: null,
        edit: null,
      },
      queryParamsHandling: 'merge',
    });
  }
}
