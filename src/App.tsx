import { ThemeProvider } from '@/contexts/ThemeContext'
import { Header } from '@/components/Header'
import { AppStoreLayout } from '@/components/AppStoreLayout'
import { portfolioApps } from '@/data/portfolioApps'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="container mx-auto max-w-7xl">
          <AppStoreLayout apps={portfolioApps} />
        </main>
        <footer className="border-t mt-16 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Portfolio. Built with React, TypeScript, and Tailwind CSS.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
