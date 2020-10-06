import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APPCONFIG, CONFIGVALUES } from './appconfig.service';
import { AdminService } from './services/admin.service';
import { NewadminService } from './services/newadmin.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    NewadminService,
    { provide : APPCONFIG, useValue : CONFIGVALUES },
    { provide: AdminService, useExisting : NewadminService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
