import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UnidadesService } from '../../../shared/services/unidades.service';

@Component({
  selector: 'ngx-form-unidades',
  templateUrl: './form-unidades.component.html',
  styleUrls: ['./form-unidades.component.scss']
})
export class FormUnidadesComponent implements OnInit {

  constructor(
    protected ref: NbDialogRef<FormUnidadesComponent>,
    private fb: FormBuilder,
    private UnidadService: UnidadesService
    ) {}

    exampleForm: FormGroup;

  names: string[] = [];
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.exampleForm = this.fb.group({
      id: ['', Validators.required ],
      marca: ['', Validators.required ],
      modelo: ['', Validators.required ],
      numSeguro: ['', Validators.required ],
      placa: ['', Validators.required ]
    });
  }

  cancel() {
    this.ref.close();
  }

  resetFields(){
    this.exampleForm = this.fb.group({
      id: new FormControl('', Validators.required),
      marca: new FormControl('', Validators.required),
      modelo: new FormControl('', Validators.required),
      numSeguro: new FormControl('', Validators.required),
      placa: new FormControl('', Validators.required),
    });
  }

  onSubmit(value){
    this.UnidadService.postUnidades(value)
    .then(
      res => {
        this.resetFields();
        this.cancel();
      }
    )
  }

}
