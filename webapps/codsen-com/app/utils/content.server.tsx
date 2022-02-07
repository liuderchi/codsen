import { getMdxFile, getMdxFilesFromDir } from "./mdx.server";

interface ArticleFrontMatter {
  title: string;
  description: string;
  date: Date | string;
  categories: Array<string>;
  meta: {
    keywords: Array<string>;
  };
  [key: string]: unknown;
}

export interface Article extends ArticleFrontMatter {
  slug: string;
  code: string;
}

interface ReadmeFrontMatter {
  title: string;
  packages?: Array<string>;
  [key: string]: unknown;
}

export interface Readme extends ReadmeFrontMatter {
  slug: string;
  code?: string;
}

function toArticle(article: {
  frontmatter: ArticleFrontMatter;
  slug: string;
  code: string;
}): Article {
  return {
    ...article.frontmatter,
    slug: article.slug,
    code: article.code,
  };
}

function toReadme(readme: {
  frontmatter: ReadmeFrontMatter;
  slug: string;
  code: string;
}): Readme {
  return {
    ...readme.frontmatter,
    slug: readme.slug,
    code: readme.code,
  };
}

async function getAllArticles(): Promise<Array<Article>> {
  return (await getMdxFilesFromDir<ArticleFrontMatter>("articles")).map(
    toArticle
  );
}

async function getArticle(slug: string): Promise<Article> {
  const data = await getMdxFile<ArticleFrontMatter>("articles", `${slug}.mdx`);
  return toArticle(data);
}

async function getAllReadmes(): Promise<Array<Readme>> {
  return (await getMdxFilesFromDir<ReadmeFrontMatter>("readmes")).map(toReadme);
}

async function getReadme(slug: string): Promise<Readme> {
  const data = await getMdxFile<ReadmeFrontMatter>("readmes", `${slug}.mdx`);
  return toReadme(data);
}

export { getAllArticles, getArticle, getAllReadmes, getReadme };
