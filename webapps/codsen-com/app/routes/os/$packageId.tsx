import { json, useParams, useLoaderData, Link } from "remix";
import type { LoaderFunction, ActionFunction } from "remix";
import { getQuasiRandom } from "~/utils/getQuasiRandom";
import { packages } from "@codsen/data";
import { useMdxComponent } from "~/utils/mdx";
import { getReadme } from "~/utils/content.server";

// -----------------------------------------------------------------------------

import { unencryptedSession } from "~/sessions.server";

export const action: ActionFunction = async ({ request }) => {
  let session = await unencryptedSession.getSession(
    request.headers.get("Cookie")
  );
  let formData = new URLSearchParams(await request.text());
  let theme = formData.get("theme") || "auto";
  session.set("theme", theme);
  return json(null, {
    headers: {
      "Set-Cookie": await unencryptedSession.commitSession(session),
    },
  });
};

export const loader: LoaderFunction = async ({ request, params }) => {
  console.log(`${`\u001b[${33}m${`Loader of $packageId.tsx`}\u001b[${39}m`}`);
  if (!params.packageId || !packages.all.includes(params.packageId as any)) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  let session = await unencryptedSession.getSession(
    request.headers.get("Cookie")
  );
  let theme = session.get("theme") || "auto";
  const slug = params.packageId;
  const readme = await getReadme(slug);

  return { theme, readme };
};

// -----------------------------------------------------------------------------

export default function PackageRoute() {
  const { readme } = useLoaderData();
  const { title, date, code } = readme;
  const Component = useMdxComponent(code);

  const params = useParams();

  const currIdInAllPackagesList = packages.all.indexOf(params.packageId as any);
  const quasiRandomArr = getQuasiRandom(packages.all.length);
  const currIdInRandomArray = quasiRandomArr.indexOf(currIdInAllPackagesList);
  // use modulus to cycle within array
  const nextIdInRandomArray =
    quasiRandomArr[
      (currIdInRandomArray + 1 + packages.all.length) % packages.all.length
    ];
  const prevIdInRandomArray =
    quasiRandomArr[
      (currIdInRandomArray - 1 + packages.all.length) % packages.all.length
    ];

  return (
    <article>
      <Link to={`/os/${packages.all[prevIdInRandomArray]}`}>Prev</Link> -{" "}
      <Link to={`/os/${packages.all[nextIdInRandomArray]}`}>Next</Link>
      <h1>{params.packageId}</h1>
      <div>
        <Component />
      </div>
    </article>
  );
}
