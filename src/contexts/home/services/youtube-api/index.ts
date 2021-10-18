import Cache from '@contexts/shared/services/cache';
import axios from 'axios';

const YOUTUBE_BASE_URL = 'https://youtube.googleapis.com/youtube/v3';
const CHANNEL_ID = 'UCQmw7Ty7UN8i7_dan_uKNfQ';
const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export type TopVideo = {
  id: string;
  title: string;
  publishedAt: string;
  viewCount: string;
};

const YoutubeApi = {
  getTopVideos: async (limit: number) => {
    try {
      if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'development') {
        console.log('topVideos: return from cache');
        return await Cache.read('topVideos');
      }

      const { data: topVideos } = await axios.get<any>(
        `${YOUTUBE_BASE_URL}/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=${limit}&order=viewCount&key=${API_KEY}`
      );
      const videosIds = topVideos.items.map((topVideo) => topVideo.id.videoId);

      const { data: topVideosStatistics } = await axios.get<any>(
        `${YOUTUBE_BASE_URL}/videos?part=statistics&id=${videosIds.join(
          '&id='
        )}&key=${API_KEY}`
      );
      const mappedTopVideos = topVideos.items.map(({ id, snippet }) => ({
        id: id.videoId,
        title: snippet.title,
        publishedAt: snippet.publishedAt,
        viewCount: topVideosStatistics.items.find((x) => x.id === id.videoId)
          .statistics.viewCount,
      })) as TopVideo[];

      Cache.save({
        name: 'topVideos',
        data: mappedTopVideos,
      });

      return mappedTopVideos;
    } catch (e) {
      console.log(e.message);

      return Cache.read('topVideos');
    }
  },
};

export default YoutubeApi;
