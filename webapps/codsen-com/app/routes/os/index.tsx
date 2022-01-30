import { Outlet, Link } from "remix";
import { BackToTop } from "../../components/back-to-top";
import { programClassification, packages, packageJSONData } from "@codsen/data";
import { CodsenStarSmall } from "../../components/svg/codsen-star-small";
import { CodsenStarLarge } from "../../components/svg/codsen-star-large";
import { Codsen2 } from "../../components/svg/codsen-2";
import { CodsenMr } from "../../components/svg/codsen-mr";
import { CodsenOK } from "../../components/svg/codsen-ok";
import { CodsenWow } from "../../components/svg/codsen-wow";
import { CodsenHandshake } from "../../components/svg/codsen-handshake";
import { Codsen1 } from "~/components/svg/codsen-1";

// -----------------------------------------------------------------------------

// Prepare data.

// Challenges:
// 1. ensure each package goes to single "pot" only. Unless our classification
//    file explicitly assigns the program to multiple categories.
// 2. we have some classification intel, but not all, from imported JSON data files
// 3. some identification is done by package's name, but beware of clashes, the
//    "hard intel" takes priority over name-only assumptions, for example,
//    string-range-expander is "Ranges" library, not "String"
// 4. everything unclassified goes to "Miscellaneous"
// 5. look for ways to check the correctness of data sources, cross-referencing them
//    for example, if program mentioned in imported JSON file does not exist in another
//    JSON which mentions "all" programs.

let flagshipLibs: string[] = [];
const rangeLibs: string[] = [];
let htmlLibs: string[] = [];
let stringLibs: string[] = [];
let objectOrArrLibs: string[] = [];
const lernaLibs: string[] = [];
const cliApps: string[] = [];
let ASTApps: string[] = [];
const miscLibs: string[] = [];

packages.all.forEach((p) => {
  if (programClassification.flagshipLibsList.includes(p)) {
    flagshipLibs.push(p);
  } else if (
    programClassification.rangeLibsList.includes(p) ||
    p.startsWith("ranges-")
  ) {
    rangeLibs.push(p);
  } else if (
    programClassification.htmlLibsList.includes(p) ||
    p.startsWith("html-") ||
    p.endsWith("-css")
  ) {
    htmlLibs.push(p);
  } else if (
    programClassification.stringLibsList.includes(p) ||
    p.startsWith("string-")
  ) {
    stringLibs.push(p);
  } else if (
    programClassification.objectLibsList.includes(p) ||
    p.startsWith("object-") ||
    p.startsWith("array-")
  ) {
    objectOrArrLibs.push(p);
  } else if (
    programClassification.lernaLibsList.includes(p) ||
    p.startsWith("lerna-")
  ) {
    lernaLibs.push(p);
  } else if (
    programClassification.cliAppsList.includes(p) ||
    p.endsWith("-cli")
  ) {
    cliApps.push(p);
  } else if (
    programClassification.astLibsList.includes(p) ||
    p.startsWith("ast-")
  ) {
    ASTApps.push(p);
  } else {
    miscLibs.push(p);
  }
});

// At this point, we have divided the packages pool, but order is alphabetical.
// We need to control the order, to set it as per of classification JSON (at least
// the top part of it).

function setTheOrder(libs: string[], classification: string[]) {
  return classification.concat(
    libs.filter((p) => !classification.includes(p)).sort()
  );
}

stringLibs = setTheOrder(stringLibs, programClassification.stringLibsList);
htmlLibs = setTheOrder(htmlLibs, programClassification.htmlLibsList);
objectOrArrLibs = setTheOrder(
  objectOrArrLibs,
  programClassification.objectLibsList
);
ASTApps = setTheOrder(ASTApps, programClassification.astLibsList);
flagshipLibs = setTheOrder(
  flagshipLibs,
  programClassification.flagshipLibsList
);

// -----------------------------------------------------------------------------

interface CountInterface {
  count: number;
  label: string;
}
const Count = ({ count, label }: CountInterface) => (
  <>
    {" "}
    <sup
      title={`${count} ${label} in total`}
      aria-label={`${count} ${label} in total`}
    >
      Σ={count}
    </sup>
  </>
);

interface OSHeadingInterface {
  children: React.ReactNode;
  idName: string;
  count?: number;
}
function OSHeading({ children, idName, count }: OSHeadingInterface) {
  return (
    <h2 id={`${idName}-libraries`}>
      <a className="header-anchor" href={`#${idName}-libraries`}>
        {children}
      </a>
      {count && <Count count={count} label={String(children)} />}
    </h2>
  );
}

interface OSBodyInterface {
  children: React.ReactNode;
  libArray: string[];
}
function OSBody({ children, libArray }: OSBodyInterface) {
  return (
    <div className="content-row__container">
      <div className="content-row__description">{children}</div>
      <div className="content-row__packages">
        {libArray.map((p, i) => {
          return (
            <div className="content-row__package" key={`os-body-${i}`}>
              <Link to={`/os/${p}`}>
                <span className="emoji">📦</span>{" "}
                <span className="content-row__name">{p}</span>{" "}
                <sup>
                  {(packageJSONData as any)[p]
                    ? (packageJSONData as any)[p].version
                    : "TBC"}
                </sup>
                <div className="content-row__package__description">
                  {(packageJSONData as any)[p]
                    ? (packageJSONData as any)[p].description
                    : "TBC"}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function IndexRoute() {
  return (
    <>
      <h1>Open Source</h1>

      <div className="separator" role="presentation">
        <CodsenStarSmall />
        <Codsen2 />
        <CodsenStarLarge />
      </div>

      <OSHeading idName="flagship">Flagship Libraries</OSHeading>
      <OSBody libArray={flagshipLibs}>
        These are the largest and the most complex programs here. Many smaller
        programs were created just to drive a certain feature of these programs.
        For example, whole <a href="#range-libraries">Ranges program family</a>{" "}
        was created because Detergent needed to compose string operations.
      </OSBody>
      <BackToTop />

      <div className="separator" role="presentation">
        <CodsenStarLarge />
        <CodsenOK />
      </div>

      <OSHeading idName="range" count={rangeLibs.length}>
        Range Libraries
      </OSHeading>
      <OSBody libArray={rangeLibs}>
        <p>
          We needed a way to compose multiple string amendment operations. We
          started to mark each operation as an array, for example,{" "}
          <code>[1, 5]</code> means "delete from string index 1 to 5".
        </p>
        <p>
          If you wish to put something after deletion as well, it goes as the
          third element in the array.
        </p>
        <p>
          All these packages process arrays of range arrays in various ways.
        </p>
      </OSBody>
      <BackToTop />

      <div className="separator" role="presentation">
        <CodsenMr />
        <CodsenStarSmall />
      </div>

      <OSHeading idName="html" count={htmlLibs.length}>
        HTML Processing Libraries
      </OSHeading>
      <OSBody libArray={htmlLibs}>
        <p>
          They all process HTML and CSS. Our speciality is so-called scanerless
          parsing algorithm — we don't parse and then work on AST and then
          render. We aim to work on the source code directly while traversing it
          as a string.
        </p>
        <p>
          The idea is, if you don't parse the HTML, you can support broken or
          mixed code. Unless you write your parser, it becomes a bottleneck —
          parser throws here and there, and you can do nothing about it.
        </p>
        <p>
          It is vital to support broken code because this allows us to make
          broken code fixing programs.
        </p>
        <p>
          Also, we often aim to support the processing of HTML mixed with other,
          known or unknown, source code (typically programming or templating
          languages).
        </p>
      </OSBody>
      <BackToTop />

      <div className="separator" role="presentation">
        <Codsen2 />
        <CodsenWow />
      </div>

      <OSHeading idName="string" count={stringLibs.length}>
        String Processing Libraries
      </OSHeading>
      <OSBody libArray={stringLibs}>
        They process string inputs, which might be text, code or something else
        as long as it is of a string-type.
      </OSBody>
      <BackToTop />

      <div className="separator" role="presentation">
        <CodsenStarSmall />
        <CodsenHandshake />
        <CodsenStarSmall />
        <CodsenStarLarge />
      </div>

      <OSHeading idName="object" count={objectOrArrLibs.length}>
        Plain Object or Array Libraries
      </OSHeading>
      <OSBody libArray={objectOrArrLibs}>
        <p>
          Usually, plain objects come from JSON files, and often they are deeply
          nested. The following libraries help us to traverse them, set and
          delete keys and compare objects.
        </p>
        <p>
          Array-processing libraries deal with tasks like sorting, deletion or
          conversion to other structures.
        </p>
      </OSBody>
      <BackToTop />

      <div className="separator" role="presentation">
        <CodsenStarSmall />
        <CodsenOK />
      </div>

      <OSHeading idName="ast" count={ASTApps.length}>
        AST Libraries
      </OSHeading>
      <OSBody libArray={ASTApps}>
        AST stands for Abstract Syntax Tree, it's a fancy name for nested output
        of a parser. Typically, it's an array or a plain object with many layers
        of nested elements.
      </OSBody>
      <BackToTop />

      <div className="separator" role="presentation">
        <Codsen1 />
        <CodsenStarSmall />
      </div>

      <OSHeading idName="lerna" count={lernaLibs.length}>
        Lerna Libraries
      </OSHeading>
      <OSBody libArray={lernaLibs}>
        While maintaining our monorepo we found that some essential tools were
        missing, so we created them!
      </OSBody>
      <BackToTop />

      <div className="separator" role="presentation">
        <CodsenStarSmall />
        <CodsenMr />
      </div>

      <OSHeading idName="cli" count={cliApps.length}>
        CLI Apps
      </OSHeading>
      <OSBody libArray={cliApps}>
        <p>
          All the following libraries are command-line applications. You install
          them using <code>-g</code> flag via npm, for example,{" "}
          <code>npm i -g json-sort-cli</code>. Often a package/library/program
          would have its CLI counterpart: you can use a package
          programmatically, inside your programs, or you can use its CLI in the
          terminal, as a standalone program.
        </p>
        <p>
          For example, <code>csv-sort</code> package is string-in, string-out
          function. It's meant to be used by websites, CLI's and Node programs.
          <code>csv-sort-cli</code> "taps it" and adds file I/O layer and lets
          you read/write/sort files directly, via a command line.
        </p>
      </OSBody>
      <BackToTop />

      <div className="separator" role="presentation">
        <CodsenStarSmall />
        <CodsenStarLarge />
      </div>

      <OSHeading idName="miscellaneous" count={miscLibs.length}>
        Miscellaneous Libraries
      </OSHeading>
      <OSBody libArray={miscLibs}>
        That's all programs which don't belong to any of the categories above.
        Here we have programs doing everything, from CSV sorting to Tap output
        parsing; from regexes to converting colour hex codes.
      </OSBody>
      <BackToTop />

      <div className="separator" role="presentation">
        <Codsen2 />
      </div>
    </>
  );
}
