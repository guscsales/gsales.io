import React, { useContext } from 'react';
import { InferGetStaticPropsType } from 'next';
import BlogDatabase from '@contexts/blog/services/blog-database';
import Container from '@sagebox/components/container/container';
import Text from '@sagebox/components/text/text';
import Head from 'next/head';
import Link from 'next/link';
import { format } from 'date-fns';
import * as i18n from 'date-fns/locale';
import LanguageContext from '@contexts/shared/contexts/language-context';

export const getStaticProps = async ({ locale }) => {
  const posts = await BlogDatabase.getPosts(locale);

  return {
    props: { posts },
    revalidate: 60,
  };
};

function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { metadata, locale } = useContext(LanguageContext);

  return (
    <>
      <Head>
        <title>Posts about programming - Gustavo Sales</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Container as="section" sub className="mt-10">
        <Text heading as="h1" className="text-white text-3xl">
          Blog
        </Text>
        <Text as="p" className="text-gray-300 mt-2">
          Blog description
        </Text>
      </Container>

      <Container as="section" sub className="mt-8">
        <ul className="mt-6 grid gap-12">
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slugs[locale]}`}>
                <a className="no-underline">
                  <Text
                    heading
                    className="text-white transition-colors ease-in-out text-2xl font-semibold"
                    as="h3"
                  >
                    {post.title}
                  </Text>
                </a>
              </Link>
              <Text as="p" className="text-base text-gray-300 mt-2 mb-3">
                {post.description}
              </Text>
              <span className="flex items-center gap-1 text-sm text-gray-500">
                <Text>
                  Posted at{' '}
                  {format(new Date(post.createdAt), metadata.dateFormat, {
                    locale: i18n[locale],
                  })}
                </Text>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}

export default Blog;
