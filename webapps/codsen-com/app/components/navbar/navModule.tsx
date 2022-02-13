import { useMatch } from "react-router-dom";
import type { NavLinkObj } from "../header/header";
import { NavLink } from "./navlink";

interface NavModuleProps {
  links: NavLinkObj[];
  global?: boolean;
}
export const NavModule = ({ links, global = false }: NavModuleProps) => {
  let globalNavPath: string = "/";

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
  } else if (isServicesPath) {
    globalNavPath = "/s";
  }

  return (
    <nav
      aria-label={global ? "Global navigation" : "Main navigation"}
      className={`remix-app__nav ${
        global ? "remix-app__header-global-nav" : "remix-app__header-nav"
      }`}
    >
      <ul>
        {links.map(({ to, label }, idx) => (
          <li key={`${label.toLowerCase()}${idx}`}>
            <NavLink to={to} {...(global ? { globalNavPath } : {})}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
