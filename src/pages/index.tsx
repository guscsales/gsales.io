import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Container from '@sagebox/components/container/container';
import Text from '@sagebox/components/text/text';

type JobCardProps = {
  title: string;
  children: string;
};

function JobCard({ title, children }: JobCardProps) {
  return (
    <div className="rounded-lg border border-solid border-gray-600 p-4 transition-all ease-in-out transform hover:scale-105 cursor-default">
      <Text heading as="h3" className="text-white text-center mb-2">
        {title}
      </Text>
      <Text as="p" className="text-sm text-center text-gray-300">
        {children}
      </Text>
    </div>
  );
}

// eslint-disable-next-line react/require-default-props
function Bullet({ className }: { className?: string }) {
  return (
    <span
      className={`w-1 h-1 bg-gray-700 rounded-full absolute ${className}`}
      style={{ right: '-8px', top: 'calc(50% - 1px)' }}
    />
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Gus! | gsales.io</title>
      </Head>
      <Container
        as="section"
        className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:mt-16 mb-16"
        sub
      >
        <div className="sm:w-28 sm:h-28 w-20 h-20 relative">
          <Image
            src="/images/me.png"
            alt="A picture of Gustavo"
            layout="fill"
            className="rounded-full"
          />
        </div>
        <div className="sm:w-112 mt-2 sm:mt-0 sm:ml-3 text-center sm:text-left">
          <Text as="h1" heading className="text-white text-4xl">
            Gustavo Sales
          </Text>
          <Text className="text-white text-lg">
            Frontend Engineer @ <Text className="font-semibold">Boulevard</Text>
          </Text>
          <div className="mt-3">
            <Text as="p" className="mb-3 text-gray-300">
              Coding awesome things since 2012, with many attention of details,
              feeling owner and giving and receiving feedback.
            </Text>
            <Text as="p" className="font-semibold text-gray-300">
              You can call me <span className="underline">Gus</span>. 😁
            </Text>
          </div>
        </div>
      </Container>

      <Container as="section" className="mb-20" sub>
        <Text heading as="h2" className="text-white text-2xl">
          What I do
        </Text>
        <Text as="p" className="text-gray-300 mt-1">
          I have already worked with a lot of people, participating of many
          different projects and products, currently is not different, I&apos;m
          continue looking by challenges.
        </Text>

        <div className="grid sm:grid-cols-3 gap-3 sm:gap-6 mt-3">
          <JobCard title="Frontend">
            I generate experience beyond the creation of apps, websites and
            systems.
          </JobCard>
          <JobCard title="Backend">
            I build the chain that generates the experience between the visual
            and non-visual.
          </JobCard>
          <JobCard title="Content">
            Periodically I upload my experience and knowledge in video or text
            format.
          </JobCard>
        </div>
      </Container>

      <Container as="section" sub>
        <Text heading as="h2" className="text-white text-2xl">
          10 years on the street
        </Text>
        <Text as="p" className="text-gray-300 mt-1 mb-3">
          Each company that I&apos;ve been passed and each person that I&apos;ve
          worked together has a special part in my history as a professional.
          I&apos;m really proud to have had a chance to be part of the journey
          of each one.
        </Text>

        <div className="rounded-lg border border-solid border-gray-600 overflow-hidden">
          <img
            src="/images/street-photo-sm.png"
            alt="A mosaic of photos during the Gus professional timeline"
            className="hidden sm:block"
          />
          <img
            src="/images/street-photo-xs.png"
            alt="A mosaic of photos during the Gus professional timeline"
            className="block sm:hidden"
          />
        </div>

        <ul className="gap-3 flex flex-wrap text-sm mt-2 sm:grid-cols-8 text-gray-700 justify-center cursor-default">
          <li className="text-center relative">
            Boulevard
            <Bullet />
          </li>
          <li className="text-center relative">
            Origin
            <Bullet />
          </li>
          <li className="text-center relative">
            Itaú
            <Bullet />
          </li>
          <li className="text-center relative">
            PagSeguro
            <Bullet />
          </li>
          <li className="text-center relative">
            Netbiis
            <Bullet className="hidden sm:block" />
          </li>
          <li className="text-center relative">
            RMC Brothers
            <Bullet />
          </li>
          <li className="text-center relative">
            Plaay
            <Bullet />
          </li>
          <li className="text-center">Foster</li>
        </ul>
      </Container>
    </>
  );
}
