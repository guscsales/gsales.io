import CircleSeparator from '@/common/components/circle-separator';
import Badge from '@/libs/ui/components/badge';
import Card from '@/libs/ui/components/card';
import classNames from 'classnames';
import { format } from 'date-fns';
import { RiMessage3Line, RiLinkedinBoxFill } from 'react-icons/ri';
import Text from '@/libs/ui/components/text';
import { Message } from '@/domains/messages/services/messages-service';
import dynamic from 'next/dynamic';

const MessageCardContent = dynamic(
  () => import('@/domains/wall/components/message-card-content'),
  { ssr: false }
);

type Props = {
  message: Message;
  latest?: boolean;
  leftPosition?: boolean;
};

export default function MessageCard({ message, latest, leftPosition }: Props) {
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
            <Badge color="opaque" className="-mt-1">
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
