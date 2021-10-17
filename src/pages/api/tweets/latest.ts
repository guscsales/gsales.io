import TwitterApi from '@contexts/home/services/twitter-api';

export default async function handler(req, res) {
  const latestTweet = await TwitterApi.getLatestTweet();

  res.status(200).json(latestTweet);
}
