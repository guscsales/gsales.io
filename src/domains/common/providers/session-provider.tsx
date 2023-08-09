'use client';

import React from 'react';
import { User } from '@prisma/client';
import { useCookies } from 'react-cookie';

type SessionContextProps = {
  visitor: User | null;
  setVisitor: React.Dispatch<React.SetStateAction<User | null>>;
};

export const SessionContext = React.createContext<SessionContextProps>({
  visitor: null,
  setVisitor: () => void 0,
});

export function SessionProvider({
  children,
}: React.HTMLAttributes<HTMLElement>) {
  const [visitor, setVisitor] =
    React.useState<SessionContextProps['visitor']>(null);

  return (
    <SessionContext.Provider value={{ visitor, setVisitor }}>
      {children}
    </SessionContext.Provider>
  );
}

export default SessionProvider;
