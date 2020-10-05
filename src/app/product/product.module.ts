import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { HeaderModule } from '../header/header.module';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatDividerModule,
    HeaderModule
  ]
})
export class ProductModule { }
