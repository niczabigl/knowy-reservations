import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './users.reducer';

export const getUsersState = createFeatureSelector<UsersState>('users');

export const selectUsers = createSelector(getUsersState, (state: UsersState) => state.users);

export const selectUsersError = createSelector(getUsersState, (state: UsersState) => state.error);
