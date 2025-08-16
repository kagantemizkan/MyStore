import { cn } from "@/lib/utils";

export function BentoGrid({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<div
			className={cn(
				"grid gap-6",
				"grid-cols-2",
				"sm:grid-cols-6",
				className
			)}
		>
			{children}
		</div>
	);
}

export function BentoItem({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<div
			className={cn(
				"group relative overflow-hidden rounded-xl border bg-card",
				"shadow-sm hover:shadow-md transition-all",
				className
			)}
		>
			{children}
		</div>
	);
}