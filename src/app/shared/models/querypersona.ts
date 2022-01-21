import { Persona } from "./persona"

export class QueryPersona {
    data: { personas: Persona[] }
    loading: boolean;
    networkStatus: number;
    stale: boolean
}