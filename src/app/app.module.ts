import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { SalesModule } from './sales/sales.module';

import { AppComponent } from './app.component';

import localCO from '@angular/common/locales/es-CO';
import localFR from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localCO);
registerLocaleData(localFR);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    SalesModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "es-CO"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
