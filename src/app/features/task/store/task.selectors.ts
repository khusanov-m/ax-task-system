import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITaskState } from './task.reducer';

const taskState = createFeatureSelector<ITaskState>('task');

const getTaskList = (state: ITaskState) => state.taskList;
export const selectTaskList = createSelector(taskState, getTaskList);

const getTotalTaskList = (state: ITaskState) => state.totalTaskItems;
export const selectTotalTaskList = createSelector(taskState, getTotalTaskList);

const getTotalTaskPages = (state: ITaskState) => {
  return (
    Math.trunc(state.totalTaskItems / 10) +
    (state.totalTaskItems % 10 > 0 ? 1 : 0)
  );
};
export const selectTotalTaskPages = createSelector(
  taskState,
  getTotalTaskPages
);

const getOneTask = (state: ITaskState) => state.task;
export const selectOneTask = createSelector(taskState, getOneTask);

const getSortBy = (state: ITaskState) => state.sortBy;
export const selectSortBy = createSelector(taskState, getSortBy);
