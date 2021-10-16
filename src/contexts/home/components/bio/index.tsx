import React from 'react';
import Image from 'next/image';
import Container from '@sagebox/components/container/container';
import Text from '@sagebox/components/text/text';

function Bio() {
  return (
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
  );
}

export default Bio;
