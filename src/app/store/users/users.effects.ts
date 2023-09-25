import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from '@services/users.service';
import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import {
    UsersActionTypes, createUserAndReservationCreateUserSuccess, createUserFail, createUserSuccess, deleteUserFail, deleteUserSuccess,
    getInitialUsersFail, getInitialUsersSuccess
} from './users.actions';
import { UserInfo } from '@models/UserInfo';
import { CoreActionTypes } from '@store/core/core.actions';
import { Reservation, ReservationInfo } from '@models/Reservation';

@Injectable()
export class UsersEffects {

    loadUsers$ = createEffect(() => this.actions$.pipe(
        ofType(CoreActionTypes.InitializeAppSuccess),
        mergeMap(() => this.usersServices.getAllUsers()
            .pipe(
                map((users: UserInfo[]) => getInitialUsersSuccess({ users })),
                catchError((error: Error) => of(getInitialUsersFail({ error: error.message })))
            ))
    ));

    createUserAndReservation = createEffect(() => this.actions$.pipe(
        ofType(UsersActionTypes.CreateUserAndReservation),
        mergeMap(({ nonIdUserInfo, reservationInfo }: { nonIdUserInfo: UserInfo; reservationInfo: ReservationInfo }) =>
            this.usersServices.createUser(nonIdUserInfo.name, nonIdUserInfo.email, nonIdUserInfo.phone)
                .pipe(
                    map((user: UserInfo) => createUserAndReservationCreateUserSuccess({ user, reservationInfo })),
                    catchError((error: Error) => of(createUserFail({ error: error.message })))
                ))
    ));

    createUserInfo$ = createEffect(() => this.actions$.pipe(
        ofType(UsersActionTypes.CreateUser),
        mergeMap(({ name, email, phone }: { name: string; email: string; phone: string; reservationInfo: Reservation }) =>
            this.usersServices.createUser(name, email, phone)
                .pipe(
                    map((user: UserInfo) => createUserSuccess({ user })),
                    catchError((error: Error) => of(createUserFail({ error: error.message })))
                ))
    ));

    deleteUserInfo$ = createEffect(() => this.actions$.pipe(
        ofType(UsersActionTypes.DeleteUser),
        mergeMap(({ id, reservation }: { id: number; reservation: Reservation }) => this.usersServices.deleteUser(id)
            .pipe(
                map(() => deleteUserSuccess({ id, reservation })),
                catchError((error: Error) => of(deleteUserFail({ error: error.message })))
            ))
    ));


    constructor(
        private actions$: Actions,
        private usersServices: UsersService
    ) { }
}
