import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from './sales/pages/common/common.component';
import { NotCommonComponent } from './sales/pages/not-common/not-common.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { OrderComponent } from './sales/pages/order/order.component';

const routes: Routes = [
  { path : "", component: CommonComponent, pathMatch:"full" },
  { path: "numbers", component: NumbersComponent },
  { path: "common", component: CommonComponent },
  { path: "not-common", component: NotCommonComponent },
  { path: "order", component: OrderComponent },
  { path: "**", redirectTo: "" },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
