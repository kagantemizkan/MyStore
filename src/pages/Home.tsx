import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { apps, type Technology, type Category } from "@/data/apps";
import { AppCard } from "@/components/AppCard";
import { SidebarFilters } from "@/components/SidebarFilters";
import ReactNativeLogo from "@/assets/techs/react-native.png";
import PythonLogo from "@/assets/techs/python.png";

export default function Home() {
  const { t } = useTranslation();
  const [selectedTech, setSelectedTech] = useState<Set<Technology>>(new Set());
  const [selectedCategories, setSelectedCategories] = useState<Set<Category>>(new Set());

  const filtered = useMemo(() => {
    let result = apps;
    if (selectedTech.size > 0) {
      result = result.filter((a) => Array.from(selectedTech).every((t) => a.technologies.includes(t)));
    }
    if (selectedCategories.size > 0) {
      result = result.filter((a) => {
        const categories = a.categories ?? [];
        return Array.from(selectedCategories).every((c) => categories.includes(c));
      });
    }
    return result;
  }, [selectedTech, selectedCategories]);

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

  function toggleCategory(category: Category) {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) next.delete(category);
      else next.add(category);
      return next;
    });
  }

  function clearAll() {
    setSelectedTech(new Set());
    setSelectedCategories(new Set());
  }

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-3">
        <SidebarFilters
          selectedCategories={selectedCategories}
          onToggleCategory={toggleCategory}
          selectedTech={selectedTech}
          onToggleTech={toggleTech}
          onClearAll={clearAll}
        />
      </div>

      <div className="lg:col-span-9">
        {filtered.length === 0 ? (
          <section className="pt-6">
            <p className="text-muted-foreground">{t("noResults")}</p>
          </section>
        ) : (
          Object.entries(groupedApps).map(([baseTech, appsInGroup]) => (
            <section key={baseTech} className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                {baseTech === "React Native" && <img src={ReactNativeLogo} alt="React Native" className="w-9 h-9 object-contain" />}
                {baseTech === "React" && <img src={ReactNativeLogo} alt="React Native" className="w-9 h-9 object-contain" />}
                {baseTech === "Python" && <img src={PythonLogo} alt="Python" className="w-9 h-9 object-contain" />}
                <h3 className="text-[1.9rem] font-semibold text-foreground">{baseTech}</h3>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {appsInGroup.map((item) => (
                  <AppCard key={item.id} app={item} />
                ))}
              </div>
            </section>
          ))
        )}
      </div>
    </div>
  );
}
