import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent {

  name: string = "ovidio";

  isMayus: boolean = false;

  orderBy: string = "void";

  heros: Hero[] = [
    {
      name: "Sueprman",
      flying: true,
      color: Color.blue
    },
    {
      name: "Batman",
      flying: false,
      color: Color.black
    },
    {
      name: "Robin",
      flying: false,
      color: Color.red
    },
    {
      name: "Aquaman",
      flying: false,
      color: Color.green
    },
    {
      name: "Iroman",
      flying: true,
      color: Color.red
    }
  ]

  toggleMayus(){
    this.isMayus = !this.isMayus; 
  }

  changeOrder(param: string){
    this.orderBy = param;
  }
}
