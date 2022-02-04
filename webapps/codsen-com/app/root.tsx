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
  useLoaderData,
} from "remix";
import type { MetaFunction } from "remix";
import { useMatch, useLocation } from "react-router-dom";
import { pathNameToCSSClass } from "./utils/pathNameToCSSClass";

import { Header } from "~/components/header/header";

import { FooterBig } from "~/components/footer-big/footer-big";
import footerBigStylesUrl from "~/components/footer-big/footer-big.css";

import { FooterSmall } from "~/components/footer-small/footer-small";
import footerSmallStylesUrl from "~/components/footer-small/footer-small.css";

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

// -----------------------------------------------------------------------------

import { unencryptedSession } from "~/sessions.server";
export const action: ActionFunction = async ({ request }) => {
  console.log(`${`\u001b[${36}m${`root.tsx action`}\u001b[${39}m`}`);
  let session = await unencryptedSession.getSession(
    request.headers.get("Cookie")
  );
  let formData = new URLSearchParams(await request.text());
  let theme = formData.get("theme") || "auto";
  session.set("theme", theme);
  return json(null, {
    headers: {
      "Set-Cookie": await unencryptedSession.commitSession(session),
    },
  });
};

export const loader: LoaderFunction = async ({ request }) => {
  console.log(`${`\u001b[${36}m${`root.tsx loader`}\u001b[${39}m`}`);
  let session = await unencryptedSession.getSession(
    request.headers.get("Cookie")
  );
  let theme = session.get("theme") || "auto";
  return { theme };
};

// -----------------------------------------------------------------------------

export type Theme = "auto" | "light" | "dark";
export const VALID_THEMES: Theme[] = ["auto", "dark", "light"];

function Document({
  children,
  title,
  selectedTheme = "auto",
  maxWide = false,
}: {
  children: React.ReactNode;
  title?: string;
  selectedTheme?: Theme;
  maxWide?: boolean;
}) {
  return (
    <html lang="en" data-theme={selectedTheme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body
        id="page-top"
        className={`paper-surface${maxWide ? " maxWide" : ""}`}
      >
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <p>PS. This is root ErrorBoundary.</p>
        </div>
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  const caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout hideThemeToggle>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  );
}

function Layout({
  children,
  selectedTheme = "auto",
  maxWide = false,
  hideThemeToggle = false,
}: {
  children: React.ReactNode;
  selectedTheme?: Theme;
  maxWide?: boolean;
  hideThemeToggle?: boolean;
}) {
  let formRef = useRef<HTMLFormElement>(null);
  let submit = useSubmit();
  let location = useLocation();

  let onRadioChanged = () => {
    console.log(`root.tsx: onRadioChanged() called`);
    submit(formRef.current, { action: location.pathname });
  };

  let globalNavPath: string = "/";
  let globalNavClass = "global-nav-website";

  const isLoginPath = !!useMatch({
    path: "/login",
    end: false,
  });
  const isServicesPath = !!useMatch({
    path: "/s",
    end: false,
  });

  if (isLoginPath) {
    globalNavPath = "/login";
    globalNavClass = "global-nav-login";
  } else if (isServicesPath) {
    globalNavPath = "/s";
    globalNavClass = "global-nav-services";
  }

  const FooterClassName = maxWide ? "footer-small" : "footer-big";

  return (
    <div className="remix-app">
      <div
        className={`remix-app__container ${globalNavClass} ${pathNameToCSSClass(
          location.pathname
        )}`}
      >
        <Header
          formRef={formRef}
          hideThemeToggle={hideThemeToggle}
          selectedTheme={selectedTheme}
          onRadioChanged={onRadioChanged}
          globalNavPath={globalNavPath}
          isLoginPath={isLoginPath}
          isServicesPath={isServicesPath}
        />
        <hr className="mt0 mb0" />
        <div className="remix-app__main">
          <div className="container remix-app__main-content">{children}</div>
        </div>
      </div>
      <footer className={`remix-app__footer ${FooterClassName}`}>
        {maxWide ? <FooterSmall /> : <FooterBig />}
      </footer>
    </div>
  );
}

export default function App() {
  let { theme = "auto" } = useLoaderData();

  // playgrounds should have full-screen UI
  let isOneOfPlayPages = !!useMatch({
    path: "/os/play",
    end: false,
  });
  let isPlayHomepage = !!useMatch({
    path: "/os/play",
    end: true,
  });
  let maxWide = isOneOfPlayPages && !isPlayHomepage;

  return (
    <Document selectedTheme={theme} maxWide={maxWide}>
      <Layout selectedTheme={theme} maxWide={maxWide}>
        <Outlet />
      </Layout>
    </Document>
  );
}
