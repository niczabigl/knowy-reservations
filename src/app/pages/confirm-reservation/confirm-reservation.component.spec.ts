import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmReservationComponent } from './confirm-reservation.component';
import { provideMockStore } from '@ngrx/store/testing';
import { DialogService } from 'primeng/dynamicdialog';

describe('ConfirmReservationComponent', () => {
    let component: ConfirmReservationComponent;
    let fixture: ComponentFixture<ConfirmReservationComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ConfirmReservationComponent],
            providers: [DialogService, provideMockStore({})]
        });
        fixture = TestBed.createComponent(ConfirmReservationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
