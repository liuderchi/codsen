#!/usr/bin/env node

// ==================================
// GENERATES THE MONOREPO ROOT README
// ==================================

import fs from "fs";
import path from "path";

const today = new Date();
const year = today.getFullYear();

// READ ALL LIBS
// =============

const allPackages = fs
  .readdirSync(path.resolve("packages"))
  .filter(
    (packageName) =>
      typeof packageName === "string" &&
      packageName.length &&
      fs.statSync(path.join("packages", packageName)).isDirectory() &&
      fs.statSync(path.join("packages", packageName, "package.json")) &&
      !JSON.parse(
        fs.readFileSync(
          path.join("packages", packageName, "package.json"),
          "utf8"
        )
      ).private
  );

// ASSEMBLE THE TEMPLATE
// =====================

const template = `# Codsen

> A turbo-monorepo of ${allPackages.length} npm packages 📦📦📦

## 📚 Documentation

Please [visit codsen.com](https://codsen.com/os/) for an overview and full documentation of all packages.

## 🛠️ Tech stack

- \`yarn\` — with workspaces
- \`lerna\` — for version bumping and changelogs
- \`turborepo\` — to run tasks
- \`uvu\` + \`c8\` — unit test runner and coverage
- \`typescript\` — for all source code
- \`esbuild\` — to build \`*.ts\` into ESM and IIFE
- \`rollup\` + \`rollup-plugin-dts\` — to generate \`*.d.ts\`

## 🐛 Issue Tracker

For bugs, feature requests and so on, use the [Issue Tracker](https://github.com/codsen/codsen/issues/new/choose).

## 💼 Licence

MIT License

Copyright (c) 2010-${year} Roy Revelt and other contributors
`;

fs.writeFile("README.md", template, (err) => {
  if (err) {
    throw err;
  }
});
