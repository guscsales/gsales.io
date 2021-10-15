import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Container from '@sagebox/components/container/container';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gus! | gsales.io</title>
      </Head>
      <Container>
        <section className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:mt-16">
          <div className="sm:w-28 sm:h-28 w-20 h-20 relative">
            <Image
              src="/images/me.png"
              alt="A picture photo of Gustavo"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <div className="sm:w-112 mt-2 sm:mt-0 sm:ml-3 text-center sm:text-left">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white">
              Gustavo Sales
            </h2>
            <span className="text-base sm:text-lg text-white">
              Frontend Engineer @{' '}
              <strong className="font-semibold">Boulevard</strong>
            </span>
            <div className="text-white mt-3 text-sm sm:text-base">
              <p className="mb-3">
                Coding awesome things since 2012, with many attention of
                details, feeling owner and giving and receiving feedback.
              </p>
              <strong className="font-semibold">
                You can call me <span className="underline">Gus</span>. 😁
              </strong>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
