import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { UserApi} from '../models/users/usersapi';
import { Observable } from 'rxjs';
import { StorageService } from './storage/storage.service'; 
import { Operadores } from '../models/operadores/operadores';



@Injectable()
export class UnidadesService {

  constructor(
    private fb: AngularFirestore,
    private storageService: StorageService
	//	private authService: AuthService,
  ) {

  }

  getUnidades() {
  return this.fb.collection('unidades', ref => ref.orderBy('id')).valueChanges();
}

postUnidades(value) {
  const newId = this.fb.createId();
  console.log("myID:: "+newId)
  
  //this.storageService.setSession("mykey", newId);
  //return this.fb.collection('operators').doc( this.storageService.getSession("mykey")).set(data);

  var myid = Math.random().toString(36).substring(2)
  return this.fb.collection('unidades').doc(newId).set({


    $key: newId,
    id: myid,
    marca: value.marca,
    modelo: value.modelo,
    numSeguro: value.numSeguro,
    placa: value.placa

  })
}

updateUnidades(value){
  //value.nameToSearch = value.name.toLowerCase();
  var update =  this.fb.collection('unidades').doc(this.storageService.getSession("$key"));
  return update.update({

    apellidos: value.apellidos,
    // codigoPostal: value.codigoPostal,
    // correo: value.correo,
    // curp: value.curp,
    estado: value.estado,
    //fechaNacimiento: value.fechaNacimiento,
    localidad: value.localidad,
    municipio: value.municipio,
    nombre: value.nombre,
    //telefono: value.telefono 
    operadorFoto: value.operadorFoto,
    licencia: value.licencia,
    tipoLicencia: value.tipoLicencia,
    ine: value.ine
  })
  .then(function() {
    console.log("Document successfully updated!");
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});
}


deleteUnidades(myid: string){
    this.fb.collection("unidades").doc(myid).delete().then(function() {
    console.log("Document successfully deleted!");
    }).catch(function(error) {
      console.error("Error removing document: ", error);
      });

}

}