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
  commentDetails$: Observable<number>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe((res) => this.commentid = + res.get('commentid'));

    this.commentDetails$ = this.route.data.pipe(
      map((res) => res['details'])
    );
  }

}
