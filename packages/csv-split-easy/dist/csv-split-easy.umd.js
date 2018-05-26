!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.csvSplitEasy=t()}(this,function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=function(t,r){if(r){if("object"!==(void 0===r?"undefined":e(r)))throw new TypeError(String(r)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in r){if("boolean"!=typeof r.includeZero)throw new TypeError(String(r.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(r.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},r=function(e,t){if("string"!=typeof e)return!1;if(t&&"includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(e)}return/^[1-9]\d*(\.0+)?$/.test(e)},n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(e,t){return e(t={exports:{}},t.exports),t.exports}var i=o(function(e,t){(t=e.exports=function(e){return e+t.suffix(+e)}).suffix=function(e){return 1===Math.floor(e/10)?"th":e%10==1?"st":e%10==2?"nd":e%10==3?"rd":"th"}}),s=(i.suffix,"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}),a=Array.isArray;var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=o(function(e,t){var r,o,i,s,a,c,l,f,y,p,m,h,d,g,b,v,w,S,O,_;e.exports=(r="function"==typeof Promise,o="object"===("undefined"==typeof self?"undefined":u(self))?self:n,i="undefined"!=typeof Symbol,s="undefined"!=typeof Map,a="undefined"!=typeof Set,c="undefined"!=typeof WeakMap,l="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,y=i&&void 0!==Symbol.iterator,p=i&&void 0!==Symbol.toStringTag,m=a&&"function"==typeof Set.prototype.entries,h=s&&"function"==typeof Map.prototype.entries,d=m&&Object.getPrototypeOf((new Set).entries()),g=h&&Object.getPrototypeOf((new Map).entries()),b=y&&"function"==typeof Array.prototype[Symbol.iterator],v=b&&Object.getPrototypeOf([][Symbol.iterator]()),w=y&&"function"==typeof String.prototype[Symbol.iterator],S=w&&Object.getPrototypeOf(""[Symbol.iterator]()),O=8,_=-1,function(e){var t=void 0===e?"undefined":u(e);if("object"!==t)return t;if(null===e)return"null";if(e===o)return"global";if(Array.isArray(e)&&(!1===p||!(Symbol.toStringTag in e)))return"Array";if("object"===("undefined"==typeof window?"undefined":u(window))&&null!==window){if("object"===u(window.location)&&e===window.location)return"Location";if("object"===u(window.document)&&e===window.document)return"Document";if("object"===u(window.navigator)){if("object"===u(window.navigator.mimeTypes)&&e===window.navigator.mimeTypes)return"MimeTypeArray";if("object"===u(window.navigator.plugins)&&e===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"===u(window.HTMLElement))&&e instanceof window.HTMLElement){if("BLOCKQUOTE"===e.tagName)return"HTMLQuoteElement";if("TD"===e.tagName)return"HTMLTableDataCellElement";if("TH"===e.tagName)return"HTMLTableHeaderCellElement"}}var n=p&&e[Symbol.toStringTag];if("string"==typeof n)return n;var i=Object.getPrototypeOf(e);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":r&&i===Promise.prototype?"Promise":a&&i===Set.prototype?"Set":s&&i===Map.prototype?"Map":l&&i===WeakSet.prototype?"WeakSet":c&&i===WeakMap.prototype?"WeakMap":f&&i===DataView.prototype?"DataView":s&&i===g?"Map Iterator":a&&i===d?"Set Iterator":b&&i===v?"Array Iterator":w&&i===S?"String Iterator":null===i?"Object":Object.prototype.toString.call(e).slice(O,_)})});function l(e,t,r){if(t!=t)return function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,y,r);for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}function f(e,t,r,n){for(var o=r-1,i=e.length;++o<i;)if(n(e[o],t))return o;return-1}function y(e){return e!=e}var p=Array.prototype.splice;function m(e,t,r,n){var o,i=n?f:l,s=-1,a=t.length,u=e;for(e===t&&(t=function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(t)),r&&(u=function(e,t){for(var r=-1,n=e?e.length:0,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}(e,(o=r,function(e){return o(e)})));++s<a;)for(var c=0,y=t[s],m=r?r(y):y;(c=i(u,m,c,n))>-1;)u!==e&&p.call(u,c,1),p.call(e,c,1);return e}var h=function(e,t){return e&&e.length&&t&&t.length?m(e,t):e},d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g="__lodash_hash_undefined__",b=9007199254740991,v="[object Function]",w="[object GeneratorFunction]",S=/^\[object .+?Constructor\]$/,O="object"==d(n)&&n&&n.Object===Object&&n,_="object"==("undefined"==typeof self?"undefined":d(self))&&self&&self.Object===Object&&self,T=O||_||Function("return this")();function j(e,t){return!!(e?e.length:0)&&function(e,t,r){if(t!=t)return function(e,t,r,n){var o=e.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,E,r);var n=r-1,o=e.length;for(;++n<o;)if(e[n]===t)return n;return-1}(e,t,0)>-1}function N(e,t,r){for(var n=-1,o=e?e.length:0;++n<o;)if(r(t,e[n]))return!0;return!1}function k(e,t){for(var r=-1,n=e?e.length:0,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function E(e){return e!=e}function A(e){return function(t){return e(t)}}function I(e,t){return e.has(t)}var D,W,H,R=Array.prototype,K=Function.prototype,x=Object.prototype,P=T["__core-js_shared__"],C=(D=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+D:"",J=K.toString,Z=x.hasOwnProperty,M=x.toString,V=RegExp("^"+J.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),F=R.splice,q=Math.max,L=Math.min,B=re(T,"Map"),U=re(Object,"create");function $(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function z(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Q(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function G(e){var t=-1,r=e?e.length:0;for(this.__data__=new Q;++t<r;)this.add(e[t])}function X(e,t){for(var r,n,o=e.length;o--;)if((r=e[o][0])===(n=t)||r!=r&&n!=n)return o;return-1}function Y(e){return!(!oe(e)||C&&C in e)&&(ne(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?V:S).test(function(e){if(null!=e){try{return J.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e))}function ee(e){return function(e){return function(e){return!!e&&"object"==(void 0===e?"undefined":d(e))}(e)&&function(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=b}(e.length)&&!ne(e)}(e)}(e)?e:[]}function te(e,t){var r,n,o=e.__data__;return("string"==(n=void 0===(r=t)?"undefined":d(r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function re(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return Y(r)?r:void 0}function ne(e){var t=oe(e)?M.call(e):"";return t==v||t==w}function oe(e){var t=void 0===e?"undefined":d(e);return!!e&&("object"==t||"function"==t)}$.prototype.clear=function(){this.__data__=U?U(null):{}},$.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},$.prototype.get=function(e){var t=this.__data__;if(U){var r=t[e];return r===g?void 0:r}return Z.call(t,e)?t[e]:void 0},$.prototype.has=function(e){var t=this.__data__;return U?void 0!==t[e]:Z.call(t,e)},$.prototype.set=function(e,t){return this.__data__[e]=U&&void 0===t?g:t,this},z.prototype.clear=function(){this.__data__=[]},z.prototype.delete=function(e){var t=this.__data__,r=X(t,e);return!(r<0||(r==t.length-1?t.pop():F.call(t,r,1),0))},z.prototype.get=function(e){var t=this.__data__,r=X(t,e);return r<0?void 0:t[r][1]},z.prototype.has=function(e){return X(this.__data__,e)>-1},z.prototype.set=function(e,t){var r=this.__data__,n=X(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},Q.prototype.clear=function(){this.__data__={hash:new $,map:new(B||z),string:new $}},Q.prototype.delete=function(e){return te(this,e).delete(e)},Q.prototype.get=function(e){return te(this,e).get(e)},Q.prototype.has=function(e){return te(this,e).has(e)},Q.prototype.set=function(e,t){return te(this,e).set(e,t),this},G.prototype.add=G.prototype.push=function(e){return this.__data__.set(e,g),this},G.prototype.has=function(e){return this.__data__.has(e)};var ie=(W=function(e){var t=k(e,ee);return t.length&&t[0]===e[0]?function(e,t,r){for(var n=r?N:j,o=e[0].length,i=e.length,s=i,a=Array(i),u=1/0,c=[];s--;){var l=e[s];s&&t&&(l=k(l,A(t))),u=L(l.length,u),a[s]=!r&&(t||o>=120&&l.length>=120)?new G(s&&l):void 0}l=e[0];var f=-1,y=a[0];e:for(;++f<o&&c.length<u;){var p=l[f],m=t?t(p):p;if(p=r||0!==p?p:0,!(y?I(y,m):n(c,m,r))){for(s=i;--s;){var h=a[s];if(!(h?I(h,m):n(e[s],m,r)))continue e}y&&y.push(m),c.push(p)}}return c}(t):[]},H=q(void 0===H?W.length-1:H,0),function(){for(var e=arguments,t=-1,r=q(e.length-H,0),n=Array(r);++t<r;)n[t]=e[H+t];t=-1;for(var o=Array(H+1);++t<H;)o[t]=e[t];return o[H]=n,function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}(W,this,o)});function se(e){return"string"==typeof e?e.length>0?[e]:[]:e}function ae(e,t,r){function n(e){return null!=e}function o(e){return"boolean"===c(e)}function i(e){return"string"===c(e)}function s(e){return"Object"===c(e)}var a=["any","anything","every","everything","all","whatever","whatevs"],u=Array.isArray;if(0===arguments.length)throw new Error("check-types-mini: [THROW_ID_01] Missing all arguments!");if(1===arguments.length)throw new Error("check-types-mini: [THROW_ID_02] Missing second argument!");var l=s(t)?t:{},f={ignoreKeys:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"},y=void 0;if(!i((y=n(r)&&s(r)?Object.assign({},f,r):Object.assign({},f)).msg))throw new Error("check-types-mini: [THROW_ID_03] opts.msg must be string! Currently it's: "+c(y.msg)+", equal to "+JSON.stringify(y.msg,null,4));if(y.msg=y.msg.trim(),":"===y.msg[y.msg.length-1]&&(y.msg=y.msg.slice(0,y.msg.length-1)),!i(y.optsVarName))throw new Error("check-types-mini: [THROW_ID_04] opts.optsVarName must be string! Currently it's: "+c(y.optsVarName)+", equal to "+JSON.stringify(y.optsVarName,null,4));if(y.ignoreKeys=se(y.ignoreKeys),y.acceptArraysIgnore=se(y.acceptArraysIgnore),!u(y.ignoreKeys))throw new TypeError("check-types-mini: [THROW_ID_05] opts.ignoreKeys should be an array, currently it's: "+c(y.ignoreKeys));if(!o(y.acceptArrays))throw new TypeError("check-types-mini: [THROW_ID_06] opts.acceptArrays should be a Boolean, currently it's: "+c(y.acceptArrays));if(!u(y.acceptArraysIgnore))throw new TypeError("check-types-mini: [THROW_ID_07] opts.acceptArraysIgnore should be an array, currently it's: "+c(y.acceptArraysIgnore));if(!o(y.enforceStrictKeyset))throw new TypeError("check-types-mini: [THROW_ID_08] opts.enforceStrictKeyset should be a Boolean, currently it's: "+c(y.enforceStrictKeyset));if(Object.keys(y.schema).forEach(function(e){u(y.schema[e])||(y.schema[e]=[y.schema[e]]),y.schema[e]=y.schema[e].map(String).map(function(e){return e.toLowerCase()}).map(function(e){return e.trim()})}),y.enforceStrictKeyset)if(n(y.schema)&&Object.keys(y.schema).length>0){if(0!==h(Object.keys(e),Object.keys(l).concat(Object.keys(y.schema))).length)throw new TypeError(y.msg+": "+y.optsVarName+".enforceStrictKeyset is on and the following keys are not covered by schema and/or reference objects: "+JSON.stringify(h(Object.keys(e),Object.keys(l).concat(Object.keys(y.schema))),null,4))}else{if(!(n(l)&&Object.keys(l).length>0))throw new TypeError(y.msg+": Both "+y.optsVarName+".schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!");if(0!==h(Object.keys(e),Object.keys(l)).length)throw new TypeError(y.msg+": The input object has keys that are not covered by reference object: "+JSON.stringify(h(Object.keys(e),Object.keys(l)),null,4));if(0!==h(Object.keys(l),Object.keys(e)).length)throw new TypeError(y.msg+": The reference object has keys that are not present in the input object: "+JSON.stringify(h(Object.keys(l),Object.keys(e)),null,4))}Object.keys(e).forEach(function(t){if(n(y.schema)&&Object.prototype.hasOwnProperty.call(y.schema,t)){if(y.schema[t]=se(y.schema[t]).map(String).map(function(e){return e.toLowerCase()}),!(ie(y.schema[t],a).length||(!0===e[t]||!1===e[t]||y.schema[t].includes(c(e[t]).toLowerCase()))&&(!0!==e[t]&&!1!==e[t]||y.schema[t].includes(String(e[t]))||y.schema[t].includes("boolean")))){if(!u(e[t])||!y.acceptArrays)throw new TypeError(y.msg+": "+y.optsVarName+"."+t+" was customised to "+JSON.stringify(e[t],null,4)+" which is not among the allowed types in schema ("+y.schema[t]+") but "+c(e[t]));for(var r=0,o=e[t].length;r<o;r++)if(!y.schema[t].includes(c(e[t][r]).toLowerCase()))throw new TypeError(y.msg+": "+y.optsVarName+"."+t+" is of type "+c(e[t][r]).toLowerCase()+", but only the following are allowed in "+y.optsVarName+".schema: "+y.schema[t])}}else if(n(l)&&Object.prototype.hasOwnProperty.call(l,t)&&c(e[t])!==c(l[t])&&!y.ignoreKeys.includes(t)){if(!y.acceptArrays||!u(e[t])||y.acceptArraysIgnore.includes(t))throw new TypeError(y.msg+": "+y.optsVarName+"."+t+" was customised to "+JSON.stringify(e[t],null,4)+" which is not "+c(l[t])+" but "+c(e[t]));if(!e[t].every(function(e){return c(e)===c(l[t])}))throw new TypeError(y.msg+": "+y.optsVarName+"."+t+" was customised to be array, but not all of its elements are "+c(l[t])+"-type")}})}var ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ce="function"==typeof Symbol&&"symbol"===ue(Symbol.iterator)?function(e){return void 0===e?"undefined":ue(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":ue(e)},le=Array.isArray;function fe(e){if(!Array.isArray(e))return e;for(var r=function(e,r){if(!le(e))throw new TypeError("ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: "+(void 0===e?"undefined":ce(e))+", equal to: "+JSON.stringify(e,null,4));if(0===e.length)return e;var n={strictlyTwoElementsInRangeArrays:!1},o=Object.assign({},n,r);ae(o,n,{msg:"ranges-sort: [THROW_ID_02*]"});var s=void 0,a=void 0;if(o.strictlyTwoElementsInRangeArrays&&!e.every(function(e,t){return 2===e.length||(s=t,a=e.length,!1)}))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, "+i(s)+" range ("+JSON.stringify(e[s],null,4)+") has not two but "+a+" elements!");if(!e.every(function(e,r){return!(!t(e[0],{includeZero:!0})||!t(e[1],{includeZero:!0}))||(s=r,!1)}))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, "+i(s)+" range ("+JSON.stringify(e[s],null,4)+") does not consist of only natural numbers!");return Array.from(e).sort(function(e,t){return e[0]===t[0]?e[1]<t[1]?-1:e[1]>t[1]?1:0:e[0]<t[0]?-1:1})}(e),n=r.length-1;n>0;n--)(r[n][0]<=r[n-1][0]||r[n][0]<=r[n-1][1])&&(r[n-1][0]=Math.min(r[n][0],r[n-1][0]),r[n-1][1]=Math.max(r[n][1],r[n-1][1]),void 0!==r[n][2]&&(r[n-1][0]>=r[n][0]||r[n-1][1]<=r[n][1])&&null!==r[n-1][2]&&(null===r[n][2]&&null!==r[n-1][2]?r[n-1][2]=null:void 0!==r[n-1][2]?r[n-1][2]+=r[n][2]:r[n-1][2]=r[n][2]),r.splice(n,1),n=r.length);return r}function ye(e){if("string"==typeof e){if(0===e.length)return"";if(""===e.trim())return e.includes("\n")?"\n":" ";var t="";if(""===e[0].trim()){t=" ";for(var r=!1,n=0,o=e.length;n<o&&("\n"===e[n]&&(r=!0),""===e[n].trim());n++);r&&(t="\n")}var i="";if(""===e.slice(-1).trim()){i=" ";for(var s=!1,a=e.length;a--&&("\n"===e[a]&&(s=!0),""===e[a].trim()););s&&(i="\n")}return t+e.trim()+i}return e}var pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},me=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function he(e){return null!=e}var de=Array.isArray;function ge(e){return"string"==typeof e}function be(e){return r(e,{includeZero:!0})?parseInt(e,10):e}var ve=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var r={limitToBeAddedWhitespace:!1},n=Object.assign({},r,t);!function(e,t,r){function n(e){return null!=e}function o(e){return"boolean"===c(e)}function i(e){return"string"===c(e)}function s(e){return"Object"===c(e)}var a=["any","anything","every","everything","all","whatever","whatevs"],u=Array.isArray;if(0===arguments.length)throw new Error("check-types-mini: [THROW_ID_01] Missing all arguments!");if(1===arguments.length)throw new Error("check-types-mini: [THROW_ID_02] Missing second argument!");var l=s(t)?t:{},f={ignoreKeys:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"},y=void 0;if(!i((y=n(r)&&s(r)?Object.assign({},f,r):Object.assign({},f)).msg))throw new Error("check-types-mini: [THROW_ID_03] opts.msg must be string! Currently it's: "+c(y.msg)+", equal to "+JSON.stringify(y.msg,null,4));if(y.msg=y.msg.trim(),":"===y.msg[y.msg.length-1]&&(y.msg=y.msg.slice(0,y.msg.length-1)),!i(y.optsVarName))throw new Error("check-types-mini: [THROW_ID_04] opts.optsVarName must be string! Currently it's: "+c(y.optsVarName)+", equal to "+JSON.stringify(y.optsVarName,null,4));if(y.ignoreKeys=se(y.ignoreKeys),y.acceptArraysIgnore=se(y.acceptArraysIgnore),!u(y.ignoreKeys))throw new TypeError("check-types-mini: [THROW_ID_05] opts.ignoreKeys should be an array, currently it's: "+c(y.ignoreKeys));if(!o(y.acceptArrays))throw new TypeError("check-types-mini: [THROW_ID_06] opts.acceptArrays should be a Boolean, currently it's: "+c(y.acceptArrays));if(!u(y.acceptArraysIgnore))throw new TypeError("check-types-mini: [THROW_ID_07] opts.acceptArraysIgnore should be an array, currently it's: "+c(y.acceptArraysIgnore));if(!o(y.enforceStrictKeyset))throw new TypeError("check-types-mini: [THROW_ID_08] opts.enforceStrictKeyset should be a Boolean, currently it's: "+c(y.enforceStrictKeyset));if(Object.keys(y.schema).forEach(function(e){u(y.schema[e])||(y.schema[e]=[y.schema[e]]),y.schema[e]=y.schema[e].map(String).map(function(e){return e.toLowerCase()}).map(function(e){return e.trim()})}),y.enforceStrictKeyset)if(n(y.schema)&&Object.keys(y.schema).length>0){if(0!==h(Object.keys(e),Object.keys(l).concat(Object.keys(y.schema))).length)throw new TypeError(y.msg+": "+y.optsVarName+".enforceStrictKeyset is on and the following keys are not covered by schema and/or reference objects: "+JSON.stringify(h(Object.keys(e),Object.keys(l).concat(Object.keys(y.schema))),null,4))}else{if(!(n(l)&&Object.keys(l).length>0))throw new TypeError(y.msg+": Both "+y.optsVarName+".schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!");if(0!==h(Object.keys(e),Object.keys(l)).length)throw new TypeError(y.msg+": The input object has keys that are not covered by reference object: "+JSON.stringify(h(Object.keys(e),Object.keys(l)),null,4));if(0!==h(Object.keys(l),Object.keys(e)).length)throw new TypeError(y.msg+": The reference object has keys that are not present in the input object: "+JSON.stringify(h(Object.keys(l),Object.keys(e)),null,4))}Object.keys(e).forEach(function(t){if(n(y.schema)&&Object.prototype.hasOwnProperty.call(y.schema,t)){if(y.schema[t]=se(y.schema[t]).map(String).map(function(e){return e.toLowerCase()}),!(ie(y.schema[t],a).length||(!0===e[t]||!1===e[t]||y.schema[t].includes(c(e[t]).toLowerCase()))&&(!0!==e[t]&&!1!==e[t]||y.schema[t].includes(String(e[t]))||y.schema[t].includes("boolean")))){if(!u(e[t])||!y.acceptArrays)throw new TypeError(y.msg+": "+y.optsVarName+"."+t+" was customised to "+JSON.stringify(e[t],null,4)+" which is not among the allowed types in schema ("+y.schema[t]+") but "+c(e[t]));for(var r=0,o=e[t].length;r<o;r++)if(!y.schema[t].includes(c(e[t][r]).toLowerCase()))throw new TypeError(y.msg+": "+y.optsVarName+"."+t+" is of type "+c(e[t][r]).toLowerCase()+", but only the following are allowed in "+y.optsVarName+".schema: "+y.schema[t])}}else if(n(l)&&Object.prototype.hasOwnProperty.call(l,t)&&c(e[t])!==c(l[t])&&!y.ignoreKeys.includes(t)){if(!y.acceptArrays||!u(e[t])||y.acceptArraysIgnore.includes(t))throw new TypeError(y.msg+": "+y.optsVarName+"."+t+" was customised to "+JSON.stringify(e[t],null,4)+" which is not "+c(l[t])+" but "+c(e[t]));if(!e[t].every(function(e){return c(e)===c(l[t])}))throw new TypeError(y.msg+": "+y.optsVarName+"."+t+" was customised to be array, but not all of its elements are "+c(l[t])+"-type")}})}(n,r,{msg:"string-slices-array-push: [THROW_ID_02*]"}),this.opts=n}return me(e,[{key:"add",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){throw new Error("string-slices-array-push/Slices/add(): [THROW_ID_01] Missing "+i(e)+" input parameter!")}(1),n=this,o=arguments[1],s=arguments[2],a=arguments.length,u=Array(a>3?a-3:0),c=3;c<a;c++)u[c-3]=arguments[c];if(u.length>0)throw new TypeError("string-slices-array-push/Slices/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: "+JSON.stringify(u,null,4));if(null!==e||void 0!==o||void 0!==s){var l=r(e,{includeZero:!0})?parseInt(e,10):e,f=r(o,{includeZero:!0})?parseInt(o,10):o;if(de(e)&&!he(o)){var y=void 0,p=void 0;if(e.length>0){if(!e.every(function(e,t){return!!de(e)||(y=t,p=e,!1)}))throw new TypeError("string-slices-array-push/Slices/add(): [THROW_ID_07] first argument was given as array but it contains not only range arrays. For example, at index "+y+" we have "+(void 0===p?"undefined":pe(p))+"-type value:\n"+JSON.stringify(p,null,4)+".");e.forEach(function(e,r){if(!t(be(e[0]),{includeZero:!0}))throw new TypeError("string-slices-array-push/Slices/add(): [THROW_ID_06] The "+i(r)+" ranges array's starting range index, an element at its zero'th index, is not a natural number! It's equal to: "+e[0]+".");if(!t(be(e[1]),{includeZero:!0}))throw new TypeError("string-slices-array-push/Slices/add(): [THROW_ID_05] The "+i(r)+" ranges array's ending range index, an element at its first index, is not a natural number! It's equal to: "+e[1]+".");if(he(e[2])&&!ge(e[2]))throw new TypeError("string-slices-array-push/Slices/add(): [THROW_ID_04] The "+i(r)+' ranges array\'s "to add" value is not string but '+pe(e[2])+"! It's equal to: "+e[2]+".");n.add.apply(n,function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(e))})}}else{if(!t(l,{includeZero:!0})||!t(f,{includeZero:!0}))throw new TypeError('string-slices-array-push/Slices/add(): [THROW_ID_09] "from" value, first input argument, must be a natural number or zero! Currently it\'s equal to: '+JSON.stringify(l,null,4));if(he(s)&&!ge(s))throw new TypeError("string-slices-array-push/Slices/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but "+(void 0===s?"undefined":pe(s))+", equal to:\n"+JSON.stringify(s,null,4));if(void 0!==this.slices&&l===this.last()[1]){if(this.last()[1]=f,null!==this.last()[2]&&he(s)){var m=he(this.last()[2])&&this.last()[2].length>0?this.last()[2]+s:s;this.opts.limitToBeAddedWhitespace&&(m=ye(m)),this.last()[2]=m}}else this.slices||(this.slices=[]),this.slices.push(void 0!==s?[l,f,this.opts.limitToBeAddedWhitespace?ye(s):s]:[l,f])}}}},{key:"push",value:function(e,t,r){for(var n=arguments.length,o=Array(n>3?n-3:0),i=3;i<n;i++)o[i-3]=arguments[i];this.add.apply(this,[e,t,r].concat(o))}},{key:"current",value:function(){return null!=this.slices?(this.slices=fe(this.slices),this.opts.limitToBeAddedWhitespace?this.slices.map(function(e){return he(e[2])?[e[0],e[1],ye(e[2])]:e}):this.slices):null}},{key:"wipe",value:function(){this.slices=void 0}},{key:"last",value:function(){return void 0!==this.slices&&Array.isArray(this.slices)?this.slices[this.slices.length-1]:null}}]),e}(),we="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Se="[object Object]";var Oe=Function.prototype,_e=Object.prototype,Te=Oe.toString,je=_e.hasOwnProperty,Ne=Te.call(Object),ke=_e.toString,Ee=function(e,t){return function(r){return e(t(r))}}(Object.getPrototypeOf,Object);var Ae=function(e){if(!function(e){return!!e&&"object"==(void 0===e?"undefined":we(e))}(e)||ke.call(e)!=Se||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=Ee(e);if(null===t)return!0;var r=je.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Te.call(r)==Ne},Ie=o(function(e,t){!function(r){function n(e){return"number"==typeof e&&!isNaN(e)||!!(e=(e||"").toString().trim())&&!isNaN(e)}e.exports&&(t=e.exports=n),t.isNumeric=n}()}),De=(Ie.isNumeric,"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}),We=1/0,He="[object Symbol]",Re=/^\s+|\s+$/g,Ke="[\\ud800-\\udfff]",xe="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",Pe="\\ud83c[\\udffb-\\udfff]",Ce="[^\\ud800-\\udfff]",Je="(?:\\ud83c[\\udde6-\\uddff]){2}",Ze="[\\ud800-\\udbff][\\udc00-\\udfff]",Me="(?:"+xe+"|"+Pe+")"+"?",Ve="[\\ufe0e\\ufe0f]?"+Me+("(?:\\u200d(?:"+[Ce,Je,Ze].join("|")+")[\\ufe0e\\ufe0f]?"+Me+")*"),Fe="(?:"+[Ce+xe+"?",xe,Je,Ze,Ke].join("|")+")",qe=RegExp(Pe+"(?="+Pe+")|"+Fe+Ve,"g"),Le=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),Be="object"==De(n)&&n&&n.Object===Object&&n,Ue="object"==("undefined"==typeof self?"undefined":De(self))&&self&&self.Object===Object&&self,$e=Be||Ue||Function("return this")();function ze(e,t,r){if(t!=t)return function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,Qe,r);for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}function Qe(e){return e!=e}function Ge(e){return function(e){return Le.test(e)}(e)?function(e){return e.match(qe)||[]}(e):function(e){return e.split("")}(e)}var Xe=Object.prototype.toString,Ye=$e.Symbol,et=Ye?Ye.prototype:void 0,tt=et?et.toString:void 0;function rt(e){if("string"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":De(e))||function(e){return!!e&&"object"==(void 0===e?"undefined":De(e))}(e)&&Xe.call(e)==He}(e))return tt?tt.call(e):"";var t=e+"";return"0"==t&&1/e==-We?"-0":t}function nt(e,t,r){var n=e.length;return r=void 0===r?n:r,!t&&r>=n?e:function(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(r=r>o?o:r)<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var i=Array(o);++n<o;)i[n]=e[n+t];return i}(e,t,r)}var ot=function(e,t,r){var n;if((e=null==(n=e)?"":rt(n))&&(r||void 0===t))return e.replace(Re,"");if(!e||!(t=rt(t)))return e;var o=Ge(e),i=Ge(t);return nt(o,function(e,t){for(var r=-1,n=e.length;++r<n&&ze(t,e[r],0)>-1;);return r}(o,i),function(e,t){for(var r=e.length;r--&&ze(t,e[r],0)>-1;);return r}(o,i)+1).join("")},it="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},st="function"==typeof Symbol&&"symbol"===it(Symbol.iterator)?function(e){return void 0===e?"undefined":it(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":it(e)};function at(e,n){var o=!0,u=[".",",","'"," "],c=void 0;if("string"!=typeof e)throw new TypeError("string-remove-thousand-separators/remSep(): [THROW_ID_01] Input must be string! Currently it's: "+(void 0===e?"undefined":st(e))+", equal to:\n"+JSON.stringify(e,null,4));if(null!=n&&!Ae(n))throw new TypeError("string-remove-thousand-separators/remSep(): [THROW_ID_02] Options object must be a plain object! Currently it's: "+(void 0===n?"undefined":st(n))+", equal to:\n"+JSON.stringify(n,null,4));var l={removeThousandSeparatorsFromNumbers:!0,padSingleDecimalPlaceNumbers:!0,forceUKStyle:!1},f=Object.assign({},l,n);ae(f,l,{msg:"string-remove-thousand-separators/remSep(): [THROW_ID_03*]"});var y=ot(e.trim(),'"');if(""===y)return y;for(var p=new ve,m=0,h=y.length;m<h;m++){if(f.removeThousandSeparatorsFromNumbers&&""===y[m].trim()&&p.add(m,m+1),f.removeThousandSeparatorsFromNumbers&&"'"===y[m]&&(p.add(m,m+1),"'"===y[m+1])){o=!1;break}if(u.includes(y[m])){if(void 0!==y[m+1]&&Ie(y[m+1]))if(void 0!==y[m+2]){if(!Ie(y[m+2])){o=!1;break}if(void 0!==y[m+3]){if(!Ie(y[m+3])){o=!1;break}if(void 0!==y[m+4]&&Ie(y[m+4])){o=!1;break}if(f.removeThousandSeparatorsFromNumbers&&p.add(m,m+1),c){if(y[m]!==c){o=!1;break}}else c=y[m]}else f.removeThousandSeparatorsFromNumbers&&f.forceUKStyle&&","===y[m]&&p.add(m,m+1,".")}else f.forceUKStyle&&","===y[m]&&p.add(m,m+1,"."),f.padSingleDecimalPlaceNumbers&&p.add(m+2,m+2,"0")}else if(!Ie(y[m])){o=!1;break}}return o&&p.current()?function(e,n){if(0===arguments.length)throw new Error("string-replace-slices-array/replaceSlicesArr(): [THROW_ID_01] inputs missing!");if("string"!=typeof e)throw new TypeError("string-replace-slices-array/replaceSlicesArr(): [THROW_ID_02] first input argument must be a string! Currently it's: "+(void 0===e?"undefined":s(e))+", equal to: "+e);if(!a(n))throw new TypeError("string-replace-slices-array/replaceSlicesArr(): [THROW_ID_03] second input argument must be an array! Currently it's: "+(void 0===n?"undefined":s(n))+", equal to: "+n);if(a(n)&&(t(n[0],{includeZero:!0})||r(n[0],{includeZero:!0}))&&(t(n[1],{includeZero:!0})||r(n[1],{includeZero:!0}))&&(n=[n]),n.forEach(function(e,o){if(!a(e))throw new TypeError("string-replace-slices-array/replaceSlicesArr(): [THROW_ID_05] ranges array, second input arg., has "+i(o)+" element not an array: "+JSON.stringify(e,null,4)+", which is "+(void 0===e?"undefined":s(e)));if(!t(e[0],{includeZero:!0})){if(!r(e[0],{includeZero:!0}))throw new TypeError("string-replace-slices-array/replaceSlicesArr(): [THROW_ID_06] ranges array, second input arg. has "+i(o)+" element, array ["+e[0]+","+e[1]+"]. That array has first element not an integer, but "+s(e[0])+", equal to: "+JSON.stringify(e[0],null,4)+". Computer doesn't like this.");n[o][0]=Number.parseInt(n[o][0],10)}if(!t(e[1],{includeZero:!0})){if(!r(e[1],{includeZero:!0}))throw new TypeError("string-replace-slices-array/replaceSlicesArr(): [THROW_ID_07] ranges array, second input arg. has "+i(o)+" element, array ["+e[0]+","+e[1]+"]. That array has second element not an integer, but "+s(e[1])+", equal to: "+JSON.stringify(e[1],null,4)+". Computer doesn't like this.");n[o][1]=Number.parseInt(n[o][1],10)}}),n.length>0){var o=e.slice(n[n.length-1][1]);e=n.reduce(function(t,r,n,o){var i=0===n?0:o[n-1][1],s=o[n][0];return t+e.slice(i,s)+(null!=o[n][2]?o[n][2]:"")},""),e+=o}return e}(y,p.current()):y}var ut="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};return function(e,t){var r=0,n=0,o=[],i=[],s=!1,a=!0;if(void 0!==t&&!Ae(t))throw new Error("csv-split-easy/split(): [THROW_ID_02] Options object must be a plain object! Currently it's of a type "+(void 0===t?"undefined":ut(t))+" equal to:\n"+JSON.stringify(t,null,4));var u={removeThousandSeparatorsFromNumbers:!0,padSingleDecimalPlaceNumbers:!0,forceUKStyle:!1},c=Object.assign({},u,t);if(ae(c,u,{msg:"csv-split-easy/split(): [THROW_ID_03*]"}),"string"!=typeof e)throw new TypeError("csv-split-easy/split(): [THROW_ID_04] input must be string! Currently it's: "+(void 0===e?"undefined":ut(e))+", equal to: "+JSON.stringify(e,null,4));if(""===e)return[[""]];for(var l=0,f=(e=e.trim()).length;l<f;l++){if(a&&'"'!==e[l]&&","!==e[l]&&""!==e[l].trim()&&(a=!1),'"'===e[l])if(s&&'"'===e[l+1])l+=1;else if(s){s=!1;var y=e.slice(r,l);""!==y.trim()&&(a=!1);var p=/""/.test(y)?y.replace(/""/g,'"'):at(y,{removeThousandSeparatorsFromNumbers:c.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:c.padSingleDecimalPlaceNumbers,forceUKStyle:c.forceUKStyle});o.push(p)}else s=!0,r=l+1;else if(s||","!==e[l])if("\n"===e[l]||"\r"===e[l]){if(!n){if(n=l,!s&&'"'!==e[l-1]){var m=e.slice(r,l);""!==m.trim()&&(a=!1),o.push(at(m,{removeThousandSeparatorsFromNumbers:c.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:c.padSingleDecimalPlaceNumbers,forceUKStyle:c.forceUKStyle}))}a?o=[]:i.push(o),a=!0,o=[]}r=l+1}else n&&(n=0,r=l);else{if('"'!==e[l-1]&&!s){var h=e.slice(r,l);""!==h.trim()&&(a=!1),o.push(at(h,{removeThousandSeparatorsFromNumbers:c.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:c.padSingleDecimalPlaceNumbers,forceUKStyle:c.forceUKStyle}))}r=l+1,n&&(n=0)}if(l+1===f){if('"'!==e[l]){var d=e.slice(r,l+1);""!==d.trim()&&(a=!1),o.push(at(d,{removeThousandSeparatorsFromNumbers:c.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:c.padSingleDecimalPlaceNumbers,forceUKStyle:c.forceUKStyle}))}a?o=[]:i.push(o),a=!0}}return 0===i.length?[[""]]:i}});
