import { IUser } from './auth.type';

export const MOCK_USERS: IUser[] = [
  {
    id: '0',
    email: 'admin@gmail.com',
    password: 'admin',
    avatar: '',
    displayName: 'Ax Admin',
  },
  {
    id: '1',
    email: 'tomdane@gmail.com',
    password: 'randompassword',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    displayName: 'Tom Dane',
  },
  {
    id: '2',
    email: 'bensmith@gmail.com',
    password: 'bkmzgj',
    avatar:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    displayName: 'Ben Smith',
  },
];
