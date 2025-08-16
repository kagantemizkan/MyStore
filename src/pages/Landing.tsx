import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { apps } from "@/data/apps";

export default function Landing() {
	const { t } = useTranslation();

	const featuredApps = useMemo(() => {
		const selected = apps.filter((a) => a.isEditorSelected);
		if (selected.length > 0) return selected.slice(0, 6);
		return apps.slice(0, 6);
	}, []);

	return (
		<div className="space-y-12">
			<section className="text-center space-y-5 pt-4">
				<h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
					{t("heroTitle", "My App Store Portfolio")}
				</h1>
				<p className="text-muted-foreground max-w-2xl mx-auto text-lg">
					{t(
						"heroSubtitle",
						"Explore my projects in an app store–like experience. Browse featured apps, filter by technology, and dive into details."
					)}
				</p>
				<div className="flex items-center justify-center gap-3">
					<Button asChild>
						<Link to="/apps">{t("exploreApps", "Explore apps")}</Link>
					</Button>
					<Link to="/apps" className="text-sm text-muted-foreground hover:underline">
						{t("viewAllApps", "View all apps")}
					</Link>
				</div>
			</section>

			<section className="space-y-4">
				<div className="flex items-center justify-between">
					<h2 className="text-2xl font-semibold">{t("featured", "Featured")}</h2>
					<Link to="/apps" className="text-sm text-muted-foreground hover:underline">
						{t("viewAllApps", "View all apps")}
					</Link>
				</div>
				<div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
					{featuredApps.map((app) => (
						<Link
							key={app.id}
							to={`/app/${app.id}`}
							className="group flex flex-col items-center rounded-xl border bg-card p-4 transition hover:shadow-md"
						>
							<div className="h-16 w-16 rounded-2xl bg-muted overflow-hidden flex items-center justify-center">
								{app.logoUrl ? (
									<img src={app.logoUrl} alt={`${app.name} logo`} className="h-full w-full object-contain" />
								) : (
									<div className="text-muted-foreground text-xs">{app.name[0]}</div>
								)}
							</div>
							<div className="mt-3 text-center">
								<div className="text-sm font-medium leading-tight group-hover:underline">
									{app.name}
								</div>
								<div className="text-xs text-muted-foreground line-clamp-2">{app.description}</div>
							</div>
						</Link>
					))}
				</div>
			</section>
		</div>
	);
}