import { createReducer, on } from '@ngrx/store';
import { TaskActions } from '.';
import { type IValueName } from '../../../shared';
import { ITaskItem } from './../task.type';

export interface ITaskState {
  totalTaskCount: number;
  taskList: ITaskItem[];
  task: ITaskItem | null;
  loading: boolean;
  sortBy: IValueName;
}

const initialState: ITaskState = {
  totalTaskCount: 0,
  taskList: [],
  task: null,
  loading: false,
  sortBy: { value: 'date', displayName: 'Дате' },
};

export const taskReducer = createReducer(
  initialState,

  on(
    TaskActions.loadTaskList,
    (state): ITaskState => ({ ...state, loading: true })
  ),
  on(
    TaskActions.loadTaskListSuccess,
    (state, { taskList }): ITaskState => ({
      ...state,
      loading: false,
      taskList,
    })
  ),
  on(
    TaskActions.loadTaskListFailure,
    (state): ITaskState => ({ ...state, loading: false })
  ),

  on(
    TaskActions.loadOneTask,
    (state): ITaskState => ({ ...state, loading: true })
  ),
  on(
    TaskActions.loadOneTaskFailure,
    (state): ITaskState => ({ ...state, loading: false })
  ),
  on(
    TaskActions.loadOneTaskSuccess,
    (state, { task }): ITaskState => ({
      ...state,
      loading: false,
      task,
    })
  ),
  on(
    TaskActions.clearOneTask,
    (state): ITaskState => ({
      ...state,
      task: null,
    })
  ),

  on(
    TaskActions.setSortBy,
    (state, { sortBy }): ITaskState => ({ ...state, sortBy })
  ),

  on(TaskActions.removeTask, (state, { id }): ITaskState => {
    const taskList = state.taskList.filter((task) => task.id !== id);
    return { ...state, loading: true, taskList };
  }),
  on(
    TaskActions.removeTaskSuccess,
    (state): ITaskState => ({ ...state, loading: false })
  ),

  on(TaskActions.addTask, (state, { task }): ITaskState => {
    const taskList = [task, ...state.taskList];
    return { ...state, loading: true, taskList: taskList.slice(0, 10) };
  })
);
