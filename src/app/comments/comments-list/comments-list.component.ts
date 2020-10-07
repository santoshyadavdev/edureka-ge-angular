import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../services/comments';

@Component({
  selector: 'ge-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  @Input() comments: Comment[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
