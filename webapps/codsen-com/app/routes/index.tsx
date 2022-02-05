import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import type { Article } from "~/utils/content.server";
import { ArticleListEntry } from "~/components/article-list-entry/article-list-entry";
import { getAllArticles } from "~/utils/content.server";
import { Link } from "../components/link";

// import stylesUrl from "../styles/index.css";

// export const links: LinksFunction = () => {
//   return [{ rel: "stylesheet", href: stylesUrl }];
// };

// -----------------------------------------------------------------------------

export const loader: LoaderFunction = async () => {
  const articles = await getAllArticles();
  return articles;
};

// -----------------------------------------------------------------------------

export default function IndexRoute() {
  let articles = useLoaderData();
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
