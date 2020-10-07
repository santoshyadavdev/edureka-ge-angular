import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';


@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatDividerModule
  ]
})
export class OrdersModule { }
