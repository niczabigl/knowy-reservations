import { DinnerRegion } from './DinnerRegion';

export interface Config {
    restaurant: {
        datePeriod: {
            startDate: Date;
            endDate: Date;
        };
        regions: DinnerRegion[];
        schedule: { startHour: number; endHour: number; stepMinutes: number };
    };
}
