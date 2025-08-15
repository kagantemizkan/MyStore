import { createContext, useContext, useEffect, useMemo, useState } from "react"

type Theme = "light" | "dark"

type ThemeContextValue = {
	theme: Theme
	setTheme: (t: Theme) => void
	toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setThemeState] = useState<Theme>(() => {
		const stored = localStorage.getItem("theme") as Theme | null
		if (stored) return stored
		return window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light"
	})

	useEffect(() => {
		const root = document.documentElement
		root.classList.toggle("dark", theme === "dark")
		localStorage.setItem("theme", theme)
	}, [theme])

	const value = useMemo<ThemeContextValue>(
		() => ({
			theme,
			setTheme: (t) => setThemeState(t),
			toggleTheme: () => setThemeState((t) => (t === "dark" ? "light" : "dark")),
		}),
		[theme]
	)

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
	const ctx = useContext(ThemeContext)
	if (!ctx) throw new Error("useTheme must be used within ThemeProvider")
	return ctx
}