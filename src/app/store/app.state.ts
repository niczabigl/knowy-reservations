import { ReservationsState } from '@store/reservations/reservations.reducer';
import { UsersState } from '@store/users/users.reducer';
import { CoreState } from './core/core.reducer';
import { RouterState } from './router/router.reducer';


export interface AppState {
    coreState: CoreState;
    reservationsState: ReservationsState;
    usersState: UsersState;
    routerState: RouterState;
}
