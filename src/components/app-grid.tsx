import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { AppCard } from "./app-card";
import type { PortfolioApp, TechnologyTag } from "../data/apps";
import { useTranslation } from "react-i18next";

const filters: ({ key: "all" } | { key: TechnologyTag })[] = [
  { key: "all" },
  { key: "react" },
  { key: "react-native" },
  { key: "reanimated" },
  { key: "gesture-handler" },
];

export function AppGrid({ apps }: { apps: PortfolioApp[] }) {
  const { t } = useTranslation();
  const [value, setValue] = React.useState<string>("all");

  const filtered = React.useMemo(() => {
    if (value === "all") return apps;
    return apps.filter((a) => a.technologies.includes(value as TechnologyTag));
  }, [apps, value]);

  const label = (key: string) => {
    switch (key) {
      case "all":
        return t("filters_all");
      case "react":
        return t("filters_react");
      case "react-native":
        return t("filters_react_native");
      case "reanimated":
        return t("filters_reanimated");
      case "gesture-handler":
        return t("filters_gesture_handler");
      default:
        return key;
    }
  };

  return (
    <div>
      <Tabs value={value} onValueChange={setValue}>
        <TabsList className="mb-6">
          {filters.map((f) => (
            <TabsTrigger key={f.key} value={f.key}>
              {label(f.key)}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={value} className="m-0">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a) => (
              <AppCard key={a.id} app={a} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}