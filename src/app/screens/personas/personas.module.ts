import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonasComponent } from './personas.component';
import { PersonasRoutingModule } from './personas-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from "@ngrx/store";
import { appReducers } from '../../store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from 'src/app/store/effects';

@NgModule({
  declarations: [
    PersonasComponent
  ],
  imports: [
    CommonModule,
    PersonasRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    ModalModule,
    ToastrModule.forRoot(),
  ],
  providers: [BsModalService, ToastrService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PersonasModule { }
