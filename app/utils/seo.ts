/**
 * SEO utility for generating comprehensive meta tags
 * Includes Open Graph, Twitter Cards, and canonical URLs
 */

export interface SEOConfig {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: "website" | "article" | "profile";
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  canonicalUrl?: string;
}

interface MetaTag {
  title?: string;
  name?: string;
  property?: string;
  content?: string;
  tagName?: string;
  rel?: string;
  href?: string;
}

const SITE_URL = "https://kasperstuck.dk";
const SITE_NAME = "kasperstuck.dk";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`; // You'll need to add this image
const TWITTER_HANDLE = "@kasperstuck"; // Update with your Twitter handle

export function generateMeta(config: SEOConfig): MetaTag[] {
  const {
    title,
    description,
    url,
    image = DEFAULT_IMAGE,
    type = "website",
    author,
    publishedTime,
    modifiedTime,
    keywords,
    noindex = false,
    nofollow = false,
    canonicalUrl,
  } = config;

  const fullUrl = url.startsWith("http") ? url : `${SITE_URL}${url}`;
  const canonical = canonicalUrl || fullUrl;

  const meta: MetaTag[] = [
    // Basic meta tags
    { title },
    { name: "description", content: description },

    // Canonical URL
    { tagName: "link", rel: "canonical", href: canonical },

    // Robots meta
    ...(noindex || nofollow
      ? [
          {
            name: "robots",
            content: `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}`,
          },
        ]
      : []),

    // Keywords (if provided)
    ...(keywords && keywords.length > 0
      ? [{ name: "keywords", content: keywords.join(", ") }]
      : []),

    // Open Graph tags
    { property: "og:type", content: type },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: fullUrl },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:image", content: image },
    { property: "og:image:alt", content: title },

    // Article-specific Open Graph tags
    ...(type === "article" && publishedTime
      ? [{ property: "article:published_time", content: publishedTime }]
      : []),
    ...(type === "article" && modifiedTime
      ? [{ property: "article:modified_time", content: modifiedTime }]
      : []),
    ...(type === "article" && author
      ? [{ property: "article:author", content: author }]
      : []),

    // Twitter Card tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: TWITTER_HANDLE },
    { name: "twitter:creator", content: TWITTER_HANDLE },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: title },
  ];

  return meta;
}

/**
 * Helper to generate structured data (JSON-LD) for SEO
 * Uses React Router 7's special "script:ld+json" syntax
 */
export function generateStructuredData(data: Record<string, any>) {
  return {
    "script:ld+json": {
      "@context": "https://schema.org",
      ...data,
    },
  };
}

/**
 * Common structured data schemas
 */
export const schemas = {
  website: (name: string, url: string, description: string) => ({
    "@type": "WebSite",
    name,
    url,
    description,
  }),

  person: (name: string, url: string, jobTitle?: string, sameAs?: string[]) => ({
    "@type": "Person",
    name,
    url,
    ...(jobTitle && { jobTitle }),
    ...(sameAs && { sameAs }),
  }),

  article: (
    headline: string,
    description: string,
    url: string,
    image: string,
    datePublished: string,
    dateModified: string,
    author: { name: string; url?: string }
  ) => ({
    "@type": "Article",
    headline,
    description,
    url,
    image,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      ...author,
    },
  }),

  breadcrumb: (items: { name: string; url: string }[]) => ({
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),
};
