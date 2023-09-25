import { RouterState } from '@angular/router';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getRouterState = createFeatureSelector<RouterState>('router');

export const getCurrentRouteState = createSelector(
    getRouterState,
    (state: RouterState) => state.root
);
