import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: 'product', component: ProductComponent, data: {
      title: 'All Products',
      description: 'Collection of all products'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
