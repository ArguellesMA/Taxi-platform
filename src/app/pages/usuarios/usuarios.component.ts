import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../../shared/services/usuarios.service';
import { NbDialogService } from '@nebular/theme';
import { FormUsuariosComponent } from './form-usuarios/form-usuarios.component';

@Component({
  selector: 'ngx-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

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
      puesto: {
        title: 'Puesto',
        type: 'string',
      },
      correo: {
        title: 'Correo',
        type: 'string',
      },
    },
  };

  usuarios: any[] = [];
  names: string[] = [];

  constructor(
    private usuarioService: UsuariosService,
    private dialogService: NbDialogService
    ) {
    
  }

  ngOnInit(): void {
  this.getData();  
  }

  getData(){
    this.usuarioService.getUsuarios().subscribe(result => {
      this.usuarios = result
      console.log(this.usuarios)
    })
  }

  onDeleteConfirm(event): void {
    this.usuarioService.deleteUsuarios(event.data.id);
  }

  open3() {
    this.dialogService.open(FormUsuariosComponent)
      .onClose.subscribe(name => name && this.names.push(name));
  }
}
