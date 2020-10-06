import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { LoginService } from 'src/app/login/service/login.service';
import { Product } from '../product';

@Injectable()
export class ProductService {

  cart: Product[] = [];

  // cart$ = new Subject<Product[]>();
  // cart$ = new BehaviorSubject<Partial<Product>>({});
  cart$ = new BehaviorSubject<Product[]>([]);
  numbers$ = new ReplaySubject(2);


  constructor(userRole: string) {
    console.log(userRole);
  }

  addProductToCart(product: Product) {
    this.cart.push(product);
    this.cart$.next(this.cart);

    this.numbers$.next(1);
    this.numbers$.next(2);
    this.numbers$.subscribe((res)=> console.log(res));
    this.numbers$.complete();
    this.numbers$.next(3);
    this.numbers$.next(4);
    this.numbers$.subscribe((res)=> console.log(res));
    // this.cart$.complete();
    // this.cart$.error('this is an exception');
  }

  getProductCart() {
    return this.cart$.asObservable();
  }


}
