import React, { useContext } from 'react';
import Container from '@sagebox/components/container/container';
import Text from '@sagebox/components/text/text';
import LanguageContext from '@contexts/shared/contexts/language-context';
import Card from '@sagebox/components/card';

function WhatIDo() {
  const {
    metadata: { whatIDo },
  } = useContext(LanguageContext);

  return (
    <Container as="section" sub>
      <Text heading as="h2" className="text-white text-2xl">
        {whatIDo.title}
      </Text>
      <Text as="p" className="text-gray-300 mt-1">
        {whatIDo.description}
      </Text>

      <div className="grid sm:grid-cols-3 gap-3 sm:gap-6 mt-3">
        {whatIDo.actuations.map(({ title, description }) => (
          <Card key={title} title={title} hoverable>
            <Text as="p" className="text-sm text-center text-gray-300">
              {description}
            </Text>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default WhatIDo;
