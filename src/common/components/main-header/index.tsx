'use client';

import Logo from '../logo';
import MainNavDesktop from '@/common/components/main-nav-desktop';
import MainNavMobile from '@/common/components/main-nav-mobile';
import React from 'react';
import classNames from 'classnames';

export default function MainHeader() {
  const [withShadow, setWithShadow] = React.useState(false);

  React.useEffect(() => {
    const scrollHandler = () => {
      setWithShadow(window.scrollY > 10);
    };

    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <header
      className={classNames(
        'fixed top-0 left-0 z-0 w-full bg-zinc-50 dark:bg-zinc-900 transition-base',
        {
          'shadow-xl': withShadow,
        }
      )}
    >
      <div className="flex justify-between items-center container py-2 px-3">
        <Logo className="w-14" />
        <MainNavMobile />
        <MainNavDesktop />
      </div>
    </header>
  );
}
