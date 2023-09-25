import { Injectable } from '@angular/core';
import { Config } from '@models/Config';
import { DINNING_REGION_NAMES } from '@models/DinnerRegion';
import { Reservation } from '@models/Reservation';
import { UserInfo } from '@models/UserInfo';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export interface DBConfig {
    config: Config;
    reservations: Reservation[];
    users: UserInfo[];
}


@Injectable({
    providedIn: 'root'
})
export class DataService implements InMemoryDbService {
    constructor() { }

    createDb(): DBConfig {
        return {
            config: {
                restaurant: {
                    regions: [
                        {
                            id: 1,
                            name: DINNING_REGION_NAMES.MAIN_HALL,
                            acceptChildren: true,
                            smokingAllowed: false,
                            maxPax: 12,
                        },
                        {
                            id: 2,
                            name: DINNING_REGION_NAMES.BAR,
                            acceptChildren: false,
                            smokingAllowed: false,
                            maxPax: 4,
                        },
                        {
                            id: 3,
                            name: DINNING_REGION_NAMES.RIVERSIDE,
                            acceptChildren: true,
                            smokingAllowed: false,
                            maxPax: 8,
                        },
                        {
                            id: 4,
                            name: DINNING_REGION_NAMES.RIVERSIDE_SMOKING,
                            acceptChildren: false,
                            smokingAllowed: true,
                            maxPax: 6,
                        }
                    ],
                    schedule: {
                        startHour: 18,
                        endHour: 22,
                        stepMinutes: 30
                    },
                    datePeriod: {
                        startDate: new Date(2024, 6, 24),
                        endDate: new Date(2024, 6, 31),
                    }
                }
            },
            users: [
                {
                    id: 1,
                    name: 'Free Guy',
                    email: 'free.guy@email.com',
                    phone: '+34 111 222 333'
                },
                {
                    id: 2,
                    name: 'Scrum Resevation',
                    email: 'scrum.reservation@email.com',
                    phone: '+34 123 123 123'
                },
                {
                    id: 3,
                    name: 'Knowy President',
                    email: 'knowy.president@email.com',
                    phone: '+34 321 111 123'
                }
            ],
            reservations: [
                {
                    id: 1,
                    reservationInfo: {
                        date: new Date(2024, 6, 30, 22, 30),
                        pax: 2,
                        dinnerRegionId: 4,
                        childrens: 0
                    },
                    userId: 1
                },
                {
                    id: 2,
                    reservationInfo: {
                        date: new Date(2024, 6, 29, 20, 0),
                        pax: 5,
                        dinnerRegionId: 1,
                        childrens: 2
                    },
                    userId: 2
                },
                {
                    id: 3,
                    reservationInfo: {
                        date: new Date(2024, 6, 30, 21, 30),
                        pax: 3,
                        dinnerRegionId: 3,
                        childrens: 1
                    },
                    userId: 3
                },
            ]
        };
    }


}
