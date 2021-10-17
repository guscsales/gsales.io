import React, { useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import LanguageContext from '@contexts/shared/contexts/language-context';
import '@firebase/init';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Container from '@sagebox/components/container/container';
import Text from '@sagebox/components/text/text';

export default function Wall() {
  const { metadata } = useContext(LanguageContext);

  async function handleLogin() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    try {
      const result = await signInWithPopup(auth, provider);

      console.log(result);
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <>
      <Head>
        <title>{metadata.metaTags.home.title}</title>
        {/* Primary Meta Tags */}
        <meta name="title" content={metadata.metaTags.home.title} />
        <meta name="description" content={metadata.metaTags.home.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gsales.io/" />
        <meta property="og:title" content={metadata.metaTags.home.title} />
        <meta
          property="og:description"
          content={metadata.metaTags.home.description}
        />
        <meta property="og:image" content="https://gsales.io/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gsales.io/" />
        <meta property="twitter:title" content={metadata.metaTags.home.title} />
        <meta
          property="twitter:description"
          content={metadata.metaTags.home.description}
        />
        <meta
          property="twitter:image"
          content="https://gsales.io/og-image.png"
        />
      </Head>

      <Container as="section" sub className="mt-10">
        <div className="grid sm:grid-flow-col">
          <div className="w-44 h-32 mx-auto relative mb-4 sm:mb-0 sm:mr-4">
            <Image
              src="/images/the-facebook-wall.png"
              alt={`Retrato da parede de assinaturas do Facebook, no começo da parede está escrito "The Facebook Wall" e logo abaixo escrito "Write Something..."`}
              layout="fill"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <Text heading as="h1" className="text-white text-3xl">
              The Gus Wall
            </Text>
            <Text as="p" className="text-gray-300 mt-2">
              Ja viu a parede de assinaturas do Facebook? Deixe aqui qualquer
              mensagem para eu ou qualquer outra pessoa ler.
            </Text>
            <Text as="p" className="text-gray-300 mt-2">
              Pode ser algo inspiracional, um feedback, um aviso do futuro, ou
              qualquer coisa que você queira compartilhar. Manda ver na
              criatividade! 🤓
            </Text>
          </div>
        </div>

        <form className="mt-8" onSubmit={handleLogin}>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Escreva sua mensagem..."
              className="bg-transparent border border-transparent border-solid
                        w-full text-lg bg-gray-800 text-white
                        focus:outline-none  focus:border-blue-700
                        p-3 rounded-lg shadow-md"
            />
            <button
              type="submit"
              className="w-24 py-3 rounded-lg bg-blue-700 text-white transition-colors ease-in-out hover:bg-blue-600 shadow-md"
            >
              Postar
            </button>
          </div>
          <Text className="text-gray-400 text-xs">
            Será preciso logar com sua conta do Google apenas para mostrar seu
            nome.
          </Text>
        </form>
      </Container>
    </>
  );
}
