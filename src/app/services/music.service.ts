import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { Music, initialMusic } from '../model/music.model';
import { initialPlayData } from '../model/play-data.model';
import { PLAYLIST_URL } from '../common/consts';
import { MusicState } from '../ngrx/app.states';
import * as fromActions from '../ngrx/actions/music.action';
import * as musicReducer from '../ngrx/reducers/music.reducer';

@Injectable()
export class MusicService {
    private _audio: HTMLAudioElement;
    public playList = [initialMusic];
    private playData = initialPlayData;
    private listenInterval: any;

    constructor(
        private http: HttpClient,
        private store: Store<MusicState>
    ) {
        this.store.select(musicReducer.getPlayIndex).subscribe((playIndex) => {
            if (this.playData) {
                this.playData.playIndex = playIndex;
            }
        });

        this._audio = document.createElement('audio');
        this._audio.autoplay = false;
        this._audio.onplay = () => {
            console.log('onplay');
            let that = this;
            if (this.playData.currentTime != 0) {
                this._audio.currentTime = this.playData.currentTime;
            }
            this.listenInterval = setInterval(() => {
                that.playData.currentTime = Math.ceil(that._audio.currentTime);
                that.playData.duration = Math.ceil(that._audio.duration);
                console.log(this.playData);
                that.store.dispatch(new fromActions.SetPlayProgressAction(that.playData));
            }, 1000);
        }
        this._audio.onpause = () => {
            console.log('onpause');
            this.playData.currentTime = Math.ceil(this._audio.currentTime);
            this.store.dispatch(new fromActions.SetPlayProgressAction(this.playData));
        }
        this._audio.onended = () => {
            console.log('onended');
            if (this.playList.length > this.playData.playIndex) {
                this.playData.playIndex++;
                this.playData.isPlaying = false;
                this.toggle(this.playData.playIndex);
            } else {
                this.playData.playIndex = 0;
                this.playData.isPlaying = false;
                this.toggle(this.playData.playIndex);
            }
        }

    }

    toggle(index) {
        let music: Music = this.playList[index];
        this._audio.src = music.songUrl;
        if (!this.playData.isPlaying) {
            this._audio.play();
            this.playData.isPlaying = true;
            this.playData.name = music.name;
            this.playData.artist = music.artist;
            this.playData.album = music.album;
            this.store.dispatch(new fromActions.SetPlayInfoAction(this.playData));
        } else {
            this._audio.pause();
            this.playData.isPlaying = false;
            clearInterval(this.listenInterval);
        }
    }

    getPlayList() {
        console.log();
        this.http.get(PLAYLIST_URL)
            .subscribe(
                (response: any) => {
                    // console.log(response);
                    this.playList = response.data;
                    this.store.dispatch(new fromActions.LoadPlaylistAction(response.data));
                    // console.log(this.playList);
                },
                error => {
                    console.log(error);
                }
            );
    }

}
