import { ResponseConfig } from '../../core/config/config.type';
export interface ITaskItem {
  id: string;
  date: Date;
  title: string;
  description: string;
  priority: string;
  userId: string;
}

export interface ITaskListResponse
  extends ResponseConfig<{ taskList: ITaskItem[] }> {}
export interface ITaskItemResponse
  extends ResponseConfig<{ task: ITaskItem | null }> {}
