import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { OperadoresModule } from  './operadores/operadores.module';
import { UnidadesModule } from './unidades/unidades.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    OperadoresModule,
    UnidadesModule,
    UsuariosModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
