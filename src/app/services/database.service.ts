import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// Este servicio se encarga de comunicar los componentes con la base de datos Firebase

@Injectable()
export class DatabaseService {

  userList: Observable<any[]>;

  // En el constructor se rellena el listado de usuarios con los datos de la base de datos
  constructor(public router: Router, private db: AngularFirestore) {
    this.userList = this.db.collection('users').snapshotChanges()
      .map(changes => {
        return changes.map(change => {
          const data = change.payload.doc.data();
          data.id = change.payload.doc.id;
          return data;
        })
      });
  }

  // Este método devuelve el listado de usuarios ya cargado en el constructor
  getUserList() {
    return this.userList;
  }

  // Este método se encarga de guardar en la base de datos un nuevo registro
  // con los datos introducidos en el formulario del componente new-user
  addNewUser(name, lastName) {
    const newUser = {
      name: name,
      lastName: lastName,
    }

    // Si el usuario ha sido creado correctamente, la página redirecciona al listado de usuarios
    this.db.collection('users').add(newUser)
      .then(user => {
        console.log('Usuario añadido correctamente!')
        this.router.navigate(['/userlist']);
      })
      // En caso de error se muestra un mensaje por consola
      .catch(err => console.log(err));
  }

  // Este método elimina un usuario de la base de datos
  deleteUser(id) {
    const userToDelete = this.db.doc(`users/${id}`);

    userToDelete.delete()
      .then(deleted => console.log('Usuario eliminado correctamente!'));
  }

}
