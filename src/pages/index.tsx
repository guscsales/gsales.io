import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Bio from '@contexts/home/components/bio';
import WhatIDo from '@contexts/home/components/what-i-do';
import ProfessionalRoad from '@contexts/home/components/professional-road';
import YoutubeApi, { TopVideo } from '@contexts/home/services/youtube-api';
import TopVideos from '@contexts/home/components/top-videos';
import TwitterApi, { Tweet } from '@contexts/home/services/twitter-api';
import LatestTweet from '@contexts/home/components/latest-tweet';

type Props = {
  topVideos: TopVideo[];
  latestTweet: Tweet;
};

export default function Home({ topVideos, latestTweet }: Props) {
  return (
    <>
      <Head>
        <title>Gus! | gsales.io</title>
      </Head>

      <div className="sm:mt-16 mb-16">
        <Bio />
      </div>
      <div className="mb-20">
        <WhatIDo />
      </div>
      <div className="mb-20">
        <ProfessionalRoad />
      </div>
      <div className="mb-20">
        <TopVideos topVideos={topVideos} />
      </div>
      <div className="mb-20">
        <LatestTweet latestTweet={latestTweet} />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const [topVideos, latestTweet] = await Promise.all([
    YoutubeApi.getTopVideos(3),
    TwitterApi.getLatestTweet(),
  ]);

  return {
    props: { topVideos, latestTweet },
    revalidate: 300,
  };
};
