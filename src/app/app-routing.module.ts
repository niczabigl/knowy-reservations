import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationsManagerComponent } from '@pages/reservations-manager/reservations-manager.component';
import { HomeComponent } from '@pages/home/home.component';
import { ConfirmReservationComponent } from '@pages/confirm-reservation/confirm-reservation.component';
import { AdminRoleGuard } from './guards/AdminRoleGuard';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'confirm-reservation',
        component: ConfirmReservationComponent
    },
    {
        path: 'manager',
        canActivate: [AdminRoleGuard],
        component: ReservationsManagerComponent
    },
    {
        path: '**', pathMatch: 'full',
        redirectTo: '/home',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
