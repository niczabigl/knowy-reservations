import { Injectable } from '@angular/core';
import {
    Router,
    UrlTree,
    CanActivate,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class AdminRoleGuard implements CanActivate {
    constructor(public store: Store, public router: Router) { }
    canActivate(): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
        if (localStorage.getItem('knowy-role') === 'admin') { return true; }
        return this.router.navigate(['/home']);
    }
}

