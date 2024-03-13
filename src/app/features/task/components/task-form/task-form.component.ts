import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { SvgIconComponent } from 'angular-svg-icon';
import { Subject } from 'rxjs';
import {
  ButtonComponent,
  InputComponent,
  SelectComponent,
} from '../../../../shared';
import { TaskActions, TaskSelectors } from '../../store';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [SvgIconComponent, InputComponent, SelectComponent, ButtonComponent],
  templateUrl: './task-form.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskFormComponent implements OnInit {
  #route = inject(ActivatedRoute);
  #store = inject(Store);
  #destroy = inject(DestroyRef);

  public task$ = this.#store.select(TaskSelectors.selectOneTask);

  public readonly close = new Subject<void>();

  public ngOnInit(): void {
    console.log('Task Form Component');
    this.#route.queryParams
      .pipe(takeUntilDestroyed(this.#destroy))
      .subscribe((params) => {
        if (params['id']) {
          console.log('Task ID:', params['id']);
          this.#store.dispatch(TaskActions.loadOneTask({ id: params['id'] }));
        }
      });
  }

  public closeDialog(): void {
    this.close.next();
    this.close.complete();
  }

  public get setDate(): string {
    console.log(new Date().toISOString().split('T')[0]);

    return new Date().toISOString().split('T')[0];
  }
}
