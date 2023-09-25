import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CoreActionTypes, initializeAppFail, initializeAppSuccess } from './core.actions';
import { DBConfig, DataService } from '@services/data.service';

@Injectable()
export class CoreEffects {

    initApp$ = createEffect(() => this.actions$.pipe(
        ofType(CoreActionTypes.InitializeApp),
        map(() => this.dataService.createDb()),
        map((db: DBConfig) => initializeAppSuccess({ config: db.config })),
        catchError((error: Error) => of(initializeAppFail({ error: error.message })))
    ));

    constructor(
        private actions$: Actions,
        private dataService: DataService
    ) { }
}
