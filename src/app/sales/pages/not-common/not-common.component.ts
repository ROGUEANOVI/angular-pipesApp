import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-common',
  templateUrl: './not-common.component.html'
})
export class NotCommonComponent {
 
  name: string = "Ovidio";
  gender: string = "masculino";
  invitationMap ={
    "masculino": "invitarlo",
    "femenino": "invitarla"
  };

  customers: string[] = ["Maria", "Pedro", "Juan", "Ana"];
  customersMap = {
    "=0": "no tenemos ningun cliente esperando.",
    "=1": "tenemos un cliente esperando.",
    "=2": "tenemos 2 clientes esperando.",
    "other": "tenemos # clientes esperando."
  };

  people = {
    name: "Ovidio",
    age: 28,
    address: "Carrera 6B #4A-23"
  }

  hero = [
    {
      name: "Superman",
      Flying: true,
    },
    {
      name: "Robin",
      Flying: false,
    },
    {
      name: "Aquaman",
      Flying: false,
    }
  ]

  changeCustomer(){
    this.name = "Laura";
    this.gender = "femenino";
  }

  deleteCustomer(){
    this.customers.pop();
  }

  myObservable = interval(1000);

  valuePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Fin de la promesa");
    }, 3000);
  });
}
