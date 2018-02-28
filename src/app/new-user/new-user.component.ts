import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  formInfo = {
    name:"",
    lastName:"",
  }

  message: string = '';

  constructor(private dbService: DatabaseService, public router: Router) { }

  ngOnInit() {
  }

  newUser(){
  const { name, lastName } = this.formInfo;

  if(name != "" && lastName != "") {
    this.dbService.addNewUser(name, lastName)
  } else {
    this.message = "Todos los campos son obligatorios."
  }
}

}
