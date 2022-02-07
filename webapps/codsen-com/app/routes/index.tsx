import { json, LoaderFunction, useLoaderData } from "remix";
import type { Article } from "~/utils/content.server";
import { ArticleListEntry } from "~/components/article-list-entry/article-list-entry";
import { getAllArticles } from "~/utils/content.server";
import { Link } from "../components/link";

// import stylesUrl from "../styles/index.css";

// export const links: LinksFunction = () => {
//   return [{ rel: "stylesheet", href: stylesUrl }];
// };

// -----------------------------------------------------------------------------

type LoaderData = {
  articles: Article[];
};

export const loader: LoaderFunction = async () => {
  const articles = await getAllArticles();
  const latestArticles = articles
    .sort((a, b) => {
      const aDate = a.date instanceof Date ? a.date : new Date(a.date);
      const bDate = b.date instanceof Date ? b.date : new Date(b.date);
      return bDate.getTime() - aDate.getTime();
    })
    .slice(0, 5);

  const data: LoaderData = { articles: latestArticles };

  return json(data, {
    headers: {
      "Cache-Control": "private, max-age=3600",
      Vary: "Cookie",
    },
  });
};

// -----------------------------------------------------------------------------

export default function IndexRoute() {
  let { articles } = useLoaderData<LoaderData>();
  return (
    <div>
      <p>
        <Link to="/os/play/json-variables">json-variables playground</Link>
      </p>
      <p>
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
      </p>
    </div>
  );
}
