import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GeUiComponent } from './ge-ui.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [GeUiComponent, ListComponent],
  imports: [
    CommonModule
  ],
  exports: [GeUiComponent, ListComponent]
})
export class GeUiModule { }
