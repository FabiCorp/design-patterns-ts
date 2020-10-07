
interface YouTubeService {
    listVideos(): VideoInfo[];
    getVideoInfo(id: number): VideoInfo;
    downloadVideo(id: number): Video;
}

class Video { constructor(public readonly id: number) { } }
class VideoInfo { constructor(public readonly id: number) { } }

class CachedYouTubeService implements YouTubeService {

    private videoInfoCache: VideoInfo[] = [];

    constructor(private youtubeService: YouTubeService) { }

    public listVideos(): VideoInfo[] { 

        if (this.videoInfoCache.length === 0) {
            this.videoInfoCache = this.youtubeService.listVideos();
        } 

        return this.videoInfoCache.slice();
    }

    public getVideoInfo(id: number): VideoInfo { 
        let videoInfo = this.findVideoInfoInCache(id);
        if (videoInfo === undefined) {
            videoInfo = this.getVideoInfo(id);
            this.videoInfoCache.push(videoInfo);
        }
        return videoInfo; 
    }

    private findVideoInfoInCache(id: number): VideoInfo | undefined {
        return this.videoInfoCache.find(videoInfo => videoInfo.id === id)
    }


    public downloadVideo(id: number): Video { return this.youtubeService.downloadVideo(id); }

}

class YouTubeServiceImpl implements YouTubeService {
    
    public listVideos(): VideoInfo[] { return [new VideoInfo(1)]; }
    public getVideoInfo(id: number): VideoInfo { return new VideoInfo(id); }
    public downloadVideo(id: number): Video { return new Video(id); }

}

