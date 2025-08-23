import ToteBagIcon from "@/assets/logo.png";
import ToteBagIconDark from "@/assets/logoBlack.png";
import { useTheme } from "@/theme";

export default function AppStoreLogo({ size = 112 }: { size?: number }) {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  // Use inline styles for dynamic sizing to avoid Tailwind JIT issues
  const logoStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <div className="relative z-10 flex items-center justify-center gap-3 bg-gradient-to-b from-transparent via-slate-800/5 to-transparent backdrop-blur-sm">
      <img src={isDarkMode ? ToteBagIconDark : ToteBagIcon} alt="App Store Logo" style={logoStyle} className="object-contain" />
    </div>
  );
}
