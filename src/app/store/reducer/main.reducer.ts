import { createReducer, on } from '@ngrx/store';
import * as main from '../actions/main.actions';
import { Persona } from "../../shared/models/persona";

export interface MainState {
    cargando: boolean;
    personas: Persona[];
}

const initialState: MainState = {
    cargando: false,
    personas: []
};

export const reducer = createReducer(
    initialState,
    on(main.persona, (state) => ({
        ...state,
        cargando: true,
        error: null,
    })),
    on(main.personaSuccess, (state, { personas }) => ({
        ...state,
        cargando: false,
        personas: [...personas]
    })),
    on(main.personaFailure, (state, { error }) => ({
        ...state,
        cargando: false,
        error: { ...error }
    }))
);

export function mainreducer(state, action) {
    return reducer(state, action);
}