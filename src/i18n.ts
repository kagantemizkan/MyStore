import i18n from "i18next"
import { initReactI18next } from "react-i18next"

export const resources = {
	en: {
		translation: {
			appTitle: "My Apps",
			filters: "Filters",
			all: "All",
			technologies: "Technologies",
			categories: "Categories",
			clearFilters: "Clear all",
			light: "Light",
			dark: "Dark",
			language: "Language",
			noResults: "No apps match the selected filters.",
			back: "Back",
			features: "Critical features",
			screenshots: "Screenshots",
			viewOnGithub: "View on GitHub",
			appNotFound: "App not found",
		},
	},
	tr: {
		translation: {
			appTitle: "Uygulamalarım",
			filters: "Filtreler",
			all: "Tümü",
			technologies: "Teknolojiler",
			categories: "Kategoriler",
			clearFilters: "Tümünü temizle",
			light: "Açık",
			dark: "Koyu",
			language: "Dil",
			noResults: "Seçilen filtrelerle eşleşen uygulama yok.",
			back: "Geri",
			features: "Kritik özellikler",
			screenshots: "Ekran görüntüleri",
			viewOnGithub: "GitHub'da görüntüle",
			appNotFound: "Uygulama bulunamadı",
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