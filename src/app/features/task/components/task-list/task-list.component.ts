import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  DestroyRef,
  OnInit,
  ViewContainerRef,
  inject,
  input,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SvgIconComponent } from 'angular-svg-icon';
import { PaginationComponent, SortByPipe } from '../../../../shared';
import { TaskActions, TaskSelectors } from '../../store';
import { TASKS_LIST } from '../../task.const';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    TaskItemComponent,
    PaginationComponent,
    SvgIconComponent,
    SortByPipe,
    AsyncPipe,
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent implements OnInit {
  #store = inject(Store);
  #router = inject(Router);
  #route = inject(ActivatedRoute);

  public currentPage = signal(1);
  protected readonly totalPages =
    Math.trunc(TASKS_LIST.length / 10) + (TASKS_LIST.length % 10);
  protected readonly totalItems = TASKS_LIST.length;

  public last = input<boolean>();
  public taskList$ = this.#store.select(TaskSelectors.selectTaskList);
  public sortBy$ = this.#store.select(TaskSelectors.selectSortBy);

  public ngOnInit(): void {
    const page = this.#route.snapshot.queryParamMap.get('page');
    if (!page || !isNaN(Number(page))) {
      this.#loadTaskList(1);
      return;
    }
    this.currentPage.set(Number(page));
    this.#loadTaskList(Number(page));
  }

  #loadTaskList(page: number): void {
    this.currentPage.set(page);
    this.#store.dispatch(TaskActions.loadTaskList({ page: page }));
    this.#router.navigate([''], {
      queryParams: {
        page,
      },
    });
  }

  // Pagination handler

  public onPrev(): void {
    if (this.currentPage() <= 1) {
      return;
    }
    this.#loadTaskList(this.currentPage() - 1);
  }
  public onNext(): void {
    if (this.currentPage() >= this.totalPages) {
      return;
    }
    this.#loadTaskList(this.currentPage() + 1);
  }

  // Model dialog handler
  #destroy = inject(DestroyRef);
  #modal = inject(ViewContainerRef);
  public dialogComponentRef: ComponentRef<TaskFormComponent> | undefined;
  public openTask(id: string): void {
    this.#router.navigate([''], {
      queryParams: { id },
      queryParamsHandling: 'merge',
    });
    this.dialogComponentRef = this.#modal.createComponent(TaskFormComponent);
    this.#watchCloseDialog();
  }
  public removeTask(id: string): void {
    this.#store.dispatch(TaskActions.removeTask({ id }));
  }
  #watchCloseDialog(): void {
    if (this.dialogComponentRef) {
      this.dialogComponentRef.instance.close
        .pipe(takeUntilDestroyed(this.#destroy))
        .subscribe(() => {
          this.dialogComponentRef?.destroy();
        });
    }
  }
}
