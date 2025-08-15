import { useParams, Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { apps } from '@/data/apps'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function AppDetails() {
	const { id } = useParams<{ id: string }>()
	const { t } = useTranslation()
	const app = apps.find((a) => a.id === id)

	if (!app) {
		return (
			<div className="space-y-6">
				<RouterLink to="/" className="text-sm text-muted-foreground hover:underline">{t('back')}</RouterLink>
				<p>{t('appNotFound')}</p>
			</div>
		)
	}

	return (
		<div className="space-y-8">
			<div className="flex items-center gap-4">
				<div className="h-16 w-16 rounded-xl bg-muted flex items-center justify-center overflow-hidden">
					{app.logoUrl ? (
						<img src={app.logoUrl} alt={app.name + ' logo'} className="h-full w-full object-cover" />
					) : (
						<div aria-hidden>{/* TODO: Replace with app logo */}</div>
					)}
				</div>
				<div>
					<h2 className="text-2xl font-semibold tracking-tight">{app.name}</h2>
					<p className="text-muted-foreground">{app.description}</p>
				</div>
			</div>

			<div className="flex items-center gap-4">
				<RouterLink to="/" className="text-sm text-muted-foreground hover:underline">{t('back')}</RouterLink>
				{app.links?.github && (
					<Button asChild>
						<a href={app.links.github} target="_blank" rel="noopener noreferrer">{t('viewOnGithub')}</a>
					</Button>
				)}
			</div>

			<Card>
				<CardHeader>
					<CardTitle>{t('features')}</CardTitle>
				</CardHeader>
				<CardContent>
					<ul className="list-disc pl-5 space-y-2">
						{app.features?.map((f, idx) => (
							<li key={idx}>{f}</li>
						))}
					</ul>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>{t('screenshots')}</CardTitle>
				</CardHeader>
				<CardContent>
					{app.screenshots && app.screenshots.length > 0 ? (
						<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
							{app.screenshots.map((s, idx) => (
								<div key={idx} className="overflow-hidden rounded-lg border bg-card">
									<img src={s.url} alt={s.alt ?? `${app.name} screenshot ${idx + 1}`} className="w-full h-full object-cover" />
								</div>
							))}
						</div>
					) : (
						<p className="text-muted-foreground">—</p>
					)}
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>About</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="leading-relaxed">{app.detailedDescription}</p>
				</CardContent>
			</Card>
		</div>
	)
}