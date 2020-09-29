import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Comment } from '../services/comments';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'ge-comments-add',
  templateUrl: './comments-add.component.html',
  styleUrls: ['./comments-add.component.css']
})
export class CommentsAddComponent implements OnInit {

  comment: Comment = {
    postId: 0,
    body: '',
    email: '',
    name: ''
  };

  constructor(private commentService: CommentsService) { }

  ngOnInit(): void {
    this.getCommentFormData();
  }

  private getCommentFormData() {
    return this.comment = {
      postId: 1,
      body: 'this is test',
      email: 'test@gmail.com',
      name: 'Test',
      id: 1
    };
  }

  addComments(commentForm: NgForm) {
    console.log(this.comment);

    if (commentForm.valid) {
      this.commentService.addCommments(this.comment).subscribe((res) => {
        console.log(res);
        commentForm.resetForm({
          postid: 1,
          body: 'this is test',
          email: 'test@gmail.com',
          name: 'Test',
          id: 1
        });
      }
      );
    }

  }
}
