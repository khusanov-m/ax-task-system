import { ActionReducerMap } from '@ngrx/store';
import {
  IAuthState,
  authReducer,
} from '../../features/auth/store/auth.reducer';

interface RootState {
  auth: IAuthState;
}

export const AX_TASK_NGRX_STORE: ActionReducerMap<RootState> = {
  auth: authReducer,
};
