import 'server-only';
import { Languages } from '@/common/enums/languages';

const dictionaries = {
  en: () => import('../metadata/en.json').then((module) => module.default),
  pt: () => import('../metadata/pt.json').then((module) => module.default),
};

export const getLanguageDictionary = async (locale: Languages) =>
  dictionaries[locale]();
