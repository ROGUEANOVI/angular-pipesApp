import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'pipesApp';
  name: string = "ovidio";
  value:number = 1000;

  obj = {
    name: this.name,
    value: this.value
  }

  seeName(){
    console.log(this.name);
  }

  constructor(private primengConfig: PrimeNGConfig){}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}
