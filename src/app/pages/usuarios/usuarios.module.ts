import { NgModule } from '@angular/core';
import { 
  NbActionsModule,
  NbButtonModule,
  NbCardModule,NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbInputModule,
 } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { FormsModule as ngFormsModule } from '@angular/forms';

import { UsuariosComponent } from './usuarios.component'; 

import { OperadoresService } from '../../shared/services/operadores.services';
import { StorageService } from '../../shared/services/storage/storage.service';
import { FormUsuariosComponent } from './form-usuarios/form-usuarios.component';

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,
    ngFormsModule,
    NbInputModule,
  ],
  declarations: [
    UsuariosComponent,
    FormUsuariosComponent
  ],
  providers: [
    OperadoresService,
    StorageService
  ],
})
export class UsuariosModule { }
