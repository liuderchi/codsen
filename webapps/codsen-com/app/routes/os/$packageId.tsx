import { json, useParams, useLoaderData, useLocation, Link } from "remix";
import type { LoaderFunction, ActionFunction } from "remix";
import { themeSessionResolver } from "~/utils/theme.server";
import { getQuasiRandom } from "~/utils/getQuasiRandom";
import { getReadme, Readme } from "~/utils/content.server";
import { useMdxComponent } from "~/utils/mdx";
import { packages, packageJSONData } from "@codsen/data";
import invariant from "tiny-invariant";
import { useTheme } from "remix-themes";
import { Breadcrumb } from "~/components/breadcrumb/breadcrumb";
import type { AppLoader } from "~/types";

type LoaderData = {
  readme: Readme;
};

// -----------------------------------------------------------------------------

export const loader: AppLoader<{ packageId: string }> = async ({ params }) => {
  if (!params.packageId || !packages.all.includes(params.packageId as any)) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  const { packageId } = params;
  const readme = await getReadme(packageId);

  const data: LoaderData = { readme };

  return json(data, {
    headers: {
      "Cache-Control": "private, max-age=3600",
      Vary: "Cookie",
    },
  });
};

// -----------------------------------------------------------------------------

export default function PackageRoute() {
  const { readme } = useLoaderData<LoaderData>();
  const [theme] = useTheme();

  const { title, date, code } = readme;
  invariant(code);
  const Component = useMdxComponent(code);

  const params = useParams();

  const green = theme === "light" ? "63ffbd" : "dedede";
  const labelColor = theme === "light" ? "000" : "fff";

  invariant(params.packageId);

  // ---

  const currIdInAllPackagesList = packages.all.indexOf(params.packageId as any);
  const quasiRandomArr = getQuasiRandom(packages.all.length);
  const currIdInRandomArray = quasiRandomArr.indexOf(currIdInAllPackagesList);

  // use modulus to cycle within array
  const nextIdInRandomArray =
    quasiRandomArr[(currIdInRandomArray + 1) % packages.all.length];
  const prevIdInRandomArray =
    quasiRandomArr[
      (currIdInRandomArray - 1 + packages.all.length) % packages.all.length
    ];
  invariant(nextIdInRandomArray);
  invariant(prevIdInRandomArray);

  // ---

  let location = useLocation();

  return (
    <>
      <Breadcrumb
        prevUrl={`/os/${packages.all[prevIdInRandomArray]}`}
        prevLabel="prev"
        prevAriaLabel="previous random package"
        nextUrl={`/os/${packages.all[nextIdInRandomArray]}`}
        nextLabel="next"
        nextAriaLabel="next random package"
        currentPath={location.pathname}
      />
      <div className="heading">
        <h1>
          <span>
            {params.packageId}
            <sup
              title="current version is 6.0.1"
              aria-label="current version is 6.0.1"
            >
              6.0.1
            </sup>
          </span>
        </h1>
        <p className="heading-subtitle">
          {(packageJSONData as any)[params.packageId].description}
        </p>
        <div className="badges">
          <a
            href={`https://www.npmjs.com/package/${params.packageId}`}
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={`https://img.shields.io/badge/-npm-blue?style=flat-square&color=${green}`}
              alt="page on npm"
            />
          </a>{" "}
          <a
            href={`https://github.com/codsen/codsen/blob/main/packages/${params.packageId}`}
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={`https://img.shields.io/badge/-github-blue?style=flat-square&color=${green}`}
              alt="page on github"
            />
          </a>{" "}
          <a
            href={`https://github.com/codsen/codsen/blob/main/packages/${params.packageId}/types/index.d.ts`}
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={`https://img.shields.io/badge/.d.ts-%E2%9C%94-blue?style=flat-square&color=${green}&labelColor=${labelColor}`}
              alt="page on npm"
            />
          </a>{" "}
          <a
            target="_blank"
            href={`https://npmcharts.com/compare/${params.packageId}?interval=30`}
            rel="noreferrer"
          >
            <img
              src={`https://img.shields.io/npm/dm/${params.packageId}.svg?style=flat-square&color=${green}&labelColor=${labelColor}`}
              alt="Downloads per month"
            />
          </a>{" "}
          <a target="_blank" href="https://prettier.io" rel="noreferrer">
            <img
              src={`https://img.shields.io/badge/code_style-prettier-brightgreen.svg?style=flat-square&color=${green}&labelColor=${labelColor}`}
              alt="Code style: prettier"
            />
          </a>{" "}
          <a
            href="https://github.com/codsen/codsen/blob/main/LICENSE"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={`https://img.shields.io/badge/licence-MIT-brightgreen.svg?style=flat-square&color=${green}&labelColor=${labelColor}`}
              alt="MIT License"
            />
          </a>{" "}
          <a
            target="_blank"
            rel="nofollow noopener noreferrer"
            href="https://liberamanifesto.com"
          >
            <img
              src={`https://img.shields.io/badge/libera-manifesto-lightgrey.svg?style=flat-square&color=${green}&labelColor=${labelColor}`}
              alt="libera manifesto"
            />
          </a>
        </div>
      </div>
      <div className="content">
        <main>
          <article>
            <Component />
          </article>
        </main>
        <aside>
          <ul>
            <li>
              <a className="selected" href="#tbc">
                Installation
              </a>
            </li>
            <li>
              <a href="#tbc">Quick Take</a>
            </li>
            <li>
              <a href="#tbc">Examples</a>
            </li>
            <li>
              <a href="#tbc">Features</a>
            </li>
            <li>
              <a href="#tbc">API — Input</a>
            </li>
            <li>
              <a href="#tbc">API — Output</a>
            </li>
            <li>
              <a href="#tbc">Optional Options Object</a>
            </li>
            <li>
              <a href="#tbc">Algorithm</a>
            </li>
            <li>
              <a href="#tbc">Changelog</a>
            </li>
            <li>
              <a href="#tbc">Contributing</a>
            </li>
            <li>
              <a href="#tbc">Licence</a>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
}
