import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend) // Load translations from the public folder
  .use(LanguageDetector) // Detect user's language
  .use(initReactI18next) // Bind i18next to react-i18next
  .init({
    fallbackLng: "en", // Default language
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Translation files path
    },
  });

export default i18n;