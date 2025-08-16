// LOGOS
import rnMapsLogo from "@/assets/apps/react-native-maps/rn-maps-logo.png";
import bilokmaLogo from "@/assets/apps/bilokma/bilokma-logo.png";
import koumathLogo from "@/assets/apps/koumath/koumath-logo.png";
import flightTicketLogo from "@/assets/apps/flight-ticket/flight-ticket-logo.png";
import wordGameLogo from "@/assets/apps/word-game/word-game-logo.png";
import rnBirdLogo from "@/assets/apps/react-native-bird/rn-bird-logo.png";
import myPlantsLogo from "@/assets/apps/my-plants/my-plants-logo.png";
import numberMatchLogo from "@/assets/apps/number-match/number-match-logo.png";
import umuttepeTourismLogo from "@/assets/apps/umuttepe-tourism/umuttepe-tourism-logo.png";
import kouSyllabusLogo from "@/assets/apps/kou-syllabus/kou-syllabus-logo.png";

// VIDEOS
// import koumathVideo from "@/assets/apps/koumath/koumath-video.mp4";

export type Technology =
  | "React"
  | "React Native"
  | "Reanimated"
  | "Gesture Handler"
  | "TypeScript"
  | "JavaScript"
  | "Python"
  | "React Native Skia"
  | "Expo";

export type Category = "Game" | "Maps" | "Booking" | "Food" | "Education" | "Lifestyle";

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
  videoUrl?: string;
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
    name: "Maps",
    description: "A map app built with React Native.",
    detailedDescription: "A map app built with React Native and TypeScript.",
    logoUrl: rnMapsLogo,
    baseTech: "React Native",
    isEditorSelected: true,
    screenshots: [
      { url: "https://via.placeholder.com/800x1600?text=Budget+1", alt: "Budget list" },
      { url: "https://via.placeholder.com/800x1600?text=Budget+2", alt: "Charts" },
      { url: "https://via.placeholder.com/800x1600?text=Budget+3", alt: "Details" },
    ],
    features: ["Offline-first storage", "Interactive charts", "Haptic feedback and gestures"],
    technologies: ["React Native"],
    categories: ["Maps"],
    links: { github: "#" },
  },
  {
    id: "2",
    name: "Bi'lokma",
    description: "Food delivery app.",
    detailedDescription: "A food delivery app built with React Native. Supports food delivery and food ordering.",
    logoUrl: bilokmaLogo,
    baseTech: "React Native",
    screenshots: [
      { url: "https://via.placeholder.com/800x1600?text=Focus+1" },
      { url: "https://via.placeholder.com/800x1600?text=Focus+2" },
    ],
    features: ["Session history", "Custom durations", "Animations"],
    technologies: ["React Native"],
    categories: ["Food"],
  },
  {
    id: "3",
    name: "KOUmath",
    description: "AI math solver app.",
    detailedDescription:
      "This project is a Photomath inspired app that crops the selected area and send it to the backend that handels the all the logic for solving the math problem. It provides camera recognition to analyze handwritten mathematical equations and expressions, manual input capabilities, and interactive graphing features for comprehensive mathematical problem solving.",
    logoUrl: koumathLogo,
    baseTech: "React Native",
    isEditorSelected: true,
    screenshots: [
      { url: "https://github.com/user-attachments/assets/63aa9796-cc61-4b10-a4ff-f4519be8227d", alt: "S1" },
      { url: "https://github.com/user-attachments/assets/558de7c8-453a-43d6-ac28-97b505b05a68", alt: "S2" },
      { url: "https://github.com/user-attachments/assets/7da6324d-93df-4a1e-9981-1b163a822d2a", alt: "S5" },
      { url: "https://github.com/user-attachments/assets/bbe42fd7-b112-4c4a-ba68-993c930b486d", alt: "S3" },
      { url: "https://github.com/user-attachments/assets/75e22cd7-424f-4417-942d-cf4bac0c0100", alt: "S4" },
      { url: "https://github.com/user-attachments/assets/cad93ac0-90d9-4eb7-8ae8-8d988c39e1d1", alt: "S6" },
      { url: "https://github.com/user-attachments/assets/11c664d9-3b50-4727-a657-291335df4987", alt: "S7" },
    ],
    features: [
      "<b>Camera Recognition:</b> Capture handwritten math problems using your device's camera",
      "<b>Manual Input:</b> Type mathematical functions and equations directly",
      "<b>Function Presets:</b> Quick access to common mathematical functions",
      "<b>Interactive Graphing:</b> Visualize functions with pan, zoom, and coordinate exploration",
      "<b>LaTeX Rendering:</b> Beautiful mathematical notation display",
      "<b>Coordinate System:</b> Interactive graph exploration with touch coordinates",
      "<b>Multiple Equation Types:</b> Support for polynomials, trigonometric functions, limits, and more",
    ],
    technologies: ["React Native", "Expo", "React Native Skia", "Reanimated", "Gesture Handler", "JavaScript"],
    categories: ["Education"],
    links: { github: "https://github.com/kagantemizkan/koumath" },
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
    technologies: ["React Native"],
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
    technologies: ["React Native"],
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
    technologies: ["React Native"],
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
    technologies: ["React Native"],
    categories: ["Lifestyle"],
    links: { web: "#", github: "#" },
  },
  {
    id: "8",
    name: "Number Match",
    description: "Number match game app.",
    detailedDescription: "A number match game app built with React Native and TypeScript.",
    logoUrl: numberMatchLogo,
    baseTech: "Python",
    screenshots: [
      { url: "https://via.placeholder.com/1200x800?text=Word+Game+1" },
      { url: "https://via.placeholder.com/1200x800?text=Word+Game+2" },
    ],
    features: ["Word game", "Word search", "Word details"],
    technologies: ["Python"],
    categories: ["Game"],
    links: { web: "#", github: "#" },
  },
  {
    id: "9",
    name: "Umuttepe Tourism",
    description: "Umuttepe Tourism app.",
    detailedDescription: "A tourism app built with React Native and TypeScript.",
    logoUrl: umuttepeTourismLogo,
    baseTech: "React",
    screenshots: [
      { url: "https://via.placeholder.com/1200x800?text=Word+Game+1" },
      { url: "https://via.placeholder.com/1200x800?text=Word+Game+2" },
    ],
    features: ["Word game", "Word search", "Word details"],
    technologies: ["React", "JavaScript"],
    categories: ["Booking"],
    links: { web: "#", github: "#" },
  },
  {
    id: "10",
    name: "KOU Syllabus",
    description: "KOU Syllabus app.",
    detailedDescription: "A syllabus app built with React Native and TypeScript.",
    logoUrl: kouSyllabusLogo,
    baseTech: "React",
    screenshots: [
      { url: "https://via.placeholder.com/1200x800?text=Word+Game+1" },
      { url: "https://via.placeholder.com/1200x800?text=Word+Game+2" },
    ],
    features: ["Word game", "Word search", "Word details"],
    technologies: ["React"],
    categories: ["Education"],
    links: { web: "#", github: "#" },
  },
];

export const allTechnologies: Technology[] = [
  "TypeScript",
  "JavaScript",
  "React",
  "React Native",
  "Python",
  "Reanimated",
  "Gesture Handler",
  "React Native Skia",
];
export const allCategories: Category[] = ["Maps", "Booking", "Game", "Food", "Education", "Lifestyle"];
