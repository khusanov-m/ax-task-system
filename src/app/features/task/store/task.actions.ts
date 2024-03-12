import { createAction } from '@ngrx/store';

export const loadTaskList = createAction('[Task] Load Task List');
export const loadTaskListSuccess = createAction(
  '[Task] Load Task List Success'
);
export const loadTaskListFailure = createAction(
  '[Task] Load Task List Failure'
);
