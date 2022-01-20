import { createAction, props } from '@ngrx/store';
import { Persona } from "../../shared/models/persona";
// ---------------------------------------------------------
export const persona = createAction(
    "[Main] Persona"
);

export const personaSuccess = createAction(
    "[Main] Persona Success",
    props<{ personas: Persona[] }>()
);

export const personaFailure = createAction(
    "[Main] Persona Failure",
    props<{ error: any }>()
);

// ---------------------------------------------------------
export const personaInsert = createAction(
    "[Main] Persona Insert",
    props<{ nombre: string, apaterno: string, amaterno: string, direccion: string, telefono: string }>()
);

export const personaInsertSucces = createAction(
    "[Main] Persona Insert Success",
    props<{ persona: Persona }>()
)

export const personaInsertFailure = createAction(
    '[Main] Persona Insert Failure',
    props<{ error: any }>()
);

// ---------------------------------------------------------
export const personaEdit = createAction(
    "[Main] Persona Edit",
    props<{ id: number, nombre: string, apaterno: string, amaterno: string, direccion: string, telefono: string }>()
)

export const personaEditSucces = createAction(
    "[Main] Persona Edit Success",
    props<{ persona: Persona }>()
)

export const personaEditFailure = createAction(
    '[Main] Persona Edit Failure',
    props<{ error: any }>()
);

// ---------------------------------------------------------
export const personaDelete = createAction(
    "[Main] Persona Delete",
    props<{ id: number }>()
);

export const personaDeleteSuccess = createAction(
    "[Main] Persona Delete Success",
    props<{ persona: Persona }>()
);

export const personaDeleteFailure = createAction(
    "[Main] Persona Delete Failure",
    props<{ error: any }>()
);