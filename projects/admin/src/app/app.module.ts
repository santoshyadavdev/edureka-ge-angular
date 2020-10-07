import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APPCONFIG, CONFIGVALUES } from './appconfig.service';
import { AdminService } from './services/admin.service';
import { NewadminService } from './services/newadmin.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeUiModule } from 'ge-ui';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from './directives/hover.directive';
import { ValidationDirective } from './directives/validation.directive';

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
