import React, { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import LanguageContext from '@contexts/shared/contexts/language-context';
import '@firebase/init';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Container from '@sagebox/components/container/container';
import Text from '@sagebox/components/text/text';
import Card from '@sagebox/components/card';
import Mansory from 'react-masonry-css';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import Storage from '@contexts/shared/services/storage';
import Database from '@contexts/shared/services/database';
import { format } from 'date-fns';
import * as i18n from 'date-fns/locale';
import useSWR from 'swr';
import { random } from 'lodash';
import Skeleton from 'react-loading-skeleton';

export default function Wall() {
  const { metadata, locale } = useContext(LanguageContext);
  const form = useForm();
  const [user, setUser] = useState(null);
  const {
    data: usersMessages,
    isValidating,
    mutate,
  } = useSWR('wall', () =>
    Database.getAll({
      table: 'wall',
      constraints: {
        orderBy: { column: 'createdAtFirestore', direction: 'desc' },
      },
    })
  );

  useEffect(() => {
    setUser(Storage.read('userMetadata'));
  }, []);

  async function handleLogin() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    try {
      const {
        user: { displayName, email },
      } = await signInWithPopup(auth, provider);
      const authUser = { name: displayName, email };

      Storage.save({
        key: 'userMetadata',
        data: authUser,
      });
      setUser(authUser);

      return authUser;
    } catch (e) {
      console.log(e.message);
      return null;
    }
  }

  async function saveMessage(authUser, message) {
    const data = {
      ...authUser,
      message,
      createdAt: new Date().toISOString(),
    };
    await Database.create({
      table: 'wall',
      data,
    });
    mutate([...usersMessages, { ...data, id: random(1000, 9999) }]);

    form.reset();
  }

  async function deleteMessage(id) {
    await Database.remove({
      table: 'wall',
      id,
    });
    mutate(usersMessages.filter((userMessage) => userMessage.id !== id));
  }

  async function onSubmit(data) {
    if (!user) {
      const authUser = await handleLogin();
      if (authUser) {
        await saveMessage(authUser, data.message);
      }
    } else {
      await saveMessage(user, data.message);
    }
  }

  return (
    <>
      <Head>
        <title>{metadata.wall.metatags.title}</title>
        {/* Primary Meta Tags */}
        <meta name="title" content={metadata.wall.metatags.title} />
        <meta name="description" content={metadata.wall.metatags.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gsales.io/wall" />
        <meta property="og:title" content={metadata.wall.metatags.title} />
        <meta
          property="og:description"
          content={metadata.wall.metatags.description}
        />
        <meta property="og:image" content="https://gsales.io/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gsales.io/wall" />
        <meta property="twitter:title" content={metadata.wall.metatags.title} />
        <meta
          property="twitter:description"
          content={metadata.wall.metatags.description}
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
              src="/images/the-facebook-wall.webp"
              alt={`Retrato da parede de assinaturas do Facebook, no começo da parede está escrito "The Facebook Wall" e logo abaixo escrito "Write Something..."`}
              layout="fill"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <Text heading as="h1" className="text-white text-3xl">
              {metadata.wall.title}
            </Text>
            <Text as="p" className="text-gray-300 mt-2">
              {metadata.wall.description}
            </Text>
          </div>
        </div>

        <form className="mt-8" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder={metadata.wall.form.message.placeholder}
              className={`bg-transparent border border-transparent border-solid
                        w-full text-lg bg-gray-800 text-white
                        focus:outline-none
                        p-3 rounded-lg shadow-md ${classNames({
                          'focus:border-blue-700':
                            !form.formState.errors.message,
                          'border-red-500': form.formState.errors.message,
                        })}`}
              maxLength={400}
              {...form.register('message', { required: true, maxLength: 400 })}
            />
            <button
              type="submit"
              className="w-24 py-3 rounded-lg bg-blue-700 text-white transition-colors ease-in-out hover:bg-blue-600 shadow-md"
            >
              {metadata.wall.form.submit}
            </button>
          </div>
          {form.formState.errors.message && (
            <Text as="div" className="text-red-500 text-sm mt-1 ml-1">
              {metadata.wall.form.message.error}
            </Text>
          )}
          {!user && (
            <Text className="text-gray-400 text-xs ml-1">
              {metadata.wall.form.message.callout}
            </Text>
          )}
        </form>
      </Container>
      <section className="px-4 lg:px-8 mt-8">
        {usersMessages?.length === 0 && isValidating && (
          <div className="grid lg:grid-cols-5 gap-6">
            <Card hoverable>
              <Skeleton width="80%" height={24} />
              <Skeleton width="75%" height={16} className="mb-1" />
              <div className="leading-4">
                <Skeleton height={12} count={3} />
              </div>
            </Card>
            <Card hoverable>
              <Skeleton width="80%" height={24} />
              <Skeleton width="75%" height={16} className="mb-1" />
              <div className="leading-4">
                <Skeleton height={12} count={3} />
              </div>
            </Card>
            <Card hoverable>
              <Skeleton width="80%" height={24} />
              <Skeleton width="75%" height={16} className="mb-1" />
              <div className="leading-4">
                <Skeleton height={12} count={3} />
              </div>
            </Card>
          </div>
        )}
        <Mansory
          breakpointCols={{ default: 6, 640: 1, 1024: 3, 1280: 5 }}
          className="wall-masonry-grid"
          columnClassName="wall-masonry-grid__column"
        >
          {usersMessages &&
            usersMessages.map((userMessage) => (
              <Card key={userMessage.id} hoverable>
                <Text as="h3" heading className="text-white">
                  {userMessage.name}
                </Text>
                <Text as="div" className="text-gray-500 text-xs mb-1">
                  {format(
                    new Date(userMessage.createdAt),
                    `${metadata.dateFormat} ${metadata.hourFormat}`,
                    { locale: i18n[locale] }
                  )}
                </Text>
                <Text className="text-gray-300 text-sm">
                  {userMessage.message}
                </Text>
                {user?.email === userMessage.email && (
                  <div className="flex justify-center mt-2">
                    <button
                      onClick={() => deleteMessage(userMessage.id)}
                      type="button"
                      className="text-sm text-red-500 transition-colors ease-in-out hover:text-red-400"
                    >
                      {metadata.wall.cards.remove}
                    </button>
                  </div>
                )}
              </Card>
            ))}
        </Mansory>
      </section>
    </>
  );
}
