import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';

@Injectable()
export class DatabaseService {

  constructor(public router: Router, private db: AngularFirestore) { }

  getUserList(){
    return this.db.collection('/users').valueChanges();
  }

  addNewUser(userId, name, email){
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

}
