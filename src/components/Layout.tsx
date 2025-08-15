import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useTheme } from "@/theme"

export function Layout({ children }: { children: React.ReactNode }) {
	const { i18n, t } = useTranslation()
	const { theme, toggleTheme } = useTheme()

	return (
		<div className="min-h-screen">
			<header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
				<div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
					<h1 className="text-xl font-semibold tracking-tight">{t("appTitle")}</h1>
					<div className="flex items-center gap-4">
						<div className="flex items-center gap-2">
							<Label htmlFor="theme" className="sr-only">Theme</Label>
							<Switch id="theme" checked={theme === "dark"} onCheckedChange={toggleTheme} aria-label="Toggle dark mode" />
						</div>
						<div className="flex items-center gap-2">
							<Button variant={i18n.language === "en" ? "default" : "secondary"} onClick={() => i18n.changeLanguage("en")}>
								EN
							</Button>
							<Button variant={i18n.language === "tr" ? "default" : "secondary"} onClick={() => i18n.changeLanguage("tr")}>
								TR
							</Button>
						</div>
					</div>
				</div>
			</header>
			<main className="mx-auto max-w-6xl px-4 py-8">
				{children}
			</main>
		</div>
	)
}