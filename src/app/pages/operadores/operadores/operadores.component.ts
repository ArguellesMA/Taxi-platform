import { Component, OnInit } from '@angular/core';
import { Observable, of, ReplaySubject, identity } from 'rxjs';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { OperadoresService } from '../../../shared/services/operadores.services';
import { Operadores } from '../../../shared/models/operadores/operadores';
import {DataSource} from '@angular/cdk/collections';
import { NbDialogService } from '@nebular/theme';
import { FormOperadoresComponent } from './form-operadores/form-operadores.component';

@Component({
  selector: 'ngx-operadores',
  templateUrl: './operadores.component.html',
  styleUrls: ['./operadores.component.scss']
})
export class OperadoresComponent implements OnInit {

  settings = {
    //hideSubHeader: true,
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    actions:{
      add: false,
      edit: false
    },
    columns: {
      nombre: {
        title: 'Nombre',
        type: 'string',
      },
      apellidoP: {
        title: 'Apellido Paterno',
        type: 'string',
      },
      apellidoM: {
        title: 'Apellido Materno',
        type: 'string',
      },
      rfc: {
        title: 'RFC',
        type: 'string',
      },
      curp: {
        title: 'CURP',
        type: 'number',
      },
      licencia: {
        title: 'Licencia',
        type: 'number',
      },
      domicilio: {
        title: 'Domicilio',
        type: 'number',
      },
      unidad: {
        title: 'Unidad',
        type: 'number',
      },
    },
  };

  operadores: any[] = [];
  names: string[] = [];

  constructor(
    private operadorService: OperadoresService,
    private dialogService: NbDialogService
    ) {
    
  }

  ngOnInit(): void {
  this.getData();  
  }

  getData(){
    this.operadorService.getOperadores().subscribe(result => {
      this.operadores = result
      console.log(this.operadores)
    })
  }

  onDeleteConfirm(event): void {
    this.operadorService.deleteOperators(event.data.id);
  }

  open3() {
    this.dialogService.open(FormOperadoresComponent)
      .onClose.subscribe(name => name && this.names.push(name));
  }
}
