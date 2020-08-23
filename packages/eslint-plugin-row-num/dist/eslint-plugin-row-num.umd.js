/**
 * eslint-plugin-row-num
 * ESLint plugin to update row numbers on each console.log
 * Version: 1.2.10
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/eslint-plugin-row-num
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).eslintPluginRowNum=r()}(this,(function(){"use strict";function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function r(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return i(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var s=" ";function u(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2?arguments[2]:void 0;if(!(t.trim()||e.length&&"\n"!==t&&t!==s&&" "===(r?e[e.length-1]:e[0])||e.length&&"\n"===(r?e[e.length-1]:e[0])&&"\n"!==t&&t!==s))if(r){if(("\n"===t||t===s)&&e.length&&" "===e[e.length-1])for(;e.length&&" "===e[e.length-1];)e.pop();e.push(t===s||"\n"===t?t:" ")}else{if(("\n"===t||t===s)&&e.length&&" "===e[0])for(;e.length&&" "===e[0];)e.shift();e.unshift(t===s||"\n"===t?t:" ")}}function l(e,r){if("string"==typeof e&&e.length){var t,n,a=!1;if(e.includes("\r\n")&&(a=!0),t=r&&"number"==typeof r?r:1,""===e.trim()){var o=[];for(n=t,Array.from(e).forEach((function(e){("\n"!==e||n)&&("\n"===e&&(n-=1),u(o,!0,e))}));o.length>1&&" "===o[o.length-1];)o.pop();return o.join("")}var i=[];if(n=t,""===e[0].trim())for(var s=0,l=e.length;s<l&&!e[s].trim();s++)("\n"!==e[s]||n)&&("\n"===e[s]&&(n-=1),u(i,!0,e[s]));var c=[];if(n=t,""===e.slice(-1).trim())for(var g=e.length;g--&&!e[g].trim();)("\n"!==e[g]||n)&&("\n"===e[g]&&(n-=1),u(c,!1,e[g]));return a?"".concat(i.join("")).concat(e.trim()).concat(c.join("")).replace(/\n/g,"\r\n"):i.join("")+e.trim()+c.join("")}return e}function c(e,r){if(!Array.isArray(e)||!e.length)return e;var t,n,o=a(a({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null}),r);if(o.strictlyTwoElementsInRangeArrays&&!e.every((function(e,r){return 2===e.length||(t=r,n=e.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ".concat(t,"th range (").concat(JSON.stringify(e[t],null,4),") has not two but ").concat(n," elements!"));if(!e.every((function(e,r){return!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(t=r,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ".concat(t,"th range (").concat(JSON.stringify(e[t],null,4),") does not consist of only natural numbers!"));var i=e.length*e.length,s=0;return Array.from(e).sort((function(e,r){return o.progressFn&&(s+=1,o.progressFn(Math.floor(100*s/i))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1}))}function g(r,t){function n(e){return"string"==typeof e}function i(r){return r&&"object"===e(r)&&!Array.isArray(r)}if(!Array.isArray(r)||!r.length)return r;var s,u={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};if(t){if(!i(t))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n".concat(JSON.stringify(t,null,4)," (type ").concat(e(t),")"));if((s=a(a({},u),t)).progressFn&&i(s.progressFn)&&!Object.keys(s.progressFn).length)s.progressFn=null;else if(s.progressFn&&"function"!=typeof s.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'.concat(e(s.progressFn),'", equal to ').concat(JSON.stringify(s.progressFn,null,4)));if(s.mergeType&&1!==s.mergeType&&2!==s.mergeType)if(n(s.mergeType)&&"1"===s.mergeType.trim())s.mergeType=1;else{if(!n(s.mergeType)||"2"!==s.mergeType.trim())throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(e(s.mergeType),'", equal to ').concat(JSON.stringify(s.mergeType,null,4)));s.mergeType=2}if("boolean"!=typeof s.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'.concat(e(s.joinRangesThatTouchEdges),'", equal to ').concat(JSON.stringify(s.joinRangesThatTouchEdges,null,4)))}else s=a({},u);for(var l,g,f,p=r.map((function(e){return o(e)})).filter((function(e){return void 0!==e[2]||e[0]!==e[1]})),y=(l=s.progressFn?c(p,{progressFn:function(e){(f=Math.floor(e/5))!==g&&(g=f,s.progressFn(f))}}):c(p)).length-1,h=y;h>0;h--)s.progressFn&&(f=Math.floor(78*(1-h/y))+21)!==g&&f>g&&(g=f,s.progressFn(f)),(l[h][0]<=l[h-1][0]||!s.joinRangesThatTouchEdges&&l[h][0]<l[h-1][1]||s.joinRangesThatTouchEdges&&l[h][0]<=l[h-1][1])&&(l[h-1][0]=Math.min(l[h][0],l[h-1][0]),l[h-1][1]=Math.max(l[h][1],l[h-1][1]),void 0!==l[h][2]&&(l[h-1][0]>=l[h][0]||l[h-1][1]<=l[h][1])&&null!==l[h-1][2]&&(null===l[h][2]&&null!==l[h-1][2]?l[h-1][2]=null:void 0!==l[h-1][2]?2===s.mergeType&&l[h-1][0]===l[h][0]?l[h-1][2]=l[h][2]:l[h-1][2]+=l[h][2]:l[h-1][2]=l[h][2]),l.splice(h,1),h=l.length);return l}function f(e){return null!=e}function p(e){return Number.isInteger(e)&&e>=0}function y(e){return"string"==typeof e}function h(e){return/^\d*$/.test(e)?parseInt(e,10):e}var m=function(){function t(r){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t);var n=a(a({},{limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1}),r);if(n.mergeType&&1!==n.mergeType&&2!==n.mergeType)if(y(n.mergeType)&&"1"===n.mergeType.trim())n.mergeType=1;else{if(!y(n.mergeType)||"2"!==n.mergeType.trim())throw new Error('ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(e(n.mergeType),'", equal to ').concat(JSON.stringify(n.mergeType,null,4)));n.mergeType=2}this.opts=n}var n,i,s;return n=t,(i=[{key:"add",value:function(r,t,n){for(var a=this,i=arguments.length,s=new Array(i>3?i-3:0),u=3;u<i;u++)s[u-3]=arguments[u];if(s.length>0)throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ".concat(JSON.stringify(s,null,4)));if(f(r)||f(t)){if(f(r)&&!f(t)){if(Array.isArray(r)){if(r.length){if(r.some((function(e){return Array.isArray(e)})))return void r.forEach((function(e){Array.isArray(e)&&a.add.apply(a,o(e))}));r.length>1&&p(h(r[0]))&&p(h(r[1]))&&this.add.apply(this,o(r))}return}throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set ('.concat(JSON.stringify(r,null,0),') but second-one, "to" is not (').concat(JSON.stringify(t,null,0),")"))}if(!f(r)&&f(t))throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set ('.concat(JSON.stringify(t,null,0),') but first-one, "from" is not (').concat(JSON.stringify(r,null,0),")"));var c=/^\d*$/.test(r)?parseInt(r,10):r,g=/^\d*$/.test(t)?parseInt(t,10):t;if(p(n)&&(n=String(n)),!p(c)||!p(g))throw p(c)&&c>=0?new TypeError('ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(e(g),'" equal to: ').concat(JSON.stringify(g,null,4))):new TypeError('ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(e(c),'" equal to: ').concat(JSON.stringify(c,null,4)));if(f(n)&&!y(n)&&!p(n))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ".concat(e(n),", equal to:\n").concat(JSON.stringify(n,null,4)));if(f(this.ranges)&&Array.isArray(this.last())&&c===this.last()[1]){if(this.last()[1]=g,this.last()[2],null!==this.last()[2]&&f(n)){var m=!(f(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?n:this.last()[2]+n;this.opts.limitToBeAddedWhitespace&&(m=l(m,this.opts.limitLinebreaksCount)),y(m)&&!m.length||(this.last()[2]=m)}}else{this.ranges||(this.ranges=[]);var d=void 0===n||y(n)&&!n.length?[c,g]:[c,g,this.opts.limitToBeAddedWhitespace?l(n,this.opts.limitLinebreaksCount):n];this.ranges.push(d)}}}},{key:"push",value:function(e,r,t){for(var n=arguments.length,a=new Array(n>3?n-3:0),o=3;o<n;o++)a[o-3]=arguments[o];this.add.apply(this,[e,r,t].concat(a))}},{key:"current",value:function(){var e=this;return null!=this.ranges?(this.ranges=g(this.ranges,{mergeType:this.opts.mergeType}),this.opts.limitToBeAddedWhitespace?this.ranges.map((function(r){return f(r[2])?[r[0],r[1],l(r[2],e.opts.limitLinebreaksCount)]:r})):this.ranges):null}},{key:"wipe",value:function(){this.ranges=void 0}},{key:"replace",value:function(e){if(Array.isArray(e)&&e.length){if(!Array.isArray(e[0])||!p(e[0][0]))throw new Error("ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ".concat(JSON.stringify(e[0],null,4)," should be an array and its first element should be an integer, a string index."));this.ranges=Array.from(e)}else this.ranges=void 0}},{key:"last",value:function(){return void 0!==this.ranges&&Array.isArray(this.ranges)?this.ranges[this.ranges.length-1]:null}}])&&r(n.prototype,i),s&&r(n,s),t}();function d(e){return null!=e}function w(e){return"string"==typeof e}function v(r,t){if("string"!=typeof r||!r.length)return r;function n(e){return/[0-9]/.test(e)}function a(r){return r&&"object"===e(r)&&!Array.isArray(r)}var o=Object.assign({padStart:3,overrideRowNum:null,returnRangesOnly:!1,triggerKeywords:["console.log"],extractedLogContentsWereGiven:!1},t);(!o.padStart||"number"!=typeof o.padStart||"number"==typeof o.padStart&&o.padStart<0)&&(o.padStart=0);var i,s,u=new m,l=r.length,c=null,f=null,p=null,y=1,h=!1,v=null;for(o.padStart&&l>45e3&&(o.padStart=4),i=0;i<l;i++){if(null===o.overrideRowNum&&("\n"===r[i]||"\r"===r[i]&&"\n"!==r[i+1])&&(y+=1),!o.extractedLogContentsWereGiven&&null!==c&&c.start<i&&c.type===r[i]&&(c=null,f=null,p=null,v=null,h=!1),null===c&&(o.extractedLogContentsWereGiven||f&&f<i&&p&&p<i)&&r[i].trim())if('"'===r[i]||"'"===r[i]||"`"===r[i])(c={}).start=i,c.type=r[i],h=!1;else if(o.extractedLogContentsWereGiven&&null===v){if(!n(r[i]))break;v=i}else r[i].trim()&&"/"!==r[i]&&!o.extractedLogContentsWereGiven&&(f=null,p=null,v=null);if(c&&Number.isInteger(c.start)&&c.start<i&&!h&&null===v&&n(r[i])&&(v=i),!Number.isInteger(v)||n(r[i])&&r[i+1]||!(i>v)&&r[i+1]||(o.padStart||o.overrideRowNum,u.push(v,n(r[i])?i+1:i,o.padStart?String(null!=o.overrideRowNum?o.overrideRowNum:y).padStart(o.padStart,"0"):"".concat(null!=o.overrideRowNum?o.overrideRowNum:y)),v=null,h=!0),c&&Number.isInteger(c.start)&&c.start<i&&!h&&(s=r[i],/[A-Za-z]/.test(s))&&("n"!==r[i]||"\\"!==r[i-1])){if("\\"===r[i-1]&&"u"===r[i]&&"0"===r[i+1]&&"0"===r[i+2]&&"1"===r[i+3]&&("b"===r[i+4]||"B"===r[i+5])&&"["===r[i+5]){var b=void 0;n(r[i+6])?b=i+6:"$"===r[i+6]&&"{"===r[i+7]&&n(r[i+8])&&(b=i+8);var T=void 0;if(b)for(var O=b;O<l;O++)if(!n(r[O])){T=O;break}var R=void 0;if("m"===r[T]?R=T:"}"===r[T]&&"m"===r[T+1]&&(R=T+1),!R){h=!0;continue}if("$"===r[R+1]&&"{"===r[R+2]&&"`"===r[R+3]){i=R+3;continue}}h=!0}if(!p&&r[i].trim()&&f&&f<=i&&("("===r[i]?p=i:(f=null,v=null)),a(o)&&o.triggerKeywords&&Array.isArray(o.triggerKeywords)){for(var A=void 0,I=0,N=o.triggerKeywords.length;I<N;I++)if(r.startsWith(o.triggerKeywords[I],i)){A=o.triggerKeywords[I];break}if(A){f=i+A.length,i=i+A.length-1;continue}}}return c=null,f=null,p=null,y=1,h=void 0,v=null,y=1,o.returnRangesOnly?u.current():u.current()?function(r,t,n){var a,o=0,i=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(!w(r))throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ".concat(e(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(null===t)return r;if(!Array.isArray(t))throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ".concat(e(t),", equal to: ").concat(JSON.stringify(t,null,4)));if(n&&"function"!=typeof n)throw new TypeError("ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ".concat(e(n),", equal to: ").concat(JSON.stringify(n,null,4)));var s=(a=Array.isArray(t)&&(Number.isInteger(t[0])&&t[0]>=0||/^\d*$/.test(t[0]))&&(Number.isInteger(t[1])&&t[1]>=0||/^\d*$/.test(t[1]))?[Array.from(t)]:Array.from(t)).length,u=0;a.forEach((function(r,t){if(n&&(o=Math.floor(u/s*10))!==i&&(i=o,n(o)),!Array.isArray(r))throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg., has ".concat(t,"th element not an array: ").concat(JSON.stringify(r,null,4),", which is ").concat(e(r)));if(!Number.isInteger(r[0])||r[0]<0){if(!/^\d*$/.test(r[0]))throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has ".concat(t,"th element, array [").concat(r[0],",").concat(r[1],"]. That array has first element not an integer, but ").concat(e(r[0]),", equal to: ").concat(JSON.stringify(r[0],null,4),". Computer doesn't like this."));a[t][0]=Number.parseInt(a[t][0],10)}if(!Number.isInteger(r[1])){if(!/^\d*$/.test(r[1]))throw new TypeError("ranges-apply: [THROW_ID_07] ranges array, second input arg. has ".concat(t,"th element, array [").concat(r[0],",").concat(r[1],"]. That array has second element not an integer, but ").concat(e(r[1]),", equal to: ").concat(JSON.stringify(r[1],null,4),". Computer doesn't like this."));a[t][1]=Number.parseInt(a[t][1],10)}u+=1}));var l=g(a,{progressFn:function(e){n&&(o=10+Math.floor(e/10))!==i&&(i=o,n(o))}}),c=l.length;if(c>0){var f=r.slice(l[c-1][1]);r=l.reduce((function(e,t,a,s){n&&(o=20+Math.floor(a/c*80))!==i&&(i=o,n(o));var u=0===a?0:s[a-1][1],l=s[a][0];return e+r.slice(u,l)+(d(s[a][2])?s[a][2]:"")}),""),r+=f}return r}(r,u.current()):r}return{configs:{recommended:{plugins:["row-num"],rules:{"no-console":"off","row-num/correct-row-num":"error"}}},rules:{"correct-row-num":{create:function(r){return{CallExpression:function(t){t.callee&&"MemberExpression"===t.callee.type&&t.callee.object&&"Identifier"===t.callee.object.type&&"console"===t.callee.object.name&&t.callee.property&&"Identifier"===t.callee.property.type&&"log"===t.callee.property.name&&t.arguments&&Array.isArray(t.arguments)&&t.arguments.length&&t.arguments.forEach((function(n){"Literal"===n.type&&"string"==typeof n.raw&&n.raw!==v(n.raw,{overrideRowNum:n.loc.start.line,returnRangesOnly:!1,extractedLogContentsWereGiven:!0})?r.report({node:t,messageId:"correctRowNum",fix:function(e){var r=v(n.raw,{overrideRowNum:n.loc.start.line,returnRangesOnly:!0,extractedLogContentsWereGiven:!0}),t=[n.start+r[0][0],n.start+r[0][1]];return e.replaceTextRange(t,r[0][2])}}):"TemplateLiteral"===n.type&&Array.isArray(n.quasis)&&n.quasis.length&&"object"===e(n.quasis[0])&&n.quasis[0].value&&n.quasis[0].value.raw&&n.quasis[0].value.raw!==v(n.quasis[0].value.raw,{overrideRowNum:n.loc.start.line,returnRangesOnly:!1,extractedLogContentsWereGiven:!0})&&r.report({node:t,messageId:"correctRowNum",fix:function(e){var r=v(n.quasis[0].value.raw,{overrideRowNum:n.loc.start.line,returnRangesOnly:!0,extractedLogContentsWereGiven:!0}),t=[n.start+1+r[0][0],n.start+1+r[0][1]];return e.replaceTextRange(t,r[0][2])}})}))}}},meta:{type:"suggestion",messages:{correctRowNum:"Update the row number."},fixable:"code"}}}}}));
