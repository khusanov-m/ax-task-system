import { createReducer, on } from '@ngrx/store';
import { TaskActions } from '.';
import { type IValueName } from '../../../shared';
import { ITaskItem } from '../task.type';

export interface ITaskState {
  taskList: ITaskItem[];
  task: ITaskItem | null;
  loading: boolean;
  error: string;
  sortBy: IValueName;
}

const initialState: ITaskState = {
  taskList: [],
  task: null,
  loading: false,
  error: '',
  sortBy: { value: 'date', displayName: 'Дате' },
};

export const taskReducer = createReducer(
  initialState,

  on(
    TaskActions.loadTaskList,
    (state): ITaskState => ({ ...state, error: '', loading: true })
  ),
  on(
    TaskActions.loadTaskListSuccess,
    (state, { taskList }): ITaskState => ({
      ...state,
      error: '',
      loading: false,
      taskList,
    })
  ),
  on(
    TaskActions.loadTaskListFailure,
    (state, { error }): ITaskState => ({ ...state, loading: false, error })
  ),

  on(
    TaskActions.loadOneTask,
    (state): ITaskState => ({ ...state, error: '', loading: true })
  ),
  on(
    TaskActions.loadOneTaskFailure,
    (state, { error }): ITaskState => ({ ...state, loading: false, error })
  ),
  on(
    TaskActions.loadOneTaskSuccess,
    (state, { task }): ITaskState => ({
      ...state,
      error: '',
      loading: false,
      task,
    })
  ),

  on(
    TaskActions.setSortBy,
    (state, { sortBy }): ITaskState => ({ ...state, sortBy })
  )
);
