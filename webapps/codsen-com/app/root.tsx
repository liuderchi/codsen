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
import { CodsenLogo } from "./components/codsen-logo";

// -----------------------------------------------------------------------------

import globalStylesUrl from "~/styles/global-styles.css";
import darkColorVariablesUrl from "@codsen/design-tokens/dist/codsen-dark/css/variables/color-semantic.css";
import darkSizeVariablesUrl from "@codsen/design-tokens/dist/codsen-dark/css/variables/size-semantic.css";
import paperSurfaceStylesUrl from "~/styles/paper-surface.css";
export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: darkColorVariablesUrl },
    { rel: "stylesheet", href: darkSizeVariablesUrl },
    { rel: "stylesheet", href: globalStylesUrl },
    { rel: "stylesheet", href: paperSurfaceStylesUrl },
  ];
};

// -----------------------------------------------------------------------------

import { unencryptedSession } from "./sessions.server";
export const action: ActionFunction = async ({ request }) => {
  console.log(`046 ActionFunction()`);
  let session = await unencryptedSession.getSession(
    request.headers.get("Cookie")
  );

  let formData = new URLSearchParams(await request.text());

  let theme = formData.get("theme") || "auto";
  console.log(
    `055 ${`\u001b[${33}m${`theme`}\u001b[${39}m`} = ${JSON.stringify(
      theme,
      null,
      4
    )}`
  );
  session.set("theme", theme);

  console.log(`063 ActionFunction: FINAL RETURN`);
  return json(null, {
    headers: {
      "Set-Cookie": await unencryptedSession.commitSession(session),
    },
  });
};

export const loader: LoaderFunction = async ({ request }) => {
  console.log(`072 LoaderFunction()`);
  let session = await unencryptedSession.getSession(
    request.headers.get("Cookie")
  );
  let theme = session.get("theme") || "auto";
  console.log(
    `078 root.tsx ${`\u001b[${33}m${`theme`}\u001b[${39}m`} = ${JSON.stringify(
      theme,
      null,
      4
    )}`
  );
  return json({ theme });
};

// -----------------------------------------------------------------------------

type Theme = "auto" | "light" | "dark";
const VALID_THEMES: Theme[] = ["auto", "dark", "light"];

function Document({
  children,
  title,
  selectedTheme = "auto",
}: {
  children: React.ReactNode;
  title?: string;
  selectedTheme: Theme;
}) {
  // playgrounds should have full-screen UI
  let paperSurface = !useMatch({ path: useResolvedPath("/play").pathname });
  return (
    <html lang="en" data-theme={selectedTheme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body {...(paperSurface ? { className: "paper-surface" } : {})}>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
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
}: {
  children: React.ReactNode;
  selectedTheme: Theme;
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

  return (
    <div className="remix-app">
      <div className={`remix-app__container ${globalNavClass}`}>
        <header className="remix-app__header">
          <div className="container remix-app__header-content">
            {selectedTheme && (
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
                <li>
                  <a href="https://github.com/codsen" target="_blank">
                    <span>
                      GitHub<sup>*</sup>
                    </span>
                  </a>
                </li>
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
                    <NavLink to="/blog">Blog</NavLink>
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
        <hr className="mt0" />
        <div className="remix-app__main">
          <div className="container remix-app__main-content">{children}</div>
        </div>
      </div>
      <footer className="remix-app__footer">
        <div className="container remix-app__footer-content">
          <p>&copy; You!</p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  let { theme = "auto" } = useLoaderData();
  return (
    <Document selectedTheme={theme}>
      <Layout selectedTheme={theme}>
        <Outlet />
      </Layout>
    </Document>
  );
}
