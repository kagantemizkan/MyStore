import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import AppStoreLogo from "@/components/AppStoreLogo";
import DiamondAppLogos from "@/components/DiamondAppLogos";
import AppBentoGrid from "@/components/AppBentoGrid";

export default function Landing() {
  const { t } = useTranslation();

  return (
    <div className="space-y-16">
      <DiamondAppLogos />

      <section className="flex flex-col items-center justify-center text-center space-y-5">
        <div className="flex flex-col items-center justify-center">
          <AppStoreLogo />
          <h1 className="text-xl tracking-wide mt-2">My Apps</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t("heroSubtitle")}</p>
        <div className="flex items-center justify-center gap-3">
          <Button asChild>
            <Link to="/apps">{t("exploreApps")}</Link>
          </Button>
        </div>
      </section>

      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Featured Apps</h2>
          <p className="text-muted-foreground">Explore my latest projects and applications</p>
        </div>
        <AppBentoGrid />
      </section>
    </div>
  );
}
