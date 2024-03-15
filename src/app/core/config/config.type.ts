export interface ResponseConfig<T> {
  data: T;
  message: string;
  status: number;
  success: boolean;
}
