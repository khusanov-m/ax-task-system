import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { TASKS_LIST } from './task.const';
import { ITaskItem, ITaskItemResponse, ITaskListResponse } from './task.type';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  #taskList: ITaskItem[] = TASKS_LIST[0].taskList;

  public getTaskList(page: number): Observable<ITaskListResponse> {
    const taskList = TASKS_LIST.find((task) => task.page === page)?.taskList;

    if (!taskList) {
      return of({
        data: { taskList: [] },
        message: 'Task list not found',
        success: false,
        status: 404,
      }).pipe(delay(1000));
    }

    return of({
      data: { taskList },
      message: 'Task list loaded successfully',
      success: true,
      status: 200,
    }).pipe(delay(1000));
  }

  public getTask(id: string): Observable<ITaskItemResponse> {
    const task = this.#taskList.find((task) => task.id === id);
    if (task) {
      return of({
        data: { task: task },
        message: 'Task loaded successfully',
        success: true,
        status: 200,
      }).pipe(delay(1000));
    }

    return of({
      data: { task: null },
      message: 'Task not found',
      success: false,
      status: 404,
    });
  }

  public addTask(
    task: ITaskItem
  ): Observable<{ message: string; success: boolean }> {
    this.#taskList.unshift(task);
    return of({
      message: 'Новая задача успешно добавлена',
      success: true,
    }).pipe(delay(1000));
  }

  public removeTask(
    id: string
  ): Observable<{ message: string; success: boolean }> {
    this.#taskList = this.#taskList.filter((task) => task.id !== id);
    return of({ message: 'Задача успешно удалена', success: true }).pipe(
      delay(1000)
    );
  }

  public updateTask(
    task: ITaskItem
  ): Observable<{ message: string; success: boolean }> {
    const index = this.#taskList.findIndex((t) => t.id === task.id);
    if (index >= 0) {
      this.#taskList[index] = task;
      return of({ message: 'Задача успешно обновлена', success: true }).pipe(
        delay(1000)
      );
    }
    return of({ message: 'Задача не найдена', success: false }).pipe(
      delay(1000)
    );
  }
}
