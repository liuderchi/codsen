import { json, useLoaderData } from "remix";
import type { LoaderFunction, ActionFunction } from "remix";
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";
import { useMdxComponent } from "~/utils/mdx";
import { getArticle } from "~/utils/content.server";
import invariant from "tiny-invariant";

// -----------------------------------------------------------------------------

import { action as rootAction } from "~/root";
export const action = rootAction;

export const loader: LoaderFunction = async ({ request, params }) => {
  const slug = params.slug;
  invariant(slug, `Post slug ${slug} is missing`);
  return await getArticle(slug);
};

// -----------------------------------------------------------------------------

export default function FullArticle() {
  const { title, date, code } = useLoaderData();
  const Component = useMdxComponent(code);

  return (
    <article>
      <h1>{title}</h1>
      <p>Date: {format(parseISO(date), "MMMM dd, yyyy")}</p>
      <div>
        <Component />
      </div>
    </article>
  );
}
