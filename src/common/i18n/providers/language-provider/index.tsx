'use client';

import React from 'react';
import { Languages } from '@/common/enums/languages';

type LanguageContextProps = {
  dictionary: object;
  language: Languages;
};

const LanguageContext = React.createContext<LanguageContextProps>({
  dictionary: {},
  language: Languages.En,
});

type LanguageProviderProps = {
  locale: Languages;
  dictionary: object;
};

export function LanguageProvider({
  locale,
  dictionary,
  children,
}: LanguageProviderProps & React.HTMLAttributes<HTMLElement>) {
  return (
    <LanguageContext.Provider value={{ dictionary, language: locale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;
