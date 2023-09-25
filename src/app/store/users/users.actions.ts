import { createAction, props } from '@ngrx/store';
import { UserInfo } from '@models/UserInfo';
import { Reservation, ReservationInfo } from '@models/Reservation';

export enum UsersActionTypes {
    GetInitialUsers = '[Users] Getting initial Users',
    GetInitialUsersSuccess = '[Users] Getting initial Users success',
    GetInitialUsersFail = '[Users] Getting initial Users fail',
    CreateUserAndReservation = '[Users] Create User and Perform Reservation',
    CreateUserAndReservationCreateUserSuccess = '[Users] Create User Success and Perform Reservation',
    CreateUser = '[Users] Create user',
    CreateUserSuccess = '[Users] Create user success',
    CreateUserFail = '[Users] Create user fail',
    UpdateUser = '[Users] Update user',
    UpdateUserSuccess = '[Users] Update user success',
    UpdateUserFail = '[Users] Update user fail',
    DeleteUser = '[Users] Delete user',
    DeleteUserSuccess = '[Users] Delete user success',
    DeleteUserFail = '[Users] Delete user fail',
}

export const getInitialUsers = createAction(
    UsersActionTypes.GetInitialUsers
);

export const getInitialUsersSuccess = createAction(
    UsersActionTypes.GetInitialUsersSuccess,
    props<{ users: UserInfo[] }>()
);

export const getInitialUsersFail = createAction(
    UsersActionTypes.GetInitialUsersFail,
    props<{ error: string }>()
);

export const createUserAndReservation = createAction(
    UsersActionTypes.CreateUserAndReservation,
    props<{ nonIdUserInfo: UserInfo; reservationInfo: ReservationInfo }>()
);

export const createUserAndReservationCreateUserSuccess = createAction(
    UsersActionTypes.CreateUserAndReservationCreateUserSuccess,
    props<{ user: UserInfo; reservationInfo: ReservationInfo }>()
);

export const createUser = createAction(
    UsersActionTypes.CreateUser,
    props<{ nonIdUserInfo: UserInfo; reservationInfo: ReservationInfo }>()
);

export const createUserSuccess = createAction(
    UsersActionTypes.CreateUserSuccess,
    props<{ user: UserInfo }>()
);

export const createUserFail = createAction(
    UsersActionTypes.CreateUserFail,
    props<{ error: string }>()
);

export const deleteUser = createAction(
    UsersActionTypes.DeleteUser,
    props<{ id: number; reservation: Reservation }>()
);

export const deleteUserSuccess = createAction(
    UsersActionTypes.DeleteUserSuccess,
    props<{ id: number; reservation: Reservation }>()
);

export const deleteUserFail = createAction(
    UsersActionTypes.DeleteUserFail,
    props<{ error: string }>()
);
