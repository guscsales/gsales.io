import React, { useContext } from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
import * as i18n from 'date-fns/locale';
import Container from '@sagebox/components/container/container';
import Text from '@sagebox/components/text/text';
import LanguageContext from '@contexts/shared/contexts/language-context';
import Card from '@sagebox/components/card';
import { Tweet } from '@contexts/home/services/twitter-api';
import Bullet from '@contexts/shared/components/bullet';

type Props = {
  latestTweet: Tweet;
};

function LatestTweet({ latestTweet }: Props) {
  const { metadata, locale } = useContext(LanguageContext);
  const tweetDate = new Date(latestTweet.createdAt);

  return (
    <Container as="section" sub>
      <Text heading as="h2" className="text-white text-2xl">
        {metadata.latestTweet.title}
      </Text>

      <Card>
        <header className="flex justify-between mb-4">
          <div className="grid grid-flow-col items-center">
            <div className="w-10 h-10 relative">
              <Image
                src="/images/me.png"
                alt={metadata.profilePictureAltText}
                layout="fill"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col ml-2">
              <Text as="h3" heading className="flex text-white text-sm">
                {metadata.name}
              </Text>
              <a
                href={`https://twitter.com/${metadata.twitter.replace(
                  '@',
                  ''
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex no-underline -mt-px"
              >
                <Text className="text-blue-300 hover:text-blue-500 text-xs transition-colors ease-in-out">
                  {metadata.twitter}
                </Text>
              </a>
            </div>
          </div>
          <Text className="flex items-center h-5 text-sm text-gray-500">
            {format(tweetDate, metadata.hourFormat, { locale: i18n[locale] })}
            <Bullet float={false} className="mx-1" />{' '}
            {format(tweetDate, metadata.dateFormat, { locale: i18n[locale] })}
          </Text>
        </header>

        <section className="relative grid grid-flow-col justify-between">
          <Text
            heading
            className="text-gray-600 cursor-default select-none text-6xl"
          >
            &rdquo;
          </Text>
          <Text
            heading
            as="span"
            className="text-white text-xl sm:text-2xl px-5 sm:px-6"
          >
            {React.createElement('span', {
              dangerouslySetInnerHTML: { __html: latestTweet.text },
            })}
          </Text>
          <Text
            heading
            className="text-gray-600 cursor-default select-none text-6xl flex items-end"
            style={{ lineHeight: 0 }}
          >
            &rdquo;
          </Text>
        </section>
      </Card>
    </Container>
  );
}

export default LatestTweet;
