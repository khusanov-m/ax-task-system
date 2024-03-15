import { AuthActions } from '../../auth/store';
import { TaskActions } from '../../task/store';

export const ErrorActions = [
  AuthActions.loginFailure,

  TaskActions.loadTaskListFailure,
  TaskActions.loadOneTaskFailure,
  TaskActions.addTaskFailure,
  TaskActions.removeTaskFailure,
  TaskActions.updateTaskFailure,
];

export const SuccessActions = [
  AuthActions.loginSuccess,

  TaskActions.addTaskSuccess,
  TaskActions.removeTaskSuccess,
  TaskActions.updateTaskSuccess,
];

export const InfoActions = [];
