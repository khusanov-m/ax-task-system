import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITaskState } from './task.reducer';

const taskState = createFeatureSelector<ITaskState>('task');

const getTaskList = (state: ITaskState) => state.taskList;
export const selectTaskList = createSelector(taskState, getTaskList);

const getOneTask = (state: ITaskState) => state.task;
export const selectOneTask = createSelector(taskState, getOneTask);

const getSortBy = (state: ITaskState) => state.sortBy;
export const selectSortBy = createSelector(taskState, getSortBy);
