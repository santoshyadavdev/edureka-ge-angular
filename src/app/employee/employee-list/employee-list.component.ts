import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'ge-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent implements OnInit, OnChanges {

  displayedColumns: string[] = ['id', 'name', 'email', 'dob', 'salary', 'action'];
  @Input() empList: Employee[] = [];

  @Input() title: string;

  @Output() selectedEmployee = new EventEmitter<Employee>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
  }

  ngOnInit(): void {
  }

  sendToParent(emp: Employee) {
    // send to parent
    this.selectedEmployee.emit(emp);
  }

}
