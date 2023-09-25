import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReservationsState } from './reservations.reducer';

export const getReservationsState = createFeatureSelector<ReservationsState>('reservations');

export const selectReservations = createSelector(getReservationsState, (state: ReservationsState) => state.reservations);
export const selectReservationsError = createSelector(getReservationsState, (state: ReservationsState) => state.error);
