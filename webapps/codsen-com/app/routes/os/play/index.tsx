import { Link } from "remix";

export default function IndexRoute() {
  return (
    <>
      <h1>All playgrounds</h1>
      <Link to="/os/play/json-variables">json-variables</Link>
    </>
  );
}
