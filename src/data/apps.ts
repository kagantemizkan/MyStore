// IMAGES
import rnMapsImage from "@/assets/apps/react-native-maps/rn-maps-settings.png";

import flightTicketImage1 from "@/assets/apps/flight-ticket/S1.png";
import flightTicketImage2 from "@/assets/apps/flight-ticket/S2.png";

import wordGameImage1 from "@/assets/apps/word-game/1.png";
import wordGameImage2 from "@/assets/apps/word-game/2.png";
import wordGameImage3 from "@/assets/apps/word-game/3.png";
import wordGameImage4 from "@/assets/apps/word-game/4.png";
import wordGameImage5 from "@/assets/apps/word-game/5.png";
import wordGameImage6 from "@/assets/apps/word-game/6.png";
import wordGameImage7 from "@/assets/apps/word-game/7.png";
import wordGameImage8 from "@/assets/apps/word-game/8.png";
import wordGameImage9 from "@/assets/apps/word-game/9.png";

import myPlantsImage1 from "@/assets/apps/my-plants/1.png";
import myPlantsImage2 from "@/assets/apps/my-plants/2.png";
import myPlantsImage3 from "@/assets/apps/my-plants/3.png";
import myPlantsImage4 from "@/assets/apps/my-plants/4.png";
import myPlantsImage5 from "@/assets/apps/my-plants/5.png";

import atlasOperationImage1 from "@/assets/apps/atlas-operation/1.png";
import atlasOperationImage2 from "@/assets/apps/atlas-operation/2.png";
import atlasOperationImage3 from "@/assets/apps/atlas-operation/3.png";
import atlasOperationImage4 from "@/assets/apps/atlas-operation/4.png";
import atlasOperationImage5 from "@/assets/apps/atlas-operation/5.png";

import atlasCustomerImage1 from "@/assets/apps/atlas-customer/1.png";
import atlasCustomerImage2 from "@/assets/apps/atlas-customer/2.png";
import atlasCustomerImage3 from "@/assets/apps/atlas-customer/3.png";
import atlasCustomerImage4 from "@/assets/apps/atlas-customer/4.png";
import atlasCustomerImage5 from "@/assets/apps/atlas-customer/5.png";
import atlasCustomerImage6 from "@/assets/apps/atlas-customer/6.png";
import atlasCustomerImage7 from "@/assets/apps/atlas-customer/7.png";
import atlasCustomerImage8 from "@/assets/apps/atlas-customer/8.png";
import atlasCustomerImage9 from "@/assets/apps/atlas-customer/9.png";

import damgaImage1 from "@/assets/apps/damga/1.png";
import damgaImage2 from "@/assets/apps/damga/2.png";
import damgaImage3 from "@/assets/apps/damga/3.png";
import damgaImage4 from "@/assets/apps/damga/4.png";
import damgaImage5 from "@/assets/apps/damga/5.png";
import damgaImage6 from "@/assets/apps/damga/6.png";
import damgaImage7 from "@/assets/apps/damga/7.png";

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
import atlasOperationLogo from "@/assets/apps/atlas-operation/atlas-operation-logo.png";
import tripInvoiceLogo from "@/assets/apps/trip-invoice/trip-invoice.png";
import atlasCustomerLogo from "@/assets/apps/atlas-customer/atlas-customer-logo.png";
import damgaLogo from "@/assets/apps/damga/damga-logo.png";

// VIDEOS
import koumathVideo from "@/assets/apps/koumath/koumath-video.mov";
import rnMapsVideo from "@/assets/apps/react-native-maps/rn-maps.webm";
import flightTicketVideo from "@/assets/apps/flight-ticket/flight-app-video.mp4";
import tripInvoiceVideo from "@/assets/apps/trip-invoice/trip_invoice-video.mov";

export type Technology =
  | "React"
  | "React Native"
  | "Reanimated"
  | "Gesture Handler"
  | "TypeScript"
  | "JavaScript"
  | "Python"
  | "React Native Skia"
  | "Expo"
  | "NativeWind"
  | "React Native Paper"
  | "Zustand"
  | "Jotai"
  | "React Native Maps"
  | "React Native Web"
  | "React Native Screens"
  | "MMKV";

export const allTechnologies: Technology[] = [
  "TypeScript",
  "JavaScript",
  "React",
  "React Native",
  "Python",
  "Reanimated",
  "Gesture Handler",
  "React Native Skia",
  "Expo",
  "NativeWind",
  "React Native Paper",
  "Zustand",
  "Jotai",
  "React Native Maps",
  "React Native Web",
  "React Native Screens",
  "MMKV",
];
export const allCategories: Category[] = ["Maps", "Booking", "Game", "Food", "Education", "Lifestyle"];

export const techToPackageName: Partial<Record<Technology, string>> = {
  TypeScript: "typescript",
  JavaScript: "javascript",
  "React Native": "react-native",
  Reanimated: "react-native-reanimated",
  "Gesture Handler": "react-native-gesture-handler",
  React: "react",
  Python: "python",
  "React Native Skia": "@shopify/react-native-skia",
  Expo: "expo",
  NativeWind: "nativewind",
  "React Native Paper": "react-native-paper",
  Zustand: "zustand",
  Jotai: "jotai",
  "React Native Maps": "react-native-maps",
  "React Native Web": "react-native-web",
  "React Native Screens": "react-native-screens",
};

export type Category = "Game" | "Maps" | "Booking" | "Food" | "Education" | "Lifestyle" | "SaaS";

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
    id: "damga",
    name: "Damga",
    description: "Digitalized loyality cards.",
    detailedDescription: "Damga is a digitalized loyality cards app that allows you to manage your loyality cards and points.",
    isEditorSelected: true,
    logoUrl: damgaLogo,
    baseTech: "React Native",
    technologies: ["React Native", "Expo", "TypeScript", "Gesture Handler", "Reanimated"],
    categories: ["Lifestyle"],
    screenshots: [
      { url: damgaImage1 },
      { url: damgaImage2 },
      { url: damgaImage3 },
      { url: damgaImage4 },
      { url: damgaImage5 },
      { url: damgaImage6 },
      { url: damgaImage7 },
    ],
  },
  {
    id: "atlas-customer",
    name: "Atlas",
    description: "For charter companies to manage their operations.",
    detailedDescription:
      "Sail Atlas Operations provides a comprehensive, mobile-friendly solution for yacht charter companies to manage their entire fleet operations. With an intuitive interface designed specifically for operational staff, maintain complete visibility and control of all aspects of your charter business from anywhere.",
    logoUrl: atlasCustomerLogo,
    baseTech: "React Native",
    isEditorSelected: true,
    screenshots: [
      { url: atlasCustomerImage1 },
      { url: atlasCustomerImage2 },
      { url: atlasCustomerImage3 },
      { url: atlasCustomerImage4 },
      { url: atlasCustomerImage5 },
      { url: atlasCustomerImage6 },
      { url: atlasCustomerImage7 },
      { url: atlasCustomerImage8 },
      { url: atlasCustomerImage9 },
    ],
    features: [
      "<b>Yacht Management</b> - Manage your yachts, crew, and bookings.",
      "<b>Fleet Management</b> - Manage your fleet of yachts.",
      "<b>Bookings</b> - Manage your bookings.",
      "<b>Invoices</b> - Manage your invoices.",
      "<b>Reports</b> - Generate reports.",
    ],
    technologies: ["React Native", "Expo", "JavaScript", "Zustand", "Gesture Handler", "Reanimated", "React Native Web", "MMKV"],
    categories: ["SaaS"],
    links: {
      appStore: "https://apps.apple.com/tr/app/sail-atlas/id6748818673?l=tr",
      playStore: "https://play.google.com/store/apps/details?id=com.sailatlas.customer&hl=en",
    },
  },
  {
    id: "atlas-operation",
    name: "Atlas Operation",
    description: "For charter companies to manage their operations.",
    detailedDescription:
      "Sail Atlas Operations provides a comprehensive, mobile-friendly solution for yacht charter companies to manage their entire fleet operations. With an intuitive interface designed specifically for operational staff, maintain complete visibility and control of all aspects of your charter business from anywhere.",
    logoUrl: atlasOperationLogo,
    baseTech: "React Native",
    isEditorSelected: true,
    screenshots: [
      { url: atlasOperationImage1 },
      { url: atlasOperationImage2 },
      { url: atlasOperationImage3 },
      { url: atlasOperationImage4 },
      { url: atlasOperationImage5 },
    ],
    features: [
      "<b>Yacht Management</b> - Manage your yachts, crew, and bookings.",
      "<b>Fleet Management</b> - Manage your fleet of yachts.",
      "<b>Bookings</b> - Manage your bookings.",
      "<b>Invoices</b> - Manage your invoices.",
      "<b>Reports</b> - Generate reports.",
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Zustand",
      "Gesture Handler",
      "Reanimated",
      "React Native Web",
      "React Native Screens",
    ],
    categories: ["SaaS"],
    links: {
      appStore: "https://apps.apple.com/us/app/atlas-operations-app/id6743802951",
            playStore: "https://play.google.com/store/apps/details?id=com.sailatlas.operation&hl=en",
    },
  },
  {
    id: "trip-invoice",
    name: "Trip Invoice",
    description: "Invoice generation and management app.",
    detailedDescription:
      "A comprehensive invoice generation and management application built with React Native. The app provides smooth animations and interactive features for creating, managing, and tracking invoices with a modern user interface.",
    logoUrl: tripInvoiceLogo,
    baseTech: "React Native",
    videoUrl: tripInvoiceVideo,
    screenshots: [],
    features: [
      "<b>Invoice Generation:</b> Create and manage invoices with ease",
      "<b>Smooth Animations:</b> Enhanced with Reanimated for fluid user experience",
      "<b>Interactive UI:</b> Built with React Native Skia for rich graphics",
      "<b>Modern Design:</b> Clean and intuitive interface",
    ],
    technologies: ["React Native", "React Native Skia", "Reanimated"],
    categories: ["SaaS"],
    links: {
      github: "https://github.com/kagantemizkan/trip-invoice",
    },
  },
  {
    id: "rn-maps",
    name: "Maps",
    description: "A map app built with React Native.",
    detailedDescription:
      "This project is a Google Maps clone that focuses on core navigation features. It provides step-by-step directions between locations with visual and voice guidance options. Users can choose different themes, including a black light theme, and select their preferred language for navigation instructions. The app also supports voice search for hands-free location queries.",
    logoUrl: rnMapsLogo,
    baseTech: "React Native",
    isEditorSelected: true,
    videoUrl: rnMapsVideo,
    screenshots: [
      { url: "https://github.com/kagantemizkan/mapsForBlinds/assets/46727689/64543788-bc8f-41dc-bc34-aaaae7ab022a" },
      { url: "https://github.com/kagantemizkan/RNmaps/assets/46727689/3db80b35-d9ff-4dea-ba6d-ae89acb4e1fb" },
      { url: rnMapsImage },
    ],
    features: [
      "<b>Turkish & English support</b>",
      "<b>Step-by-step directions</b>",
      "<b>Theme Selection</b> ",
      "<b>Voice search</b> ",
      "<b>Information about the places</b> ",
    ],
    technologies: ["React Native", "JavaScript", "Jotai", "React Native Paper", "Gesture Handler", "Reanimated"],
    categories: ["Maps"],
    links: { github: "https://github.com/kagantemizkan/RNmaps" },
  },
  {
    id: "koumath",
    name: "KOUmath",
    description: "AI math solver app.",
    detailedDescription:
      "This project is a Photomath inspired app that crops the selected area and send it to the backend that handels the all the logic for solving the math problem. It provides camera recognition to analyze handwritten mathematical equations and expressions, manual input capabilities, and interactive graphing features for comprehensive mathematical problem solving.",
    logoUrl: koumathLogo,
    baseTech: "React Native",
    videoUrl: koumathVideo,
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
    id: "bilokma",
    name: "Bi'lokma",
    description: "An application developed to prevent food waste.",
    detailedDescription:
      "This project is a React Native mobile application developed during the Google Developer Student Community Hackathon. It aims to reduce food waste by facilitating communication between bakeries and users who are interested in purchasing leftover items late at night.",
    logoUrl: bilokmaLogo,
    baseTech: "React Native",
    screenshots: [
      { url: "https://github.com/kagantemizkan/bilokma/assets/46727689/19b46d3f-bea8-4b58-9fa3-13c6694ac2e9" },
      { url: "https://github.com/kagantemizkan/bilokma/assets/46727689/870df9bd-1348-4d96-9fdd-f8dd7f51d62b" },
      { url: "https://github.com/kagantemizkan/bilokma/assets/46727689/4bc2206c-9635-4a62-9b14-8600693e9de2" },
      { url: "https://github.com/kagantemizkan/bilokma/assets/46727689/ee586ca1-7720-41a4-8931-fc0b1de5e52a" },
      { url: "https://github.com/kagantemizkan/bilokma/assets/46727689/bbdf7467-6df4-48d0-8668-10bc38b5c8f4" },
      { url: "https://github.com/kagantemizkan/bilokma/assets/46727689/339ee989-4552-40ea-b99b-a5ff08b8b95a" },
      { url: "https://github.com/kagantemizkan/bilokma/assets/46727689/ec424808-429f-4bd7-9289-c06bb55247ce" },
      { url: "https://github.com/kagantemizkan/bilokma/assets/46727689/7747c1ad-5ab5-402b-af14-a7382762ab67" },
      { url: "https://github.com/kagantemizkan/bilokma/assets/46727689/c693a304-eafd-400f-9323-d418ac290fec" },
    ],
    features: [
      "User authentication",
      "Real-time notifications for available leftover items",
      "Geolocation services to view bakery locations",
      "Search functionality for specific items",
    ],
    technologies: ["React Native", "Expo", "NativeWind", "JavaScript"],
    categories: ["Food"],
    links: { github: "https://github.com/kagantemizkan/bilokma" },
  },
  {
    id: "flight-ticket",
    name: "Flight Ticket",
    description: "Flight ticket booking app.",
    detailedDescription: "A basic flight ticket app that generates random tickets and removes them.",
    logoUrl: flightTicketLogo,
    baseTech: "React Native",
    videoUrl: flightTicketVideo,
    screenshots: [{ url: flightTicketImage1 }, { url: flightTicketImage2 }],
    features: [
      "<b>Smooth Animations:</b> Enhanced with Reanimated for a fluid user experience.",
      "<b>Dynamic Ticket View:</b> Utilizes react-native-svg for an interactive ticket display.",
    ],
    technologies: ["React Native", "Expo", "Gesture Handler", "Reanimated", "JavaScript"],
    categories: ["Booking"],
    links: { github: "https://github.com/kagantemizkan/flightTicketApp" },
  },
  {
    id: "word-game",
    name: "Word Game",
    description: "Word game app.",
    detailedDescription:
      "This project is a tutorial from <a href='https://www.youtube.com/watch?v=pTonpjmKtiE&ab_channel=SimonGrimm' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>Simon Grimm's YouTube channel</a>. Go check him out! <br /> <br /> Additionally, I added a few features to the original project like localizations.",
    logoUrl: wordGameLogo,
    baseTech: "React Native",
    screenshots: [
      { url: wordGameImage1 },
      { url: wordGameImage2 },
      { url: wordGameImage3 },
      { url: wordGameImage4 },
      { url: wordGameImage5 },
      { url: wordGameImage6 },
      { url: wordGameImage7 },
      { url: wordGameImage8 },
      { url: wordGameImage9 },
    ],
    features: ["English & Turkish Support", "Custom Keyboard"],
    technologies: ["React Native", "TypeScript", "Reanimated", "Gesture Handler", "Expo"],
    categories: ["Game"],
    links: { github: "https://github.com/kagantemizkan/worldle" },
  },
  {
    id: "flappy-bird",
    name: "Flappy Bird",
    description: "Bird game app.",
    detailedDescription:
      "This project is a tutorial from <a href='https://www.youtube.com/watch?v=9F4aICEisVI' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>notJust․dev's YouTube channel</a>. Go check him out! <br /> <br /> Additionally, I added a few features to the original project like score tracking, night and day cycle, and sound effects.",
    logoUrl: rnBirdLogo,
    baseTech: "React Native",
    videoUrl: "https://github.com/kagantemizkan/RNflappyBird/assets/46727689/07ccfb07-f06b-432c-b083-02cca6d238d2",
    screenshots: [
      { url: "https://github.com/kagantemizkan/RNflappyBird/assets/46727689/1479894d-02eb-4f84-9851-3f3758e41d38" },
      { url: "https://github.com/kagantemizkan/RNflappyBird/assets/46727689/75a7d35b-e761-421c-8f0e-6f8012dbc0eb" },
    ],
    features: [
      "<b>Day-Night Cycle: </b>The background switches between day and night every 3 points.",
      "<b>Sound Effects: </b>Includes wing flapping, hitting, and point scoring sounds.",
      "<b>Collision Detection: </b>The game ends if the bird hits the pipes or the ground or pipes.",
    ],
    technologies: ["React Native", "React Native Skia", "Reanimated", "Gesture Handler", "Expo", "JavaScript"],
    categories: ["Game"],
    links: { github: "https://github.com/kagantemizkan/RNflappyBird" },
  },
  {
    id: "my-plants",
    name: "My Plants",
    description: "Auto plant watering & schedule app.",
    detailedDescription:
      "The app is connected to a aurdino that controls the water pump and the lights with moisture sensors. It also has a schedule feature that allows you to set a time to water your plants.",
    logoUrl: myPlantsLogo,
    baseTech: "React Native",
    screenshots: [
      { url: myPlantsImage1 },
      { url: myPlantsImage2 },
      { url: myPlantsImage3 },
      { url: myPlantsImage4 },
      { url: myPlantsImage5 },
    ],
    features: ["Auto Plant Watering", "Schedule Feature", "Moisture Sensor Integration"],
    technologies: ["React Native", "Expo", "JavaScript"],
    categories: ["Lifestyle"],
    links: { github: "https://github.com/kagantemizkan/MyPlants" },
  },
  {
    id: "number-match",
    name: "Number Match",
    description: "Number match game app.",
    detailedDescription:
      "This is a simple number matching game in Python. The goal of the game is to find adjacent numbers on the board and match them. The higher the value of the matched numbers, the more points the player wins.",
    logoUrl: numberMatchLogo,
    baseTech: "Python",
    screenshots: [
      { url: "https://github.com/kagantemizkan/python-number-matching/assets/46727689/99b298c0-f60a-4a91-9fb9-53910a315615" },
      { url: "https://github.com/kagantemizkan/python-number-matching/assets/46727689/fe724e82-313b-4fbc-a356-cf53715b7e04" },
      { url: "https://github.com/kagantemizkan/python-number-matching/assets/46727689/b05b74f2-76d5-403d-a330-39c8fa281b81" },
      { url: "https://github.com/kagantemizkan/python-number-matching/assets/46727689/e34738d7-3300-42d4-a1d1-9e8030418e8f" },
    ],
    features: ["Number Matching", "Score Tracking", "Colored Console"],
    technologies: ["Python"],
    categories: ["Game"],
    links: { github: "https://github.com/kagantemizkan/python-number-matching" },
  },
  {
    id: "umuttepe-tourism",
    name: "Umuttepe Tourism",
    description: "Umuttepe Tourism app.",
    detailedDescription:
      "A bus ticket booking app. Users can book the tickets from the bus view. <br /> <br /> <span class='text-sm text-gray-500'>Please visit GitHub repo for the screenshots.</span>",
    logoUrl: umuttepeTourismLogo,
    baseTech: "React",
    features: ["View Bus Seats", "Book Tickets", "View Bus Schedule"],
    technologies: ["React", "JavaScript"],
    categories: ["Booking"],
    links: { github: "https://github.com/kagantemizkan/kocaeli-turizm" },
  },
  {
    id: "kou-syllabus",
    name: "KOU Syllabus",
    description: "KOU Syllabus app.",
    detailedDescription:
      "A complate lecturer portal for Kocaeli University. <br /> <br /> <span class='text-sm text-gray-500'>Please visit GitHub repo for the screenshots.</span>",
    logoUrl: kouSyllabusLogo,
    baseTech: "React",
    features: ["Lecturer Portal", "Course Management", "Attendance Management"],
    technologies: ["React", "JavaScript"],
    categories: ["Education"],
    links: { github: "https://github.com/kagantemizkan/kou-syllabus" },
  },
];
