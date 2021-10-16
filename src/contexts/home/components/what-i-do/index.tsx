import React, { useContext } from 'react';
import Container from '@sagebox/components/container/container';
import Text from '@sagebox/components/text/text';
import LanguageContext from '@contexts/shared/contexts/language-context';

function JobCard({ title, children }: { title: string; children: string }) {
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
          <JobCard key={title} title={title}>
            {description}
          </JobCard>
        ))}
      </div>
    </Container>
  );
}

export default WhatIDo;
