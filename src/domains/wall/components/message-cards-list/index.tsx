'use client';

import React, { useTransition } from 'react';
import Text from '@/libs/ui/components/text';
import MessageCardsMasonry from '../message-cards-masonry';
import MessageCard from '@/domains/wall/components/message-card';
import { Message } from '@/domains/messages/services/messages-service';
import { postMessageOnWall } from '@/domains/wall/actions/post-message-on-wall';
import { SessionContext } from '@/domains/common/providers/session-provider';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import '@firebase/init';
import { clientAPI } from '@/common/services/api';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { RiInformationLine } from 'react-icons/ri';
import useSWR from 'swr';

type Props = {
  messages: Message[];
};

type FormData = {
  content: string;
};

export default function MessageCardsList({ messages }: Props) {
  const [[latestMessage, ...optimisticMessages], setOptimisticMessages] =
    React.useState(messages);
  const [isPending, startTransition] = useTransition();
  const { visitor } = React.useContext(SessionContext);
  const form = useForm<FormData>();
  const { data: user } = useSWR(`/users/${visitor?.id}`, {
    revalidateOnFocus: false,
  });

  const onSubmit = form.handleSubmit(async ({ content }: FormData) => {
    let userId = visitor?.id;

    const { data: user } = await clientAPI.get(`/users/${userId}`);

    let name = user?.name;
    let email = user?.email;

    // No name, get from Google
    if (!name) {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();

      try {
        const { user } = await signInWithPopup(auth, provider);

        name = user.displayName;
        email = user.email;
      } catch (e: any) {
        console.log(e.message);
        return null;
      }
    }

    startTransition(async () => {
      const message = await postMessageOnWall({ content, name, email });

      setOptimisticMessages(
        (prevValue) => [message, ...prevValue] as Message[]
      );

      form.reset();
    });
  });

  return (
    <>
      <section className="container mb-7">
        <form
          onSubmit={onSubmit}
          className={classNames(
            `w-full lg:w-[36.5rem] lg:mx-auto 
            grid grid-cols-[1fr_6rem] gap-3 py-1.5 pl-3 pr-1.5 rounded-lg 
            border borders-solid border-zinc-900/[.12] dark:border-zinc-50/[.12]
            focus-within:border-zinc-900/[.5] focus-within:dark:border-zinc-50/[.5]
            transition-base`,
            {
              'pointer-events-none': isPending,
            }
          )}
        >
          <input
            type="text"
            placeholder="Type your message..."
            className={`font-sans font-light text-lg
            text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 
            bg-transparent outline-none`}
            {...form.register('content', { required: true })}
          />
          <button
            type="submit"
            className={classNames(
              `font-sans font-bold px-2.5 h-10 
            bg-zinc-600 text-zinc-50 dark:bg-zinc-300 dark:text-zinc-900
            hover:dark:bg-zinc-50 hover:dark:text-zinc-900
            transition-base rounded`,
              {
                'pointer-events-none opacity-60': !form.formState.isValid,
              }
            )}
          >
            {isPending ? 'Posting...' : 'Post it!'}
          </button>
        </form>
        {!user?.name && (
          <Text
            as="div"
            className="flex gap-0.5 items-center w-full lg:w-[36.5rem] lg:mx-auto mt-1 font-light text-sm"
          >
            <RiInformationLine size={16} className="-mt-1" />
            Will be needed to log in with your Google account to show your name.
          </Text>
        )}
      </section>

      <section className="container">
        <Text
          as="h2"
          className="text-zinc-900 dark:text-zinc-50 font-bold text-2xl mb-2"
        >
          Latest comment
        </Text>

        {latestMessage && <MessageCard message={latestMessage} latest />}
      </section>

      <section className="px-3 lg:px-4">
        <div className="container">
          <Text
            as="h2"
            className="text-zinc-900 dark:text-zinc-50 font-bold text-xl mb-2 mt-3"
          >
            and more...
          </Text>
        </div>

        <MessageCardsMasonry>
          {optimisticMessages.map((message) => (
            <MessageCard key={message.id} message={message} />
          ))}
        </MessageCardsMasonry>
      </section>
    </>
  );
}
