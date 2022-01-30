import { json, Outlet } from "remix";
import type { ActionFunction, LoaderFunction } from "remix";

// -----------------------------------------------------------------------------

import { unencryptedSession } from "../sessions.server";

export const action: ActionFunction = async ({ request }) => {
  console.log(`${`\u001b[${35}m${`os.tsx layout action`}\u001b[${39}m`}`);

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
  // console.log(`${`\u001b[${33}m${`Loader of $packageId.tsx`}\u001b[${39}m`}`);
  // if (!params.packageId || !packages.all.includes(params.packageId as any)) {
  //   throw new Response("Not Found", {
  //     status: 404,
  //   });
  // }

  console.log(`${`\u001b[${35}m${`os.tsx layout loader`}\u001b[${39}m`}`);

  let session = await unencryptedSession.getSession(
    request.headers.get("Cookie")
  );
  let theme = session.get("theme") || "auto";

  return { theme };
};

// -----------------------------------------------------------------------------

export default function LayoutRoute() {
  return <Outlet />;
}
