
export enum DINNING_REGION_NAMES {
    MAIN_HALL = 'Main Hall',
    BAR = 'Bar',
    RIVERSIDE = 'Riverside',
    RIVERSIDE_SMOKING = 'Riverside (Smoking)'
}

export const DINNING_REGION_NAMES_VALUES = [
    DINNING_REGION_NAMES.MAIN_HALL,
    DINNING_REGION_NAMES.BAR,
    DINNING_REGION_NAMES.RIVERSIDE,
    DINNING_REGION_NAMES.RIVERSIDE_SMOKING];

export interface DinnerRegion {
    id: number;
    name: DINNING_REGION_NAMES;
    acceptChildren: boolean;
    smokingAllowed: boolean;
    maxPax: number;
}
