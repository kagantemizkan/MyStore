import { allTechnologies, type Technology } from "@/data/apps"
import { Badge } from "@/components/ui/badge"

type Props = {
	selected: Set<Technology>
	onToggle: (t: Technology) => void
}

export function TechFilter({ selected, onToggle }: Props) {
	return (
		<div className="flex flex-wrap gap-2" role="group" aria-label="Technology filters">
			<button
				onClick={() => {
					// Use a sentinel value to clear
					selected.forEach(() => {})
			}}
				className="sr-only"
			/>
			{allTechnologies.map((tech) => {
				const isActive = selected.has(tech)
				return (
					<button
						key={tech}
						onClick={() => onToggle(tech)}
						aria-pressed={isActive}
						className="outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full"
					>
						<Badge variant={isActive ? "default" : "secondary"}>{tech}</Badge>
					</button>
				)
			})}
		</div>
	)
}