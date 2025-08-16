import { apps } from "@/data/apps";
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import CrownIcon from "@/assets/crown.svg";

interface SimpleBentoGridProps {
  maxItems?: number;
  showStats?: boolean;
}

export default function SimpleBentoGrid({ maxItems = 6, showStats = false }: SimpleBentoGridProps) {
  const displayApps = apps.slice(0, maxItems);

  const pattern: string[] = [
    "lg:col-span-3 lg:row-span-2",
    "lg:col-span-3",
    "lg:col-span-2",
    "lg:col-span-2",
    "lg:col-span-2",
    "lg:col-span-6",
  ];

  return (
    <BentoGrid className="lg:grid-cols-6">
      {displayApps.map((app, index) => (
        <BentoGridItem
          key={app.id}
          className={`${pattern[index] || "lg:col-span-2"} bg-card group cursor-pointer`}
          header={
            <Link to={`/app/${app.id}`} className="block">
              <div className="flex items-center justify-between mb-3">
                <div className="relative">
                  <div className="h-14 w-14 rounded-xl bg-muted overflow-hidden border border-border/50">
                    <img src={app.logoUrl} alt={app.name + " logo"} className="h-full w-full object-contain p-2" />
                  </div>
                  {app.isEditorSelected && (
                    <img
                      src={CrownIcon}
                      alt="Crown"
                      className="absolute -top-2 -right-2 h-6 w-6 object-contain group-hover:scale-110 transition-transform duration-200"
                    />
                  )}
                </div>
                {index === 0 && <div className="text-xs text-muted-foreground hidden md:block">Featured</div>}
              </div>
            </Link>
          }
          title={app.name}
          description={app.description.length > 60 ? app.description.substring(0, 60) + "..." : app.description}
        >
          <div className="flex gap-1 flex-wrap mt-2">
            {app.technologies.slice(0, 2).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {app.technologies.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{app.technologies.length - 2}
              </Badge>
            )}
          </div>
        </BentoGridItem>
      ))}

      {showStats && (
        <BentoGridItem
          className="lg:col-span-2 bg-gradient-to-br from-primary/5 to-secondary/5"
          title="Portfolio"
          description="Active projects"
        >
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">{apps.length}</div>
            <div className="text-xs text-muted-foreground">Total Apps</div>
          </div>
        </BentoGridItem>
      )}
    </BentoGrid>
  );
}
