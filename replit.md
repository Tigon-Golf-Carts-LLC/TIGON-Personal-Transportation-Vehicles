# TIGON Personal Transportation Vehicles - Replit Project Guide

## Overview

TIGON Personal Transportation Vehicles (TIGON PTV) is a full-stack web application for North America's premier personal transportation vehicle dealership. The application serves as both a marketing website and a business management platform, featuring inventory management for DENAGO and EVOLUTION brands, customer inquiries, rental systems, and comprehensive service information. Serving all 50 US states, Canada, and Mexico.

## User Preferences

Preferred communication style: Simple, everyday language.
Theme Colors: Primary theme color #af1b30 (TIGON red), standard button colors.
SEO Requirements: Complete 23-file SEO and AI optimization suite with absolute URLs (https://tigonptv.com) throughout. Full crawl accessibility for all search engines and AI systems.
Domain: tigonptv.com
Phone: 1-844-844-6638
Email: info@tigonptv.com
Branding: "Personal Transportation Vehicles" (NOT "Private Transportation Vehicles")

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **API Design**: RESTful endpoints with JSON responses

### Database Design
- **Primary Database**: PostgreSQL with Drizzle ORM
- **Schema Location**: `shared/schema.ts` for shared types between frontend and backend
- **Migrations**: Managed through Drizzle Kit in `./migrations` directory
- **Connection**: Uses Neon serverless PostgreSQL via `@neondatabase/serverless`

## Key Components

### Core Pages
1. **Home** (`/`) - Landing page with featured inventory and company overview
2. **Inventory** (`/inventory`) - PTV listings with filtering capabilities
3. **Showroom** (`/showroom`) - Virtual showroom experience
4. **Rentals** (`/rentals`) - Rental packages and pricing information
5. **Services** (`/services`) - Service offerings and maintenance information
6. **About** (`/about`) - Company history and team information
7. **Contact** (`/contact`) - Contact forms and location details
8. **Financing** (`/financing`) - Financing options and calculators
9. **Brand Pages** (`/denago`, `/evolution`) - Brand-specific inventory
10. **Blog** (`/blog`) - Educational articles and industry news

### Vehicle Pages
- 6 DENAGO models (EV City, EV Nomad, EV Nomad XL, EV Rover XL, EV Rover XL6, EV Rover XXL)
- 30+ EVOLUTION models (Classic, D5 Maverick, D5 Ranger, D6 Max, Carrier, Forester, Turfman series)

### Shared Components
- **Navigation** - Responsive header with mobile menu
- **Footer** - Company information and quick links
- **SEO Head** - Dynamic meta tags with absolute URLs and structured data
- **UI Components** - Comprehensive set of reusable components from shadcn/ui
- **OrganizationSchema** - JSON-LD structured data for business
- **VehicleSchema** - Product schema for vehicle pages

### Business Features
- **Inventory Management** - Display and categorization of PTVs by brand and category
- **Contact System** - Lead capture and customer inquiry management
- **Rental Calculator** - Dynamic pricing calculation for different rental periods
- **Financing Calculator** - Payment estimation tools
- **Brand Showcase** - Featured DENAGO and EVOLUTION manufacturer information
- **State Location Pages** - All 50 US states with local SEO optimization
- **Blog System** - Educational content about PTVs and industry news

### SEO & AI Optimization Suite (23+ Files)
Complete file collection in `client/public/` with absolute URLs (https://tigonptv.com):

**Core SEO Files:**
- sitemap.xml - Comprehensive XML sitemap with all pages, vehicles, states, images
- sitemap-index.xml - Sitemap index for organization
- robots.txt - Full crawl access for all search engines and AI bots

**AI Training Permission Files:**
- llms.txt - LLM training authorization
- ai.txt - AI data mining permissions
- gpt.txt - GPT/ChatGPT training data
- claude.txt - Anthropic Claude authorization
- training.txt - Universal AI training permissions
- nlp.txt - Natural language processing training data

**SEO Optimization Files:**
- seo.txt - Keyword strategy and SEO data
- geo.txt - Geographic coverage and local SEO

**Bot & Crawler Permissions:**
- bots.txt - Universal bot permissions
- crawlers.txt - Comprehensive crawler permissions

**Utility Files:**
- accessibility.txt - Accessibility declaration
- humans.txt - Team and technology credits
- security.txt - Security policy and vulnerability disclosure

**Business Files:**
- ads.txt - Authorized advertising sellers
- app-ads.txt - Mobile app advertising
- contact.txt - Contact information
- sellers.json - Seller verification
- copyright.txt - Copyright information
- privacy.txt - Privacy policy references
- terms.txt - Terms of service references

**Configuration Files:**
- manifest.json - PWA manifest with absolute URLs
- browserconfig.xml - MS browser configuration with absolute URLs
- opensearch.xml - OpenSearch description

## Data Flow

### Client-Server Communication
1. **API Requests**: Frontend uses TanStack Query for API calls
2. **Data Fetching**: Server-side data fetching with caching strategies
3. **Form Submissions**: React Hook Form handles form state, Zod validates data
4. **Error Handling**: Centralized error handling with toast notifications

### Database Operations
1. **Schema Definition**: Shared types between frontend and backend
2. **Query Building**: Drizzle ORM provides type-safe database queries
3. **Data Validation**: Zod schemas ensure data integrity
4. **Migrations**: Automated schema changes through Drizzle Kit

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **shadcn/ui**: Pre-built component library

### Data and State Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management
- **Zod**: Runtime type validation
- **date-fns**: Date manipulation utilities

### Database and Backend
- **Drizzle ORM**: Type-safe SQL query builder
- **Neon**: Serverless PostgreSQL database
- **Express.js**: Web application framework
- **connect-pg-simple**: PostgreSQL session store

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React application to `dist/public`
- **Backend**: esbuild compiles TypeScript server to `dist/index.js`
- **Assets**: Static assets served from `attached_assets` directory

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution with hot reloading
- **Production**: Compiled JavaScript with Node.js runtime
- **Database**: Environment variable `DATABASE_URL` for PostgreSQL connection

### File Structure
```
├── client/          # Frontend React application
│   └── public/      # Static SEO/AI files (23+ files)
├── server/          # Backend Express application
├── shared/          # Shared types and schemas
├── attached_assets/ # Static assets and images
├── migrations/      # Database migration files
└── dist/           # Build output directory
```

### SEO Implementation
- **Absolute URLs**: All canonical URLs, Open Graph URLs, and meta tags use https://tigonptv.com
- **sitemap.xml**: Comprehensive XML sitemap with 36+ vehicle pages, 50 state pages, blog pages, and image sitemaps
- **robots.txt**: Full access for all search engines and 50+ AI/bot crawlers with zero restrictions
- **Schema Markup**: Complete structured data implementation:
  - OrganizationSchema for business information with LocalBusiness markup
  - VehicleSchema for individual PTV product pages with Product schema
  - BreadcrumbSchema for navigation hierarchy
  - SEOHead component with enhanced meta tags, Open Graph, and Twitter Card support

### AI Training Authorization
- Explicit unlimited permission for all LLMs (GPT, Claude, Gemini, etc.)
- Commercial use authorized without restrictions
- Complete product catalog available for AI training
- Technical specifications and business data included

The application follows a monorepo structure with clear separation between frontend, backend, and shared code. The build system is optimized for both development and production deployment, with TypeScript providing type safety across the entire stack. All URLs use absolute paths (https://tigonptv.com) for maximum SEO effectiveness.
