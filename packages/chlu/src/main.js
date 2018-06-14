/* eslint prefer-destructuring:0, no-loop-func:0, no-plusplus:0, consistent-return:0 */

import reverse from "lodash.reverse";
import splitLines from "split-lines";
import getPkgRepo from "get-pkg-repo";
import semverCompare from "semver-compare";
import empty from "ast-contains-only-empty-space";
import insert from "just-insert";
import clone from "lodash.clonedeep";
import includes from "lodash.includes";
import min from "lodash.min";
import dd from "dehumanize-date";
const isArr = Array.isArray;

import {
  getPreviousVersion,
  getTitlesAndFooterLinks,
  getSetFooterLink,
  setRow,
  getRow,
  versionSort,
  filterDate
} from "./util";

// F'S
// -----------------------------------------------------------------------------

function existy(x) {
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
  if (arguments.length === 0 || !existy(changelogContents)) {
    return;
  }

  console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
  console.log(
    `55 CHLU main() received ${`\u001b[${33}m${`gitTags`}\u001b[${39}m`} = ${JSON.stringify(
      gitTags,
      null,
      4
    )}`
  );

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
    if (isArr(gitTags.all)) {
      gitTags.all.sort().forEach(key => {
        processedGitTags.all[key.slice(12)] = key.slice(0, 10);
        processedGitTags.versionsOnly.push(key.slice(12));
      });
    }
  }

  const changelogMd = changelogContents;

  // TODO - add measures against wrong/missing json

  const packageJson = getPkgRepo(packageJsonContents);
  console.log(
    `57 ${`\u001b[${33}m${`packageJson`}\u001b[${39}m`} = ${JSON.stringify(
      packageJson,
      null,
      4
    )}`
  );

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
  console.log(
    `MAIN 91 ${`\u001b[${33}m${`titlesAndFooterLinks`}\u001b[${39}m`} = ${JSON.stringify(
      titlesAndFooterLinks,
      null,
      4
    )}`
  );
  titles = titlesAndFooterLinks.titles;
  footerLinks = titlesAndFooterLinks.footerLinks;
  console.log(
    `titlesAndFooterLinks = ${JSON.stringify(titlesAndFooterLinks, null, 4)}`
  );

  // =======
  // stage 2: remove any invalid footer links

  for (let i = 0, len = footerLinks.length; i < len; i++) {
    if (
      !existy(
        getSetFooterLink(footerLinks[i].content, {
          type: packageJson.type,
          mode: "get"
        })
      )
    ) {
      console.log(
        `MAIN 116 SPLICE ROW:\n${JSON.stringify(
          linesArr[footerLinks[i].rowNum],
          null,
          4
        )}`
      );
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
  console.log(
    `MAIN 166 ${`\u001b[${33}m${`missingFooterLinks`}\u001b[${39}m`} = ${JSON.stringify(
      missingFooterLinks,
      null,
      4
    )}`
  );

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
      if (existy(linesArr[i]) && !empty(linesArr[i])) {
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
  console.log(
    `MAIN 242 ${`\u001b[${33}m${`temp`}\u001b[${39}m`} = ${JSON.stringify(
      temp,
      null,
      4
    )}`
  );

  if (ascending) {
    temp = reverse(temp);
  }

  // =======
  // stage 9: insert new rows into linesArr

  console.log(
    `MAIN 257 BEFORE INSERTING temp into linesArr: ${`\u001b[${33}m${`newLinesArr`}\u001b[${39}m`} = ${JSON.stringify(
      newLinesArr,
      null,
      4
    )}`
  );
  newLinesArr = insert(linesArr, temp, whereToPlaceIt);
  console.log(
    `MAIN 265 AFTER INSERTING temp into linesArr: ${`\u001b[${33}m${`newLinesArr`}\u001b[${39}m`} = ${JSON.stringify(
      newLinesArr,
      null,
      4
    )}`
  );

  // =======
  // stage 10: prepare for checking are footerLinks correct.
  // calculate title and footerLinks again, this time, including our additions

  temp = getTitlesAndFooterLinks(newLinesArr);
  titles = temp.titles;
  footerLinks = temp.footerLinks;

  console.log("\n");
  for (let i = 0, len = footerLinks.length; i < len; i++) {
    console.log(
      `${`\u001b[${33}m${`██`}\u001b[${39}m\u001b[${35}m${`██`}\u001b[${39}m`.repeat(
        20
      )} i = ${i}`
    );
    const extracted = getSetFooterLink(footerLinks[i].content, {
      type: packageJson.type,
      mode: "get"
    });
    console.log(
      `\nMAIN 252 ${`\u001b[${33}m${`extracted`}\u001b[${39}m`} = ${JSON.stringify(
        extracted,
        null,
        4
      )}\n`
    );

    const finalUser = packageJson.user;
    const finalProject = packageJson.project;
    let finalVersBefore = getPreviousVersion(
      extracted.version,
      sortedTitlesArray
    );
    console.log(
      `367 CHLU/main(): ${`\u001b[${33}m${`finalVersBefore`}\u001b[${39}m`} = ${JSON.stringify(
        finalVersBefore,
        null,
        4
      )}`
    );
    console.log(
      `373 CHLU/main(): ${`\u001b[${33}m${`processedGitTags`}\u001b[${39}m`} = ${JSON.stringify(
        processedGitTags,
        null,
        4
      )}`
    );
    if (processedGitTags) {
      console.log(
        `381 CHLU/main(): ${`\u001b[${32}m${`GIT DATA AVAILABLE`}\u001b[${39}m`} detected "processedGitTags"`
      );
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
        console.log(
          `394 CHLU/main(): finalVersBefore is taken last elem of processedGitTags.versionsOnly = ${JSON.stringify(
            processedGitTags.versionsOnly,
            null,
            4
          )}\n:\n${finalVersBefore}`
        );
      } else {
        finalVersBefore = getPreviousVersion(
          extracted.version,
          processedGitTags.versionsOnly
        );
        console.log(
          `406 CHLU/main(): finalVersBefore is calculated from previous Git tag: ${finalVersBefore}`
        );
      }
    } else {
      console.log(
        `411 CHLU/main(): \u001b[${31}m${`GIT DATA NOT AVAILABLE`}\u001b[${39}m`
      );
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

    if (existy(gitTags)) {
      console.log(
        `███████████████████████████████████████\n${`\u001b[${33}m${`gitTags`}\u001b[${39}m`} = ${JSON.stringify(
          gitTags,
          null,
          4
        )}`
      );
    }

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
    console.log(
      `309 SET ${`\u001b[${33}m${`footerLinks[i].content`}\u001b[${39}m`} = ${JSON.stringify(
        footerLinks[i].content,
        null,
        4
      )}`
    );

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
    existy(footerLinks) &&
    footerLinks.length > 0 &&
    !empty(getRow(newLinesArr, footerLinks[0].rowNum - 1))
  ) {
    newLinesArr.splice(footerLinks[0].rowNum, 0, "");
  }

  // ========
  // stage 15: normalise titles

  const gitStuffReadyYet = false;

  if (gitStuffReadyYet) {
    // TODO: implement lookup against .git logs
  } else {
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
