import { createSelector } from '@ngrx/store';
import { getUsersState } from '@store/users/users.selectors';
import { getCoreState } from '@store/core/core.selectors';
import { getReservationsState } from '@store/reservations/reservations.selectors';
import { Reservation } from '@models/Reservation';
import { UserInfo } from '@models/UserInfo';


export interface ReservationsManagerVm {
    isLoading: boolean;
    users: UserInfo[];
    reservations: Reservation[];
    usersError: string;
    reservationsError: string;
}

export const selectReservationsManagerViewModel =
    createSelector(getCoreState, getReservationsState, getUsersState, (coreState, reservationsState, usersState) => ({
        isLoading: coreState.isCoreLoading || reservationsState.loading || usersState.loading,
        reservations: reservationsState.reservations,
        users: usersState.users,
        reservationsError: reservationsState.error,
        usersError: usersState.error
    }) as ReservationsManagerVm);
