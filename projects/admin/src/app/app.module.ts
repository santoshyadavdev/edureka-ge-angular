import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APPCONFIG, CONFIGVALUES } from './appconfig.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide : APPCONFIG, useValue : CONFIGVALUES }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
