# Convergence Map 2024-2032

## Overview
This is a React-based visualization application that displays a convergence map showing various frameworks and patterns from 2024 to 2032. The application uses Vite as the build tool and includes interactive data visualizations using Recharts and Framer Motion for animations.

## Project Architecture
- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.x
- **Styling**: Tailwind CSS with PostCSS
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **Utilities**: clsx for conditional class names

## Project Structure
```
├── src/
│   ├── components/
│   │   ├── CategoryFilter.jsx    - Category filtering component
│   │   ├── convergenceData.js     - Data definitions and categories
│   │   ├── ConvergenceMap.jsx     - Main map visualization component
│   │   ├── FrameworkCard.jsx      - Card component for framework display
│   │   ├── StatsSummary.jsx       - Statistics summary component
│   │   └── Timeline.jsx           - Timeline visualization component
│   ├── App.jsx                    - Main application component
│   ├── main.jsx                   - React entry point
│   └── index.css                  - Global styles with Tailwind
├── index.html                     - HTML entry point
├── vite.config.js                 - Vite configuration
├── tailwind.config.js             - Tailwind CSS configuration
└── postcss.config.js              - PostCSS configuration
```

## Recent Changes
- **2025-09-30**: Initial project setup for Replit environment
  - Configured Vite to bind to 0.0.0.0:5000 and allow all hosts for Replit proxy compatibility
  - Fixed convergenceData.js to export categories as an object with proper icon imports from lucide-react
  - Installed all npm dependencies
  - Set up development workflow
  - Configured deployment settings for autoscale deployment

- **2025-09-30**: Comprehensive responsive design improvements
  - Enhanced all components for mobile (320-640px), tablet (640-1024px), and desktop (1024px+)
  - Implemented progressive text sizing across all breakpoints
  - Added 44px minimum touch targets for mobile accessibility
  - Improved modal responsiveness with mobile-friendly tabs and charts
  - Enhanced Timeline with custom scrollbar and touch support
  - Optimized spacing, padding, and layout density for all screen sizes

- **2025-09-30**: Added comprehensive framework data (42 frameworks)
  - Added 13 Economic frameworks (Kondratiev, Great Depression, Debt cycles, etc.)
  - Added 5 Generational frameworks (Fourth Turning, wealth transfer, etc.)
  - Added 9 Technology frameworks (AGI, AI disruption, Moore's Law, etc.)
  - Added 8 Geopolitical frameworks (Thucydides Trap, hegemonic cycles, etc.)
  - Added 7 Climate frameworks (tipping points, water crisis, permafrost, etc.)
  - Added new categories: Generational and Climate
  - Peak convergence now shows 2028 with 12 overlapping frameworks

## Development
- **Dev Server**: `npm run dev` - Runs on port 5000
- **Build**: `npm run build` - Builds for production
- **Preview**: `npm run preview` - Preview production build

## Deployment Configuration
- **Type**: Autoscale (stateless web application)
- **Build Command**: `npm run build`
- **Run Command**: `npx vite preview --host 0.0.0.0 --port 5000`

## Key Features
- Interactive convergence map visualization with 42 frameworks
- Category-based filtering (Economic, Generational, Technology, Environment, Climate, Geopolitical)
- Detailed modal views for framework analysis
- Timeline comparisons showing peak convergence years (2027-2028)
- Risk indicators with severity and confidence ratings
- Responsive design with Tailwind CSS for all device sizes
- Smooth animations with Framer Motion
