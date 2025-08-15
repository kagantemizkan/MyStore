import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.language.startsWith("tr") ? "tr" : "en";

  const toggle = () => {
    const next = current === "en" ? "tr" : "en";
    i18n.changeLanguage(next);
  };

  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" onClick={toggle} aria-label="Toggle language">
        {current === "en" ? "TR" : "EN"}
      </Button>
    </div>
  );
}