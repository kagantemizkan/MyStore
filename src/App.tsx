import './App.css'
import { AppHeader } from './components/app-header'
import { AppGrid } from './components/app-grid'
import { portfolioApps } from './data/apps'

function App() {
  return (
    <div className="min-h-full">
      <AppHeader />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <AppGrid apps={portfolioApps} />
      </main>
    </div>
  )
}

export default App
