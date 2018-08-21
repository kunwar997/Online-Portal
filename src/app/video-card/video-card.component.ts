import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../models/video';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {

  @Input() video: Video;

  constructor() {
    console.log('date', Date.now());
  }

  ngOnInit() {
    console.log('video', this.video);
  }

}
