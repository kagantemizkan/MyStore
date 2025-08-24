import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { AppItem } from "@/data/apps";
import { Link } from "react-router-dom";
import CrownIcon from "@/assets/crown.svg";
import { useTranslation } from "react-i18next";

export function AppCard({ app }: { app: AppItem }) {
  const { t } = useTranslation();
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
                className="absolute top-[-15px] left-[-11px] rotate-[-28deg] h-8 w-8 object-contain group-hover:scale-110 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"
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
              <Badge
                variant="default"
                className="flex-shrink-0 bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800/50 font-semibold whitespace-nowrap"
              >
                {t("editorSelection")}
              </Badge>
            )}
            {app.technologies
              .filter((t) => t !== app.baseTech)
              .map((t) => (
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
