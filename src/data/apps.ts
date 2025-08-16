// LOGOS
import rnMapsLogo from "@/assets/apps/react-native-maps/rn-maps-logo.png";
import bilokmaLogo from "@/assets/apps/bilokma/bilokma-logo.png";
import koumathLogo from "@/assets/apps/koumath/koumath-logo.png";
import flightTicketLogo from "@/assets/apps/flight-ticket/flight-ticket-logo.png";
import wordGameLogo from "@/assets/apps/word-game/word-game-logo.png";
import rnBirdLogo from "@/assets/apps/react-native-bird/rn-bird-logo.png";
import myPlantsLogo from "@/assets/apps/my-plants/my-plants-logo.png";

export type Technology = "React" | "React Native" | "Reanimated" | "Gesture Handler" | "TypeScript";

export type Category = "Game" | "Maps" | "Booking" | "Productivity" | "Notes" | "Lifestyle";

export type Screenshot = {
  url: string;
  alt?: string;
};

export type AppItem = {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  isEditorSelected?: boolean;
  baseTech: string;
  imageUrl?: string;
  logoUrl?: string;
  screenshots?: Screenshot[];
  features?: string[];
  technologies: Technology[];
  categories?: Category[];
  links?: { appStore?: string; playStore?: string; web?: string; github?: string };
};

export const apps: AppItem[] = [
  {
    id: "1",
    name: "React Native Maps",
    description: "A map app built with React Native and TypeScript.",
    detailedDescription: "A map app built with React Native and TypeScript.",
    logoUrl: rnMapsLogo,
    baseTech: "React Native",
    screenshots: [
      { url: "https://via.placeholder.com/800x1600?text=Budget+1", alt: "Budget list" },
      { url: "https://via.placeholder.com/800x1600?text=Budget+2", alt: "Charts" },
      { url: "https://via.placeholder.com/800x1600?text=Budget+3", alt: "Details" },
    ],
    features: ["Offline-first storage", "Interactive charts", "Haptic feedback and gestures"],
    technologies: ["Reanimated", "Gesture Handler", "TypeScript"],
    categories: ["Maps"],
    links: { github: "#" },
  },
  {
    id: "2",
    name: "Bilokma",
    description: "Pomodoro timer with smooth interactions.",
    detailedDescription: "A minimalist productivity timer with focus sessions and breaks, animations handled by Reanimated.",
    logoUrl: bilokmaLogo,
    baseTech: "React Native",
    screenshots: [
      { url: "https://via.placeholder.com/800x1600?text=Focus+1" },
      { url: "https://via.placeholder.com/800x1600?text=Focus+2" },
    ],
    features: ["Session history", "Custom durations", "Animations"],
    technologies: ["Reanimated", "TypeScript"],
    categories: ["Productivity"],
  },
  {
    id: "3",
    name: "Koumath",
    description: "Markdown notes with search and tags.",
    detailedDescription: "A web note-taking app built with React and TypeScript. Supports markdown preview and fast search.",
    logoUrl: koumathLogo,
    baseTech: "React Native",
    screenshots: [
      { url: "https://via.placeholder.com/1200x800?text=Notes+1" },
      { url: "https://via.placeholder.com/1200x800?text=Notes+2" },
    ],
    features: ["Markdown preview", "Tag filtering", "Keyboard shortcuts"],
    technologies: ["React", "TypeScript"],
    categories: ["Notes"],
    links: { web: "#", github: "#" },
  },
  {
    id: "4",
    name: "Flight Ticket",
    description: "Flight ticket booking app.",
    detailedDescription: "A flight ticket booking app built with React and TypeScript.",
    logoUrl: flightTicketLogo,
    baseTech: "React Native",
    screenshots: [
      { url: "https://via.placeholder.com/1200x800?text=Flight+Ticket+1" },
      { url: "https://via.placeholder.com/1200x800?text=Flight+Ticket+2" },
    ],
    features: ["Flight ticket booking", "Flight ticket search", "Flight ticket details"],
    technologies: ["TypeScript"],
    categories: ["Booking"],
    links: { web: "#", github: "#" },
  },
  {
    id: "5",
    name: "Word Game",
    description: "Word game app.",
    detailedDescription: "A word game app built with Vue and TypeScript.",
    logoUrl: wordGameLogo,
    baseTech: "React Native",
    screenshots: [
      { url: "https://via.placeholder.com/1200x800?text=Word+Game+1" },
      { url: "https://via.placeholder.com/1200x800?text=Word+Game+2" },
    ],
    features: ["Word game", "Word search", "Word details"],
    technologies: ["TypeScript"],
    categories: ["Game"],
    links: { web: "#", github: "#" },
  },
  {
    id: "6",
    name: "Flappy Bird",
    description: "Bird game app.",
    detailedDescription: "A bird game app built with React Native and TypeScript.",
    logoUrl: rnBirdLogo,
    baseTech: "React Native",
    screenshots: [
      { url: "https://via.placeholder.com/1200x800?text=Word+Game+1" },
      { url: "https://via.placeholder.com/1200x800?text=Word+Game+2" },
    ],
    features: ["Word game", "Word search", "Word details"],
    technologies: ["TypeScript"],
    categories: ["Game"],
    links: { web: "#", github: "#" },
  },
  {
    id: "7",
    name: "My Plants",
    description: "My Plants app.",
    detailedDescription: "A plants app built with React Native and TypeScript.",
    logoUrl: myPlantsLogo,
    baseTech: "React Native",
    screenshots: [
      { url: "https://via.placeholder.com/1200x800?text=Word+Game+1" },
      { url: "https://via.placeholder.com/1200x800?text=Word+Game+2" },
    ],
    features: ["Word game", "Word search", "Word details"],
    technologies: ["TypeScript"],
    categories: ["Lifestyle"],
    links: { web: "#", github: "#" },
  },
];

export const allTechnologies: Technology[] = ["React", "React Native", "Reanimated", "Gesture Handler", "TypeScript"];
export const allCategories: Category[] = ["Maps", "Booking", "Game", "Productivity", "Notes", "Lifestyle"];
