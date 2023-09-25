import { Config } from '@models/Config';
import { createAction, props } from '@ngrx/store';

export enum CoreActionTypes {
    InitializeApp = '[Core App] Initialize App',
    InitializeAppSuccess = '[Core App] Initialize App success',
    InitializeAppFail = '[Core App] Initialize App fail',
}

export const initializeApp = createAction(
    CoreActionTypes.InitializeApp
);

export const initializeAppSuccess = createAction(
    CoreActionTypes.InitializeAppSuccess,
    props<{ config: Config }>()
);

export const initializeAppFail = createAction(
    CoreActionTypes.InitializeAppFail,
    props<{ error: string }>()
);
