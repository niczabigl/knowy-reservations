import { Component, OnInit } from '@angular/core';
import { ReservationFormComponent } from '@components/reservation-form/reservation-form.component';
import { ReservationInfo } from '@models/Reservation';
import { Store } from '@ngrx/store';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { filter, take } from 'rxjs/operators';
import { HomeVm, selectHomeViewModel } from './home.selectors';
import { Observable } from 'rxjs';
import { UserInfo } from '@models/UserInfo';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public images = [
        { src: 'assets/coffe1.jpg', alt: 'coffe1' },
        { src: 'assets/coffe2.jpg', alt: 'coffe2' },
        { src: 'assets/coffe3.jpg', alt: 'coffe3' },
        { src: 'assets/coffe4.jpg', alt: 'coffe4' },
    ];
    ref: DynamicDialogRef | undefined;

    public vm$: Observable<HomeVm> = new Observable<HomeVm>();

    constructor(private store: Store, private router: Router, public dialogService: DialogService) { }

    public ngOnInit(): void {
        this.vm$ = this.store.select(selectHomeViewModel);
    }

    public startReservation() {
        this.ref = this.dialogService.open(ReservationFormComponent,
            { header: 'Reservation Form', closeOnEscape: true, data: { isEdit: false } });
        this.ref.onClose.pipe(take(1), filter((editForm) => !!editForm)).subscribe((
            { reservationInfoForm, userInfoForm }: { reservationInfoForm: ReservationInfo; userInfoForm: UserInfo }) =>
            this.router.navigateByUrl('/confirm-reservation', { state: { reservationInfoForm, userInfoForm } }));
    }
}
