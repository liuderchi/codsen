import semverCompare from 'semver-compare';
import clone from 'lodash.clonedeep';
import isNum from 'is-natural-number';
import trim from 'lodash.trim';
import easyReplace from 'easy-replace';
import emojiRegexLib from 'emoji-regex';
import reverse from 'lodash.reverse';
import splitLines from 'split-lines';
import getPkgRepo from 'get-pkg-repo';
import empty from 'ast-contains-only-empty-space';
import insert from 'just-insert';
import includes from 'lodash.includes';
import min from 'lodash.min';
import dd from 'dehumanize-date';

/* eslint prefer-destructuring:0, no-param-reassign:0 */

const emojiRegex = emojiRegexLib();

// REGEXES
// -----------------------------------------------------------------------------

const versionWithBracketsRegex = /\[v?\d+\.\d+(\.\d+)*\]/g;
const versionWithoutBracketsRegex = /v?\d+\.\d+(\.\d+)*/g;
const versionWithoutBracketsRegexNoVersion = /\d+\.\d+(\.\d+)*/g;

// FUNCTIONS
// -----------------------------------------------------------------------------

function existy(x) {
  return x != null;
}
function truthy(x) {
  return x !== false && existy(x);
}
function isArr(something) {
  return Array.isArray(something);
}
function isStr(something) {
  return typeof something === "string";
}
function aContainsB(a, b) {
  if (!truthy(a) || !truthy(b)) {
    return false;
  }
  return a.indexOf(b) >= 0;
}

function isFooterLink(str) {
  if (str === undefined) {
    return false;
  } else if (!isStr(str)) {
    throw new TypeError(
      "chlu/util.js/isFooterLink(): [THROW_ID_02] The input must be string"
    );
  }
  return (
    str.length > 0 &&
    existy(str.match(versionWithBracketsRegex)) &&
    aContainsB(str, "]:")
  );
}

// Is current string (line as input one-by-one) a title?
// For example, "## [1.2.0] - 2017-04-24" is.
// For example, "[1.1.0]: https://github.com/codsen/wrong-lib/compare/v1.0.1...v1.1.0" is not
function isTitle(str) {
  if (str === undefined) {
    return false;
  } else if (!isStr(str)) {
    throw new TypeError(
      "chlu/util.js/isTitle(): [THROW_ID_01] The input must be string"
    );
  }
  let stringInFrontOfVersion;
  if (existy(str.match(versionWithoutBracketsRegex))) {
    stringInFrontOfVersion = str.split(
      str.match(versionWithoutBracketsRegex)[0]
    );
    if (stringInFrontOfVersion === null) {
      stringInFrontOfVersion = "";
    } else {
      stringInFrontOfVersion = stringInFrontOfVersion[0];
    }
  }
  return (
    str.length > 0 &&
    existy(str.match(versionWithoutBracketsRegex)) &&
    !str.includes("http") &&
    !str.includes("]:") &&
    trim(stringInFrontOfVersion, "[# \t") === "" &&
    str.includes("#")
  );
}

function getTitlesAndFooterLinks(linesArr) {
  const titles = [];
  const footerLinks = [];
  let i;
  let len;
  let temp;

  for (i = 0, len = linesArr.length; i < len; i++) {
    if (isTitle(linesArr[i])) {
      const firstEncounteredVersion = linesArr[i].match(
        versionWithoutBracketsRegexNoVersion
      )[0];
      titles.push({
        version: firstEncounteredVersion,
        rowNum: i,
        linked: existy(linesArr[i].match(versionWithBracketsRegex)),
        content: linesArr[i],
        beforeVersion: linesArr[i].split(firstEncounteredVersion)[0],
        afterVersion: linesArr[i].split(firstEncounteredVersion)[1]
      });
    } else if (isFooterLink(linesArr[i])) {
      temp = linesArr[i].match(versionWithBracketsRegex)[0];
      footerLinks.push({
        version: temp.substring(1, temp.length - 1),
        rowNum: i,
        content: linesArr[i]
      });
    }
  }
  return {
    titles,
    footerLinks
  };
}

function getPreviousVersion(currVers, originalVersionsArr) {
  // removes leading "v" and "v."
  function prep(str = "") {
    if (str.startsWith("v")) {
      if (str[1] === ".") {
        return str.slice(2);
      }
      return str.slice(1);
    }
    return str;
  }

  if (arguments.length < 2) {
    throw new Error(
      "chlu/util.js/getPreviousVersion(): [THROW_ID_03] There must be two arguments, string and an array."
    );
  }
  if (!isStr(currVers)) {
    throw new Error(
      `chlu/util.js/getPreviousVersion(): [THROW_ID_04] The first argument must be string. Currently it's ${typeof currVers}`
    );
  } else {
    currVers = prep(currVers);
  }
  if (!isArr(originalVersionsArr)) {
    throw new Error(
      `chlu/util.js/getPreviousVersion(): [THROW_ID_05] The second argument must be an array. Currently it's ${typeof originalVersionsArr} equal to:\nJSON.stringify(originalVersionsArr, null, 4)`
    );
  }

  const versionsArr = clone(originalVersionsArr)
    .map(val => prep(val))
    .sort(semverCompare);
  // first, check if it's the first version from the versions array.
  // in that case, there's no previous version, so we return null:
  if (currVers === versionsArr[0]) {
    return null;
  }
  // next, iterate versions array and try to get the previous version:
  for (let i = 0, len = versionsArr.length; i < len; i++) {
    if (versionsArr[i] === currVers && existy(versionsArr[i - 1])) {
      return versionsArr[i - 1];
    }
  }
  // if nothing was found yet, throw:
  throw new Error(
    `chlu/util.js/getPreviousVersion(): [THROW_ID_06] The given version (${currVers}) is not in the versions array (${JSON.stringify(
      versionsArr,
      null,
      4
    )})`
  );
}

function setRow(rowsArray, index, content) {
  const res = clone(rowsArray);
  for (let i = 0, len = res.length; i < len; i++) {
    if (i === index) {
      res[i] = content;
    }
  }
  return res;
}

function getRow(rowsArray, index) {
  if (!existy(index) || !isNum(index)) {
    throw new TypeError(
      `chlu/util.js/getRow(): [THROW_ID_07]: first input arg must be a natural number. Currently it's given as: ${typeof index} and equal: ${JSON.stringify(
        index,
        null,
        4
      )}`
    );
  }
  if (!existy(rowsArray) || !isArr(rowsArray)) {
    throw new TypeError(
      `chlu/util.js/getRow(): [THROW_ID_08]: second input arg must be an rowsArrayay. Currently it's given as: ${typeof rowsArray} and equal: ${JSON.stringify(
        rowsArray,
        null,
        4
      )}`
    );
  }
  for (let i = 0, len = rowsArray.length; i < len; i++) {
    if (i === index) {
      return rowsArray[i];
    }
  }
  return null;
}

// gets and sets various pieces in strings of the format:
// "[1.1.0]: https://github.com/userName/libName/compare/v1.0.1...v1.1.0"
// or
// "[1.1.0]: https://bitbucket.org/userName/libName/branches/compare/v1.1.0%0Dv1.0.1
function getSetFooterLink(str, o = {}) {
  // console.log(`\n\u001b[${35}m${`==== getSetFooterLink() ====`}\u001b[${39}m`);
  // console.log(
  //   `\nUTIL 221 ${`\u001b[${33}m${`str`}\u001b[${39}m`} = ${JSON.stringify(
  //     str,
  //     null,
  //     4
  //   )}`
  // );

  let mode;
  if (typeof o === "object" && o !== null && typeof o.mode === "string") {
    mode = o.mode;
  } else {
    mode = "get";
  }
  // console.log(`\u001b[${32}m${`MODE = ${mode}`}\u001b[${39}m`);

  if (typeof str !== "string" || !str.includes("/")) {
    return null;
  }
  const split = str.split("/");
  const res = {};

  // console.log(
  //   `\nUTIL 242 ${`\u001b[${33}m${`split`}\u001b[${39}m`} = ${JSON.stringify(
  //     split,
  //     null,
  //     4
  //   )}`
  // );

  if (!o) {
    o = {};
    o.type = "github";
  } else if (!o.type) {
    o.type = "github";
  }

  // console.log(
  //   `\nUTIL 259 ${`\u001b[${33}m${`o.type`}\u001b[${39}m`} = ${JSON.stringify(
  //     o.type,
  //     null,
  //     4
  //   )}`
  // );

  const currentlyWeHaveLinkOfAType = str.includes("github")
    ? "github"
    : "bitbucket";

  for (let i = 0, len = split.length; i < len; i++) {
    if (split[i] === "github.com" || split[i] === "bitbucket.org") {
      res.user = existy(o.user) ? o.user : split[i + 1];
      res.project = existy(o.project) ? o.project : split[i + 2];
    } else if (split[i] === "compare") {
      // github notation:
      if (split[i + 1].includes("...")) {
        const splitVersions = trim(split[i + 1], "#diff").split("...");
        res.versBefore = existy(o.versBefore)
          ? o.versBefore
          : trim(
              currentlyWeHaveLinkOfAType === "github"
                ? splitVersions[0]
                : splitVersions[1],
              "v"
            );
        res.versAfter = existy(o.versAfter)
          ? o.versAfter
          : trim(
              currentlyWeHaveLinkOfAType === "github"
                ? splitVersions[1]
                : splitVersions[0],
              "v"
            );
      } else if (split[i + 1].includes("%0D")) {
        // bitbucket notation:
        const splitVersions = trim(split[i + 1], "#diff").split("%0D");
        res.versBefore = existy(o.versBefore)
          ? o.versBefore
          : trim(
              currentlyWeHaveLinkOfAType === "github"
                ? splitVersions[0]
                : splitVersions[1],
              "v"
            );
        res.versAfter = existy(o.versAfter)
          ? o.versAfter
          : trim(
              currentlyWeHaveLinkOfAType === "github"
                ? splitVersions[1]
                : splitVersions[0],
              "v"
            );
      } else {
        // insurance against broken compare links:
        return null;
      }
    } else if (i === 0) {
      res.version = existy(o.version)
        ? o.version
        : split[i].match(versionWithoutBracketsRegex)[0];
    }
  }
  // console.log(
  //   `UTIL 319 END ${`\u001b[${33}m${`res`}\u001b[${39}m`} = ${JSON.stringify(
  //     res,
  //     null,
  //     4
  //   )}`
  // );
  if (mode === "get") {
    res.type = currentlyWeHaveLinkOfAType;
    return res;
  }
  if (o.type === "github") {
    return `[${res.version}]: https://github.com/${res.user}/${
      res.project
    }/compare/v${res.versBefore}...v${res.versAfter}`;
  } else if (o.type === "bitbucket") {
    return `[${res.version}]: https://bitbucket.org/${res.user}/${
      res.project
    }/branches/compare/v${res.versAfter}%0Dv${res.versBefore}#diff`;
  }
}

function versionSort(a, b) {
  return semverCompare(a.version, b.version);
}

function filterDate(someString) {
  let res = someString.trim();
  res = easyReplace(res, {
    leftOutsideNot: "",
    leftOutside: "",
    leftMaybe: "[",
    searchFor: "YANKED",
    rightMaybe: "]",
    rightOutside: "",
    rightOutsideNot: "",
    i: {
      searchFor: true
    }
  });
  res = res.replace(".", " ");
  res = res.replace(",", " ");
  res = res.replace(";", " ");
  res = res.replace(emojiRegex, "");
  res = res.replace(/[ ]+/g, " ");
  res = trim(res, "[](),.-/\\ \u2013\u2014\t\u00A0");
  return res;
}

/* eslint prefer-destructuring:0, no-loop-func:0, no-plusplus:0, consistent-return:0 */
const isArr$1 = Array.isArray;

// F'S
// -----------------------------------------------------------------------------

function existy$1(x) {
  return x != null;
}

// ACTION
// -----------------------------------------------------------------------------

// gitTags will come either as null or a plain object, for example:
// {
//     "latest": "v1.9.1",
//     "all": [
//         "v1.0.1",
//         "v1.1.0",
//         ...
//         "v1.9.0",
//         "v1.9.1"
//     ]
// }

function chlu(changelogContents, gitTags, packageJsonContents) {
  if (arguments.length === 0 || !existy$1(changelogContents)) {
    return;
  }

  // process the gitTags input.
  // result will be in the following format:

  // processedGitTags = {
  //     "latest": [
  //         "2017-04-18",
  //         "1.3.5"
  //     ],
  //     "all": {
  //         "1.0.0": "2017-04-01",
  //         "1.0.1": "2017-04-02",
  //         ...
  //         "1.3.4": "2017-04-17",
  //         "1.3.5": "2017-04-18"
  //     },
  //     "versionsOnly": [
  //         "1.0.0",
  //         "1.0.1",
  //         ...
  //         "1.3.4",
  //         "1.3.5"
  //     ]
  // }

  let processedGitTags;

  if (
    typeof gitTags === "object" &&
    gitTags !== null &&
    !Array.isArray(gitTags) &&
    gitTags.latest !== undefined
  ) {
    processedGitTags = {};
    processedGitTags.latest = gitTags.latest.split("|").map(val => {
      if (val[0] === "v") {
        return val.slice(1);
      }
      return val;
    });
    processedGitTags.all = {};
    processedGitTags.versionsOnly = [];
    if (isArr$1(gitTags.all)) {
      gitTags.all.sort().forEach(key => {
        processedGitTags.all[key.slice(12)] = key.slice(0, 10);
        processedGitTags.versionsOnly.push(key.slice(12));
      });
    }
  }

  const changelogMd = changelogContents;

  // TODO - add measures against wrong/missing json

  const packageJson = getPkgRepo(packageJsonContents);

  if (packageJson.type !== "github" && packageJson.type !== "bitbucket") {
    throw new Error(
      `chlu/main.js: [THROW_ID_01] Package JSON shows the library is neither GitHub nor BitBucket-based - ${
        packageJson.type
      }`
    );
  }

  let temp;
  let titles = [];
  let footerLinks = [];
  let newLinesArr = [];

  // ACTION
  // -----------------------------------------------------------------------------

  // =======
  // stage 1: iterate through all lines and:
  // - record all titles, like:
  //   "## [1.2.0] - 2017-04-24"
  // - record all url links at the bottom, like:
  //   "[1.1.0]: https://github.com/codsen/wrong-lib/compare/v1.0.1...v1.1.0"
  const linesArr = splitLines(changelogMd);

  let titlesAndFooterLinks = getTitlesAndFooterLinks(linesArr);
  titles = titlesAndFooterLinks.titles;
  footerLinks = titlesAndFooterLinks.footerLinks;

  // =======
  // stage 2: remove any invalid footer links

  for (let i = 0, len = footerLinks.length; i < len; i++) {
    if (
      !existy$1(
        getSetFooterLink(footerLinks[i].content, {
          type: packageJson.type,
          mode: "get"
        })
      )
    ) {
      linesArr.splice(footerLinks[i].rowNum, 1);
    }
  }

  // recalculate:
  titlesAndFooterLinks = getTitlesAndFooterLinks(linesArr);
  titles = titlesAndFooterLinks.titles;
  footerLinks = titlesAndFooterLinks.footerLinks;

  // =======
  // stage 3: get the ordered array of all title versions

  const sortedTitlesArray = titles.map(el => el.version).sort(semverCompare);

  // =======
  // stage 4: find unused footer links

  let unusedFooterLinks = footerLinks.filter(
    link => !includes(titles.map(title => title.version), link.version)
  );

  while (unusedFooterLinks.length > 0) {
    linesArr.splice(unusedFooterLinks[0].rowNum, 1);
    footerLinks = getTitlesAndFooterLinks(linesArr).footerLinks;
    unusedFooterLinks = footerLinks.filter(
      link => !includes(titles.map(title => title.version), link.version)
    );
  }

  // =======
  // stage 5: create footer links for all titles except the smallest version-one

  const missingFooterLinks = [];
  for (let i = 0, len = titles.length; i < len; i++) {
    if (len > 1 && titles[i].version !== sortedTitlesArray[0]) {
      const linkFound = footerLinks.some(
        el => titles[i].version === el.version
      );
      if (!linkFound) {
        missingFooterLinks.push(titles[i]);
      }
    }
  }

  // =======
  // stage 6: find out what is the order of footer links

  let ascendingFooterLinkCount = 0;
  let descendingFooterLinkCount = 0;

  if (footerLinks.length > 1) {
    for (let i = 0, len = footerLinks.length; i < len - 1; i++) {
      if (
        semverCompare(footerLinks[i].version, footerLinks[i + 1].version) === 1
      ) {
        descendingFooterLinkCount++;
      } else {
        ascendingFooterLinkCount++;
      }
    }
  }

  let ascending = true;
  if (ascendingFooterLinkCount <= descendingFooterLinkCount) {
    ascending = false;
  }

  // =======
  // stage 7: calculate what goes where

  let whereToPlaceIt;
  // calculate the Where
  if (footerLinks.length === 0) {
    // count from the end of the file.
    // if last non-empty line has "]:" in it, place right after it.
    // otherwise, insert an empty line. This means there's content only and no links yet.
    for (let i = linesArr.length - 1, start = 0; i >= start; i--) {
      if (existy$1(linesArr[i]) && !empty(linesArr[i])) {
        whereToPlaceIt = i + 2;
        break;
      }
    }
  } else {
    whereToPlaceIt = footerLinks[0].rowNum;
  }

  // =======
  // stage 8: assemble the new chunk - array of new lines

  temp = [];
  if (packageJson.type === "github") {
    missingFooterLinks.forEach(key => {
      temp.push(
        `[${key.version}]: https://github.com/${packageJson.user}/${
          packageJson.project
        }/compare/v${getPreviousVersion(key.version, sortedTitlesArray)}...v${
          key.version
        }`
      );
    });
  } else if (packageJson.type === "bitbucket") {
    missingFooterLinks.forEach(key => {
      temp.push(
        `[${key.version}]: https://bitbucket.org/${packageJson.user}/${
          packageJson.project
        }/branches/compare/v${key.version}%0Dv${getPreviousVersion(
          key.version,
          sortedTitlesArray
        )}#diff`
      );
    });
  }

  if (ascending) {
    temp = reverse(temp);
  }

  // =======
  // stage 9: insert new rows into linesArr
  newLinesArr = insert(linesArr, temp, whereToPlaceIt);

  // =======
  // stage 10: prepare for checking are footerLinks correct.
  // calculate title and footerLinks again, this time, including our additions

  temp = getTitlesAndFooterLinks(newLinesArr);
  titles = temp.titles;
  footerLinks = temp.footerLinks;
  for (let i = 0, len = footerLinks.length; i < len; i++) {
    const extracted = getSetFooterLink(footerLinks[i].content, {
      type: packageJson.type,
      mode: "get"
    });

    const finalUser = packageJson.user;
    const finalProject = packageJson.project;
    let finalVersBefore = getPreviousVersion(
      extracted.version,
      sortedTitlesArray
    );
    if (processedGitTags) {
      // if we have the Git info, pick "from" git version from Git data:
      //
      // 1. check if current "to" diff Git version, "extracted.version", does not
      // exist yet among git tags
      if (!processedGitTags.versionsOnly.includes(extracted.version)) {
        // Current version is not among existing Git tags. Just pick the last.
        finalVersBefore =
          processedGitTags.versionsOnly[
            processedGitTags.versionsOnly.length - 1
          ];
      } else {
        finalVersBefore = getPreviousVersion(
          extracted.version,
          processedGitTags.versionsOnly
        );
      }
    } else {
      // if the Git data is not available, use existing parsed Changelog data.

      // Let's calculate the "from" version in the link, the "1.3.5" in:
      // [1.4.0]: https://github.com/codsen/wrong-lib/compare/v1.3.5...v1.4.0

      // 1. It can come from existing value in the changelog, from this very row:
      const extractedVersBefore = extracted.versBefore;
      // 2. It can come from the previous title from the entries mentioned in the
      // changelog. Each heading mentions a version and we extract them all from there.
      const titlesVersBefore = getPreviousVersion(
        extracted.version,
        sortedTitlesArray
      );

      // The order of preference is:
      // 1. Git data - pick previous version from known Git tags
      // 2. Existing Changelog markdown file - current row might be custom-tweaked
      // 3. Data from the titles.

      // Since #1 is not available (see other part of outer IF clause above),
      // it's the choice between #2 and #3.

      // We would fall back to #3 only on emergency cases - when it's messed up.

      // TODO: add more checks, like is it digit.digit.digit notation in extracted
      // version from changelog ("extractedVersBefore")?
      if (semverCompare(extractedVersBefore, titlesVersBefore) < 1) {
        // mess up cases, #3
        finalVersBefore = titlesVersBefore;
      } else {
        // all OK, default case #2
        finalVersBefore = extractedVersBefore;
      }
    }
    const finalVersAfter = extracted.version;
    const finalVersion = extracted.version;

    // finally, set the row's value:
    footerLinks[i].content = getSetFooterLink(footerLinks[i].content, {
      user: finalUser,
      project: finalProject,
      versBefore: finalVersBefore,
      versAfter: finalVersAfter,
      version: finalVersion,
      type: packageJson.type,
      mode: "set"
    });

    // write over:
    newLinesArr = setRow(
      newLinesArr,
      footerLinks[i].rowNum,
      footerLinks[i].content
    );
  }

  // ========
  // stage 11: sort all footer links, depending on a current preference

  temp = clone(footerLinks).sort(versionSort);
  if (!ascending) {
    temp = temp.reverse();
  }

  footerLinks.forEach((footerLink, index) => {
    newLinesArr = setRow(newLinesArr, footerLink.rowNum, temp[index].content);
  });

  // ========
  // stage 12: delete empty rows between footer links:

  const firstRowWithFooterLink = min(footerLinks.map(link => link.rowNum));
  for (
    let i = firstRowWithFooterLink + 1, len = newLinesArr.length;
    i < len;
    i++
  ) {
    if (
      newLinesArr[i] === "" ||
      (newLinesArr[i] !== undefined && newLinesArr[i].trim() === "")
    ) {
      newLinesArr.splice(i, 1);
      i--;
    }
  }

  // ========
  // stage 13: add trailing empty line if it's missing:

  if (newLinesArr[newLinesArr.length - 1] !== "") {
    newLinesArr.push("");
  }

  // ========
  // stage 14: add any missing line break before footer links

  titlesAndFooterLinks = getTitlesAndFooterLinks(newLinesArr);
  titles = titlesAndFooterLinks.titles;
  footerLinks = titlesAndFooterLinks.footerLinks;

  if (
    existy$1(footerLinks) &&
    footerLinks.length > 0 &&
    !empty(getRow(newLinesArr, footerLinks[0].rowNum - 1))
  ) {
    newLinesArr.splice(footerLinks[0].rowNum, 0, "");
  }

  {
    titles.forEach(title => {
      const fixedDate = dd(filterDate(title.afterVersion));

      if (fixedDate !== null) {
        newLinesArr = setRow(
          newLinesArr,
          title.rowNum,
          `## ${title.version !== sortedTitlesArray[0] ? "[" : ""}${
            title.version
          }${title.version !== sortedTitlesArray[0] ? "]" : ""} - ${fixedDate}`
        );
      } else {
        // if date is unrecogniseable leave it alone, fix the rest of the title
        newLinesArr = setRow(
          newLinesArr,
          title.rowNum,
          `## ${title.version !== sortedTitlesArray[0] ? "[" : ""}${
            title.version
          }${title.version !== sortedTitlesArray[0] ? "]" : ""} - ${filterDate(
            title.afterVersion
          )}`
        );
      }
    });
  }

  return newLinesArr.join("\n");
}

export default chlu;
