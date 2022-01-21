import { Injectable } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Apollo, gql } from 'apollo-angular-boost';
import { QueryPersona } from 'src/app/shared/models/querypersona';
import { MutationPersona } from 'src/app/shared/models/mutationpersona';
import { insertPersonaMutation, updatePersonaMutation, deletePersonaMutation } from "../../shared/gql/mutations"
import { personas } from "../../shared/gql/queries";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private personasQuery = personas
  private querySubscription: Subscription = null;

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
        console.log("Obteniendo personas");
        console.log("DATA", data);
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
      }
    }).pipe(
      map((data: any) => {
        this.toastr.success("Persona creada correctamente", "Operación exitosa");
        const persona = data.data.createPersona;
        console.log("DATA", data);
        console.log("PERSONA", persona);

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
      }
    }).pipe(
      map((data: MutationPersona) => {
        this.toastr.success("Persona editada correctamente", "Operación exitosa");
        this.toastr.success("Persona creada correctamente", "Operación exitosa");
        const persona = data.data.persona;
        console.log("Persona editada", persona);
        return persona;
      })
    );
  }

  public deletePersona(id: number) {
    return this.apollo.mutate({
      mutation: this.deletePersonaMutation,
      variables: {
        id
      }
    }).pipe(
      map((data: MutationPersona) => {
        this.toastr.success("Persona eliminada correctamente", "Operación exitosa");
        return data.data.persona;
      })
    );
  }
}
