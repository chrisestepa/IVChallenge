import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class DatabaseService {

  constructor(private firestore: AngularFirestore, private db: AngularFireDatabase) { }

  getUserList(){
    return this.firestore.collection('/users').valueChanges();
  }

  addNewUser(userId, name, email){
    this.db.list('/users').push({userId, name, email});
  }

}
