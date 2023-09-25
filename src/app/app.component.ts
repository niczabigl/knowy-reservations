import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { initializeApp } from '@store/core/core.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'K-Reservations';

    constructor(private store: Store) {
        this.store.dispatch(initializeApp());
    }
}
