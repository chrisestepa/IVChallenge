import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { DatabaseService } from '../services/database.service';

// Este componente se encarga de mostrar el listado de usuarios

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: Observable<any[]>;

  constructor(private dbService: DatabaseService) { }

  // Al inicializar el componente se obtiene el listado de usuarios
  ngOnInit() {
    this.userList = this.dbService.getUserList();
  }

  // Este método indica al servicio qué usuario debe eliminar de la base de datos
  delete(event, id) {
    this.dbService.deleteUser(id);
  }

}
