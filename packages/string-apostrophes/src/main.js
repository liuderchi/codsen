import rangesApply from "ranges-apply";

function convertOne(
  str,
  {
    from,
    to,
    value,
    convertEntities = true,
    convertApostrophes = true,
    offsetBy,
  }
) {
  // insurance
  // =========

  if (!Number.isInteger(to)) {
    if (Number.isInteger(from)) {
      to = from + 1;
    } else {
      throw new Error(
        `string-apostrophes: [THROW_ID_01] options objects keys' "to" and "from" values are not integers!`
      );
    }
  }

  // consts
  // ======

  const rangesArr = [];
  const leftSingleQuote = "\u2018";
  const rightSingleQuote = "\u2019";
  const leftDoubleQuote = "\u201C";
  const rightDoubleQuote = "\u201D";
  const singlePrime = "\u2032";
  const doublePrime = "\u2033";
  const punctuationChars = [".", ",", ";", "!", "?"];
  // const rawNDash = "\u2013";
  // const rawMDash = "\u2014";

  // f's
  // ===

  function isDigitStr(str2) {
    return (
      typeof str2 === "string" &&
      str2.charCodeAt(0) >= 48 &&
      str2.charCodeAt(0) <= 57
    );
  }

  function isLetter(str2) {
    return (
      typeof str2 === "string" &&
      str2.length &&
      str2.toUpperCase() !== str2.toLowerCase()
    );
  }

  console.log(`060`);

  // The following section detects apostrophes, with aim to convert them to
  // curlie right single quote or similar.
  // However, we also need to tackle cases where wrong-side apostrophe is put,
  // for example, right side single quote instead of left side or the opposite.
  if (
    [`'`, leftSingleQuote, rightSingleQuote, singlePrime].includes(value) ||
    (to === from + 1 &&
      [`'`, leftSingleQuote, rightSingleQuote, singlePrime].includes(str[from]))
  ) {
    console.log(`071 single quote/apos clauses`);
    // IF SINGLE QUOTE OR APOSTROPHE, the '
    // OR LEFT/RIGHT SINGLE QUOTES OR SINGLE PRIME
    if (
      str[from - 1] &&
      str[to] &&
      isDigitStr(str[from - 1]) &&
      !isLetter(str[to])
    ) {
      console.log(`080 prime cases`);
      if (
        convertApostrophes &&
        str.slice(from, to) !== (convertEntities ? "&prime;" : singlePrime) &&
        value !== (convertEntities ? "&prime;" : singlePrime)
      ) {
        rangesArr.push([from, to, convertEntities ? "&prime;" : singlePrime]);
        console.log(
          `088 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} prime symbol [${from}, ${to}, ${
            convertEntities ? "&prime;" : "\u2032"
          }]`
        );
      } else if (
        !convertApostrophes &&
        str.slice(from, to) !== `'` &&
        value !== `'`
      ) {
        rangesArr.push([from, to, `'`]);
        console.log(
          `099 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} a plain apostrophe [${from}, ${to}, ']`
        );
      }
    } else if (
      str[to] &&
      str[to + 1] &&
      str[to] === "n" &&
      str.slice(from, to) === str.slice(to + 1, to + 1 + (to - from)) // ensure quotes/apostrophes match
    ) {
      console.log(`108 rock 'n' roll case`);
      // specifically take care of 'n' as in "rock ’n’ roll"
      if (
        convertApostrophes &&
        str.slice(from, to + 2) !==
          (convertEntities
            ? "&rsquo;n&rsquo;"
            : `${rightSingleQuote}n${rightSingleQuote}`) &&
        value !==
          (convertEntities
            ? "&rsquo;n&rsquo;"
            : `${rightSingleQuote}n${rightSingleQuote}`)
      ) {
        rangesArr.push([
          from,
          to + 2,
          convertEntities
            ? "&rsquo;n&rsquo;"
            : `${rightSingleQuote}n${rightSingleQuote}`,
        ]);
        console.log(
          `129 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${
            to + 2
          }, ${
            convertEntities
              ? "&rsquo;n&rsquo;"
              : `${rightSingleQuote}n${rightSingleQuote}`
          }]`
        );
        if (typeof offsetBy === "function") {
          offsetBy(2);
        }
      } else if (
        !convertApostrophes &&
        str.slice(from, to + 2) !== "'n'" &&
        value !== "'n'"
      ) {
        rangesArr.push([from, to + 2, "'n'"]);
        console.log(
          `147 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${
            to + 2
          }, "'n'"]`
        );
        if (typeof offsetBy === "function") {
          offsetBy(2);
        }
      }
    } else if (
      (str[to] &&
        str[to].toLowerCase() === "t" &&
        (!str[to + 1] ||
          !str[to + 1].trim() ||
          str[to + 1].toLowerCase() === "i")) ||
      (str[to] &&
        str[to + 2] &&
        str[to].toLowerCase() === "t" &&
        str[to + 1].toLowerCase() === "w" &&
        (str[to + 2].toLowerCase() === "a" ||
          str[to + 2].toLowerCase() === "e" ||
          str[to + 2].toLowerCase() === "i" ||
          str[to + 2].toLowerCase() === "o")) ||
      (str[to] &&
        str[to + 1] &&
        str[to].toLowerCase() === "e" &&
        str[to + 1].toLowerCase() === "m") ||
      (str[to] &&
        str[to + 4] &&
        str[to].toLowerCase() === "c" &&
        str[to + 1].toLowerCase() === "a" &&
        str[to + 2].toLowerCase() === "u" &&
        str[to + 3].toLowerCase() === "s" &&
        str[to + 4].toLowerCase() === "e") ||
      (str[to] && isDigitStr(str[to]))
    ) {
      console.log(`182 'tis, 'twas, 'twere clauses`);
      if (
        convertApostrophes &&
        str.slice(from, to) !==
          (convertEntities ? "&rsquo;" : rightSingleQuote) &&
        value !== (convertEntities ? "&rsquo;" : rightSingleQuote)
      ) {
        // first, take care of 'tis, 'twas, 'twere, 'twould and so on
        rangesArr.push([
          from,
          to,
          convertEntities ? "&rsquo;" : rightSingleQuote,
        ]);
        console.log(
          `196 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, ${
            convertEntities ? "&rsquo;" : rightSingleQuote
          }]`
        );
      } else if (
        !convertApostrophes &&
        str.slice(from, to) !== "'" &&
        value !== "'"
      ) {
        rangesArr.push([from, to, "'"]);
        console.log(
          `207 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, "'"]`
        );
      }
    } else if (
      str[from - 1] &&
      str[to] &&
      punctuationChars.includes(str[from - 1])
    ) {
      // if there's punctuation on the left and something on the right:
      console.log(
        `217 there's punctuation on the left and something on the right`
      );
      if (!str[to].trim()) {
        if (
          convertApostrophes &&
          str.slice(from, to) !==
            (convertEntities ? "&rsquo;" : rightSingleQuote) &&
          value !== (convertEntities ? "&rsquo;" : rightSingleQuote)
        ) {
          rangesArr.push([
            from,
            to,
            convertEntities ? "&rsquo;" : rightSingleQuote,
          ]);
          console.log(
            `232 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, ${
              convertEntities ? "&rsquo;" : rightSingleQuote
            }]`
          );
        } else if (
          !convertApostrophes &&
          str.slice(from, to) !== "'" &&
          value !== "'"
        ) {
          rangesArr.push([from, to, "'"]);
          console.log(
            `243 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, "'"]`
          );
        }
      } else if (
        str[to].charCodeAt(0) === 34 && // double quote follows
        str[to + 1] &&
        !str[to + 1].trim() // and whitespace after
      ) {
        if (
          convertApostrophes &&
          str.slice(from, to + 1) !==
            (convertEntities
              ? "&rsquo;&rdquo;"
              : `${rightSingleQuote}${rightDoubleQuote}`) &&
          value !==
            (convertEntities
              ? "&rsquo;&rdquo;"
              : `${rightSingleQuote}${rightDoubleQuote}`)
        ) {
          rangesArr.push([
            from,
            to + 1,
            `${
              convertEntities
                ? "&rsquo;&rdquo;"
                : `${rightSingleQuote}${rightDoubleQuote}`
            }`,
          ]);
          console.log(
            `272 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${
              to + 1
            }, ${
              convertEntities
                ? "&rsquo;&rdquo;"
                : `${rightSingleQuote}${rightDoubleQuote}`
            }}]`
          );
          if (typeof offsetBy === "function") {
            offsetBy(1);
          }
        } else if (
          !convertApostrophes &&
          str.slice(from, to + 1) !== `'"` &&
          value !== `'"`
        ) {
          rangesArr.push([from, to + 1, `'"`]);
          console.log(
            `290 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, '" ]`
          );
          if (typeof offsetBy === "function") {
            offsetBy(1);
          }
        }
      }
    } else if (from === 0 && str.slice(to).trim()) {
      // TODO - replace hard zero lookup with with left() - will allow more variations!
      // if it's the beginning of a string
      console.log(`300 the beginning of a string clauses`);
      if (
        convertApostrophes &&
        str.slice(from, to) !==
          (convertEntities ? "&lsquo;" : leftSingleQuote) &&
        value !== (convertEntities ? "&lsquo;" : leftSingleQuote)
      ) {
        rangesArr.push([
          from,
          to,
          convertEntities ? "&lsquo;" : leftSingleQuote,
        ]);
        console.log(
          `313 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, ${
            convertEntities ? "&lsquo;" : leftSingleQuote
          }]`
        );
      } else if (
        !convertApostrophes &&
        str.slice(from, to) !== `'` &&
        value !== `'`
      ) {
        rangesArr.push([from, to, `'`]);
        console.log(
          `324 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, ']`
        );
      }
    } else if (!str[to] && str.slice(0, from).trim()) {
      console.log(`328 ending of a string clauses`);
      //
      if (
        convertApostrophes &&
        str.slice(from, to) !==
          (convertEntities ? "&rsquo;" : rightSingleQuote) &&
        value !== (convertEntities ? "&rsquo;" : rightSingleQuote)
      ) {
        // 3. if it's the ending of a string
        rangesArr.push([
          from,
          to,
          convertEntities ? "&rsquo;" : rightSingleQuote,
        ]);
        console.log(
          `343 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, ${
            convertEntities ? "&rsquo;" : rightSingleQuote
          }]`
        );
      } else if (
        !convertApostrophes &&
        str.slice(from, to) !== `'` &&
        value !== `'`
      ) {
        rangesArr.push([from, to, `'`]);
        console.log(
          `354 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} a plain apostrophe [${from}, ${to}, ']`
        );
      }
    } else if (
      str[from - 1] &&
      str[to] &&
      (isLetter(str[from - 1]) || isDigitStr(str[from - 1])) &&
      (isLetter(str[to]) || isDigitStr(str[to]))
    ) {
      // equivalent of /(\w)'(\w)/g
      // single quote surrounded with alphanumeric characters
      console.log(`365 single quote surrounded with alphanumeric characters`);
      if (convertApostrophes) {
        console.log(`367`);
        // exception for a few Hawaiian words:
        if (
          ((str[to] &&
            str[from - 5] &&
            str[from - 5].toLowerCase() === "h" &&
            str[from - 4].toLowerCase() === "a" &&
            str[from - 3].toLowerCase() === "w" &&
            str[from - 2].toLowerCase() === "a" &&
            str[from - 1].toLowerCase() === "i" &&
            str[to].toLowerCase() === "i") ||
            (str[from - 1] &&
              str[from - 1].toLowerCase() === "o" &&
              str[to + 2] &&
              str[to].toLowerCase() === "a" &&
              str[to + 1].toLowerCase() === "h" &&
              str[to + 2].toLowerCase() === "u")) &&
          str.slice(from, to) !==
            (convertEntities ? "&lsquo;" : leftSingleQuote) &&
          value !== (convertEntities ? "&lsquo;" : leftSingleQuote)
        ) {
          console.log(`388 Hawaiian exceptions`);
          rangesArr.push([
            from,
            to,
            convertEntities ? "&lsquo;" : leftSingleQuote,
          ]);
          console.log(
            `395 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, ${
              convertEntities ? "&lsquo;" : leftSingleQuote
            }]`
          );
        } else if (
          str.slice(from, to) !==
            (convertEntities ? "&rsquo;" : rightSingleQuote) &&
          value !== (convertEntities ? "&rsquo;" : rightSingleQuote)
        ) {
          rangesArr.push([
            from,
            to,
            convertEntities ? "&rsquo;" : rightSingleQuote,
          ]);
          console.log(
            `410 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, ${
              convertEntities ? "&rsquo;" : rightSingleQuote
            }]`
          );
        }
      } else if (str.slice(from, to) !== "'" && value !== "'") {
        // not convertApostrophes - remove anything that's not apostrophe
        console.log(`417 remove fancy`);
        rangesArr.push([from, to, `'`]);
        console.log(
          `420 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, "'"]`
        );
      }
    } else if (str[to] && (isLetter(str[to]) || isDigitStr(str[to]))) {
      // equivalent of /'\b/g
      // alphanumeric follows
      console.log(`426 alphanumeric follows`);
      if (
        convertApostrophes &&
        str.slice(from, to) !==
          (convertEntities ? "&lsquo;" : leftSingleQuote) &&
        value !== (convertEntities ? "&lsquo;" : leftSingleQuote)
      ) {
        rangesArr.push([
          from,
          to,
          convertEntities ? "&lsquo;" : leftSingleQuote,
        ]);
        console.log(
          `439 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, ${
            convertEntities ? "&lsquo;" : leftSingleQuote
          }]`
        );
      } else if (
        !convertApostrophes &&
        str.slice(from, to) !== `'` &&
        value !== `'`
      ) {
        rangesArr.push([from, to, `'`]);
        console.log(
          `450 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} a plain apostrophe [${from}, ${to}, ']`
        );
      }
    } else if (isLetter(str[from - 1]) || isDigitStr(str[from - 1])) {
      // equivalent of /'\b/g
      // alphanumeric precedes
      console.log(`456 alphanumeric precedes`);
      if (
        convertApostrophes &&
        str.slice(from, to) !==
          (convertEntities ? "&rsquo;" : rightSingleQuote) &&
        value !== (convertEntities ? "&rsquo;" : rightSingleQuote)
      ) {
        rangesArr.push([
          from,
          to,
          convertEntities ? "&rsquo;" : rightSingleQuote,
        ]);
        console.log(
          `469 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, ${
            convertEntities ? "&rsquo;" : rightSingleQuote
          }]`
        );
      } else if (
        !convertApostrophes &&
        str.slice(from, to) !== `'` &&
        value !== `'`
      ) {
        rangesArr.push([from, to, `'`]);
        console.log(
          `480 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} a plain apostrophe [${from}, ${to}, ']`
        );
      }
    } else if (str[from - 1] && !str[from - 1].trim()) {
      // whitespace in front
      console.log(`485 whitespace in front clauses`);
      if (
        convertApostrophes &&
        str.slice(from, to) !==
          (convertEntities ? "&lsquo;" : leftSingleQuote) &&
        value !== (convertEntities ? "&lsquo;" : leftSingleQuote)
      ) {
        rangesArr.push([
          from,
          to,
          convertEntities ? "&lsquo;" : leftSingleQuote,
        ]);
        console.log(
          `498 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, ${
            convertEntities ? "&lsquo;" : leftSingleQuote
          }]`
        );
      } else if (
        !convertApostrophes &&
        str.slice(from, to) !== `'` &&
        value !== `'`
      ) {
        rangesArr.push([from, to, `'`]);
        console.log(
          `509 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} a plain apostrophe [${from}, ${to}, ']`
        );
      }
    } else if (str[to] && !str[to].trim()) {
      // whitespace after
      console.log(`514 whitespace after clauses`);
      if (
        convertApostrophes &&
        str.slice(from, to) !==
          (convertEntities ? "&rsquo;" : rightSingleQuote) &&
        value !== (convertEntities ? "&rsquo;" : rightSingleQuote)
      ) {
        rangesArr.push([
          from,
          to,
          convertEntities ? "&rsquo;" : rightSingleQuote,
        ]);
        console.log(
          `527 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, ${
            convertEntities ? "&rsquo;" : rightSingleQuote
          }]`
        );
      } else if (
        !convertApostrophes &&
        str.slice(from, to) !== `'` &&
        value !== `'`
      ) {
        rangesArr.push([from, to, `'`]);
        console.log(
          `538 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} a plain apostrophe [${from}, ${to}, ']`
        );
      }
    }
    console.log(`542 fin`);
  } else if (
    [`"`, leftDoubleQuote, rightDoubleQuote, doublePrime].includes(value) ||
    (to === from + 1 &&
      [`"`, leftDoubleQuote, rightDoubleQuote, doublePrime].includes(str[from]))
  ) {
    // IF DOUBLE QUOTE (") OR OTHER TYPES OF DOUBLE QUOTES
    console.log(`549 double quote/apos clauses`);

    if (
      str[from - 1] &&
      isDigitStr(str[from - 1]) &&
      str[to] &&
      str[to] !== "'" &&
      str[to] !== '"' &&
      str[to] !== rightSingleQuote &&
      str[to] !== rightDoubleQuote &&
      str[to] !== leftSingleQuote &&
      str[to] !== leftDoubleQuote
    ) {
      if (
        convertApostrophes &&
        str.slice(from, to) !== (convertEntities ? "&Prime;" : doublePrime) &&
        value !== (convertEntities ? "&Prime;" : doublePrime)
      ) {
        // replace double quotes meaning inches with double prime symbol:
        rangesArr.push([from, to, convertEntities ? "&Prime;" : doublePrime]);
        console.log(
          `570 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} double prime symbol [${from}, ${to}, ${
            convertEntities ? "&Prime;" : doublePrime
          }]`
        );
      } else if (
        !convertApostrophes &&
        str.slice(from, to) !== `"` &&
        value !== `"`
      ) {
        rangesArr.push([from, to, `"`]);
        console.log(
          `581 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, "]`
        );
      }
    } else if (
      str[from - 1] &&
      str[to] &&
      punctuationChars.includes(str[from - 1])
    ) {
      // 1. if there's punctuation on the left and space/quote on the right:
      if (!str[to].trim()) {
        if (
          convertApostrophes &&
          str.slice(from, to) !==
            (convertEntities ? "&rdquo;" : rightDoubleQuote) &&
          value !== (convertEntities ? "&rdquo;" : rightDoubleQuote)
        ) {
          rangesArr.push([
            from,
            to,
            convertEntities ? "&rdquo;" : rightDoubleQuote,
          ]);
          console.log(
            `603 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, ${
              convertEntities ? "&rdquo;" : rightDoubleQuote
            }]`
          );
        } else if (
          !convertApostrophes &&
          str.slice(from, to) !== `"` &&
          value !== `"`
        ) {
          rangesArr.push([from, to, `"`]);
          console.log(
            `614 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, "]`
          );
        }
      } else if (
        str[to].charCodeAt(0) === 39 && // single quote follows
        str[to + 1] &&
        !str[to + 1].trim()
      ) {
        if (
          convertApostrophes &&
          str.slice(from, to + 1) !==
            (convertEntities
              ? "&rdquo;&rsquo;"
              : `${rightDoubleQuote}${rightSingleQuote}`) &&
          value !==
            (convertEntities
              ? "&rdquo;&rsquo;"
              : `${rightDoubleQuote}${rightSingleQuote}`)
        ) {
          console.log(
            `634 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${
              to + 1
            }, ${
              convertEntities
                ? "&rdquo;&rsquo;"
                : `${rightDoubleQuote}${rightSingleQuote}`
            }]`
          );
          rangesArr.push([
            from,
            to + 1,
            convertEntities
              ? "&rdquo;&rsquo;"
              : `${rightDoubleQuote}${rightSingleQuote}`,
          ]);
          if (typeof offsetBy === "function") {
            offsetBy(1);
          }
        } else if (
          !convertApostrophes &&
          str.slice(from, to + 1) !== `"'` &&
          value !== `"'`
        ) {
          rangesArr.push([from, to + 1, `"'`]);
          console.log(
            `659 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${
              to + 1
            }, "']`
          );
          if (typeof offsetBy === "function") {
            offsetBy(1);
          }
        }
      }
    } else if (from === 0 && str[to] && str.slice(to).trim()) {
      // 2. if it's the beginning of a string
      if (
        convertApostrophes &&
        str.slice(from, to) !==
          (convertEntities ? "&ldquo;" : leftDoubleQuote) &&
        value !== (convertEntities ? "&ldquo;" : leftDoubleQuote)
      ) {
        rangesArr.push([
          from,
          to,
          convertEntities ? "&ldquo;" : leftDoubleQuote,
        ]);
        console.log(
          `682 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, ${
            convertEntities ? "&ldquo;" : leftDoubleQuote
          }]`
        );
      } else if (
        !convertApostrophes &&
        str.slice(from, to) !== `"` &&
        value !== `"`
      ) {
        rangesArr.push([from, to, `"`]);
        console.log(
          `693 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, "]`
        );
      }
    } else if (!str[to] && str.slice(0, from).trim()) {
      // 3. if it's the beginning of a string
      if (
        convertApostrophes &&
        str.slice(from, to) !==
          (convertEntities ? "&rdquo;" : rightDoubleQuote) &&
        value !== (convertEntities ? "&rdquo;" : rightDoubleQuote)
      ) {
        console.log(
          `705 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, ${
            convertEntities ? "&rdquo;" : rightDoubleQuote
          }]`
        );
        rangesArr.push([
          from,
          to,
          convertEntities ? "&rdquo;" : rightDoubleQuote,
        ]);
      } else if (
        !convertApostrophes &&
        str.slice(from, to) !== `"` &&
        value !== `"`
      ) {
        rangesArr.push([from, to, `"`]);
        console.log(
          `721 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, "]`
        );
      }
    } else if (str[to] && (isLetter(str[to]) || isDigitStr(str[to]))) {
      // equivalent of /"\b/g
      // 4. alphanumeric follows
      if (
        convertApostrophes &&
        str.slice(from, to) !==
          (convertEntities ? "&ldquo;" : leftDoubleQuote) &&
        value !== (convertEntities ? "&ldquo;" : leftDoubleQuote)
      ) {
        console.log(
          `734 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, ${
            convertEntities ? "&ldquo;" : leftDoubleQuote
          }]`
        );
        rangesArr.push([
          from,
          to,
          convertEntities ? "&ldquo;" : leftDoubleQuote,
        ]);
      } else if (
        !convertApostrophes &&
        str.slice(from, to) !== `"` &&
        value !== `"`
      ) {
        rangesArr.push([from, to, `"`]);
        console.log(
          `750 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, "]`
        );
      }
    } else if (
      str[from - 1] &&
      (isLetter(str[from - 1]) || isDigitStr(str[from - 1]))
    ) {
      // equivalent of /"\b/g
      // 5. alphanumeric precedes
      if (
        convertApostrophes &&
        str.slice(from, to) !==
          (convertEntities ? "&rdquo;" : rightDoubleQuote) &&
        value !== (convertEntities ? "&rdquo;" : rightDoubleQuote)
      ) {
        console.log(
          `766 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, ${
            convertEntities ? "&rdquo;" : rightDoubleQuote
          }]`
        );
        rangesArr.push([
          from,
          to,
          convertEntities ? "&rdquo;" : rightDoubleQuote,
        ]);
      } else if (
        !convertApostrophes &&
        str.slice(from, to) !== `"` &&
        value !== `"`
      ) {
        rangesArr.push([from, to, `"`]);
        console.log(
          `782 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, "]`
        );
      }
    } else if (str[from - 1] && !str[from - 1].trim()) {
      // 6. whitespace in front
      if (
        convertApostrophes &&
        str.slice(from, to) !==
          (convertEntities ? "&ldquo;" : leftDoubleQuote) &&
        value !== (convertEntities ? "&ldquo;" : leftDoubleQuote)
      ) {
        console.log(
          `794 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, ${
            convertEntities ? "&ldquo;" : leftDoubleQuote
          }]`
        );
        rangesArr.push([
          from,
          to,
          convertEntities ? "&ldquo;" : leftDoubleQuote,
        ]);
      } else if (
        !convertApostrophes &&
        str.slice(from, to) !== `"` &&
        value !== `"`
      ) {
        rangesArr.push([from, to, `"`]);
        console.log(
          `810 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, "]`
        );
      }
    } else if (str[to] && !str[to].trim()) {
      // 7. whitespace after
      if (
        convertApostrophes &&
        str.slice(from, to) !==
          (convertEntities ? "&rdquo;" : rightDoubleQuote) &&
        value !== (convertEntities ? "&rdquo;" : rightDoubleQuote)
      ) {
        console.log(
          `822 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, ${
            convertEntities ? "&rdquo;" : rightDoubleQuote
          }]`
        );
        rangesArr.push([
          from,
          to,
          convertEntities ? "&rdquo;" : rightDoubleQuote,
        ]);
      } else if (
        !convertApostrophes &&
        str.slice(from, to) !== `"` &&
        value !== `"`
      ) {
        rangesArr.push([from, to, `"`]);
        console.log(
          `838 string-apostrophes - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${from}, ${to}, "]`
        );
      }
    }
  }

  return rangesArr;
}

function convertAll(str, opts) {
  let ranges = [];
  const preppedOpts = {
    convertApostrophes: true,
    convertEntities: false,
    ...opts,
  };
  // loop through the given string
  for (let i = 0, len = str.length; i < len; i++) {
    console.log(
      `${`\u001b[${36}m${`==========`}\u001b[${39}m`} ${JSON.stringify(
        str[i],
        null,
        0
      )} (idx ${i}) ${`\u001b[${36}m${`==========`}\u001b[${39}m`}`
    );
    // offset is needed to bypass characters we already fixed - it happens for
    // example with nested quotes - we'd fix many in one go and we need to skip
    // further processing, otherwise those characters would get processed
    // multiple times
    preppedOpts.from = i;
    preppedOpts.offsetBy = (idx) => {
      console.log(`869 ██ BUMP i from ${i} to ${i + idx}`);
      i += idx;
    };
    console.log(
      `873 ${`\u001b[${33}m${`preppedOpts`}\u001b[${39}m`} = ${JSON.stringify(
        Object.keys(preppedOpts),
        null,
        4
      )}`
    );
    const res = convertOne(str, preppedOpts);
    if (Array.isArray(res) && res.length) {
      ranges = ranges.concat(res);
    }
  }
  return {
    result: rangesApply(str, ranges),
    ranges,
  };
}

export { convertOne, convertAll };
