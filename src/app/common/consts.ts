const LOCAL_IP = 'http://localhost';
const PORT = '3000';

const buildServiceUrl = (ip, port, name) => `${ip}:${port}/${name}`;

export const PLAYLIST_URL = buildServiceUrl(LOCAL_IP, PORT, 'playlist');

// export class Consts {

//     public PLAYLIST_URL = this.buildServiceUrl(LOCAL_IP, PORT, '/playlist');

//     buildServiceUrl(ip, port, name) {
//         return `${ip}:${port}/${name}`;
//     }

// }
