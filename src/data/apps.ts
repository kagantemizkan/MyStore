export type Technology =
	| "React"
	| "React Native"
	| "Reanimated"
	| "Gesture Handler"
	| "TypeScript"

export type Screenshot = {
	url: string
	alt?: string
}

export type AppItem = {
	id: string
	name: string
	description: string
	detailedDescription: string
	imageUrl?: string
	logoUrl?: string
	screenshots?: Screenshot[]
	features?: string[]
	technologies: Technology[]
	links?: { appStore?: string; playStore?: string; web?: string; github?: string }
}

export const apps: AppItem[] = [
	{
		id: "1",
		name: "Budget Buddy",
		description: "Track expenses with delightful charts.",
		detailedDescription:
			"Built with React Native, Reanimated, and Gesture Handler. Focused on smooth interactions, offline-first data, and clear visualizations.",
		logoUrl: "https://via.placeholder.com/64x64?text=BB",
		screenshots: [
			{ url: "https://via.placeholder.com/800x1600?text=Budget+1", alt: "Budget list" },
			{ url: "https://via.placeholder.com/800x1600?text=Budget+2", alt: "Charts" },
			{ url: "https://via.placeholder.com/800x1600?text=Budget+3", alt: "Details" },
		],
		features: [
			"Offline-first storage",
			"Interactive charts",
			"Haptic feedback and gestures",
		],
		technologies: ["React Native", "Reanimated", "Gesture Handler", "TypeScript"],
		links: { github: "#" },
	},
	{
		id: "2",
		name: "Focus Flow",
		description: "Pomodoro timer with smooth interactions.",
		detailedDescription:
			"A minimalist productivity timer with focus sessions and breaks, animations handled by Reanimated.",
		logoUrl: "https://via.placeholder.com/64x64?text=FF",
		screenshots: [
			{ url: "https://via.placeholder.com/800x1600?text=Focus+1" },
			{ url: "https://via.placeholder.com/800x1600?text=Focus+2" },
		],
		features: ["Session history", "Custom durations", "Animations"],
		technologies: ["React Native", "Reanimated", "TypeScript"],
	},
	{
		id: "3",
		name: "Dev Notes",
		description: "Markdown notes with search and tags.",
		detailedDescription:
			"A web note-taking app built with React and TypeScript. Supports markdown preview and fast search.",
		logoUrl: "https://via.placeholder.com/64x64?text=DN",
		screenshots: [
			{ url: "https://via.placeholder.com/1200x800?text=Notes+1" },
			{ url: "https://via.placeholder.com/1200x800?text=Notes+2" },
		],
		features: ["Markdown preview", "Tag filtering", "Keyboard shortcuts"],
		technologies: ["React", "TypeScript"],
		links: { web: "#", github: "#" },
	},
]

export const allTechnologies: Technology[] = [
	"React",
	"React Native",
	"Reanimated",
	"Gesture Handler",
	"TypeScript",
]