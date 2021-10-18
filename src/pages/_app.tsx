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
import tailwindConfigFile from '../../tailwind.config';

import '@sagebox/globals.css';

const tailwindConfig = resolveConfig(tailwindConfigFile);

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    analytics();

    logAnalyticsEvent(router.pathname);
    router.events.on('routeChangeComplete', logAnalyticsEvent);

    return () => {
      router.events.off('routeChangeComplete', logAnalyticsEvent);
    };
  }, []);

  return (
    <SWRConfig value={{ fetcher: http, revalidateOnFocus: false }}>
      <LanguageProvider>
        <SkeletonTheme
          color={tailwindConfig.theme.colors.gray['800']}
          highlightColor={tailwindConfig.theme.colors.gray['700']}
        >
          <Header />
          <Component {...pageProps} />
          <Footer />
        </SkeletonTheme>
      </LanguageProvider>
    </SWRConfig>
  );
}

export default MyApp;
