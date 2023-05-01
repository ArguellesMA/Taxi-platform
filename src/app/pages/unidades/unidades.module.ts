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

import { UnidadesComponent } from './unidades.component'; 

import { OperadoresService } from '../../shared/services/operadores.services';
import { StorageService } from '../../shared/services/storage/storage.service';
import { FormUnidadesComponent } from './form-unidades/form-unidades.component';

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
    UnidadesComponent,
    FormUnidadesComponent
  ],
  providers: [
    OperadoresService,
    StorageService
  ],
})
export class UnidadesModule { }
