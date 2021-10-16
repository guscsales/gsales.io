import React from 'react';
import Container from '@sagebox/components/container/container';
import Text from '@sagebox/components/text/text';

// eslint-disable-next-line react/require-default-props
function Bullet({ className }: { className?: string }) {
  return (
    <span
      className={`w-1 h-1 bg-gray-700 rounded-full absolute ${className}`}
      style={{ right: '-8px', top: 'calc(50% - 1px)' }}
    />
  );
}

function ProfessionalRoad() {
  return (
    <Container as="section" sub>
      <Text heading as="h2" className="text-white text-2xl">
        10 years on the street
      </Text>
      <Text as="p" className="text-gray-300 mt-1 mb-3">
        Each company that I&apos;ve been passed and each person that I&apos;ve
        worked together has a special part in my history as a professional.
        I&apos;m really proud to have had a chance to be part of the journey of
        each one.
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
  );
}

export default ProfessionalRoad;
