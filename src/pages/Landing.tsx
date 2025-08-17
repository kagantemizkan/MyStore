import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import AppStoreLogo from "@/components/AppStoreLogo";
import { apps } from "@/data/apps";
import { useGitHubStats } from "@/hooks/useGitHubStats";
import { MdArrowOutward } from "react-icons/md";
import { AnimatedCounter } from "@/components/AnimatedCounter";

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
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl border bg-card/60 py-16 md:py-24">
        {/* Animated background orbs */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-gradient-to-br from-primary/25 to-accent/25 blur-3xl opacity-60 animate-float" />
        <div className="pointer-events-none absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl opacity-60 animate-float" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto mb-6 inline-flex items-center justify-center rounded-xl bg-background/70 px-4 py-2 shadow-sm backdrop-blur animate-fade-in">
            <AppStoreLogo />
          </div>
          <h1 className="mx-auto max-w-3xl bg-gradient-to-r from-primary to-foreground/70 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl animate-fade-in-up">
            My Apps
          </h1>
          <p
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl animate-fade-in-up"
            style={{ animationDelay: "120ms" }}
          >
            {t("heroSubtitle")}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 animate-fade-in-up" style={{ animationDelay: "220ms" }}>
            <Button asChild>
              <Link to="/apps">{t("exploreApps")}</Link>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/kagantemizkan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1"
              >
                GitHub Profile
                <MdArrowOutward className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Statistics */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl font-bold animate-fade-in-up">General Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div
            className="space-y-2 rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in-up"
            style={{ animationDelay: "50ms" }}
          >
            <div className="text-4xl font-bold text-primary">{<AnimatedCounter to={portfolioStats.totalApps} />}</div>
            <div className="text-muted-foreground font-medium">Apps Built</div>
          </div>
          <div
            className="space-y-2 rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in-up"
            style={{ animationDelay: "120ms" }}
          >
            <div className="text-4xl font-bold text-primary">
              {gitHubStats.loading ? "..." : <AnimatedCounter to={portfolioStats.githubRepos} />}
            </div>
            <div className="text-muted-foreground font-medium">Open Source GitHub Repos</div>
          </div>
          <div
            className="space-y-2 rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in-up"
            style={{ animationDelay: "190ms" }}
          >
            <div className="text-4xl font-bold text-primary">
              {gitHubStats.loading ? "..." : <AnimatedCounter to={portfolioStats.contributions} formatter={(v) => v.toLocaleString()} />}
            </div>
            <div className="text-muted-foreground font-medium">Contributions</div>
            <div className="text-xs text-muted-foreground">Last year</div>
          </div>
          <div
            className="space-y-2 rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in-up"
            style={{ animationDelay: "260ms" }}
          >
            <div className="text-4xl font-bold text-primary">{<AnimatedCounter to={portfolioStats.technologies.length} />}</div>
            <div className="text-muted-foreground font-medium">Technologies</div>
          </div>
        </div>
        {gitHubStats.error && <p className="text-sm text-muted-foreground italic">Using cached GitHub data - {gitHubStats.error}</p>}
      </section>

      {/* Technology Stack */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl font-bold animate-fade-in-up">Technology Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {techStack.map((tech, idx) => (
            <div
              key={tech.name}
              className="flex flex-col items-center space-y-3 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md animate-fade-in-up"
              style={{ animationDelay: `${80 + idx * 60}ms` }}
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
            <h2 className="text-3xl font-bold mb-2 animate-fade-in-up">Featured Projects</h2>
            <p className="text-muted-foreground animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              Highlighted apps showcasing different technologies and use cases
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {featuredApps.map((app, idx) => (
              <div
                key={app.id}
                className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${80 + idx * 80}ms` }}
              >
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

                {/* subtle gradient sheen on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute -inset-x-10 -top-1/2 h-full translate-y-6 rotate-6 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
