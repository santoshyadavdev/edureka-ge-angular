import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { HeaderModule } from '../header/header.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductService } from './services/product.service';
import { productFactory } from './services/productfactory.service';
import { LoginService } from '../login/service/login.service';
import { CustomPipe } from './pipes/custom.pipe';
import { WelcomePipe } from './pipes/welcome.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    CustomPipe,
    WelcomePipe,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatDividerModule,
    HeaderModule,
    FormsModule
  ],
  providers : [
    { provide: ProductService, useFactory : productFactory , deps:[LoginService] }
  ]
})
export class ProductModule { }
