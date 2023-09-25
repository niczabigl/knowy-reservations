import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { createUserAndReservation } from '@store/users/users.actions';
import { ReservationFormComponent } from '@components/reservation-form/reservation-form.component';
import { ReservationInfo } from '@models/Reservation';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { take, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserInfo } from '@models/UserInfo';

@Component({
    selector: 'app-confirm-reservation',
    templateUrl: './confirm-reservation.component.html',
    styleUrls: ['./confirm-reservation.component.scss']
})
export class ConfirmReservationComponent implements OnInit {

    public historyStateSource: BehaviorSubject<History> = new BehaviorSubject<History>(history);
    public history$: Observable<History> = new Observable<History>();
    public reservationInfoForm!: ReservationInfo;
    public userInfoForm!: UserInfo;
    public ref: DynamicDialogRef | undefined;

    constructor(private store: Store, private router: Router, public dialogService: DialogService) { }

    ngOnInit(): void {
        this.history$ = this.historyStateSource.asObservable().pipe(tap((history: History) => {
            const { reservationInfoForm, userInfoForm } = history.state;

            if (!userInfoForm || !reservationInfoForm) { return this.router.navigate(['/']); }

            this.reservationInfoForm = reservationInfoForm;
            this.userInfoForm = userInfoForm;
            return history;
        }));
    }

    public confirmReservation = (): Promise<boolean> => {
        this.store.dispatch(createUserAndReservation({ nonIdUserInfo: this.userInfoForm, reservationInfo: this.reservationInfoForm }));
        return this.router.navigate(['/']);
    };

    public editReservation(): void {
        this.ref = this.dialogService.open(ReservationFormComponent,
            {
                header: 'Editing Reservation', closeOnEscape: true, data: {
                    preEdit: true, reservationInfo: this.reservationInfoForm, userInfo: this.userInfoForm
                }
            });
        this.ref.onClose.pipe(take(1)).subscribe(({ reservationInfoForm, userInfoForm }: { reservationInfoForm: ReservationInfo; userInfoForm: UserInfo }) => {
            history.replaceState({ reservationInfoForm, userInfoForm }, '');
            this.historyStateSource.next(history);
        });
    }
}

