import { createSelector } from '@ngrx/store';
import { getUsersState } from '@store/users/users.selectors';
import { getCoreState } from '@store/core/core.selectors';
import { getReservationsState } from '@store/reservations/reservations.selectors';

export interface HomeVm {
    isLoading: boolean;
    usersError: string;
    reservationsError: string;
}

export const selectHomeViewModel =
    createSelector(getCoreState, getReservationsState, getUsersState, (coreState, reservationsState, usersState) => ({
        isLoading: coreState.isCoreLoading || reservationsState.loading || usersState.loading,
        reservationsError: reservationsState.error,
        usersError: usersState.error
    }) as HomeVm);
