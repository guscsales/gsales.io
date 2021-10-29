import React, { useContext } from 'react';
import Container from '@sagebox/components/container/container';
import Text from '@sagebox/components/text/text';
import LanguageContext from '@contexts/shared/contexts/language-context';
import Bullet from '@contexts/shared/components/bullet';
import YoutubeApi, { TopVideo } from '@contexts/home/services/youtube-api';
import ButtonLink from '@sagebox/components/button-link/button-link';
import useSWR from 'swr';
import { ILanguageMetadataStructure } from '@contexts/shared/metadata/languages';
import Skeleton from 'react-loading-skeleton';

function VideoListItem({
  topVideo: { id, title, viewCount },
  metadata,
  index,
}: {
  topVideo: TopVideo;
  metadata: ILanguageMetadataStructure;
  index: number;
}) {
  return (
    <li key={id}>
      <a
        href={`https://www.youtube.com/watch?v=${id}`}
        rel="noopener noreferrer"
        target="blank"
        className="grid grid-flow-col sm:flex sm:grid-cols-none no-underline"
      >
        <span className="flex w-6 h-6 rounded-md items-center justify-center bg-gray-800">
          <Text className="text-white text-sm">{index + 1}</Text>
        </span>
        <span className=" -mt-1 ml-2">
          <Text
            className="text-gray-300 hover:text-white transition-colors ease-in-out text-base font-semibold"
            as="h3"
          >
            {title}
          </Text>
          <div className="flex items-center gap-1">
            <Text className="text-sm text-gray-500">
              {viewCount} {metadata.topVideos.views}
            </Text>
            <Bullet float={false} className="mt-px" />
            <Text className="flex text-sm">🇧🇷</Text>
          </div>
        </span>
      </a>
    </li>
  );
}

function VideoListItemLoading() {
  return (
    <li>
      <div className="grid grid-flow-col sm:flex sm:grid-cols-none no-underline">
        <span className="flex w-6 h-6 rounded-md items-center justify-center">
          <Skeleton width={24} height={24} />
        </span>
        <span className="w-full -mt-0.5 ml-2">
          <Text
            className="text-gray-300 hover:text-white transition-colors ease-in-out text-base font-semibold"
            as="h3"
          >
            <Skeleton height={24} />
          </Text>
          <div>
            <Skeleton width={64} height={20} />
          </div>
        </span>
      </div>
    </li>
  );
}

function TopVideos() {
  const { metadata } = useContext(LanguageContext);
  const { data: topVideos, isValidating } = useSWR('topVideos', () =>
    YoutubeApi.getTopVideos(3)
  );

  return (
    <Container as="article" sub>
      <Text heading as="h2" className="text-white text-2xl">
        {metadata.topVideos.title}
      </Text>
      <Text as="p" className="text-gray-300 mt-1">
        {metadata.topVideos.description}
      </Text>

      <ol className="mt-6 grid gap-6">
        {isValidating && (
          <>
            <VideoListItemLoading />
            <VideoListItemLoading />
            <VideoListItemLoading />
          </>
        )}
        {!isValidating &&
          topVideos.map((topVideo, index) => (
            <VideoListItem
              key={topVideo.id}
              topVideo={topVideo}
              index={index}
              metadata={metadata}
            />
          ))}
      </ol>
      <footer>
        <ButtonLink
          href="https://www.youtube.com/c/GusQuemFala"
          rel="noopener noreferrer"
          target="blank"
          size="small"
          className="flex justify-center sm:inline-flex mt-7 sm:mt-4 text-gray-400 hover:text-white"
        >
          {metadata.topVideos.moreVideos}
        </ButtonLink>
      </footer>
    </Container>
  );
}

export default TopVideos;
