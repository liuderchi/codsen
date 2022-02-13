export const getDomainUrl = (request: Request) => {
  const host =
    request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  if (!host) {
    throw new Error("Could not determine domain URL.");
  }
  const protocol = host.includes("localhost") ? "http" : "https";
  return `${protocol}://${host}`;
};

export const removeTrailingSlash = (s: string) => {
  return s.endsWith("/") ? s.slice(0, -1) : s;
};

export const getUrl = (requestInfo?: { origin: string; path: string }) => {
  return removeTrailingSlash(
    `${requestInfo?.origin ?? "https://codsen.com"}${requestInfo?.path ?? ""}`
  );
};

export const getDisplayUrl = (requestInfo?: {
  origin: string;
  path: string;
}) => {
  return getUrl(requestInfo).replace(/^https?:\/\//, "");
};

export const getRequiredEnvVarFromObj = (
  obj: Record<string, string | undefined>,
  key: string,
  devValue: string = `${key}-dev-value`
) => {
  let value = devValue;
  const envVal = obj[key];
  if (envVal) {
    value = envVal;
  } else if (obj.NODE_ENV === "production") {
    throw new Error(`${key} is a required env variable`);
  }
  return value;
};

export const getRequiredServerEnvVar = (key: string, devValue?: string) => {
  return getRequiredEnvVarFromObj(process.env, key, devValue);
};

function typedBoolean<T>(
  value: T
): value is Exclude<T, "" | 0 | false | null | undefined> {
  return Boolean(value);
}
export { typedBoolean };

// -----------------------------------------------------------------------------

// pathNameToCSSClass() - Produces set of one or more classes from a URL path.

// in: "/"
// out: "page-root"

// in: "/os"
// out: "page-os"

// in: "/os/email-comb"
// out: "page-os page-os-email-comb"

// in: "/os/email-comb/try"
// out: "page-os page-os-email-comb page-os-email-comb-try"

// plus, last segment gets repeated with "*-exactly" to target it directly.

export const pathNameToCSSClass = (str: string): string => {
  if (!str) {
    return "";
  }
  if (str === "/") {
    return `page-root`;
  }

  if (str.startsWith("/")) {
    str = str.slice(1);
  }
  if (str.endsWith("/")) {
    str = str.slice(0, -1);
  }

  return str
    .split("/")
    .map((s: string, idx: number, arr: string[]) =>
      arr.reduce((acc, curr, rIdx) => {
        if (rIdx > idx) {
          return acc;
        }
        return `${acc}-${curr}`;
      }, "")
    )
    .map((s, idx, arr) => {
      // we'd produce something like ['page-os', 'page-os-email-comb']
      // we need a way to identify paths exactly, so that we can
      // target let's say Open Source home page ('page-os') and its children
      // would not pick up its styles.
      return `page${s}${arr[idx + 1] ? "" : ` page${s}-exactly`}`;
    })
    .join(" ");
};

interface breadcrumbObj {
  url: string;
  label: string;
}
export const pathNameToBreadcrumbs = (str: string): breadcrumbObj[] => {
  if (!str || str === "/") {
    return [];
  }

  if (str.startsWith("/")) {
    str = str.slice(1);
  }

  return str.split("/").map((label: string, idx: number, arr: string[]) => ({
    url: arr.reduce((acc, curr, rIdx) => {
      if (rIdx > idx) {
        return acc;
      }
      return `${acc ? `${acc}/` : acc}${curr}`;
    }, ""),
    label,
  }));
};
