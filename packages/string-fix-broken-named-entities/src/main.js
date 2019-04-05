import isObj from "lodash.isplainobject";
import clone from "lodash.clonedeep";
import { entStartsWith, entEndsWith, decode } from "all-named-html-entities";
import { left, right, rightSeq, leftSeq, chompLeft } from "string-left-right";
const isArr = Array.isArray;

/**
 * stringFixBrokenNamedEntities - fixes broken named HTML entities
 *
 * @param  {string} inputString
 * @return {array}  ranges array OR null
 */
function stringFixBrokenNamedEntities(str, originalOpts) {
  console.log(
    `015 ${`\u001b[${33}m${`originalOpts`}\u001b[${39}m`} = ${JSON.stringify(
      originalOpts,
      null,
      4
    )}`
  );
  function isNotaLetter(str) {
    return !(
      typeof str === "string" &&
      str.length === 1 &&
      str.toUpperCase() !== str.toLowerCase()
    );
  }
  function isStr(something) {
    return typeof something === "string";
  }
  function isLatinLetter(char) {
    // we mean Latin letters A-Z, a-z
    return (
      isStr(char) &&
      char.length === 1 &&
      ((char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91) ||
        (char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123))
    );
  }

  // insurance:
  // ---------------------------------------------------------------------------
  if (typeof str !== "string") {
    throw new Error(
      `string-fix-broken-named-entities: [THROW_ID_01] the first input argument must be string! It was given as:\n${JSON.stringify(
        str,
        null,
        4
      )} (${typeof str}-type)`
    );
  }
  const defaults = {
    decode: false,
    cb: ({ rangeFrom, rangeTo, rangeValEncoded, rangeValDecoded }) => [
      rangeFrom,
      rangeTo,
      opts.decode ? rangeValDecoded : rangeValEncoded
    ],
    progressFn: null
  };
  let opts;

  if (originalOpts != null) {
    if (!isObj(originalOpts)) {
      throw new Error(
        `string-fix-broken-named-entities: [THROW_ID_02] the second input argument must be a plain object! I was given as:\n${JSON.stringify(
          originalOpts,
          null,
          4
        )} (${typeof originalOpts}-type)`
      );
    } else {
      opts = Object.assign({}, defaults, originalOpts);
      console.log(
        `075 new ${`\u001b[${33}m${`opts`}\u001b[${39}m`} = ${JSON.stringify(
          opts,
          null,
          4
        )}`
      );
    }
  } else {
    opts = defaults;
  }
  if (opts.cb && typeof opts.cb !== "function") {
    throw new TypeError(
      `string-fix-broken-named-entities: [THROW_ID_03] opts.cb must be a function (or falsey)! Currently it's: ${typeof opts.cb}, equal to: ${JSON.stringify(
        opts.cb,
        null,
        4
      )}`
    );
  }
  if (opts.progressFn && typeof opts.progressFn !== "function") {
    throw new TypeError(
      `string-fix-broken-named-entities: [THROW_ID_04] opts.progressFn must be a function (or falsey)! Currently it's: ${typeof opts.progressFn}, equal to: ${JSON.stringify(
        opts.progressFn,
        null,
        4
      )}`
    );
  }
  console.log(
    `104 FINAL ${`\u001b[${33}m${`opts`}\u001b[${39}m`} used: ${JSON.stringify(
      opts,
      null,
      4
    )}`
  );

  // state flags
  // ---------------------------------------------------------------------------

  // this one is to mark the exception when current character is not ampersand
  // where should be one, but it is not necessary to add an ampersand here.
  // For example, there was ampersand and bunch of rubbish in between it and
  // current character. Current character should have ampersand in front of it.
  // We don't add one though, because we consult with this flag.
  let state_AmpersandNotNeeded = false;

  // markers:
  // define defaults so that we can reset to objects with keys, not empty objects

  // * nbsp tracking:
  const nbspDefault = {
    nameStartsAt: null, // when we'll insert range, we'll use this or "this - 1"
    ampersandNecessary: null, // default is not Boolean, to mark the state it needs tending
    patience: 2, // one letter can be omitted from name
    matchedN: null, // set the index of the first catch
    matchedB: null, // set the index of the first catch
    matchedS: null, // set the index of the first catch
    matchedP: null, // set the index of the first catch
    matchedSemicol: null // set the index of the first catch
  };
  let nbsp = clone(nbspDefault);
  const nbspWipe = () => {
    nbsp = clone(nbspDefault);
  };

  // this is what we'll return, process by default callback or user's custom-one
  const rangesArr2 = [];

  let smallestCharFromTheSetAt;
  let largestCharFromTheSetAt;
  let matchedLettersCount;
  let setOfValues;
  let percentageDone;
  let lastPercentageDone;

  // allocate all 100 of progress to the main loop below
  const len = str.length + 1;
  let counter = 0;

  // doNothingUntil can be either falsey or truthy: index number or boolean true
  // If it's number, it's instruction to avoid actions until that index is
  // reached when traversing. If it's boolean, it means we don't know when we'll
  // stop, we just turn on the flag (permanently, for now).
  let doNothingUntil = null;

  // catch letter sequences, possibly separated with whitespace. Non-letter
  // breaks the sequence. Main aim is to catch names of encoded HTML entities
  // for example, nbsp from "&nbsp;"
  let letterSeqStartAt = null;

  //                                      |
  //                                      |
  //                                      |
  //                                      |
  //                                      |
  //                                      |
  //                                      |
  //              T   H   E       L   O   O   P       S  T  A  R  T  S
  //                                      |
  //                                      |
  //                                 \    |     /
  //                                  \   |    /
  //                                   \  |   /
  //                                    \ |  /
  //                                     \| /
  //                                      V

  // differently from regex-based approach, we aim to traverse the string only once:
  outerloop: for (let i = 0; i < len; i++) {
    if (opts.progressFn) {
      percentageDone = Math.floor((counter / len) * 100);
      if (percentageDone !== lastPercentageDone) {
        lastPercentageDone = percentageDone;
        opts.progressFn(percentageDone);
      }
    }
    //            |
    //            |
    //            |
    //            |
    //            |
    // PART 1. FRONTAL LOGGING
    //            |
    //            |
    //            |
    //            |
    //            |
    console.log(
      `\u001b[${36}m${`===============================`}\u001b[${39}m \u001b[${35}m${`str[ ${i} ] = ${`\u001b[${31}m${
        str[i]
          ? str[i].trim() === ""
            ? str[i] === null
              ? "null"
              : str[i] === "\n"
              ? "line break"
              : str[i] === "\t"
              ? "tab"
              : str[i] === " "
              ? "space"
              : "???"
            : str[i]
          : "undefined"
      }\u001b[${39}m`}`}\u001b[${39}m \u001b[${36}m${`===============================`}\u001b[${39}m ${
        doNothingUntil && (doNothingUntil === true || doNothingUntil > i)
          ? `${`\u001b[${31}m${`██ doNothingUntil until ${doNothingUntil}`}\u001b[${39}m`}`
          : ""
      }`
    );

    //            |
    //            |
    //            |
    //            |
    //            |
    // PART 3. RULES AT THE TOP
    //            |
    //            |
    //            |
    //            |
    //            |

    if (doNothingUntil) {
      if (doNothingUntil !== true && i >= doNothingUntil) {
        doNothingUntil = null;
        console.log(
          `240 RESET ${`\u001b[${33}m${`doNothingUntil`}\u001b[${39}m`} = null`
        );
      } else {
        console.log(`243 continue`);
        counter++;
        continue;
      }
    }

    // Catch ending of an nbsp (or messed up set of its characters)
    // It's the character after semicolon or whatever is the last when semicolon
    // itself is missing.

    matchedLettersCount =
      (nbsp.matchedN !== null ? 1 : 0) +
      (nbsp.matchedB !== null ? 1 : 0) +
      (nbsp.matchedS !== null ? 1 : 0) +
      (nbsp.matchedP !== null ? 1 : 0);

    setOfValues = [
      nbsp.matchedN,
      nbsp.matchedB,
      nbsp.matchedS,
      nbsp.matchedP
    ].filter(val => val !== null);
    smallestCharFromTheSetAt = Math.min(...setOfValues);
    largestCharFromTheSetAt = Math.max(...setOfValues);
    console.log(
      `268 ${`\u001b[${33}m${`smallestCharFromTheSetAt`}\u001b[${39}m`} = ${JSON.stringify(
        smallestCharFromTheSetAt,
        null,
        4
      )}`
    );
    console.log(
      `275 ${`\u001b[${33}m${`largestCharFromTheSetAt`}\u001b[${39}m`} = ${JSON.stringify(
        largestCharFromTheSetAt,
        null,
        4
      )}`
    );

    // in principle, there has to be either ampersand or semicolon on an entity.
    // There are requirements for the length between characters of a set n-b-s-p.
    // If both ampersand and semicolon is missing, on both sides there must be a
    // non-letter.

    // largestCharFromTheSetAt - smallestCharFromTheSetAt <= 4
    if (
      nbsp.nameStartsAt !== null &&
      matchedLettersCount > 2 &&
      (nbsp.matchedSemicol !== null ||
        !nbsp.ampersandNecessary ||
        ((isNotaLetter(str[nbsp.nameStartsAt - 1]) && isNotaLetter(str[i])) ||
          ((isNotaLetter(str[nbsp.nameStartsAt - 1]) || isNotaLetter(str[i])) &&
            largestCharFromTheSetAt - smallestCharFromTheSetAt <= 4) ||
          (nbsp.matchedN !== null &&
            nbsp.matchedB !== null &&
            nbsp.matchedS !== null &&
            nbsp.matchedP !== null &&
            nbsp.matchedN + 1 === nbsp.matchedB &&
            nbsp.matchedB + 1 === nbsp.matchedS &&
            nbsp.matchedS + 1 === nbsp.matchedP))) &&
      (!str[i] ||
        (nbsp.matchedN !== null &&
          nbsp.matchedB !== null &&
          nbsp.matchedS !== null &&
          nbsp.matchedP !== null &&
          str[i] !== str[i - 1]) ||
        (str[i].toLowerCase() !== "n" &&
          str[i].toLowerCase() !== "b" &&
          str[i].toLowerCase() !== "s" &&
          str[i].toLowerCase() !== "p") ||
        str[left(str, i)] === ";") &&
      str[i] !== ";" &&
      (str[i + 1] === undefined || str[right(str, i)] !== ";")
    ) {
      console.log(
        `318 ${`\u001b[${90}m${`within nbsp clauses`}\u001b[${39}m`}`
      );
      if (
        str.slice(nbsp.nameStartsAt, i) !== "&nbsp;"
        // (nbsp.ampersandNecessary !== false &&
        //   str.slice(nbsp.nameStartsAt, i) !== "&nbsp;") ||
        // (nbsp.ampersandNecessary === false &&
        //   str.slice(
        //     Math.min(
        //       nbsp.matchedN,
        //       nbsp.matchedB,
        //       nbsp.matchedS,
        //       nbsp.matchedP
        //     ),
        //     i
        //   ) !== "nbsp;")
      ) {
        console.log(
          `336 ${`\u001b[${90}m${`catching what's missing in nbsp`}\u001b[${39}m`}`
        );
        // catch the case where only semicol is missing and insert only that
        // missing semicolon, instead of overwriting whole &nbsp;
        if (
          nbsp.nameStartsAt != null &&
          i - nbsp.nameStartsAt === 5 &&
          str.slice(nbsp.nameStartsAt, i) === "&nbsp"
        ) {
          console.log("345 ██ only semicol missing!");
          console.log(
            `347 push ${JSON.stringify({
              ruleName: "bad-named-html-entity-missing-semicolon",
              entityName: "nbsp",
              rangeFrom: nbsp.nameStartsAt,
              rangeTo: i,
              rangeValEncoded: "&nbsp;",
              rangeValDecoded: "\xA0"
            })}`
          );
          rangesArr2.push({
            ruleName: "bad-named-html-entity-missing-semicolon",
            entityName: "nbsp",
            rangeFrom: nbsp.nameStartsAt,
            rangeTo: i,
            rangeValEncoded: "&nbsp;",
            rangeValDecoded: "\xA0"
          });
        } else {
          console.log(`365 it's not just semicolon missing`);
          console.log(
            `367 ${`\u001b[${33}m${`nbsp.nameStartsAt`}\u001b[${39}m`} = ${JSON.stringify(
              nbsp.nameStartsAt,
              null,
              4
            )}`
          );
          // chomp all &amp; where ampersand is optional if sandwitched
          const chompedAmpFromLeft = chompLeft(
            str,
            nbsp.nameStartsAt,
            "&?",
            "a",
            "m",
            "p",
            ";?"
          );
          console.log(
            `384 ${`\u001b[${33}m${`chompedAmpFromLeft`}\u001b[${39}m`} = ${JSON.stringify(
              chompedAmpFromLeft,
              null,
              4
            )}`
          );
          const beginningOfTheRange = chompedAmpFromLeft
            ? chompedAmpFromLeft
            : nbsp.nameStartsAt;
          console.log(
            `394 beginningOfTheRange = ${JSON.stringify(
              beginningOfTheRange,
              null,
              4
            )}`
          );
          if (str.slice(beginningOfTheRange, i) !== "&nbsp;") {
            console.log(
              `402 push ${JSON.stringify({
                ruleName: "bad-named-html-entity-malformed-nbsp",
                entityName: "nbsp",
                rangeFrom: beginningOfTheRange,
                rangeTo: i,
                rangeValEncoded: "&nbsp;",
                rangeValDecoded: "\xA0"
              })}`
            );
            rangesArr2.push({
              ruleName: "bad-named-html-entity-malformed-nbsp",
              entityName: "nbsp",
              rangeFrom: beginningOfTheRange,
              rangeTo: i,
              rangeValEncoded: "&nbsp;",
              rangeValDecoded: "\xA0"
            });
          }
        }
      }
      nbspWipe();
      console.log(`423 WIPE ${`\u001b[${33}m${`nbsp`}\u001b[${39}m`}`);
      counter++;
      continue outerloop;
    }

    // If semicolon was passed and tag is not closing, wipe:
    if (
      str[i] &&
      str[i - 1] === ";" &&
      !leftSeq(str, i - 1, "a", "m", "p") &&
      str[i] !== ";" &&
      matchedLettersCount > 0
    ) {
      nbspWipe();
      console.log(`437 WIPE ${`\u001b[${33}m${`nbsp`}\u001b[${39}m`}`);
      counter++;
      continue outerloop;
    }

    //            |
    //            |
    //            |
    //            |
    //            |
    // PART 3. RULES AT THE MIDDLE
    //            |
    //            |
    //            |
    //            |
    //            |

    // Catch the end of a latin letter sequence.
    if (
      letterSeqStartAt !== null &&
      (!str[i] || (str[i].trim().length && !isLatinLetter(str[i])))
    ) {
      console.log(
        `460 ${`\u001b[${36}m${`██ letterSeqStartAt = ${letterSeqStartAt}`}\u001b[${39}m`}`
      );
      if (i > letterSeqStartAt + 1) {
        const potentialEntity = str.slice(letterSeqStartAt, i);
        console.log(
          `465 ${`\u001b[${35}m${`██ CARVED A SEQUENCE:\n${potentialEntity}`}\u001b[${39}m`}`
        );
        const whatsOnTheLeft = left(str, letterSeqStartAt);

        //
        //
        //
        //
        // CASE 1 - CHECK FOR MISSING AMPERSAND
        //
        //
        //
        //

        if (str[whatsOnTheLeft] === "&" && (!str[i] || str[i] !== ";")) {
          console.log(
            `470 ${`\u001b[${35}m${`semicol might be missing`}\u001b[${39}m`}`
          );
          // check, what's the index of the character to the right of
          // str[whatsOnTheLeft], is it any of the known named HTML entities.
          const firstChar = letterSeqStartAt;
          const secondChar = right(str, letterSeqStartAt);
          console.log(
            `477 firstChar = str[${firstChar}] = ${
              str[firstChar]
            }; secondChar = str[${secondChar}] = ${str[secondChar]}`
          );
          // we'll tap the "entStartsWith" from npm package "all-named-html-entities"
          // which gives a plain object of named entities, all grouped by first
          // and second character first. This reduces amount of matching needed.
          console.log(
            `485 ██ ${secondChar !== null &&
              entStartsWith.hasOwnProperty(str[firstChar]) &&
              entStartsWith[str[firstChar]].hasOwnProperty(str[secondChar])}`
          );
          // mind you, there can be overlapping variations of entities, for
          // example, &ang; and &angst;. Now, if you match "ang" from "&ang;",
          // starting from the left side (like we do using "entStartsWith"),
          // when there is "&angst;", answer will also be positive. And we can't
          // rely on semicolon being on the right because we are actually
          // catching MISSING semicolons here.
          // The only way around this is to match all entities that start here
          // and pick the one with the biggest character length.
          if (
            entStartsWith.hasOwnProperty(str[firstChar]) &&
            entStartsWith[str[firstChar]].hasOwnProperty(str[secondChar])
          ) {
            let tempEnt;
            let tempRes;

            const temp1 = entStartsWith[str[firstChar]][str[secondChar]].reduce(
              (gatheredSoFar, oneOfKnownEntities) => {
                // find all entities that match on the right of here
                // rightSeq could theoretically give positive answer, zero index,
                // but it's impossible here, so we're fine to match "if true".
                const tempRes = rightSeq(
                  str,
                  letterSeqStartAt - 1,
                  ...oneOfKnownEntities.split("")
                );
                if (tempRes && oneOfKnownEntities !== "nbsp") {
                  return gatheredSoFar.concat([
                    { tempEnt: oneOfKnownEntities, tempRes }
                  ]);
                }
                return gatheredSoFar;
              },
              []
            );

            // filter out the longest one of them
            if (isArr(temp1) && temp1.length) {
              ({ tempEnt, tempRes } = temp1.reduce(
                (gatheredSoFar, oneOfFilteredEntitiesObj) => {
                  if (
                    oneOfFilteredEntitiesObj.tempEnt.length >
                    gatheredSoFar.tempEnt.length
                  ) {
                    return oneOfFilteredEntitiesObj;
                  }
                  return gatheredSoFar;
                }
              ));
            }

            if (tempEnt) {
              console.log(
                `541 ${`\u001b[${35}m${`entity ${tempEnt} is indeed on the right of index ${i}, the situation is: ${JSON.stringify(
                  tempRes,
                  null,
                  4
                )}`}\u001b[${39}m`}`
              );

              const decodedEntity = decode(`&${tempEnt};`);

              console.log(
                `551 push ${JSON.stringify(
                  {
                    ruleName: `bad-named-html-entity-malformed-${tempEnt}`,
                    entityName: tempEnt,
                    rangeFrom: whatsOnTheLeft,
                    rangeTo: tempRes.rightmostChar + 1,
                    rangeValEncoded: `&${tempEnt};`,
                    rangeValDecoded: decodedEntity
                  },
                  null,
                  4
                )}`
              );
              rangesArr2.push({
                ruleName: `bad-named-html-entity-malformed-${tempEnt}`,
                entityName: tempEnt,
                rangeFrom: whatsOnTheLeft,
                rangeTo: tempRes.rightmostChar + 1,
                rangeValEncoded: `&${tempEnt};`,
                rangeValDecoded: decodedEntity
              });
            }
            // ELSE, it was just a legit ampersand
          }
        } else if (str[whatsOnTheLeft] !== "&" && str[i] && str[i] === ";") {
          //
          //
          //
          //
          // CASE 2 - CHECK FOR MISSING SEMICOLON
          //
          //
          //
          //

          console.log(
            `577 ${`\u001b[${35}m${`ampersand might be missing`}\u001b[${39}m`}`
          );
          // check, what's on the left of str[i], is it any of known named HTML
          // entities. There are two thousand of them so we'll match by last
          // two characters. For posterity, we assume there can be any amount of
          // whitespace between characters and we need to tackle it as well.
          const lastChar = left(str, i);
          const secondToLast = lastChar ? left(str, lastChar) : null;
          // we'll tap the "entEndsWith" from npm package "all-named-html-entities"
          // which gives a plain object of named entities, all grouped by first
          // and second character first. This reduces amount of matching needed.
          let tempEnt;
          let tempRes;
          console.log(
            `591 lastChar = ${lastChar}, secondToLast = ${secondToLast}`
          );
          if (
            secondToLast !== null &&
            entEndsWith.hasOwnProperty(str[lastChar]) &&
            entEndsWith[str[lastChar]].hasOwnProperty(str[secondToLast]) &&
            entEndsWith[str[lastChar]][str[secondToLast]].some(
              oneOfKnownEntities => {
                const temp = leftSeq(str, i, ...oneOfKnownEntities.split(""));
                if (temp && oneOfKnownEntities !== "nbsp") {
                  tempEnt = oneOfKnownEntities;
                  tempRes = temp;
                  return true;
                }
              }
            )
          ) {
            console.log(
              `609 ${`\u001b[${35}m${`entity ${tempEnt} is indeed on the left of index ${i}, the situation is: ${JSON.stringify(
                tempRes,
                null,
                4
              )}`}\u001b[${39}m`}`
            );

            const decodedEntity = decode(`&${tempEnt};`);

            console.log(
              `619 push ${JSON.stringify(
                {
                  ruleName: `bad-named-html-entity-malformed-${tempEnt}`,
                  entityName: tempEnt,
                  rangeFrom: tempRes.leftmostChar,
                  rangeTo: i + 1,
                  rangeValEncoded: `&${tempEnt};`,
                  rangeValDecoded: decodedEntity
                },
                null,
                4
              )}`
            );
            rangesArr2.push({
              ruleName: `bad-named-html-entity-malformed-${tempEnt}`,
              entityName: tempEnt,
              rangeFrom: tempRes.leftmostChar,
              rangeTo: i + 1,
              rangeValEncoded: `&${tempEnt};`,
              rangeValDecoded: decodedEntity
            });
          }
        }
      }

      // one-character chunks or chunks ending with ampersand get wiped:
      letterSeqStartAt = null;
      console.log(
        `647 ${`\u001b[${31}m${`RESET`}\u001b[${39}m`} ${`\u001b[${33}m${`letterSeqStartAt`}\u001b[${39}m`} = null`
      );
    }

    // Catch the start of the sequence of latin letters. It's necessary to
    // tackle named HTML entity recognition, missing ampersands and semicolons.

    if (letterSeqStartAt === null && isLatinLetter(str[i])) {
      letterSeqStartAt = i;
      console.log(
        `657 SET ${`\u001b[${33}m${`letterSeqStartAt`}\u001b[${39}m`} = ${letterSeqStartAt}`
      );
    }

    // catch amp;
    if (str[i] === "a") {
      // TODO - rebase with chomp()

      console.log(`665 ${`\u001b[${90}m${`within a clauses`}\u001b[${39}m`}`);
      // // 1. catch recursively-encoded cases. They're easy actually, the task will
      // // be deleting sequence of repeated "amp;" between ampersand and letter.

      // For example, we have this:
      // text&   amp  ;  a  m   p   ;  nbsp;text
      // We start at the opening ampersand at index 4;
      const singleAmpOnTheRight = rightSeq(str, i, "m", "p", ";");
      if (singleAmpOnTheRight) {
        console.log(
          `675 ${`\u001b[${90}m${`confirmed amp; from index ${i} onwards`}\u001b[${39}m`}`
        );

        // if we had to delete all amp;amp;amp; and leave only ampersand, this
        // will be the index to delete up to:
        let toDeleteAllAmpEndHere = singleAmpOnTheRight.rightmostChar + 1;
        console.log(
          `682 SET ${`\u001b[${33}m${`toDeleteAllAmpEndHere`}\u001b[${39}m`} = ${toDeleteAllAmpEndHere}`
        );

        // so one &amp; is confirmed.
        const nextAmpOnTheRight = rightSeq(
          str,
          singleAmpOnTheRight.rightmostChar,
          "a",
          "m",
          "p",
          ";"
        );
        if (nextAmpOnTheRight) {
          console.log(
            `696 ${`\u001b[${90}m${`confirmed another amp; on the right of index ${
              singleAmpOnTheRight.rightmostChar
            }`}\u001b[${39}m`}`
          );

          toDeleteAllAmpEndHere = nextAmpOnTheRight.rightmostChar + 1;
          console.log(
            `703 SET ${`\u001b[${33}m${`toDeleteAllAmpEndHere`}\u001b[${39}m`} = ${toDeleteAllAmpEndHere}`
          );

          let temp;
          do {
            console.log(
              `709 ${`\u001b[${36}m${`======== loop ========`}\u001b[${39}m`}`
            );
            temp = rightSeq(str, toDeleteAllAmpEndHere - 1, "a", "m", "p", ";");
            console.log(
              `713 ${`\u001b[${36}m${`temp = ${JSON.stringify(
                temp,
                null,
                4
              )}`}\u001b[${39}m`}`
            );

            if (temp) {
              toDeleteAllAmpEndHere = temp.rightmostChar + 1;
              console.log(
                `723 ${`\u001b[${36}m${`another amp; confirmed! Now`}\u001b[${39}m`} ${`\u001b[${33}m${`toDeleteAllAmpEndHere`}\u001b[${39}m`} = ${JSON.stringify(
                  toDeleteAllAmpEndHere,
                  null,
                  4
                )};`
              );
            }
          } while (temp);

          console.log(
            `733 FINAL ${`\u001b[${32}m${`toDeleteAllAmpEndHere`}\u001b[${39}m`} = ${JSON.stringify(
              toDeleteAllAmpEndHere,
              null,
              4
            )}`
          );
        }

        // What we have is toDeleteAllAmpEndHere which marks where the last amp;
        // semicolon ends were we to delete the whole thing.
        // For example, in:
        // text&   amp  ;  a  m   p   ;     a  m   p   ;    nbsp;text
        // this would be index 49, the "n" from "nbsp;"

        const firstCharThatFollows = right(str, toDeleteAllAmpEndHere - 1);
        const secondCharThatFollows = firstCharThatFollows
          ? right(str, firstCharThatFollows)
          : null;
        console.log(
          `752 SET initial ${`\u001b[${33}m${`firstCharThatFollows`}\u001b[${39}m`} = ${firstCharThatFollows}; ${`\u001b[${33}m${`secondCharThatFollows`}\u001b[${39}m`} = ${secondCharThatFollows}`
        );

        // If entity follows, for example,
        // text&   amp  ;  a  m   p   ;     a  m   p   ;    nbsp;text
        // we delete from the first ampersand to the beginning of that entity.
        // Otherwise, we delete only repetitions of amp; + whitespaces in between.
        let matchedTemp;
        let matchedVal;
        if (
          secondCharThatFollows &&
          entStartsWith.hasOwnProperty(str[firstCharThatFollows]) &&
          entStartsWith[str[firstCharThatFollows]].hasOwnProperty(
            str[secondCharThatFollows]
          ) &&
          entStartsWith[str[firstCharThatFollows]][
            str[secondCharThatFollows]
          ].some(entity => {
            // if (str.entStartsWith(`${entity};`, firstCharThatFollows)) {
            const matchEntityOnTheRight = rightSeq(
              str,
              toDeleteAllAmpEndHere - 1,
              ...entity.slice("")
            );
            if (matchEntityOnTheRight) {
              matchedTemp = entity;
              matchedVal = matchEntityOnTheRight;
              return true;
            }
          })
        ) {
          doNothingUntil = firstCharThatFollows + matchedTemp.length + 1;
          console.log(
            `785 ${`\u001b[${31}m${`██ ACTIVATE doNothingUntil = ${doNothingUntil}`}\u001b[${39}m`}`
          );

          console.log(
            `789 ENTITY ${`\u001b[${32}m${matchedTemp}\u001b[${39}m`} FOLLOWS`
          );
          // is there ampersand on the left of "i", the first amp;?
          const whatsOnTheLeft = left(str, i);

          if (str[whatsOnTheLeft] === "&") {
            console.log(`795 ampersand on the left`);
            console.log(
              `797 ${`\u001b[${33}m${`matchedTemp`}\u001b[${39}m`} = ${JSON.stringify(
                matchedTemp,
                null,
                4
              )}; ${`\u001b[${33}m${`matchedVal`}\u001b[${39}m`} = ${JSON.stringify(
                matchedVal,
                null,
                4
              )}`
            );
            console.log(
              `808 push ${JSON.stringify(
                {
                  ruleName: "bad-named-html-entity-multiple-encoding",
                  entityName: matchedTemp,
                  rangeFrom: whatsOnTheLeft,
                  rangeTo: doNothingUntil,
                  rangeValEncoded: `&${matchedTemp};`,
                  rangeValDecoded: decode(`&${matchedTemp};`)
                },
                null,
                4
              )}`
            );
            rangesArr2.push({
              ruleName: "bad-named-html-entity-multiple-encoding",
              entityName: matchedTemp,
              rangeFrom: whatsOnTheLeft,
              rangeTo: doNothingUntil,
              rangeValEncoded: `&${matchedTemp};`,
              rangeValDecoded: decode(`&${matchedTemp};`)
            });
          } else if (whatsOnTheLeft) {
            // we need to add the ampersand as well. Now, another consideration
            // appears: whitespace and where exactly to put it. Algorithmically,
            // we put it one index to the right of the non-whitespace character
            // that's on the left from here.
            let rangeFrom = whatsOnTheLeft + 1;
            let spaceReplacement = "";
            if (!str[rangeFrom].trim().length) {
              if (str[rangeFrom] === " ") {
                rangeFrom++;
              } else if (!`\n\r`.includes(str[rangeFrom])) {
                spaceReplacement = " ";
                // rangeFrom--;
              } else {
                // if there are line breaks just bail and insert the missing
                // ampersand in front of amp;
                rangeFrom = i;
              }
            }
            console.log(
              `849 rangeFrom = ${rangeFrom}; firstCharThatFollows = ${firstCharThatFollows}`
            );

            if (opts.cb) {
              console.log(
                `854 push ${JSON.stringify(
                  {
                    ruleName: "bad-named-html-entity-multiple-encoding",
                    entityName: matchedTemp,
                    rangeFrom: rangeFrom,
                    rangeTo: doNothingUntil,
                    rangeValEncoded: `${spaceReplacement}&${matchedTemp};`,
                    rangeValDecoded: `${spaceReplacement}${decode(
                      `&${matchedTemp};`
                    )}`
                  },
                  null,
                  4
                )}`
              );
              rangesArr2.push({
                ruleName: "bad-named-html-entity-multiple-encoding",
                entityName: matchedTemp,
                rangeFrom: rangeFrom,
                rangeTo: doNothingUntil,
                rangeValEncoded: `${spaceReplacement}&${matchedTemp};`,
                rangeValDecoded: `${spaceReplacement}${decode(
                  `&${matchedTemp};`
                )}`
              });
            }
          }
        }
      }
    }

    // catch ampersand
    if (str[i] === "&") {
      console.log(`887 ${`\u001b[${90}m${`& caught`}\u001b[${39}m`}`);

      // 1. Tackle false positives, where ampersand follows the caught characters
      if (
        nbsp.nameStartsAt &&
        nbsp.nameStartsAt < i &&
        (nbsp.matchedN || nbsp.matchedB || nbsp.matchedS || nbsp.matchedP)
      ) {
        console.log(
          `896 ${`\u001b[${31}m${`WIPE`}\u001b[${39}m`} nbsp markers because ampersand follows a tag beginning`
        );
        nbspWipe();
      }

      // 2. mark the potential beginning of an nbsp:
      if (nbsp.nameStartsAt === null) {
        // 2-1. Tag beginning has not been marked.
        if (nbsp.ampersandNecessary === null) {
          // The check above is for not false but null because null means it's
          // not set false is set to false. Thus check can't be "if false".

          // mark the beginning
          nbsp.nameStartsAt = i;
          console.log(
            `911 SET ${`\u001b[${33}m${`nbsp.nameStartsAt`}\u001b[${39}m`} = ${
              nbsp.nameStartsAt
            }`
          );
          nbsp.ampersandNecessary = false;
          console.log(
            `917 SET ${`\u001b[${33}m${`nbsp.ampersandNecessary`}\u001b[${39}m`} = ${
              nbsp.ampersandNecessary
            }`
          );
        }
      }
    }

    // catch "n"
    if (str[i] && str[i].toLowerCase() === "n") {
      // failsafe
      if (str[i - 1] === "i" && str[i + 1] === "s") {
        console.log("929 pattern ...ins... detected - bail");
        nbspWipe();
        counter++;
        continue outerloop;
      }

      // action
      console.log("936 n caught");
      if (nbsp.matchedN === null) {
        nbsp.matchedN = i;
        console.log(
          `940 SET ${`\u001b[${33}m${`nbsp.matchedN`}\u001b[${39}m`} = ${
            nbsp.matchedN
          }`
        );
      }
      if (nbsp.nameStartsAt === null) {
        // 1. mark it
        nbsp.nameStartsAt = i;
        console.log(
          `949 SET ${`\u001b[${33}m${`nbsp.nameStartsAt`}\u001b[${39}m`} = ${
            nbsp.nameStartsAt
          }`
        );
        // 2. tend the ampersand situation
        if (nbsp.ampersandNecessary === null && !state_AmpersandNotNeeded) {
          // if by now there are signs of ampersand records, it must be added later:
          nbsp.ampersandNecessary = true;
        } else if (nbsp.ampersandNecessary !== true) {
          // in all other cases, set it as not needed
          nbsp.ampersandNecessary = false;
        }
        console.log(
          `962 SET ${`\u001b[${33}m${`nbsp.ampersandNecessary`}\u001b[${39}m`} = ${
            nbsp.ampersandNecessary
          }`
        );
      }
    }

    // catch "b"
    if (str[i] && str[i].toLowerCase() === "b") {
      console.log("971 b caught");
      if (nbsp.nameStartsAt !== null) {
        // clean code, N was already detected
        if (nbsp.matchedB === null) {
          nbsp.matchedB = i;
          console.log(
            `977 SET ${`\u001b[${33}m${`nbsp.matchedB`}\u001b[${39}m`} = ${
              nbsp.matchedB
            }`
          );
        }
      } else if (nbsp.patience) {
        // dirty code case because ampersand or "n" are missing so far

        // 1. Patience is reduced for every single character missing. There can
        // be only one character missing out of n-b-s-p.
        nbsp.patience--;
        console.log(
          `989 MINUSMINUS ${`\u001b[${33}m${`nbsp.patience`}\u001b[${39}m`}, then it's ${
            nbsp.patience
          }`
        );

        // 2. mark the start
        nbsp.nameStartsAt = i;
        console.log(
          `997 SET ${`\u001b[${33}m${`nbsp.nameStartsAt`}\u001b[${39}m`} = ${
            nbsp.nameStartsAt
          }`
        );
        nbsp.matchedB = i;
        console.log(
          `1003 SET ${`\u001b[${33}m${`nbsp.matchedB`}\u001b[${39}m`} = true`
        );

        // 3. tend the ampersand situation
        if (nbsp.ampersandNecessary === null && !state_AmpersandNotNeeded) {
          // if by now there are signs of ampersand records, it must be added later:
          nbsp.ampersandNecessary = true;
          console.log(
            `1011 SET ${`\u001b[${33}m${`nbsp.ampersandNecessary`}\u001b[${39}m`} = true`
          );
        } else if (nbsp.ampersandNecessary !== true) {
          // in all other cases, set it as not needed
          nbsp.ampersandNecessary = false;
          console.log(
            `1017 SET ${`\u001b[${33}m${`nbsp.ampersandNecessary`}\u001b[${39}m`} = false`
          );
        }
      } else {
        // wipe
        nbspWipe();
        console.log(`1023 WIPE ${`\u001b[${33}m${`nbsp`}\u001b[${39}m`}`);
        counter++;
        continue outerloop;
      }
    }

    // catch "s"
    if (str[i] && str[i].toLowerCase() === "s") {
      console.log("1031 s caught");
      if (nbsp.nameStartsAt !== null) {
        // clean code
        if (nbsp.matchedS === null) {
          nbsp.matchedS = i;
          console.log(
            `1037 SET ${`\u001b[${33}m${`nbsp.matchedS`}\u001b[${39}m`} = ${
              nbsp.matchedS
            }`
          );
        }
      } else if (nbsp.patience) {
        // dirty code case because ampersand or "n" are missing so far

        // 1. Patience is reduced for every single character missing. There can
        // be only one character missing out of n-b-s-p.
        nbsp.patience--;
        console.log(
          `1049 MINUSMINUS ${`\u001b[${33}m${`nbsp.patience`}\u001b[${39}m`}, then it's ${
            nbsp.patience
          }`
        );

        // 2. mark the start
        nbsp.nameStartsAt = i;
        console.log(
          `1057 SET ${`\u001b[${33}m${`nbsp.nameStartsAt`}\u001b[${39}m`} = ${
            nbsp.nameStartsAt
          }`
        );
        nbsp.matchedS = i;
        console.log(
          `1063 SET ${`\u001b[${33}m${`nbsp.matchedS`}\u001b[${39}m`} = true`
        );

        // 3. tend the ampersand situation
        if (nbsp.ampersandNecessary === null && !state_AmpersandNotNeeded) {
          // if by now there are signs of ampersand records, it must be added later:
          nbsp.ampersandNecessary = true;
          console.log(
            `1071 SET ${`\u001b[${33}m${`nbsp.ampersandNecessary`}\u001b[${39}m`} = true`
          );
        } else if (nbsp.ampersandNecessary !== true) {
          // in all other cases, set it as not needed
          nbsp.ampersandNecessary = false;
          console.log(
            `1077 SET ${`\u001b[${33}m${`nbsp.ampersandNecessary`}\u001b[${39}m`} = false`
          );
        }
      } else {
        // wipe
        nbspWipe();
        console.log(`1083 WIPE ${`\u001b[${33}m${`nbsp`}\u001b[${39}m`}`);
        counter++;
        continue outerloop;
      }
    }

    // catch "p"
    if (str[i] && str[i].toLowerCase() === "p") {
      console.log("1091 p caught");
      if (nbsp.nameStartsAt !== null) {
        // clean code
        if (nbsp.matchedP === null) {
          nbsp.matchedP = i;
          console.log(
            `1097 SET ${`\u001b[${33}m${`nbsp.matchedP`}\u001b[${39}m`} = ${
              nbsp.matchedP
            }`
          );
        }
      } else if (nbsp.patience) {
        // dirty code case because ampersand or "n" are missing so far

        // 1. Patience is reduced for every single character missing. There can
        // be only one character missing out of n-b-s-p.
        nbsp.patience--;
        console.log(
          `1109 MINUSMINUS ${`\u001b[${33}m${`nbsp.patience`}\u001b[${39}m`}, then it's ${
            nbsp.patience
          }`
        );

        // 2. mark the start
        nbsp.nameStartsAt = i;
        console.log(
          `1117 SET ${`\u001b[${33}m${`nbsp.nameStartsAt`}\u001b[${39}m`} = ${
            nbsp.nameStartsAt
          }`
        );
        nbsp.matchedP = i;
        console.log(
          `1123 SET ${`\u001b[${33}m${`nbsp.matchedP`}\u001b[${39}m`} = true`
        );

        // 3. tend the ampersand situation
        if (nbsp.ampersandNecessary === null && !state_AmpersandNotNeeded) {
          // if by now there are signs of ampersand records, it must be added later:
          nbsp.ampersandNecessary = true;
          console.log(
            `1131 SET ${`\u001b[${33}m${`nbsp.ampersandNecessary`}\u001b[${39}m`} = true`
          );
        } else if (nbsp.ampersandNecessary !== true) {
          // in all other cases, set it as not needed
          nbsp.ampersandNecessary = false;
          console.log(
            `1137 SET ${`\u001b[${33}m${`nbsp.ampersandNecessary`}\u001b[${39}m`} = false`
          );
        }
      } else {
        // wipe
        nbspWipe();
        console.log(`1143 WIPE ${`\u001b[${33}m${`nbsp`}\u001b[${39}m`}`);
        counter++;
        continue outerloop;
      }
    }

    // catch semicolon
    if (str[i] === ";") {
      if (nbsp.nameStartsAt !== null) {
        nbsp.matchedSemicol = i;
        console.log(
          `1154 SET ${`\u001b[${33}m${`nbsp.matchedSemicol`}\u001b[${39}m`} = ${
            nbsp.matchedSemicol
          }`
        );

        // ensure semicolon doesn't precede the n-b-s-p letters, but this applies
        // only if one letter is caught before the semicolon
        if (
          (nbsp.matchedN && // <---- just n
            !nbsp.matchedB &&
            !nbsp.matchedS &&
            !nbsp.matchedP) ||
          (!nbsp.matchedN &&
          nbsp.matchedB && // <---- just b
            !nbsp.matchedS &&
            !nbsp.matchedP) ||
          (!nbsp.matchedN &&
          !nbsp.matchedB &&
          nbsp.matchedS && // <---- just s
            !nbsp.matchedP) ||
          (!nbsp.matchedN && !nbsp.matchedB && !nbsp.matchedS && nbsp.matchedP) // <---- just p
        ) {
          nbspWipe();
          console.log(`1177 WIPE ${`\u001b[${33}m${`nbsp`}\u001b[${39}m`}`);
        }
      }
    }

    // // catch whitespace
    // if (str[i] && str[i].trim().length === 0 && nbsp.nameStartsAt !== null) {
    //   nbspWipe();
    //   console.log(`1185 WIPE ${`\u001b[${33}m${`nbsp`}\u001b[${39}m`}`);
    // }

    //            |
    //            |
    //            |
    //            |
    //            |
    // PART 3. RULES AT THE BOTTOM
    //            |
    //            |
    //            |
    //            |
    //            |

    // the state state_AmpersandNotNeeded = true lasts only for a single
    // character, hence needs to be at the very bottom:
    if (state_AmpersandNotNeeded) {
      state_AmpersandNotNeeded = false;
      console.log(
        `1205 SET ${`\u001b[${33}m${`state_AmpersandNotNeeded`}\u001b[${39}m`} = ${JSON.stringify(
          state_AmpersandNotNeeded,
          null,
          4
        )}`
      );

      // if there was at least one character caught from [n, b, s, p], activate
      // "forgetAboutAmpersand", marking that all is taken care of with regards
      // of ampersand and no need to worry. Imagine, otherwise, the markers
      // such as: "ampersand at 4", "n at 8", "b at 9", "s at 10" ... would
      // freak out the algorithm - what's that space between 4 and 8!!!
      if (
        nbsp.nameStartsAt &&
        (nbsp.matchedN || nbsp.matchedB || nbsp.matchedS || nbsp.matchedP)
      ) {
        nbsp.ampersandNecessary = false;
      }
    }

    // If ampersand is detected and next letter is not from
    // ["n", "b", "s", "p"] set, reduce "patience" for each character in a
    // sequence as long as it's not from the set.
    if (
      nbsp.nameStartsAt !== null &&
      i > nbsp.nameStartsAt &&
      str[i] &&
      str[i].toLowerCase() !== "n" &&
      str[i].toLowerCase() !== "b" &&
      str[i].toLowerCase() !== "s" &&
      str[i].toLowerCase() !== "p" &&
      str[i] !== "&" &&
      str[i] !== ";" &&
      str[i] !== " "
    ) {
      if (nbsp.patience) {
        nbsp.patience = nbsp.patience - 1;
        console.log(`1242 nbsp.patience--, now equal to: ${nbsp.patience}`);
      } else {
        nbspWipe();
        console.log(`1245 WIPE ${`\u001b[${33}m${`nbsp`}\u001b[${39}m`}`);
        counter++;
        continue outerloop;
      }
    }

    //            |
    //            |
    //            |
    //            |
    //            |
    // PART 4. LOGGING:
    //            |
    //            |
    //            |
    //            |
    //            |
    console.log("---------------");
    console.log(
      `1264 ${`\u001b[${90}m${`letterSeqStartAt = ${letterSeqStartAt}`}\u001b[${39}m`}`
    );
    // console.log(`state_AmpersandNotNeeded = ${state_AmpersandNotNeeded}`);
    // console.log(
    //   `${`\u001b[${33}m${`nbsp`}\u001b[${39}m`} = ${JSON.stringify(
    //     nbsp,
    //     null,
    //     4
    //   )}${
    //     Array.isArray(rangesArr2) && rangesArr2.length
    //       ? `\n${`\u001b[${32}m${`rangesArr2`}\u001b[${39}m`} = ${JSON.stringify(
    //           rangesArr2,
    //           null,
    //           4
    //         )}`
    //       : ""
    //   }`
    // );
    counter++;
  }

  //                                      ^
  //                                     /|\
  //                                    / | \
  //                                   /  |  \
  //                                  /   |   \
  //                                 /    |    \
  //                                      |
  //                                      |
  //              T   H   E       L   O   O   P       E   N   D   S
  //                                      |
  //                                      |
  //                                      |
  //                                      |
  //                                      |
  //                                      |

  if (!rangesArr2.length) {
    console.log(`1302 ${`\u001b[${32}m${`RETURN`}\u001b[${39}m`} null`);
    return null;
  }

  console.log(
    `1307 IN THE END, before merge rangesArr2 = ${JSON.stringify(
      rangesArr2,
      null,
      4
    )}`
  );

  // return rangesArr2.map(opts.cb);

  // if any two issue objects have identical "from" indexes, remove the one
  // which ends earlier. For example, [4, 8] and [4, 12] would end up [4, 12]
  // winning and [4, 8] removed. Obviously, it's not arrays, it's objects,
  // format for example
  // {
  //     "ruleName": "bad-named-html-entity-malformed-amp",
  //     "entityName": "amp",
  //     "rangeFrom": 4,
  //     "rangeTo": 8,
  //     "rangeValEncoded": "&amp;",
  //     "rangeValDecoded": "&"
  // },
  // so instead of [4, 8] that would be [rangeFrom, rangeTo]...
  const res = rangesArr2
    .filter((filteredRangeObj, i) => {
      return rangesArr2.every((oneOfEveryObj, y) => {
        return (
          i === y ||
          filteredRangeObj.rangeFrom !== oneOfEveryObj.rangeFrom ||
          filteredRangeObj.rangeTo > oneOfEveryObj.rangeTo
        );
      });
    })
    .map(opts.cb);
  console.log(
    `1341 RETURN ${`\u001b[${33}m${`res`}\u001b[${39}m`} = ${JSON.stringify(
      res,
      null,
      4
    )}`
  );
  return res;
}

export default stringFixBrokenNamedEntities;
