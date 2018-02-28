import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class DatabaseService {

  constructor(private db: AngularFirestore) { }

  getUserList(){
    return this.db.collection('/users').valueChanges();
  }

  addNewUser(userId, name, email){

  }

}
