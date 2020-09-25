import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { chownSync } from 'fs';
import { environment } from 'src/environments/environment';
import { LoggerService } from './logger.service';

const loggerService = environment.production ? LoggerService : [];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EmployeeComponent,
    ProductListComponent,
    EmployeeListComponent,
    HeaderComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [loggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
