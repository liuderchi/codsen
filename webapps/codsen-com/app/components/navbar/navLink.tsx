import { Link } from "remix";
import type { LinkProps } from "remix";
import { useMatch, useResolvedPath } from "react-router-dom";

interface NavLinkInterface extends LinkProps {
  globalNavPath?: string;
  active?: boolean;
}

export const NavLink = ({
  children,
  to,
  active = false,
  globalNavPath,
  ...props
}: NavLinkInterface) => {
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
};
