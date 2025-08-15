import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Icon } from "./icons";
import type { PortfolioApp } from "../data/apps";

export function AppCard({ app }: { app: PortfolioApp }) {
  return (
    <Card className="overflow-hidden">
      {app.imageUrl ? (
        <div className="h-40 w-full bg-muted">
          {/* App image placeholder */}
        </div>
      ) : (
        <div className="h-40 w-full bg-muted" />
      )}
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="default" className="h-6 w-6 rounded bg-secondary" />
          {app.name}
        </CardTitle>
        <CardDescription>{app.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {app.technologies.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="justify-end">
        <Button asChild>
          <a href={app.url} target="_blank" rel="noreferrer">
            {/* Icon placeholder: External link */}
            <span className="ml-1">View</span>
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}