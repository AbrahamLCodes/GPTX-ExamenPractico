import { gql } from 'apollo-angular-boost';

export const insertPersonaMutation = gql`
    mutation createPersonaMutation($nombre: String!, $apaterno: String!, $amaterno: String!, $direccion: String!, $telefono: String!){
      createPersona(nombre: $nombre, apaterno: $apaterno, amaterno: $amaterno, direccion: $direccion, telefono: $telefono){
        id
        nombre
        apaterno
        amaterno 
        direccion
        telefono
    }
  }`;

  export const updatePersonaMutation = gql`
    mutation updatePersonaMutation($id: Int!, $nombre: String!, $apaterno: String!, $amaterno: String!, $direccion: String!, $telefono: String!){
      updatePersona(id: $id, nombre: $nombre, apaterno: $apaterno, amaterno: $amaterno, direccion: $direccion, telefono: $telefono){
        id
        nombre
        apaterno
        amaterno 
        direccion
        telefono
    }
  }`;

  export const deletePersonaMutation = gql`
    mutation deletePersonaMutation($id: Int!){
      deletePersona(id: $id){
        id
        nombre
        apaterno
        amaterno 
        direccion
        telefono
    }
  }`;
