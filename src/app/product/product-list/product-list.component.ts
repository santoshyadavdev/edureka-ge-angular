import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'ge-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [
    {
      id:1 ,category : 'Mobile' ,mfd : new Date('10-Jan-2019') ,name : 'Iphone',
      price : 45000
    },
    {
      id:2 ,category : 'Mobile' ,mfd : new Date('10-Feb-2019') ,name : 'One Plus',
      price : 55000
    },
    {
      id:3 ,category : 'Mobile' ,mfd : new Date('10-Mar-2019') ,name : 'Xiomi',
      price : 65000
    }
  ]

  fontstyle ='red';

  constructor() { }

  ngOnInit(): void {
  }

  trackByProductId(i: number, data: Product) {
      return data.id ?? i;
  }

}
