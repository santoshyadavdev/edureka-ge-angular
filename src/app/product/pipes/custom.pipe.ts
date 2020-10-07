import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product';

@Pipe({
  name: 'priceFilter'
})
export class CustomPipe implements PipeTransform {

  transform(products: Product[], price: number): Product[] {
    return products.filter((prod) => prod.price > price);
  }

}
