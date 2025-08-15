# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring an App Store-like layout for showcasing projects and applications.

## ✨ Features

- **🎨 Modern Design**: Clean, minimal, and aesthetically pleasing App Store-inspired layout
- **🌙 Dark/Light Mode**: Seamless theme switching with system preference detection
- **🌍 Internationalization**: Full support for Turkish and English languages
- **🔍 Advanced Filtering**: Filter projects by technologies, categories, and search terms
- **📱 Responsive Design**: Optimized for all device sizes from mobile to desktop
- **♿ Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **⚡ Performance**: Optimized with React best practices and efficient rendering
- **🎯 TypeScript**: Full type safety throughout the application

## 🛠️ Technologies Used

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components
- **Vite** - Fast build tool and development server
- **react-i18next** - Internationalization framework
- **Radix UI** - Primitive components for accessibility

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📝 Customization

### Adding Your Projects

Edit `/src/data/portfolioApps.ts` to add your own projects:

```typescript
export const portfolioApps: PortfolioApp[] = [
  {
    id: 'unique-id',
    title: 'Your App Name',
    description: 'Brief description',
    category: 'web', // or 'mobile', 'fullstack', etc.
    technologies: ['react', 'typescript'], // Add relevant technologies
    features: ['Feature 1', 'Feature 2'],
    // ... other properties
  }
]
```

### Updating Icons

Replace placeholder icons in `/src/components/icons/index.tsx` with your preferred icons:

```typescript
export const ReactIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  // Replace with your actual React icon
  <YourReactIcon className={className} size={size} />
)
```

### Customizing Translations

Update translations in:
- `/src/i18n/locales/en.json` (English)
- `/src/i18n/locales/tr.json` (Turkish)

### Styling

The project uses Tailwind CSS with a custom design system. Modify:
- `/src/index.css` for global styles and CSS variables
- `/tailwind.config.js` for Tailwind configuration
- Individual component files for component-specific styles

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── icons/          # Icon components
│   ├── Header.tsx      # Navigation header
│   ├── FilterBar.tsx   # Project filtering
│   ├── AppCard.tsx     # Project card component
│   └── AppStoreLayout.tsx # Main layout
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Theme management
├── data/              # Static data
│   └── portfolioApps.ts # Project data
├── i18n/              # Internationalization
│   ├── index.ts       # i18n configuration
│   └── locales/       # Translation files
├── lib/               # Utility functions
│   └── utils.ts       # Helper functions
├── types/             # TypeScript type definitions
│   └── portfolio.ts   # Portfolio-related types
├── App.tsx            # Main application component
└── main.tsx           # Application entry point
```

## 🎨 Design System

The project uses a cohesive design system with:
- **Colors**: CSS custom properties for theming
- **Typography**: Tailwind's default type scale
- **Spacing**: Consistent spacing using Tailwind utilities
- **Components**: Reusable components built with shadcn/ui

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🌍 Supported Languages

- English (en)
- Turkish (tr)

To add more languages, create new translation files in `/src/i18n/locales/` and update the i18n configuration.

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Recommended Hosting Platforms

- **Vercel** - Automatic deployments from Git
- **Netlify** - Easy drag-and-drop deployment
- **GitHub Pages** - Free hosting for public repositories
- **AWS S3 + CloudFront** - Scalable cloud hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) for accessible component primitives
- [Lucide React](https://lucide.dev/) for the icon system inspiration

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
