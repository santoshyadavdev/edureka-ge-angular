import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ge-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  name: string = 'Suchita';

  department: string = 'Tech';

  hide: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.hide = !this.hide;
  }

}
