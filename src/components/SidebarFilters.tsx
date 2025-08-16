import { useTranslation } from "react-i18next";
import { allCategories, allTechnologies, type Category, type Technology } from "@/data/apps";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FaListUl } from "react-icons/fa6";
import tsIcon from "@/assets/techs/typescript.svg";
import rnIcon from "@/assets/techs/react-native.png";
import reanimatedIcon from "@/assets/techs/react-native-reanimated.svg";
import gestureIcon from "@/assets/techs/react-native-gesture-handler.svg";
import reactIcon from "@/assets/react.svg";
import jsIcon from "@/assets/techs/javascript.png";
import pythonIcon from "@/assets/techs/python.png";

type Props = {
  selectedCategories: Set<Category>;
  onToggleCategory: (c: Category) => void;
  selectedTech: Set<Technology>;
  onToggleTech: (t: Technology) => void;
  onClearAll: () => void;
};

const techToIcon: Partial<Record<Technology, string>> = {
  TypeScript: tsIcon,
  JavaScript: jsIcon,
  "React Native": rnIcon,
  Reanimated: reanimatedIcon,
  "Gesture Handler": gestureIcon,
  React: reactIcon,
  Python: pythonIcon,
};

export function SidebarFilters({ selectedCategories, onToggleCategory, selectedTech, onToggleTech, onClearAll }: Props) {
  const { t } = useTranslation();

  return (
    <aside className="rounded-lg border p-4 lg:sticky lg:top-24 h-fit">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <FaListUl aria-hidden /> {t("filters")}
        </h2>
        <Button variant="secondary" size="sm" onClick={onClearAll}>
          {t("clearFilters")}
        </Button>
      </div>

      <div className="space-y-6">
        <section>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">{t("categories")}</h3>
          <ul className="space-y-2">
            {allCategories.map((c) => {
              const checked = selectedCategories.has(c);
              return (
                <li key={c} className="flex items-center gap-2">
                  <Checkbox id={`cat-${c}`} checked={checked} onCheckedChange={() => onToggleCategory(c)} />
                  <Label htmlFor={`cat-${c}`} className="text-sm cursor-pointer">
                    {c}
                  </Label>
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">{t("technologies")}</h3>
          <ul className="space-y-2">
            {allTechnologies.map((tech) => {
              const checked = selectedTech.has(tech);
              const iconSrc = techToIcon[tech];
              return (
                <li key={tech} className="flex items-center gap-2">
                  <Checkbox id={`tech-${tech}`} checked={checked} onCheckedChange={() => onToggleTech(tech)} />
                  {iconSrc && <img src={iconSrc} alt="" aria-hidden className="h-4 w-4" />}
                  <Label htmlFor={`tech-${tech}`} className="text-sm cursor-pointer">
                    {tech}
                  </Label>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </aside>
  );
}
