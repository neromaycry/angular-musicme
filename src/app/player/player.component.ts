import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { MusicService } from '../services/music.service';
import { Observable } from 'rxjs';
import { MusicState } from '../ngrx/app.states';
import * as musicReducer from '../ngrx/reducers/music.reducer';
import { DEFAULT_ALBUM_COVER_URL } from '../common/consts';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, AfterViewInit, OnDestroy {

  progress: number;
  duration: number;
  playing = false;
  interval: any;
  playIndex = 0;
  playData$: Observable<any>;
  currentTimeText: any;
  durationText: any;
  name = 'Unknown';
  artist = 'Unknown';
  album = 'Unknown';
  cover = DEFAULT_ALBUM_COVER_URL;

  constructor(
    private musicService: MusicService,
    private store: Store<MusicState>
  ) {
    this.progress = 0;
    this.duration = 300;
  }

  ngOnInit() {
    this.musicService.getPlayList();

    this.store.select(musicReducer.getPlaylist).subscribe((playlist) => {
      console.log('subscribe:', playlist);
    });

    this.store.select(musicReducer.getPlayIndex).subscribe((playIndex) => {
      this.playIndex = playIndex;
    });

    this.store.select(musicReducer.getPlayProgress).subscribe((data) => {
      // console.log(data);
      this.progress = data.currentTime;
      this.duration = data.duration == 0 ? 1 : data.duration;
      this.currentTimeText = this.formatTime(data.currentTime);
      this.durationText = this.formatTime(data.duration);
    });

    this.store.select(musicReducer.getPlayInfo).subscribe((info) => {
      this.name = info.name;
      this.artist = info.artist;
      this.album = info.album;
      this.cover = info.coverUrl == DEFAULT_ALBUM_COVER_URL ? info.coverUrl : `url(${info.coverUrl})`;
    });
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {

  }

  handlePlaying() {
    console.log('handle playing');
    this.playing = this.playing ? false : true;
    this.musicService.toggle(this.playIndex);

  }

  pre() {
    console.log('play pre song');
    this.musicService.pre();
  }

  next() {
    console.log('play next song');
    this.musicService.next();
  }

  // panRight() {
  //   console.log('pan right');
  // }

  formatTime(seconds: any) {
    var min: any = Math.floor(seconds / 60),
      second: any = seconds % 60,
      hour, newMin, time;

    if (min > 60) {
      hour = Math.floor(min / 60);
      newMin = min % 60;
    }

    if (second < 10) { second = '0' + second; }
    if (min < 10) { min = '0' + min; }

    return time = hour ? (hour + ':' + newMin + ':' + second) : (min + ':' + second);
  }

}
