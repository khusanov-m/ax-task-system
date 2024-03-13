import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '.';

export interface IAuthState {
  isAuthenticated: boolean;
}

const initialState: IAuthState = {
  isAuthenticated: true, // default : false
};

export const authReducer = createReducer(
  initialState,

  on(AuthActions.authLogin, (state): IAuthState => ({ ...state }))
);
