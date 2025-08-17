import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/theme";
import logoTextBlack from "@/assets/tote-bag-black.svg";
import logoTextWhite from "@/assets/tote-bag-white.svg";
import { Link } from "react-router-dom";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";

export function Header() {
	const { t, i18n } = useTranslation();
	const { theme, toggleTheme } = useTheme();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const changeLanguage = (lang: string) => {
		i18n.changeLanguage(lang);
	};

	return (
		<header className="sticky top-0 z-50 backdrop-blur-lg supports-[backdrop-filter]:bg-background/80 border-b border-border/40 shadow-sm transition-all duration-300">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo Section */}
					<Link
						to="/"
						className="flex items-center space-x-2 group transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
						aria-label="Go to homepage"
					>
						<div className="relative overflow-hidden rounded-lg">
							<img
								src={theme === "dark" ? logoTextWhite : logoTextBlack}
								alt="MyStore Logo"
								className="w-12 h-12 object-contain transition-transform duration-300 group-hover:rotate-12"
							/>
						</div>
						<span className="font-bold text-xl text-foreground hidden sm:block group-hover:text-primary transition-colors duration-200">
							MyStore
						</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-4">
						<Button variant="ghost" size="sm" asChild>
							<Link to="/blogs">Blogs</Link>
						</Button>
						{/* Theme Toggle */}
						<Button
							variant="ghost"
							size="sm"
							onClick={toggleTheme}
							aria-label="Toggle theme"
							className="p-2 hover:bg-accent/50 transition-colors duration-200"
						>
							{theme === "dark" ? <FaSun /> : <FaMoon />}
						</Button>

						{/* Language Selector */}
						<select
							value={i18n.language}
							onChange={(e) => changeLanguage(e.target.value)}
							className="bg-transparent border border-border rounded px-2 py-1 text-sm text-foreground hover:bg-accent/10 transition-colors duration-200"
						>
							<option value="en">EN</option>
							<option value="tr">TR</option>
						</select>
					</nav>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<Button
							variant="ghost"
							size="sm"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="p-2 hover:bg-accent/50 transition-colors duration-200"
							aria-label="Toggle mobile menu"
							aria-expanded={isMobileMenuOpen}
						>
							<FaBars className="h-5 w-5" />
						</Button>
					</div>
				</div>

				{/* Mobile Menu */}
				<div
					className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
						isMobileMenuOpen ? "max-h-48 opacity-100 pb-4" : "max-h-0 opacity-0 pb-0"
					}`}
				>
					<div className="pt-4 border-t border-border/40 space-y-4">
						{/* Mobile Blogs Link */}
						<Button
							variant="ghost"
							size="sm"
							className="w-full flex justify-center p-2 hover:bg-accent/50 transition-colors duration-200"
							asChild
						>
							<Link to="/blogs" onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
						</Button>

						{/* Mobile Theme Toggle */}
						<Button
							variant="ghost"
							size="sm"
							onClick={toggleTheme}
							aria-label="Toggle theme"
							className="w-full flex justify-center p-2 hover:bg-accent/50 transition-colors duration-200"
						>
							{theme === "dark" ? t("Light Mode") : t("Dark Mode")}
						</Button>

						{/* Mobile Language Selector */}
						<select
							value={i18n.language}
							onChange={(e) => changeLanguage(e.target.value)}
							className="w-full bg-transparent border border-border rounded px-4 py-2 text-sm text-foreground hover:bg-accent/10 transition-colors duration-200"
						>
							<option value="en">{t("English")}</option>
							<option value="tr">{t("Turkish")}</option>
						</select>
					</div>
				</div>
			</div>
		</header>
	);
}
