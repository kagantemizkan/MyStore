import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { AppItem } from "@/data/apps"

export function AppCard({ app }: { app: AppItem }) {
	return (
		<Card className="overflow-hidden">
			<CardHeader className="flex-row items-center gap-4">
				<div className="h-16 w-16 rounded-xl bg-muted flex items-center justify-center">
					{/* TODO: Replace with app icon/logo */}
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
	)
}