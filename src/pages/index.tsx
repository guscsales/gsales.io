import React, { useContext } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Bio from '@contexts/home/components/bio';
import WhatIDo from '@contexts/home/components/what-i-do';
import ProfessionalRoad from '@contexts/home/components/professional-road';
import YoutubeApi, { TopVideo } from '@contexts/home/services/youtube-api';
import TopVideos from '@contexts/home/components/top-videos';
import TwitterApi, { Tweet } from '@contexts/home/services/twitter-api';
import LatestTweet from '@contexts/home/components/latest-tweet';
import LanguageContext from '@contexts/shared/contexts/language-context';

type Props = {
  topVideos: TopVideo[];
  latestTweet: Tweet;
};

export default function Home({ topVideos, latestTweet }: Props) {
  const { metadata } = useContext(LanguageContext);

  return (
    <>
      <Head>
        <title>{metadata.metaTags.home.title}</title>
        {/* Primary Meta Tags */}
        <meta name="title" content={metadata.metaTags.home.title} />
        <meta name="description" content={metadata.metaTags.home.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gsales.io/" />
        <meta property="og:title" content={metadata.metaTags.home.title} />
        <meta
          property="og:description"
          content={metadata.metaTags.home.description}
        />
        <meta property="og:image" content="https://gsales.io/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gsales.io/" />
        <meta property="twitter:title" content={metadata.metaTags.home.title} />
        <meta
          property="twitter:description"
          content={metadata.metaTags.home.description}
        />
        <meta
          property="twitter:image"
          content="https://gsales.io/og-image.png"
        />
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
    revalidate: 60,
  };
};
