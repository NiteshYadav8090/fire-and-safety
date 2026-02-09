# Replit.md

## Overview

This is a business website for **Zed-King Fire and Safety**, a company providing professional fire safety solutions including extinguisher supply, alarm systems, hydrant/sprinkler systems, annual maintenance contracts, safety training, and NOC consulting. The application is a full-stack TypeScript project with a React frontend and Express backend, currently functioning primarily as a marketing/brochure site with a contact form. The site uses client-side routing via state management (not a router library) to switch between pages: Home, Services, Gallery, Projects, About, and Contact.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives, located in `client/src/components/ui/`
- **Routing**: No router library — uses React state (`activePage`) in `App.tsx` to switch between page components. Navigation is handled through `setActivePage` callbacks passed as props.
- **Data Fetching**: TanStack React Query is configured (`client/src/lib/queryClient.ts`) but not heavily used yet since the app is mostly static content
- **Icons**: Lucide React
- **Static Content**: Services, projects, certifications, FAQs, blog posts, gallery items, and contact info are defined as constants in `client/src/constants.tsx`
- **Custom Components**: `Navbar`, `Footer`, `SectionTitle`, `FAQItem`, `BlogSection` in `client/src/components/`
- **Pages**: `Home`, `Services`, `Gallery`, `Contact`, plus inline pages for Projects/About in `App.tsx`

### Backend
- **Framework**: Express 5 on Node.js with TypeScript (run via `tsx`)
- **HTTP Server**: Node `http.createServer` wrapping Express
- **API Pattern**: All API routes should be prefixed with `/api` and registered in `server/routes.ts`
- **Storage**: An `IStorage` interface defined in `server/storage.ts` with an in-memory implementation (`MemStorage`). This abstraction allows swapping to a database-backed implementation later.
- **Dev Server**: Vite dev server runs as middleware in development mode (`server/vite.ts`), providing HMR
- **Production**: Static files served from `dist/public` via `server/static.ts`

### Database
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Defined in `shared/schema.ts` — currently only has a `users` table with `id`, `username`, and `password`
- **Validation**: Zod schemas generated from Drizzle schemas via `drizzle-zod`
- **Migrations**: Drizzle Kit configured to output to `./migrations`, schema push via `npm run db:push`
- **Connection**: Requires `DATABASE_URL` environment variable for PostgreSQL
- **Note**: The storage layer currently uses in-memory storage (`MemStorage`), not the database. The database schema is ready but not connected to the storage implementation.

### Build System
- **Client Build**: Vite builds to `dist/public`
- **Server Build**: esbuild bundles server code to `dist/index.cjs`, with selective dependency bundling (allowlisted deps are bundled, others are external)
- **Scripts**: `dev` for development, `build` for production build, `start` for production run, `db:push` for schema sync

### Path Aliases
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets` → `attached_assets/`

## External Dependencies

### Database
- **PostgreSQL** — Required via `DATABASE_URL` environment variable. Used with Drizzle ORM for schema management and queries. Session storage also supports `connect-pg-simple`.

### Key NPM Packages
- **Radix UI** — Full suite of accessible, unstyled UI primitives (dialog, dropdown, tabs, accordion, etc.)
- **TanStack React Query** — Server state management and data fetching
- **Drizzle ORM + Drizzle Zod** — Type-safe database ORM with Zod schema generation
- **Express 5** — Backend HTTP framework
- **Tailwind CSS** — Utility-first CSS framework
- **class-variance-authority (CVA)** — Component variant management for shadcn/ui
- **embla-carousel-react** — Carousel component
- **recharts** — Charting library (available via shadcn chart component)
- **react-day-picker** — Calendar/date picker
- **vaul** — Drawer component
- **react-resizable-panels** — Resizable panel layouts
- **Lucide React** — Icon library

### Replit-specific
- `@replit/vite-plugin-runtime-error-modal` — Runtime error overlay in development
- `@replit/vite-plugin-cartographer` — Dev tooling (development only)
- `@replit/vite-plugin-dev-banner` — Development banner (development only)

### Build Tools
- **Vite** — Frontend bundler and dev server
- **esbuild** — Server-side bundling for production
- **tsx** — TypeScript execution for development
- **drizzle-kit** — Database migration and schema management tool