import Logo from '../logo';
import MainNavDesktop from '@/app/components/main-nav-desktop';
import MainNavMobile from '@/app/components/main-nav-mobile';

export default function MainHeader() {
  return (
    <header className="flex justify-between items-center py-2 px-3 fixed top-0 left-0 z-0 w-full">
      <Logo className="w-14" />
      <MainNavMobile />
      <MainNavDesktop />
    </header>
  );
}
