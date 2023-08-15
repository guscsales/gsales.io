import PageHeader from '@/common/components/page-header';
import Text from '@/libs/ui/components/text';
import Card from '@/libs/ui/components/card';
import { RiLinkedinBoxFill, RiMessage3Line } from 'react-icons/ri';
import CircleSeparator from '@/common/components/circle-separator';
import Badge from '@/libs/ui/components/badge';
import classNames from 'classnames';
import { format } from 'date-fns';
import { Message } from '@prisma/client';
import MessagesService from '@/domains/messages/services/messages-service';
import { headers } from 'next/headers';
import DeviceService from '@/common/services/device-service';
import MessageCardContent from '@/domains/wall/components/message-card-content';
import { Suspense } from 'react';

type MessageCardProps = {
  message: Message & { User: { name: string; visitorNumber: number } };
  latest?: boolean;
  leftPosition?: boolean;
};

function MessageCard({ message, latest, leftPosition }: MessageCardProps) {
  const { createdAt, fromLinkedIn, User } = message;

  function getBorder() {
    if (latest) {
      return 'green-to-purple';
    }

    if (fromLinkedIn && leftPosition) {
      return 'zero-to-blue-green';
    }

    if (fromLinkedIn) {
      return 'blue-green-to-zero';
    }

    if (leftPosition) {
      return 'zero-to-white';
    }

    return 'white-to-zero';
  }

  return (
    <Card
      border={getBorder()}
      className={classNames('p-3', {
        'grid lg:grid-cols-[2.875rem_1fr] gap-3': latest,
      })}
    >
      {latest && (
        <div className="flex items-center justify-center w-[2.875rem] h-[2.875rem] rounded bg-zinc-900/[.06] dark:bg-zinc-50/[.06]">
          <RiMessage3Line
            size={28}
            className="fill-zinc-900 dark:fill-zinc-50"
          />
        </div>
      )}
      <div className="grid gap-1">
        <div className="flex gap-1 items-center">
          {User.visitorNumber > 0 && (
            <Badge color="red-to-pink" className="-mt-1">
              #{User.visitorNumber.toString().padStart(6, '0')}
            </Badge>
          )}
          <Text className="text-zinc-900 dark:text-zinc-50 font-medium text-lg">
            {User.name}
          </Text>

          <CircleSeparator />

          <Text className="font-light text-sm">
            {format(createdAt, 'LLL d, yyyy')}
          </Text>

          {fromLinkedIn && (
            <>
              <CircleSeparator />
              <Text className="font-light text-sm flex items-center gap-0.5">
                From <RiLinkedinBoxFill size={16} className="-mt-0.5" />
              </Text>
            </>
          )}
        </div>

        <MessageCardContent messageId={message.id} />
      </div>
    </Card>
  );
}

export default async function WallPage() {
  const headersList = headers();
  const device = DeviceService.getDeviceDetails(
    headersList.get('user-agent') as string
  );
  const [latestMessage, ...messages] = await MessagesService.fetchAll();

  return (
    <article className="container mt-5">
      <PageHeader planet="Wall" title="Time to interact!" className="mb-2" />

      <Text as="p" className="mb-3" type="paragraph">
        Like every good trip, now it&apos;s time for you to interact with what
        I&apos;m proposing, but before, giving you more context:{' '}
        <Text highlight>
          have you ever heard about &quot;The Facebook Wall&quot;?
        </Text>{' '}
        It&apos;s very nice! You can write any message there, and I created my
        version right here, so{' '}
        <Text highlight>feel free to post something for me or anyone else</Text>{' '}
        to read. It could be <Text highlight>inspirational</Text>,{' '}
        <Text highlight>some feedback</Text>, <Text highlight>kudos</Text>,{' '}
        <Text highlight>a reminder for (or from) the future</Text> or from the
        future, or <Text highlight>anything you want</Text> to share.
      </Text>

      <section>
        <Text
          as="h2"
          className="text-zinc-900 dark:text-zinc-50 font-bold text-2xl mb-2"
        >
          Latest comment
        </Text>

        {latestMessage && (
          <MessageCard
            message={latestMessage as MessageCardProps['message']}
            latest
          />
        )}

        <Text
          as="h2"
          className="text-zinc-900 dark:text-zinc-50 font-bold text-xl mb-2 mt-3"
        >
          and more...
        </Text>

        <div className="grid lg:grid-cols-2 gap-4">
          {messages.map((message, index) => (
            <MessageCard
              key={message.id}
              message={message as MessageCardProps['message']}
              leftPosition={!device.isMobile && index % 2 === 0}
            />
          ))}
        </div>
      </section>
    </article>
  );
}
