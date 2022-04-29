import i18n from 'i18next';
import caContent from './ca.json';
import enContent from './en.json';
import esContent from './es.json';
import ptContent from './pt.json';

import { initReactI18next } from 'react-i18next';

export const resources = {
  en: {
    content:enContent
  },
  es: {
    content:esContent
  },
  pt:{
    content:ptContent
  },
  ca:{
    content:caContent
  }
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources
});