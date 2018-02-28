import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: Observable<any[]>;

  constructor(private db: AngularFirestore) { }
  ngOnInit() {
    this.userList = this.db.collection('/users').valueChanges();
  }

}
