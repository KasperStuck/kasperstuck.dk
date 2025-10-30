import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { Button } from "./components/ui/button";
import { ThemeToggle } from "./components/theme-toggle";

// Loader to read theme from cookies for SSR
export async function loader({ request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const themeCookie = cookieHeader
    ?.split("; ")
    .find((row) => row.startsWith("theme="))
    ?.split("=")[1];

  // Default to dark if no cookie is set
  const theme = themeCookie === "light" || themeCookie === "dark" ? themeCookie : "dark";

  return { theme };
}

export const links: Route.LinksFunction = () => [
  // Self-hosted fonts - preload critical font files for faster LCP
  {
    rel: "preload",
    href: "/fonts/inter-400.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: "/fonts/inter-600.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },

  // Favicons and web manifest
  { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
  // TODO: Generate these favicon files
  // { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
  // { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
  // { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  { rel: "manifest", href: "/site.webmanifest" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  // Get theme from loader data (will be undefined during ErrorBoundary render)
  let theme = "dark";
  try {
    const data = useLoaderData<typeof loader>();
    theme = data?.theme || "dark";
  } catch {
    // useLoaderData throws when there's no loader data (e.g., in ErrorBoundary)
    // Fall back to dark theme
  }

  return (
    <html lang="da" className={theme === "dark" ? "dark" : undefined}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1e293b" />

        {/* Sync localStorage to cookie for SSR consistency - doesn't modify DOM to prevent hydration mismatch */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Sync localStorage to cookie if needed, but don't modify DOM (React will handle it)
                const localTheme = localStorage.getItem('theme');
                const cookieTheme = document.cookie
                  .split('; ')
                  .find(row => row.startsWith('theme='))
                  ?.split('=')[1];

                // If localStorage has a theme but no cookie exists, set cookie for next SSR
                if (localTheme && !cookieTheme) {
                  document.cookie = 'theme=' + localTheme + '; path=/; max-age=31536000; SameSite=Lax';
                }
              })();
            `,
          }}
        />

        {/* Albacross tracking - lazy loaded after page load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window._nQc="89511897";
              // Lazy load Albacross after page load to not impact PageSpeed
              if (window.requestIdleCallback) {
                requestIdleCallback(function() {
                  var script = document.createElement('script');
                  script.src = 'https://serve.albacross.com/track.js';
                  script.async = true;
                  document.head.appendChild(script);
                });
              } else {
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    var script = document.createElement('script');
                    script.src = 'https://serve.albacross.com/track.js';
                    script.async = true;
                    document.head.appendChild(script);
                  }, 1000);
                });
              }
            `,
          }}
        />

        {/* Meta tags from routes */}
        <Meta />

        {/* Links (fonts, favicons, etc) */}
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  // Determine error type and content
  let errorCode = "500";
  let title = "Noget gik galt";
  let message = "Der opstod en uventet fejl. Prøv venligst igen senere.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    errorCode = String(error.status);
    if (error.status === 404) {
      title = "Siden blev ikke fundet";
      message = "Beklager, siden du leder efter eksisterer ikke eller er blevet flyttet.";
    } else if (error.status >= 500) {
      title = "Noget gik galt";
      message = "Der opstod en fejl på serveren. Prøv venligst igen senere.";
    } else {
      title = "Der opstod en fejl";
      message = error.statusText || "Der opstod en uventet fejl.";
    }
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    message = error.message;
    stack = error.stack;
  }

  // Get theme (same approach as Layout)
  let theme = "dark";
  try {
    const data = useLoaderData<typeof loader>();
    theme = data?.theme || "dark";
  } catch {
    // useLoaderData throws in ErrorBoundary context sometimes
  }

  return (
    <div className={`flex h-full min-h-screen flex-col ${theme === "dark" ? "dark" : ""}`}>
      <div className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        {/* Background decoration */}
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
          </div>
        </div>

        {/* Main content */}
        <div className="relative flex w-full flex-col">
          {/* Header with avatar and theme toggle */}
          <header className="pointer-events-none relative z-50 flex flex-none flex-col">
            <div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"></div>
            <div className="sm:px-8 top-0 order-last -mb-3 pt-3">
              <div className="mx-auto w-full max-w-7xl lg:px-8">
                <div className="relative px-4 sm:px-8 lg:px-12">
                  <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    <div className="relative">
                      <a
                        href="/"
                        aria-label="Home"
                        className="block h-16 w-16 origin-left pointer-events-auto"
                      >
                        <img
                          src="/images/kasper-stuck.webp"
                          alt="Kasper Stück"
                          className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Theme toggle */}
            <div className="top-0 z-10 h-16 pt-6">
              <div className="sm:px-8 w-full">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                  <div className="relative px-4 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-2xl lg:max-w-5xl">
                      <div className="relative flex gap-4">
                        <div className="flex flex-1"></div>
                        <div className="flex justify-end md:flex-1">
                          <div className="pointer-events-auto">
                            <ThemeToggle />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Error content */}
          <main className="flex-auto">
            <div className="sm:px-8 mt-9">
              <div className="mx-auto w-full max-w-7xl lg:px-8">
                <div className="relative px-4 sm:px-8 lg:px-12">
                  <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    <div className="max-w-2xl">
                      {/* Error code */}
                      <h1 className="text-6xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-8xl">
                        {errorCode}
                      </h1>

                      {/* Error title */}
                      <h2 className="mt-6 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
                        {title}
                      </h2>

                      {/* Error message */}
                      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        {message}
                      </p>

                      {/* Home button */}
                      <div className="mt-8">
                        <Button href="/" outline>
                          Gå til forside
                        </Button>
                      </div>

                      {/* Stack trace in dev mode */}
                      {stack && (
                        <div className="mt-8">
                          <details className="rounded-lg border border-zinc-300 dark:border-zinc-700/40 p-4">
                            <summary className="cursor-pointer text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                              Stack trace (dev mode)
                            </summary>
                            <pre className="mt-4 overflow-x-auto text-xs text-zinc-600 dark:text-zinc-400">
                              <code>{stack}</code>
                            </pre>
                          </details>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
