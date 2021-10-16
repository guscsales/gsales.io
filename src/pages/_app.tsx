import React from 'react';
import { AppProps } from 'next/app';
import Header from '@contexts/shared/components/header/header';
import Footer from '@contexts/shared/components/footer/footer';

import '@sagebox/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
