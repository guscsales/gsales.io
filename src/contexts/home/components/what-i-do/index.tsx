import React from 'react';
import Container from '@sagebox/components/container/container';
import Text from '@sagebox/components/text/text';

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
  return (
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
          I build the chain that generates the experience between the visual and
          non-visual.
        </JobCard>
        <JobCard title="Content">
          Periodically I upload my experience and knowledge in video or text
          format.
        </JobCard>
      </div>
    </Container>
  );
}

export default WhatIDo;
