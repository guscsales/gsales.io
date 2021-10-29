import React, { useContext } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import BlogDatabase, {
  IBlogPostDetail,
} from '@contexts/blog/services/blog-database';
import Container from '@sagebox/components/container/container';
import Text from '@sagebox/components/text/text';
import Head from 'next/head';
import { format } from 'date-fns';
import * as i18n from 'date-fns/locale';
import LanguageContext from '@contexts/shared/contexts/language-context';

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await BlogDatabase.getPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await BlogDatabase.getPostBySlug(params.slug as string);

  return {
    props: { post },
    revalidate: 60,
  };
};

function Blog({ post }: { post: IBlogPostDetail }) {
  const { metadata, locale } = useContext(LanguageContext);

  return (
    <>
      <Head>
        <title>{post.title}- Blog - Gustavo Sales</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Container as="article" sub className="mt-10">
        <Text heading as="h1" className="text-white text-3xl">
          {post.title}
        </Text>
        <Text as="p" className="text-gray-400 mt-2 italic">
          {post.description}
        </Text>

        <section
          className="mt-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Container>
    </>
  );
}

export default Blog;
