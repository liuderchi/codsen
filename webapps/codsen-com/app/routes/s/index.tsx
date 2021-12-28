import { Link } from "remix";

export default function IndexRoute() {
  return (
    <>
      <h1>Online Services</h1>
      <p>
        <Link to="/s">services root</Link>
      </p>
      <p>
        <Link to="/s/training">/s/training</Link>
      </p>
    </>
  );
}
