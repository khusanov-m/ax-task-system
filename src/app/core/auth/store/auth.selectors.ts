import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAuthState } from "./auth.reducer";

const authState = createFeatureSelector<IAuthState>('auth');

const getAuthState = (state: IAuthState) => state.isAuthenticated;
export const selectAuthState = createSelector(authState, getAuthState);
