import { createAction, props } from '@ngrx/store';
import { type IValueName } from '../../../shared';
import { ITaskItem } from '../task.type';

export const loadTaskList = createAction(
  '[Task] Load Task List',
  props<{ page: number }>()
);
export const loadTaskListSuccess = createAction(
  '[Task] Load Task List Success',
  props<{ taskList: ITaskItem[] }>()
);
export const loadTaskListFailure = createAction(
  '[Task] Load Task List Failure',
  props<{ error: string }>()
);

export const loadOneTask = createAction(
  '[Task] Load One Task',
  props<{ id: string }>()
);
export const loadOneTaskSuccess = createAction(
  '[Task] Load One Task Success',
  props<{ task: ITaskItem }>()
);
export const loadOneTaskFailure = createAction(
  '[Task] Load One Task Failure',
  props<{ error: string }>()
);
export const clearOneTask = createAction('[Task] Clear One Task');

export const setSortBy = createAction(
  '[Task] Set Sort By',
  props<{ sortBy: IValueName }>()
);

export const addTask = createAction(
  '[Task] Add Task',
  props<{ task: ITaskItem }>()
);
export const addTaskSuccess = createAction(
  '[Task] Add Task Success',
  props<{ message: string }>()
);
export const addTaskFailure = createAction(
  '[Task] Add Task Failure',
  props<{ error: string }>()
);

export const removeTask = createAction(
  '[Task] Remove Task',
  props<{ id: string }>()
);
export const removeTaskSuccess = createAction(
  '[Task] Remove Task Success',
  props<{ message: string }>()
);
export const removeTaskFailure = createAction(
  '[Task] Remove Task Failure',
  props<{ error: string }>()
);

export const updateTask = createAction(
  '[Task] Update Task',
  props<{ task: ITaskItem }>()
);
export const updateTaskSuccess = createAction(
  '[Task] Update Task Success',
  props<{ message: string }>()
);
export const updateTaskFailure = createAction(
  '[Task] Update Task Failure',
  props<{ error: string }>()
);
