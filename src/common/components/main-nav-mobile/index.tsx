'use client';

import ButtonIcon from '@/libs/ui/components/button-icon';
import { RiMenuFill } from 'react-icons/ri';
import React from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
const MainNavMobileContent = dynamic(
  () => import('@/common/components/main-nav-mobile/main-nav-mobile-content'),
  { ssr: false }
);

export default function MainNavMobile() {
  const pathname = usePathname();
  const [navStatus, setNavStatus] =
    React.useState<React.ComponentProps<typeof MainNavMobileContent>['status']>(
      'closed'
    );

  React.useEffect(() => {
    setNavStatus('closed');
  }, [pathname]);

  return (
    <>
      <ButtonIcon
        icon={RiMenuFill}
        size={24}
        onClick={() => setNavStatus('opened')}
        className="lg:hidden"
      />
      <MainNavMobileContent status={navStatus} setNavStatus={setNavStatus} />
    </>
  );
}
