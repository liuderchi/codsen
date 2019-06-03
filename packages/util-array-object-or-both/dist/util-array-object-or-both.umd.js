/**
 * util-array-object-or-both
 * Validate and normalise user choice: array, object or both?
 * Version: 2.7.24
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/util-array-object-or-both
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).utilArrayObjectOrBoth=e()}(this,function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e=1/0,r=9007199254740991,n=1.7976931348623157e308,o=NaN,i="[object Arguments]",a="[object Function]",c="[object GeneratorFunction]",u="[object String]",s="[object Symbol]",f=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,y=/^0o[0-7]+$/i,h=/^(?:0|[1-9]\d*)$/,g=parseInt;function b(t){return t!=t}function v(t,e){return function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(e,function(e){return t[e]})}var d,m,_=Object.prototype,j=_.hasOwnProperty,w=_.toString,O=_.propertyIsEnumerable,$=(d=Object.keys,m=Object,function(t){return d(m(t))}),S=Math.max;function A(t,e){var r=k(t)||function(t){return function(t){return I(t)&&E(t)}(t)&&j.call(t,"callee")&&(!O.call(t,"callee")||w.call(t)==i)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var a in t)!e&&!j.call(t,a)||o&&("length"==a||N(a,n))||r.push(a);return r}function T(t){if(r=(e=t)&&e.constructor,n="function"==typeof r&&r.prototype||_,e!==n)return $(t);var e,r,n,o=[];for(var i in Object(t))j.call(t,i)&&"constructor"!=i&&o.push(i);return o}function N(t,e){return!!(e=null==e?r:e)&&("number"==typeof t||h.test(t))&&t>-1&&t%1==0&&t<e}var k=Array.isArray;function E(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}(t.length)&&!function(t){var e=P(t)?w.call(t):"";return e==a||e==c}(t)}function P(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function I(t){return!!t&&"object"==typeof t}var M=function(t,r,i,a){var c;t=E(t)?t:(c=t)?v(c,function(t){return E(t)?A(t):T(t)}(c)):[],i=i&&!a?function(t){var r=function(t){if(!t)return 0===t?t:0;if((t=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||I(t)&&w.call(t)==s}(t))return o;if(P(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=P(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(f,"");var r=p.test(t);return r||y.test(t)?g(t.slice(2),r?2:8):l.test(t)?o:+t}(t))===e||t===-e){var r=t<0?-1:1;return r*n}return t==t?t:0}(t),i=r%1;return r==r?i?r-i:r:0}(i):0;var h=t.length;return i<0&&(i=S(h+i,0)),function(t){return"string"==typeof t||!k(t)&&I(t)&&w.call(t)==u}(t)?i<=h&&t.indexOf(r,i)>-1:!!h&&function(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,b,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}(t,r,i)>-1},x="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function L(t,e){return t(e={exports:{}},e.exports),e.exports}var C=L(function(t,e){var r,n,o,i,a,c,u,s,f,l,p,y,h,g,b,v,d,m,_,j;t.exports=(r="function"==typeof Promise,n="object"==typeof self?self:x,o="undefined"!=typeof Symbol,i="undefined"!=typeof Map,a="undefined"!=typeof Set,c="undefined"!=typeof WeakMap,u="undefined"!=typeof WeakSet,s="undefined"!=typeof DataView,f=o&&void 0!==Symbol.iterator,l=o&&void 0!==Symbol.toStringTag,p=a&&"function"==typeof Set.prototype.entries,y=i&&"function"==typeof Map.prototype.entries,h=p&&Object.getPrototypeOf((new Set).entries()),g=y&&Object.getPrototypeOf((new Map).entries()),b=f&&"function"==typeof Array.prototype[Symbol.iterator],v=b&&Object.getPrototypeOf([][Symbol.iterator]()),d=f&&"function"==typeof String.prototype[Symbol.iterator],m=d&&Object.getPrototypeOf(""[Symbol.iterator]()),_=8,j=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===n)return"global";if(Array.isArray(t)&&(!1===l||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var o=l&&t[Symbol.toStringTag];if("string"==typeof o)return o;var f=Object.getPrototypeOf(t);return f===RegExp.prototype?"RegExp":f===Date.prototype?"Date":r&&f===Promise.prototype?"Promise":a&&f===Set.prototype?"Set":i&&f===Map.prototype?"Map":u&&f===WeakSet.prototype?"WeakSet":c&&f===WeakMap.prototype?"WeakMap":s&&f===DataView.prototype?"DataView":i&&f===g?"Map Iterator":a&&f===h?"Set Iterator":b&&f===v?"Array Iterator":d&&f===m?"String Iterator":null===f?"Object":Object.prototype.toString.call(t).slice(_,j)})});function V(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,D,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function K(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}function D(t){return t!=t}var W=Array.prototype.splice;function F(t,e,r,n){var o=n?K:V,i=-1,a=e.length,c=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(c=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,function(t){return function(e){return t(e)}}(r)));++i<a;)for(var u=0,s=e[i],f=r?r(s):s;(u=o(c,f,u,n))>-1;)c!==t&&W.call(c,u,1),W.call(t,u,1);return t}var H=function(t,e){return t&&t.length&&e&&e.length?F(t,e):t},J=L(function(t,e){var r=200,n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",a="[object Boolean]",c="[object Date]",u="[object Function]",s="[object GeneratorFunction]",f="[object Map]",l="[object Number]",p="[object Object]",y="[object RegExp]",h="[object Set]",g="[object String]",b="[object Symbol]",v="[object ArrayBuffer]",d="[object DataView]",m="[object Float32Array]",_="[object Float64Array]",j="[object Int8Array]",w="[object Int16Array]",O="[object Int32Array]",$="[object Uint8Array]",S="[object Uint8ClampedArray]",A="[object Uint16Array]",T="[object Uint32Array]",N=/\w*$/,k=/^\[object .+?Constructor\]$/,E=/^(?:0|[1-9]\d*)$/,P={};P[i]=P["[object Array]"]=P[v]=P[d]=P[a]=P[c]=P[m]=P[_]=P[j]=P[w]=P[O]=P[f]=P[l]=P[p]=P[y]=P[h]=P[g]=P[b]=P[$]=P[S]=P[A]=P[T]=!0,P["[object Error]"]=P[u]=P["[object WeakMap]"]=!1;var I="object"==typeof x&&x&&x.Object===Object&&x,M="object"==typeof self&&self&&self.Object===Object&&self,L=I||M||Function("return this")(),C=e&&!e.nodeType&&e,V=C&&t&&!t.nodeType&&t,K=V&&V.exports===C;function D(t,e){return t.set(e[0],e[1]),t}function W(t,e){return t.add(e),t}function F(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function H(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function J(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function R(t,e){return function(r){return t(e(r))}}function B(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var q,U=Array.prototype,G=Function.prototype,z=Object.prototype,Q=L["__core-js_shared__"],X=(q=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"",Y=G.toString,Z=z.hasOwnProperty,tt=z.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=K?L.Buffer:void 0,nt=L.Symbol,ot=L.Uint8Array,it=R(Object.getPrototypeOf,Object),at=Object.create,ct=z.propertyIsEnumerable,ut=U.splice,st=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,lt=R(Object.keys,Object),pt=Vt(L,"DataView"),yt=Vt(L,"Map"),ht=Vt(L,"Promise"),gt=Vt(L,"Set"),bt=Vt(L,"WeakMap"),vt=Vt(Object,"create"),dt=Ht(pt),mt=Ht(yt),_t=Ht(ht),jt=Ht(gt),wt=Ht(bt),Ot=nt?nt.prototype:void 0,$t=Ot?Ot.valueOf:void 0;function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Nt(t){this.__data__=new At(t)}function kt(t,e){var r=Rt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Bt(t)}(t)&&Z.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==i)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var a in t)!e&&!Z.call(t,a)||o&&("length"==a||Wt(a,n))||r.push(a);return r}function Et(t,e,r){var n=t[e];Z.call(t,e)&&Jt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Pt(t,e){for(var r=t.length;r--;)if(Jt(t[r][0],e))return r;return-1}function It(t,e,r,n,o,k,E){var I;if(n&&(I=k?n(t,o,k,E):n(t)),void 0!==I)return I;if(!Gt(t))return t;var M=Rt(t);if(M){if(I=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,I)}else{var x=Dt(t),L=x==u||x==s;if(qt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(x==p||x==i||L&&!k){if(H(t))return k?t:{};if(I=function(t){return"function"!=typeof t.constructor||Ft(t)?{}:(e=it(t),Gt(e)?at(e):{});var e}(L?{}:t),!e)return function(t,e){return Lt(t,Kt(t),e)}(t,function(t,e){return t&&Lt(e,zt(e),t)}(I,t))}else{if(!P[x])return k?t:{};I=function(t,e,r,n){var o=t.constructor;switch(e){case v:return xt(t);case a:case c:return new o(+t);case d:return function(t,e){var r=e?xt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case m:case _:case j:case w:case O:case $:case S:case A:case T:return function(t,e){var r=e?xt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case f:return function(t,e,r){return F(e?r(J(t),!0):J(t),D,new t.constructor)}(t,n,r);case l:case g:return new o(t);case y:return(s=new(u=t).constructor(u.source,N.exec(u))).lastIndex=u.lastIndex,s;case h:return function(t,e,r){return F(e?r(B(t),!0):B(t),W,new t.constructor)}(t,n,r);case b:return i=t,$t?Object($t.call(i)):{}}var i;var u,s}(t,x,It,e)}}E||(E=new Nt);var C=E.get(t);if(C)return C;if(E.set(t,I),!M)var V=r?function(t){return function(t,e,r){var n=e(t);return Rt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,zt,Kt)}(t):zt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(V||t,function(o,i){V&&(o=t[i=o]),Et(I,i,It(o,e,r,n,i,t,E))}),I}function Mt(t){return!(!Gt(t)||function(t){return!!X&&X in t}(t))&&(Ut(t)||H(t)?et:k).test(Ht(t))}function xt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Lt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;Et(r,a,void 0===c?t[a]:c)}return r}function Ct(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Vt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Mt(r)?r:void 0}St.prototype.clear=function(){this.__data__=vt?vt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var e=this.__data__;if(vt){var r=e[t];return r===n?void 0:r}return Z.call(e,t)?e[t]:void 0},St.prototype.has=function(t){var e=this.__data__;return vt?void 0!==e[t]:Z.call(e,t)},St.prototype.set=function(t,e){return this.__data__[t]=vt&&void 0===e?n:e,this},At.prototype.clear=function(){this.__data__=[]},At.prototype.delete=function(t){var e=this.__data__,r=Pt(e,t);return!(r<0||(r==e.length-1?e.pop():ut.call(e,r,1),0))},At.prototype.get=function(t){var e=this.__data__,r=Pt(e,t);return r<0?void 0:e[r][1]},At.prototype.has=function(t){return Pt(this.__data__,t)>-1},At.prototype.set=function(t,e){var r=this.__data__,n=Pt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Tt.prototype.clear=function(){this.__data__={hash:new St,map:new(yt||At),string:new St}},Tt.prototype.delete=function(t){return Ct(this,t).delete(t)},Tt.prototype.get=function(t){return Ct(this,t).get(t)},Tt.prototype.has=function(t){return Ct(this,t).has(t)},Tt.prototype.set=function(t,e){return Ct(this,t).set(t,e),this},Nt.prototype.clear=function(){this.__data__=new At},Nt.prototype.delete=function(t){return this.__data__.delete(t)},Nt.prototype.get=function(t){return this.__data__.get(t)},Nt.prototype.has=function(t){return this.__data__.has(t)},Nt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof At){var o=n.__data__;if(!yt||o.length<r-1)return o.push([t,e]),this;n=this.__data__=new Tt(o)}return n.set(t,e),this};var Kt=st?R(st,Object):function(){return[]},Dt=function(t){return tt.call(t)};function Wt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||E.test(t))&&t>-1&&t%1==0&&t<e}function Ft(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||z)}function Ht(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Jt(t,e){return t===e||t!=t&&e!=e}(pt&&Dt(new pt(new ArrayBuffer(1)))!=d||yt&&Dt(new yt)!=f||ht&&"[object Promise]"!=Dt(ht.resolve())||gt&&Dt(new gt)!=h||bt&&"[object WeakMap]"!=Dt(new bt))&&(Dt=function(t){var e=tt.call(t),r=e==p?t.constructor:void 0,n=r?Ht(r):void 0;if(n)switch(n){case dt:return d;case mt:return f;case _t:return"[object Promise]";case jt:return h;case wt:return"[object WeakMap]"}return e});var Rt=Array.isArray;function Bt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Ut(t)}var qt=ft||function(){return!1};function Ut(t){var e=Gt(t)?tt.call(t):"";return e==u||e==s}function Gt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function zt(t){return Bt(t)?kt(t):function(t){if(!Ft(t))return lt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return It(t,!0,!0)}}),R="[object Object]";var B=Function.prototype,q=Object.prototype,U=B.toString,G=q.hasOwnProperty,z=U.call(Object),Q=q.toString,X=function(t,e){return function(r){return t(e(r))}}(Object.getPrototypeOf,Object);var Y=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||Q.call(t)!=R||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=X(t);if(null===e)return!0;var r=G.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&U.call(r)==z};const Z=Array.isArray;function tt(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function et(t,e){return function t(e,r,n){const o=J(e);let i,a,c,u,s;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,Z(o))for(i=0,a=o.length;i<a;i++){const e=`${n.path}.${i}`;void 0!==o[i]?(n.parent=J(o),n.parentType="array",c=t(r(o[i],void 0,Object.assign({},n,{path:tt(e)})),r,Object.assign({},n,{path:tt(e)})),Number.isNaN(c)&&i<o.length?(o.splice(i,1),i-=1):o[i]=c):o.splice(i,1)}else if(Y(o))for(i=0,a=(u=Object.keys(o)).length;i<a;i++){s=u[i];const e=`${n.path}.${s}`;0===n.depth&&null!=s&&(n.topmostKey=s),n.parent=J(o),n.parentType="object",c=t(r(s,o[s],Object.assign({},n,{path:tt(e)})),r,Object.assign({},n,{path:tt(e)})),Number.isNaN(c)?delete o[s]:o[s]=c}return o}(t,e,{})}var rt="__lodash_hash_undefined__",nt=9007199254740991,ot="[object Function]",it="[object GeneratorFunction]",at=/^\[object .+?Constructor\]$/,ct="object"==typeof x&&x&&x.Object===Object&&x,ut="object"==typeof self&&self&&self.Object===Object&&self,st=ct||ut||Function("return this")();function ft(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,yt,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function lt(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function pt(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function yt(t){return t!=t}function ht(t){return function(e){return t(e)}}function gt(t,e){return t.has(e)}var bt,vt=Array.prototype,dt=Function.prototype,mt=Object.prototype,_t=st["__core-js_shared__"],jt=(bt=/[^.]+$/.exec(_t&&_t.keys&&_t.keys.IE_PROTO||""))?"Symbol(src)_1."+bt:"",wt=dt.toString,Ot=mt.hasOwnProperty,$t=mt.toString,St=RegExp("^"+wt.call(Ot).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),At=vt.splice,Tt=Math.max,Nt=Math.min,kt=Dt(st,"Map"),Et=Dt(Object,"create");function Pt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function It(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Mt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function xt(t){var e=-1,r=t?t.length:0;for(this.__data__=new Mt;++e<r;)this.add(t[e])}function Lt(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function Ct(t){return!(!Ft(t)||function(t){return!!jt&&jt in t}(t))&&(Wt(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?St:at).test(function(t){if(null!=t){try{return wt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function Vt(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=nt}(t.length)&&!Wt(t)}(t)}(t)?t:[]}function Kt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Dt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Ct(r)?r:void 0}function Wt(t){var e=Ft(t)?$t.call(t):"";return e==ot||e==it}function Ft(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}Pt.prototype.clear=function(){this.__data__=Et?Et(null):{}},Pt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Pt.prototype.get=function(t){var e=this.__data__;if(Et){var r=e[t];return r===rt?void 0:r}return Ot.call(e,t)?e[t]:void 0},Pt.prototype.has=function(t){var e=this.__data__;return Et?void 0!==e[t]:Ot.call(e,t)},Pt.prototype.set=function(t,e){return this.__data__[t]=Et&&void 0===e?rt:e,this},It.prototype.clear=function(){this.__data__=[]},It.prototype.delete=function(t){var e=this.__data__,r=Lt(e,t);return!(r<0||(r==e.length-1?e.pop():At.call(e,r,1),0))},It.prototype.get=function(t){var e=this.__data__,r=Lt(e,t);return r<0?void 0:e[r][1]},It.prototype.has=function(t){return Lt(this.__data__,t)>-1},It.prototype.set=function(t,e){var r=this.__data__,n=Lt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Mt.prototype.clear=function(){this.__data__={hash:new Pt,map:new(kt||It),string:new Pt}},Mt.prototype.delete=function(t){return Kt(this,t).delete(t)},Mt.prototype.get=function(t){return Kt(this,t).get(t)},Mt.prototype.has=function(t){return Kt(this,t).has(t)},Mt.prototype.set=function(t,e){return Kt(this,t).set(t,e),this},xt.prototype.add=xt.prototype.push=function(t){return this.__data__.set(t,rt),this},xt.prototype.has=function(t){return this.__data__.has(t)};var Ht=function(t,e){return e=Tt(void 0===e?t.length-1:e,0),function(){for(var r=arguments,n=-1,o=Tt(r.length-e,0),i=Array(o);++n<o;)i[n]=r[e+n];n=-1;for(var a=Array(e+1);++n<e;)a[n]=r[n];return a[e]=i,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,a)}}(function(t){var e=pt(t,Vt);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?lt:ft,o=t[0].length,i=t.length,a=i,c=Array(i),u=1/0,s=[];a--;){var f=t[a];a&&e&&(f=pt(f,ht(e))),u=Nt(f.length,u),c[a]=!r&&(e||o>=120&&f.length>=120)?new xt(a&&f):void 0}f=t[0];var l=-1,p=c[0];t:for(;++l<o&&s.length<u;){var y=f[l],h=e?e(y):y;if(y=r||0!==y?y:0,!(p?gt(p,h):n(s,h,r))){for(a=i;--a;){var g=c[a];if(!(g?gt(g,h):n(t[a],h,r)))continue t}p&&p.push(h),s.push(y)}}return s}(e):[]});function Jt(t){return"string"==typeof t?t.length>0?[t]:[]:t}var Rt=L(function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function r(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function n(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function i(t){var e=parseInt(t);return e.toString()===t?e:t}function a(t){t=t||{};var a=function(t){return Object.keys(a).reduce(function(e,r){return"create"===r?e:("function"==typeof a[r]&&(e[r]=a[r].bind(a,t)),e)},{})};function c(r,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||e(r,n)}function u(t,e){if(c(t,e))return t[e]}function s(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return s(t,e.split(".").map(i),r,n);var o=e[0],a=u(t,o);return 1===e.length?(void 0!==a&&n||(t[o]=r),a):(void 0===a&&("number"==typeof e[1]?t[o]=[]:t[o]={}),s(t[o],e.slice(1),r,n))}return a.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var a=0;a<n.length;a++){var c=i(n[a]);if(!("number"==typeof c&&o(r)&&c<r.length||(t.includeInheritedProps?c in Object(r):e(r,c))))return!1;r=r[c]}return!0},a.ensureExists=function(t,e,r){return s(t,e,r,!0)},a.set=function(t,e,r,n){return s(t,e,r,n)},a.insert=function(t,e,r,n){var i=a.get(t,e);n=~~n,o(i)||(i=[],a.set(t,e,i)),i.splice(n,0,r)},a.empty=function(t,e){var i,u;if(!r(e)&&null!=t&&(i=a.get(t,e))){if("string"==typeof i)return a.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}(i))return a.set(t,e,!1);if("number"==typeof i)return a.set(t,e,0);if(o(i))i.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===n(t)}(i))return a.set(t,e,null);for(u in i)c(i,u)&&delete i[u]}}},a.push=function(t,e){var r=a.get(t,e);o(r)||(r=[],a.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},a.coalesce=function(t,e,r){for(var n,o=0,i=e.length;o<i;o++)if(void 0!==(n=a.get(t,e[o])))return n;return r},a.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return a.get(t,e.split("."),r);var n=i(e[0]),o=u(t,n);return void 0===o?r:1===e.length?o:a.get(t[n],e.slice(1),r)},a.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(r(e))return t;if("string"==typeof e)return a.del(t,e.split("."));var n=i(e[0]);return c(t,n)?1!==e.length?a.del(t[n],e.slice(1)):(o(t)?t.splice(n,1):delete t[n],t):t},a}var c=a();return c.create=a,c.withInheritedProps=a({includeInheritedProps:!0}),c}()}),Bt=function(t){var e=(t=Math.abs(t))%100;if(e>=10&&e<=20)return"th";var r=t%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"};function qt(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return Number.isFinite(t)?t+Bt(t):t}qt.indicator=Bt;var Ut=qt;const Gt=/[|\\{}()[\]^$+*?.-]/g;var zt=t=>{if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(Gt,"\\$&")};const Qt=new Map;function Xt(t,e){e={caseSensitive:!1,...e};const r=t+JSON.stringify(e);if(Qt.has(r))return Qt.get(r);const n="!"===t[0];n&&(t=t.slice(1)),t=zt(t).replace(/\\\*/g,".*");const o=new RegExp(`^${t}$`,e.caseSensitive?"":"i");return o.negated=n,Qt.set(r,o),o}var Yt=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>Xt(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};function Zt(t,e,r){return function t(e,r,n,o=!0){const i=Object.prototype.hasOwnProperty;function a(t){return null!=t}function c(t){return"Object"===C(t)}function u(t,e){return e=Jt(e),Array.from(t).filter(t=>!e.some(e=>Yt.isMatch(t,e,{caseSensitive:!0})))}const s=["any","anything","every","everything","all","whatever","whatevs"],f=Array.isArray;if(!a(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const l={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let p;if(p=a(n)&&c(n)?Object.assign({},l,n):Object.assign({},l),a(p.ignoreKeys)&&p.ignoreKeys?p.ignoreKeys=Jt(p.ignoreKeys):p.ignoreKeys=[],a(p.ignorePaths)&&p.ignorePaths?p.ignorePaths=Jt(p.ignorePaths):p.ignorePaths=[],a(p.acceptArraysIgnore)&&p.acceptArraysIgnore?p.acceptArraysIgnore=Jt(p.acceptArraysIgnore):p.acceptArraysIgnore=[],p.msg="string"==typeof p.msg?p.msg.trim():p.msg,":"===p.msg[p.msg.length-1]&&(p.msg=p.msg.slice(0,p.msg.length-1).trim()),p.schema&&(Object.keys(p.schema).forEach(t=>{if(c(p.schema[t])){const e={};et(p.schema[t],(r,n,o)=>{const i=void 0!==n?n:r;return f(i)||c(i)||(e[`${t}.${o.path}`]=i),i}),delete p.schema[t],p.schema=Object.assign(p.schema,e)}}),Object.keys(p.schema).forEach(t=>{f(p.schema[t])||(p.schema[t]=[p.schema[t]]),p.schema[t]=p.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())})),a(r)||(r={}),o&&t(p,l,{enforceStrictKeyset:!1},!1),p.enforceStrictKeyset)if(a(p.schema)&&Object.keys(p.schema).length>0){if(0!==u(H(Object.keys(e),Object.keys(r).concat(Object.keys(p.schema))),p.ignoreKeys).length){const t=H(Object.keys(e),Object.keys(r).concat(Object.keys(p.schema)));throw new TypeError(`${p.msg}: ${p.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(a(r)&&Object.keys(r).length>0))throw new TypeError(`${p.msg}: Both ${p.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==u(H(Object.keys(e),Object.keys(r)),p.ignoreKeys).length){const t=H(Object.keys(e),Object.keys(r));throw new TypeError(`${p.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==u(H(Object.keys(r),Object.keys(e)),p.ignoreKeys).length){const t=H(Object.keys(r),Object.keys(e));throw new TypeError(`${p.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}const y=[];et(e,(t,n,o)=>{let a=n,u=t;if("array"===o.parentType&&(u=void 0,a=t),f(y)&&y.length&&y.some(t=>o.path.startsWith(t)))return a;if(u&&p.ignoreKeys.some(t=>Yt.isMatch(u,t)))return a;if(p.ignorePaths.some(t=>Yt.isMatch(o.path,t)))return a;const l=!(!c(a)&&!f(a)&&f(o.parent));let h=!1;c(p.schema)&&i.call(p.schema,Rt.get(o.path))&&(h=!0);let g=!1;if(c(r)&&Rt.has(r,Rt.get(o.path))&&(g=!0),p.enforceStrictKeyset&&l&&!h&&!g)throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path} is neither covered by reference object (second input argument), nor ${p.optsVarName}.schema! To stop this error, turn off ${p.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${p.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(e,null,4)}\n\nref = ${JSON.stringify(r,null,4)}\n\ninnerObj = ${JSON.stringify(o,null,4)}\n\nopts = ${JSON.stringify(p,null,4)}\n\ncurrent = ${JSON.stringify(a,null,4)}\n\n`);if(h){const t=Jt(p.schema[o.path]).map(String).map(t=>t.toLowerCase());if(Rt.set(p.schema,o.path,t),Ht(t,s).length)y.push(o.path);else if(!0!==a&&!1!==a&&!t.includes(C(a).toLowerCase())||(!0===a||!1===a)&&!t.includes(String(a))&&!t.includes("boolean")){if(!f(a)||!p.acceptArrays)throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path} was customised to ${"string"!==C(a)?'"':""}${JSON.stringify(a,null,0)}${"string"!==C(a)?'"':""} (type: ${C(a).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let e=0,r=a.length;e<r;e++)if(!t.includes(C(a[e]).toLowerCase()))throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path}.${e}, the ${Ut(e+1)} element (equal to ${JSON.stringify(a[e],null,0)}) is of a type ${C(a[e]).toLowerCase()}, but only the following are allowed by the ${p.optsVarName}.schema: ${t.join(", ")}`)}}else if(g){const e=Rt.get(r,o.path);if(p.acceptArrays&&f(a)&&!p.acceptArraysIgnore.includes(t)){if(!a.every(e=>C(e).toLowerCase()===C(r[t]).toLowerCase()))throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path} was customised to be array, but not all of its elements are ${C(r[t]).toLowerCase()}-type`)}else if(C(a)!==C(e))throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path} was customised to ${"string"===C(a).toLowerCase()?"":'"'}${JSON.stringify(a,null,0)}${"string"===C(a).toLowerCase()?"":'"'} which is not ${C(e).toLowerCase()} but ${C(a).toLowerCase()}`)}return a})}(t,e,r)}return Yt.isMatch=(t,e,r)=>{const n=Xt(e,r),o=n.test(t);return n.negated?!o:o},function(e,r){function n(t){return null!=t}if(!n(e))throw new Error("util-array-object-or-both/validate(): [THROW_ID_01] Please provide a string to work on. Currently it's equal to ".concat(JSON.stringify(e,null,4)));if("string"!=typeof e)throw new Error("util-array-object-or-both/validate(): [THROW_ID_02] Input must be string! Currently it's ".concat(t(e),", equal to: ").concat(JSON.stringify(e,null,4)));if(n(r)&&!Y(r))throw new Error("util-array-object-or-both/validate(): [THROW_ID_03] Second argument, options object, must be, well, object! Currenlty it's: ".concat(t(r),", equal to: ").concat(JSON.stringify(r,null,4)));var o={msg:"",optsVarName:"given variable"},i=Object.assign({},o,r);if(Zt(i,o,{msg:"util-array-object-or-both/validate(): [THROW_ID_03]",optsVarName:"opts",schema:{msg:["string",null],optsVarName:["string",null]}}),n(i.msg)&&i.msg.length>0&&(i.msg="".concat(i.msg.trim()," ")),"given variable"!==i.optsVarName&&(i.optsVarName='variable "'.concat(i.optsVarName,'"')),M(["object","objects","obj","ob","o"],e.toLowerCase().trim()))return"object";if(M(["array","arrays","arr","aray","arr","a"],e.toLowerCase().trim()))return"array";if(M(["any","all","everything","both","either","each","whatever","whatevs","e"],e.toLowerCase().trim()))return"any";throw new TypeError("".concat(i.msg,"The ").concat(i.optsVarName," was customised to an unrecognised value: ").concat(e,". Please check it against the API documentation."))}});
