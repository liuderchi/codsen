/**
 * ranges-is-index-within
 * Efficiently checks if index is within any of the given ranges
 * Version: 1.13.12
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ranges-is-index-within
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).rangesIsIndexWithin=e()}(this,function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e="[object Object]";var r,n,o=Function.prototype,i=Object.prototype,a=o.toString,s=i.hasOwnProperty,c=a.call(Object),u=i.toString,f=(r=Object.getPrototypeOf,n=Object,function(t){return r(n(t))});var l=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||u.call(t)!=e||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var r=f(t);if(null===r)return!0;var n=s.call(r,"constructor")&&r.constructor;return"function"==typeof n&&n instanceof n&&a.call(n)==c},p="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function y(t,e){return t(e={exports:{}},e.exports),e.exports}var h=y(function(t,e){var r,n,o,i,a,s,c,u,f,l,y,h,g,d,b,v,m,_,w,j;t.exports=(r="function"==typeof Promise,n="object"==typeof self?self:p,o="undefined"!=typeof Symbol,i="undefined"!=typeof Map,a="undefined"!=typeof Set,s="undefined"!=typeof WeakMap,c="undefined"!=typeof WeakSet,u="undefined"!=typeof DataView,f=o&&void 0!==Symbol.iterator,l=o&&void 0!==Symbol.toStringTag,y=a&&"function"==typeof Set.prototype.entries,h=i&&"function"==typeof Map.prototype.entries,g=y&&Object.getPrototypeOf((new Set).entries()),d=h&&Object.getPrototypeOf((new Map).entries()),b=f&&"function"==typeof Array.prototype[Symbol.iterator],v=b&&Object.getPrototypeOf([][Symbol.iterator]()),m=f&&"function"==typeof String.prototype[Symbol.iterator],_=m&&Object.getPrototypeOf(""[Symbol.iterator]()),w=8,j=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===n)return"global";if(Array.isArray(t)&&(!1===l||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var o=l&&t[Symbol.toStringTag];if("string"==typeof o)return o;var f=Object.getPrototypeOf(t);return f===RegExp.prototype?"RegExp":f===Date.prototype?"Date":r&&f===Promise.prototype?"Promise":a&&f===Set.prototype?"Set":i&&f===Map.prototype?"Map":c&&f===WeakSet.prototype?"WeakSet":s&&f===WeakMap.prototype?"WeakMap":u&&f===DataView.prototype?"DataView":i&&f===d?"Map Iterator":a&&f===g?"Set Iterator":b&&f===v?"Array Iterator":m&&f===_?"String Iterator":null===f?"Object":Object.prototype.toString.call(t).slice(w,j)})});function g(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,b,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function d(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}function b(t){return t!=t}var v=Array.prototype.splice;function m(t,e,r,n){var o,i=n?d:g,a=-1,s=e.length,c=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(c=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(o=r,function(t){return o(t)})));++a<s;)for(var u=0,f=e[a],l=r?r(f):f;(u=i(c,l,u,n))>-1;)c!==t&&v.call(c,u,1),v.call(t,u,1);return t}var _=function(t,e){return t&&t.length&&e&&e.length?m(t,e):t},w=y(function(t,e){var r=200,n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",a="[object Boolean]",s="[object Date]",c="[object Function]",u="[object GeneratorFunction]",f="[object Map]",l="[object Number]",y="[object Object]",h="[object RegExp]",g="[object Set]",d="[object String]",b="[object Symbol]",v="[object ArrayBuffer]",m="[object DataView]",_="[object Float32Array]",w="[object Float64Array]",j="[object Int8Array]",O="[object Int16Array]",S="[object Int32Array]",$="[object Uint8Array]",T="[object Uint8ClampedArray]",I="[object Uint16Array]",A="[object Uint32Array]",E=/\w*$/,x=/^\[object .+?Constructor\]$/,k=/^(?:0|[1-9]\d*)$/,M={};M[i]=M["[object Array]"]=M[v]=M[m]=M[a]=M[s]=M[_]=M[w]=M[j]=M[O]=M[S]=M[f]=M[l]=M[y]=M[h]=M[g]=M[d]=M[b]=M[$]=M[T]=M[I]=M[A]=!0,M["[object Error]"]=M[c]=M["[object WeakMap]"]=!1;var N="object"==typeof p&&p&&p.Object===Object&&p,R="object"==typeof self&&self&&self.Object===Object&&self,W=N||R||Function("return this")(),P=e&&!e.nodeType&&e,D=P&&t&&!t.nodeType&&t,C=D&&D.exports===P;function H(t,e){return t.set(e[0],e[1]),t}function L(t,e){return t.add(e),t}function K(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function J(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function V(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function Z(t,e){return function(r){return t(e(r))}}function F(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var B,q=Array.prototype,U=Function.prototype,z=Object.prototype,G=W["__core-js_shared__"],Q=(B=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+B:"",X=U.toString,Y=z.hasOwnProperty,tt=z.toString,et=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=C?W.Buffer:void 0,nt=W.Symbol,ot=W.Uint8Array,it=Z(Object.getPrototypeOf,Object),at=Object.create,st=z.propertyIsEnumerable,ct=q.splice,ut=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,lt=Z(Object.keys,Object),pt=Dt(W,"DataView"),yt=Dt(W,"Map"),ht=Dt(W,"Promise"),gt=Dt(W,"Set"),dt=Dt(W,"WeakMap"),bt=Dt(Object,"create"),vt=Jt(pt),mt=Jt(yt),_t=Jt(ht),wt=Jt(gt),jt=Jt(dt),Ot=nt?nt.prototype:void 0,St=Ot?Ot.valueOf:void 0;function $t(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function It(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function At(t){this.__data__=new Tt(t)}function Et(t,e){var r=Zt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ft(t)}(t)&&Y.call(t,"callee")&&(!st.call(t,"callee")||tt.call(t)==i)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var a in t)!e&&!Y.call(t,a)||o&&("length"==a||Lt(a,n))||r.push(a);return r}function xt(t,e,r){var n=t[e];Y.call(t,e)&&Vt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function kt(t,e){for(var r=t.length;r--;)if(Vt(t[r][0],e))return r;return-1}function Mt(t,e,r,n,o,p,x){var k;if(n&&(k=p?n(t,o,p,x):n(t)),void 0!==k)return k;if(!Ut(t))return t;var N=Zt(t);if(N){if(k=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Y.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,k)}else{var R=Ht(t),W=R==c||R==u;if(Bt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(R==y||R==i||W&&!p){if(J(t))return p?t:{};if(k=function(t){return"function"!=typeof t.constructor||Kt(t)?{}:(e=it(t),Ut(e)?at(e):{});var e}(W?{}:t),!e)return function(t,e){return Wt(t,Ct(t),e)}(t,function(t,e){return t&&Wt(e,zt(e),t)}(k,t))}else{if(!M[R])return p?t:{};k=function(t,e,r,n){var o=t.constructor;switch(e){case v:return Rt(t);case a:case s:return new o(+t);case m:return function(t,e){var r=e?Rt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case _:case w:case j:case O:case S:case $:case T:case I:case A:return function(t,e){var r=e?Rt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case f:return function(t,e,r){return K(e?r(V(t),!0):V(t),H,new t.constructor)}(t,n,r);case l:case d:return new o(t);case h:return(u=new(c=t).constructor(c.source,E.exec(c))).lastIndex=c.lastIndex,u;case g:return function(t,e,r){return K(e?r(F(t),!0):F(t),L,new t.constructor)}(t,n,r);case b:return i=t,St?Object(St.call(i)):{}}var i;var c,u}(t,R,Mt,e)}}x||(x=new At);var P=x.get(t);if(P)return P;if(x.set(t,k),!N)var D=r?function(t){return function(t,e,r){var n=e(t);return Zt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,zt,Ct)}(t):zt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(D||t,function(o,i){D&&(o=t[i=o]),xt(k,i,Mt(o,e,r,n,i,t,x))}),k}function Nt(t){return!(!Ut(t)||(e=t,Q&&Q in e))&&(qt(t)||J(t)?et:x).test(Jt(t));var e}function Rt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Wt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],s=n?n(r[a],t[a],a,r,t):void 0;xt(r,a,void 0===s?t[a]:s)}return r}function Pt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Dt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Nt(r)?r:void 0}$t.prototype.clear=function(){this.__data__=bt?bt(null):{}},$t.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},$t.prototype.get=function(t){var e=this.__data__;if(bt){var r=e[t];return r===n?void 0:r}return Y.call(e,t)?e[t]:void 0},$t.prototype.has=function(t){var e=this.__data__;return bt?void 0!==e[t]:Y.call(e,t)},$t.prototype.set=function(t,e){return this.__data__[t]=bt&&void 0===e?n:e,this},Tt.prototype.clear=function(){this.__data__=[]},Tt.prototype.delete=function(t){var e=this.__data__,r=kt(e,t);return!(r<0||(r==e.length-1?e.pop():ct.call(e,r,1),0))},Tt.prototype.get=function(t){var e=this.__data__,r=kt(e,t);return r<0?void 0:e[r][1]},Tt.prototype.has=function(t){return kt(this.__data__,t)>-1},Tt.prototype.set=function(t,e){var r=this.__data__,n=kt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},It.prototype.clear=function(){this.__data__={hash:new $t,map:new(yt||Tt),string:new $t}},It.prototype.delete=function(t){return Pt(this,t).delete(t)},It.prototype.get=function(t){return Pt(this,t).get(t)},It.prototype.has=function(t){return Pt(this,t).has(t)},It.prototype.set=function(t,e){return Pt(this,t).set(t,e),this},At.prototype.clear=function(){this.__data__=new Tt},At.prototype.delete=function(t){return this.__data__.delete(t)},At.prototype.get=function(t){return this.__data__.get(t)},At.prototype.has=function(t){return this.__data__.has(t)},At.prototype.set=function(t,e){var n=this.__data__;if(n instanceof Tt){var o=n.__data__;if(!yt||o.length<r-1)return o.push([t,e]),this;n=this.__data__=new It(o)}return n.set(t,e),this};var Ct=ut?Z(ut,Object):function(){return[]},Ht=function(t){return tt.call(t)};function Lt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||k.test(t))&&t>-1&&t%1==0&&t<e}function Kt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||z)}function Jt(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Vt(t,e){return t===e||t!=t&&e!=e}(pt&&Ht(new pt(new ArrayBuffer(1)))!=m||yt&&Ht(new yt)!=f||ht&&"[object Promise]"!=Ht(ht.resolve())||gt&&Ht(new gt)!=g||dt&&"[object WeakMap]"!=Ht(new dt))&&(Ht=function(t){var e=tt.call(t),r=e==y?t.constructor:void 0,n=r?Jt(r):void 0;if(n)switch(n){case vt:return m;case mt:return f;case _t:return"[object Promise]";case wt:return g;case jt:return"[object WeakMap]"}return e});var Zt=Array.isArray;function Ft(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!qt(t)}var Bt=ft||function(){return!1};function qt(t){var e=Ut(t)?tt.call(t):"";return e==c||e==u}function Ut(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function zt(t){return Ft(t)?Et(t):function(t){if(!Kt(t))return lt(t);var e=[];for(var r in Object(t))Y.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Mt(t,!0,!0)}});const j=Array.isArray;function O(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function S(t,e){return function t(e,r,n){const o=w(e);let i,a,s,c,u;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,j(o))for(i=0,a=o.length;i<a;i++){const e=`${n.path}.${i}`;void 0!==o[i]?(n.parent=w(o),n.parentType="array",s=t(r(o[i],void 0,Object.assign({},n,{path:O(e)})),r,Object.assign({},n,{path:O(e)})),Number.isNaN(s)&&i<o.length?(o.splice(i,1),i-=1):o[i]=s):o.splice(i,1)}else if(l(o))for(i=0,a=(c=Object.keys(o)).length;i<a;i++){u=c[i];const e=`${n.path}.${u}`;0===n.depth&&null!=u&&(n.topmostKey=u),n.parent=w(o),n.parentType="object",s=t(r(u,o[u],Object.assign({},n,{path:O(e)})),r,Object.assign({},n,{path:O(e)})),Number.isNaN(s)?delete o[u]:o[u]=s}return o}(t,e,{})}var $="__lodash_hash_undefined__",T=9007199254740991,I="[object Function]",A="[object GeneratorFunction]",E=/^\[object .+?Constructor\]$/,x="object"==typeof p&&p&&p.Object===Object&&p,k="object"==typeof self&&self&&self.Object===Object&&self,M=x||k||Function("return this")();function N(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,P,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function R(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function W(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function P(t){return t!=t}function D(t){return function(e){return t(e)}}function C(t,e){return t.has(e)}var H,L=Array.prototype,K=Function.prototype,J=Object.prototype,V=M["__core-js_shared__"],Z=(H=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+H:"",F=K.toString,B=J.hasOwnProperty,q=J.toString,U=RegExp("^"+F.call(B).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),z=L.splice,G=Math.max,Q=Math.min,X=ct(M,"Map"),Y=ct(Object,"create");function tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function rt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function nt(t){var e=-1,r=t?t.length:0;for(this.__data__=new rt;++e<r;)this.add(t[e])}function ot(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function it(t){return!(!ft(t)||(e=t,Z&&Z in e))&&(ut(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?U:E).test(function(t){if(null!=t){try{return F.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function at(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=T}(t.length)&&!ut(t)}(t)}(t)?t:[]}function st(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function ct(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return it(r)?r:void 0}function ut(t){var e=ft(t)?q.call(t):"";return e==I||e==A}function ft(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}tt.prototype.clear=function(){this.__data__=Y?Y(null):{}},tt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},tt.prototype.get=function(t){var e=this.__data__;if(Y){var r=e[t];return r===$?void 0:r}return B.call(e,t)?e[t]:void 0},tt.prototype.has=function(t){var e=this.__data__;return Y?void 0!==e[t]:B.call(e,t)},tt.prototype.set=function(t,e){return this.__data__[t]=Y&&void 0===e?$:e,this},et.prototype.clear=function(){this.__data__=[]},et.prototype.delete=function(t){var e=this.__data__,r=ot(e,t);return!(r<0||(r==e.length-1?e.pop():z.call(e,r,1),0))},et.prototype.get=function(t){var e=this.__data__,r=ot(e,t);return r<0?void 0:e[r][1]},et.prototype.has=function(t){return ot(this.__data__,t)>-1},et.prototype.set=function(t,e){var r=this.__data__,n=ot(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},rt.prototype.clear=function(){this.__data__={hash:new tt,map:new(X||et),string:new tt}},rt.prototype.delete=function(t){return st(this,t).delete(t)},rt.prototype.get=function(t){return st(this,t).get(t)},rt.prototype.has=function(t){return st(this,t).has(t)},rt.prototype.set=function(t,e){return st(this,t).set(t,e),this},nt.prototype.add=nt.prototype.push=function(t){return this.__data__.set(t,$),this},nt.prototype.has=function(t){return this.__data__.has(t)};var lt=function(t,e){return e=G(void 0===e?t.length-1:e,0),function(){for(var r=arguments,n=-1,o=G(r.length-e,0),i=Array(o);++n<o;)i[n]=r[e+n];n=-1;for(var a=Array(e+1);++n<e;)a[n]=r[n];return a[e]=i,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,a)}}(function(t){var e=W(t,at);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?R:N,o=t[0].length,i=t.length,a=i,s=Array(i),c=1/0,u=[];a--;){var f=t[a];a&&e&&(f=W(f,D(e))),c=Q(f.length,c),s[a]=!r&&(e||o>=120&&f.length>=120)?new nt(a&&f):void 0}f=t[0];var l=-1,p=s[0];t:for(;++l<o&&u.length<c;){var y=f[l],h=e?e(y):y;if(y=r||0!==y?y:0,!(p?C(p,h):n(u,h,r))){for(a=i;--a;){var g=s[a];if(!(g?C(g,h):n(t[a],h,r)))continue t}p&&p.push(h),u.push(y)}}return u}(e):[]});function pt(t){return"string"==typeof t?t.length>0?[t]:[]:t}var yt=y(function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function r(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function n(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function i(t){var e=parseInt(t);return e.toString()===t?e:t}function a(t){t=t||{};var a=function(t){return Object.keys(a).reduce(function(e,r){return"create"===r?e:("function"==typeof a[r]&&(e[r]=a[r].bind(a,t)),e)},{})};function s(r,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||e(r,n)}function c(t,e){if(s(t,e))return t[e]}function u(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return u(t,e.split(".").map(i),r,n);var o=e[0],a=c(t,o);return 1===e.length?(void 0!==a&&n||(t[o]=r),a):(void 0===a&&("number"==typeof e[1]?t[o]=[]:t[o]={}),u(t[o],e.slice(1),r,n))}return a.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var a=0;a<n.length;a++){var s=i(n[a]);if(!("number"==typeof s&&o(r)&&s<r.length||(t.includeInheritedProps?s in Object(r):e(r,s))))return!1;r=r[s]}return!0},a.ensureExists=function(t,e,r){return u(t,e,r,!0)},a.set=function(t,e,r,n){return u(t,e,r,n)},a.insert=function(t,e,r,n){var i=a.get(t,e);n=~~n,o(i)||(i=[],a.set(t,e,i)),i.splice(n,0,r)},a.empty=function(t,e){var i,c;if(!r(e)&&null!=t&&(i=a.get(t,e))){if("string"==typeof i)return a.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}(i))return a.set(t,e,!1);if("number"==typeof i)return a.set(t,e,0);if(o(i))i.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===n(t)}(i))return a.set(t,e,null);for(c in i)s(i,c)&&delete i[c]}}},a.push=function(t,e){var r=a.get(t,e);o(r)||(r=[],a.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},a.coalesce=function(t,e,r){for(var n,o=0,i=e.length;o<i;o++)if(void 0!==(n=a.get(t,e[o])))return n;return r},a.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return a.get(t,e.split("."),r);var n=i(e[0]),o=c(t,n);return void 0===o?r:1===e.length?o:a.get(t[n],e.slice(1),r)},a.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(r(e))return t;if("string"==typeof e)return a.del(t,e.split("."));var n=i(e[0]);return s(t,n)?1!==e.length?a.del(t[n],e.slice(1)):(o(t)?t.splice(n,1):delete t[n],t):t},a}var s=a();return s.create=a,s.withInheritedProps=a({includeInheritedProps:!0}),s}()}),ht=function(t){var e=t%100;if(e>=10&&e<=20)return"th";var r=t%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"};function gt(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return t+ht(t)}gt.indicator=ht;var dt=gt,bt=/[|\\{}()[\]^$+*?.]/g,vt=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(bt,"\\$&")};const mt=new Map;function _t(t,e){const r=Object.assign({caseSensitive:!1},e),n=t+JSON.stringify(r);if(mt.has(n))return mt.get(n);const o="!"===t[0];o&&(t=t.slice(1)),t=vt(t).replace(/\\\*/g,".*");const i=new RegExp(`^${t}$`,r.caseSensitive?"":"i");return i.negated=o,mt.set(n,i),i}var wt=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>_t(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};function jt(t,e,r){return function t(e,r,n,o=!0){const i=Object.prototype.hasOwnProperty;function a(t){return null!=t}function s(t){return"Object"===h(t)}function c(t,e){return e=pt(e),Array.from(t).filter(t=>!e.some(e=>wt.isMatch(t,e,{caseSensitive:!0})))}const u=["any","anything","every","everything","all","whatever","whatevs"],f=Array.isArray;if(!a(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const l={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let p;if(p=a(n)&&s(n)?Object.assign({},l,n):Object.assign({},l),a(p.ignoreKeys)&&p.ignoreKeys?p.ignoreKeys=pt(p.ignoreKeys):p.ignoreKeys=[],a(p.ignorePaths)&&p.ignorePaths?p.ignorePaths=pt(p.ignorePaths):p.ignorePaths=[],a(p.acceptArraysIgnore)&&p.acceptArraysIgnore?p.acceptArraysIgnore=pt(p.acceptArraysIgnore):p.acceptArraysIgnore=[],p.msg="string"==typeof p.msg?p.msg.trim():p.msg,":"===p.msg[p.msg.length-1]&&(p.msg=p.msg.slice(0,p.msg.length-1).trim()),p.schema&&(Object.keys(p.schema).forEach(t=>{if(s(p.schema[t])){const e={};S(p.schema[t],(r,n,o)=>{const i=void 0!==n?n:r;return f(i)||s(i)||(e[`${t}.${o.path}`]=i),i}),delete p.schema[t],p.schema=Object.assign(p.schema,e)}}),Object.keys(p.schema).forEach(t=>{f(p.schema[t])||(p.schema[t]=[p.schema[t]]),p.schema[t]=p.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())})),a(r)||(r={}),o&&t(p,l,{enforceStrictKeyset:!1},!1),p.enforceStrictKeyset)if(a(p.schema)&&Object.keys(p.schema).length>0){if(0!==c(_(Object.keys(e),Object.keys(r).concat(Object.keys(p.schema))),p.ignoreKeys).length){const t=_(Object.keys(e),Object.keys(r).concat(Object.keys(p.schema)));throw new TypeError(`${p.msg}: ${p.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(a(r)&&Object.keys(r).length>0))throw new TypeError(`${p.msg}: Both ${p.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==c(_(Object.keys(e),Object.keys(r)),p.ignoreKeys).length){const t=_(Object.keys(e),Object.keys(r));throw new TypeError(`${p.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==c(_(Object.keys(r),Object.keys(e)),p.ignoreKeys).length){const t=_(Object.keys(r),Object.keys(e));throw new TypeError(`${p.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}const y=[];S(e,(t,n,o)=>{let a=n,c=t;if("array"===o.parentType&&(c=void 0,a=t),f(y)&&y.length&&y.some(t=>o.path.startsWith(t)))return a;if(c&&p.ignoreKeys.some(t=>wt.isMatch(c,t)))return a;if(p.ignorePaths.some(t=>wt.isMatch(o.path,t)))return a;const l=!(!s(a)&&!f(a)&&f(o.parent));let g=!1;s(p.schema)&&i.call(p.schema,yt.get(o.path))&&(g=!0);let d=!1;if(s(r)&&yt.has(r,yt.get(o.path))&&(d=!0),p.enforceStrictKeyset&&l&&!g&&!d)throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path} is neither covered by reference object (second input argument), nor ${p.optsVarName}.schema! To stop this error, turn off ${p.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${p.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(e,null,4)}\n\nref = ${JSON.stringify(r,null,4)}\n\ninnerObj = ${JSON.stringify(o,null,4)}\n\nopts = ${JSON.stringify(p,null,4)}\n\ncurrent = ${JSON.stringify(a,null,4)}\n\n`);if(g){const t=pt(p.schema[o.path]).map(String).map(t=>t.toLowerCase());if(yt.set(p.schema,o.path,t),lt(t,u).length)y.push(o.path);else if(!0!==a&&!1!==a&&!t.includes(h(a).toLowerCase())||(!0===a||!1===a)&&!t.includes(String(a))&&!t.includes("boolean")){if(!f(a)||!p.acceptArrays)throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path} was customised to ${"string"!==h(a)?'"':""}${JSON.stringify(a,null,0)}${"string"!==h(a)?'"':""} (type: ${h(a).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let e=0,r=a.length;e<r;e++)if(!t.includes(h(a[e]).toLowerCase()))throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path}.${e}, the ${dt(e+1)} element (equal to ${JSON.stringify(a[e],null,0)}) is of a type ${h(a[e]).toLowerCase()}, but only the following are allowed by the ${p.optsVarName}.schema: ${t.join(", ")}`)}}else if(d){const e=yt.get(r,o.path);if(p.acceptArrays&&f(a)&&!p.acceptArraysIgnore.includes(t)){if(!a.every(e=>h(e).toLowerCase()===h(r[t]).toLowerCase()))throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path} was customised to be array, but not all of its elements are ${h(r[t]).toLowerCase()}-type`)}else if(h(a)!==h(e))throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path} was customised to ${"string"===h(a).toLowerCase()?"":'"'}${JSON.stringify(a,null,0)}${"string"===h(a).toLowerCase()?"":'"'} which is not ${h(e).toLowerCase()} but ${h(a).toLowerCase()}`)}return a})}(t,e,r)}wt.isMatch=((t,e,r)=>{const n=_t(e,r),o=n.test(t);return n.negated?!o:o});var Ot=function(t,e){if("string"!=typeof t)return!1;if(e&&"includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(t)}return/^[1-9]\d*(\.0+)?$/.test(t)},St=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},$t=y(function(t,e){(e=t.exports=function(t){return t+e.suffix(+t)}).suffix=function(t){return t%=100,1===Math.floor(t/10)?"th":t%10==1?"st":t%10==2?"nd":t%10==3?"rd":"th"}});$t.suffix;const Tt=Array.isArray;var It=Array.isArray;return function(e,r,n){function o(t){return null!=t}var i;if(null===r)return!1;if(St(e,{includeZero:!0}))i=e;else{if(!Ot(e,{includeZero:!0}))throw new TypeError("ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_01] Input must mean an index, so it has to be either a natural number or a string containing natural number! Currently its type is: ".concat(t(e),", equal to: ").concat(JSON.stringify(e,null,4)));i=parseInt(e,10)}if(!o(r))throw new TypeError("ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_02] We're missing the second input, rangesArr. It's meant to be an array of one or more range arrays.");if(!It(r))throw new TypeError("ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_03] Second input argument, rangesArr must be an array! Currently its type is: ".concat(t(e),", equal to: ").concat(JSON.stringify(e,null,4)));if(0===r.length)throw new TypeError("ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_04] Second input argument, rangesArr must be not empty! Currently it's empty.");var a=null;if(It(r)&&r.length>0&&!It(r[0]))throw new TypeError("ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_05] Second input argument, rangesArr must be an array of (index range) arrays! Currently it's equal to: ".concat(r,"."));if(!r.every(function(t,e){return!(!St(t[0],{includeZero:!0})||!St(t[1],{includeZero:!0}))||(a=e,!1)}))throw new TypeError("ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_06] Second input argument, rangesArr must consist of arrays which are natural number indexes representing string index ranges. However, ".concat($t(a)," range (").concat(JSON.stringify(r[a],null,4),") does not consist of only natural numbers!"));if(!r.every(function(t,e){return!(t[0]>t[1]&&(a=e,1))}))throw new TypeError("ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_07] The ".concat($t(a)," range (").concat(JSON.stringify(r[a],null,4),") in the ranges array has beginning of the index bigger than ending! They can be equal but in the backwards order."));if(o(n)&&!l(n))throw new TypeError("ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_08] Options object must be a plain object! Currently its type is: ".concat(t(n),", equal to: ").concat(JSON.stringify(n,null,4)));var s,c,u,f={inclusiveRangeEnds:!1,returnMatchedRangeInsteadOfTrue:!1,skipIncomingRangeSorting:!1},p=Object.assign(Object.assign({},f),n);if(jt(p,f,{msg:"ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_07*]"}),r.length<3)return 1===r.length?(s=p.inclusiveRangeEnds?i>=r[0][0]&&i<=r[0][1]:i>r[0][0]&&i<r[0][1],p.returnMatchedRangeInsteadOfTrue&&s?r[0]:s):(p.inclusiveRangeEnds?(c=i>=r[0][0]&&i<=r[0][1],u=i>=r[1][0]&&i<=r[1][1]):(c=i>r[0][0]&&i<r[0][1],u=i>r[1][0]&&i<r[1][1]),p.returnMatchedRangeInsteadOfTrue&&(c||u)?c?r[0]:r[1]:c||u);var y=p.skipIncomingRangeSorting?r:function(t,e){if(!Tt(t))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(0===t.length)return t;const r={strictlyTwoElementsInRangeArrays:!1,progressFn:null},n=Object.assign({},r,e);let o,i;if(jt(n,r,{msg:"ranges-sort: [THROW_ID_02*]",schema:{progressFn:["function","false","null"]}}),n.strictlyTwoElementsInRangeArrays&&!t.every((t,e)=>2===t.length||(o=e,i=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${$t(o)} range (${JSON.stringify(t[o],null,4)}) has not two but ${i} elements!`);if(!t.every((t,e)=>!(!St(t[0],{includeZero:!0})||!St(t[1],{includeZero:!0}))||(o=e,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${$t(o)} range (${JSON.stringify(t[o],null,4)}) does not consist of only natural numbers!`);const a=t.length*t.length;let s=0;return Array.from(t).sort((t,e)=>(n.progressFn&&(s++,n.progressFn(Math.floor(100*s/a))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1))}(r);if(i<y[0][0]||i>y[y.length-1][1])return!1;if(i===y[0][0])return!!p.inclusiveRangeEnds&&(!p.returnMatchedRangeInsteadOfTrue||y[0]);if(i===y[y.length-1][1])return!!p.inclusiveRangeEnds&&(!p.returnMatchedRangeInsteadOfTrue||y[y.length-1]);for(var h,g,d=0,b=y.length-1,v=Math.floor((b+d)/2);Math.floor(b-d)>1&&0!==v;)if(i<y[v=Math.floor((b+d)/2)][0])b=v;else{if(!(i>y[v][1]))return i===y[v][0]||i===y[v][1]?!!p.inclusiveRangeEnds&&(!p.returnMatchedRangeInsteadOfTrue||y[v]):!p.returnMatchedRangeInsteadOfTrue||y[v];d=v}return p.inclusiveRangeEnds?(h=i>=r[d][0]&&i<=r[d][1],g=i>=r[b][0]&&i<=r[b][1]):(h=i>r[d][0]&&i<r[d][1],g=i>r[b][0]&&i<r[b][1]),p.returnMatchedRangeInsteadOfTrue&&(h||g)?h?r[d]:r[b]:h||g}});
