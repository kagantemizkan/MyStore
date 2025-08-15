import React from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLinkIcon, GitHubIcon } from '@/components/icons'
import type { PortfolioApp } from '@/types/portfolio'
import { cn } from '@/lib/utils'

interface AppCardProps {
  app: PortfolioApp
  variant?: 'grid' | 'list'
  size?: 'small' | 'medium' | 'large'
  className?: string
}

export const AppCard: React.FC<AppCardProps> = ({
  app,
  variant = 'grid',
  size = 'medium',
  className
}) => {
  const { t } = useTranslation()

  const cardClasses = cn(
    "group transition-all duration-200 hover:shadow-lg hover:-translate-y-1",
    variant === 'list' && "flex flex-row",
    className
  )

  const iconClasses = cn(
    "rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center",
    size === 'small' && "h-12 w-12",
    size === 'medium' && "h-16 w-16",
    size === 'large' && "h-20 w-20"
  )

  if (variant === 'list') {
    return (
      <Card className={cardClasses}>
        <div className="flex w-full">
          <div className="p-4">
            <div className={iconClasses} style={{ backgroundColor: app.color }}>
              <span className="text-white font-bold text-lg">
                {app.title.charAt(0)}
              </span>
            </div>
          </div>
          
          <div className="flex-1 p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-lg leading-none">{app.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {t(`categories.${app.category}`)}
                </p>
              </div>
              {app.featured && (
                <Badge variant="secondary" className="ml-2">
                  Featured
                </Badge>
              )}
            </div>
            
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {app.description}
            </p>
            
            <div className="flex flex-wrap gap-1 mb-3">
              {app.technologies.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {t(`technologies.${tech}`)}
                </Badge>
              ))}
              {app.technologies.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{app.technologies.length - 4}
                </Badge>
              )}
            </div>
            
            <div className="flex gap-2">
              {app.demoUrl && (
                <Button size="sm" variant="default" asChild>
                  <a href={app.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon size={14} className="mr-1" />
                    {t('app.liveDemo')}
                  </a>
                </Button>
              )}
              {app.sourceUrl && (
                <Button size="sm" variant="outline" asChild>
                  <a href={app.sourceUrl} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon size={14} className="mr-1" />
                    {t('app.sourceCode')}
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className={cardClasses}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className={iconClasses} style={{ backgroundColor: app.color }}>
            <span className="text-white font-bold text-xl">
              {app.title.charAt(0)}
            </span>
          </div>
          {app.featured && (
            <Badge variant="secondary">
              Featured
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="mb-3">
          <h3 className="font-semibold text-lg leading-none mb-1">{app.title}</h3>
          <p className="text-sm text-muted-foreground">
            {t(`categories.${app.category}`)}
          </p>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {app.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {app.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {t(`technologies.${tech}`)}
            </Badge>
          ))}
          {app.technologies.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{app.technologies.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-0 gap-2">
        {app.demoUrl && (
          <Button size="sm" className="flex-1" asChild>
            <a href={app.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLinkIcon size={14} className="mr-1" />
              {t('app.liveDemo')}
            </a>
          </Button>
        )}
        {app.sourceUrl && (
          <Button size="sm" variant="outline" className="flex-1" asChild>
            <a href={app.sourceUrl} target="_blank" rel="noopener noreferrer">
              <GitHubIcon size={14} className="mr-1" />
              Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}