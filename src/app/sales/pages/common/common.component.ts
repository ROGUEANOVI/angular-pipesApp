import { Component } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html'
})
export class CommonComponent  {

  nameLower: string = "ovidio";
  nameUpper: string = "OVIDIO";
  fullName: string = "oViDio RoMEro";

  date: Date = new Date();
}
