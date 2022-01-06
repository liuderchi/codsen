import { Link } from "remix";

export default function IndexRoute() {
  return (
    <>
      <h1>About</h1>
      link to <Link to="/about/trivia">trivia</Link> or{" "}
      <Link to="/about/licences">licences</Link>
    </>
  );
}
