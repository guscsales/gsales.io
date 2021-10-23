import React, { useContext } from 'react';
import Container from '@sagebox/components/container/container';
import ButtonLink from '@sagebox/components/button-link/button-link';
import { socialMedia } from '@contexts/shared/metadata/general';
import LanguageContext from '@contexts/shared/contexts/language-context';
import navigator from '@contexts/shared/services/navigator';
import RealtimeDatabase from '@contexts/shared/services/realtime-database';
import Text from '@sagebox/components/text/text';
import Typewriter from 'typewriter-effect/dist/core';

function Footer() {
  const { metadata, locale } = useContext(LanguageContext);
  let previousSong = '';

  React.useEffect(() => {
    const typewriter = new Typewriter('#current-song', {
      cursor: '_',
      delay: 60,
      deleteSpeed: 30,
    });

    typewriter.typeString('// let listeningNow =  ');

    RealtimeDatabase.get({
      table: 'currentSong',
      callback: (data) => {
        const currentSong = data
          ? `'${data.title} - ${data.artist}'; `
          : `'${metadata.footer.nothingPlaying}'; `;

        typewriter
          .deleteChars(previousSong.length || 1)
          .typeString(currentSong)
          .start();

        previousSong = currentSong;
      },
    });
  }, [locale]);

  return (
    <footer>
      <div className="w-full h-px bg-gray-800 mt-24" />
      <Container className="mt-6" sub>
        <div className="font-code text-sm text-green-200 flex items-center">
          {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
          <Text id="current-song" />
        </div>
      </Container>
      <Container className="flex flex-col sm:flex-row sm:h-52 py-5" sub>
        <div className="flex justify-between gap-14 sm:gap-0 items-center sm:block w-full sm:w-72">
          <div className="sm:mt-4">
            <div className="font-heading font-bold text-xl italic text-white select-none">
              Gus!
            </div>
            <a
              href="mailto:gustavo@gsales.io"
              className="text-gray-400 no-underline hover:text-gray-300 transition-colors ease-in-out -mt-1 flex"
            >
              gustavo@gsales.io
            </a>
          </div>
          <p className="italic text-gray-400 sm:mt-7 text-sm text-right sm:text-left">
            {metadata.footer.verse.content} <br />
            <span className="text-gray-500 text-xs">
              {metadata.footer.verse.reference}
            </span>
          </p>
        </div>
        <div className="hidden sm:block w-px h-full bg-gray-800 mx-11" />
        <div className="flex mt-7 sm:mt-0">
          <nav className="flex flex-col justify-start gap-2 mr-16">
            {navigator.map(({ key, url }) => (
              <ButtonLink key={key} href={url} align="left" ghost>
                {metadata.navigator[key]}
              </ButtonLink>
            ))}
          </nav>
          <nav className="flex flex-col justify-start gap-2 mt-0 mr-14">
            {socialMedia.map(({ name, url }) => (
              <ButtonLink
                key={name}
                href={url}
                align="left"
                ghost
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
              </ButtonLink>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
