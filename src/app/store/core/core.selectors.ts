import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoreState } from './core.reducer';

export const getCoreState = createFeatureSelector<CoreState>('core');

export const selectIsCoreLoading = createSelector(getCoreState, (state: CoreState) => state.isCoreLoading);
export const selectCoreError = createSelector(getCoreState, (state: CoreState) => state.error);
export const selectCoreConfig = createSelector(getCoreState, (state: CoreState) => state.config);
