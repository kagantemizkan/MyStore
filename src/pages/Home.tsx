import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { TechFilter } from "@/components/TechFilter";
import { apps, type Technology } from "@/data/apps";
import { AppCard } from "@/components/AppCard";

export default function Home() {
  const { t } = useTranslation();
  const [selectedTech, setSelectedTech] = useState<Set<Technology>>(new Set());

  const filtered = useMemo(() => {
    if (selectedTech.size === 0) return apps;
    return apps.filter((a) => Array.from(selectedTech).every((t) => a.technologies.includes(t)));
  }, [selectedTech]);

  // Group filtered apps by baseTech
  const groupedApps = useMemo(() => {
    const groups: Record<string, typeof apps> = {};
    filtered.forEach((app) => {
      if (!groups[app.baseTech]) {
        groups[app.baseTech] = [];
      }
      groups[app.baseTech].push(app);
    });
    return groups;
  }, [filtered]);

  function toggleTech(tech: Technology) {
    setSelectedTech((prev) => {
      const next = new Set(prev);
      if (next.has(tech)) next.delete(tech);
      else next.add(tech);
      return next;
    });
  }

  return (
    <>
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{t("technologies")}</h2>
          <button onClick={() => setSelectedTech(new Set())} className="text-sm text-muted-foreground hover:underline">
            {t("all")}
          </button>
        </div>
        <TechFilter selected={selectedTech} onToggle={toggleTech} />
      </section>

      {filtered.length === 0 ? (
        <section className="pt-6">
          <p className="text-muted-foreground">{t("noResults")}</p>
        </section>
      ) : (
        Object.entries(groupedApps).map(([baseTech, appsInGroup]) => (
          <section key={baseTech} className="pt-6 space-y-4">
            <h3 className="text-xl font-semibold text-foreground">{baseTech}</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {appsInGroup.map((item) => (
                <AppCard key={item.id} app={item} />
              ))}
            </div>
          </section>
        ))
      )}
    </>
  );
}
