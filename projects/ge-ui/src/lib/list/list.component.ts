import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input() list: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
