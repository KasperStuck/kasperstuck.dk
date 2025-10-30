# kasperstuck.dk

Personal portfolio website for Kasper Stück, a web developer specializing in e-commerce solutions. Built with React Router 7 in framework mode.

## Tech Stack

- **React Router 7** - Framework mode with flat file routing
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS with the new CSS-first configuration
  - `@tailwindcss/forms` - Beautiful form styling
  - `@tailwindcss/typography` - Beautiful typographic defaults
- **Tailwind Catalyst** - Official Tailwind Labs UI component library
  - 27 pre-built, production-ready components in `app/components/ui/`
  - Built on Headless UI for accessibility
  - Dark mode support out of the box
- **Headless UI** - Unstyled, accessible UI components (used by Catalyst)
- **Motion** - Modern animation library for React
- **Zod** - TypeScript-first schema validation
- **React Hook Form** - Performant, flexible forms with easy validation
- **Vitest** - Fast unit testing framework
- **React Testing Library** - Testing utilities for React components

## Getting Started

### Development

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173)

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

### Type Checking

```bash
npm run typecheck
```

## Testing

```bash
# Run tests
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## Project Structure

```
app/
├── components/
│   ├── theme-toggle.tsx # Dark/light mode theme toggle
│   └── ui/              # Tailwind Catalyst UI components (27 components)
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
├── routes/              # Flat file routing
│   └── _index.tsx       # Portfolio homepage (/)
├── app.css              # Tailwind CSS configuration
└── root.tsx             # Root layout

public/
└── images/              # Portfolio images
    ├── kasper-stuck.webp # Avatar image
    └── websites/        # Website portfolio screenshots
```

## Portfolio Homepage

The homepage features a modern portfolio design showcasing:

- **Professional Profile**: Header with avatar and theme toggle
- **Hero Section**: Headline and description about e-commerce development expertise (in Danish)
- **Social Links**: LinkedIn and company links (Eagle Media ApS, LavEnWebshop, Vendino)
- **Photo Gallery**: Horizontal scrolling showcase of website projects
- **Experience**: Detailed work history from 2011 to present
- **Education**: Academic background and qualifications
- **Dark Mode**: Fully functional light/dark theme toggle with localStorage persistence

## Routing

This project uses React Router 7's flat file routing convention:

- `_index.tsx` - Index route for the current directory
- `blog.posts.tsx` - Creates `/blog/posts` route (nested with dot notation)

## Tailwind CSS v4

Tailwind CSS v4 uses a new CSS-first configuration approach. Plugins are configured in `app/app.css`:

```css
@import "tailwindcss";
@plugin "@tailwindcss/forms";
@plugin "@tailwindcss/typography";
```

## Tailwind Catalyst UI Components

This project includes the complete **Tailwind Catalyst** component library in `app/components/ui/`. Catalyst is the official UI kit from Tailwind Labs, featuring:

- 27 production-ready components
- Built on Headless UI for accessibility
- Dark mode support included
- Responsive and mobile-friendly
- Highly customizable with Tailwind utilities

### Using Catalyst Components

Import components from the `app/components/ui` directory:

```tsx
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Dialog } from '~/components/ui/dialog'

function MyComponent() {
  return (
    <div>
      <Button color="indigo">Click me</Button>
      <Input placeholder="Enter text" />
    </div>
  )
}
```

### Available Components

**Form Elements**: Button, Input, Textarea, Select, Checkbox, Radio, Switch, Combobox, Listbox, Fieldset

**Layout**: Navbar, Sidebar, Sidebar Layout, Stacked Layout, Auth Layout

**Data Display**: Table, Badge, Avatar, Description List, Divider

**Feedback**: Alert, Dialog

**Navigation**: Link, Pagination, Dropdown

**Typography**: Heading, Text

All components support dark mode and have consistent API patterns. See individual component files for specific props and usage examples.

## SEO Features

This project is fully configured for search engine optimization:

- **Server-Side Rendering (SSR)** - Enabled by default for optimal SEO
- **robots.txt** - Configure crawler access
- **Dynamic Sitemap** - Auto-generated at `/sitemap.xml`
- **Open Graph Tags** - Social media preview support
- **Twitter Cards** - Optimized Twitter sharing
- **Canonical URLs** - Prevent duplicate content issues
- **Structured Data (JSON-LD)** - Rich search results
- **Complete Favicon Set** - PWA-ready with web manifest

### Using the SEO Utility

Import the SEO utility in any route to generate comprehensive meta tags:

```tsx
import { generateMeta } from "../utils/seo";

export function meta({}: Route.MetaArgs) {
  return generateMeta({
    title: "Page Title - kasperstuck.dk",
    description: "Page description for search results",
    url: "/page-path",
  });
}
```

## Forms with Zod & React Hook Form

Example of using Zod with React Hook Form:

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormData = z.infer<typeof schema>;

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <input {...register("email")} />
      {errors.email && <span>{errors.email.message}</span>}
    </form>
  );
}
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Adding Portfolio Images

The homepage references the following images that need to be added to the `public/images/` directory:

**Avatar:**
- `public/images/kasper-stuck.webp` - Your profile photo (recommended size: 256x256px or larger, square aspect ratio)

**Website Screenshots:**
- `public/images/websites/munkstore-mobile.webp`
- `public/images/websites/hunterspoint-mobile.webp`
- `public/images/websites/lydspecialisten-mobile.webp`
- `public/images/websites/mollyogmy-mobile.webp`
- `public/images/websites/inkpartner-mobile.webp`

Recommended format: 9:10 aspect ratio (e.g., 360x400px or 720x800px) for mobile screenshots.

## Next Steps

1. Add your portfolio images to the `public/images/` directory
2. Run `npm run dev` to preview the site locally
3. Customize content as needed (experience, education, links, etc.)

## Learn More

- [React Router Documentation](https://reactrouter.com)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com)
- [Headless UI Documentation](https://headlessui.com)
- [Zod Documentation](https://zod.dev)
- [React Hook Form Documentation](https://react-hook-form.com)
- [Vitest Documentation](https://vitest.dev)

---

Built with ❤️ using React Router.
