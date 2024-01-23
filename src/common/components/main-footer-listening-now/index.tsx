'use client';

import React from 'react';
import Text from '@/libs/ui/components/text';
import Typewriter from 'typewriter-effect/dist/core';
// import RealtimeDatabase from '@/common/services/realtime-database';

export default function MainFooterListeningNow() {
  let previousSong = '';

  React.useEffect(() => {
    const typewriter = new Typewriter('#current-song', {
      cursor: '_',
      delay: 60,
      deleteSpeed: 30,
    });

    typewriter.typeString('// let listeningNow =  \'Nothing playing\';').start();

    // RealtimeDatabase.get({
    //   table: 'currentSong',
    //   callback: (data: any) => {
    //     const currentSong = data?.title
    //       ? `'${data.title} - ${data.artist}'; `
    //       : `'Nothing playing'; `;

    //     typewriter
    //       .deleteChars(previousSong.length || 1)
    //       .typeString(currentSong)
    //       .start();

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    //     previousSong = currentSong;
    //   },
    // });
  }, []);

  return (
    <Text className="font-code font-normal text-sm text-emerald-700 dark:text-emerald-200">
      {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
      <span id="current-song" />
    </Text>
  );
}
