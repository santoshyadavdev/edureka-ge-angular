import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'ge-comments-details',
  templateUrl: './comments-details.component.html',
  styleUrls: ['./comments-details.component.css']
})
export class CommentsDetailsComponent implements OnInit {

  commentid: number = 0;
  commentid$: Observable<number>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe((res) => this.commentid = + res.get('commentid'));

    this.commentid$ = this.route.paramMap.pipe(
      map((res) => +res.get('commentid')),
      tap(res=> console.log(res)),
    );
  }

}
