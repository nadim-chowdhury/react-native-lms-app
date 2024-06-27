import * as Localization from "react-native-localize";
import i18n from "i18n-js";

// Default language (fallback)
i18n.defaultLocale = "en";

// Translations for supported languages
i18n.translations = {
  en: {
    // English
    greeting: "Hello!",
    // Add more translations
  },
  es: {
    // Spanish
    greeting: "¡Hola!",
    // Add more translations
  },
  // Add more languages as needed
};

// Detect and set current locale
const { languageTag } = Localization.locale;
i18n.locale = languageTag;

export default i18n;
