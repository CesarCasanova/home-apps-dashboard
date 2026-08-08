export interface AppConfig {
    id: string;
    name: string;
    description: string;
    url: string;
    icon: string;
    color: string;
}

export const apps: AppConfig[] = [
    {
        id: 'komga',
        name: 'Komga',
        description: 'Manga & Comic Book Server',
        url: 'http://localhost:25600/', // Update with your Komga URL
        icon: '/komga.png',
        color: 'from-blue-700 to-amber-600',
    },
    {
        id: 'jellyfin',
        name: 'Jellyfin',
        description: 'Media Server',
        url: 'http://localhost:8899/', // Update with your Jellyfin URL
        icon: '/jellyfin.png',
        color: 'from-purple-700 to-cyan-600',
    },
    {
        id: 'metube',
        name: 'MeTube',
        description: 'Video Downloader',
        url: 'http://localhost:8081', // Update with your MeTube URL
        icon: '/metube.png',
        color: 'from-rose-700 to-red-600',
    },
    {
        id: 'easynvr',
        name: 'EasyNVR',
        description: 'Network Video Recorder',
        url: 'http://localhost:10000', // Update with your EasyNVR URL
        icon: '/easynvr.png',
        color: 'from-teal-700 to-emerald-700',
    },
];
