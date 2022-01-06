import { Link } from "remix";

export default function IndexRoute() {
  return (
    <>
      <h1>Trivia</h1>
      go back to <Link to="/about">about</Link>
    </>
  );
}
