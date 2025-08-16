import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { apps } from "@/data/apps";
import { BentoGrid, BentoItem } from "@/components/BentoGrid";

export default function Landing() {
	const { t } = useTranslation();

	const featuredApps = useMemo(() => {
		const selected = apps.filter((a) => a.isEditorSelected);
		if (selected.length > 0) return selected.slice(0, 6);
		return apps.slice(0, 6);
	}, []);

	const totalApps = apps.length;
	const technologies = Array.from(new Set(apps.flatMap((a) => a.technologies)));
	const totalTech = technologies.length;

	const topFeatured = featuredApps[0] ?? apps[0];

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
				<BentoGrid>
					{/* Hero Feature - spans 4 cols on sm+ */}
					<BentoItem className="col-span-2 sm:col-span-4 p-6">
						<div className="flex flex-col md:flex-row items-center gap-6">
							<div className="h-24 w-24 rounded-3xl bg-muted overflow-hidden flex items-center justify-center flex-shrink-0">
								{topFeatured?.logoUrl && (
									<img src={topFeatured.logoUrl} alt={`${topFeatured.name} logo`} className="h-full w-full object-contain" />
								)}
							</div>
							<div className="space-y-2 text-center md:text-left">
								<h3 className="text-xl font-semibold leading-tight">{topFeatured?.name}</h3>
								<p className="text-sm text-muted-foreground max-w-xl">{topFeatured?.description}</p>
								<div className="flex gap-2 justify-center md:justify-start">
									<Button asChild size="sm">
										<Link to={`/app/${topFeatured?.id}`}>Details</Link>
									</Button>
									<Button asChild size="sm" variant="secondary">
										<Link to="/apps">Browse all</Link>
									</Button>
								</div>
							</div>
						</div>
					</BentoItem>

					{/* Stats */}
					<BentoItem className="col-span-2 sm:col-span-2 p-6">
						<div className="h-full flex flex-col items-start justify-between">
							<div className="text-5xl font-extrabold tracking-tight">{totalApps}</div>
							<div className="text-muted-foreground">Total apps</div>
							<Link to="/apps" className="mt-3 text-sm text-primary hover:underline">
								Explore
							</Link>
						</div>
					</BentoItem>

					<BentoItem className="col-span-2 sm:col-span-2 p-6">
						<div className="h-full flex flex-col items-start justify-between">
							<div className="text-5xl font-extrabold tracking-tight">{totalTech}</div>
							<div className="text-muted-foreground">Technologies</div>
							<div className="mt-2 flex flex-wrap gap-2">
								{technologies.slice(0, 6).map((t) => (
									<span key={t} className="text-xs rounded-full bg-muted px-2 py-1">
										{t}
									</span>
								))}
								{technologies.length > 6 && (
									<span className="text-xs text-muted-foreground">+{technologies.length - 6} more</span>
								)}
							</div>
						</div>
					</BentoItem>

					{/* Mini grid of featured icons */}
					<BentoItem className="col-span-2 sm:col-span-2 p-6">
						<div className="grid grid-cols-3 gap-4">
							{featuredApps.slice(0, 6).map((app) => (
								<Link key={app.id} to={`/app/${app.id}`} className="group">
									<div className="h-14 w-14 rounded-2xl bg-muted overflow-hidden mx-auto">
										{app.logoUrl && (
											<img src={app.logoUrl} alt={`${app.name} logo`} className="h-full w-full object-contain" />
										)}
									</div>
									<div className="mt-2 text-center text-xs text-foreground/80 line-clamp-1 group-hover:underline">
										{app.name}
									</div>
								</Link>
							))}
						</div>
					</BentoItem>
				</BentoGrid>
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