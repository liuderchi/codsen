import type { LinksFunction } from "remix";

import stylesUrl from "~/styles/page-login.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function IndexRoute() {
  return (
    <>
      <h1>Login</h1>
      <p>TBC</p>
    </>
  );
}
