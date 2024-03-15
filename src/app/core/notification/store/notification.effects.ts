import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HotToastService } from '@ngxpert/hot-toast';
import { tap } from 'rxjs';
import { NotificationActions } from '.';

@Injectable()
export class NotificationEffects {
  #toast = inject(HotToastService);
  #actions = inject(Actions);

  showError$ = createEffect(
    () => {
      return this.#actions.pipe(
        ofType(...NotificationActions.ErrorActions),
        tap(({ error }) => {
          this.#toast.error(error);
        })
      );
    },
    {
      dispatch: false,
    }
  );

  showSuccess$ = createEffect(
    () => {
      return this.#actions.pipe(
        ofType(...NotificationActions.SuccessActions),
        tap(({ message }) => {
          this.#toast.success(message);
        })
      );
    },
    {
      dispatch: false,
    }
  );

  infoSuccess$ = createEffect(
    () => {
      return this.#actions.pipe(
        ofType(...NotificationActions.InfoActions),
        tap((info) => {
          this.#toast.info(info);
        })
      );
    },
    {
      dispatch: false,
    }
  );
}
