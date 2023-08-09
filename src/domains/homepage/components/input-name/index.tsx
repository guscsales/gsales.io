'use client';

import React from 'react';
import debounce from 'lodash/debounce';
import { clientAPI } from '@/common/services/api';
import { User } from '@prisma/client';

type Props = {
  visitor: User | null;
};

export default function InputName({ visitor }: Props) {
  const updateUser = React.useCallback(
    debounce(async (name) => {
      await clientAPI.patch(`/guests/${visitor?.id}`, { name });
    }, 300),
    []
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.value;

    document.getElementById('ticket-guest-name')!.textContent =
      name || 'Last call!';

    updateUser(name);
  }

  return (
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
      onChange={handleChange}
      defaultValue={visitor?.name || ''}
    />
  );
}
