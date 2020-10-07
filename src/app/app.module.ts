import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {MatBadgeModule} from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';


import { LayoutModule } from '@angular/cdk/layout';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { ApiInterceptor } from './api.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsAddComponent } from './comments/comments-add/comments-add.component';
import { CommentsDetailsComponent } from './comments/comments-details/comments-details.component';
import { CommentsListComponent } from './comments/comments-list/comments-list.component';
import { CommentsComponent } from './comments/comments.component';
import { PhotosComponent } from './comments/photos/photos.component';
import { ContainerComponent } from './container/container.component';
import { HeaderModule } from './header/header.module';
import { LoggerService } from './logger.service';
import { LoginComponent } from './login/login.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PokemonDetailsComponent } from './pokemon/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ProductModule } from './product/product.module';
import { TodosAddComponent } from './todos/todos-add/todos-add.component';
import { TodosComponent } from './todos/todos.component';

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
    HeaderModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [loggerService,
    {
      provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
