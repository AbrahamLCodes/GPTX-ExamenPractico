import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoComponent } from './contenido.component';
import { ContenidoRoutingModule } from './contenido-routing.module';



@NgModule({
  declarations: [
    ContenidoComponent
  ],
  imports: [
    CommonModule,
    ContenidoRoutingModule
  ]
})
export class ContenidoModule { }
