import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as main from '../actions/main.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';

@Injectable({
    providedIn: "root"
})
export class MainEffects {
    constructor(
        private actions: Actions,
        private api: ApiService,
        private store: Store<AppState>
    ) { }

    personas = createEffect(() => {        
        return this.actions.pipe(
            ofType(main.persona),
            switchMap(() => this.api.getPersonas().pipe(
                map((personas) => main.personaSuccess({ personas })),
                catchError((error) => {
                    return of(main.personaFailure({ error }));
                })
            )));
    });

    personaInsert = createEffect(() => {
        return this.actions.pipe(
            ofType(main.personaInsert),
            switchMap(({ nombre, apaterno, amaterno, direccion, telefono }) => this.api.insertPersona(nombre, apaterno, amaterno, direccion, telefono).pipe(
                map((persona) => {
                    this.store.dispatch(main.persona());
                    return main.personaInsertSucces({ persona });
                }),
                catchError((error) => {
                    return of(main.personaInsertFailure({ error }));
                })
            )));
    });

    personaEdit = createEffect(() => {
        return this.actions.pipe(
            ofType(main.personaEdit),
            switchMap(({ id, nombre, apaterno, amaterno, direccion, telefono }) => this.api.updatePersona(id, nombre, apaterno, amaterno, direccion, telefono).pipe(
                map((persona) => {
                    this.store.dispatch(main.persona());
                    return main.personaEditSucces({ persona });
                }),
                catchError((error) => {
                    return of(main.personaEditFailure({ error }));
                })
            )));
    });

    personaDelete = createEffect(() => {
        return this.actions.pipe(
            ofType(main.personaDelete),
            switchMap(({ id }) => this.api.deletePersona(id).pipe(
                map((persona) => {
                    this.store.dispatch(main.persona());
                    return main.personaDeleteSuccess({ persona });
                }),
                catchError((error) => {
                    return of(main.personaDeleteFailure({ error }));
                })
            )));
    });
}
