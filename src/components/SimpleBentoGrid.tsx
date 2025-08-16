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

  // Define different grid patterns based on number of items
  const getGridPattern = (itemCount: number) => {
    switch (itemCount) {
      case 3:
        return ["md:col-span-2", "md:col-span-1", "md:col-span-1"];
      case 4:
        return ["md:col-span-2", "md:col-span-1", "md:col-span-1", "md:col-span-2"];
      case 5:
        return ["md:col-span-2 md:row-span-2", "md:col-span-1", "md:col-span-1", "md:col-span-1", "md:col-span-1"];
      case 6:
      default:
        return ["md:col-span-2 md:row-span-2", "md:col-span-1", "md:col-span-1", "md:col-span-1", "md:col-span-1", "md:col-span-2"];
    }
  };

  const patterns = getGridPattern(displayApps.length);

  return (
    <BentoGrid className="grid-cols-1 md:grid-cols-3">
      {displayApps.map((app, index) => (
        <BentoGridItem
          key={app.id}
          className={`${patterns[index] || "md:col-span-1"} bg-card hover:bg-card/80 border-border group cursor-pointer`}
          header={
            <Link to={`/app/${app.id}`} className="block">
              <div className="flex items-center justify-between mb-3">
                <div className="relative">
                  <div className="h-14 w-14 rounded-xl bg-muted overflow-hidden">
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
          className="md:col-span-1 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20"
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
