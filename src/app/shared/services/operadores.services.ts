import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { UserApi} from '../models/users/usersapi';
import { Observable } from 'rxjs';
import { StorageService } from './storage/storage.service'; 
import { Operadores } from '../models/operadores/operadores';



@Injectable()
export class OperadoresService {

  operadores: AngularFirestoreCollection<Operadores>;
  Operaadores: AngularFirestoreDocument<Operadores>
  operador: Observable<Operadores[]>;

  constructor(
    private fb: AngularFirestore,
    private storageService: StorageService
	//	private authService: AuthService,
  ) {

  }

  getOperadores() {
  return this.fb.collection('operadores', ref => ref.orderBy('id')).valueChanges();
}

postOperadores(value) {
  const newId = this.fb.createId();
  console.log("myID:: "+newId)
  
  //this.storageService.setSession("mykey", newId);
  //return this.fb.collection('operators').doc( this.storageService.getSession("mykey")).set(data);

  var myid = Math.random().toString(36).substring(2)
  return this.fb.collection('operadores').doc(newId).set({


    $key: newId,
    id: myid,
    nombre: value.nombre,
    apellidoP: value.apellidoP,
    apellidoM: value.apellidoM,
    rfc: value.rfc,
    curp: value.curp,
    licencia: value.licencia,
    domicilio: value.domicilio,
    unidad: value.unidad, 
  })
}

updateOperators(value){
  //value.nameToSearch = value.name.toLowerCase();
  var update =  this.fb.collection('operadores').doc(this.storageService.getSession("$key"));
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


deleteOperators(myid: string){
    this.fb.collection("operadores").doc(myid).delete().then(function() {
    console.log("Document successfully deleted!");
    }).catch(function(error) {
      console.error("Error removing document: ", error);
      });

}

}