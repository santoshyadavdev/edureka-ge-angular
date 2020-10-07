import {
  AfterViewInit, Component,
  ElementRef,
  OnInit, QueryList, Renderer2, ViewChild, ViewChildren, ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { HeaderComponent } from '../header/header.component';
import { Product } from './product';
import { ProductService } from './services/product.service';

interface RouteData {
  title: string;
  desc: string;
}

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

  @ViewChild('footer', { static: true }) footerDiv: ElementRef;

  name = 'Suchita';

  department = 'Tech';

  hide = false;

  product: Product = {
    id: 4,
    category: 'TV',
    mfd: new Date('1-Jan-2019'),
    name: 'One Plus TV',
    price: 65000
  };
  cart$: Observable<Product[]>;

  // title: string;
  // desc: string;

  routeData$: Observable<RouteData>;



  constructor(private renderer: Renderer2,
              private route: ActivatedRoute,
              private productService: ProductService) { }



  ngOnInit(): void {
    this.cart$ = this.productService.getProductCart().pipe(
      tap(res => console.log(res))
    );
    this.headerComponent.title = 'Hello User';

    this.renderer.setProperty(this.footerDiv.nativeElement, 'innerText', 'This is a footer appeneded using viewChild');

    // this.route.data.subscribe(res => {
    //   this.title = res['title'];
    //   this.desc = res['description']
    // });

    this.routeData$ = this.route.data.pipe(
      map((res) => {
        const routeData: RouteData = {
          desc: res.description,
          title: res.title
        };
        return routeData;
      }));
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
