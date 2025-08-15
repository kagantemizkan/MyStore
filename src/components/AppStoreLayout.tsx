import React, { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { FilterBar } from '@/components/FilterBar'
import { AppCard } from '@/components/AppCard'
import { GridIcon, ListIcon } from '@/components/icons'
import type { PortfolioApp, FilterState, ViewMode } from '@/types/portfolio'
import { cn } from '@/lib/utils'

interface AppStoreLayoutProps {
  apps: PortfolioApp[]
  className?: string
}

export const AppStoreLayout: React.FC<AppStoreLayoutProps> = ({
  apps,
  className
}) => {
  const { t } = useTranslation()
  
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    technologies: [],
    categories: []
  })
  
  const [viewMode, setViewMode] = useState<ViewMode>({
    type: 'grid',
    size: 'medium'
  })

  // Filter apps based on current filters
  const filteredApps = useMemo(() => {
    return apps.filter(app => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase()
        const matchesSearch = 
          app.title.toLowerCase().includes(searchLower) ||
          app.description.toLowerCase().includes(searchLower) ||
          app.technologies.some(tech => 
            t(`technologies.${tech}`).toLowerCase().includes(searchLower)
          )
        if (!matchesSearch) return false
      }

      // Technology filter
      if (filters.technologies.length > 0) {
        const hasMatchingTech = filters.technologies.some(tech => 
          app.technologies.includes(tech)
        )
        if (!hasMatchingTech) return false
      }

      // Category filter
      if (filters.categories.length > 0) {
        if (!filters.categories.includes(app.category)) return false
      }

      return true
    })
  }, [apps, filters, t])

  // Sort apps - featured first, then by date
  const sortedApps = useMemo(() => {
    return [...filteredApps].sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    })
  }, [filteredApps])

  const gridClasses = cn(
    "grid gap-6 w-full",
    viewMode.type === 'grid' && {
      'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4': viewMode.size === 'small',
      'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3': viewMode.size === 'medium',
      'grid-cols-1 sm:grid-cols-2': viewMode.size === 'large'
    },
    viewMode.type === 'list' && 'grid-cols-1'
  )

  return (
    <div className={cn("w-full space-y-6", className)}>
      {/* Hero Section */}
      <div className="text-center py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">{t('hero.title')}</h1>
        <p className="text-xl text-muted-foreground mb-2">{t('hero.subtitle')}</p>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t('hero.description')}
        </p>
      </div>

      {/* Filter Bar */}
      <FilterBar
        filters={filters}
        onFiltersChange={setFilters}
        className="max-w-4xl mx-auto px-4"
      />

      {/* View Controls and Results */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              {sortedApps.length} {sortedApps.length === 1 ? 'app' : 'apps'}
              {filters.search || filters.technologies.length > 0 || filters.categories.length > 0 
                ? ` found` : ''}
            </p>
            
            {/* Featured apps indicator */}
            {sortedApps.some(app => app.featured) && (
              <div className="hidden sm:flex items-center gap-2">
                <div className="h-2 w-2 bg-primary rounded-full" />
                <span className="text-sm text-muted-foreground">Featured apps</span>
              </div>
            )}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode.type === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode({ ...viewMode, type: 'grid' })}
              className="h-8 w-8 p-0"
            >
              <GridIcon size={16} />
              <span className="sr-only">Grid view</span>
            </Button>
            <Button
              variant={viewMode.type === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode({ ...viewMode, type: 'list' })}
              className="h-8 w-8 p-0"
            >
              <ListIcon size={16} />
              <span className="sr-only">List view</span>
            </Button>
          </div>
        </div>

        {/* Apps Grid/List */}
        {sortedApps.length > 0 ? (
          <div className={gridClasses}>
            {sortedApps.map((app) => (
              <AppCard
                key={app.id}
                app={app}
                variant={viewMode.type}
                size={viewMode.size}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="h-24 w-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="h-8 w-8 bg-muted-foreground/20 rounded" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No apps found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your filters or search terms
            </p>
            <Button 
              variant="outline" 
              onClick={() => setFilters({ search: '', technologies: [], categories: [] })}
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}