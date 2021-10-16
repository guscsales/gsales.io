import React from 'react';
import { AppProps } from 'next/app';
import Header from '@contexts/shared/components/header/header';
import Footer from '@contexts/shared/components/footer/footer';
import { LanguageProvider } from '@contexts/shared/contexts/language-context';

import '@sagebox/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </LanguageProvider>
  );
}

export default MyApp;
