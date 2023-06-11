import React, { useContext } from 'react';
import Container from '@sagebox/components/container/container';
import Text from '@sagebox/components/text/text';
import LanguageContext from '@contexts/shared/contexts/language-context';
import Bullet from '@contexts/shared/components/bullet';

function ProfessionalRoad() {
  const {
    metadata: { professionalRoad },
  } = useContext(LanguageContext);

  return (
    <Container as="article" sub>
      <Text heading as="h2" className="text-white text-2xl">
        {professionalRoad.title}
      </Text>
      <Text as="p" className="text-gray-300 mt-1 mb-3">
        {professionalRoad.description}
      </Text>

      <picture className="flex rounded-lg border border-solid border-gray-600 overflow-hidden">
        <img
          src="/images/street-photo-sm.webp"
          alt={professionalRoad.mosaicAltText}
          className="hidden sm:block"
        />
        <img
          src="/images/street-photo-xs.webp"
          alt={professionalRoad.mosaicAltText}
          className="block sm:hidden"
        />
      </picture>

      <ul className="gap-3 flex flex-wrap text-sm mt-2 sm:grid-cols-8 text-gray-700 justify-center cursor-default">
        <li className="text-center relative">
          Radiant Security
          <Bullet />
        </li>
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
