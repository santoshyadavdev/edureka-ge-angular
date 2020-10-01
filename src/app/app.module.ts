import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { environment } from 'src/environments/environment';
import { LoggerService } from './logger.service';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon/pokemon-details/pokemon-details.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentsListComponent } from './comments/comments-list/comments-list.component';
import { PhotosComponent } from './comments/photos/photos.component';
import { ApiInterceptor } from './api.interceptor';
import { CommentsAddComponent } from './comments/comments-add/comments-add.component';
import { EmployeeonboardingComponent } from './employee/employeeonboarding/employeeonboarding.component';
import { MatNativeDateModule } from '@angular/material/core';
import { TodosComponent } from './todos/todos.component';
import { TodosAddComponent } from './todos/todos-add/todos-add.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CommentsDetailsComponent } from './comments/comments-details/comments-details.component';
import { LoginComponent } from './login/login.component';

const loggerService = environment.production ? LoggerService : [];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EmployeeComponent,
    ProductListComponent,
    EmployeeListComponent,
    HeaderComponent,
    ContainerComponent,
    PokemonComponent,
    PokemonListComponent,
    PokemonDetailsComponent,
    CommentsComponent,
    CommentsListComponent,
    PhotosComponent,
    CommentsAddComponent,
    EmployeeonboardingComponent,
    TodosComponent,
    TodosAddComponent,
    MainNavComponent,
    PagenotfoundComponent,
    CommentsDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [loggerService,
    {
      provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
