export interface Reservation {
    id: number;
    reservationInfo: ReservationInfo;
    userId: number;
}

export interface ReservationInfo {
    date: Date;
    pax: number;
    dinnerRegionId: number;
    childrens: number;
}
