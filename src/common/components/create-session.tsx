'use client';

import React from 'react';
import { clientAPI } from '@/common/services/api';
import { SessionContext } from '@/common/providers/session-provider';
import { User } from '@prisma/client';

type Props = {
  userId: string | undefined;
};

export default function CreateSession({ userId }: Props) {
  const { setVisitor } = React.useContext(SessionContext);

  React.useEffect(() => {
    if (!userId) {
      clientAPI.post('/guests').then(({ data }) => {
        setVisitor(data);
      });
    } else {
      setVisitor({ id: userId } as User);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return null;
}
