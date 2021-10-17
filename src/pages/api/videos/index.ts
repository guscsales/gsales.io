import YoutubeApi from '@contexts/home/services/youtube-api';

export default async function handler(req, res) {
  const latestVideos = await YoutubeApi.getTopVideos(3);

  res.status(200).json(latestVideos);
}
