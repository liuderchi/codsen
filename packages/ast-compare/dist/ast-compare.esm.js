import clone from 'lodash.clonedeep';
import pullAll from 'lodash.pullall';
import typeDetect from 'type-detect';
import empty from 'posthtml-ast-contains-only-empty-space';
import matcher from 'matcher';
import checkTypes from 'check-types-mini';

/* eslint max-len:0 */

var isArr$1 = Array.isArray;

function existy$1(x) {
  return x != null;
}
function isObj$1(something) {
  return typeDetect(something) === 'Object';
}
function isStr$1(something) {
  return typeDetect(something) === 'string';
}
function isNum(something) {
  return typeDetect(something) === 'number';
}
function isBool(something) {
  return typeDetect(something) === 'boolean';
}
function isNull(something) {
  return something === null;
}
function isBlank$1(something) {
  if (isObj$1(something)) {
    return Object.keys(something).length === 0;
  } else if (isArr$1(something) || isStr$1(something)) {
    return something.length === 0;
  }
  return false;
}
function isTheTypeLegit$1(something) {
  // same as JSON spec:
  return isObj$1(something) || isStr$1(something) || isNum(something) || isBool(something) || isArr$1(something) || isNull(something);
}

var util = {
  existy: existy$1,
  isObj: isObj$1,
  isStr: isStr$1,
  isNum: isNum,
  isBool: isBool,
  isNull: isNull,
  isBlank: isBlank$1,
  isTheTypeLegit: isTheTypeLegit$1
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var existy = util.existy;
var isObj = util.isObj;
var isStr = util.isStr;
var isBlank = util.isBlank;
var isTheTypeLegit = util.isTheTypeLegit;


var isArr = Array.isArray;

// bo = bigObject original; so = smallObject original
function compare(bo, so, originalOpts) {
  if (bo === undefined) {
    throw new TypeError('ast-compare/compare(): [THROW_ID_01] first argument is missing!');
  }
  if (so === undefined) {
    throw new TypeError('ast-compare/compare(): [THROW_ID_02] second argument is missing!');
  }

  if (existy(bo) && !isTheTypeLegit(bo)) {
    throw new TypeError('ast-compare/compare(): [THROW_ID_03] first input argument is of a wrong type, ' + typeDetect(bo) + ', equal to: ' + JSON.stringify(bo, null, 4));
  }
  if (existy(so) && !isTheTypeLegit(so)) {
    throw new TypeError('ast-compare/compare(): [THROW_ID_04] second input argument is of a wrong type, ' + typeDetect(so) + ', equal to: ' + JSON.stringify(so, null, 4));
  }
  if (existy(originalOpts) && !isObj(originalOpts)) {
    throw new TypeError('ast-compare/compare(): [THROW_ID_05] third argument, options object, must, well, be an object! Currently it\'s: ' + typeDetect(originalOpts) + ' and equal to: ' + JSON.stringify(originalOpts, null, 4));
  }

  // clone to prevent an accidental mutation
  var s = clone(so); // s stands for Small Object, a set
  var b = clone(bo); // b stands for Big Object, super set (or equal to)
  var sKeys = void 0;
  var bKeys = void 0;
  var found = void 0;
  var bOffset = 0;

  // prep opts
  var defaults = {
    hungryForWhitespace: false,
    matchStrictly: false,
    verboseWhenMismatches: false,
    useWildcards: false
  };
  var opts = Object.assign({}, defaults, originalOpts);
  checkTypes(opts, defaults, { msg: 'ast-compare/compare(): [THROW_ID_06*]' });

  // edge case when hungryForWhitespace=true, matchStrictly=true and matching against blank object:
  if (opts.hungryForWhitespace && opts.matchStrictly && isObj(bo) && empty(bo) && isObj(so) && Object.keys(so).length === 0) {
    return true;
  }

  // instant (falsey) result
  if ((!opts.hungryForWhitespace || opts.hungryForWhitespace && !empty(bo) && empty(so)) && isObj(bo) && Object.keys(bo).length !== 0 && isObj(so) && Object.keys(so).length === 0 || typeDetect(bo) !== typeDetect(so) && (!opts.hungryForWhitespace || opts.hungryForWhitespace && !empty(bo))) {
    return false;
  }

  // A C T I O N

  if (isStr(b) && isStr(s)) {
    if (opts.hungryForWhitespace && empty(b) && empty(s)) {
      return true;
    }
    if (opts.verboseWhenMismatches) {
      return b === s ? true : 'Given string ' + s + ' is not matched! We have ' + b + ' on the other end.';
    }
    return opts.useWildcards ? matcher.isMatch(b, s) : b === s;
  } else if (isArr(b) && isArr(s)) {
    if (opts.hungryForWhitespace && empty(s) && (!opts.matchStrictly || opts.matchStrictly && b.length === s.length)) {
      return true;
    }
    if (!opts.hungryForWhitespace && s.length > b.length || opts.matchStrictly && s.length !== b.length) {
      if (!opts.verboseWhenMismatches) {
        return false;
      }
      return 'The length of a given array, ' + JSON.stringify(s, null, 4) + ' is ' + s.length + ' but the length of an array on the other end, ' + JSON.stringify(b, null, 4) + ' is ' + b.length;
    }
    if (s.length === 0) {
      if (b.length === 0) {
        return true;
      }
      // so b is not zero-long, but s is.
      if (opts.verboseWhenMismatches) {
        return 'The given array has no elements, but the array on the other end, ' + JSON.stringify(b, null, 4) + ' does have some';
      }
      return false;
    }
    for (var i = 0, sLen = s.length; i < sLen; i++) {
      found = false;
      for (var j = bOffset, bLen = b.length; j < bLen; j++) {
        bOffset += 1;
        if (compare(b[j], s[i], opts) === true) {
          found = true;
          break;
        }
      }
      if (!found) {
        if (!opts.verboseWhenMismatches) {
          return false;
        }
        return 'The given array ' + JSON.stringify(s, null, 4) + ' is not a subset of an array on the other end, ' + JSON.stringify(b, null, 4);
      }
    }
  } else if (isObj(b) && isObj(s)) {
    sKeys = Object.keys(s);
    bKeys = Object.keys(b);
    if (opts.matchStrictly && sKeys.length !== bKeys.length) {
      if (!opts.verboseWhenMismatches) {
        return false;
      }
      var uniqueKeysOnS = pullAll(clone(sKeys), clone(bKeys));
      var sMessage = uniqueKeysOnS.length > 0 ? 'First object has unique keys: ' + JSON.stringify(uniqueKeysOnS, null, 4) + '.' : '';

      var uniqueKeysOnB = pullAll(clone(bKeys), clone(sKeys));
      var bMessage = uniqueKeysOnB.length > 0 ? 'Second object has unique keys:\n        ' + JSON.stringify(uniqueKeysOnB, null, 4) + '.' : '';

      return 'When matching strictly, we found that both objects have different amount of keys. ' + sMessage + ' ' + bMessage;
    }

    var _loop = function _loop(len, _i) {
      if (!existy(b[sKeys[_i]])) {
        if (!opts.useWildcards || opts.useWildcards && !sKeys[_i].includes('*')) {
          if (!opts.verboseWhenMismatches) {
            return {
              v: false
            };
          }
          return {
            v: 'The given object has key ' + sKeys[_i] + ' which the other-one does not have.'
          };
        } else // so wildcards are on and sKeys[i] contains a wildcard
          if (Object.keys(b).some(function (bKey) {
            return matcher.isMatch(bKey, sKeys[_i]);
          })) {
            // so some keys do match. Return true
            return {
              v: true
            };
          }
        if (!opts.verboseWhenMismatches) {
          return {
            v: false
          };
        }
        return {
          v: 'The given object has key ' + sKeys[_i] + ' which the other-one does not have.'
        };
      }
      if (b[sKeys[_i]] !== undefined && !isTheTypeLegit(b[sKeys[_i]])) {
        throw new TypeError('ast-compare/compare(): [THROW_ID_07] The input ' + JSON.stringify(b, null, 4) + ' contains a value of a wrong type, ' + typeDetect(b[sKeys[_i]]) + ' at index ' + _i + ', equal to: ' + JSON.stringify(b[sKeys[_i]], null, 4));
      } else if (!isTheTypeLegit(s[sKeys[_i]])) {
        throw new TypeError('ast-compare/compare(): [THROW_ID_08] The input ' + JSON.stringify(s, null, 4) + ' contains a value of a wrong type, ' + typeDetect(s[sKeys[_i]]) + ' at index ' + _i + ', equal to: ' + JSON.stringify(s[sKeys[_i]], null, 4));
      } else if (existy(b[sKeys[_i]]) && typeDetect(b[sKeys[_i]]) !== typeDetect(s[sKeys[_i]])) {
        // Types mismatch. Probably falsey result, unless comparing with
        // empty/blank things. Let's check.
        // it might be blank array vs blank object:
        if (!(empty(b[sKeys[_i]]) && empty(s[sKeys[_i]]) && opts.hungryForWhitespace)) {
          if (!opts.verboseWhenMismatches) {
            return {
              v: false
            };
          }
          return {
            v: 'The given key ' + sKeys[_i] + ' is of a different type on both objects. On the first-one, it\'s ' + typeDetect(s[sKeys[_i]]) + ', on the second-one, it\'s ' + typeDetect(b[sKeys[_i]])
          };
        }
      } else
        // so key does exist and type matches
        if (compare(b[sKeys[_i]], s[sKeys[_i]], opts) !== true) {
          if (!opts.verboseWhenMismatches) {
            return {
              v: false
            };
          }
          return {
            v: 'The given piece ' + JSON.stringify(s[sKeys[_i]], null, 4) + ' and ' + JSON.stringify(b[sKeys[_i]], null, 4) + ' don\'t match.'
          };
        }
    };

    for (var _i = 0, len = sKeys.length; _i < len; _i++) {
      var _ret = _loop(len, _i);

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }
  } else {
    if (opts.hungryForWhitespace && empty(b) && empty(s) && (!opts.matchStrictly || opts.matchStrictly && isBlank(s))) {
      return true;
    }
    return b === s;
  }
  return true;
}

export default compare;
