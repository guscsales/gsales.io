import Logo from '../logo';
import MainNavDesktop from '@/common/components/main-nav-desktop';
import MainNavMobile from '@/common/components/main-nav-mobile';

export default function MainHeader() {
  return (
    <header className="fixed top-0 left-0 z-0 w-full">
      <div className="flex justify-between items-center container py-2 px-3">
        <Logo className="w-14" />
        <MainNavMobile />
        <MainNavDesktop />
      </div>
    </header>
  );
}
