import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'ge-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  name: string = 'Suchita';

  department: string = 'Tech';

  hide: boolean = false;

  product: Product = {
    id: 4,
    category: 'TV',
    mfd: new Date('1-Jan-2019'),
    name: 'One Plus TV',
    price: 65000
  };

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.hide = !this.hide;
  }

}
