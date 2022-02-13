import { useRef } from "react";
import type { ActionFunction, LinksFunction, LoaderFunction } from "remix";
import {
  json,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useSubmit,
  useLocation,
  useLoaderData,
} from "remix";
import type { MetaFunction } from "remix";
import {
  ThemeProvider,
  useTheme,
  PreventFlashOnWrongTheme,
  Theme,
} from "remix-themes";

import { useMatch } from "react-router-dom";
import { pathNameToCSSClass } from "./utils/misc";

import { Header } from "~/components/header/header";
import { FourZeroFour, ServerError } from "~/components/errors";

import { FooterBig } from "~/components/footer-big/footer-big";
import footerBigStylesUrl from "~/components/footer-big/footer-big.css";

import { FooterSmall } from "~/components/footer-small/footer-small";
import footerSmallStylesUrl from "~/components/footer-small/footer-small.css";

import { getEnv } from "~/utils/env.server";
import { themeSessionResolver } from "./utils/theme.server";
import { getDomainUrl, getDisplayUrl } from "~/utils/misc";
import { otherRoutes } from "~/other-routes.server";

// Styling
// -----------------------------------------------------------------------------

import darkColorVariablesUrl from "@codsen/design-tokens/dist/codsen-dark/css/variables/color-semantic.css";
import darkSizeVariablesUrl from "@codsen/design-tokens/dist/codsen-dark/css/variables/size-semantic.css";
import paperSurfaceStylesUrl from "~/styles/paper-surface.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: darkColorVariablesUrl },
    { rel: "stylesheet", href: darkSizeVariablesUrl },
    { rel: "stylesheet", href: paperSurfaceStylesUrl },
    { rel: "stylesheet", href: footerBigStylesUrl },
    { rel: "stylesheet", href: footerSmallStylesUrl },
  ];
};

// Loaders and Actions
// -----------------------------------------------------------------------------

export type LoaderData = {
  ENV: ReturnType<typeof getEnv>;
  requestInfo: {
    origin: string;
    path: string;
    session: {
      theme: Theme | null;
    };
  };
};

export const loader: LoaderFunction = async ({ request }) => {
  //
  // because this is called for every route, we'll do an early return for anything
  // that has a other route setup. The response will be handled there.
  if (otherRoutes[new URL(request.url).pathname]) {
    return new Response();
  }

  const { getTheme } = await themeSessionResolver(request);

  const data: LoaderData = {
    ENV: getEnv(),
    requestInfo: {
      origin: getDomainUrl(request),
      path: new URL(request.url).pathname,
      session: {
        theme: getTheme(),
      },
    },
  };

  const headers: HeadersInit = new Headers();
  return json(data, { headers });
};

// UI
// -----------------------------------------------------------------------------

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <html lang="en">
      <head>
        <title>Oh no...</title>
        <Meta />
        <Links />
      </head>
      <body>
        <ServerError error={error} />
      </body>
      <Scripts />
    </html>
  );
}

function App() {
  const data = useLoaderData<LoaderData>();
  const [theme] = useTheme();

  let location = useLocation();
  let maxWide = location.pathname.endsWith("/try");

  const FooterClassName = maxWide ? "footer-small" : "footer-big";

  return (
    <html lang="en" data-theme={theme ?? ""}>
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <PreventFlashOnWrongTheme
          ssrTheme={Boolean(data.requestInfo.session.theme)}
        />
        <Links />
      </head>
      <body
        id="page-top"
        className={`paper-surface${maxWide ? " maxWide" : ""}`}
      >
        <div className="remix-app">
          <div
            className={`remix-app__container ${pathNameToCSSClass(
              location.pathname
            )}`}
          >
            <Header />
            <hr className="mt0 mb0" />
            <div className="remix-app__main">
              <div className="container remix-app__main-content">
                <Outlet />
              </div>
            </div>
          </div>
          <footer className={`remix-app__footer ${FooterClassName}`}>
            {maxWide ? <FooterSmall /> : <FooterBig />}
          </footer>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const data = useLoaderData<LoaderData>();

  return (
    <ThemeProvider
      specifiedTheme={data.requestInfo.session.theme}
      themeAction="/action/set-theme"
    >
      <App />
    </ThemeProvider>
  );
}
