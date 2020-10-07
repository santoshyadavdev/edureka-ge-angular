import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Comment } from '../services/comments';
import { CommentsService } from '../services/comments.service';

@Injectable({
  providedIn: 'root'
})
export class CommentdetailsGuard implements Resolve<Comment> {

  constructor(private commentService: CommentsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comment>  {
    return this.commentService.getCommentsById(+route.paramMap.get('commentid'));
  }

}
