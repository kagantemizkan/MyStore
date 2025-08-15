export type Technology = 
  | 'react'
  | 'reactNative'
  | 'typescript'
  | 'javascript'
  | 'nodejs'
  | 'reanimated'
  | 'gestureHandler'
  | 'expo'
  | 'nextjs'
  | 'tailwind'
  | 'firebase'
  | 'supabase'
  | 'mongodb'
  | 'postgresql'

export type Category = 
  | 'mobile'
  | 'web'
  | 'fullstack'
  | 'frontend'
  | 'backend'
  | 'ui'

export interface PortfolioApp {
  id: string
  title: string
  description: string
  longDescription?: string
  category: Category
  technologies: Technology[]
  features: string[]
  images: string[]
  icon: string
  demoUrl?: string
  sourceUrl?: string
  isPublished: boolean
  publishedDate: string
  featured: boolean
  color?: string
}

export interface FilterState {
  search: string
  technologies: Technology[]
  categories: Category[]
}

export interface ViewMode {
  type: 'grid' | 'list'
  size: 'small' | 'medium' | 'large'
}