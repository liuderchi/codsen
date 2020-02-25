/**
 * codsen-parser
 * Parser aiming at broken code, especially HTML & CSS
 * Version: 0.2.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/codsen-parser
 */

'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var tokenizer = _interopDefault(require('codsen-tokenizer'));
var op = _interopDefault(require('object-path'));

function _typeof(obj) {
  "@babel/helpers - typeof";

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

function incrementStringNumber(str) {
  if (/^\d*$/.test(str)) {
    return Number.parseInt(str, 10) + 1;
  }
  return str;
}
function pathNext(str) {
  if (typeof str !== "string" || !str.length) {
    return str;
  }
  if (str.includes(".") && /^\d*$/.test(str.slice(str.lastIndexOf(".") + 1))) {
    return "".concat(str.slice(0, str.lastIndexOf(".") + 1)).concat(incrementStringNumber(str.slice(str.lastIndexOf(".") + 1)));
  } else if (/^\d*$/.test(str)) {
    return "".concat(incrementStringNumber(str));
  }
  return str;
}

function decrementStringNumber(str) {
  if (/^\d*$/.test(str)) {
    return Number.parseInt(str, 10) - 1;
  }
  return str;
}
function pathPrev(str) {
  if (typeof str !== "string" || !str.length) {
    return null;
  }
  var extractedValue = str.slice(str.lastIndexOf(".") + 1);
  if (extractedValue === "0") {
    return null;
  } else if (str.includes(".") && /^\d*$/.test(extractedValue)) {
    return "".concat(str.slice(0, str.lastIndexOf(".") + 1)).concat(decrementStringNumber(str.slice(str.lastIndexOf(".") + 1)));
  } else if (/^\d*$/.test(str)) {
    return "".concat(decrementStringNumber(str));
  }
  return null;
}

function pathUp(str) {
  if (typeof str === "string") {
    if (!str.includes(".") || !str.slice(str.indexOf(".") + 1).includes(".")) {
      return null;
    }
    var dotsCount = 0;
    for (var i = str.length; i--;) {
      if (str[i] === ".") {
        dotsCount++;
      }
      if (dotsCount === 2) {
        return str.slice(0, i);
      }
    }
  }
  return str;
}

function isObj(something) {
  return something && _typeof(something) === "object" && !Array.isArray(something);
}
function layerPending(layers, tokenObj) {
  return tokenObj.closing && layers.length && layers[layers.length - 1].type === tokenObj.type && layers[layers.length - 1].closing === false;
}
function cparser(str, originalOpts) {
  if (typeof str !== "string") {
    if (str === undefined) {
      throw new Error("codsen-tokenizer: [THROW_ID_01] the first input argument is completely missing! It should be given as string.");
    } else {
      throw new Error("codsen-tokenizer: [THROW_ID_02] the first input argument must be string! It was given as \"".concat(_typeof(str), "\", equal to:\n").concat(JSON.stringify(str, null, 4)));
    }
  }
  if (originalOpts && !isObj(originalOpts)) {
    throw new Error("codsen-tokenizer: [THROW_ID_03] the second input argument, an options object, should be a plain object but it was given as type ".concat(_typeof(originalOpts), ", equal to ").concat(JSON.stringify(originalOpts, null, 4)));
  }
  if (isObj(originalOpts) && originalOpts.tagCb && typeof originalOpts.tagCb !== "function") {
    throw new Error("codsen-tokenizer: [THROW_ID_04] the opts.tagCb, callback function, should be a function but it was given as type ".concat(_typeof(originalOpts.tagCb), ", equal to ").concat(JSON.stringify(originalOpts.tagCb, null, 4)));
  }
  if (isObj(originalOpts) && originalOpts.charCb && typeof originalOpts.charCb !== "function") {
    throw new Error("codsen-tokenizer: [THROW_ID_05] the opts.charCb, callback function, should be a function but it was given as type ".concat(_typeof(originalOpts.charCb), ", equal to ").concat(JSON.stringify(originalOpts.charCb, null, 4)));
  }
  if (isObj(originalOpts) && originalOpts.reportProgressFunc && typeof originalOpts.reportProgressFunc !== "function") {
    throw new Error("codsen-tokenizer: [THROW_ID_06] the opts.reportProgressFunc, callback function, should be a function but it was given as type ".concat(_typeof(originalOpts.reportProgressFunc), ", equal to ").concat(JSON.stringify(originalOpts.reportProgressFunc, null, 4)));
  }
  if (isObj(originalOpts) && originalOpts.errCb && typeof originalOpts.errCb !== "function") {
    throw new Error("codsen-tokenizer: [THROW_ID_07] the opts.errCb, callback function, should be a function but it was given as type ".concat(_typeof(originalOpts.errCb), ", equal to ").concat(JSON.stringify(originalOpts.errCb, null, 4)));
  }
  var defaults = {
    reportProgressFunc: null,
    reportProgressFuncFrom: 0,
    reportProgressFuncTo: 100,
    tagCb: null,
    charCb: null,
    errCb: null
  };
  var opts = Object.assign({}, defaults, originalOpts);
  var layers = [];
  var res = [];
  var path;
  var nestNext = false;
  tokenizer(str, {
    reportProgressFunc: opts.reportProgressFunc,
    reportProgressFuncFrom: opts.reportProgressFuncFrom,
    reportProgressFuncTo: opts.reportProgressFuncTo,
    tagCb: function tagCb(tokenObj) {
      if (typeof opts.tagCb === "function") {
        opts.tagCb(tokenObj);
      }
      var prevToken = op.get(res, path);
      if (!isObj(prevToken)) {
        prevToken = null;
      }
      if (nestNext && (
      !prevToken || !(prevToken.tagName === tokenObj.tagName && !prevToken.closing && tokenObj.closing)) && !layerPending(layers, tokenObj)) {
        nestNext = false;
        path = "".concat(path, ".children.0");
      } else if (tokenObj.closing && typeof path === "string" && path.includes(".")) {
        path = pathNext(pathUp(path));
        if (layerPending(layers, tokenObj)) {
          layers.pop();
          nestNext = false;
        }
      } else if (!path) {
        path = "0";
      } else {
        path = pathNext(path);
      }
      if (["tag", "comment"].includes(tokenObj.type) && !tokenObj["void"] && !tokenObj.closing) {
        nestNext = true;
        if (tokenObj.type === "comment") {
          layers.push(tokenObj);
        }
      }
      var previousPath = pathPrev(path);
      var parentPath = pathUp(path);
      var parentTagsToken;
      if (parentPath) {
        parentTagsToken = op.get(res, parentPath);
      }
      var previousTagsToken;
      if (previousPath) {
        previousTagsToken = op.get(res, previousPath);
      }
      if (["tag", "comment"].includes(tokenObj.type) && tokenObj.closing && (!previousPath || !isObj(previousTagsToken) || previousTagsToken.closing || previousTagsToken.type !== tokenObj.type || previousTagsToken.tagName !== tokenObj.tagName)) {
        if (opts.errCb) {
          opts.errCb({
            ruleId: "".concat(tokenObj.type).concat(tokenObj.type === "comment" ? "-".concat(tokenObj.kind) : "", "-missing-opening"),
            idxFrom: tokenObj.start,
            idxTo: tokenObj.end
          });
        }
      }
      if (tokenObj.type === "text" && isObj(parentTagsToken) && parentTagsToken.type === "comment" && parentTagsToken.kind === "simple" && tokenObj.value.includes("->")) {
        var suspiciousEndingStartsAt = tokenObj.value.indexOf("->");
        if (suspiciousEndingStartsAt > 0) {
          op.set(res, path, Object.assign({}, tokenObj, {
            end: tokenObj.start + suspiciousEndingStartsAt,
            value: tokenObj.value.slice(0, suspiciousEndingStartsAt)
          }));
          if (["tag", "comment"].includes(tokenObj.type)) {
            tokenObj.children = [];
          }
        }
        path = pathNext(pathUp(path));
        op.set(res, path, {
          type: "comment",
          kind: "simple",
          closing: true,
          start: tokenObj.start + suspiciousEndingStartsAt,
          end: tokenObj.start + suspiciousEndingStartsAt + 2,
          value: "->",
          children: []
        });
        if (suspiciousEndingStartsAt < tokenObj.value.length - 2) {
          path = pathNext(path);
          op.set(res, path, {
            type: "text",
            start: tokenObj.start + suspiciousEndingStartsAt + 2,
            end: tokenObj.end,
            value: tokenObj.value.slice(suspiciousEndingStartsAt + 2)
          });
        }
      } else {
        if (["tag", "comment"].includes(tokenObj.type)) {
          tokenObj.children = [];
        }
        op.set(res, path, tokenObj);
      }
    },
    charCb: opts.charCb
  });
  return res;
}

module.exports = cparser;
