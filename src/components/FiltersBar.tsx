import { useTranslation } from "react-i18next"

export function FiltersBar({ children }: { children: React.ReactNode }) {
	const { t } = useTranslation()
	return (
		<div className="flex items-center justify-between">
			<h2 className="text-lg font-semibold">{t('filters')}</h2>
			<div className="flex items-center gap-2">{children}</div>
		</div>
	)
}