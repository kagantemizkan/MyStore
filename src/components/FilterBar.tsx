import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { SearchIcon, FilterIcon } from '@/components/icons'
import type { Technology, Category, FilterState } from '@/types/portfolio'
import { cn } from '@/lib/utils'

interface FilterBarProps {
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
  className?: string
}

const technologies: Technology[] = [
  'react', 'reactNative', 'typescript', 'javascript', 'nodejs',
  'reanimated', 'gestureHandler', 'expo', 'nextjs', 'tailwind',
  'firebase', 'supabase', 'mongodb', 'postgresql'
]

const categories: Category[] = [
  'mobile', 'web', 'fullstack', 'frontend', 'backend', 'ui'
]

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onFiltersChange,
  className
}) => {
  const { t } = useTranslation()
  const [showFilters, setShowFilters] = useState(false)

  const handleSearchChange = (value: string) => {
    onFiltersChange({ ...filters, search: value })
  }

  const toggleTechnology = (tech: Technology) => {
    const newTechnologies = filters.technologies.includes(tech)
      ? filters.technologies.filter(t => t !== tech)
      : [...filters.technologies, tech]
    
    onFiltersChange({ ...filters, technologies: newTechnologies })
  }

  const toggleCategory = (category: Category) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category]
    
    onFiltersChange({ ...filters, categories: newCategories })
  }

  const clearFilters = () => {
    onFiltersChange({
      search: '',
      technologies: [],
      categories: []
    })
  }

  const hasActiveFilters = filters.search || filters.technologies.length > 0 || filters.categories.length > 0

  return (
    <div className={cn("w-full space-y-4", className)}>
      {/* Search and Filter Toggle */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <SearchIcon size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder={t('filters.search')}
            value={filters.search}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button
          variant={showFilters ? "default" : "outline"}
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2"
        >
          <FilterIcon size={16} />
          <span className="hidden sm:inline">{t('filters.technologies')}</span>
        </Button>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            {t('filters.clearFilters')}
          </Button>
        )}
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {filters.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="cursor-pointer hover:bg-secondary/80"
              onClick={() => toggleTechnology(tech)}
            >
              {t(`technologies.${tech}`)}
              <span className="ml-1 text-xs">×</span>
            </Badge>
          ))}
          {filters.categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="cursor-pointer hover:bg-accent"
              onClick={() => toggleCategory(category)}
            >
              {t(`categories.${category}`)}
              <span className="ml-1 text-xs">×</span>
            </Badge>
          ))}
        </div>
      )}

      {/* Expandable Filters */}
      {showFilters && (
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {/* Technologies */}
              <div>
                <h3 className="text-sm font-medium mb-3">{t('filters.technologies')}</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant={filters.technologies.includes(tech) ? "default" : "outline"}
                      className="cursor-pointer hover:bg-primary/80"
                      onClick={() => toggleTechnology(tech)}
                    >
                      {t(`technologies.${tech}`)}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-sm font-medium mb-3">{t('filters.categories')}</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Badge
                      key={category}
                      variant={filters.categories.includes(category) ? "default" : "outline"}
                      className="cursor-pointer hover:bg-primary/80"
                      onClick={() => toggleCategory(category)}
                    >
                      {t(`categories.${category}`)}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}