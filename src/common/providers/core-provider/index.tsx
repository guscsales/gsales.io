'use client';

import { SWRConfig } from 'swr';
import { ThemeProvider } from 'next-themes';
import SessionProvider from '@/common/providers/session-provider';
import { fetcher } from '@/common/services/api';
import SkeletonProvider from '@/common/providers/skeleton-provider';

export default function CoreProvider({
  children,
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <SWRConfig value={{ fetcher }}>
      <ThemeProvider attribute="class">
        <SkeletonProvider>
          <SessionProvider>{children}</SessionProvider>
        </SkeletonProvider>
      </ThemeProvider>
    </SWRConfig>
  );
}
