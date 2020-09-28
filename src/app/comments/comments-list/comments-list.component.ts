import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ge-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  @Input() comments : Comment[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
