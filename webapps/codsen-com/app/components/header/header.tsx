import { Link } from "remix";
import { useMatch } from "react-router-dom";
import { NavModule } from "~/components/navBar/navModule";
import { NavLink } from "~/components/navbar/navLink";
import { CodsenLogo } from "~/components/svg/codsen-logo";
import ThemeToggle from "../navbar/themeToggle";

export interface NavLinkObj {
  label: string;
  to: string;
}

const globalNavLinks: NavLinkObj[] = [
  {
    label: "Website",
    to: "/",
  },
  {
    label: "Services",
    to: "/s",
  },
  {
    label: "Login",
    to: "/login",
  },
];

const websiteNavLinks: NavLinkObj[] = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Open Source",
    to: "/os",
  },
  {
    label: "Articles",
    to: "/articles",
  },
  {
    label: "About",
    to: "/about",
  },
];

const servicesNavLinks: NavLinkObj[] = [
  {
    label: "Home",
    to: "/s",
  },
  {
    label: "Training",
    to: "/s/training",
  },
];

export const Header = () => {
  const isLoginPath = !!useMatch({
    path: "/login",
    end: false,
  });
  const isServicesPath = !!useMatch({
    path: "/s",
    end: false,
  });
  return (
    <header className="remix-app__header">
      <div className="container remix-app__header-content">
        <div className="remix-app__theme-toggle">
          <ThemeToggle />
        </div>
        <NavModule global links={globalNavLinks} />
        <div className="remix-app__header-home-link-container">
          <Link to="/" className="remix-app__header-home-link">
            <CodsenLogo />
          </Link>
        </div>
        {!isLoginPath && !isServicesPath && (
          <NavModule links={websiteNavLinks} />
        )}
        {isServicesPath && <NavModule links={servicesNavLinks} />}
      </div>
    </header>
  );
};
