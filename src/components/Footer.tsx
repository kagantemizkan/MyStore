import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useTheme } from "@/theme";

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="mt-auto border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-xs text-muted-foreground mt-1">Kağan Temizkan</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/ka%C4%9Fan-temizkan-761692175/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-muted hover:bg-accent transition-colors duration-200 group"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-5 h-5 text-muted-foreground group-hover:text-[#0A66C2] transition-colors duration-200" />
              </a>

              <a
                href="https://github.com/kagantemizkan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-muted hover:bg-accent transition-colors duration-200 group"
                aria-label="GitHub Profile"
              >
                <FaGithub
                  className={`w-5 h-5 transition-colors duration-200 ${
                    theme === "dark" ? "text-muted-foreground group-hover:text-white" : "text-muted-foreground group-hover:text-black"
                  }`}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
