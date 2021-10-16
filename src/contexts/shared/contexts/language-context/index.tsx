import React from 'react';
import { useRouter } from 'next/router';
import * as languagesMetadata from '@contexts/shared/metadata/languages';
import { ILanguageMetadataStructure } from '@contexts/shared/metadata/languages';

interface ILanguageContext {
  metadata: ILanguageMetadataStructure;
  locale: string;
  locales: string[];
}

const LanguageContext = React.createContext<ILanguageContext>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { locale, locales } = useRouter();
  const metadata = languagesMetadata[locale];

  return (
    <LanguageContext.Provider value={{ metadata, locale, locales }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;
