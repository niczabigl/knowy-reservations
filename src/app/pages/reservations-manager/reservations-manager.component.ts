import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectReservationsManagerViewModel, ReservationsManagerVm } from './reservations-manager.selectors';
import { map } from 'rxjs/operators';


@Component({
    selector: 'app-reservations-manager',
    templateUrl: './reservations-manager.component.html',
    styleUrls: ['./reservations-manager.component.scss']
})
export class ReservationsManagerComponent implements OnInit {
    public vm$: Observable<ReservationsManagerVm> = new Observable<ReservationsManagerVm>();
    constructor(private store: Store) {
    }

    public ngOnInit(): void {
        this.vm$ = this.store.select(selectReservationsManagerViewModel)
            .pipe(
                map((vm: ReservationsManagerVm) => ({
                    isLoading: vm.isLoading,
                    reservations: vm.reservations,
                    users: vm.users,
                    reservationsError: vm.reservationsError,
                    usersError: vm.usersError,
                })));
    }
}
