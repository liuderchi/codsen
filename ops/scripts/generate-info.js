#!/usr/bin/env node

/* eslint operator-assignment:0 */

import fs, { F_OK, accessSync } from "fs";
import path from "path";
import git from "simple-git";
import { sortAllObjectsSync } from "json-comb-core";

// READ ALL LIBS
// =============

const packagesOutsideMonorepo = [
  "eslint-plugin-row-num",
  "eslint-plugin-test-num",
  "perf-ref",
];
const allPackages = [...packagesOutsideMonorepo];
const cliPackages = [];
const programPackages = [];
const specialPackages = [];
const packageJSONData = {};

fs.readdirSync(path.resolve("packages"))
  .filter((d) => fs.statSync(path.join("packages", d)).isDirectory())
  .forEach((packageName) => {
    try {
      let packageJsonContents = JSON.parse(
        fs.readFileSync(
          path.join("packages", packageName, "package.json"),
          "utf8"
        )
      );
      packageJSONData[packageName] = packageJsonContents;
      if (!packageJsonContents.private) {
        allPackages.push(packageJsonContents.name);
      }
      if (packageJsonContents.bin) {
        cliPackages.push(packageJsonContents.name);
      }
      // also present in ./ops/lect/lect.js:
      try {
        accessSync(
          path.join("packages", packageName, "rollup.config.js"),
          F_OK
        );
        programPackages.push(packageJsonContents.name);
      } catch (e) {}

      if (!programPackages.includes(packageName) && !packageJsonContents.bin) {
        specialPackages.push(packageJsonContents.name);
      }
    } catch (error) {
      // nothing happens and we skip it
    }
  });

const interdep = [];

// 1. Assemble a JSON of all packages and their deps
// -----------------------------------------------------------------------------

// {
//   "name": "detergent",
//   "size": 3938,
//   "imports": [
//     "all-named-html-entities"
//   ]
// },

const dependencyStats = { dependencies: {}, devDependencies: {} };

for (let i = 0, len = allPackages.length; i < len; i++) {
  let name = allPackages[i];
  if (packagesOutsideMonorepo.includes(name)) {
    continue;
  }

  // console.log(
  //   `077 ======== processing ${`\u001b[${35}m${name}\u001b[${39}m`} ========`
  // );
  let pack = JSON.parse(
    fs.readFileSync(path.join("packages", name, "package.json"))
  );

  let size = 0;
  if (pack.bin && !programPackages.includes(name)) {
    // cli's
    size = fs.readFileSync(path.join("packages", name, `cli.js`)).length;
  } else {
    try {
      // normal libs
      fs.statSync(path.join("packages", name, "dist", `${name}.esm.js`));
      size = fs.readFileSync(
        path.join("packages", name, "dist", `${name}.esm.js`)
      ).length;
    } catch (e) {
      try {
        // gulp plugins etc. don't have "dist/*"
        size = fs.readFileSync(path.join("packages", name, `index.js`)).length;
      } catch (error) {
        // let's ignore all other unique ad-hoc packages like perf-ref
      }
    }
  }

  interdep.push({
    name,
    size,
    imports: pack.dependencies
      ? Object.keys(pack.dependencies).filter((n) => allPackages.includes(n))
      : [],
  });

  // compile dependency stats
  if (Object.prototype.hasOwnProperty.call(pack, "dependencies")) {
    // has deps
    Object.keys(pack.dependencies).forEach((dep) => {
      // if dependency's name doesn't exist in compiled obj., create key
      if (
        !Object.prototype.hasOwnProperty.call(dependencyStats.dependencies, dep)
      ) {
        dependencyStats.dependencies[dep] = 1;
      } else {
        dependencyStats.dependencies[dep] =
          dependencyStats.dependencies[dep] + 1;
      }
    });
  }
  if (Object.prototype.hasOwnProperty.call(pack, "devDependencies")) {
    // has deps
    Object.keys(pack.devDependencies).forEach((dep) => {
      // if devdependency's name doesn't exist in compiled obj., create key
      if (
        !Object.prototype.hasOwnProperty.call(
          dependencyStats.devDependencies,
          dep
        )
      ) {
        dependencyStats.devDependencies[dep] = 1;
      } else {
        dependencyStats.devDependencies[dep] =
          dependencyStats.devDependencies[dep] + 1;
      }
    });
  }
}

// 3. compile top 10 of own and external deps and devdeps
// -----------------------------------------------------------------------------

const top10OwnDeps = [];
const top10ExternalDeps = [];
// there are no devdeps statistics because all devdeps are the same

let foundOwnMax;
let foundExternalMax;
for (let i = 0; i < 10; i++) {
  // reset
  foundOwnMax = null;
  foundExternalMax = null;

  // iterate
  Object.keys(dependencyStats.dependencies).forEach((depName) => {
    if (
      (!foundOwnMax ||
        dependencyStats.dependencies[depName] >
          dependencyStats.dependencies[foundOwnMax]) &&
      allPackages.includes(depName) &&
      !top10OwnDeps.some((obj) =>
        Object.prototype.hasOwnProperty.call(obj, depName)
      )
    ) {
      foundOwnMax = depName;
    }

    if (
      (!foundExternalMax ||
        dependencyStats.dependencies[depName] >
          dependencyStats.dependencies[foundExternalMax]) &&
      !allPackages.includes(depName) &&
      !top10ExternalDeps.some((obj) =>
        Object.prototype.hasOwnProperty.call(obj, depName)
      )
    ) {
      foundExternalMax = depName;
    }
  });
  if (foundOwnMax) {
    top10OwnDeps.push({
      [foundOwnMax]: dependencyStats.dependencies[foundOwnMax],
    });
  }
  if (foundExternalMax) {
    top10ExternalDeps.push({
      [foundExternalMax]: dependencyStats.dependencies[foundExternalMax],
    });
  }
}

dependencyStats.top10OwnDeps = top10OwnDeps;
dependencyStats.top10ExternalDeps = top10ExternalDeps;

// 4. write files
// -----------------------------------------------------------------------------

fs.writeFile(
  path.resolve("./data/sources/interdeps.ts"),
  // JSON.stringify(interdep, null, 4),
  `export const interdeps = ${JSON.stringify(
    interdep.filter((obj1) => {
      return !(
        !obj1.imports.length &&
        !interdep.some((obj2) => obj2.imports.includes(obj1.name))
      );
    }),
    null,
    4
  )};\n`,
  (err) => {
    if (err) {
      throw err;
    }
    console.log(`\u001b[${32}m${`interdeps.ts written OK`}\u001b[${39}m`);
  }
);

fs.writeFile(
  path.resolve("./data/sources/packages.ts"),
  `const all = ${JSON.stringify(allPackages.sort(), null, 4)} as const;
const cli = ${JSON.stringify(cliPackages.sort(), null, 4)} as const;
const programs = ${JSON.stringify(programPackages.sort(), null, 4)} as const;
const special = ${JSON.stringify(specialPackages.sort(), null, 4)} as const;
const packagesOutsideMonorepo = ${JSON.stringify(packagesOutsideMonorepo.sort(), null, 4)} as const;

export const packages = {
    all,
    cli,
    programs,
    special,
    packagesOutsideMonorepo,
    totalPackageCount: ${allPackages.length},
    cliCount: ${cliPackages.length},
    programsCount: ${programPackages.length},
    specialCount: ${specialPackages.length},
    packagesOutsideMonorepoCount: ${packagesOutsideMonorepo.length},
};\n`,
  (err) => {
    if (err) {
      throw err;
    }
    console.log(`\u001b[${32}m${`packages.ts written OK`}\u001b[${39}m`);
  }
);

fs.writeFile(
  path.resolve("./data/sources/dependencyStats.ts"),
  `export const dependencyStats = ${JSON.stringify(sortAllObjectsSync(dependencyStats), null, 4)};\n`,
  (err) => {
    if (err) {
      throw err;
    }
    console.log(
      `\u001b[${32}m${`dependencyStats.ts written OK`}\u001b[${39}m`
    );
  }
);

fs.writeFile(
  path.resolve("./data/sources/packageJSONData.ts"),
  `export const packageJSONData = ${JSON.stringify(packageJSONData, null, 4)};\n`,
  (err) => {
    if (err) {
      throw err;
    }
    console.log(
      `\u001b[${32}m${`packageJSONData.ts written OK`}\u001b[${39}m`
    );
  }
);

// 5. gather git repo info
// ---------------------------------------------------------------------------

let commitTotal = null;
try {
  // git rev-list --count HEAD
  commitTotal = await git(".git").raw(["rev-list", "--count", "HEAD"]);
  fs.writeFile(
    path.join("./data/sources/gitStats.ts"),
    `export const gitStats = ${JSON.stringify({ commitTotal: commitTotal.trim() }, null, 4)}`,
    (err) => {
      if (err) {
        throw err;
      }
      console.log(`\u001b[${32}m${`gitStats.ts written OK`}\u001b[${39}m`);
    }
  );
} catch (e) {
  throw new Error("generate-info.js: can't access git data for gitStats.ts");
}
