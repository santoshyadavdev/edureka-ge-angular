import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product';

@Pipe({
  name: 'welcome'
})
export class WelcomePipe implements PipeTransform {

  transform(product: Product, ...args: unknown[]): Product {
    let newProduct: Product = { ...product, price: product.price > 10000 ? product.price - 2000 : product.price };
    newProduct.name = `You have received some discount on ${product.name}`;
    return newProduct;
  }
}
