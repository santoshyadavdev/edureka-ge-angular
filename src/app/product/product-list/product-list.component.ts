import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'ge-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  price = 0;

  productList: Product[] = [
    {
      id: 1, category: 'Mobile', mfd: new Date('10-Jan-2019'), name: 'Iphone',
      price: 45000
    },
    {
      id: 2, category: 'Mobile', mfd: new Date('10-Feb-2019'), name: 'One Plus',
      price: 55000
    },
    {
      id: 3, category: 'Mobile', mfd: new Date('10-Mar-2019'), name: 'Xiomi',
      price: 65000
    }
  ];

  fontstyle = 'red';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  trackByProductId(i: number, data: Product) {
    return data.id ?? i;
  }

  addToCart(product: Product): void {
    this.productService.addProductToCart(product);
  }

}
