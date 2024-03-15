import { AsyncPipe } from '@angular/common';
import {
  Component,
  ComponentRef,
  DestroyRef,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { SORT_OPTIONS } from '../../../../layout/layout.const';
import {
  ButtonComponent,
  SelectComponent,
  type IValueName,
} from '../../../../shared';
import { AuthSelectors } from '../../../auth/store';
import { TaskActions, TaskSelectors } from '../../store';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-task-header',
  standalone: true,
  imports: [ButtonComponent, SelectComponent, AsyncPipe],
  templateUrl: './task-header.component.html',
  styleUrl: './task-header.component.scss',
})
export class HeaderComponent {
  #store = inject(Store);
  public sortOptions = SORT_OPTIONS;
  public sortBy$ = this.#store.select(TaskSelectors.selectSortBy);
  public user$ = this.#store.select(AuthSelectors.selectUser);

  public handleSort(val: IValueName): void {
    this.#store.dispatch(TaskActions.setSortBy({ sortBy: val }));
  }

  #destroy = inject(DestroyRef);
  #modal = inject(ViewContainerRef);
  public dialogComponentRef: ComponentRef<TaskFormComponent> | undefined;
  public openTaskForm(): void {
    this.dialogComponentRef = this.#modal.createComponent(TaskFormComponent);
    this.#watchCloseDialog();
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
