import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from '../actions/music.action';
import { MusicState } from '../app.states';

export const initialState: MusicState = {
    playlist: [],
    duration: 0,
    currentTime: 0,
    playIndex: 0,
    name: 'Unknown',
    artist: 'Artist',
    album: 'Album'
};

export function reducer(state = initialState, action: fromActions.All): MusicState {
    switch (action.type) {
        case fromActions.LOAD_PLAYLIST_ACTION: {
            return Object.assign({}, state, {
                playlist: action.payload
            });
        }
        case fromActions.SET_PLAY_PROGRESS_ACTION: {
            return Object.assign({}, state, {
                currentTime: action.payload.currentTime,
                duration: action.payload.duration
            });
        }
        case fromActions.SET_PLAY_INDEX_ACTION: {
            return Object.assign({}, state, {
                playIndex: action.payload
            });
        }
        case fromActions.SET_PLAY_INFO_ACTION: {
            return Object.assign({}, state, {
                name: action.payload.name,
                artist: action.payload.artist,
                album: action.payload.album
            });
        }
        default: {
            return state;
        }
    }
}

export const getPlaylistState = createFeatureSelector<MusicState>('musicState');

export const getPlaylist = createSelector(getPlaylistState, (state: MusicState) => state.playlist);
export const getPlayProgress = createSelector(getPlaylistState, (state: MusicState) => {
    return {
        duration: state.duration,
        currentTime: state.currentTime
    }
});
export const getPlayIndex = createSelector(getPlaylistState, (state: MusicState) => state.playIndex);
export const getPlayInfo = createSelector(getPlaylistState, (state: MusicState) => {
    return {
        name: state.name,
        artist: state.artist,
        album: state.album
    }
});
