import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/contexts/ThemeContext'
import { MoonIcon, SunIcon, LanguageIcon } from '@/components/icons'
import { cn } from '@/lib/utils'

interface HeaderProps {
  className?: string
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const { t, i18n } = useTranslation()
  const { theme, toggleTheme } = useTheme()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'tr' : 'en'
    i18n.changeLanguage(newLang)
  }

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'projects', href: '#projects' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' },
  ]

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      className
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-primary" />
          <span className="text-xl font-bold">Portfolio</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center space-x-2">
          {/* Language Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            aria-label={t('language.toggle')}
            className="h-9 w-9"
          >
            <LanguageIcon size={20} />
            <span className="sr-only">{t('language.toggle')}</span>
          </Button>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={t('theme.toggle')}
            className="h-9 w-9"
          >
            {theme === 'light' ? (
              <MoonIcon size={20} />
            ) : (
              <SunIcon size={20} />
            )}
            <span className="sr-only">{t('theme.toggle')}</span>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-9 w-9"
            aria-label="Open menu"
          >
            <div className="h-4 w-4 bg-current rounded" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation (hidden by default, would be toggled) */}
      <div className="hidden md:hidden border-t bg-background">
        <nav className="container mx-auto px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="block py-2 text-sm font-medium transition-colors hover:text-primary"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}