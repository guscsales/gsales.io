import React from 'react';
import Head from 'next/head';
import Container from '@sagebox/components/container/container';
import ButtonLink from '@sagebox/components/button-link/button-link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gus! | gsales.io</title>
      </Head>
      <Container className=" py-4 flex justify-between items-center">
        <div className="font-code text-xs text-green-200">
          {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
          {`// doing what you love is just fun; _`}
        </div>
        <div className="grid grid-cols-2 gap-1">
          <ButtonLink href="/en">EN</ButtonLink>
          <ButtonLink href="/pt">PT</ButtonLink>
        </div>
      </Container>
      <div className="w-full h-px bg-gray-800 mb-6" />
    </>
  );
}
