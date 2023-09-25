import { Reservation } from '@models/Reservation';
import { createReducer, on } from '@ngrx/store';
import {
    getInitialReservationsSuccess, getInitialReservationsFail,
    createReservationSuccess, deleteReservationSuccess, updateReservationSuccess, updateReservationFail
} from '@store/reservations/reservations.actions';

export interface ReservationsState {
    reservations: Reservation[];
    loading: boolean;
    error: string;
}

const initialState: ReservationsState = {
    reservations: [],
    loading: true,
    error: '',
};

export const reservationsReducer = createReducer(
    initialState,
    on(getInitialReservationsSuccess, (state, { reservations }) => ({ ...state, reservations, loading: false })),
    on(getInitialReservationsFail, (state, { error }) => ({ ...state, error, loading: false })),
    on(createReservationSuccess, (state, { reservation }) => ({ ...state, reservations: [...state.reservations, reservation] })),
    on(updateReservationSuccess, (state, { reservation }) => ({
        ...state, reservations: [...state.reservations.map((dep: Reservation) => {
            if (dep.id === reservation.id) {
                dep.reservationInfo = reservation.reservationInfo;
                dep.userId = reservation.userId;
            }
            return dep;
        })]
    })),
    on(updateReservationFail, (state, { error }) => ({ ...state, error })),
    on(deleteReservationSuccess, (state, { reservation }) => ({
        ...state, reservations: state.reservations.filter((dep: Reservation) => dep.id !== reservation.id)
    }))
);
