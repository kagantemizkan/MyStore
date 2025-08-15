import i18n from "i18next"
import { initReactI18next } from "react-i18next"

export const resources = {
	en: {
		translation: {
			appTitle: "My Apps",
			filters: "Filters",
			all: "All",
			technologies: "Technologies",
			light: "Light",
			dark: "Dark",
			language: "Language",
			noResults: "No apps match the selected filters.",
		},
	},
	tr: {
		translation: {
			appTitle: "Uygulamalarım",
			filters: "Filtreler",
			all: "Tümü",
			technologies: "Teknolojiler",
			light: "Açık",
			dark: "Koyu",
			language: "Dil",
			noResults: "Seçilen filtrelerle eşleşen uygulama yok.",
		},
	},
} as const

i18n
	.use(initReactI18next)
	.init({
		resources,
		lng: "en",
		fallbackLng: "en",
		interpolation: { escapeValue: false },
	})

export default i18n