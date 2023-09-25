import { Config } from '@models/Config';
import { createReducer, on } from '@ngrx/store';
import { initializeAppFail, initializeAppSuccess } from '@store/core/core.actions';

export interface CoreState {
    isCoreLoading: boolean;
    config: Config;
    error: string;
}

const initialState: CoreState = {
    isCoreLoading: true,
    config: {
        restaurant: {
            datePeriod: {
                startDate: new Date(-1),
                endDate: new Date(-1)
            },
            regions: [],
            schedule: {
                startHour: 0,
                endHour: 0,
                stepMinutes: 0,
            }

        }
    },
    error: '',
};

export const coreReducer = createReducer(
    initialState,
    on(initializeAppSuccess, (state, { config }) => ({ ...state, config, isCoreLoading: false })),
    on(initializeAppFail, (state, { error }) => ({ ...state, error, isCoreLoading: false })),
);
