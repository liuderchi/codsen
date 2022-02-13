import { useLocation } from "remix";
import { Breadcrumb } from "~/components/breadcrumb/breadcrumb";

export default function IndexRoute() {
  let location = useLocation();

  return (
    <>
      <Breadcrumb currentPath={location.pathname} />
      routes/os/json-variables.try/index.tsx
    </>
  );
}
