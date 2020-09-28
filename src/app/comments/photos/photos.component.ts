import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'ge-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  loadeddata: number = 0;
  constructor(private photoService: CommentsService) { }

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe(event => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Your request is sent to the server');
          break;
        }
        case HttpEventType.ResponseHeader: {
          if (event.status === 200) {
            console.log('Your request is being processed!')
          }
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.loadeddata += event.loaded;
          break
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }
      }
    });
  }

}
