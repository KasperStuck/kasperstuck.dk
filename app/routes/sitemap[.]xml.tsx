import type { Route } from "./+types/sitemap[.]xml";

// Configure your site's routes here
const SITE_URL = "https://kasperstuck.dk";

interface SitemapRoute {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
}

// Add all your site's routes here
const routes: SitemapRoute[] = [
  {
    path: "/",
    changefreq: "weekly",
    priority: 1.0,
  }
];

function generateSitemap(routes: SitemapRoute[]): string {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>${
      route.lastmod
        ? `
    <lastmod>${route.lastmod}</lastmod>`
        : ""
    }${
      route.changefreq
        ? `
    <changefreq>${route.changefreq}</changefreq>`
        : ""
    }${
      route.priority !== undefined
        ? `
    <priority>${route.priority}</priority>`
        : ""
    }
  </url>`
  )
  .join("\n")}
</urlset>`;

  return sitemap;
}

export async function loader({}: Route.LoaderArgs) {
  const sitemap = generateSitemap(routes);

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600", // Cache for 1 hour
    },
  });
}
