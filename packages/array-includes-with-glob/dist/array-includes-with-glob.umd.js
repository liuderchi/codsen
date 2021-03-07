/**
 * array-includes-with-glob
 * Like _.includes but with wildcards
 * Version: 3.0.6
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/array-includes-with-glob/
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).arrayIncludesWithGlob={})}(this,(function(e){"use strict";function t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}var a=new Map;function u(e,t){if(!Array.isArray(e))switch(typeof e){case"string":e=[e];break;case"undefined":e=[];break;default:throw new TypeError("Expected '"+t+"' to be a string or an array, but got a type of '"+typeof e+"'")}return e.filter((function(e){if("string"!=typeof e){if(void 0===e)return!1;throw new TypeError("Expected '"+t+"' to be an array of strings, but found a type of '"+typeof e+"' in the array")}return!0}))}function s(e,t){t=n({caseSensitive:!1},t);var r=e+JSON.stringify(t);if(a.has(r))return a.get(r);var o="!"===e[0];o&&(e=e.slice(1)),e=function(e){if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(e).replace(/\\\*/g,"[\\s\\S]*");var i=new RegExp("^"+e+"$",t.caseSensitive?"":"i");return i.negated=o,a.set(r,i),i}var c=function(e,t,r){if(e=u(e,"inputs"),0===(t=u(t,"patterns")).length)return[];var n="!"===t[0][0];t=t.map((function(e){return s(e,r)}));for(var o,a=[],c=i(e);!(o=c()).done;){for(var f,l=o.value,y=n,p=i(t);!(f=p()).done;){var d=f.value;d.test(l)&&(y=!d.negated)}y&&a.push(l)}return a};c.isMatch=function(e,t,r){return e=u(e,"inputs"),0!==(t=u(t,"patterns")).length&&e.some((function(e){return t.every((function(t){var n=s(t,r),o=n.test(e);return n.negated?!o:o}))}))};var f={arrayVsArrayAllMustBeFound:"any",caseSensitive:!0};e.defaults=f,e.includesWithGlob=function(e,t,r){if(!e.length||!t.length)return!1;var o=n(n({},f),r),i="string"==typeof e?[e]:Array.from(e);return"string"==typeof t?i.some((function(e){return c.isMatch(e,t,{caseSensitive:o.caseSensitive})})):"any"===o.arrayVsArrayAllMustBeFound?t.some((function(e){return i.some((function(t){return c.isMatch(t,e,{caseSensitive:o.caseSensitive})}))})):t.every((function(e){return i.some((function(t){return c.isMatch(t,e,{caseSensitive:o.caseSensitive})}))}))},e.version="3.0.6",Object.defineProperty(e,"__esModule",{value:!0})}));
