import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Favicon paths for light and dark themes
 */
const FAVICON_PATHS = {
  light: "/src/assets/tote-bag-black.ico",
  dark: "/src/assets/tote-bag-white.ico",
} as const;

/**
 * Gets the current theme preference from the browser
 */
export function getCurrentTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/**
 * Updates the favicon based on the current theme
 */
export function updateFavicon(theme?: "light" | "dark") {
  if (typeof document === "undefined") return;

  const currentTheme = theme || getCurrentTheme();
  const faviconPath = FAVICON_PATHS[currentTheme];

  // Update the default favicon
  let favicon = document.getElementById("favicon-default") as HTMLLinkElement;
  if (favicon) {
    favicon.href = faviconPath;
  }

  // Also update any existing favicon links
  const existingFavicons = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
  existingFavicons.forEach((link) => {
    const favicon = link as HTMLLinkElement;
    if (favicon.id === "favicon-default" || !favicon.media) {
      favicon.href = faviconPath;
    }
  });
}

/**
 * Sets up a listener for theme changes and updates the favicon accordingly
 */
export function setupThemeListener() {
  if (typeof window === "undefined") return;

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  // Set initial favicon
  updateFavicon();

  // Listen for theme changes
  const handleThemeChange = (e: MediaQueryListEvent) => {
    updateFavicon(e.matches ? "dark" : "light");
  };

  // Use the modern API if available, fallback to deprecated one
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", handleThemeChange);
  } else {
    // Fallback for older browsers
    mediaQuery.addListener(handleThemeChange);
  }

  // Return cleanup function
  return () => {
    if (mediaQuery.removeEventListener) {
      mediaQuery.removeEventListener("change", handleThemeChange);
    } else {
      mediaQuery.removeListener(handleThemeChange);
    }
  };
}
