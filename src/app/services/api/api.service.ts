import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from "../../shared/models/persona"
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private generalHeader = new HttpHeaders().append('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) { }

  public getPersonas() {
    return this.http.get(`${environment.apiurl}/personas`, { headers: this.generalHeader }).pipe(
      map((data: Persona[]) => {
        return data;
      })
    );
  }

  public insertPersona(nombre: string, apaterno: string, amaterno: string, direccion: string, telefono: string) {
    return this.http.post(`${environment.apiurl}/persona`, {
      nombre,
      apaterno,
      amaterno,
      direccion,
      telefono
    }).pipe(
      map((data: Persona) => {
        this.toastr.success("Persona creada correctamente", "Operación exitosa");
        return data;
      })
    );
  }

  public updatePersona(id: number, nombre: string, apaterno: string, amaterno: string, direccion: string, telefono: string) {
    return this.http.put(`${environment.apiurl}/persona`, {
      id,
      nombre,
      apaterno,
      amaterno,
      direccion,
      telefono
    }).pipe(
      map((data: Persona) => {
        this.toastr.success("Persona editada correctamente", "Operación exitosa");
        return data;
      })
    );
  }

  public deletePersona(id: number) {
    return this.http.delete(`${environment.apiurl}/persona?id=${id}`, { headers: this.generalHeader }).pipe(
      map((data: Persona) => {
        this.toastr.success("Persona eliminada correctamente", "Operación exitosa");
        return data;
      })
    );
  }
}
