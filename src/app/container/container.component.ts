import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, Host, OnInit, QueryList } from '@angular/core';
// import { EmployeeComponent } from '../employee/employee.component';
// import { EmployeeService } from '../employee/services/employee.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'ge-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  // providers: [EmployeeService]
})
export class ContainerComponent implements OnInit, AfterContentInit {

  @ContentChild(ProductComponent, { static : true }) productComponent : ProductComponent;

  @ContentChild(ProductComponent, { read : ElementRef }) productElement : ElementRef;

  @ContentChildren(ProductComponent) productListComponent : QueryList<ProductComponent>;

  // @ContentChildren(ProductComponent) productListComponent : QueryList<ProductComponent>;

  // constructor(@Host() private employeeService: EmployeeService) { }


  ngOnInit(): void {
    console.log(this.productComponent.product);
  }

  ngAfterContentInit(): void {
    console.log(this.productElement.nativeElement);
    // this.productElement.nativeElement.hidden = true;
    // this.productListComponent.notifyOnChanges()
    this.productListComponent.forEach((productComp)=> console.log(productComp.hide));
  }

}
