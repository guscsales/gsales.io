'use client';

import Text from '@/libs/ui/components/text';
import { Message } from '@prisma/client';
import React from 'react';
import useSWR from 'swr';
import Skeleton from 'react-loading-skeleton';

type Props = {
  messageId: string;
};

export default function MessageCardContent({ messageId }: Props) {
  const { data, isLoading } = useSWR<Message>(`/messages/${messageId}`, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  return !isLoading ? (
    <Text
      as="div"
      type="paragraph"
      className="font-light grid gap-2"
      dangerouslySetInnerHTML={{
        __html:
          data?.content
            .split('\n\n')
            .map((paragraph) => `<p class="break-all">${paragraph}</p>`)
            .join('') || '',
      }}
    />
  ) : (
    <>
      <Skeleton height={14} />
      <Skeleton width="75%" height={14} />
    </>
  );
}
