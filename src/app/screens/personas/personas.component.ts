import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEye, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import Persona from 'src/app/shared/models/persona';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {


  // Font Awesome icons
  public faEye = faEye;
  public faTrash = faTrash;
  public faEdit = faEdit;

  //Controles para mostrar el formulario de la Persona
  public nuevo: boolean = false;
  public editar: boolean = false;

  //Formulario para registro y actualizacion de personas
  public formPersona: FormGroup;

  //Buscador para filtrar en la lista de Personas
  public buscadorPersona: string = "";

  //Propiedad para manejar eventos globales con la persona
  public personaSel: Persona = null;

  //Modales de accion
  public modalRef: BsModalRef;

  constructor(
    fb: FormBuilder,
    private modalService: BsModalService,
    private toastr: ToastrService
  ) {
    this.formPersona = fb.group({
      id: [null],
      nombre: [null, [Validators.required]],
      apaterno: [null, [Validators.required]],
      amaterno: [null, [Validators.required]],
      direccion: [null, [Validators.required]],
      telefono: [null, [Validators.required]]
    });
  }

  public ngOnInit(): void {
  }

  public create(): void {
    this.nuevo = true;
  }

  public async read(): Promise<any> {

  }

  public crearPersona(): void {
    this.formPersona.reset();
    this.nuevo = true;
    this.editar = false;
  }

  public updatePersona(): void {
    this.formPersona.reset();
    this.nuevo = false;
    this.editar = true;

    this.formPersona.patchValue({
      id: this.personaSel.id,
      nombre: this.personaSel.nombre,
      apaterno: this.personaSel.apaterno,
      amaterno: this.personaSel.amaterno,
      direccion: this.personaSel.direccion,
      telefono: this.personaSel.telefono
    });

    if (this.modalRef) { //Por si el modal ha sido abierto
      this.cerrarModal();
    }
  }

  public submitPersona(): void {
    if (this.editar) {
      const indexS = this.personas.indexOf(this.personaSel);
      this.personas[indexS] = this.formPersona.value;
      this.toastr.success("Persona editada correctamente", "Operación exitosa");
    } else {
      this.formPersona.patchValue({ id: Math.random() });
      this.personas.push(this.formPersona.value);
      this.toastr.success("Persona creada correctamente", "Operación exitosa");
    }
    this.resetForm();
  }

  public mostrarModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public deleteP(): void {
    const index = this.personas.indexOf(this.personaSel);
    this.personas.splice(index, 1);
    this.toastr.success("Persona eliminada correctamente", "Operación exitosa");
    this.cerrarModal();
  }

  public cerrarModal(): void {
    this.modalRef.hide()
  }

  public resetForm(): void {
    this.nuevo = false;
    this.editar = false;
    this.formPersona.reset();
  }

  //Informacion para probar
  public personas: Persona[] = [
    {
      id: 1,
      nombre: "Abraham",
      apaterno: "Luna",
      amaterno: "Cazares",
      direccion: "Heroismo 2227",
      telefono: "6145996026"
    },
    {
      id: 2,
      nombre: "Mario",
      apaterno: "Tejada",
      amaterno: "Morales",
      direccion: "Washington 2231",
      telefono: "614223234"
    },
    {
      id: 2,
      nombre: "Nevin Adair",
      apaterno: "Almanza",
      amaterno: "Ortiz",
      direccion: "Cantera 1231x",
      telefono: "6143112231"
    }
  ]

}
