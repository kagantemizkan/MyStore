export type IconName =
  | "react"
  | "react-native"
  | "reanimated"
  | "gesture-handler"
  | "typescript"
  | "vite"
  | "tailwind"
  | "default";

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <div className={className} aria-hidden data-icon-name={name}>
      {/* Icon placeholder for: {name}. Replace this with your chosen icon later. */}
    </div>
  );
}