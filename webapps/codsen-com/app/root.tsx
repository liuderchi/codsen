import { useRef } from "react";
import type {
  ActionFunction,
  LinksFunction,
  LinkProps,
  LoaderFunction,
} from "remix";
import {
  json,
  Link,
  Links,
  LiveReload,
  Form,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useSubmit,
  useLoaderData,
} from "remix";
import type { MetaFunction } from "remix";
import { useMatch, useResolvedPath, useLocation } from "react-router-dom";
import { pathNameToCSSClass } from "./utils/pathNameToCSSClass";

import { FooterBig } from "~/components/footer-big/footer-big";
import footerBigStylesUrl from "~/components/footer-big/footer-big.css";

import { FooterSmall } from "~/components/footer-small/footer-small";
import footerSmallStylesUrl from "~/components/footer-small/footer-small.css";

import { CodsenLogo } from "~/components/svg/codsen-logo";
import { IconNewTab } from "~/components/svg/icon-new-tab";

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

import { unencryptedSession } from "./sessions.server";
export const action: ActionFunction = async ({ request }) => {
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
  let session = await unencryptedSession.getSession(
    request.headers.get("Cookie")
  );
  let theme = session.get("theme") || "auto";
  return json({ theme });
};

// -----------------------------------------------------------------------------

type Theme = "auto" | "light" | "dark";
const VALID_THEMES: Theme[] = ["auto", "dark", "light"];

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
        {process.env.NODE_ENV === "development" && <LiveReload />}
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
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
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

interface NavLinkInterface extends LinkProps {
  globalNavPath?: string;
}
function NavLink({ children, to, globalNavPath, ...props }: NavLinkInterface) {
  let resolved = useResolvedPath(to);
  let isActive;
  if (globalNavPath) {
    isActive = to === globalNavPath;
  } else {
    isActive = !!useMatch({
      path: resolved.pathname,
      end: resolved.pathname === "/" || resolved.pathname === "/s",
    });
  }

  return (
    <Link {...(isActive ? { className: "active" } : {})} to={to} {...props}>
      <span>{children}</span>
    </Link>
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
    submit(formRef.current, { action: location.pathname });
  };

  let globalNavPath = "/";
  let globalNavClass = "global-nav-website";

  const isLoginPath = useMatch({
    path: "/login",
    end: false,
  });
  const isServicesPath = useMatch({
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
        <header className="remix-app__header">
          <div className="container remix-app__header-content">
            {!hideThemeToggle && (
              <Form
                className="remix-app__theme-toggle"
                ref={formRef}
                method="post"
              >
                {VALID_THEMES.map((theme) => (
                  <div key={theme} className="form-control">
                    <label className="cursor-pointer label">
                      <span className="label-text">{theme}</span>
                      <input
                        data-testid={`theme-${theme}`}
                        type="radio"
                        name="theme"
                        defaultChecked={selectedTheme === theme}
                        className="radio"
                        value={theme}
                        onChange={onRadioChanged}
                      />
                    </label>
                  </div>
                ))}
                <noscript>
                  <button type="submit" className="btn btn-primary">
                    Set
                  </button>
                </noscript>
              </Form>
            )}
            <nav
              aria-label="Global navigation"
              className="remix-app__nav remix-app__header-global-nav"
            >
              <ul>
                <li>
                  <NavLink to="/" globalNavPath={globalNavPath}>
                    Website
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/s" globalNavPath={globalNavPath}>
                    Services
                  </NavLink>
                </li>
                {/* <li>
                  <a href="https://github.com/codsen" target="_blank">
                    <span>
                      GitHub
                      <IconNewTab />
                    </span>
                  </a>
                </li> */}
                <li>
                  <NavLink to="/login" globalNavPath={globalNavPath}>
                    Login
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="remix-app__header-home-link-container">
              <Link to="/" className="remix-app__header-home-link">
                <CodsenLogo />
              </Link>
            </div>
            {!isLoginPath && !isServicesPath && (
              <nav
                aria-label="Main navigation"
                className="remix-app__nav remix-app__header-nav"
              >
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/os">Open Source</NavLink>
                  </li>
                  <li>
                    <NavLink to="/articles">Articles</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                </ul>
              </nav>
            )}
            {isServicesPath && (
              <nav
                aria-label="Main navigation"
                className="remix-app__nav remix-app__header-nav"
              >
                <ul>
                  <li>
                    <NavLink to="/s">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/s/training">Training</NavLink>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </header>
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
  // let maxWide = useMatch({ path: useResolvedPath("/os/play").pathname });
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
