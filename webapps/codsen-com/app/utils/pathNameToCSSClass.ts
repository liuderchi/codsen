function pathNameToCSSClass(str: string): string {
  if (!str) {
    return ""
  }
  if (str === "/") {
    return `page-root`
  }
  if (str.startsWith("/")) {
    str = str.slice(1)
  }
  if (str.endsWith("/")) {
    str = str.slice(0, -1)
  }

  return `page-${str.replace(/\//g, "-")}`
}

export {pathNameToCSSClass}