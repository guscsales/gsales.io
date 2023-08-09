import React from 'react';
import Text from '@/libs/ui/components/text';
import Ticket from '@/domains/homepage/components/ticket';
import UserService from '@/domains/users/services/user-service';
import InputName from '@/domains/homepage/components/input-name';
import Link from 'next/link';
import { headers } from 'next/headers';
import UAParser from 'ua-parser-js';

export default async function Home() {
  // Date from server
  const currentDate = new Date();
  const visitor = await UserService.getUserFromSession();
  const headersList = headers();
  const userAgent = new UAParser(headersList.get('user-agent') as string);
  const device = {
    isMobile: userAgent.getDevice().type?.toLocaleLowerCase() === 'mobile',
    isMac: userAgent.getOS().name?.toLocaleLowerCase() === 'mac os',
  };

  return (
    <section className="container mt-5 lg:mt-20 grid lg:grid-cols-[1fr_24.75rem] gap-11">
      <div className="flex flex-col justify-center">
        <Text className="font-bold text-2xl text-emerald-500 dark:text-emerald-200 mb-1">
          Welcome to &quot;Gus&quot; rocket
        </Text>
        <Text className="font-bold text-4xl text-zinc-900 dark:text-zinc-50 mb-5">
          I&apos;m a software engineer who loves to make a difference in
          people&apos;s lives using{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500">
            JavaScript
          </span>{' '}
          while listening to music.
        </Text>
        <Text className="font-bold text-2xl text-zinc-900 dark:text-zinc-50 mb-3">
          For your ticket: what&apos;s your name?
        </Text>
        <InputName visitor={visitor} />
        <Text className="font-bold text-zinc-900 dark:text-zinc-50 mt-8">
          This is a work in progress. You can still check my website{' '}
          <Link
            href="https://old.gsales.io"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-300"
          >
            old version
          </Link>
          .
        </Text>
      </div>

      <Ticket visitor={visitor} currentDate={currentDate} device={device} />
    </section>
  );
}
