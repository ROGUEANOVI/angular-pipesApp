import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  items: MenuItem[]=[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes De Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y fechas', 
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Numeros', 
            icon: 'pi pi-dollar',
            routerLink: 'numbers'
          },
          {
            label: 'No comunes', 
            icon: 'pi pi-globe',
            routerLink: 'not-common'
          },
        ]
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
        routerLink: "order"
      }
    ];
  }

}
