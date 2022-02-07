import { json, LoaderFunction, useLoaderData } from "remix";
import type { Article } from "~/utils/content.server";
import { ArticleListEntry } from "~/components/article-list-entry/article-list-entry";
import { getAllArticles } from "~/utils/content.server";

// -----------------------------------------------------------------------------

type LoaderData = {
  articles: Article[];
};

export const loader: LoaderFunction = async () => {
  const articles = await getAllArticles();
  const sortedArticles = articles.sort((a, b) => {
    const aDate = a.date instanceof Date ? a.date : new Date(a.date);
    const bDate = b.date instanceof Date ? b.date : new Date(b.date);
    return bDate.getTime() - aDate.getTime();
  });

  const data: LoaderData = { articles: sortedArticles };

  return json(data, {
    headers: {
      "Cache-Control": "private, max-age=3600",
      Vary: "Cookie",
    },
  });
};

// -----------------------------------------------------------------------------

export default function Index() {
  let { articles } = useLoaderData<LoaderData>();
  return (
    <>
      <h1>Articles</h1>
      <div>
        <ul>
          {Array.isArray(articles) &&
            articles.map((post: Article) => (
              <li key={post.slug}>
                <ArticleListEntry
                  slug={post.slug}
                  title={post.title}
                  description={post.description}
                />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
