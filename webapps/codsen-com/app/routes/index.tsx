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
        <Link to="/os/play/json-variables">json-variables playground</Link>
      </p>
    </div>
  );
}
