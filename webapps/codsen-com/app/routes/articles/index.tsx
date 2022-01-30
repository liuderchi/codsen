import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import type { Article } from "~/utils/content.server";
import { ArticleListEntry } from "~/components/article-list-entry/article-list-entry";
import { getAllArticles } from "~/utils/content.server";

// -----------------------------------------------------------------------------

export const loader: LoaderFunction = async () => {
  const articles = await getAllArticles();
  return articles;
};

// -----------------------------------------------------------------------------

export default function Index() {
  let articles = useLoaderData();
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
