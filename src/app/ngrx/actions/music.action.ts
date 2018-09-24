import { Action } from '@ngrx/store';

export const LOAD_PLAYLIST_ACTION = 'LoadPlaylistAction';
export const SET_PLAY_PROGRESS_ACTION = 'SetPlayProgressAction';
export const SET_PLAY_INDEX_ACTION = 'SetPlayIndexAction';
export const SET_PLAY_INFO_ACTION = 'SetPlayInfoAction';

export class LoadPlaylistAction implements Action {
    readonly type = LOAD_PLAYLIST_ACTION;
    constructor(public payload: any) { }
}

export class SetPlayProgressAction implements Action {
    readonly type = SET_PLAY_PROGRESS_ACTION;
    constructor(public payload: any) { }
}

export class SetPlayIndexAction implements Action {
    readonly type = SET_PLAY_INDEX_ACTION;
    constructor(public payload: number) { }
}

export class SetPlayInfoAction implements Action {
    readonly type = SET_PLAY_INFO_ACTION;
    constructor(public payload: any) { }
}

export type All = 
LoadPlaylistAction |
SetPlayProgressAction|
SetPlayIndexAction |
SetPlayInfoAction; 
