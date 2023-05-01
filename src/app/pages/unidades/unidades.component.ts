import { Component, OnInit } from '@angular/core';

import { UnidadesService } from '../../shared/services/unidades.service';
import { NbDialogService } from '@nebular/theme';
import { FormUnidadesComponent } from './form-unidades/form-unidades.component';
@Component({
  selector: 'ngx-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.scss']
})
export class UnidadesComponent implements OnInit {

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
      marca: {
        title: 'Marca',
        type: 'string',
      },
      modelo: {
        title: 'Modelo',
        type: 'string',
      },
      numSeguro: {
        title: 'Num. Seguro',
        type: 'string',
      },
      placa: {
        title: 'Placa',
        type: 'string',
      },
    },
  };

  unidades: any[] = [];
  names: string[] = [];
  
  constructor(
    private unidadService: UnidadesService,
    private dialogService: NbDialogService
    ) {
    
  }

  ngOnInit(): void {
  this.getData();  
  }

  getData(){
    this.unidadService.getUnidades().subscribe(result => {
      this.unidades = result
      console.log(this.unidades)
    })
  }

  onDeleteConfirm(event): void {
    this.unidadService.deleteUnidades(event.data.id);
  }

  open3() {
    this.dialogService.open(FormUnidadesComponent)
      .onClose.subscribe(name => name && this.names.push(name));
  }

}
