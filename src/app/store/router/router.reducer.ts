import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer, RouterReducerState, routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

export interface RouterState {
    url: string;
    params: Params;
    queryParams: Params;
}

export class CustomSerializer implements RouterStateSerializer<RouterState> {
    serialize(routerState: RouterStateSnapshot): RouterState {
        let route = routerState.root;

        while (route.firstChild) {
            route = route.firstChild;
        }

        const {
            url,
            root: { queryParams },
        } = routerState;
        const { params } = route;

        return { url, params, queryParams };
    }
}

export interface StoreRootState {
    router: RouterReducerState<any>;
}
export const reducers: ActionReducerMap<StoreRootState> = {
    router: routerReducer,
};
