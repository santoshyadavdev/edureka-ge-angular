import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CommentsService } from './services/comments.service';
import { Comment } from './services/comments';

@Component({
  selector: 'ge-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  // commentList: Comment[] = [];

  // subscription: Subscription;
  commentList$: Observable<Comment[]> = this.commentService.getComments();

  constructor(private commentService: CommentsService) { }


  // ngOnInit(): void {
  // this.subscription = this.commentService.getComments().subscribe(res => this.commentList = res);=
  // }

  // ngOnDestroy(): void {
  // if(this.subscription) {
  //   this.subscription.unsubscribe();
  // }
  // }

  addComment() {
    const comment: Comment = {
      postId: 1,
      name: 'Bill',
      email: 'test@test.com',
      body: 'this is test comment'
    };

    this.commentService.addCommments(comment).subscribe(res => console.log(res));
  }

  updateComment() {
      const comment: Comment = {
        postId: 1,
        id: 1,
        name: 'Bill',
        email: 'test@test.com',
        body: 'this is test comment'
      };

      this.commentService.updateComments(comment).subscribe(res => console.log(res));
  }

  deleteComment() {
    // const comment: Comment = {
    //   postId: 1,
    //   id: 1,
    //   name: 'Bill',
    //   email: 'test@test.com',
    //   body: 'this is test comment'
    // };

    this.commentService.deleteComments().subscribe(res => console.log(res));
}

}
