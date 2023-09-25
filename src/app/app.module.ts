import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ReservationsManagerComponent } from './pages/reservations-manager/reservations-manager.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reservationsReducer } from '@store/reservations/reservations.reducer';
import { usersReducer } from '@store/users/users.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from '@store/users/users.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReservationsEffects } from '@store/reservations/reservations.effects';
import { UsersService } from '@services/users.service';
import { ReservationsService } from '@services/reservations.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from '@services/data.service';
import { CoreEffects } from '@store/core/core.effects';
import { coreReducer } from '@store/core/core.reducer';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { ReservationsListComponent } from './components/reservations-list/reservations-list.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { DropdownModule } from 'primeng/dropdown';
import { HomeComponent } from './pages/home/home.component';
import { CarouselModule } from 'primeng/carousel';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmReservationComponent } from './pages/confirm-reservation/confirm-reservation.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from '@store/router/router.reducer';


@NgModule({
    declarations: [
        AppComponent,
        ReservationsManagerComponent,
        HeaderComponent,
        FooterComponent,
        ReservationsListComponent,
        ReservationFormComponent,
        HomeComponent,
        ConfirmReservationComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ProgressSpinnerModule,
        TableModule,
        ButtonModule,
        DynamicDialogModule,
        InputTextModule,
        DropdownModule,
        CarouselModule,
        InputNumberModule,
        CalendarModule,
        StoreModule.forRoot({
            core: coreReducer,
            reservations: reservationsReducer,
            users: usersReducer
        }),
        EffectsModule.forRoot([CoreEffects, UsersEffects, ReservationsEffects]),
        HttpClientInMemoryWebApiModule.forRoot(DataService),
        StoreDevtoolsModule.instrument({
            maxAge: 25
        }),
        StoreRouterConnectingModule.forRoot({
            serializer: CustomSerializer
        }),
    ],
    providers: [DialogService, UsersService, ReservationsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
