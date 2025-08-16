import { useParams, Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { apps } from "@/data/apps";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FiArrowLeft } from "react-icons/fi";
import MiniVideoPlayer from "@/components/MiniVideoPlayer";

export default function AppDetails() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const app = apps.find((a) => a.id === id);

  if (!app) {
    return (
      <div className="space-y-6">
        <RouterLink to="/apps" className="text-sm text-muted-foreground hover:underline">
          {t("back")}
        </RouterLink>
        <p>{t("appNotFound")}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <RouterLink to="/apps" className="text-sm text-muted-foreground hover:underline flex items-center gap-2">
        <FiArrowLeft className="w-4 h-4" />
        {t("back")}
      </RouterLink>
      <div className="flex items-center gap-4 justify-between">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-xl bg-muted flex items-center justify-center overflow-hidden">
            <img src={app.logoUrl} alt={app.name + " logo"} className="h-full w-full object-contain" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">{app.name}</h2>
            <p className="text-muted-foreground">{app.description}</p>
          </div>
        </div>

        {app.links?.github && (
          <Button asChild>
            <a href={app.links.github} target="_blank" rel="noopener noreferrer">
              {t("viewOnGithub")}
            </a>
          </Button>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t("screenshots")}</CardTitle>
        </CardHeader>
        <CardContent>
          {app.screenshots && app.screenshots.length > 0 ? (
            <div className="flex gap-4 overflow-x-auto pb-4">
              {/* {app.videoUrl && (
                <div className="flex-shrink-0 w-48">
                  <MiniVideoPlayer src={app.videoUrl} className="w-full h-full" />
                </div>
              )} */}

              {app.screenshots.map((s, idx) => (
                <div key={idx} className="flex-shrink-0 overflow-hidden rounded-lg w-48">
                  <img src={s.url} alt={s.alt ?? `${app.name} screenshot ${idx + 1}`} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">—</p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>About</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">{app.detailedDescription}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("features")}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            {app.features?.map((f, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: f }} />
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
