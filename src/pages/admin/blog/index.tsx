import React from 'react';
import Head from 'next/head';
import Container from '@sagebox/components/container/container';
import Text from '@sagebox/components/text/text';
import Button from '@sagebox/components/button';

export default function Blog() {
  return (
    <>
      <Head>
        <title>All posts - Blog - Gus CMS</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Container className="mt-12">
        <div className="flex justify-between">
          <Text heading className="text-white text-3xl">
            All posts
          </Text>
          <Button className="w-36">New post</Button>
        </div>
      </Container>
    </>
  );
}
