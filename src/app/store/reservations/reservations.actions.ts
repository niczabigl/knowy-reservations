import { Reservation } from '@models/Reservation';
import { createAction, props } from '@ngrx/store';

export enum ReservationsActionTypes {
    GetInitialReservations = '[Reservations] Getting initial Reservations',
    GetInitialReservationsSuccess = '[Reservations] Getting initial Reservations success',
    GetInitialReservationsFail = '[Reservations] Getting initial Reservations fail',
    CreateReservationSuccess = '[Reservations] Create Reservation success',
    CreateReservationFail = '[Reservations] Create Reservation fail',
    UpdateReservation = '[Reservations] Update Reservation',
    UpdateReservationSuccess = '[Reservations] Update Reservation success',
    UpdateReservationFail = '[Reservations] Update Reservation fail',
    DeleteReservation = '[Reservations] Delete Reservation',
    DeleteReservationSuccess = '[Reservations] Delete Reservation success',
    DeleteReservationFail = '[Reservation] Delete Reservation fail',
    SwitchUserReservationSuccess = '[Reservation] Switch User Reservation success',
    SwitchUserReservationFail = '[Reservation] Switch User Reservation fail'

}

export const getInitialReservations = createAction(
    ReservationsActionTypes.GetInitialReservations
);

export const getInitialReservationsSuccess = createAction(
    ReservationsActionTypes.GetInitialReservationsSuccess,
    props<{ reservations: Reservation[] }>()
);

export const getInitialReservationsFail = createAction(
    ReservationsActionTypes.GetInitialReservationsFail,
    props<{ error: string }>()
);

export const updateReservation = createAction(
    ReservationsActionTypes.UpdateReservation,
    props<{ reservation: Reservation }>()
);

export const updateReservationSuccess = createAction(
    ReservationsActionTypes.UpdateReservationSuccess,
    props<{ reservation: Reservation }>()
);

export const updateReservationFail = createAction(
    ReservationsActionTypes.UpdateReservationFail,
    props<{ error: string }>()
);

export const createReservationSuccess = createAction(
    ReservationsActionTypes.CreateReservationSuccess,
    props<{ reservation: Reservation }>()
);

export const createReservationFail = createAction(
    ReservationsActionTypes.CreateReservationFail,
    props<{ error: string }>()
);

export const deleteReservation = createAction(
    ReservationsActionTypes.DeleteReservation,
    props<{ reservation: Reservation }>()
);

export const deleteReservationSuccess = createAction(
    ReservationsActionTypes.DeleteReservationSuccess,
    props<{ reservation: Reservation }>()
);

export const deleteReservationFail = createAction(
    ReservationsActionTypes.DeleteReservationFail,
    props<{ error: string }>()
);
