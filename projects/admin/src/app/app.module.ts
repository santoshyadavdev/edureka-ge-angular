import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { GeUiModule } from 'ge-ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APPCONFIG, CONFIGVALUES } from './appconfig.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HoverDirective } from './directives/hover.directive';
import { ValidationDirective } from './directives/validation.directive';
import { AdminService } from './services/admin.service';
import { NewadminService } from './services/newadmin.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HoverDirective,
    ValidationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GeUiModule,
    FormsModule
  ],
  providers: [
    NewadminService,
    { provide : APPCONFIG, useValue : CONFIGVALUES },
    { provide: AdminService, useExisting : NewadminService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
