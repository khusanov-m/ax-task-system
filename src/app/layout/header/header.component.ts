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
import { TaskFormComponent } from '../../features/task/components/task-form/task-form.component';
import { TaskActions, TaskSelectors } from '../../features/task/store';
import {
  ButtonComponent,
  SelectComponent,
  type IValueName,
} from '../../shared';
import { SORT_OPTIONS } from '../layout.const';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, SelectComponent, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  #store = inject(Store);
  public sortOptions = SORT_OPTIONS;
  public sortBy$ = this.#store.select(TaskSelectors.selectSortBy);

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
