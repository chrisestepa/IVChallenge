import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: Observable<any[]>;

  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
    this.userList = this.dbService.getUserList();
  }

  delete(event, id) {
    this.dbService.deleteUser(id);
  }

}
