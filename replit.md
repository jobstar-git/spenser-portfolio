# Spenser Mills Portfolio

## Overview

This is a personal portfolio website for Spenser Mills, a Senior Full Stack Developer with 10+ years of experience. The application showcases professional experience, projects, skills, and provides a contact form. It's built as a full-stack application with a React frontend and Express backend, designed for deployment on Replit.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style) built on Radix UI primitives
- **Animations**: Framer Motion for smooth page transitions and micro-interactions
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation
- **Theming**: next-themes for dark/light mode support

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API structure with `/api` prefix
- **Development**: Vite dev server with HMR integration for seamless development experience

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts` contains database table definitions
- **Migrations**: Drizzle Kit for schema migrations (`drizzle-kit push`)
- **Current Storage**: In-memory storage implementation (`MemStorage` class) as fallback when database isn't provisioned

### Build System
- **Frontend Build**: Vite bundles React application to `dist/public`
- **Backend Build**: esbuild compiles server code to `dist/index.cjs`
- **Development**: `npm run dev` starts the Express server with Vite middleware for HMR

### Project Structure
```
client/           # React frontend application
  src/
    components/   # UI components (Hero, Projects, Experience, Skills, Contact)
    pages/        # Page components (Home, ProjectDetail, NotFound)
    hooks/        # Custom React hooks
    lib/          # Utility functions and query client
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # Data storage interface
  static.ts       # Static file serving
shared/           # Shared code between frontend and backend
  schema.ts       # Drizzle database schema definitions
```

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via `DATABASE_URL` environment variable)
- **Drizzle ORM**: Type-safe database queries and schema management
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI Libraries
- **Radix UI**: Headless UI primitives for accessible components
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel/slider functionality
- **cmdk**: Command palette component

### Development Tools
- **Vite**: Build tool and dev server
- **Replit Plugins**: Custom Vite plugins for Replit integration (cartographer, dev-banner, runtime-error-modal)

### Form & Validation
- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **drizzle-zod**: Integration between Drizzle schemas and Zod validation

### Deployment
- **Vercel**: Configured for static deployment via `vercel.json`
- **Replit**: Primary development and hosting platform with custom meta image handling