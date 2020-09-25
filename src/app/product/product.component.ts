import {
  AfterViewInit, Component,
  ElementRef,
  OnInit, QueryList, Renderer2, ViewChild, ViewChildren, ViewEncapsulation
} from '@angular/core';

import { HeaderComponent } from '../header/header.component';
import { Product } from './product';

@Component({
  selector: 'ge-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  // encapsulation : ViewEncapsulation.ShadowDom
})
export class ProductComponent implements OnInit, AfterViewInit {

  @ViewChild(HeaderComponent, {
    static: true
  }) headerComponent: HeaderComponent;

  @ViewChildren(HeaderComponent) headerListComponet: QueryList<HeaderComponent>;

  @ViewChild('footer', {static: true }) footerDiv: ElementRef;

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

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.headerComponent.title = 'Hello User';

    this.renderer.setProperty(this.footerDiv.nativeElement, 'innerText', 'This is a footer appeneded using viewChild');

    // this.footerDiv.nativeElement.innerText = "This is a footer appeneded using viewChild";
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
