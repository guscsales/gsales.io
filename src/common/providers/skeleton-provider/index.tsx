'use client';

import { useTheme } from 'next-themes';
import React from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import colors from 'tailwindcss/colors';

export default function SkeletonProvider({
  children,
}: React.HTMLAttributes<HTMLElement>) {
  const { theme } = useTheme();

  return (
    <SkeletonTheme
      baseColor={theme === 'light' ? colors.zinc['200'] : colors.zinc['800']}
      highlightColor={
        theme === 'light' ? colors.zinc['100'] : colors.zinc['600']
      }
    >
      {children}
    </SkeletonTheme>
  );
}
