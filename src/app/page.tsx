import React from 'react';
import Text from '@/libs/ui/components/text';
import Ticket from '@/domains/homepage/components/ticket';
import UserService from '@/domains/users/services/user-service';

export default async function Home() {
  // Date from server
  const currentDate = new Date();
  const visitor = await UserService.getUserFromSession();

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
        <Text className="font-bold text-2xl text-zinc-900 dark:text-zinc-50 mb-1">
          For your ticket: what&apos;s your name?
        </Text>
        <input
          type="text"
          className={`font-bold font-sans bg-transparent text-2xl text-zinc-700 dark:text-zinc-200 
                      pb-3 border-b border-transparent
                      focus-visible:outline-none focus-visible:border-b 
                      focus-visible:border-solid focus-visible:border-zinc-900/[.06] 
                      focus-visible:dark:border-zinc-50/[.06]`}
          placeholder="It's focused, you can type..."
          autoFocus
          maxLength={100}
        />
      </div>

      <Ticket visitor={visitor} currentDate={currentDate} />
    </section>
  );
}
