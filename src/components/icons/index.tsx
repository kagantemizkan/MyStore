import React from 'react'

interface IconProps {
  size?: number
  className?: string
}

// Technology Icons
export const ReactIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <div className={`w-${size/4} h-${size/4} bg-blue-500 rounded ${className}`}>
    {/* React icon will be placed here */}
  </div>
)

export const ReactNativeIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <div className={`w-${size/4} h-${size/4} bg-cyan-500 rounded ${className}`}>
    {/* React Native icon will be placed here */}
  </div>
)

export const TypeScriptIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <div className={`w-${size/4} h-${size/4} bg-blue-600 rounded ${className}`}>
    {/* TypeScript icon will be placed here */}
  </div>
)

export const JavaScriptIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <div className={`w-${size/4} h-${size/4} bg-yellow-500 rounded ${className}`}>
    {/* JavaScript icon will be placed here */}
  </div>
)

export const NodeJSIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <div className={`w-${size/4} h-${size/4} bg-green-500 rounded ${className}`}>
    {/* Node.js icon will be placed here */}
  </div>
)

export const TailwindIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <div className={`w-${size/4} h-${size/4} bg-teal-500 rounded ${className}`}>
    {/* Tailwind CSS icon will be placed here */}
  </div>
)

export const FirebaseIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <div className={`w-${size/4} h-${size/4} bg-orange-500 rounded ${className}`}>
    {/* Firebase icon will be placed here */}
  </div>
)

export const ExpoIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <div className={`w-${size/4} h-${size/4} bg-gray-900 rounded ${className}`}>
    {/* Expo icon will be placed here */}
  </div>
)

export const NextJSIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <div className={`w-${size/4} h-${size/4} bg-black dark:bg-white rounded ${className}`}>
    {/* Next.js icon will be placed here */}
  </div>
)

export const MongoDBIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <div className={`w-${size/4} h-${size/4} bg-green-600 rounded ${className}`}>
    {/* MongoDB icon will be placed here */}
  </div>
)

export const PostgreSQLIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <div className={`w-${size/4} h-${size/4} bg-blue-700 rounded ${className}`}>
    {/* PostgreSQL icon will be placed here */}
  </div>
)

export const SupabaseIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <div className={`w-${size/4} h-${size/4} bg-green-400 rounded ${className}`}>
    {/* Supabase icon will be placed here */}
  </div>
)

// UI Icons
export const MoonIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <div className={`w-${size/4} h-${size/4} bg-indigo-500 rounded-full ${className}`}>
    {/* Moon icon for dark mode will be placed here */}
  </div>
)

export const SunIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <div className={`w-${size/4} h-${size/4} bg-yellow-400 rounded-full ${className}`}>
    {/* Sun icon for light mode will be placed here */}
  </div>
)

export const SearchIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <div className={`w-${size/4} h-${size/4} bg-gray-500 rounded ${className}`}>
    {/* Search icon will be placed here */}
  </div>
)

export const FilterIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <div className={`w-${size/4} h-${size/4} bg-gray-500 rounded ${className}`}>
    {/* Filter icon will be placed here */}
  </div>
)

export const GridIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <div className={`w-${size/4} h-${size/4} bg-gray-500 rounded ${className}`}>
    {/* Grid view icon will be placed here */}
  </div>
)

export const ListIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <div className={`w-${size/4} h-${size/4} bg-gray-500 rounded ${className}`}>
    {/* List view icon will be placed here */}
  </div>
)

export const ExternalLinkIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <div className={`w-${size/4} h-${size/4} bg-gray-500 rounded ${className}`}>
    {/* External link icon will be placed here */}
  </div>
)

export const GitHubIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <div className={`w-${size/4} h-${size/4} bg-gray-800 rounded ${className}`}>
    {/* GitHub icon will be placed here */}
  </div>
)

export const LanguageIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <div className={`w-${size/4} h-${size/4} bg-blue-500 rounded ${className}`}>
    {/* Language/Globe icon will be placed here */}
  </div>
)