import fonts from '@/libs/ui/core/fonts';
import type { Metadata } from 'next';
import MainHeader from '@/common/components/main-header';
import MainFooter from '@/common/components/main-footer';
import UserService from '@/domains/users/services/user-service';
import CreateSession from '@/domains/common/components/create-session';
import CommandK from '@/domains/common/components/command-k';
import CoreProvider from '@/domains/common/providers/core-provider';

import '@/common/styles/globals.css';
import 'react-loading-skeleton/dist/skeleton.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Gustavo Sales',
    default: 'Software Engineer | Javascript Specialist | Gustavo Sales',
  },
  icons: {
    icon: '/favicon.png',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await UserService.getUserFromSession();

  return (
    <html lang="en">
      <body className={`dark ${fonts.className} pt-14`}>
        <CoreProvider>
          <CreateSession userId={user?.id} />
          <MainHeader />
          <main>{children}</main>
          <MainFooter />
          <CommandK />
        </CoreProvider>
      </body>
    </html>
  );
}
