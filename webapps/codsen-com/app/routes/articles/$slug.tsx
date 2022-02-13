import { json, useLoaderData } from "remix";
import type { LoaderFunction, ActionFunction } from "remix";
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";
import { useMdxComponent } from "~/utils/mdx";
import { getArticle, Article } from "~/utils/content.server";
import type { AppLoader } from "~/types";
import invariant from "tiny-invariant";

// -----------------------------------------------------------------------------

type LoaderData = {
  article: Article;
};

export const loader: AppLoader<{ slug: string }> = async ({ params }) => {
  const { slug } = params;
  invariant(slug, `Post slug ${slug} is missing`);
  const article = await getArticle(slug);

  if (!article) {
    throw new Response("Not Found", { status: 404 });
  }

  const data: LoaderData = { article };

  return json(data, {
    headers: {
      "Cache-Control": "private, max-age=3600",
      Vary: "Cookie",
    },
  });
};

// -----------------------------------------------------------------------------

export default function FullArticle() {
  const { article } = useLoaderData<LoaderData>();
  const { title, date, code } = article;
  const Component = useMdxComponent(code);

  return (
    <article>
      <h1>{title}</h1>
      <p>
        Date:{" "}
        {format(date instanceof Date ? date : parseISO(date), "MMMM dd, yyyy")}
      </p>
      <div>
        <Component />
      </div>
    </article>
  );
}
