'use client';

import ButtonTransparent from '@/libs/ui/components/button-transparent';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {
  label: string;
  href: string;
};

const MainNavMenuItem = React.forwardRef(
  (
    { label, href, ...props }: Props & React.HTMLAttributes<HTMLElement>,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const pathname = usePathname();

    return (
      <ButtonTransparent
        ref={ref}
        as="span"
        status={pathname === href ? 'active' : 'idle'}
        {...props}
      >
        {label}
      </ButtonTransparent>
    );
  }
);

MainNavMenuItem.displayName = 'MainNavMenuItem';

export default MainNavMenuItem;
