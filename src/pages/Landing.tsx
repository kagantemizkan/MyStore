import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import AppStoreLogo from "@/components/AppStoreLogo";
import { apps } from "@/data/apps";
import { useGitHubStats } from "@/hooks/useGitHubStats";
import { MdArrowOutward } from "react-icons/md";

// Tech icons imports
import ReactNativeLogo from "@/assets/techs/react-native.png";
import PythonLogo from "@/assets/techs/python.png";
import TypeScriptLogo from "@/assets/techs/typescript.svg";
import JavaScriptLogo from "@/assets/techs/javascript.png";

export default function Landing() {
  const { t } = useTranslation();
  const gitHubStats = useGitHubStats();

  // Get featured apps (editor selected)
  const featuredApps = apps.filter((app) => app.isEditorSelected).slice(0, 3);

  // Portfolio statistics combining local data with GitHub data
  const portfolioStats = {
    totalApps: apps.length,
    githubRepos: gitHubStats.repositories,
    contributions: gitHubStats.contributions,
    technologies: ["React Native", "React", "Python", "TypeScript"],
  };

  const techStack = [
    { name: "React Native", logo: ReactNativeLogo, count: apps.filter((app) => app.technologies.includes("React Native")).length },
    { name: "React", logo: ReactNativeLogo, count: apps.filter((app) => app.technologies.includes("React")).length },
    { name: "Python", logo: PythonLogo, count: apps.filter((app) => app.technologies.includes("Python")).length },
    { name: "TypeScript", logo: TypeScriptLogo, count: apps.filter((app) => app.technologies.includes("TypeScript")).length },
    { name: "JavaScript", logo: JavaScriptLogo, count: apps.filter((app) => app.technologies.includes("JavaScript")).length },
  ].filter((tech) => tech.count > 0);

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center space-y-5">
        <div className="flex flex-col items-center justify-center">
          <AppStoreLogo />
          <h1 className="text-xl tracking-wide mt-2">My Apps</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t("heroSubtitle")}</p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Button asChild>
            <Link to="/apps">{t("exploreApps")}</Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/kagantemizkan" target="_blank" rel="noopener noreferrer">
              GitHub Profile
            </a>
          </Button>
        </div>
      </section>

      {/* Portfolio Statistics */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl font-bold">General Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">{portfolioStats.totalApps}</div>
            <div className="text-muted-foreground font-medium">Apps Built</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">{gitHubStats.loading ? "..." : portfolioStats.githubRepos}</div>
            <div className="text-muted-foreground font-medium">Open Source GitHub Repos</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">
              {gitHubStats.loading ? "..." : portfolioStats.contributions.toLocaleString()}
            </div>
            <div className="text-muted-foreground font-medium">Contributions</div>
            <div className="text-xs text-muted-foreground">Last year</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">{portfolioStats.technologies.length}</div>
            <div className="text-muted-foreground font-medium">Technologies</div>
          </div>
        </div>
        {gitHubStats.error && <p className="text-sm text-muted-foreground italic">Using cached GitHub data - {gitHubStats.error}</p>}
      </section>

      {/* Technology Stack */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl font-bold">Technology Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center space-y-3 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
            >
              <img src={tech.logo} alt={tech.name} className="w-12 h-12 object-contain" />
              <div className="text-center">
                <div className="font-semibold text-sm">{tech.name}</div>
                <div className="text-xs text-muted-foreground">{tech.count} projects</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Apps */}
      {featuredApps.length > 0 && (
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
            <p className="text-muted-foreground">Highlighted apps showcasing different technologies and use cases</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {featuredApps.map((app) => (
              <div key={app.id} className="group border rounded-xl p-6 bg-card hover:bg-accent/50 transition-all duration-300">
                <div className="flex items-start space-x-4 mb-4">
                  {app.logoUrl && (
                    <img src={app.logoUrl} alt={`${app.name} logo`} className="w-12 h-12 rounded-lg object-contain flex-shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{app.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{app.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {app.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                {app.links?.github && (
                  <div className="flex items-center justify-end">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={app.links.github} target="_blank" rel="noopener noreferrer" className="text-xs flex items-center gap-1">
                        GitHub
                        <MdArrowOutward className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
