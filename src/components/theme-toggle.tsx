import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title={isDark ? "Light" : "Dark"}
    >
      {/* Icon placeholder: Sun/Moon */}
      <span className="sr-only">{isDark ? "Light" : "Dark"}</span>
    </Button>
  );
}