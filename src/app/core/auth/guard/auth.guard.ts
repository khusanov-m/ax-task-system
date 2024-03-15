import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AuthSelectors } from '../store';

export const AuthGuard: CanActivateFn = (route) => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select(AuthSelectors.selectAuthState).pipe(
    map((isAuth) => {
      if (isAuth) {
        if (route.routeConfig?.path === 'auth') {
          return router.createUrlTree(['app']);
        }
        return true;
      }
      return router.createUrlTree(['auth']);
    })
  );
};
