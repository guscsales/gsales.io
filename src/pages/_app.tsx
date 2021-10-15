import { AppProps } from 'next/app';
import Header from '@contexts/shared/components/header/header';

import '@sagebox/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
