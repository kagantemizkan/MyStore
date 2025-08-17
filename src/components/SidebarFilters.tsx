import { useState } from "react";
import { useTranslation } from "react-i18next";
import { allCategories, allTechnologies, type Category, type Technology, techToPackageName } from "@/data/apps";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FaListUl, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useTheme } from "@/theme";
import tsIcon from "@/assets/techs/typescript.svg";
import rnIcon from "@/assets/techs/react-native.png";
import reanimatedIcon from "@/assets/techs/react-native-reanimated.svg";
import gestureIcon from "@/assets/techs/react-native-gesture-handler.svg";
import reactIcon from "@/assets/react.svg";
import jsIcon from "@/assets/techs/javascript.png";
import pythonIcon from "@/assets/techs/python.png";
import skiaIcon from "@/assets/techs/react-native-skia.png";
import expoIcon from "@/assets/techs/expo.svg";
import nativewindIcon from "@/assets/techs/nativewind.svg";
import paperIcon from "@/assets/techs/react-native-paper.svg";
import zustandIcon from "@/assets/techs/zustand.svg";
import jotaiIcon from "@/assets/techs/jotai.png";

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
  "React Native Skia": skiaIcon,
  Expo: expoIcon,
  NativeWind: nativewindIcon,
  "React Native Paper": paperIcon,
  Zustand: zustandIcon,
  Jotai: jotaiIcon,
};

export function SidebarFilters({ selectedCategories, onToggleCategory, selectedTech, onToggleTech, onClearAll }: Props) {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [showPackageNames, setShowPackageNames] = useState(false);
  const [expandedTech, setExpandedTech] = useState(false);

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
          <div className="flex items-center mb-2 justify-between">
            <h3 className="text-sm font-medium text-muted-foreground">{t("technologies")}</h3>
            <h3
              onClick={() => setShowPackageNames(!showPackageNames)}
              className="text-xs font-medium text-muted-foreground cursor-pointer hover:text-foreground"
            >
              {showPackageNames ? t("hidePackageNames") : t("showPackageNames")}
            </h3>
          </div>
          <ul className="space-y-2">
            {(expandedTech ? allTechnologies : allTechnologies.slice(0, 8)).map((tech) => {
              const checked = selectedTech.has(tech);
              const iconSrc = techToIcon[tech];
              const displayName = showPackageNames ? techToPackageName[tech] || tech : tech;
              return (
                <li key={tech} className="flex items-center gap-2">
                  <Checkbox id={`tech-${tech}`} checked={checked} onCheckedChange={() => onToggleTech(tech)} />
                  {iconSrc && (
                    <img
                      src={iconSrc}
                      alt=""
                      aria-hidden
                      className={`h-4 w-4 ${
                        theme === "light" && (iconSrc === gestureIcon || iconSrc === reanimatedIcon || iconSrc === expoIcon) ? "invert" : ""
                      }`}
                    />
                  )}
                  <Label htmlFor={`tech-${tech}`} className={`text-sm cursor-pointer ${showPackageNames ? "font-mono" : ""}`}>
                    {displayName}
                  </Label>
                </li>
              );
            })}
          </ul>
          {allTechnologies.length > 8 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setExpandedTech(!expandedTech)}
              className="w-full mt-2 flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
            >
              {expandedTech ? (
                <>
                  Show Less <FaChevronUp className="h-3 w-3" />
                </>
              ) : (
                <>
                  Show More ({allTechnologies.length - 8}) <FaChevronDown className="h-3 w-3" />
                </>
              )}
            </Button>
          )}
        </section>
      </div>
    </aside>
  );
}
