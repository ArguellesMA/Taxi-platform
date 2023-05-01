import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Operadores } from '../../../../shared/models/operadores/operadores';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { OperadoresService } from '../../../../shared/services/operadores.services';

@Component({
  selector: 'ngx-form-operadores',
  templateUrl: './form-operadores.component.html',
  styleUrls: ['./form-operadores.component.scss']
})
export class FormOperadoresComponent implements OnInit {

  constructor(
    protected ref: NbDialogRef<FormOperadoresComponent>,
    private fb: FormBuilder,
    private operadorService: OperadoresService
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
      rfc: ['', Validators.required ],
      curp: ['', Validators.required ],
      licencia: ['', Validators.required ],
      domicilio: ['', Validators.required ],
      unidad: ['', Validators.required ],
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
      rfc: new FormControl('', Validators.required),
      curp: new FormControl('', Validators.required),
      licencia: new FormControl('', Validators.required),
      domicilio: new FormControl('', Validators.required),
      unidad: new FormControl('', Validators.required),
    });
  }

  onSubmit(value){
    this.operadorService.postOperadores(value)
    .then(
      res => {
        this.resetFields();
        this.cancel();
      }
    )
  }

}
