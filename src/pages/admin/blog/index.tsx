import React from 'react';
import Head from 'next/head';
import Container from '@sagebox/components/container/container';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Gus CMS</title>
      </Head>
      <Container className="mt-10">
        <span className="text-white">blog index</span>
      </Container>
    </>
  );
}
