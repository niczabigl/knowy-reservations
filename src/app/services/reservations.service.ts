import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getApiUrl } from './api';
import { Reservation, ReservationInfo } from '@models/Reservation';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class ReservationsService {

    RESERVATIONS_API_ENDPOINT = '/reservations';

    constructor(private http: HttpClient) {
    }

    public getAllReservations(): Observable<Reservation[]> {
        return this.http.get<Reservation[]>(getApiUrl(this.RESERVATIONS_API_ENDPOINT));
    }

    public deleteReservation(reservation: Reservation): Observable<boolean> {
        return this.http.delete<boolean>(getApiUrl(`${this.RESERVATIONS_API_ENDPOINT}/${reservation.id}`));
    }

    public updateReservation(reservation: Reservation): Observable<Reservation> {
        return this.http.put<Reservation>(getApiUrl(`${this.RESERVATIONS_API_ENDPOINT}/${reservation.id}`), {
            ...reservation
        }).pipe(map(() => ({ ...reservation })));
    }

    public createReservation(reservationInfo: ReservationInfo, userId: number): Observable<Reservation> {
        return this.http.post<Reservation>(getApiUrl(`${this.RESERVATIONS_API_ENDPOINT}`), {
            reservationInfo, userId
        }).pipe(map(({ id }: { id: number }) => ({ id, reservationInfo, userId })));
    }



}
