import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAuthState } from './auth.reducer';

const authState = createFeatureSelector<IAuthState>('auth');

const getAuthState = (state: IAuthState) => state.isAuthenticated;
export const selectAuthState = createSelector(authState, getAuthState);

const getUser = (state: IAuthState) => state.user;
export const selectUser = createSelector(authState, getUser);

const getLoading = (state: IAuthState) => state.isLoading;
export const selectLoading = createSelector(authState, getLoading);
