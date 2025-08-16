import { apps, type AppItem } from "@/data/apps";
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CrownIcon from "@/assets/crown.svg";
import { cn } from "@/lib/utils";

const AppLogo = ({ app, size = "large" }: { app: AppItem; size?: "small" | "medium" | "large" }) => (
  <div
    className={cn(
      "rounded-xl bg-muted/50 overflow-hidden flex items-center justify-center border border-border/50",
      size === "small" && "h-12 w-12",
      size === "medium" && "h-16 w-16",
      size === "large" && "h-20 w-20"
    )}
  >
    <img src={app.logoUrl} alt={app.name + " logo"} className="h-full w-full object-contain p-2" />
  </div>
);

const TechBadges = ({ technologies }: { technologies: string[] }) => (
  <div className="flex gap-1.5 flex-wrap">
    {technologies.slice(0, 3).map((tech) => (
      <Badge key={tech} variant="secondary" className="text-[10px] px-1.5 py-0.5">
        {tech}
      </Badge>
    ))}
    {technologies.length > 3 && (
      <Badge variant="outline" className="text-[10px] px-1.5 py-0.5">
        +{technologies.length - 3}
      </Badge>
    )}
  </div>
);

const StatsCard = () => {
  const totalApps = apps.length;
  const technologies = [...new Set(apps.flatMap((app) => app.technologies))].length;
  const categories = [...new Set(apps.flatMap((app) => app.categories || []))].length;

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="text-center">
        <div className="text-2xl font-semibold text-primary">{totalApps}</div>
        <div className="text-xs text-muted-foreground">Apps</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-semibold text-primary">{technologies}</div>
        <div className="text-xs text-muted-foreground">Techs</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-semibold text-primary">{categories}</div>
        <div className="text-xs text-muted-foreground">Categories</div>
      </div>
    </div>
  );
};

export default function AppBentoGrid() {
  const { t } = useTranslation();
  const featuredApps = apps.slice(0, 6);
  const editorPickApp = apps.find((app) => app.isEditorSelected) || featuredApps[0];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <BentoGrid className="lg:grid-cols-6">
        <BentoGridItem
          className="lg:col-span-3 lg:row-span-2 bg-gradient-to-br from-primary/5 to-accent/5"
          header={
            <Link to={`/app/${editorPickApp.id}`} className="block">
              <div className="flex items-start justify-between">
                <AppLogo app={editorPickApp} size="large" />
                {editorPickApp.isEditorSelected && <img src={CrownIcon} alt="Crown" className="h-7 w-7 object-contain" />}
              </div>
            </Link>
          }
          title={editorPickApp.name}
          description={editorPickApp.description}
          footer={
            <div className="mt-2">
              <TechBadges technologies={editorPickApp.technologies} />
              <Button asChild size="sm" className="w-full mt-3">
                <Link to={`/app/${editorPickApp.id}`}>View Details</Link>
              </Button>
            </div>
          }
        />

        <BentoGridItem
          className="lg:col-span-3 bg-gradient-to-br from-secondary/10 to-muted/20"
          title="Portfolio Stats"
          description="My development journey in numbers"
          footer={<StatsCard />}
        />

        {featuredApps.slice(1, 5).map((app) => (
          <BentoGridItem
            key={app.id}
            className="lg:col-span-2 bg-card"
            header={
              <Link to={`/app/${app.id}`} className="block">
                <div className="flex items-center justify-between mb-2">
                  <AppLogo app={app} size="medium" />
                  {app.isEditorSelected && <img src={CrownIcon} alt="Crown" className="h-6 w-6 object-contain" />}
                </div>
              </Link>
            }
            title={app.name}
            description={app.description.length > 50 ? app.description.substring(0, 50) + "..." : app.description}
            footer={<TechBadges technologies={app.technologies} />}
          />
        ))}

        <BentoGridItem
          className="lg:col-span-6 bg-gradient-to-r from-primary/10 to-accent/10"
          title="Explore All Apps"
          description="Discover more applications and projects in my portfolio"
          footer={
            <div className="space-y-3">
              <div className="flex gap-2">
                {apps.slice(0, 6).map((app) => (
                  <div key={app.id} className="h-8 w-8 rounded-md bg-muted overflow-hidden">
                    <img src={app.logoUrl} alt={app.name} className="h-full w-full object-contain p-1" />
                  </div>
                ))}
                {apps.length > 6 && (
                  <div className="h-8 w-8 rounded-md bg-muted/50 flex items-center justify-center text-xs text-muted-foreground">
                    +{apps.length - 6}
                  </div>
                )}
              </div>
              <Button asChild className="w-full">
                <Link to="/apps">{t("exploreApps")}</Link>
              </Button>
            </div>
          }
        />
      </BentoGrid>
    </div>
  );
}
