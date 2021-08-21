import Head from 'next/head';
import HomeHeader from '@contexts/home/components/HomeHeader/HomeHeader';
import { getPlaiceholder } from 'plaiceholder';
import type { InferGetStaticPropsType } from 'next';
import { SummaryAboutMe } from '@contexts/home/components/SummaryAboutMe/SummaryAboutMe';
import { Box } from 'reflexbox';
import { Spaces } from '@design-system/core/Tokens';

export const getStaticProps = async () => {
  const gusPhoto = await getPlaiceholder('/images/gus-sales.png');

  return {
    props: {
      images: {
        gusPhoto: {
          ...gusPhoto.img,
          blurDataURL: gusPhoto.base64,
        },
      },
    },
  };
};

export default function Home({
  images,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Gus! | gsales.io</title>
      </Head>
      <HomeHeader gusPhoto={images.gusPhoto} />
      <Box as="main" my={Spaces.FOUR}>
        <SummaryAboutMe />
      </Box>
    </>
  );
}
