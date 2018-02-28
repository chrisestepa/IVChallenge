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
    userId:"",
    name:"",
    email:"",
  }

  message: string = '';

  constructor(private dbService: DatabaseService, public router: Router) { }

  ngOnInit() {
  }

  newUser(){
  const { userId, name, email } = this.formInfo;

  if(userId != "" && name != "" && email != "") {
    this.dbService.addNewUser(userId, name, email)
  } else {
    this.message = "Todos los campos son obligatorios."
  }
}

}
