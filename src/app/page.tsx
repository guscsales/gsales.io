import Text from '@/libs/ui/components/text';
import ticketDark from '@/assets/images/ticket-dark.png';
import { RiCommandFill, RiCommandLine, RiRocket2Fill } from 'react-icons/ri';

export default function Home() {
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
                      border-b border-transparent
                      focus-visible:outline-none focus-visible:border-b 
                      focus-visible:border-solid focus-visible:border-zinc-900/[.06] 
                      focus-visible:dark:border-zinc-50/[.06]`}
          placeholder="It's focused, you can type..."
          autoFocus
          maxLength={100}
        />
      </div>

      <div
        className="w-[19.75rem] h-[33.5rem] mx-auto bg-contain bg-center bg-no-repeat text-center"
        style={{ backgroundImage: `url('${ticketDark.src}')` }}
      >
        <div className="flex flex-col gap-1 mt-16">
          <Text className="font-light text-zinc-400">Good Morning</Text>
          <Text className="font-bold text-3xl text-zinc-300">Last call!</Text>
        </div>

        <div className="flex justify-center w-full h-[5.625rem] mt-9">
          <RiRocket2Fill size={90} className="fill-zinc-50" />
        </div>

        <div className="flex flex-col gap-1 mt-14">
          <Text className="font-light text-zinc-400">Ready to go?</Text>
          <div className="flex gap-0.5 justify-center items-center">
            <Text className="font-light text-zinc-400">Press</Text>
            <div className="flex items-center py-0.5 px-1 rounded bg-zinc-50/[.06]">
              <RiCommandLine size={16} className="fill-zinc-300 -mt-1" />
              <Text className="text-zinc-300">+ K</Text>
            </div>
            <Text className="font-light text-zinc-400">
              to start the travel
            </Text>
          </div>
        </div>

        <div className="flex flex-col mt-10">
          <Text className="font-light text-zinc-400">Guest Number</Text>
          <Text className="font-light text-4xl text-zinc-50">
            #<Text className="font-blast text-4xl text-zinc-50">000001</Text>
          </Text>
        </div>
      </div>
    </section>
  );
}
