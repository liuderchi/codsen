/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node/globals" />

import type {ActionFunction, LoaderFunction} from 'remix'

type AppLoader<
  Params extends Record<string, unknown> = Record<string, unknown>,
> = (
  args: Omit<Parameters<LoaderFunction>['0'], 'params'> & {params: Params},
) => ReturnType<LoaderFunction>

type AppAction<
  Params extends Record<string, unknown> = Record<string, unknown>,
> = (
  args: Omit<Parameters<ActionFunction>['0'], 'params'> & {params: Params},
  ) => ReturnType<ActionFunction>

type AppHandle = {
  /** allows to identify routes more directly (instead of relying on pathnames) */
  id?: string
  getSitemapEntries?: (
    request: Request,
  ) =>
    | Promise<Array<AppSitemapEntry | null> | null>
    | Array<AppSitemapEntry | null>
    | null
  scroll?: false
}

type AppSitemapEntry = {
  route: string
  lastmod?: string
  changefreq?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never'
  priority?: 0.0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1.0
}