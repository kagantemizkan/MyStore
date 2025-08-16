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
      "rounded-xl bg-muted/50 overflow-hidden flex items-center justify-center",
      size === "small" && "h-12 w-12",
      size === "medium" && "h-16 w-16",
      size === "large" && "h-20 w-20"
    )}
  >
    <img src={app.logoUrl} alt={app.name + " logo"} className="h-full w-full object-contain p-2" />
  </div>
);

const TechBadges = ({ technologies }: { technologies: string[] }) => (
  <div className="flex gap-1 flex-wrap">
    {technologies.slice(0, 3).map((tech) => (
      <Badge key={tech} variant="secondary" className="text-xs">
        {tech}
      </Badge>
    ))}
    {technologies.length > 3 && (
      <Badge variant="outline" className="text-xs">
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
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">{totalApps}</div>
          <div className="text-xs text-muted-foreground">Apps</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">{technologies}</div>
          <div className="text-xs text-muted-foreground">Techs</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">{categories}</div>
          <div className="text-xs text-muted-foreground">Categories</div>
        </div>
      </div>
      <div className="text-center">
        <div className="text-xs text-muted-foreground">Building the future, one app at a time</div>
      </div>
    </div>
  );
};

export default function AppBentoGrid() {
  const { t } = useTranslation();
  const featuredApps = apps.slice(0, 6); // Get first 6 apps for bento layout
  const editorPickApp = apps.find((app) => app.isEditorSelected);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <BentoGrid className="grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {/* Large featured app - spans 2 columns and 2 rows */}
        <BentoGridItem
          className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary/15 hover:to-primary/10 border border-primary/20"
          header={
            <Link to={`/app/${editorPickApp?.id || featuredApps[0].id}`} className="block">
              <div className="flex items-start justify-between">
                <AppLogo app={editorPickApp || featuredApps[0]} size="large" />
                {(editorPickApp?.isEditorSelected || featuredApps[0].isEditorSelected) && (
                  <img src={CrownIcon} alt="Crown" className="h-8 w-8 object-contain" />
                )}
              </div>
            </Link>
          }
          title={editorPickApp?.name || featuredApps[0].name}
          description={editorPickApp?.description || featuredApps[0].description}
        >
          <div className="space-y-3 mt-3">
            <TechBadges technologies={editorPickApp?.technologies || featuredApps[0].technologies} />
            <Button asChild size="sm" className="w-full">
              <Link to={`/app/${editorPickApp?.id || featuredApps[0].id}`}>View Details</Link>
            </Button>
          </div>
        </BentoGridItem>

        {/* Stats card */}
        <BentoGridItem
          className="md:col-span-2 bg-gradient-to-br from-secondary/10 to-muted/20"
          title="Portfolio Stats"
          description="My development journey in numbers"
        >
          <StatsCard />
        </BentoGridItem>

        {/* Medium app cards - 4 apps in single cells */}
        {featuredApps.slice(1, 5).map((app) => (
          <BentoGridItem
            key={app.id}
            className="md:col-span-1 bg-card hover:bg-card/80 border-border"
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
          >
            <div className="mt-3">
              <TechBadges technologies={app.technologies} />
            </div>
          </BentoGridItem>
        ))}

        {/* Wide call-to-action */}
        <BentoGridItem
          className="md:col-span-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
          title="Explore All Apps"
          description="Discover more applications and projects in my portfolio"
        >
          <div className="space-y-3">
            <div className="flex gap-2">
              {apps.slice(0, 4).map((app) => (
                <div key={app.id} className="h-8 w-8 rounded-md bg-muted overflow-hidden">
                  <img src={app.logoUrl} alt={app.name} className="h-full w-full object-contain p-1" />
                </div>
              ))}
              <div className="h-8 w-8 rounded-md bg-muted/50 flex items-center justify-center text-xs text-muted-foreground">
                +{apps.length - 4}
              </div>
            </div>
            <Button asChild className="w-full">
              <Link to="/apps">{t("exploreApps")}</Link>
            </Button>
          </div>
        </BentoGridItem>
      </BentoGrid>
    </div>
  );
}
