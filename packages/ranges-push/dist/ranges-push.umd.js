/**
 * ranges-push
 * Manage the array of ranges referencing the index ranges within the string
 * Version: 3.7.17
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ranges-push
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).rangesPush=r()}(this,(function(){"use strict";function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function r(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function i(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return s(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var a=" ";function u(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2?arguments[2]:void 0;if(!(t.trim()||e.length&&"\n"!==t&&t!==a&&" "===(r?e[e.length-1]:e[0])||e.length&&"\n"===(r?e[e.length-1]:e[0])&&"\n"!==t&&t!==a))if(r){if(("\n"===t||t===a)&&e.length&&" "===e[e.length-1])for(;e.length&&" "===e[e.length-1];)e.pop();e.push(t===a||"\n"===t?t:" ")}else{if(("\n"===t||t===a)&&e.length&&" "===e[0])for(;e.length&&" "===e[0];)e.shift();e.unshift(t===a||"\n"===t?t:" ")}}function l(e,r){if("string"==typeof e&&e.length){var t,n,o=!1;if(e.includes("\r\n")&&(o=!0),t=r&&"number"==typeof r?r:1,""===e.trim()){var i=[];for(n=t,Array.from(e).forEach((function(e){("\n"!==e||n)&&("\n"===e&&(n-=1),u(i,!0,e))}));i.length>1&&" "===i[i.length-1];)i.pop();return i.join("")}var s=[];if(n=t,""===e[0].trim())for(var a=0,l=e.length;a<l&&!e[a].trim();a++)("\n"!==e[a]||n)&&("\n"===e[a]&&(n-=1),u(s,!0,e[a]));var g=[];if(n=t,""===e.slice(-1).trim())for(var c=e.length;c--&&!e[c].trim();)("\n"!==e[c]||n)&&("\n"===e[c]&&(n-=1),u(g,!1,e[c]));return o?"".concat(s.join("")).concat(e.trim()).concat(g.join("")).replace(/\n/g,"\r\n"):s.join("")+e.trim()+g.join("")}return e}function g(e,r){if(!Array.isArray(e)||!e.length)return e;var t,n,i=o(o({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null}),r);if(i.strictlyTwoElementsInRangeArrays&&!e.every((function(e,r){return 2===e.length||(t=r,n=e.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ".concat(t,"th range (").concat(JSON.stringify(e[t],null,4),") has not two but ").concat(n," elements!"));if(!e.every((function(e,r){return!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(t=r,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ".concat(t,"th range (").concat(JSON.stringify(e[t],null,4),") does not consist of only natural numbers!"));var s=e.length*e.length,a=0;return Array.from(e).sort((function(e,r){return i.progressFn&&(a+=1,i.progressFn(Math.floor(100*a/s))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1}))}function c(e){return null!=e}function f(e){return Number.isInteger(e)&&e>=0}function h(e){return"string"==typeof e}function p(e){return/^\d*$/.test(e)?parseInt(e,10):e}return function(){function t(r){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t);var n=o(o({},{limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1}),r);if(n.mergeType&&1!==n.mergeType&&2!==n.mergeType)if(h(n.mergeType)&&"1"===n.mergeType.trim())n.mergeType=1;else{if(!h(n.mergeType)||"2"!==n.mergeType.trim())throw new Error('ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(e(n.mergeType),'", equal to ').concat(JSON.stringify(n.mergeType,null,4)));n.mergeType=2}this.opts=n}var n,s,a;return n=t,(s=[{key:"add",value:function(r,t,n){for(var o=this,s=arguments.length,a=new Array(s>3?s-3:0),u=3;u<s;u++)a[u-3]=arguments[u];if(a.length>0)throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ".concat(JSON.stringify(a,null,4)));if(c(r)||c(t)){if(c(r)&&!c(t)){if(Array.isArray(r)){if(r.length){if(r.some((function(e){return Array.isArray(e)})))return void r.forEach((function(e){Array.isArray(e)&&o.add.apply(o,i(e))}));r.length>1&&f(p(r[0]))&&f(p(r[1]))&&this.add.apply(this,i(r))}return}throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set ('.concat(JSON.stringify(r,null,0),') but second-one, "to" is not (').concat(JSON.stringify(t,null,0),")"))}if(!c(r)&&c(t))throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set ('.concat(JSON.stringify(t,null,0),') but first-one, "from" is not (').concat(JSON.stringify(r,null,0),")"));var g=/^\d*$/.test(r)?parseInt(r,10):r,y=/^\d*$/.test(t)?parseInt(t,10):t;if(f(n)&&(n=String(n)),!f(g)||!f(y))throw f(g)&&g>=0?new TypeError('ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(e(y),'" equal to: ').concat(JSON.stringify(y,null,4))):new TypeError('ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(e(g),'" equal to: ').concat(JSON.stringify(g,null,4)));if(c(n)&&!h(n)&&!f(n))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ".concat(e(n),", equal to:\n").concat(JSON.stringify(n,null,4)));if(c(this.ranges)&&Array.isArray(this.last())&&g===this.last()[1]){if(this.last()[1]=y,this.last()[2],null!==this.last()[2]&&c(n)){var m=!(c(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?n:this.last()[2]+n;this.opts.limitToBeAddedWhitespace&&(m=l(m,this.opts.limitLinebreaksCount)),h(m)&&!m.length||(this.last()[2]=m)}}else{this.ranges||(this.ranges=[]);var d=void 0===n||h(n)&&!n.length?[g,y]:[g,y,this.opts.limitToBeAddedWhitespace?l(n,this.opts.limitLinebreaksCount):n];this.ranges.push(d)}}}},{key:"push",value:function(e,r,t){for(var n=arguments.length,o=new Array(n>3?n-3:0),i=3;i<n;i++)o[i-3]=arguments[i];this.add.apply(this,[e,r,t].concat(o))}},{key:"current",value:function(){var r=this;return null!=this.ranges?(this.ranges=function(r,t){function n(e){return"string"==typeof e}function s(r){return r&&"object"===e(r)&&!Array.isArray(r)}if(!Array.isArray(r)||!r.length)return r;var a,u={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};if(t){if(!s(t))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n".concat(JSON.stringify(t,null,4)," (type ").concat(e(t),")"));if((a=o(o({},u),t)).progressFn&&s(a.progressFn)&&!Object.keys(a.progressFn).length)a.progressFn=null;else if(a.progressFn&&"function"!=typeof a.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'.concat(e(a.progressFn),'", equal to ').concat(JSON.stringify(a.progressFn,null,4)));if(a.mergeType&&1!==a.mergeType&&2!==a.mergeType)if(n(a.mergeType)&&"1"===a.mergeType.trim())a.mergeType=1;else{if(!n(a.mergeType)||"2"!==a.mergeType.trim())throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(e(a.mergeType),'", equal to ').concat(JSON.stringify(a.mergeType,null,4)));a.mergeType=2}if("boolean"!=typeof a.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'.concat(e(a.joinRangesThatTouchEdges),'", equal to ').concat(JSON.stringify(a.joinRangesThatTouchEdges,null,4)))}else a=o({},u);for(var l,c,f,h=r.map((function(e){return i(e)})).filter((function(e){return void 0!==e[2]||e[0]!==e[1]})),p=(l=a.progressFn?g(h,{progressFn:function(e){(f=Math.floor(e/5))!==c&&(c=f,a.progressFn(f))}}):g(h)).length-1,y=p;y>0;y--)a.progressFn&&(f=Math.floor(78*(1-y/p))+21)!==c&&f>c&&(c=f,a.progressFn(f)),(l[y][0]<=l[y-1][0]||!a.joinRangesThatTouchEdges&&l[y][0]<l[y-1][1]||a.joinRangesThatTouchEdges&&l[y][0]<=l[y-1][1])&&(l[y-1][0]=Math.min(l[y][0],l[y-1][0]),l[y-1][1]=Math.max(l[y][1],l[y-1][1]),void 0!==l[y][2]&&(l[y-1][0]>=l[y][0]||l[y-1][1]<=l[y][1])&&null!==l[y-1][2]&&(null===l[y][2]&&null!==l[y-1][2]?l[y-1][2]=null:void 0!==l[y-1][2]?2===a.mergeType&&l[y-1][0]===l[y][0]?l[y-1][2]=l[y][2]:l[y-1][2]+=l[y][2]:l[y-1][2]=l[y][2]),l.splice(y,1),y=l.length);return l}(this.ranges,{mergeType:this.opts.mergeType}),this.opts.limitToBeAddedWhitespace?this.ranges.map((function(e){return c(e[2])?[e[0],e[1],l(e[2],r.opts.limitLinebreaksCount)]:e})):this.ranges):null}},{key:"wipe",value:function(){this.ranges=void 0}},{key:"replace",value:function(e){if(Array.isArray(e)&&e.length){if(!Array.isArray(e[0])||!f(e[0][0]))throw new Error("ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ".concat(JSON.stringify(e[0],null,4)," should be an array and its first element should be an integer, a string index."));this.ranges=Array.from(e)}else this.ranges=void 0}},{key:"last",value:function(){return void 0!==this.ranges&&Array.isArray(this.ranges)?this.ranges[this.ranges.length-1]:null}}])&&r(n.prototype,s),a&&r(n,a),t}()}));
