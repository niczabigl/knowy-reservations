import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationFormComponent } from './reservation-form.component';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { provideMockStore } from '@ngrx/store/testing';

describe('ReservationFormComponent', () => {
    let component: ReservationFormComponent;
    let fixture: ComponentFixture<ReservationFormComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ReservationFormComponent],
            providers: [DynamicDialogRef, DynamicDialogConfig, provideMockStore({})]
        });
        fixture = TestBed.createComponent(ReservationFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
