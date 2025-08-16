import { useTranslation } from "react-i18next"
import { allCategories, allTechnologies, type Category, type Technology } from "@/data/apps"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

type Props = {
	selectedCategories: Set<Category>
	onToggleCategory: (c: Category) => void
	selectedTech: Set<Technology>
	onToggleTech: (t: Technology) => void
	onClearAll: () => void
}

export function SidebarFilters({ selectedCategories, onToggleCategory, selectedTech, onToggleTech, onClearAll }: Props) {
	const { t } = useTranslation()

	return (
		<aside className="rounded-lg border p-4 lg:sticky lg:top-20 h-fit">
			<div className="mb-4 flex items-center justify-between">
				<h2 className="text-lg font-semibold">{t("filters")}</h2>
				<Button variant="secondary" size="sm" onClick={onClearAll}>{t("clearFilters")}</Button>
			</div>

			<div className="space-y-4">
				<section>
					<h3 className="text-sm font-medium text-muted-foreground mb-2">{t("categories")}</h3>
					<ul className="space-y-2">
						{allCategories.map((c) => {
							const checked = selectedCategories.has(c)
							return (
								<li key={c} className="flex items-center gap-2">
									<input
										id={`cat-${c}`}
										type="checkbox"
										checked={checked}
										onChange={() => onToggleCategory(c)}
										className="h-4 w-4 accent-foreground"
									/>
									<Label htmlFor={`cat-${c}`} className="text-sm cursor-pointer">{c}</Label>
								</li>
							)
						})}
					</ul>
				</section>

				<section>
					<h3 className="text-sm font-medium text-muted-foreground mb-2">{t("technologies")}</h3>
					<ul className="space-y-2">
						{allTechnologies.map((tech) => {
							const checked = selectedTech.has(tech)
							return (
								<li key={tech} className="flex items-center gap-2">
									<input
										id={`tech-${tech}`}
										type="checkbox"
										checked={checked}
										onChange={() => onToggleTech(tech)}
										className="h-4 w-4 accent-foreground"
									/>
									<Label htmlFor={`tech-${tech}`} className="text-sm cursor-pointer">{tech}</Label>
								</li>
							)
						})}
					</ul>
				</section>
			</div>
		</aside>
	)
}