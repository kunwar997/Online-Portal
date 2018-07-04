import {Component, OnInit} from '@angular/core';
import {Video} from '../models/video';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos: Video[];

  constructor(private api: ApiService) {
  }

  ngOnInit() {

    this.api.getVideos()
      .subscribe(videos => this.videos = videos, err => console.log('Error', err));

  }

}
