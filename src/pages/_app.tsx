import { AppProps } from 'next/app';
import NormalizeStyles from '../contexts/shared/design-system/core/NormalizeStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NormalizeStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
