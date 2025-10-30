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
  // Fonts
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
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
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
