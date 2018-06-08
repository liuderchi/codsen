'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var r = _interopDefault(require('hex-color-regex'));
var isPlainObject = _interopDefault(require('lodash.isplainobject'));
var isString = _interopDefault(require('lodash.isstring'));
var clone = _interopDefault(require('lodash.clonedeep'));

/* eslint no-param-reassign:0 */

var isArray = Array.isArray;


function conv(originalInput) {
  // prevent any input argument mutation:
  var input = clone(originalInput);

  // f's
  // ====================

  function toFullHex(hex, findings, offset, string) {
    if (string[offset - 1] !== "&" && // consider false positives like &#124;
    hex.length === 4 && hex.charAt(0) === "#") {
      hex = "#" + hex.charAt(1) + hex.charAt(1) + hex.charAt(2) + hex.charAt(2) + hex.charAt(3) + hex.charAt(3);
    }
    return hex.toLowerCase();
  }

  // action
  // ====================

  if (isString(originalInput)) {
    input = input.replace(r(), toFullHex);
  } else if (isArray(input)) {
    for (var i = 0, len = input.length; i < len; i++) {
      input[i] = conv(input[i]);
    }
  } else if (isPlainObject(originalInput)) {
    Object.keys(input).forEach(function (key) {
      input[key] = conv(input[key]);
    });
  } else {
    return originalInput;
  }
  return input;
}

module.exports = conv;
