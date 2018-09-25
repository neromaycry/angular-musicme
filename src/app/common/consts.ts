const LOCAL_IP = 'http://132.232.187.54';
const PORT = '9000';

const buildServiceUrl = (ip, port, name) => `${ip}:${port}/${name}`;

export const PLAYLIST_URL = buildServiceUrl(LOCAL_IP, PORT, 'playlist');

export const DEFAULT_ALBUM_COVER_URL = "url('../../assets/imgs/preview.png')";

// export class Consts {

//     public PLAYLIST_URL = this.buildServiceUrl(LOCAL_IP, PORT, '/playlist');

//     buildServiceUrl(ip, port, name) {
//         return `${ip}:${port}/${name}`;
//     }

// }
