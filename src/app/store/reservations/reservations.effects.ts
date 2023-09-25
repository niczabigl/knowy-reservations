import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CoreActionTypes } from '@store/core/core.actions';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ReservationsService } from '@services/reservations.service';
import {
    ReservationsActionTypes, createReservationSuccess, deleteReservationSuccess, getInitialReservationsFail,
    getInitialReservationsSuccess, updateReservationFail, updateReservationSuccess
} from './reservations.actions';
import { Reservation, ReservationInfo } from '@models/Reservation';
import { UsersActionTypes } from '@store/users/users.actions';
import { UserInfo } from '@models/UserInfo';


@Injectable()
export class ReservationsEffects {

    loadReservations$ = createEffect(() => this.actions$.pipe(
        ofType(CoreActionTypes.InitializeAppSuccess),
        mergeMap(() => this.reservationsService.getAllReservations()
            .pipe(
                map((reservations: Reservation[]) => getInitialReservationsSuccess({ reservations })),
                catchError((error: Error) => of(getInitialReservationsFail({ error: JSON.stringify(error) })))
            ))
    ));

    createReservationAfterUserSucceed$ = createEffect(() => this.actions$.pipe(
        ofType(UsersActionTypes.CreateUserAndReservationCreateUserSuccess),
        mergeMap(({ user, reservationInfo }: { user: UserInfo; reservationInfo: ReservationInfo }) =>
            this.reservationsService.createReservation(reservationInfo, user.id)
                .pipe(
                    map((reservation: Reservation) => createReservationSuccess({ reservation })),
                    catchError((error: Error) => of(updateReservationFail({ error: JSON.stringify(error) })))
                ))
    ));

    updateReservation$ = createEffect(() => this.actions$.pipe(
        ofType(ReservationsActionTypes.UpdateReservation),
        mergeMap(({ reservation }: { reservation: Reservation }) => this.reservationsService.updateReservation(reservation)
            .pipe(
                map((updatedReservation: Reservation) => updateReservationSuccess({ reservation: updatedReservation })),
                catchError((error: Error) => of(updateReservationFail({ error: JSON.stringify(error) })))
            ))
    ));

    deleteReservation$ = createEffect(() => this.actions$.pipe(
        ofType(ReservationsActionTypes.DeleteReservation),
        mergeMap(({ reservation }: { reservation: Reservation }) => this.reservationsService.deleteReservation(reservation)
            .pipe(
                map(() => deleteReservationSuccess({ reservation })),
                catchError((error: Error) => of(updateReservationFail({ error: JSON.stringify(error) })))
            ))
    ));

    constructor(
        private actions$: Actions,
        private reservationsService: ReservationsService,
    ) { }
}
