import { Link as RemixLink, LinkProps } from "remix";

import { IconNewTab } from "./svg/icon-new-tab";

type Props = LinkProps & {
  external?: boolean;
};

export const Link = ({ external, className, to, children, ...rest }: Props) => {
  const href = typeof to === "string" ? to : to.pathname;

  if (external) {
    return (
      <a {...rest} href={href} target="_blank" rel="noopener noreferrer">
        {children}
        <IconNewTab />
      </a>
    );
  }

  return (
    <RemixLink {...rest} to={to}>
      {children}
    </RemixLink>
  );
};
