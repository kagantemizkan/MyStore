import type { PortfolioApp } from '@/types/portfolio'

export const portfolioApps: PortfolioApp[] = [
  {
    id: '1',
    title: 'TaskFlow Mobile',
    description: 'A beautiful task management app with smooth animations',
    longDescription: 'TaskFlow is a comprehensive task management application built with React Native. It features beautiful animations using Reanimated 3, gesture-based interactions, and a clean, intuitive interface that helps users stay organized and productive.',
    category: 'mobile',
    technologies: ['reactNative', 'typescript', 'reanimated', 'gestureHandler', 'expo'],
    features: [
      'Smooth animations and transitions',
      'Gesture-based task management',
      'Dark/Light theme support',
      'Offline-first architecture',
      'Cross-platform compatibility'
    ],
    images: ['/images/taskflow-1.jpg', '/images/taskflow-2.jpg'],
    icon: '/icons/taskflow.png',
    demoUrl: 'https://expo.dev/@username/taskflow',
    sourceUrl: 'https://github.com/username/taskflow',
    isPublished: true,
    publishedDate: '2024-01-15',
    featured: true,
    color: '#3B82F6'
  },
  {
    id: '2',
    title: 'E-Commerce Dashboard',
    description: 'Modern admin dashboard for e-commerce management',
    longDescription: 'A comprehensive e-commerce admin dashboard built with React and Next.js. Features real-time analytics, inventory management, order processing, and customer insights with beautiful charts and responsive design.',
    category: 'web',
    technologies: ['react', 'nextjs', 'typescript', 'tailwind', 'firebase'],
    features: [
      'Real-time analytics',
      'Inventory management',
      'Order processing',
      'Customer insights',
      'Responsive design'
    ],
    images: ['/images/dashboard-1.jpg', '/images/dashboard-2.jpg'],
    icon: '/icons/dashboard.png',
    demoUrl: 'https://ecommerce-dashboard-demo.vercel.app',
    sourceUrl: 'https://github.com/username/ecommerce-dashboard',
    isPublished: true,
    publishedDate: '2024-02-20',
    featured: true,
    color: '#10B981'
  },
  {
    id: '3',
    title: 'Recipe Finder',
    description: 'Discover and save your favorite recipes',
    longDescription: 'A recipe discovery app that helps users find, save, and organize their favorite recipes. Built with React Native and featuring a beautiful UI, offline support, and integration with popular recipe APIs.',
    category: 'mobile',
    technologies: ['reactNative', 'javascript', 'expo', 'firebase'],
    features: [
      'Recipe search and discovery',
      'Save favorite recipes',
      'Shopping list generation',
      'Offline recipe viewing',
      'Social sharing'
    ],
    images: ['/images/recipe-1.jpg', '/images/recipe-2.jpg'],
    icon: '/icons/recipe.png',
    demoUrl: 'https://expo.dev/@username/recipe-finder',
    isPublished: true,
    publishedDate: '2023-11-10',
    featured: false,
    color: '#F59E0B'
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React and Tailwind CSS',
    longDescription: 'A modern, responsive portfolio website showcasing my development work. Built with React, TypeScript, and Tailwind CSS, featuring smooth animations, dark mode support, and optimized performance.',
    category: 'web',
    technologies: ['react', 'typescript', 'tailwind', 'nodejs'],
    features: [
      'Responsive design',
      'Dark/Light mode',
      'Smooth animations',
      'SEO optimized',
      'Fast loading'
    ],
    images: ['/images/portfolio-1.jpg', '/images/portfolio-2.jpg'],
    icon: '/icons/portfolio.png',
    demoUrl: 'https://myportfolio.dev',
    sourceUrl: 'https://github.com/username/portfolio',
    isPublished: true,
    publishedDate: '2024-03-01',
    featured: false,
    color: '#8B5CF6'
  },
  {
    id: '5',
    title: 'Chat Application',
    description: 'Real-time messaging app with modern UI',
    longDescription: 'A full-stack real-time chat application built with React, Node.js, and Socket.io. Features include real-time messaging, file sharing, group chats, and end-to-end encryption for secure communication.',
    category: 'fullstack',
    technologies: ['react', 'nodejs', 'typescript', 'mongodb', 'tailwind'],
    features: [
      'Real-time messaging',
      'File sharing',
      'Group chats',
      'End-to-end encryption',
      'Message history'
    ],
    images: ['/images/chat-1.jpg', '/images/chat-2.jpg'],
    icon: '/icons/chat.png',
    demoUrl: 'https://chat-app-demo.herokuapp.com',
    sourceUrl: 'https://github.com/username/chat-app',
    isPublished: true,
    publishedDate: '2023-12-05',
    featured: true,
    color: '#EF4444'
  },
  {
    id: '6',
    title: 'Weather App',
    description: 'Beautiful weather app with animated backgrounds',
    longDescription: 'A stunning weather application with animated backgrounds that change based on weather conditions. Built with React Native and featuring location-based forecasts, weather alerts, and beautiful visualizations.',
    category: 'mobile',
    technologies: ['reactNative', 'typescript', 'reanimated', 'expo'],
    features: [
      'Animated weather backgrounds',
      'Location-based forecasts',
      'Weather alerts',
      'Beautiful visualizations',
      '7-day forecast'
    ],
    images: ['/images/weather-1.jpg', '/images/weather-2.jpg'],
    icon: '/icons/weather.png',
    demoUrl: 'https://expo.dev/@username/weather-app',
    sourceUrl: 'https://github.com/username/weather-app',
    isPublished: true,
    publishedDate: '2023-10-15',
    featured: false,
    color: '#06B6D4'
  }
]