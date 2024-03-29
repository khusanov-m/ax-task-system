import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { TASKS_LIST } from './task.const';
import { ITaskItem, ITaskItemResponse, ITaskListResponse } from './task.type';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  #taskList: ITaskItem[] = [...TASKS_LIST];

  public getTaskList(): Observable<ITaskListResponse> {
    if (!this.#taskList.length) {
      return of({
        data: { taskList: [] },
        message: 'Список задач не найден',
        success: false,
        status: 404,
      });
    }
    return of({
      data: { taskList: this.#taskList },
      message: 'Список задач успешно загружен',
      success: true,
      status: 200,
    });
  }

  public getTask(id: string): Observable<ITaskItemResponse> {
    const task = this.#taskList.find((task) => task.id === id);
    if (task) {
      return of({
        data: { task: task },
        message: 'Успешно загружен',
        success: true,
        status: 200,
      });
    }

    return of({
      data: { task: null },
      message: 'Задача не найдена',
      success: false,
      status: 404,
    });
  }

  public addTask(
    task: ITaskItem
  ): Observable<{ message: string; success: boolean }> {
    this.#taskList = [task, ...this.#taskList];
    return of({
      message: 'Новая задача успешно добавлена',
      success: true,
    });
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
      return of({ message: 'Задача успешно обновлена', success: true });
    }
    return of({ message: 'Задача не найдена', success: false });
  }
}
