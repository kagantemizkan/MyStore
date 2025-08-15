import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { AppItem } from "@/data/apps"
import { Link } from 'react-router-dom'

export function AppCard({ app }: { app: AppItem }) {
	return (
		<Link to={`/app/${app.id}`} className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
			<Card className="overflow-hidden">
				<CardHeader className="flex-row items-center gap-4">
					<div className="h-16 w-16 rounded-xl bg-muted flex items-center justify-center overflow-hidden">
						{/* App logo placeholder */}
						{app.logoUrl ? (
							<img src={app.logoUrl} alt="" className="h-full w-full object-cover" />
						) : null}
					</div>
					<div>
						<CardTitle className="text-base">{app.name}</CardTitle>
						<CardDescription>{app.description}</CardDescription>
					</div>
				</CardHeader>
				<CardContent className="pt-0">
					<div className="flex flex-wrap gap-2">
						{app.technologies.map((t) => (
							<Badge key={t} variant="secondary">{t}</Badge>
						))}
					</div>
				</CardContent>
			</Card>
		</Link>
	)
}