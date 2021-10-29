import React, { useContext } from 'react';
import Head from 'next/head';
import Bio from '@contexts/home/components/bio';
import WhatIDo from '@contexts/home/components/what-i-do';
import ProfessionalRoad from '@contexts/home/components/professional-road';
import TopVideos from '@contexts/home/components/top-videos';
import LatestTweet from '@contexts/home/components/latest-tweet';
import LanguageContext from '@contexts/shared/contexts/language-context';

export default function Home() {
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

      <article>
        <section className="sm:mt-16 mb-16">
          <Bio />
        </section>
        <section className="mb-20">
          <WhatIDo />
        </section>
        <section className="mb-20">
          <ProfessionalRoad />
        </section>
        <section className="mb-20">
          <TopVideos />
        </section>
        <section className="mb-20">
          <LatestTweet />
        </section>
      </article>
    </>
  );
}
