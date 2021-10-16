const YOUTUBE_BASE_URL = 'https://youtube.googleapis.com/youtube/v3';
const CHANNEL_ID = 'UCQmw7Ty7UN8i7_dan_uKNfQ';

export type TopVideo = {
  id: string;
  title: string;
  publishedAt: string;
  viewCount: string;
};

const YoutubeApi = {
  getTopVideos: async (limit: number) => {
    const topVideosResponse = await fetch(
      `${YOUTUBE_BASE_URL}/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=${limit}&order=viewCount&key=${API_KEY}`
    );
    const { items: topVideos } = await topVideosResponse.json();
    const videosIds = topVideos.map((topVideo) => topVideo.id.videoId);

    const topVideosStatisticsResponse = await fetch(
      `${YOUTUBE_BASE_URL}/videos?part=statistics&id=${videosIds.join(
        '&id='
      )}&key=${process.env.YOUTUBE_API_KEY}`
    );
    const { items: topVideosStatistics } =
      await topVideosStatisticsResponse.json();

    return topVideos.map(({ id, snippet }) => ({
      id: id.videoId,
      title: snippet.title,
      publishedAt: snippet.publishedAt,
      viewCount: topVideosStatistics.find((x) => x.id === id.videoId).statistics
        .viewCount,
    })) as TopVideo[];
  },
};

export default YoutubeApi;
