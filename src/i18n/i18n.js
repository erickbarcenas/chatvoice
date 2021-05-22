import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-xhr-backend";
import { reactI18nextModule } from "react-i18next";

// translations are already at
// '../public/locales/en/translation.json'
// which is the default for the xhr backend to load from

import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';


// the translations
const resources = {
    en: {
        translation: translationEN
    },
    es: {
        translation: translationES
    },
};


i18n
    .use(detector)
    .use(backend)
    .use(reactI18nextModule) // passes i18n down to react-i18nextxt
    .init({
        resources,
        lng: "es",
        fallbackLng: "es", // use en if detected lng is not available
        whitelist: ['en', 'es'],
        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        },
        backend: {
            loadPath: './locales/{{lng}}/{{ns}}.json',
        },
    });

export default i18n;
