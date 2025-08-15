import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Layout } from '@/components/Layout'
import { TechFilter } from '@/components/TechFilter'
import { apps, type Technology } from '@/data/apps'
import { AppCard } from '@/components/AppCard'

function App() {
	const { t } = useTranslation()
	const [selectedTech, setSelectedTech] = useState<Set<Technology>>(new Set())

	const filtered = useMemo(() => {
		if (selectedTech.size === 0) return apps
		return apps.filter((a) => Array.from(selectedTech).every((t) => a.technologies.includes(t)))
	}, [selectedTech])

	function toggleTech(tech: Technology) {
		setSelectedTech((prev) => {
			const next = new Set(prev)
			if (next.has(tech)) next.delete(tech)
			else next.add(tech)
			return next
		})
	}

	return (
		<Layout>
			<section className="space-y-6">
				<div className="flex items-center justify-between">
					<h2 className="text-lg font-semibold">{t('technologies')}</h2>
					<button
						onClick={() => setSelectedTech(new Set())}
						className="text-sm text-muted-foreground hover:underline"
					>
						{t('all')}
					</button>
				</div>
				<TechFilter selected={selectedTech} onToggle={toggleTech} />
			</section>

			<section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-6">
				{filtered.length === 0 ? (
					<p className="text-muted-foreground">{t('noResults')}</p>
				) : (
					filtered.map((item) => <AppCard key={item.id} app={item} />)
				)}
			</section>
		</Layout>
	)
}

export default App
