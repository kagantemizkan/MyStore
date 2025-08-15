import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import { ThemeProvider } from 'next-themes'

function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
(function(){
  try {
    const theme = localStorage.getItem('theme');
    const m = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const d = document.documentElement.classList;
    if (theme === 'dark' || (!theme && m)) d.add('dark'); else d.remove('dark');
  } catch (e) {}
})();
        `,
      }}
    />
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeScript />
    <I18nextProvider i18n={i18n}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <App />
      </ThemeProvider>
    </I18nextProvider>
  </StrictMode>,
)
