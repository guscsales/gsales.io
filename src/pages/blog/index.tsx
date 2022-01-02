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

export const getStaticProps = async () => {
  const posts = await BlogDatabase.getPosts({ locale: 'pt' });

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
        <title>Posts about programming - Blog - Gustavo Sales</title>

        <title>{metadata.blog.metatags.title}</title>
        {/* Primary Meta Tags */}
        <meta name="title" content={metadata.blog.metatags.title} />
        <meta name="description" content={metadata.blog.metatags.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gsales.io/blog" />
        <meta property="og:title" content={metadata.blog.metatags.title} />
        <meta
          property="og:description"
          content={metadata.blog.metatags.description}
        />
        <meta property="og:image" content="https://gsales.io/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gsales.io/blog" />
        <meta property="twitter:title" content={metadata.blog.metatags.title} />
        <meta
          property="twitter:description"
          content={metadata.blog.metatags.description}
        />
        <meta
          property="twitter:image"
          content="https://gsales.io/og-image.png"
        />
      </Head>
      <Container as="section" sub className="mt-10">
        <Text heading as="h1" className="text-white text-3xl">
          {metadata.blog.title}
        </Text>
        <Text as="p" className="text-gray-300 mt-2">
          {metadata.blog.description}
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
                  {metadata.blog.postedAt}{' '}
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
