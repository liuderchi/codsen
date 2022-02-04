import { Link, Form } from "remix";
import { VALID_THEMES, Theme } from "~/root";
import { NavLink } from "~/components/navlink/navlink";
import { CodsenLogo } from "~/components/svg/codsen-logo";

interface HeaderProps {
  formRef: React.RefObject<HTMLFormElement>;
  hideThemeToggle: boolean;
  selectedTheme: Theme;
  onRadioChanged: () => void;
  globalNavPath: string;
  isLoginPath: boolean;
  isServicesPath: boolean;
}
export const Header = ({
  formRef,
  hideThemeToggle,
  selectedTheme,
  onRadioChanged,
  globalNavPath,
  isLoginPath,
  isServicesPath,
}: HeaderProps) => {
  return (
    <header className="remix-app__header">
      <div className="container remix-app__header-content">
        {!hideThemeToggle && (
          <Form
            className="remix-app__theme-toggle"
            ref={formRef}
            method="post"
            action="/"
          >
            {VALID_THEMES.map((theme) => (
              <div key={theme} className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text">{theme}</span>
                  <input
                    data-test={`theme-${theme}`}
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
  );
};
