import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonComponent } from './pages/not-common/not-common.component';
import { CommonComponent } from './pages/common/common.component';
import { OrderComponent } from './pages/order/order.component';
import { MayusPipe } from './pipes/mayus.pipe';
import { ColorPipe } from './pipes/color.pipe';
import { FlyingPipe } from './pipes/flying.pipe';
import { OrderPipe } from './pipes/order.pipe';

@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonComponent,
    CommonComponent,
    OrderComponent,
    MayusPipe,
    ColorPipe,
    FlyingPipe,
    OrderPipe

  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    NumbersComponent,
    NotCommonComponent,
    CommonComponent,
    OrderComponent
  ]
})
export class SalesModule { }
