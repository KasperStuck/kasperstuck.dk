# Project Context for Claude

This document provides context about the kasperstuck.dk project to help AI assistants understand the codebase structure and conventions.

## Project Overview

A personal portfolio website for Kasper Stück, a web developer specializing in e-commerce solutions. Built with React Router 7 in framework mode, featuring a comprehensive UI component library based on Tailwind Catalyst. The site showcases professional experience, education, and portfolio work in a modern, responsive layout with dark mode support.

## Tech Stack

- **React Router 7** - Framework mode with flat file routing
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - CSS-first configuration approach
- **Tailwind Catalyst** - Official Tailwind Labs UI component library
- **Headless UI** - Accessible unstyled components (used by Catalyst)
- **Motion** - Animation library for React
- **Zod** - Schema validation
- **React Hook Form** - Form management with validation
- **Vitest + React Testing Library** - Testing framework

## Project Structure

```
app/
├── components/
│   └── ui/              # Tailwind Catalyst UI components
│       ├── alert.tsx
│       ├── auth-layout.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── checkbox.tsx
│       ├── combobox.tsx
│       ├── description-list.tsx
│       ├── dialog.tsx
│       ├── divider.tsx
│       ├── dropdown.tsx
│       ├── fieldset.tsx
│       ├── heading.tsx
│       ├── input.tsx
│       ├── link.tsx
│       ├── listbox.tsx
│       ├── navbar.tsx
│       ├── pagination.tsx
│       ├── radio.tsx
│       ├── select.tsx
│       ├── sidebar-layout.tsx
│       ├── sidebar.tsx
│       ├── stacked-layout.tsx
│       ├── switch.tsx
│       ├── table.tsx
│       ├── text.tsx
│       └── textarea.tsx
├── routes/              # React Router 7 flat file routes
│   ├── _index.tsx       # Portfolio homepage with experience & education
│   └── _index.test.tsx  # Homepage tests
├── components/
│   └── theme-toggle.tsx # Dark/light mode theme toggle component
├── welcome/             # Welcome screen assets
│   ├── logo-dark.svg
│   ├── logo-light.svg
│   └── welcome.tsx
├── app.css              # Tailwind CSS v4 configuration
├── root.tsx             # Root layout
└── routes.ts            # Route configuration
```

## Key Conventions

### Tailwind CSS v4
- Uses CSS-first configuration in `app/app.css`
- Plugins are imported using `@plugin` directive
- No `tailwind.config.js` file

### UI Components
- All UI components are located in `app/components/ui/`
- Components are based on **Tailwind Catalyst** (official Tailwind Labs UI kit)
- Built on top of Headless UI for accessibility
- Use consistent styling patterns with CSS variables for theming
- Components support dark mode out of the box

### Routing
- Flat file routing convention (React Router 7)
- `_index.tsx` = index route for directory
- `about.tsx` = `/about` route
- Nested routes use dot notation: `blog.posts.tsx` = `/blog/posts`

### Forms
- Use React Hook Form with Zod for validation
- Import schema validators from Zod
- Use zodResolver for form integration

### Testing
- Vitest for unit tests
- React Testing Library for component tests
- Test files co-located with components (e.g., `_index.test.tsx`)

### SEO
- **SSR enabled** for optimal search engine indexing
- Use `generateMeta()` from `app/utils/seo.ts` in route meta functions
- Includes Open Graph, Twitter Cards, and canonical URLs automatically
- Structured data helpers available via `schemas` object
- Dynamic sitemap at `/sitemap.xml` - update `app/routes/sitemap[.]xml.tsx` when adding routes

### Portfolio Homepage
The homepage (`app/routes/_index.tsx`) is structured as a personal portfolio with:
- **Header**: Avatar image and theme toggle button
- **Hero Section**: Professional headline and description in Danish
- **Social Links**: LinkedIn and company links (Eagle Media, LavEnWebshop, Vendino)
- **Photo Gallery**: Horizontal scrolling gallery of website screenshots
- **Experience Section**: Professional work history with detailed descriptions
- **Education Section**: Academic background and qualifications
- **Footer**: Company links and copyright notice

### Images
Portfolio images are stored in:
- `/public/images/` - Avatar and personal images
- `/public/images/websites/` - Website portfolio screenshots
All images should be optimized for web performance

## Important Notes

### When working with UI components:
1. **Use existing Catalyst components** from `app/components/ui/` rather than creating new ones
2. Components already support features like:
   - Dark mode
   - Accessibility (via Headless UI)
   - Touch targets for mobile
   - Multiple color variants
   - Responsive sizing
3. Import components from `~/components/ui/[component-name]`

### When creating new features:
1. Follow the flat file routing convention
2. Use Tailwind CSS v4 syntax (avoid v3 patterns)
3. Leverage existing Catalyst components
4. Add tests alongside route components
5. Use Zod + React Hook Form for forms
6. **Always add SEO meta tags** using `generateMeta()` in route `meta()` functions
7. Update sitemap when adding new public routes

### Styling:
- Prefer Tailwind utility classes
- Use Catalyst component props for variants (color, size, etc.)
- Dark mode is handled automatically via Tailwind's `dark:` prefix
- Use CSS variables for custom theming when needed

## Dependencies Notes

- **clsx**: Utility for conditional className joining
- **motion**: Used for animations (modern alternative to Framer Motion)
- **isbot**: Bot detection utility
- All React Router packages are v7.9.2+
- React 19 is used (latest)

## Development Workflow

1. **Development**: `npm run dev` (http://localhost:5173)
2. **Type Checking**: `npm run typecheck`
3. **Testing**: `npm test` or `npm run test:ui`
4. **Building**: `npm run build`
5. **Production**: `npm start`

## Docker Support

Project includes Dockerfile for containerized deployment. Build output structure:
```
build/
├── client/    # Static assets
└── server/    # Server-side code
```
