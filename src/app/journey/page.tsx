import Text from '@/libs/ui/components/text';
import Image from 'next/image';
import { RiEarthFill } from 'react-icons/ri';
import gusBaby from '@/assets/images/me-one-year-old.png';
import gusToday from '@/assets/images/me-today.png';
import { headers } from 'next/headers';
import DeviceService from '@/common/services/device-service';
import Card from '@/libs/ui/components/card';
import { myPhilosophy } from '@/domains/common/mappers/my-philosophy';
import CarrierTimeline from '@/domains/journey/carrier-timeline';
import { educations } from '@/domains/journey/mappers/carrier';
import PageHeader from '@/common/components/page-header';

export default function JourneyPage() {
  const startedAt = 2009;
  const currentDate = new Date();
  const headersList = headers();
  const device = DeviceService.getDeviceDetails(
    headersList.get('user-agent') as string
  );

  return (
    <article className="container mt-5">
      <PageHeader
        planet="Journey"
        title="Be Relentless. Collect Feedback. Do Again."
        className="mb-2"
      />

      <section>
        <div className="float-left mr-3 mb-3 lg:mr-4 lg:mb-4 relative w-40 h-40 lg:w-60 lg:h-60">
          <Image
            src={gusToday}
            alt="Gus today"
            className={`w-40 h-40 lg:w-60 lg:h-60 rounded shadow-lg absolute -top-px  left-0 
                opacity-0 transition-base hover:opacity-100 z-10`}
          />
          <Image
            src={gusBaby}
            alt="Gus when had 1 year old"
            className="w-40 h-40 lg:w-60 lg:h-60 rounded shadow-lg absolute top-0 left-0 z-0"
          />
        </div>

        <Text as="p" className="mb-3" type="paragraph">
          Now officially, <Text highlight>I want to welcome you</Text>, my name
          is <Text highlight>Gustavo Campos Sales (a.k.a: Gus)</Text>, the
          captain of this rocket and the person in the photo on the right. Being
          honest, I&apos;m currently looks less like the Gus aside, because of
          course, this photo was taken a few years ago 🤣.
        </Text>

        <Text as="p" className="mb-3" type="paragraph">
          A hint:{' '}
          <Text highlight>
            {device.isMobile ? 'tap' : 'click'} on the photo
          </Text>{' '}
          and then you will be able to see me in an almost current version.{' '}
          <Text highlight>So, did you notice the similarity?</Text> 😁
        </Text>

        <Text as="p" className="mb-3" type="paragraph">
          Traveling through my <Text highlight>universe (website)</Text> you
          will find different <Text highlight>planets (pages)</Text>, this one
          is the <Text highlight>&quot;Journey&quot;</Text>, where you will know
          a little more about my career and trajectory.{' '}
          <Text highlight>Are you ready?</Text>
        </Text>

        <Card
          border="blue-green-to-zero"
          wrapperClassName="lg:w-8/12 lg:mx-auto my-4"
          className="p-4"
        >
          <Text as="p" className="font-bold text-2xl text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 dark:from-emerald-200 to-blue-700 dark:to-blue-400">
              I&apos;m a senior software engineer, focused on frontend and
              passionate about backend, lover of coding anything that appears to
              me as a challenge.
            </span>
          </Text>
        </Card>

        <Text as="p" className="mb-3" type="paragraph">
          Beyond a software engineer, I&apos;m a{' '}
          <Text highlight>husband of a gorgeous wife</Text> and a{' '}
          <Text highlight>father of an amazing baby boy</Text> (who honestly
          looks a lot like me ♥️), I love to{' '}
          <Text highlight>listen to music every day</Text> and{' '}
          <Text highlight>cook a delicious BBQ</Text>.
        </Text>

        <Text as="p" className="mb-3" type="paragraph">
          I believe coding is{' '}
          <Text highlight>more than just write lines and complex words.</Text>{' '}
          What give me gas to continue every day it&apos;s the purpose of{' '}
          <Text highlight>improving people&apos;s lives</Text> through what I
          write in the IDEs, whether in personal projects or within companies,
          the goal is always the same:{' '}
          <Text highlight>
            to leave a legacy and make a difference in someone&apos;s life.
          </Text>{' '}
          However, those people are not limited to final clients only. All
          people that already worked with me{' '}
          <Text highlight>taught me something</Text> and also{' '}
          <Text highlight>taught them</Text>, keeping always my main principles,
          that are:{' '}
          <Text highlight>
            {myPhilosophy.join(', ').replace('!', '').toLowerCase()}
          </Text>
          .
        </Text>

        <Text as="p" className="mb-3" type="paragraph">
          I&apos;m{' '}
          <Text highlight>
            {currentDate.getFullYear() - startedAt} years on the road
          </Text>{' '}
          and here I want to share my journey in a little more detail, i.e.:{' '}
          <Text highlight>
            the companies I went through, where I studied and the awards I
            owned.
          </Text>
        </Text>

        <Text as="p" type="paragraph" highlight>
          Fasten your seatbelt! 🚀
        </Text>
      </section>

      <section className="mt-8">
        <Text
          as="h2"
          className="text-2xl mb-2 font-bold text-zinc-900 dark:text-zinc-50"
        >
          Carrier
        </Text>

        <Text as="p" className="mb-6">
          If you already watched <Text highlight>Interstellar</Text>, for sure
          you know about the <Text highlight>Miller Planet</Text>. My journey
          it&apos;s kind closer to this <Text highlight>since {startedAt}</Text>
          , when I had my first interaction with coding, until today, and for
          sure to the future. Well, one thing about me: I like sorting stuff, so
          my timeline will be described from present to past.
        </Text>

        <CarrierTimeline />
      </section>

      <section className="mt-8 lg:mt-10">
        <Text
          as="h2"
          className="text-2xl mb-2 font-bold text-zinc-900 dark:text-zinc-50"
        >
          Education
        </Text>

        <div className="grid gap-3">
          {educations.map((education) => (
            <div key={education.title} className="flex flex-col gap-1 z-20">
              <Text
                as="h3"
                className="text-xl font-medium text-zinc-900 dark:text-zinc-50"
              >
                {education.title}
              </Text>
              <div className="flex gap-1.5 items-center">
                <Text className="font-light text-zinc-800 dark:text-zinc-300">
                  {education.institution}
                </Text>

                <div className="w-1 h-1  -mt-1 rounded-full bg-zinc-900/[.12] dark:bg-zinc-50/[.12]" />
                <Text className="font-light">{education.degree}</Text>
                <div className="w-1 h-1  -mt-1 rounded-full bg-zinc-900/[.12] dark:bg-zinc-50/[.12]" />
                <Text className="font-light">{education.startYear}</Text>
                <div className="w-1 h-1 -mt-1 rounded-full bg-zinc-900/[.12] dark:bg-zinc-50/[.12]" />
                <Text className="font-light">{education.endYear}</Text>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
