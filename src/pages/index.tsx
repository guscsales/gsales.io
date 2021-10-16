import React from 'react';
import Head from 'next/head';
import Bio from '@contexts/home/components/bio';
import WhatIDo from '@contexts/home/components/what-i-do';
import ProfessionalRoad from '@contexts/home/components/professional-road';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gus! | gsales.io</title>
      </Head>

      <Bio />
      <WhatIDo />
      <ProfessionalRoad />
    </>
  );
}
