import { UserInfo } from '@models/UserInfo';
import { createReducer, on } from '@ngrx/store';
import {
    createUserAndReservationCreateUserSuccess,
    createUserFail, createUserSuccess, deleteUserFail, deleteUserSuccess,
    getInitialUsersFail, getInitialUsersSuccess
} from './users.actions';

export interface UsersState {
    users: UserInfo[];
    loading: boolean;
    error: string;
}

const initialState: UsersState = {
    users: [],
    loading: true,
    error: ''
};

export const usersReducer = createReducer(
    initialState,
    on(getInitialUsersSuccess, (state, { users }) => ({ ...state, users, loading: false })),
    on(
        createUserSuccess,
        createUserAndReservationCreateUserSuccess, (state, { user }) => ({ ...state, users: [...state.users, user] })
    ),
    on(deleteUserSuccess, (state, { id }) => ({ ...state, users: state.users.filter((user: UserInfo) => user.id !== id) })),
    on(getInitialUsersFail, (state, { error }) => ({ ...state, error, loading: false })),
    on(createUserFail, (state, { error }) => ({ ...state, error })),
    on(deleteUserFail, (state, { error }) => ({ ...state, error })),
);
