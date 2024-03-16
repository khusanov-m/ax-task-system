import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
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
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';
import {
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskFormComponent implements OnInit {
  #cookie = inject(CookieService);
  #router = inject(Router);
  #route = inject(ActivatedRoute);
  #store = inject(Store);
  #destroy = inject(DestroyRef);
  #fb = inject(FormBuilder);

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
        } else {
          this.#loadTemplate();
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
      this.#cookie.delete('taskTemplate');
      this.closeDialog(true);
    }
  }
  public saveTaskTemplate(): void {
    this.#cookie.set('taskTemplate', JSON.stringify(this.#taskForm.value));
  }
  #loadTemplate(): void {
    const template = this.#cookie.get('taskTemplate');
    if (template) {
      this.#taskForm.patchValue(JSON.parse(template));
    }
  }

  public closeDialog(isNew = false): void {
    this.close.next();
    this.close.complete();

    this.#store.dispatch(TaskActions.clearOneTask());

    const query: { id: null; edit: null; page?: number } = {
      id: null,
      edit: null,
    };

    if (isNew) {
      query['page'] = 1;
    }

    this.#router.navigate([], {
      queryParams: query,
      queryParamsHandling: 'merge',
    });
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
}
