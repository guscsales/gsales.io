import Cache from '@contexts/shared/services/cache';

const TWITTER_BASE_URL = 'https://api.twitter.com/2';
const ACCOUNT = 'guscsales';

export type Tweet = {
  text: string;
  createdAt: string;
};

const TwitterApi = {
  getLatestTweet: async (): Promise<Tweet> => {
    try {
      if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'development') {
        console.log('latestTweet: return from cache');
        return await Cache.read('latestTweet');
      }

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

      Cache.save({
        name: 'latestTweet',
        data: mappedLatestTweet,
      });

      return mappedLatestTweet;
    } catch (e) {
      console.log(e.message);

      return Cache.read('latestTweet');
    }
  },
};

export default TwitterApi;
