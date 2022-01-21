import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Apollo } from 'apollo-angular-boost';
import { QueryPersona } from 'src/app/shared/models/querypersona';
import { MutationPersona } from 'src/app/shared/models/mutationpersona';
import { insertPersonaMutation, updatePersonaMutation, deletePersonaMutation } from "../../shared/gql/mutations"
import { personas } from "../../shared/gql/queries";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Apollo-Client Requests
  private personasQuery = personas
  private insertPersonaMutation = insertPersonaMutation;
  private updatePersonaMutation = updatePersonaMutation;
  private deletePersonaMutation = deletePersonaMutation;

  constructor(
    private toastr: ToastrService,
    private apollo: Apollo
  ) { }

  public getPersonas() {
    return this.apollo.watchQuery({
      query: this.personasQuery
    }).valueChanges.pipe(
      map((data: QueryPersona) => {
        return data.data.personas;
      })
    );
  }

  public insertPersona(nombre: string, apaterno: string, amaterno: string, direccion: string, telefono: string) {
    return this.apollo.mutate({
      mutation: this.insertPersonaMutation,
      variables: {
        nombre,
        apaterno,
        amaterno,
        direccion,
        telefono
      },
      refetchQueries: [
        { query: this.personasQuery }
      ]
    }).pipe(
      map((data: any) => {
        this.toastr.success("Persona creada correctamente", "Operación exitosa");
        const persona = data.data.createPersona;
        return persona;
      })
    );
  }

  public updatePersona(id: number, nombre: string, apaterno: string, amaterno: string, direccion: string, telefono: string) {
    return this.apollo.mutate({
      mutation: this.updatePersonaMutation,
      variables: {
        id,
        nombre,
        apaterno,
        amaterno,
        direccion,
        telefono
      },
      refetchQueries: [
        { query: this.personasQuery }
      ]
    }).pipe(
      map((data: MutationPersona) => {
        this.toastr.success("Persona editada correctamente", "Operación exitosa");
        const persona = data.data.persona;
        return persona;
      })
    );
  }

  public deletePersona(id: number) {
    return this.apollo.mutate({
      mutation: this.deletePersonaMutation,
      variables: {
        id
      },
      refetchQueries: [
        { query: this.personasQuery }
      ]
    }).pipe(
      map((data: MutationPersona) => {
        this.toastr.success("Persona eliminada correctamente", "Operación exitosa");
        return data.data.persona;
      })
    );
  }
}
