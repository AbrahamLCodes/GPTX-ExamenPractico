import { gql } from 'apollo-angular-boost';

export const personas = gql`
    query PersonasQuery{
        personas {
            id
            nombre
            apaterno
            amaterno
            direccion
            telefono
        }
    }`