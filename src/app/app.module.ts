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
import {MatBadgeModule} from '@angular/material/badge';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { HeaderModule } from './header/header.module';
import { ProductModule } from './product/product.module';

const loggerService = environment.production ? LoggerService : [];

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    PokemonComponent,
    PokemonListComponent,
    PokemonDetailsComponent,
    CommentsComponent,
    CommentsListComponent,
    PhotosComponent,
    CommentsAddComponent,
    TodosComponent,
    TodosAddComponent,
    MainNavComponent,
    PagenotfoundComponent,
    CommentsDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
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
    MatListModule,
    MatBadgeModule,
    HeaderModule
  ],
  providers: [loggerService,
    {
      provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
