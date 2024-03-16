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

  public last = input<boolean>();

  public currentPage = signal(1);
  public totalPages = signal(0);

  protected readonly totalItems$ = this.#store.select(
    TaskSelectors.selectTotalTaskList
  );
  protected readonly totalPages$ = this.#store.select(
    TaskSelectors.selectTotalTaskPages
  );

  public taskList$ = this.#store.select(TaskSelectors.selectTaskList);
  public sortBy$ = this.#store.select(TaskSelectors.selectSortBy);

  public ngOnInit(): void {
    this.#watchQueryParams();

    this.totalPages$
      .pipe(takeUntilDestroyed(this.#destroy))
      .subscribe((total) => {
        this.totalPages.set(total);
      });
  }

  #watchQueryParams(): void {
    this.#route.queryParams
      .pipe(takeUntilDestroyed(this.#destroy))
      .subscribe((query) => {
        const page = query['page'];
        if (!page || isNaN(page)) {
          this.#router.navigate([''], {
            queryParams: { page: 1 },
          });
        } else if (page) {
          this.#loadTaskList(Number(page));
        }
      });
  }

  #loadTaskList(page: number): void {
    this.currentPage.set(page);
    this.#store.dispatch(TaskActions.loadTaskList({ page: page }));
  }

  // Pagination handler

  public onPrev(): void {
    if (this.currentPage() <= 1) {
      return;
    }
    this.#router.navigate([''], {
      queryParams: {
        page: this.currentPage() - 1,
      },
    });
  }
  public onNext(): void {
    if (this.currentPage() >= this.totalPages()) {
      return;
    }

    console.log(this.currentPage());
    console.log(this.totalPages());

    this.#router.navigate([''], {
      queryParams: {
        page: this.currentPage() + 1,
      },
    });
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
