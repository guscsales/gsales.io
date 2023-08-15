'use client';

import { SWRConfig } from 'swr';
import SessionProvider from '@/domains/common/providers/session-provider';
import { fetcher } from '@/common/services/api';
import { SkeletonTheme } from 'react-loading-skeleton';
import colors from 'tailwindcss/colors';

export default function CoreProvider({
  children,
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <SWRConfig value={{ fetcher }}>
      <SkeletonTheme
        baseColor={colors.zinc['800']}
        highlightColor={colors.zinc['600']}
      >
        <SessionProvider>{children}</SessionProvider>
      </SkeletonTheme>
    </SWRConfig>
  );
}
