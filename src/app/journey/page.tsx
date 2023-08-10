import Text from '@/libs/ui/components/text';
import Image from 'next/image';
import { RiEarthFill } from 'react-icons/ri';
import gusBaby from '@/assets/images/me-one-year-old.png';
import gusToday from '@/assets/images/me-today.png';
import { headers } from 'next/headers';
import DeviceService from '@/common/services/device-service';
import Card from '@/libs/ui/components/card';

export default function JourneyPage() {
  const headersList = headers();
  const device = DeviceService.getDeviceDetails(
    headersList.get('user-agent') as string
  );

  return (
    <article className="container mt-5">
      <header className="flex flex-col gap-2.5 mb-2">
        <Text className="flex gap-1 items-center uppercase text-sm text-zinc-600 dark:text-zinc-300">
          <RiEarthFill size={16} className="-mt-1" />
          Planet Journey
        </Text>
        <Text className="text-4xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 dark:from-emerald-200 to-purple-500 dark:to-purple-500">
            Be Relentless. Collect Feedback. Do Again.
          </span>
        </Text>
      </header>

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
          What give me gas to continue every day it&apos;s the purpose of
          <Text highlight>improving people&apos;s lives</Text> through what I
          write in the IDEs, whether in personal projects or within companies,
          the goal is always the same:{' '}
          <Text highlight>
            to leave a legacy and make a difference in someone&apos;s life.
          </Text>
        </Text>

        <Text as="p" className="mb-3" type="paragraph">
          My journey started in 2009, when I had my first contact with coding,
          I&apos;m <Text highlight>14 years on the road</Text> and here I want
          to share my journey in a little more detail, i.e.:{' '}
          <Text highlight>
            the companies I went through, where I studied and the awards I
            owned.
          </Text>
        </Text>

        <Text as="p" type="paragraph" highlight>
          Fasten your seatbelt! 🚀
        </Text>
      </section>
    </article>
  );
}
