import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from "../../shared/models/persona"
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private generalHeader = new HttpHeaders().append('Content-Type', 'application/json');

  constructor(
    private http: HttpClient
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
        return data;
      })
    );
  }

  public updatePersona(id: number, nombre: string, apaterno: string, amaterno: string, direccion: string, telefono: string) {
    return this.http.put(`${environment.apiurl}/persona?id=${id}`, {
      nombre,
      apaterno,
      amaterno,
      direccion,
      telefono
    }).pipe(
      map((data: Persona) => {
        return data;
      })
    );
  }

  public deletePersona(id: number) {
    return this.http.delete(`${environment.apiurl}/persona?=${id}`).pipe(
      map((data: Persona) => {
        return data;
      })
    );
  }
}
