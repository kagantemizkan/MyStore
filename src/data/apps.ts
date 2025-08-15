export type Technology =
	| "React"
	| "React Native"
	| "Reanimated"
	| "Gesture Handler"
	| "TypeScript"

export type AppItem = {
	id: string
	name: string
	description: string
	imageUrl?: string
	technologies: Technology[]
	links?: { appStore?: string; playStore?: string; web?: string; github?: string }
}

export const apps: AppItem[] = [
	{
		id: "1",
		name: "Budget Buddy",
		description: "Track expenses with delightful charts.",
		technologies: ["React Native", "Reanimated", "Gesture Handler", "TypeScript"],
		links: { github: "#" },
	},
	{
		id: "2",
		name: "Focus Flow",
		description: "Pomodoro timer with smooth interactions.",
		technologies: ["React Native", "Reanimated", "TypeScript"],
	},
	{
		id: "3",
		name: "Dev Notes",
		description: "Markdown notes with search and tags.",
		technologies: ["React", "TypeScript"],
		links: { web: "#" },
	},
]

export const allTechnologies: Technology[] = [
	"React",
	"React Native",
	"Reanimated",
	"Gesture Handler",
	"TypeScript",
]