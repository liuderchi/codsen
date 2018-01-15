!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.within=e()}(this,function(){"use strict";var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var e,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=(function(e,n){var o,i,a,c,s,u,f,l,y,p,h,g,m,b,d,v,w,_,O,S,j;e.exports=(o="function"==typeof Promise,i="object"===("undefined"==typeof self?"undefined":r(self))?self:t,a="object"===("undefined"==typeof window?"undefined":r(window))&&"document"in window&&"navigator"in window&&"HTMLElement"in window,c="undefined"!=typeof Symbol,s="undefined"!=typeof Map,u="undefined"!=typeof Set,f="undefined"!=typeof WeakMap,l="undefined"!=typeof WeakSet,y="undefined"!=typeof DataView,p=c&&void 0!==Symbol.iterator,h=c&&void 0!==Symbol.toStringTag,g=u&&"function"==typeof Set.prototype.entries,m=s&&"function"==typeof Map.prototype.entries,b=g&&Object.getPrototypeOf((new Set).entries()),d=m&&Object.getPrototypeOf((new Map).entries()),v=p&&"function"==typeof Array.prototype[Symbol.iterator],w=v&&Object.getPrototypeOf([][Symbol.iterator]()),_=p&&"function"==typeof String.prototype[Symbol.iterator],O=_&&Object.getPrototypeOf(""[Symbol.iterator]()),S=8,j=-1,function(t){var e=void 0===t?"undefined":r(t);if("object"!==e)return e;if(null===t)return"null";if(t===i)return"global";if(Array.isArray(t)&&(!1===h||!(Symbol.toStringTag in t)))return"Array";if(a){if(t===i.location)return"Location";if(t===i.document)return"Document";if(t===(i.navigator||{}).mimeTypes)return"MimeTypeArray";if(t===(i.navigator||{}).plugins)return"PluginArray";if(t instanceof i.HTMLElement&&"BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if(t instanceof i.HTMLElement&&"TD"===t.tagName)return"HTMLTableDataCellElement";if(t instanceof i.HTMLElement&&"TH"===t.tagName)return"HTMLTableHeaderCellElement"}var n=h&&t[Symbol.toStringTag];if("string"==typeof n)return n;var c=Object.getPrototypeOf(t);return c===RegExp.prototype?"RegExp":c===Date.prototype?"Date":o&&c===Promise.prototype?"Promise":u&&c===Set.prototype?"Set":s&&c===Map.prototype?"Map":l&&c===WeakSet.prototype?"WeakSet":f&&c===WeakMap.prototype?"WeakMap":y&&c===DataView.prototype?"DataView":s&&c===d?"Map Iterator":u&&c===b?"Set Iterator":v&&c===w?"Array Iterator":_&&c===O?"String Iterator":null===c?"Object":Object.prototype.toString.call(t).slice(S,j)})}(e={exports:{}},e.exports),e.exports),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=1/0,a=9007199254740991,c=1.7976931348623157e308,s=NaN,u="[object Arguments]",f="[object Function]",l="[object GeneratorFunction]",y="[object String]",p="[object Symbol]",h=/^\s+|\s+$/g,g=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,d=/^(?:0|[1-9]\d*)$/,v=parseInt;function w(t){return t!=t}function _(t,e){return function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(e,function(e){return t[e]})}var O,S,j=Object.prototype,k=j.hasOwnProperty,T=j.toString,A=j.propertyIsEnumerable,E=(O=Object.keys,S=Object,function(t){return O(S(t))}),N=Math.max;function P(t,e){var r,n,o=I(t)||V(n=r=t)&&x(n)&&k.call(r,"callee")&&(!A.call(r,"callee")||T.call(r)==u)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],i=o.length,a=!!i;for(var c in t)!e&&!k.call(t,c)||a&&("length"==c||L(c,i))||o.push(c);return o}function M(t){if(r=(e=t)&&e.constructor,n="function"==typeof r&&r.prototype||j,e!==n)return E(t);var e,r,n,o=[];for(var i in Object(t))k.call(t,i)&&"constructor"!=i&&o.push(i);return o}function L(t,e){return!!(e=null==e?a:e)&&("number"==typeof t||d.test(t))&&t>-1&&t%1==0&&t<e}var I=Array.isArray;function x(t){return null!=t&&("number"==typeof(n=t.length)&&n>-1&&n%1==0&&n<=a)&&!((r=K(e=t)?T.call(e):"")==f||r==l);var e,r,n}function K(t){var e=void 0===t?"undefined":o(t);return!!t&&("object"==e||"function"==e)}function V(t){return!!t&&"object"==(void 0===t?"undefined":o(t))}var H=function(t,e,r,n){var a,u,f,l;t=x(t)?t:(a=t)?_(a,x(u=a)?P(u):M(u)):[],r=r&&!n?(f=function(t){if(!t)return 0===t?t:0;if((t=function(t){if("number"==typeof t)return t;if("symbol"==(void 0===(e=t)?"undefined":o(e))||V(e)&&T.call(e)==p)return s;var e;if(K(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=K(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(h,"");var n=m.test(t);return n||b.test(t)?v(t.slice(2),n?2:8):g.test(t)?s:+t}(t))===i||t===-i){var e=t<0?-1:1;return e*c}return t==t?t:0}(r),l=f%1,f==f?l?f-l:f:0):0;var d,O=t.length;return r<0&&(r=N(O+r,0)),"string"==typeof(d=t)||!I(d)&&V(d)&&T.call(d)==y?r<=O&&t.indexOf(e,r)>-1:!!O&&function(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,w,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}(t,e,r)>-1};function C(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,$,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function D(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}function $(t){return t!=t}var W=Array.prototype.splice;function J(t,e,r,n){var o,i=n?D:C,a=-1,c=e.length,s=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(s=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(o=r,function(t){return o(t)})));++a<c;)for(var u=0,f=e[a],l=r?r(f):f;(u=i(s,l,u,n))>-1;)s!==t&&W.call(s,u,1),W.call(t,u,1);return t}var F=function(t,e){return t&&t.length&&e&&e.length?J(t,e):t},R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q="__lodash_hash_undefined__",B=9007199254740991,G="[object Function]",Q="[object GeneratorFunction]",U=/^\[object .+?Constructor\]$/,z="object"==R(t)&&t&&t.Object===Object&&t,X="object"==("undefined"==typeof self?"undefined":R(self))&&self&&self.Object===Object&&self,Y=z||X||Function("return this")();function Z(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,rt,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function tt(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function et(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function rt(t){return t!=t}function nt(t){return function(e){return t(e)}}function ot(t,e){return t.has(e)}var it,at,ct,st=Array.prototype,ut=Function.prototype,ft=Object.prototype,lt=Y["__core-js_shared__"],yt=(it=/[^.]+$/.exec(lt&&lt.keys&&lt.keys.IE_PROTO||""))?"Symbol(src)_1."+it:"",pt=ut.toString,ht=ft.hasOwnProperty,gt=ft.toString,mt=RegExp("^"+pt.call(ht).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),bt=st.splice,dt=Math.max,vt=Math.min,wt=Pt(Y,"Map"),_t=Pt(Object,"create");function Ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function jt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function kt(t){var e=-1,r=t?t.length:0;for(this.__data__=new jt;++e<r;)this.add(t[e])}function Tt(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function At(t){return!(!Lt(t)||yt&&yt in t)&&(Mt(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?mt:U).test(function(t){if(null!=t){try{return pt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function Et(t){return(o=e=t)&&"object"==(void 0===o?"undefined":R(o))&&(null!=(r=e)&&("number"==typeof(n=r.length)&&n>-1&&n%1==0&&n<=B)&&!Mt(r))?t:[];var e,r,n,o}function Nt(t,e){var r,n,o=t.__data__;return("string"==(n=void 0===(r=e)?"undefined":R(r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Pt(t,e){var r,n=null==(r=t)?void 0:r[e];return At(n)?n:void 0}function Mt(t){var e=Lt(t)?gt.call(t):"";return e==G||e==Q}function Lt(t){var e=void 0===t?"undefined":R(t);return!!t&&("object"==e||"function"==e)}Ot.prototype.clear=function(){this.__data__=_t?_t(null):{}},Ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Ot.prototype.get=function(t){var e=this.__data__;if(_t){var r=e[t];return r===q?void 0:r}return ht.call(e,t)?e[t]:void 0},Ot.prototype.has=function(t){var e=this.__data__;return _t?void 0!==e[t]:ht.call(e,t)},Ot.prototype.set=function(t,e){return this.__data__[t]=_t&&void 0===e?q:e,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var e=this.__data__,r=Tt(e,t);return!(r<0||(r==e.length-1?e.pop():bt.call(e,r,1),0))},St.prototype.get=function(t){var e=this.__data__,r=Tt(e,t);return r<0?void 0:e[r][1]},St.prototype.has=function(t){return Tt(this.__data__,t)>-1},St.prototype.set=function(t,e){var r=this.__data__,n=Tt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},jt.prototype.clear=function(){this.__data__={hash:new Ot,map:new(wt||St),string:new Ot}},jt.prototype.delete=function(t){return Nt(this,t).delete(t)},jt.prototype.get=function(t){return Nt(this,t).get(t)},jt.prototype.has=function(t){return Nt(this,t).has(t)},jt.prototype.set=function(t,e){return Nt(this,t).set(t,e),this},kt.prototype.add=kt.prototype.push=function(t){return this.__data__.set(t,q),this},kt.prototype.has=function(t){return this.__data__.has(t)};var It=(at=function(t){var e=et(t,Et);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?tt:Z,o=t[0].length,i=t.length,a=i,c=Array(i),s=1/0,u=[];a--;){var f=t[a];a&&e&&(f=et(f,nt(e))),s=vt(f.length,s),c[a]=!r&&(e||o>=120&&f.length>=120)?new kt(a&&f):void 0}f=t[0];var l=-1,y=c[0];t:for(;++l<o&&u.length<s;){var p=f[l],h=e?e(p):p;if(p=r||0!==p?p:0,!(y?ot(y,h):n(u,h,r))){for(a=i;--a;){var g=c[a];if(!(g?ot(g,h):n(t[a],h,r)))continue t}y&&y.push(h),u.push(p)}}return u}(e):[]},ct=dt(void 0===ct?at.length-1:ct,0),function(){for(var t=arguments,e=-1,r=dt(t.length-ct,0),n=Array(r);++e<r;)n[e]=t[ct+e];e=-1;for(var o=Array(ct+1);++e<ct;)o[e]=t[e];return o[ct]=n,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(at,this,o)});function xt(t){return"string"==typeof t?t.length>0?[t]:[]:t}var Kt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vt="[object Object]";var Ht,Ct,Dt=Function.prototype,$t=Object.prototype,Wt=Dt.toString,Jt=$t.hasOwnProperty,Ft=Wt.call(Object),Rt=$t.toString,qt=(Ht=Object.getPrototypeOf,Ct=Object,function(t){return Ht(Ct(t))});var Bt=function(t){if(!(e=t)||"object"!=(void 0===e?"undefined":Kt(e))||Rt.call(t)!=Vt||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e,r=qt(t);if(null===r)return!0;var n=Jt.call(r,"constructor")&&r.constructor;return"function"==typeof n&&n instanceof n&&Wt.call(n)==Ft},Gt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return function(t,e){if("string"!=typeof t)throw new Error("email-all-chars-within-ascii/within(): [THROW_ID_01] The input is not string but "+(void 0===t?"undefined":Gt(t))+", equal to: "+JSON.stringify(t,null,4));if(void 0!==e&&null!==e&&!Bt(e))throw new Error("email-all-chars-within-ascii/within(): [THROW_ID_02] The opts is not a plain object but "+(void 0===e?"undefined":Gt(e))+", equal to:\n"+JSON.stringify(e,null,4));var r={messageOnly:!1,checkLineLength:!0},o=Object.assign({},r,e);!function(t,e,r){function o(t){return null!=t}function i(t){return"boolean"===n(t)}function a(t){return"string"===n(t)}function c(t){return"Object"===n(t)}var s=["any","anything","every","everything","all","whatever","whatevs"],u=Array.isArray;if(0===arguments.length)throw new Error("check-types-mini/checkTypes(): Missing all arguments!");if(1===arguments.length)throw new Error("check-types-mini/checkTypes(): Missing second argument!");var f=c(e)?e:{},l={ignoreKeys:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini/checkTypes()",optsVarName:"opts"},y=void 0;if(!a((y=o(r)&&c(r)?Object.assign({},l,r):Object.assign({},l)).msg))throw new Error("check-types-mini/checkTypes(): opts.msg must be string! Currently it's: "+n(y.msg)+", equal to "+JSON.stringify(y.msg,null,4));if(y.msg=y.msg.trim(),":"===y.msg[y.msg.length-1]&&(y.msg=y.msg.slice(0,y.msg.length-1)),!a(y.optsVarName))throw new Error("check-types-mini/checkTypes(): opts.optsVarName must be string! Currently it's: "+n(y.optsVarName)+", equal to "+JSON.stringify(y.optsVarName,null,4));if(y.ignoreKeys=xt(y.ignoreKeys),y.acceptArraysIgnore=xt(y.acceptArraysIgnore),!u(y.ignoreKeys))throw new TypeError("check-types-mini/checkTypes(): opts.ignoreKeys should be an array, currently it's: "+n(y.ignoreKeys));if(!i(y.acceptArrays))throw new TypeError("check-types-mini/checkTypes(): opts.acceptArrays should be a Boolean, currently it's: "+n(y.acceptArrays));if(!u(y.acceptArraysIgnore))throw new TypeError("check-types-mini/checkTypes(): opts.acceptArraysIgnore should be an array, currently it's: "+n(y.acceptArraysIgnore));if(!i(y.enforceStrictKeyset))throw new TypeError("check-types-mini/checkTypes(): opts.enforceStrictKeyset should be a Boolean, currently it's: "+n(y.enforceStrictKeyset));if(Object.keys(y.schema).forEach(function(t){u(y.schema[t])||(y.schema[t]=[y.schema[t]]),y.schema[t]=y.schema[t].map(String).map(function(t){return t.toLowerCase()}).map(function(t){return t.trim()})}),y.enforceStrictKeyset)if(o(y.schema)&&Object.keys(y.schema).length>0){if(0!==F(Object.keys(t),Object.keys(f).concat(Object.keys(y.schema))).length)throw new TypeError(y.msg+": "+y.optsVarName+".enforceStrictKeyset is on and the following keys are not covered by schema and/or reference objects: "+JSON.stringify(F(Object.keys(t),Object.keys(f).concat(Object.keys(y.schema))),null,4))}else{if(!(o(f)&&Object.keys(f).length>0))throw new TypeError(y.msg+": Both "+y.optsVarName+".schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!");if(0!==F(Object.keys(t),Object.keys(f)).length)throw new TypeError(y.msg+": The input object has keys that are not covered by reference object: "+JSON.stringify(F(Object.keys(t),Object.keys(f)),null,4));if(0!==F(Object.keys(f),Object.keys(t)).length)throw new TypeError(y.msg+": The reference object has keys that are not present in the input object: "+JSON.stringify(F(Object.keys(f),Object.keys(t)),null,4))}Object.keys(t).forEach(function(e){if(o(y.schema)&&Object.prototype.hasOwnProperty.call(y.schema,e)){if(y.schema[e]=xt(y.schema[e]).map(String).map(function(t){return t.toLowerCase()}),!It(y.schema[e],s).length&&!H(y.schema[e],n(t[e]).toLowerCase())){if(!u(t[e])||!y.acceptArrays)throw new TypeError(y.msg+": "+y.optsVarName+"."+e+" was customised to "+JSON.stringify(t[e],null,4)+" which is not among the allowed types in schema ("+y.schema[e]+") but "+n(t[e]));for(var r=0,i=t[e].length;r<i;r++)if(!H(y.schema[e],n(t[e][r]).toLowerCase()))throw new TypeError(y.msg+": "+y.optsVarName+"."+e+" is of type "+n(t[e][r]).toLowerCase()+", but only the following are allowed in "+y.optsVarName+".schema: "+y.schema[e])}}else if(o(f)&&Object.prototype.hasOwnProperty.call(f,e)&&n(t[e])!==n(f[e])&&!H(y.ignoreKeys,e)){if(!y.acceptArrays||!u(t[e])||H(y.acceptArraysIgnore,e))throw new TypeError(y.msg+": "+y.optsVarName+"."+e+" was customised to "+JSON.stringify(t[e],null,4)+" which is not "+n(f[e])+" but "+n(t[e]));if(!t[e].every(function(t){return n(t)===n(f[e])}))throw new TypeError(y.msg+": "+y.optsVarName+"."+e+" was customised to be array, but not all of its elements are "+n(f[e])+"-type")}})}(o,r,{msg:"email-all-chars-within-ascii/within(): [THROW_ID_03*]"});for(var i=0,a=0,c=t.length;a<c;a++){if(i+=1,t[a].codePointAt(0)>126||t[a].codePointAt(0)<9||11===t[a].codePointAt(0)||12===t[a].codePointAt(0)||t[a].codePointAt(0)>13&&t[a].codePointAt(0)<32)throw new Error((o.messageOnly?"":"email-all-chars-within-ascii: ")+"Non ascii character found at index "+a+", equal to: "+t[a]+", its decimal code point is "+t[a].codePointAt(0)+".");if(i>997&&o.checkLineLength)throw new Error((o.messageOnly?"":"email-all-chars-within-ascii: ")+"Line length is beyond 999 characters!");"\r"!==t[a]&&"\n"!==t[a]||(i=0)}}});
