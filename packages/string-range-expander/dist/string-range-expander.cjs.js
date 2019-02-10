/**
 * string-range-expander
 * Expands string index ranges within whitespace boundaries until letters are met
 * Version: 1.10.7
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-range-expander
 */

'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var checkTypes = _interopDefault(require('check-types-mini'));
var isObj = _interopDefault(require('lodash.isplainobject'));

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var isArr = Array.isArray;
function expander(originalOpts) {
  var letterOrDigit = /^[0-9a-zA-Z]+$/;
  function isWhitespace(char) {
    if (!char || typeof char !== "string") {
      return false;
    }
    return char.trim().length === 0;
  }
  function isStr(something) {
    return typeof something === "string";
  }
  if (!isObj(originalOpts)) {
    var supplementalString;
    if (originalOpts === undefined) {
      supplementalString = "but it is missing completely.";
    } else if (originalOpts === null) {
      supplementalString = "but it was given as null.";
    } else {
      supplementalString = "but it was given as ".concat(_typeof(originalOpts), ", equal to:\n").concat(JSON.stringify(originalOpts, null, 4), ".");
    }
    throw new Error("string-range-expander: [THROW_ID_01] Input must be a plain object ".concat(supplementalString));
  } else if (isObj(originalOpts) && Object.keys(originalOpts).length === 0) {
    throw new Error("string-range-expander: [THROW_ID_02] Input must be a plain object but it was given as a plain object without any keys and computer doesn't know what to expand.");
  }
  if (typeof originalOpts.from !== "number") {
    throw new Error("string-range-expander: [THROW_ID_03] The input's \"from\" value opts.from, is not a number! Currently it's given as ".concat(_typeof(originalOpts.from), ", equal to ").concat(JSON.stringify(originalOpts.from, null, 0)));
  }
  if (typeof originalOpts.to !== "number") {
    throw new Error("string-range-expander: [THROW_ID_04] The input's \"to\" value opts.to, is not a number! Currently it's given as ".concat(_typeof(originalOpts.to), ", equal to ").concat(JSON.stringify(originalOpts.to, null, 0)));
  }
  if (!originalOpts.str[originalOpts.from] && originalOpts.from !== originalOpts.to) {
    throw new Error("string-range-expander: [THROW_ID_05] The given input string opts.str (\"".concat(originalOpts.str, "\") must contain the character at index \"from\" (\"").concat(originalOpts.from, "\")"));
  }
  if (!originalOpts.str[originalOpts.to - 1]) {
    throw new Error("string-range-expander: [THROW_ID_06] The given input string, opts.str (\"".concat(originalOpts.str, "\") must contain the character at index before \"to\" (\"").concat(originalOpts.to - 1, "\")"));
  }
  if (originalOpts.from > originalOpts.to) {
    throw new Error("string-range-expander: [THROW_ID_07] The given \"from\" index, \"".concat(originalOpts.from, "\" is greater than \"to\" index, \"").concat(originalOpts.to, "\". That's wrong!"));
  }
  if (isStr(originalOpts.extendToOneSide) && originalOpts.extendToOneSide !== "left" && originalOpts.extendToOneSide !== "right" || !isStr(originalOpts.extendToOneSide) && originalOpts.extendToOneSide !== undefined && originalOpts.extendToOneSide !== false) {
    throw new Error("string-range-expander: [THROW_ID_08] The opts.extendToOneSide value is not recogniseable! It's set to: \"".concat(originalOpts.extendToOneSide, "\" (").concat(_typeof(originalOpts.extendToOneSide), "). It has to be either Boolean \"false\" or strings \"left\" or \"right\""));
  }
  var defaults = {
    str: "",
    from: 0,
    to: 0,
    ifLeftSideIncludesThisThenCropTightly: "",
    ifLeftSideIncludesThisCropItToo: "",
    ifRightSideIncludesThisThenCropTightly: "",
    ifRightSideIncludesThisCropItToo: "",
    extendToOneSide: false,
    wipeAllWhitespaceOnLeft: false,
    wipeAllWhitespaceOnRight: false,
    addSingleSpaceToPreventAccidentalConcatenation: false
  };
  var opts = Object.assign({}, defaults, originalOpts);
  checkTypes(opts, defaults, {
    msg: "string-trim-spaces-only: [THROW_ID_19*]",
    acceptArrays: true,
    acceptArraysIgnore: ["str", "from", "to", "extendToOneSide"],
    schema: {
      extendToOneSide: ["false", "string"]
    }
  });
  if (isArr(opts.ifLeftSideIncludesThisThenCropTightly)) {
    var culpritsIndex;
    var culpritsValue;
    if (opts.ifLeftSideIncludesThisThenCropTightly.every(function (val, i) {
      if (!isStr(val)) {
        culpritsIndex = i;
        culpritsValue = val;
        return false;
      }
      return true;
    })) {
      opts.ifLeftSideIncludesThisThenCropTightly = opts.ifLeftSideIncludesThisThenCropTightly.join("");
    } else {
      throw new Error("string-range-expander: [THROW_ID_09] The opts.ifLeftSideIncludesThisThenCropTightly was set to an array:\n".concat(JSON.stringify(opts.ifLeftSideIncludesThisThenCropTightly, null, 4), ". Now, that array contains not only string elements. For example, an element at index ").concat(culpritsIndex, " is of a type ").concat(_typeof(culpritsValue), " (equal to ").concat(JSON.stringify(culpritsValue, null, 0), ")."));
    }
  }
  var str = opts.str;
  var from = opts.from;
  var to = opts.to;
  if (opts.extendToOneSide !== "right" && (isWhitespace(str[from - 1]) && (isWhitespace(str[from - 2]) || opts.ifLeftSideIncludesThisCropItToo.includes(str[from - 2])) || str[from - 1] && opts.ifLeftSideIncludesThisCropItToo.includes(str[from - 1]) || opts.wipeAllWhitespaceOnLeft && isWhitespace(str[from - 1]))) {
    for (var i = from; i--;) {
      if (!opts.ifLeftSideIncludesThisCropItToo.includes(str[i])) {
        if (str[i].trim().length) {
          if (opts.wipeAllWhitespaceOnLeft || opts.ifLeftSideIncludesThisCropItToo.includes(str[i + 1])) {
            from = i + 1;
          } else {
            from = i + 2;
          }
          break;
        } else if (i === 0) {
          if (opts.wipeAllWhitespaceOnLeft) {
            from = 0;
          } else {
            from = 1;
          }
          break;
        }
      }
    }
  }
  if (opts.extendToOneSide !== "left" && (isWhitespace(str[to]) && (opts.wipeAllWhitespaceOnRight || isWhitespace(str[to + 1])) || opts.ifRightSideIncludesThisCropItToo.includes(str[to]))) {
    for (var _i = to, len = str.length; _i < len; _i++) {
      if (!opts.ifRightSideIncludesThisCropItToo.includes(str[_i]) && (str[_i] && str[_i].trim().length || str[_i] === undefined)) {
        if (opts.wipeAllWhitespaceOnRight || opts.ifRightSideIncludesThisCropItToo.includes(str[_i - 1])) {
          to = _i;
        } else {
          to = _i - 1;
        }
        break;
      }
    }
  }
  if (opts.extendToOneSide !== "right" && isStr(opts.ifLeftSideIncludesThisThenCropTightly) && opts.ifLeftSideIncludesThisThenCropTightly.length && (str[from - 2] && opts.ifLeftSideIncludesThisThenCropTightly.includes(str[from - 2]) || str[from - 1] && opts.ifLeftSideIncludesThisThenCropTightly.includes(str[from - 1])) || opts.extendToOneSide !== "left" && isStr(opts.ifRightSideIncludesThisThenCropTightly) && opts.ifRightSideIncludesThisThenCropTightly.length && (str[to + 1] && opts.ifRightSideIncludesThisThenCropTightly.includes(str[to + 1]) || str[to] && opts.ifRightSideIncludesThisThenCropTightly.includes(str[to]))) {
    if (opts.extendToOneSide !== "right" && isWhitespace(str[from - 1]) && !opts.wipeAllWhitespaceOnLeft) {
      from--;
    }
    if (opts.extendToOneSide !== "left" && isWhitespace(str[to]) && !opts.wipeAllWhitespaceOnRight) {
      to++;
    }
  }
  if (opts.addSingleSpaceToPreventAccidentalConcatenation && str[from - 1] && str[from - 1].trim().length && str[to] && str[to].trim().length && (!opts.ifLeftSideIncludesThisThenCropTightly && !opts.ifRightSideIncludesThisThenCropTightly || !((!opts.ifLeftSideIncludesThisThenCropTightly || opts.ifLeftSideIncludesThisThenCropTightly.includes(str[from - 1])) && (!opts.ifRightSideIncludesThisThenCropTightly || str[to] && opts.ifRightSideIncludesThisThenCropTightly.includes(str[to])))) && (letterOrDigit.test(str[from - 1]) || letterOrDigit.test(str[to]))) {
    return [from, to, " "];
  }
  return [from, to];
}

module.exports = expander;
