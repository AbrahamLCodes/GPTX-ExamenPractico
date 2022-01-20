import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEye, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Persona } from 'src/app/shared/models/persona';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
// NgRx
import { AppState } from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { persona, personaInsert, personaEdit, personaDelete } from "../../store/actions/main.actions"

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

  public personas: Persona[];

  constructor(
    fb: FormBuilder,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private store: Store<AppState>
  ) {
    this.formPersona = fb.group({
      id: [null],
      nombre: [null, [Validators.required]],
      apaterno: [null, [Validators.required]],
      amaterno: [null, [Validators.required]],
      direccion: [null, [Validators.required]],
      telefono: [null, [Validators.required]]
    });

    store.select("mainReducer").subscribe((x => {
      this.personas = x.personas;
    }));
    store.dispatch(persona());
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
    this.formPersona.patchValue(this.personaSel);

    this.nuevo = false;
    this.editar = true;

    if (this.modalRef) { //Por si el modal ha sido abierto
      this.cerrarModal();
    }
  }

  public submitPersona(): void {
    this.formPersona.value.telefo += "";
    if (this.editar) {
      this.store.dispatch(personaEdit(this.formPersona.value));
      this.toastr.success("Persona editada correctamente", "Operación exitosa");
    } else {
      this.formPersona.patchValue({ id: Math.random() });
      this.store.dispatch(personaInsert(this.formPersona.value));
      this.toastr.success("Persona creada correctamente", "Operación exitosa");
    }
    this.resetForm();
  }

  public mostrarModal(template: TemplateRef<any>) {
    if (this.modalRef) { //Por si el modal ha sido abierto
      this.cerrarModal();
    }
    this.modalRef = this.modalService.show(template);
  }

  public deleteP(): void {
    this.store.dispatch(personaDelete({ id: this.personaSel.id }));
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

}
