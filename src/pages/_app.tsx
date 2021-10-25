import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Header from '@contexts/shared/components/header/header';
import Footer from '@contexts/shared/components/footer/footer';
import { LanguageProvider } from '@contexts/shared/contexts/language-context';
import { SWRConfig } from 'swr';
import http from '@contexts/shared/services/http';
import { SkeletonTheme } from 'react-loading-skeleton';
import resolveConfig from 'tailwindcss/resolveConfig';
import analytics, {
  logAnalyticsEvent,
} from '@contexts/shared/services/firebase/analytics';
import IsAuthenticated from '@contexts/auth/components/IsAuthenticated';
import HeaderCMS from '@contexts/shared/components/header-cms';
import tailwindConfigFile from '../../tailwind.config';

import '@sagebox/globals.css';

const tailwindConfig = resolveConfig(tailwindConfigFile);

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAdmin = router.pathname.indexOf('/admin') !== -1;
  const isAdminLogin = router.pathname.indexOf('/admin/login') !== -1;

  useEffect(() => {
    if (!isAdmin) {
      analytics();

      logAnalyticsEvent(router.pathname);
      router.events.on('routeChangeComplete', logAnalyticsEvent);

      return () => {
        router.events.off('routeChangeComplete', logAnalyticsEvent);
      };
    }

    return null;
  }, []);

  return (
    <SWRConfig value={{ fetcher: http, revalidateOnFocus: false }}>
      <LanguageProvider>
        <SkeletonTheme
          color={tailwindConfig.theme.colors.gray['800']}
          highlightColor={tailwindConfig.theme.colors.gray['700']}
        >
          {!isAdmin ? (
            <>
              <Header />
              <Component {...pageProps} />
              <Footer />
            </>
          ) : (
            <>
              <IsAuthenticated>
                {!isAdminLogin && <HeaderCMS />}
                <Component {...pageProps} />
              </IsAuthenticated>
            </>
          )}
        </SkeletonTheme>
      </LanguageProvider>
    </SWRConfig>
  );
}

export default MyApp;
