import React, { useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import LanguageContext from '@contexts/shared/contexts/language-context';
import Container from '@sagebox/components/container/container';
import Text from '@sagebox/components/text/text';
import ButtonLink from '@sagebox/components/button-link/button-link';
import Bullet from '@contexts/shared/components/bullet';

type JourneyInfoProps = {
  startDate: string;
  endDate?: string;
  title: string;
  position?: string;
  children?: React.ReactNode;
};

function JourneyInfo({
  startDate,
  endDate,
  position,
  title,
  children,
}: JourneyInfoProps) {
  return (
    <div className="grid sm:grid-cols-jouney-info">
      <div className="mr-10">
        <Text
          as="div"
          className="text-gray-300 font-semibold flex items-center text-sm mt-1 mb-1"
        >
          {startDate}
          {endDate && (
            <>
              <Bullet
                float={false}
                className="mx-1 mt-px"
                backgroundColor="bg-gray-300"
              />{' '}
              {endDate}
            </>
          )}
        </Text>
      </div>
      <div>
        <Text as="h4" className="text-white font-semibold text-lg">
          {title}
        </Text>
        {position && (
          <Text as="div" className="text-gray-400 italic text-sm mb-2">
            {position}
          </Text>
        )}
        {children}
      </div>
    </div>
  );
}

export default function Journey() {
  const { metadata } = useContext(LanguageContext);

  return (
    <>
      <Head>
        <title>{metadata.journey.metatags.title}</title>
        {/* Primary Meta Tags */}
        <meta name="title" content={metadata.journey.metatags.title} />
        <meta
          name="description"
          content={metadata.journey.metatags.description}
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gsales.io/journey" />
        <meta property="og:title" content={metadata.journey.metatags.title} />
        <meta
          property="og:description"
          content={metadata.journey.metatags.description}
        />
        <meta property="og:image" content="https://gsales.io/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gsales.io/journey" />
        <meta
          property="twitter:title"
          content={metadata.journey.metatags.title}
        />
        <meta
          property="twitter:description"
          content={metadata.journey.metatags.description}
        />
        <meta
          property="twitter:image"
          content="https://gsales.io/og-image.png"
        />
      </Head>

      <Container as="section" sub className="mt-10">
        <div className="grid sm:grid-flow-col">
          <div className="w-24 h-56 mx-auto relative mb-4 sm:mb-0 sm:mr-4">
            <Image
              src="/images/me-years-ago.png"
              alt=""
              layout="fill"
              className="rounded-lg shadow-xl"
            />
            <Image
              src="/images/me-now.png"
              alt=""
              layout="fill"
              className="rounded-lg shadow-xl transition-opacity ease-in-out delay-75 opacity-0 hover:opacity-100"
            />
          </div>
          <div>
            <Text heading as="h1" className="text-white text-3xl">
              {metadata.journey.title}
            </Text>
            <Text as="p" className="text-gray-300 mt-2">
              {React.createElement('span', {
                dangerouslySetInnerHTML: {
                  __html: metadata.journey.description,
                },
              })}
            </Text>
          </div>
        </div>
      </Container>

      <Container as="section" sub>
        <Text as="p" className="text-gray-300 mt-7 sm:mt-4">
          {metadata.journey.descriptionPartTwo}
        </Text>

        <Text heading as="h3" className="text-white text-xl mt-9 mb-4">
          {metadata.journey.experienceTitle}
        </Text>

        <div className="grid gap-10">
          {metadata.journey.experiences.map((xp) => (
            <JourneyInfo {...xp}>
              <Text as="p" className="text-gray-300">
                {xp.description}
              </Text>

              {xp.site && (
                <ButtonLink
                  href={`https://${xp.site}`}
                  rel="noopener noreferrer"
                  target="blank"
                  size="small"
                  className="inline-flex mt-4 text-gray-400 hover:text-white -ml-2"
                >
                  {xp.site}
                </ButtonLink>
              )}
            </JourneyInfo>
          ))}
        </div>

        <Text heading as="h3" className="text-white text-xl mt-9 mb-4">
          {metadata.journey.educationTitle}
        </Text>

        <div className="grid gap-4">
          {metadata.journey.educations.map((education) => (
            <JourneyInfo {...education} position={education.institution} />
          ))}
        </div>

        <Text heading as="h3" className="text-white text-xl mt-9 mb-4">
          {metadata.journey.awardsTitle}
        </Text>

        <div className="grid gap-7">
          {metadata.journey.awards.map((award) => (
            <JourneyInfo {...award}>
              <Text as="p" className="text-gray-300 mb-2">
                {award.description}
              </Text>

              <img
                src={`/images/${award.photo}`}
                alt=""
                className="rounded-lg shadow-xl h-36"
              />
            </JourneyInfo>
          ))}
        </div>
      </Container>
    </>
  );
}
