import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '.';
import { IUser } from '../auth.type';

export interface IAuthState {
  isAuthenticated: boolean;
  user?: IUser;
  isLoading: boolean;
}

const initialState: IAuthState = {
  isAuthenticated: false,
  user: undefined,
  isLoading: false,
};

export const authReducer = createReducer(
  initialState,

  on(AuthActions.login, (state): IAuthState => ({ ...state, isLoading: true })),
  on(
    AuthActions.loginSuccess,
    AuthActions.autoLogin,
    (state, { user }): IAuthState => ({
      ...state,
      isAuthenticated: true,
      isLoading: false,
      user,
    })
  ),

  on(
    AuthActions.logout,
    (state): IAuthState => ({
      ...state,
      isAuthenticated: false,
      user: undefined,
    })
  )
);
