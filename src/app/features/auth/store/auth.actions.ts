import { createAction, props } from '@ngrx/store';
import { IUser } from '../auth.type';

export const login = createAction(
  '[Auth] Login',
  props<{ payload: { email: string; password: string } }>()
);
export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: IUser; message: string }>()
);
export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

export const autoLogin = createAction(
  '[Auth] Auto Login',
  props<{ user: IUser }>()
);

