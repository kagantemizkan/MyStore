import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const resources = {
  en: {
    translation: {
      app_store_title: "My Apps",
      filters_all: "All",
      filters_react: "React",
      filters_react_native: "React Native",
      filters_reanimated: "Reanimated",
      filters_gesture_handler: "Gesture Handler",
      built_with: "Built with",
      view: "View",
    },
  },
  tr: {
    translation: {
      app_store_title: "Uygulamalarım",
      filters_all: "Tümü",
      filters_react: "React",
      filters_react_native: "React Native",
      filters_reanimated: "Reanimated",
      filters_gesture_handler: "Gesture Handler",
      built_with: "Kullanılan teknolojiler",
      view: "Görüntüle",
    },
  },
} as const;

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;