/** 
 * string-match-left-right
 * Do substrings match what's on the left or right of a given index?
 * Version: 3.10.36
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-match-left-right
 */
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t=t||self).stringMatchLeftRight={})}(this,function(t){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=function(t,n){if(n){if("object"!=typeof n)throw new TypeError(String(n)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in n){if("boolean"!=typeof n.includeZero)throw new TypeError(String(n.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(n.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},e="[object Object]";var c,r,a=Function.prototype,i=Object.prototype,l=a.toString,s=i.hasOwnProperty,h=l.call(Object),g=i.toString,u=(c=Object.getPrototypeOf,r=Object,function(t){return c(r(t))});var f=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||g.call(t)!=e||function(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}(t))return!1;var n=u(t);if(null===n)return!0;var o=s.call(n,"constructor")&&n.constructor;return"function"==typeof o&&o instanceof o&&l.call(o)==h},m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},d="[object AsyncFunction]",y="[object Function]",p="[object GeneratorFunction]",O="[object Null]",C="[object Proxy]",b="[object Undefined]",w="object"==typeof m&&m&&m.Object===Object&&m,T="object"==typeof self&&self&&self.Object===Object&&self,v=w||T||Function("return this")(),S=Object.prototype,E=S.hasOwnProperty,M=S.toString,L=v.Symbol,N=L?L.toStringTag:void 0;function R(t){return null==t?void 0===t?b:O:N&&N in Object(t)?function(t){var n=E.call(t,N),o=t[N];try{t[N]=void 0;var e=!0}catch(t){}var c=M.call(t);e&&(n?t[N]=o:delete t[N]);return c}(t):function(t){return M.call(t)}(t)}var A=function(t){if(!function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}(t))return!1;var n=R(t);return n==y||n==p||n==d||n==C};function B(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=56319);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isHighSurrogate(): the input is not string but ${typeof t}`)}function J(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=56320&&t.charCodeAt(0)<=57343);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isLowSurrogate(): the input is not string but ${typeof t}`)}var I=Array.isArray;function j(t){return null!=t}function k(t){return"string"==typeof t}function x(t){return"string"==typeof t&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=57343)}function _(t,n,o,e,c){console.log("030 [".concat(35,"m","CALLED marchForward()","[",39,"m")),console.log("======\nargs:\nstr=".concat(t,"\nfromIndexInclusive=").concat(n,"\nstrToMatch=").concat(o,"\nopts=").concat(JSON.stringify(e,null,4),"\nspecial=").concat(c,"\n======\n"));var r="function"==typeof o?o():o;if(n>=t.length&&c&&"EOL"===r)return console.log("044 EARLY ENDING, return true"),r;if(console.log("049 ".concat("[".concat(33,"m","fromIndexInclusive","[",39,"m")," = ",JSON.stringify(n,null,4))),!(n<=t.length)){if(e.relaxedApi)return!1;throw new Error("string-match-left-right/marchForward(): [THROW_ID_102] second argument, fromIndexInclusive is ".concat(n," beyond the input string length, ").concat(t.length,"."))}var a=c?1:o.length;console.log("058 starting charsToCheckCount = ".concat(a));for(var i=n,l=t.length;i<l;i++){console.log("[".concat(36,"m","================================== str[".concat(i,"] = ").concat(t[i]),"[",39,"m"));var s=t[i];if(B(t[i])&&J(t[i+1])&&(console.log("071 [".concat(33,"m","low surrogate on the right added","[",39,"m")),s=t[i]+t[i+1]),J(t[i])&&B(t[i-1])&&(console.log("081 [".concat(33,"m","high surrogate on the left added","[",39,"m")),s=t[i-1]+t[i]),console.log("087 ".concat("[".concat(33,"m","current","[",39,"m")," = ",JSON.stringify(s,null,4))),e.trimBeforeMatching&&""===t[i].trim())console.log("094 [".concat(31,"m","trimmed","[",39,"m"));else if(!e.i&&e.trimCharsBeforeMatching.includes(s)||e.i&&e.trimCharsBeforeMatching.map(function(t){return t.toLowerCase()}).includes(s.toLowerCase()))console.log("104 char in the skip list"),2===s.length&&(i+=1);else{var h=o[o.length-a];if(B(h)&&j(o[o.length-a+1])&&J(o[o.length-a+1])&&(h=o[o.length-a]+o[o.length-a+1]),console.log("124 ".concat("[".concat(33,"m","whatToCompareTo","[",39,"m")," = ",JSON.stringify(h,null,4))),!(!e.i&&s===h||e.i&&s.toLowerCase()===h.toLowerCase()))return console.log("197 str[i = ".concat(i,"] = ").concat(JSON.stringify(t[i],null,4))),console.log("199 strToMatch[strToMatch.length - charsToCheckCount = ".concat(o.length-a,"] = ").concat(JSON.stringify(o[o.length-a],null,4))),console.log("206 THEREFORE, returning false."),!1;if((a-=s.length)<1){console.log("138 THIS WAS THE LAST SYMBOL TO CHECK, ".concat(s)),console.log("140 ".concat("[".concat(33,"m","i","[",39,"m")," = ",JSON.stringify(i,null,4))),console.log("147 ".concat("[".concat(33,"m","strToMatch.length","[",39,"m")," = ",JSON.stringify(o.length,null,4)));var g=i-o.length+s.length;return console.log("157 ".concat("[".concat(33,"m","aboutToReturn","[",39,"m")," = ",JSON.stringify(g,null,4))),g>=0&&J(t[g])&&j(t[g-1])&&B(t[g-1])&&(console.log("177 ".concat("[".concat(33,"m","aboutToReturn --1, now = ","[",39,"m")," = ",JSON.stringify(g,null,4))),g-=1),g>=0?g:0}console.log("190 OK. Reduced charsToCheckCount to ".concat(a)),2===s.length&&B(t[i])&&(i+=1),console.log("210 * charsToCheckCount = ".concat(JSON.stringify(a,null,4)))}}return a>0?c&&"EOL"===r?(console.log("220 charsToCheckCount = ".concat(a,";\nwent past the beginning of the string and EOL was queried to return TRUE")),!0):(console.log("225 charsToCheckCount = ".concat(a," THEREFORE, returning FALSE")),!1):void 0}function H(t,n,o,e,c){console.log("240 [".concat(35,"m","CALLED marchBackward()","[",39,"m")),console.log("======\nargs:\nstr=".concat(t,"\nfromIndexInclusive=").concat(n,"\nstrToMatch=").concat(o,"\nopts=").concat(JSON.stringify(e,null,4),"\nspecial=").concat(c,"\n======\n"));var r="function"==typeof o?o():o;if(n<0&&c&&"EOL"===r)return console.log("254 EARLY ENDING, return true"),r;if(console.log("259 ".concat("[".concat(33,"m","fromIndexInclusive","[",39,"m")," = ",JSON.stringify(n,null,4))),n>=t.length){if(e.relaxedApi)return!1;throw new Error("string-match-left-right/marchBackward(): [THROW_ID_203] second argument, starting index, should not be beyond the last character of the input string! Currently the first argument's last character's index is ".concat(t.length," but the second argument is beyond it:\n").concat(JSON.stringify(n,null,4)))}var a=c?1:o.length;console.log("282 starting charsToCheckCount = ".concat(a));for(var i=n+1;i--;)if(console.log("286 ".concat("[".concat(36,"m","==================================","[",39,"m")," ",i,": >>").concat(t[i],"<< [").concat(t[i].charCodeAt(0),"]")),console.log("291 ".concat(i-1,": >>").concat(t[i-1],"<< [").concat(j(t[i-1])?t[i-1].charCodeAt(0):"undefined","]")),e.trimBeforeMatching&&""===t[i].trim()){if(console.log("296 trimmed"),0===i&&c&&"EOL"===o)return console.log("299 start of string reached, matching to EOL, so return true"),!0}else{var l=t[i];if(J(t[i])&&B(t[i-1])?(l=t[i-1]+t[i],console.log("309 ".concat("[".concat(33,"m","currentCharacter","[",39,"m")," = ",JSON.stringify(l,null,4)))):B(t[i])&&J(t[i+1])&&(l=t[i]+t[i+1]),console.log("319 [".concat(32,"m","currentCharacter","[",39,"m = ",l)),console.log("322 ".concat("[".concat(33,"m","opts.trimCharsBeforeMatching","[",39,"m")," = ",JSON.stringify(e.trimCharsBeforeMatching,null,4))),console.log("329 ".concat("[".concat(33,"m","opts.trimCharsBeforeMatching.includes(currentCharacter)","[",39,"m")," = ",JSON.stringify(e.trimCharsBeforeMatching.includes(l),null,4))),!e.i&&e.trimCharsBeforeMatching.includes(l)||e.i&&e.trimCharsBeforeMatching.map(function(t){return t.toLowerCase()}).includes(l.toLowerCase())){if(console.log("342 char is in the skip list"),2===l.length&&(i-=1),c&&"EOL"===o&&0===i)return console.log("350 RETURN true because it's EOL next, exactly what we're looking for"),!0}else{console.log("357 ".concat("[".concat(33,"m","charsToCheckCount","[",39,"m")," = ",JSON.stringify(a,null,4))),console.log("363 ".concat(o[a-1])),console.log("365 ".concat(o[a-2]).concat(o[a-1]));var s=o[a-1];if(J(s)&&(s="".concat(o[a-2]).concat(o[a-1]),console.log("377 ".concat("[".concat(33,"m","charToCompareAgainst","[",39,"m")," = ",JSON.stringify(s,null,4))),a-=1,i-=1),console.log("\n* 371 [".concat(31,"m","currentCharacter","[",39,"m = ",l)),console.log("* 391 [".concat(31,"m","charToCompareAgainst","[",39,"m = ",s)),!(!e.i&&l===s||e.i&&l.toLowerCase()===s.toLowerCase()))return console.log("410 str[i = ".concat(i,"] = ").concat(JSON.stringify(t[i],null,4))),console.log("412 strToMatch[strToMatch.length - charsToCheckCount = ".concat(o.length-a,"] = ").concat(JSON.stringify(o[o.length-a],null,4))),console.log("419 THEREFORE, returning false."),!1;if((a-=1)<1)return console.log("401 all chars matched so returning i = ".concat(i,"; charsToCheckCount = ").concat(a)),i>=0?i:0;console.log("407 ".concat("[".concat(32,"m","OK. Reduced charsToCheckCount to ".concat(a),"[",39,"m"))),console.log("424 * charsToCheckCount = ".concat(JSON.stringify(a,null,4)))}}return a>0?c&&"EOL"===r?(console.log("430 charsToCheckCount = ".concat(a,";\nwent past the beginning of the string and EOL was queried to return TRUE")),!0):(console.log("435 charsToCheckCount = ".concat(a," THEREFORE, returning FALSE")),!1):void 0}function F(t,e,c,r,a){var i,l,s,h,g,u=Object.assign({},{i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],relaxedApi:!1},a);if(u.trimCharsBeforeMatching="string"==typeof(i=u.trimCharsBeforeMatching)?i.length>0?[i]:[]:i,u.trimCharsBeforeMatching=u.trimCharsBeforeMatching.map(function(t){return k(t)?t:String(t)}),u.trimCharsBeforeMatching.some(function(t,n){return t.length>1&&!x(t)&&(l=n,s=t,!0)}))throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ").concat(l," is longer than 1 character, ").concat(s.length," (equals to ").concat(s,"). Please split it into separate characters and put into array as separate elements."));if(!k(e)){if(u.relaxedApi)return!1;throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_01] the first argument should be a string. Currently it's of a type: ").concat(n(e),", equal to:\n").concat(JSON.stringify(e,null,4)))}if(0===e.length){if(u.relaxedApi)return!1;throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_02] the first argument should be a non-empty string. Currently it's empty!"))}if(!o(c,{includeZero:!0})){if(u.relaxedApi)return!1;throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ").concat(n(c),", equal to:\n").concat(JSON.stringify(c,null,4)))}if(k(r))console.log("508"),h=[r];else if(I(r))console.log("511"),h=r;else if(j(r)){if(!A(r))throw console.log("526"),new Error("string-match-left-right/".concat(t,"(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ").concat(n(r),", equal to:\n").concat(JSON.stringify(r,null,4)));console.log("517"),(h=[]).push(r),console.log("521 whatToMatch = ".concat(h,"; Array.isArray(whatToMatch) = ").concat(Array.isArray(h),"; whatToMatch.length = ").concat(h.length))}else console.log("514"),h=r;if(console.log("\n\n"),console.log("538 whatToMatch = ".concat(h,"; typeof whatToMatch = ").concat(n(h))),j(a)&&!f(a))throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type \"").concat(n(a),'", and equal to:\n').concat(JSON.stringify(a,null,4)));if(!j(h)||!I(h)||I(h)&&!h.length||I(h)&&1===h.length&&k(h[0])&&0===h[0].trim().length){if("function"==typeof u.cb){var m;console.log("566");var d=c;if("matchRight"===t&&B(e[c])&&J(e[c+1])&&(d+=1),"matchLeftIncl"!==t&&"matchRight"!==t||(d+=1),t.startsWith("matchLeft")){for(var y=d;y--;)if(!J(e[y])||!B(e[y-1])){var p=e[y];if(B(e[y])&&J(e[y+1])&&(p=e[y]+e[y+1]),(!u.trimBeforeMatching||u.trimBeforeMatching&&void 0!==p&&""!==p.trim())&&(0===u.trimCharsBeforeMatching.length||void 0!==p&&!u.trimCharsBeforeMatching.includes(p))){m=y;break}J(e[y-1])&&B(e[y-2])&&(y-=1)}}else if(t.startsWith("matchRight"))for(var O=d;O<e.length;O++){var C=e[O];if(B(e[O])&&J(e[O+1])&&(C=e[O]+e[O+1]),console.log("622 ".concat("[".concat(33,"m","currentChar","[",39,"m")," = ",JSON.stringify(C,null,4))),(!u.trimBeforeMatching||u.trimBeforeMatching&&""!==C.trim())&&(0===u.trimCharsBeforeMatching.length||!u.trimCharsBeforeMatching.includes(C))){console.log("635 breaking!"),m=O;break}B(e[O])&&J(e[O+1])&&(O+=1)}if(void 0===m)return console.log("647 returning false"),!1;var b=e[m];B(e[m])&&J(e[m+1])&&(b=e[m]+e[m+1]),J(e[m])&&B(e[m-1])&&(b=e[m-1]+e[m],m-=1);var w,T=m+1;return B(e[m])&&J(e[m+1])&&(T+=1),T&&T>0&&(w=e.slice(0,T)),t.startsWith("matchLeft")?(console.log("681"),u.cb(b,w,m)):(m&&m>0&&(w=e.slice(m)),console.log("689"),u.cb(b,w,m))}var v="";throw j(a)||(v=" More so, the whole options object, the fourth input argument, is missing!"),new Error("string-match-left-right/".concat(t,'(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!').concat(v))}if(t.startsWith("matchLeft")){for(var S=0,E=h.length;S<E;S++){console.log("\n689 matchLeft() LOOP ".concat(S," ","[".concat(32,"m","=================================================================================","[",39,"m")," \n\n")),g="function"==typeof h[S],console.log("715 special = ".concat(g)),console.log("\n\n\n🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥"),console.log("721 whatToMatch no. ".concat(S," = ").concat(h[S]," (type ").concat(n(h[S]),")")),console.log("special = ".concat(g)),console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");var M=h[S],L=c;"matchLeft"===t&&(x(e[S-1])&&x(e[S-2])?L-=2:L-=1),console.log("760 [".concat(33,"m","marchBackward() called with:","[",39,"m\n* startingPosition = ",JSON.stringify(L,null,4),'\n* whatToMatchVal = "').concat(M,'"\n')),console.log("\n\n\n\n\n\n"),console.log("768 ███████████████████████████████████████ marchBackward() STARTS BELOW ███████████████████████████████████████");var N=H(e,L,M,u,g);if(console.log("778 ███████████████████████████████████████ marchBackward() ENDED ABOVE ███████████████████████████████████████\n\n\n\n\n\n"),console.log("781 [".concat(33,"m","found","[",39,"m = ",JSON.stringify(N,null,4))),N&&g&&"function"==typeof M&&"EOL"===M())return console.log("796 returning whatToMatchVal() = ".concat(M())),!(!M()||u.cb&&!u.cb(F,D,R))&&M();var R=void 0,F=void 0,D="";if(j(N)&&N>0&&(F=e[R=N-1],D=e.slice(0,N)),J(e[R])&&j(e[R-1])&&B(e[R-1])&&(console.log("836 the character in front is low surrogate"),F=e[(R-=1)-1]+e[R],console.log("".concat("[".concat(33,"m","fullCharacterInFront","[",39,"m")," = ",JSON.stringify(F,null,4)))),B(e[R])&&j(e[R+1])&&J(e[R+1])&&(console.log("854 adding low surrogate to str[indexOfTheCharacterInFront]"),F=e[R]+e[R+1],console.log("".concat("[".concat(33,"m","fullCharacterInFront","[",39,"m")," = ",JSON.stringify(F,null,4))),D=e.slice(0,R+2)),!1!==N&&(!u.cb||u.cb(F,D,R)))return M}return!1}for(var W=0,P=h.length;W<P;W++){g="function"==typeof h[W],console.log("\n\n\n🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥"),console.log("889 whatToMatch no. ".concat(W," = ").concat(h[W])),console.log("special = ".concat(g)),console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");var q=h[W],Z=c+("matchRight"===t?1:0);console.log("901 [".concat(32,"m","startingPosition","[",39,"m = ",Z)),"matchRight"===t&&B(e[Z-1])&&J(e[Z])&&(Z+=1,console.log("910 +1: [".concat(32,"m","startingPosition","[",39,"m = ",Z)));var V=_(e,Z,q,u,g);if(console.log("922 ".concat("[".concat(33,"m","found","[",39,"m")," = ",JSON.stringify(V,null,4))),V&&g&&"function"==typeof q&&"EOL"===q()){console.log("937 returning whatToMatchVal() = ".concat(q()));return!(!q()||u.cb&&!u.cb(void 0,void 0,void 0))&&q()}var U=void 0,G=void 0;j(V)&&j(e[V+q.length-1])&&(G=e[U=V+q.length],B(e[U])&&J(e[U+1])&&(G=e[U]+e[U+1])),console.log("\n808 ".concat("[".concat(33,"m","fullCharacterAfter","[",39,"m")," = ",JSON.stringify(G,null,4))),console.log("983 ".concat("[".concat(33,"m","indexOfTheCharacterAfter","[",39,"m")," = ",JSON.stringify(U,null,4),"\n")),console.log("990 ".concat("[".concat(33,"m","whatToMatchVal","[",39,"m")," = ",JSON.stringify(q,null,4)," (").concat(n(q),")"));var K=void 0;if(j(U)&&U>=0&&(K=e.slice(U)),!1!==V&&(!u.cb||u.cb(G,K,U)))return q}return!1}t.matchLeft=function(t,n,o,e){return F("matchLeft",t,n,o,e)},t.matchLeftIncl=function(t,n,o,e){return F("matchLeftIncl",t,n,o,e)},t.matchRight=function(t,n,o,e){return F("matchRight",t,n,o,e)},t.matchRightIncl=function(t,n,o,e){return F("matchRightIncl",t,n,o,e)},Object.defineProperty(t,"__esModule",{value:!0})});
