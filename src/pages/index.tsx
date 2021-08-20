import Head from 'next/head';
import Header from '../contexts/home/components/Header/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gus! | gsales.io</title>
      </Head>
      <>
        <Header />
      </>
    </>
  );
}
