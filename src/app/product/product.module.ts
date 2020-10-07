import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { HeaderModule } from '../header/header.module';
import { LoginService } from '../login/service/login.service';
import { CustomPipe } from './pipes/custom.pipe';
import { WelcomePipe } from './pipes/welcome.pipe';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductService } from './services/product.service';
import { productFactory } from './services/productfactory.service';



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
    { provide: ProductService, useFactory : productFactory , deps: [LoginService] }
  ]
})
export class ProductModule { }
