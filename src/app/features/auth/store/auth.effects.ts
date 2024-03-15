import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthActions } from '.';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthEffects {
  #actions = inject(Actions);
  #authService = inject(AuthService);

  login$ = createEffect(() => {
    return this.#actions.pipe(
      ofType(AuthActions.login),
      switchMap(({ payload }) =>
        this.#authService.login(payload).pipe(
          map((res) => {
            if (res && res.user) {
              return AuthActions.loginSuccess({
                user: res.user,
                message: res.message,
              });
            }
            return AuthActions.loginFailure({ error: res.message });
          }),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    );
  });
}
