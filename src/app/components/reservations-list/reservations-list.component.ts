import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationFormComponent } from '@components/reservation-form/reservation-form.component';
import { Reservation, ReservationInfo } from '@models/Reservation';
import { UserInfo } from '@models/UserInfo';
import { Store } from '@ngrx/store';
import { deleteReservation, updateReservation } from '@store/reservations/reservations.actions';
import { createUserAndReservation } from '@store/users/users.actions';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { filter, take } from 'rxjs/operators';

@Component({
    selector: 'app-reservations-list',
    templateUrl: './reservations-list.component.html',
    styleUrls: ['./reservations-list.component.scss']
})
export class ReservationsListComponent {

    @Input() reservations: Reservation[] = [];
    @Input() users: UserInfo[] = [];
    public ref: DynamicDialogRef | undefined;

    constructor(private store: Store, private router: Router, public dialogService: DialogService) {
    }

    public deleteReservation(event: Event, reservation: Reservation): void {
        event.stopPropagation();
        this.store.dispatch(deleteReservation({ reservation }));
    }

    public createReservation(): void {
        this.ref = this.dialogService.open(ReservationFormComponent,
            { header: 'Add new Reservation', closeOnEscape: true, data: { isEdit: false } });
        this.ref.onClose.pipe(take(1), filter((createForm) => !!createForm)).subscribe(({
            reservationInfoForm, userInfoForm }: { reservationInfoForm: ReservationInfo; userInfoForm: UserInfo }) => {
            this.store.dispatch(createUserAndReservation({ reservationInfo: reservationInfoForm, nonIdUserInfo: userInfoForm }));
        });
    }

    public editReservation(event: Event, reservation: Reservation): void {
        event.stopPropagation();
        const userInfo = this.users.find((user: UserInfo) => user.id === reservation.userId);

        this.ref = this.dialogService.open(ReservationFormComponent,
            {
                header: 'Editing Reservation', closeOnEscape: true,
                data: { isEdit: true, reservationId: reservation.id, userId: reservation.userId, reservationInfo: reservation.reservationInfo, userInfo }
            });
        this.ref.onClose.pipe(take(1), filter((editForm) => !!editForm)).subscribe(({ reservationInfoForm }: { reservationInfoForm: ReservationInfo }) => {
            this.store.dispatch(updateReservation({ reservation: { reservationInfo: reservationInfoForm, id: reservation.id, userId: reservation.userId } }));
        });
    }

    goHome() {
        this.router.navigate(['/home']);
    }
}
