import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of, switchMap } from 'rxjs';
import { TaskActions } from '.';
import { TaskService } from '../task.service';
import { updateTaskSuccess } from './task.actions';

@Injectable()
export class TaskEffects {
  #actions = inject(Actions);
  #taskService = inject(TaskService);

  loadTaskList$ = createEffect(() => {
    return this.#actions.pipe(
      ofType(TaskActions.loadTaskList),
      switchMap(({ page }) =>
        this.#taskService.getTaskList(page).pipe(
          map((res) => {
            if (res && res.success) {
              return TaskActions.loadTaskListSuccess({
                taskList: res.data.taskList,
              });
            }
            return TaskActions.loadTaskListFailure({
              error: res.message,
            });
          }),
          catchError((error) => of(TaskActions.loadTaskListFailure({ error })))
        )
      )
    );
  });

  loadOneTask$ = createEffect(() => {
    return this.#actions.pipe(
      ofType(TaskActions.loadOneTask),
      switchMap(({ id }) =>
        this.#taskService.getTask(id).pipe(
          map((res) => {
            if (res && res.success && res.data.task)
              return TaskActions.loadOneTaskSuccess({ task: res.data.task });
            return TaskActions.loadOneTaskFailure({ error: res.message });
          }),
          catchError((error) => of(TaskActions.loadOneTaskFailure({ error })))
        )
      )
    );
  });

  addTask$ = createEffect(() => {
    return this.#actions.pipe(
      ofType(TaskActions.addTask),
      switchMap(({ task }) =>
        this.#taskService.addTask(task).pipe(
          map((res) => {
            if (res && res.success) {
              return TaskActions.addTaskSuccess({
                message: 'Новая задача успешно добавлена',
              });
            }
            return TaskActions.addTaskFailure({ error: res.message });
          }),
          catchError((error) => of(TaskActions.addTaskFailure({ error })))
        )
      )
    );
  });

  removeTask$ = createEffect(() => {
    return this.#actions.pipe(
      ofType(TaskActions.removeTask),
      concatMap(({ id }) =>
        this.#taskService.removeTask(id).pipe(
          map((res) => {
            if (res && res.success) {
              return TaskActions.removeTaskSuccess({ message: res.message });
            }
            return TaskActions.removeTaskFailure({ error: res.message });
          }),
          catchError((error) => of(TaskActions.removeTaskFailure({ error })))
        )
      )
    );
  });

  updateTask$ = createEffect(() => {
    return this.#actions.pipe(
      ofType(TaskActions.updateTask),
      concatMap(({ task }) => {
        return this.#taskService.updateTask(task).pipe(
          map((res) => {
            if (res && res.success) {
              return updateTaskSuccess({ message: res.message });
            }
            return TaskActions.updateTaskFailure({ error: res.message });
          }),
          catchError((error) => of(TaskActions.updateTaskFailure({ error })))
        );
      })
    );
  });
}
