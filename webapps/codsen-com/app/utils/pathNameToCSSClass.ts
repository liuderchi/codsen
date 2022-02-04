// Produces set of one or more classes from a URL path.

// in: "/"
// out: "page-root"

// in: "/os"
// out: "page-os"

// in: "/os/email-comb"
// out: "page-os page-os-email-comb"

// in: "/os/email-comb/try"
// out: "page-os page-os-email-comb page-os-email-comb-try"

function pathNameToCSSClass(str: string): string {
  console.log(`${`\u001b[${33}m${`str`}\u001b[${39}m`} = ${JSON.stringify(str, null, 4)}`)
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

  return str.split("/").map((s, idx, arr) => arr.reduce((acc, curr, rIdx) => {
    if (rIdx > idx) {
       return acc
    }
    return `${acc}-${curr}`
  }, "")).map(s => `page${s}`).join(" ")
}

export {pathNameToCSSClass}