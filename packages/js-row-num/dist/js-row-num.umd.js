/**
 * @name js-row-num
 * @fileoverview Update all row numbers in all console.logs in JS code
 * @version 4.0.14
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/js-row-num/}
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).jsRowNum={})}(this,(function(e){"use strict";
/**
 * @name string-collapse-leading-whitespace
 * @fileoverview Collapse the leading and trailing whitespace of a string
 * @version 5.0.14
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-collapse-leading-whitespace/}
 */function r(e,r=1){function t(e){return Array.from(e).reverse().join("")}function n(e,r,t){const n=t?"\n":"\r",s=t?"\r":"\n";if(!e)return e;let i=0,o="";for(let t=0,a=e.length;t<a;t++)(e[t]===n||e[t]===s&&e[t-1]!==n)&&i++,"\r\n".includes(e[t])||" "===e[t]?" "===e[t]?o+=e[t]:e[t]===n?i<=r&&(o+=e[t],e[t+1]===s&&(o+=e[t+1],t++)):e[t]===s&&(!e[t-1]||e[t-1]!==n)&&i<=r&&(o+=e[t]):e[t+1]||i||(o+=" ");return o}if("string"==typeof e&&e.length){let s=1;"number"==typeof+r&&Number.isInteger(+r)&&+r>=0&&(s=+r);let i="",o="";if(e.trim()){if(!e[0].trim())for(let r=0,t=e.length;r<t;r++)if(e[r].trim()){i=e.slice(0,r);break}}else i=e;if(e.trim()&&(""===e.slice(-1).trim()||" "===e.slice(-1)))for(let r=e.length;r--;)if(e[r].trim()){o=e.slice(r+1);break}return`${n(i,s,!1)}${e.trim()}${t(n(t(o),s,!0))}`}return e}
/**
 * @name ranges-sort
 * @fileoverview Sort string index ranges
 * @version 4.0.14
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-sort/}
 */const t={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function n(e,r){if(!Array.isArray(e)||!e.length)return e;const n={...t,...r};let s,i;if(n.strictlyTwoElementsInRangeArrays&&!e.filter((e=>e)).every(((e,r)=>2===e.length||(s=r,i=e.length,!1))))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${s}th range (${JSON.stringify(e[s],null,4)}) has not two but ${i} elements!`);if(!e.filter((e=>e)).every(((e,r)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(s=r,!1))))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${s}th range (${JSON.stringify(e[s],null,4)}) does not consist of only natural numbers!`);const o=e.filter((e=>e)).length**2;let a=0;return Array.from(e).filter((e=>e)).sort(((e,r)=>(n.progressFn&&(a+=1,n.progressFn(Math.floor(100*a/o))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1)))}
/**
 * @name ranges-merge
 * @fileoverview Merge and sort string index ranges
 * @version 7.0.14
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-merge/}
 */const s={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function i(e,r){function t(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return null;let i;if(r){if(!t(r))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(r,null,4)} (type ${typeof r})`);if(i={...s,...r},i.progressFn&&t(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof i.progressFn}", equal to ${JSON.stringify(i.progressFn,null,4)}`);if(i.mergeType&&1!=+i.mergeType&&2!=+i.mergeType)throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof i.mergeType}", equal to ${JSON.stringify(i.mergeType,null,4)}`);if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof i.joinRangesThatTouchEdges}", equal to ${JSON.stringify(i.joinRangesThatTouchEdges,null,4)}`)}else i={...s};const o=e.filter((e=>e)).map((e=>[...e])).filter((e=>void 0!==e[2]||e[0]!==e[1]));let a,l,u;if(a=i.progressFn?n(o,{progressFn:e=>{u=Math.floor(e/5),u!==l&&(l=u,i.progressFn(u))}}):n(o),!a)return null;const g=a.length-1;for(let e=g;e>0;e--)i.progressFn&&(u=Math.floor(78*(1-e/g))+21,u!==l&&u>l&&(l=u,i.progressFn(u))),(a[e][0]<=a[e-1][0]||!i.joinRangesThatTouchEdges&&a[e][0]<a[e-1][1]||i.joinRangesThatTouchEdges&&a[e][0]<=a[e-1][1])&&(a[e-1][0]=Math.min(a[e][0],a[e-1][0]),a[e-1][1]=Math.max(a[e][1],a[e-1][1]),void 0!==a[e][2]&&(a[e-1][0]>=a[e][0]||a[e-1][1]<=a[e][1])&&null!==a[e-1][2]&&(null===a[e][2]&&null!==a[e-1][2]?a[e-1][2]=null:null!=a[e-1][2]?2==+i.mergeType&&a[e-1][0]===a[e][0]?a[e-1][2]=a[e][2]:a[e-1][2]+=a[e][2]:a[e-1][2]=a[e][2]),a.splice(e,1),e=a.length);return a.length?a:null}
/**
 * @name ranges-push
 * @fileoverview Gather string index ranges
 * @version 5.0.14
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-push/}
 */function o(e){return null!=e}function a(e){return Number.isInteger(e)&&e>=0}function l(e){return"string"==typeof e}const u={limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1};class g{constructor(e){const r={...u,...e};if(r.mergeType&&1!==r.mergeType&&2!==r.mergeType)if(l(r.mergeType)&&"1"===r.mergeType.trim())r.mergeType=1;else{if(!l(r.mergeType)||"2"!==r.mergeType.trim())throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof r.mergeType}", equal to ${JSON.stringify(r.mergeType,null,4)}`);r.mergeType=2}this.opts=r,this.ranges=[]}add(e,t,n){if(null==e&&null==t)return;if(o(e)&&!o(t)){if(Array.isArray(e)){if(e.length){if(e.some((e=>Array.isArray(e))))return void e.forEach((e=>{Array.isArray(e)&&this.add(...e)}));e.length&&a(+e[0])&&a(+e[1])&&this.add(...e)}return}throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(e,null,0)}) but second-one, "to" is not (${JSON.stringify(t,null,0)})`)}if(!o(e)&&o(t))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(t,null,0)}) but first-one, "from" is not (${JSON.stringify(e,null,0)})`);const s=+e,i=+t;if(a(n)&&(n=String(n)),!a(s)||!a(i))throw a(s)&&s>=0?new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof i}" equal to: ${JSON.stringify(i,null,4)}`):new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof s}" equal to: ${JSON.stringify(s,null,4)}`);if(o(n)&&!l(n)&&!a(n))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof n}, equal to:\n${JSON.stringify(n,null,4)}`);if(o(this.ranges)&&Array.isArray(this.last())&&s===this.last()[1]){if(this.last()[1]=i,this.last(),null!==this.last()[2]&&o(n)){let e=!(this.last()[2]&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?n:this.last()[2]+n;this.opts.limitToBeAddedWhitespace&&(e=r(e,this.opts.limitLinebreaksCount)),l(e)&&!e.length||(this.last()[2]=e)}}else{this.ranges||(this.ranges=[]);const e=void 0===n||l(n)&&!n.length?[s,i]:[s,i,n&&this.opts.limitToBeAddedWhitespace?r(n,this.opts.limitLinebreaksCount):n];this.ranges.push(e)}}push(e,r,t){this.add(e,r,t)}current(){return Array.isArray(this.ranges)&&this.ranges.length?(this.ranges=i(this.ranges,{mergeType:this.opts.mergeType}),this.ranges&&this.opts.limitToBeAddedWhitespace?this.ranges.map((e=>o(e[2])?[e[0],e[1],r(e[2],this.opts.limitLinebreaksCount)]:e)):this.ranges):null}wipe(){this.ranges=[]}replace(e){if(Array.isArray(e)&&e.length){if(!Array.isArray(e[0])||!a(e[0][0]))throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(e[0],null,4)} should be an array and its first element should be an integer, a string index.`);this.ranges=Array.from(e)}else this.ranges=[]}last(){return Array.isArray(this.ranges)&&this.ranges.length?this.ranges[this.ranges.length-1]:null}}
/**
 * @name ranges-apply
 * @fileoverview Take an array of string index ranges, delete/replace the string according to them
 * @version 5.0.14
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-apply/}
 */const f={padStart:3,overrideRowNum:null,returnRangesOnly:!1,triggerKeywords:["console.log"],extractedLogContentsWereGiven:!1};e.defaults=f,e.fixRowNums=function(e,r){if("string"!=typeof e||!e.length)return e;function t(e){return/[0-9]/.test(e)}function n(e){return e&&"object"==typeof e&&!Array.isArray(e)}const s={...f,...r};(!s.padStart||"number"!=typeof s.padStart||"number"==typeof s.padStart&&s.padStart<0)&&(s.padStart=0);const o=new g;let a;const l=e.length;let u=null,y=null,p=null,h=1,m=!1,d=null;for(s.padStart&&l>45e3&&(s.padStart=4),a=0;a<l;a++){if(null===s.overrideRowNum&&("\n"===e[a]||"\r"===e[a]&&"\n"!==e[a+1])&&(h+=1),!s.extractedLogContentsWereGiven&&null!==u&&u.start<a&&u.type===e[a]&&(u=null,y=null,p=null,d=null,m=!1),null===u&&(s.extractedLogContentsWereGiven||y&&y<a&&p&&p<a)&&e[a].trim())if('"'===e[a]||"'"===e[a]||"`"===e[a])u={start:a,type:e[a]},m=!1;else if(s.extractedLogContentsWereGiven&&null===d){if(!t(e[a]))break;d=a}else e[a].trim()&&"/"!==e[a]&&!s.extractedLogContentsWereGiven&&(y=null,p=null,d=null);if(u&&Number.isInteger(u.start)&&u.start<a&&!m&&null===d&&t(e[a])&&(d=a),!Number.isInteger(d)||t(e[a])&&e[a+1]||!(a>d)&&e[a+1]||(o.push(d,t(e[a])?a+1:a,s.padStart?String(null!=s.overrideRowNum?s.overrideRowNum:h).padStart(s.padStart,"0"):`${null!=s.overrideRowNum?s.overrideRowNum:h}`),d=null,m=!0),u&&Number.isInteger(u.start)&&u.start<a&&!m&&/[A-Za-z]/.test(e[a])&&("n"!==e[a]||"\\"!==e[a-1])){if("\\"===e[a-1]&&"u"===e[a]&&"0"===e[a+1]&&"0"===e[a+2]&&"1"===e[a+3]&&("b"===e[a+4]||"B"===e[a+5])&&"["===e[a+5]){let r,n,s;if(t(e[a+6])?r=a+6:"$"===e[a+6]&&"{"===e[a+7]&&t(e[a+8])&&(r=a+8),r)for(let s=r;s<l;s++)if(!t(e[s])){n=s;break}if(void 0!==n&&"m"===e[n]?s=n:void 0!==n&&"}"===e[n]&&"m"===e[n+1]&&(s=n+1),!s){m=!0;continue}if("$"===e[s+1]&&"{"===e[s+2]&&"`"===e[s+3]){a=s+3;continue}}m=!0}if(!p&&e[a].trim()&&y&&y<=a&&("("===e[a]?p=a:(y=null,d=null)),n(s)&&s.triggerKeywords&&Array.isArray(s.triggerKeywords)){let r;for(let t=0,n=s.triggerKeywords.length;t<n;t++)if(e.startsWith(s.triggerKeywords[t],a)){r=s.triggerKeywords[t];break}if(r){y=a+r.length,a=a+r.length-1;continue}}}return u=null,y=null,p=null,h=1,m=void 0,d=null,h=1,s.returnRangesOnly?o.current():o.current()?function(e,r,t){let n,s=0,o=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof e)throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(r&&!Array.isArray(r))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(t&&"function"!=typeof t)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(!r||!r.filter((e=>e)).length)return e;n=Array.isArray(r)&&Number.isInteger(r[0])&&Number.isInteger(r[1])?[Array.from(r)]:Array.from(r);const a=n.length;let l=0;n.filter((e=>e)).forEach(((e,r)=>{if(t&&(s=Math.floor(l/a*10),s!==o&&(o=s,t(s))),!Array.isArray(e))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${r}th element not an array: ${JSON.stringify(e,null,4)}, which is ${typeof e}`);if(!Number.isInteger(e[0])){if(!Number.isInteger(+e[0])||+e[0]<0)throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${r}th element, array ${JSON.stringify(e,null,0)}. Its first element is not an integer, string index, but ${typeof e[0]}, equal to: ${JSON.stringify(e[0],null,4)}.`);n[r][0]=+n[r][0]}if(!Number.isInteger(e[1])){if(!Number.isInteger(+e[1])||+e[1]<0)throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${r}th element, array ${JSON.stringify(e,null,0)}. Its second element is not an integer, string index, but ${typeof e[1]}, equal to: ${JSON.stringify(e[1],null,4)}.`);n[r][1]=+n[r][1]}l+=1}));const u=i(n,{progressFn:e=>{t&&(s=10+Math.floor(e/10),s!==o&&(o=s,t(s)))}}),g=Array.isArray(u)?u.length:0;if(g>0){const r=e.slice(u[g-1][1]);e=u.reduce(((r,n,i,a)=>(t&&(s=20+Math.floor(i/g*80),s!==o&&(o=s,t(s))),r+e.slice(0===i?0:a[i-1][1],a[i][0])+(a[i][2]||""))),""),e+=r}return e}(e,o.current()):e},e.version="4.0.14",Object.defineProperty(e,"__esModule",{value:!0})}));
