import { TaskActions } from '../../../features/task/store';

export const ErrorActions = [
  TaskActions.loadTaskListFailure,
  TaskActions.loadOneTaskFailure,
  TaskActions.addTaskFailure,
  TaskActions.removeTaskFailure,
  TaskActions.updateTaskFailure,
];

export const SuccessActions = [
  TaskActions.addTaskSuccess,
  TaskActions.removeTaskSuccess,
  TaskActions.updateTaskSuccess,
];

export const InfoActions = [];
