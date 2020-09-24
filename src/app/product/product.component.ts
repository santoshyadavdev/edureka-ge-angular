import {
  AfterViewInit, Component,
  OnInit, QueryList, ViewChild, ViewChildren
} from '@angular/core';

import { HeaderComponent } from '../header/header.component';
import { Product } from './product';

@Component({
  selector: 'ge-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, AfterViewInit {

  @ViewChild(HeaderComponent, {
    static: true
  }) headerComponent: HeaderComponent;

  @ViewChildren(HeaderComponent) headerListComponet: QueryList<HeaderComponent>;

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
    this.headerComponent.title = 'Hello User';
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.headerListComponet.forEach((headerComp) => headerComp.title = 'New Prodict List');
    }, 0);

    this.headerListComponet.forEach((headerComp) => headerComp.title = 'New Prodict List');
  }

  toggle() {
    this.hide = !this.hide;
  }

}
