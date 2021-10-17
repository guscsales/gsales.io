import Cache from '@contexts/shared/services/cache';

const TWITTER_BASE_URL = 'https://api.twitter.com/2';
const ACCOUNT = 'gussalesdev';

export type Tweet = {
  text: string;
  createdAt: string;
};

const TwitterApi = {
  getLatestTweet: async (): Promise<Tweet> => {
    try {
      const res = await fetch(
        `${TWITTER_BASE_URL}/tweets/search/recent?query=from:${ACCOUNT}&tweet.fields=text,created_at`,
        {
          headers: {
            authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
          },
        }
      );
      const {
        data: [latestTweet],
      } = await res.json();

      const mappedLatestTweet = {
        text: latestTweet.text,
        createdAt: latestTweet.created_at,
      };

      Cache.saveCacheAsync({ name: 'getLatestTweet', data: mappedLatestTweet });

      return mappedLatestTweet;
    } catch (e) {
      console.log(e.message);

      const latestTweet = await Cache.readCache('getLatestTweet');
      return latestTweet;
    }
  },
};

export default TwitterApi;
