import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ReservationsListComponent } from './reservations-list.component';
import { DialogService } from 'primeng/dynamicdialog';

describe('ReservationsListComponent', () => {
    let component: ReservationsListComponent;
    let fixture: ComponentFixture<ReservationsListComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ReservationsListComponent],
            providers: [provideMockStore({}), DialogService]
        });
        fixture = TestBed.createComponent(ReservationsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
