import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { AppItem } from "@/data/apps";
import { Link } from "react-router-dom";
import CrownIcon from "@/assets/crown.svg";

export function AppCard({ app }: { app: AppItem }) {
  return (
    <Link
      to={`/app/${app.id}`}
      className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-full group"
    >
      <Card
        className={` h-full flex flex-col transition-all duration-300 ease-in-out 
        hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.01]`}
      >
        <CardHeader className="flex-row items-start gap-4 space-y-0 flex-shrink-0 relative">
          <div className="relative">
            {app.isEditorSelected && (
              <img
                src={CrownIcon}
                alt="Crown"
                className="absolute top-[-18px] left-[-14px] rotate-[-28deg] h-10 w-10 object-contain group-hover:scale-110 transition-all duration-300 ease-in-out"
              />
            )}
            <div className="h-[3.5rem] w-[3.5rem] rounded-xl bg-muted overflow-hidden flex-shrink-0">
              <img src={app.logoUrl} alt={app.name + " logo"} className="h-full w-full object-contain" />
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-start">
            <CardTitle className="text-base leading-tight">{app.name}</CardTitle>
            <CardDescription className="break-words leading-relaxed">{app.description}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="pt-0 flex-1 flex flex-col justify-end">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {app.isEditorSelected && (
              <Badge variant="default" className="flex-shrink-0 bg-yellow-900 text-yellow-300 font-semibold whitespace-nowrap">
                Editörün Seçimi
              </Badge>
            )}
            {app.technologies.map((t) => (
              <Badge key={t} variant="secondary" className="flex-shrink-0">
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
