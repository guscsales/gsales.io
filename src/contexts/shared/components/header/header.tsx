import React, { useContext } from 'react';
import Container from '@sagebox/components/container/container';
import Link from 'next/link';
import LanguageContext from '@contexts/shared/contexts/language-context';
import ButtonLink from '@sagebox/components/button-link/button-link';
import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect';
import { shuffle } from 'lodash';
import navigator from '@contexts/shared/services/navigator';

function prepareTypewriter(typewriter, firstPhrase, otherPhrases) {
  let codeTypewriter = typewriter;

  shuffle(otherPhrases).forEach((phrase) => {
    codeTypewriter = typewriter
      .typeString(`${phrase}; `)
      .pauseFor(700)
      .deleteAll();
  });

  codeTypewriter.typeString(`${firstPhrase}; `).start();
}

function Header() {
  const { pathname } = useRouter();
  const { metadata, locale, locales } = useContext(LanguageContext);
  const [firstPhrase, ...otherPhrases] = metadata.headerCodePhrases;
  const shuffleOtherPhrases = shuffle(otherPhrases);
  const typewriterProps = {
    options: { cursor: '_', delay: 60 },
    onInit: (typewriter) => {
      prepareTypewriter(typewriter, firstPhrase, shuffleOtherPhrases);
    },
  };

  return (
    <header>
      <Container className="py-4 flex justify-between items-center">
        <div className="font-code text-xs text-green-200 flex items-center">
          {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
          <div className="mr-1">{'//'}</div>
          {locale === 'en' && <Typewriter {...typewriterProps} />}
          {locale === 'pt' && <Typewriter {...typewriterProps} />}
        </div>
        <div className="grid grid-cols-2 gap-1">
          {locales.map((_locale) => (
            <ButtonLink
              key={_locale}
              href={pathname}
              size="small"
              active={_locale === locale}
              className="uppercase"
              locale={_locale}
            >
              {_locale}
            </ButtonLink>
          ))}
        </div>
      </Container>
      <div className="w-full h-px bg-gray-800 mb-6" />
      <Container className="mb-4 flex justify-between items-center">
        <h1 className="font-heading font-bold italic text-white text-2xl">
          <Link href="/">
            <a className="no-underline select-none">Gus!</a>
          </Link>
        </h1>
        <nav className="grid gap-2 grid-flow-col">
          {navigator.map(({ key, url }) => (
            <ButtonLink
              key={key}
              href={url}
              locale={locale}
              active={pathname.split('/')[1] === url.split('/')[1]}
            >
              {metadata.navigator[key]}
            </ButtonLink>
          ))}
        </nav>
      </Container>
    </header>
  );
}

export default Header;
