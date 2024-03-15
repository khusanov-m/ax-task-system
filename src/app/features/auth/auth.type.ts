export interface IUser {
  id: string;
  email: string;
  password: string;
  avatar: string;
  displayName: string;
}

export interface LoginResponse {
  user: IUser | null;
  message: string;
}
