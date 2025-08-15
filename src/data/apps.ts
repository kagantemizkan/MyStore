export type TechnologyTag =
  | "react"
  | "react-native"
  | "reanimated"
  | "gesture-handler"
  | "typescript"
  | "vite"
  | "tailwind";

export interface PortfolioApp {
  id: string;
  name: string;
  description: string;
  url: string;
  imageUrl?: string;
  technologies: TechnologyTag[];
}

export const portfolioApps: PortfolioApp[] = [
  {
    id: "app-1",
    name: "Motion Notes",
    description: "A note app with rich animations.",
    url: "#",
    imageUrl: undefined,
    technologies: ["react-native", "reanimated", "gesture-handler", "typescript"],
  },
  {
    id: "app-2",
    name: "Task Forge",
    description: "Minimal task manager.",
    url: "#",
    imageUrl: undefined,
    technologies: ["react", "vite", "tailwind", "typescript"],
  },
  {
    id: "app-3",
    name: "Fit Track",
    description: "Workout tracker with smooth charts.",
    url: "#",
    imageUrl: undefined,
    technologies: ["react-native", "reanimated", "typescript"],
  },
];