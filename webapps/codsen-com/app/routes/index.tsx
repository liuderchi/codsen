import { Link } from "remix";
// import stylesUrl from "../styles/index.css";

// export const links: LinksFunction = () => {
//   return [{ rel: "stylesheet", href: stylesUrl }];
// };

export default function IndexRoute() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Here&apos;s a <Link to="/">link</Link>
      </p>
    </div>
  );
}
