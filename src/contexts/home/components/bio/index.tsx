import React, { useContext } from 'react';
import Image from 'next/image';
import Container from '@sagebox/components/container/container';
import Text from '@sagebox/components/text/text';
import LanguageContext from '@contexts/shared/contexts/language-context';

function Bio() {
  const { metadata } = useContext(LanguageContext);

  return (
    <Container
      as="article"
      className="flex flex-col sm:flex-row items-center sm:items-start justify-center "
      sub
    >
      <picture className="sm:w-28 sm:h-28 w-20 h-20 relative">
        <Image
          src="/images/me.webp"
          alt={metadata.profilePictureAltText}
          layout="fill"
          className="rounded-full"
        />
      </picture>
      <section className="sm:w-112 mt-2 sm:mt-0 sm:ml-3 text-center sm:text-left">
        <Text as="h1" heading className="text-white text-4xl">
          {metadata.name}
        </Text>
        <Text className="text-white text-lg">
          {metadata.role} {metadata.at}{' '}
          <Text className="font-semibold">{metadata.currentCompany}</Text>
        </Text>
        <Text as="p" className="mb-3 mt-3 text-gray-300">
          {metadata.homeBio.content}
        </Text>
        <Text as="p" className="font-semibold text-gray-300">
          {metadata.homeBio.greetings}{' '}
          <span className="underline">{metadata.nickname}</span>. 😁
        </Text>
      </section>
    </Container>
  );
}

export default Bio;
