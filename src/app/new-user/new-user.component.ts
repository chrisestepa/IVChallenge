import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

// Este componente se encarga de mostrar el formulario que permitirá
// la creación de nuevos usuarios

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

  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
  }

  newUser(){
  // Se recogen los datos del formulario
  const { name, lastName } = this.formInfo;

  // Si alguno de los campos no ha sido introducido, aparece un mensaje de error
  // de lo contrario, se realiza la llamada al servicio para crear el usuario nuevos

  if(name != "" && lastName != "") {
    this.dbService.addNewUser(name, lastName)
  } else {
    this.message = "Todos los campos son obligatorios."
  }
}

}
