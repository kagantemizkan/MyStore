import { useParams, Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { apps } from "@/data/apps";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FiArrowLeft } from "react-icons/fi";
import { FaApple, FaGithub, FaGoogle } from "react-icons/fa";

import Gallery, { type GalleryItem } from "@/components/Gallery";

export default function AppDetails() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const app = apps.find((a) => a.id === id);

  // Transform app data into gallery items
  const galleryItems: GalleryItem[] = [];

  // Add video if it exists
  if (app?.videoUrl) {
    galleryItems.push({
      type: "video",
      url: app.videoUrl,
      alt: `${app.name} video`,
    });
  }

  // Add screenshots
  if (app?.screenshots) {
    app.screenshots.forEach((screenshot, idx) => {
      galleryItems.push({
        type: "image",
        url: screenshot.url,
        alt: screenshot.alt ?? `${app.name} screenshot ${idx + 1}`,
      });
    });
  }

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
              <FaGithub className="w-5 h-5 mr-2" />
              {t("viewOnGithub")}
            </a>
          </Button>
        )}
        {app.links?.appStore && (
          <Button asChild>
            <a href={app.links.appStore} target="_blank" rel="noopener noreferrer">
              <FaApple className="w-5 h-5 mr-2" />
              {t("viewOnAppStore")}
            </a>
          </Button>
        )}
                {app.links?.playStore && (
          <Button asChild>
            <a href={app.links.playStore} target="_blank" rel="noopener noreferrer">
              <FaGoogle className="w-5 h-5 mr-2" />
              {View on Play Store}
            </a>
          </Button>
        )}
      </div>

      {app.screenshots && (
        <Card>
          <CardHeader>
            <CardTitle>{t("screenshots")}</CardTitle>
          </CardHeader>
          <CardContent>
            <Gallery items={galleryItems} />
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Technologies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {app.technologies?.map((t) => (
              <Badge key={t} variant="secondary">
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>About</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: app.detailedDescription }} />
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
