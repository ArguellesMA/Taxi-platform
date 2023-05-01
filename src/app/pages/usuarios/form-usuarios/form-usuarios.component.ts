import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UsuariosService } from '../../../shared/services/usuarios.service';

@Component({
  selector: 'ngx-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.scss']
})
export class FormUsuariosComponent implements OnInit {

  constructor(
    protected ref: NbDialogRef<FormUsuariosComponent>,
    private fb: FormBuilder,
    private usuarioService: UsuariosService
    ) {}

    exampleForm: FormGroup;

  names: string[] = [];
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.exampleForm = this.fb.group({
      id: ['', Validators.required ],
      nombre: ['', Validators.required ],
      apellidoP: ['', Validators.required ],
      apellidoM: ['', Validators.required ],
      puesto: ['', Validators.required ],
      correo: ['', Validators.required ],
      password: ['', Validators.required ],
    });
  }

  cancel() {
    this.ref.close();
  }

  resetFields(){
    this.exampleForm = this.fb.group({
      id: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      apellidoP: new FormControl('', Validators.required),
      apellidoM: new FormControl('', Validators.required),
      puesto: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(value){
    this.usuarioService.postUsuarios(value)
    .then(
      res => {
        this.resetFields();
        this.cancel();
      }
    )
  }


}
