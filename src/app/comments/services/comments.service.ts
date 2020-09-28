import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from './comments';
import { Photos } from './photos';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  apiEndpoint = 'http://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiEndpoint}/comments`);
  }

  addCommments(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${this.apiEndpoint}/comments`, comment);
  }

  updateComments(comment: Comment) {
    return this.http.put<Comment>(`${this.apiEndpoint}/comments/${comment.id}`, comment);
  }

  deleteComments() {
    return this.http.delete(`${this.apiEndpoint}/comments/1`);
  }

  getPhotos() {
    const request = new HttpRequest('GET', `${this.apiEndpoint}/photos`, {
      reportProgress: true
    });

    return this.http.request<Photos[]>(request);
  }


}
