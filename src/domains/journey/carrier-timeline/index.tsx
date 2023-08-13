'use client';

import Text from '@/libs/ui/components/text';
import classNames from 'classnames';
import Link from 'next/link';
import { Experience, experiences } from '@/domains/journey/mappers/carrier';
import React from 'react';
import { format } from 'date-fns';

type CarrierTimelineItemProps = {
  experience: Experience;
  active?: boolean;
};

function CarrierTimelineItem({
  experience,
  active,
  ...props
}: CarrierTimelineItemProps & React.HTMLAttributes<HTMLElement>) {
  return (
    <div
      {...props}
      className={classNames(
        'flex flex-grow flex-shrink-0 gap-2.5 relative group select-none py-2 px-3 lg:px-2',
        {
          'cursor-default': active,
          'cursor-pointer': !active,
        }
      )}
    >
      {/* Active/Hover state */}
      <div
        className={classNames(
          'absolute top-0 left-0 w-full h-full rounded transition-base z-10',
          {
            'bg-zinc-900/[.06] dark:bg-zinc-50/[.06] shadow-lg': active,
            'group-hover:bg-zinc-900/[.02] group-hover:dark:bg-zinc-50/[.02]':
              !active,
          }
        )}
      />

      {/* Content starts here */}
      <div
        className={classNames(
          'flex-grow-0 flex-shrink-0 basis-2.5 w-2.5 h-2.5 mt-2 rounded-full',
          {
            'bg-zinc-900 dark:bg-zinc-50': active,
            'bg-zinc-300 dark:bg-zinc-700': !active,
          }
        )}
      />
      <div className="flex flex-col gap-1 z-20">
        <Text
          as="h3"
          className="text-xl font-medium text-zinc-900 dark:text-zinc-50"
        >
          {experience.title}
        </Text>
        <div className="flex gap-1.5 items-center">
          {experience.company.websiteURL ? (
            <Link
              href={experience.company.websiteURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text className="font-light underline text-zinc-800 dark:text-zinc-300 hover:text-zinc-900 hover:dark:text-zinc-50 transition-base">
                {experience.company.name}
              </Text>
            </Link>
          ) : (
            <Text className="font-light text-zinc-800 dark:text-zinc-300">
              {experience.company.name}
            </Text>
          )}

          <div className="w-1 h-1 rounded-full bg-zinc-900/[.12] dark:bg-zinc-50/[.12]" />
          <Text className="font-light">{experience.location}</Text>
        </div>
        <div className="flex gap-1.5 items-center">
          <Text className="font-light">
            {format(experience.startDate, 'LLL yyyy')}
          </Text>
          <div className="w-1 h-1 -mt-1 rounded-full bg-zinc-900/[.12] dark:bg-zinc-50/[.12]" />
          <Text className="font-light">
            {format(experience.endDate, 'LLL yyyy')}
          </Text>
        </div>
      </div>
    </div>
  );
}

export default function CarrierTimeline() {
  const [currentExperienceIndex, setCurrentExperienceIndex] = React.useState(0);

  return (
    <>
      <div className="grid lg:grid-cols-[19rem_1fr] gap-5 lg:gap-10">
        <div className="flex flex-nowrap lg:flex-col gap-2 lg:gap-5 lg:max-h-[356px] pb-2 lg:pr-2 scroll overflow-x-auto lg:overflow-y-auto lg:overflow-x-hidden">
          {experiences.map((experience, index) => (
            <CarrierTimelineItem
              key={experience.title}
              active={index === currentExperienceIndex}
              experience={experience}
              onClick={() => {
                setCurrentExperienceIndex(index);
              }}
            />
          ))}
        </div>
        <div>
          <div className="py-2 px-4 border-l-2 border-solid border-emerald-700 dark:border-emerald-200">
            <Text
              as="h4"
              className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-1"
            >
              More details
            </Text>
            <Text as="p">{experiences[currentExperienceIndex].details}</Text>

            <Text
              as="h4"
              className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-1 mt-5"
            >
              Main skills
            </Text>
            <Text as="p">
              {experiences[currentExperienceIndex].skills.join(', ')}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
