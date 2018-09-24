export class PlayData {
    name: string;
    artist: string;
    album: string;
    currentTime: number;
    duration: number;
    isPlaying: boolean;
    playIndex: number;
}

export const initialPlayData: PlayData = {
    name: 'Unknown',
    artist: 'Unknown',
    album: 'Unknown',
    currentTime: 0,
    duration: 0,
    isPlaying: false,
    playIndex: 0
}
