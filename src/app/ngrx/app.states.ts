import { Music } from "../model/music.model";

export interface AppState {
    musicState: MusicState;
}

export interface MusicState {
    playlist: Music[];
    duration: number;
    currentTime: number;
    playIndex: number;
    name: string;
    artist: string;
    album: string;
    coverUrl: string;
}
