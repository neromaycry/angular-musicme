export class Music {
    id: number;
    name: string;
    album: string;
    artist: string;
    songUrl: string;
    coverUrl: string;
}

export const initialMusic: Music = {
    id: 0,
    name: 'Unknown',
    album: 'Unknown',
    artist: 'Unknown',
    songUrl: '',
    coverUrl: ''
};
