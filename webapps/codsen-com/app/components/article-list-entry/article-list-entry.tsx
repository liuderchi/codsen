import { Link } from "remix";
import type { Article } from "~/utils/content.server";

export const ArticleListEntry = ({
  title,
  description,
  slug,
}: Pick<Article, "title" | "description" | "slug">) => {
  return (
    <Link to={`/articles/${slug}`}>
      <h4>{title}</h4>
      <p>{description}</p>
    </Link>
  );
};
