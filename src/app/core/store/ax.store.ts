import { ActionReducerMap } from '@ngrx/store';
import {
  IAuthState,
  authReducer,
} from '../../features/auth/store/auth.reducer';
import {
  ITaskState,
  taskReducer,
} from '../../features/task/store/task.reducer';

interface RootState {
  auth: IAuthState;
  task: ITaskState;
}

export const AX_TASK_NGRX_STORE: ActionReducerMap<RootState> = {
  auth: authReducer,
  task: taskReducer,
};
