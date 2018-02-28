import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DatabaseService {

  userList: Observable<any[]>;

  constructor(public router: Router, private db: AngularFirestore) {
    // this.userList = this.db.collection('users').valueChanges();
    this.userList = this.db.collection('users').snapshotChanges()
    .map(changes => {
      return changes.map(change => {
        const data = change.payload.doc.data();
        data.id = change.payload.doc.id;
        return data;
      })
    });
  }

  getUserList() {
    return this.userList;
  }

  addNewUser(userId, name, email) {
    const newUser = {
      userId: userId,
      name: name,
      email: email
    }

    this.db.collection('users').add(newUser)
      .then(user => {
        console.log('Usuario añadido correctamente!')
        this.router.navigate(['/userlist']);
      })
      .catch(err => console.log(err));
  }

  deleteUser(id){
    const userToDelete = this.db.doc(`users/${id}`);
    userToDelete.delete();
  }

}
