import i18next, { dir } from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../Locales/en.json';
import ar from '../Locales/ar.json';
import fr from '../Locales/fr.json';

export const languageResources = {
  en: {translation: en},
  ar: {translation: ar},
  fr: {translation: fr},
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: languageResources,
  debug: true,
});

export default i18next;
