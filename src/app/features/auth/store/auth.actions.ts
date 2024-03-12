import { createAction, props } from '@ngrx/store';

export const authLogin = createAction('[Auth] Login');
export const authLoginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: string }>()
);
export const authLoginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);
