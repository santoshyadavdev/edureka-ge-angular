import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CommentsService } from './services/comments.service';
import { Comment } from './services/comments';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ge-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  // commentList: Comment[] = [];

  // subscription: Subscription;
  // commentList$: Observable<Comment[]> = this.commentService.getComments();

  commentList$: Observable<Comment[]> = this.route.data.pipe(
    map(res => res['commentList'])
  );

  constructor(
    private route: ActivatedRoute,
    private commentService: CommentsService) { }




  ngOnInit(): void {
    // this.subscription = this.commentService.getComments().subscribe(res => this.commentList = res);=
    // this.route.data.pipe(
    //   tap((res) => console.log(res['commentList']))
    // ).subscribe();

    // this.route.data.subscribe((res)=> console.log(res['commentList']));
  }

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
