/**
 * string-split-by-whitespace
 * Split string into array by chunks of whitespace
 * Version: 1.6.7
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-split-by-whitespace
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).stringSplitByWhitespace=t()}(this,function(){"use strict";var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e,t){return e(t={exports:{}},t.exports),t.exports}var r=t(function(t,r){var n,o,i,a,s,u,c,f,l,p,h,y,g,d,b,v,_,m,w,j;t.exports=(n="function"==typeof Promise,o="object"==typeof self?self:e,i="undefined"!=typeof Symbol,a="undefined"!=typeof Map,s="undefined"!=typeof Set,u="undefined"!=typeof WeakMap,c="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,l=i&&void 0!==Symbol.iterator,p=i&&void 0!==Symbol.toStringTag,h=s&&"function"==typeof Set.prototype.entries,y=a&&"function"==typeof Map.prototype.entries,g=h&&Object.getPrototypeOf((new Set).entries()),d=y&&Object.getPrototypeOf((new Map).entries()),b=l&&"function"==typeof Array.prototype[Symbol.iterator],v=b&&Object.getPrototypeOf([][Symbol.iterator]()),_=l&&"function"==typeof String.prototype[Symbol.iterator],m=_&&Object.getPrototypeOf(""[Symbol.iterator]()),w=8,j=-1,function(e){var t=typeof e;if("object"!==t)return t;if(null===e)return"null";if(e===o)return"global";if(Array.isArray(e)&&(!1===p||!(Symbol.toStringTag in e)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&e===window.location)return"Location";if("object"==typeof window.document&&e===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&e===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&e===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&e instanceof window.HTMLElement){if("BLOCKQUOTE"===e.tagName)return"HTMLQuoteElement";if("TD"===e.tagName)return"HTMLTableDataCellElement";if("TH"===e.tagName)return"HTMLTableHeaderCellElement"}}var r=p&&e[Symbol.toStringTag];if("string"==typeof r)return r;var i=Object.getPrototypeOf(e);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":n&&i===Promise.prototype?"Promise":s&&i===Set.prototype?"Set":a&&i===Map.prototype?"Map":c&&i===WeakSet.prototype?"WeakSet":u&&i===WeakMap.prototype?"WeakMap":f&&i===DataView.prototype?"DataView":a&&i===d?"Map Iterator":s&&i===g?"Set Iterator":b&&i===v?"Array Iterator":_&&i===m?"String Iterator":null===i?"Object":Object.prototype.toString.call(e).slice(w,j)})});function n(e,t,r){if(t!=t)return function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,i,r);for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}function o(e,t,r,n){for(var o=r-1,i=e.length;++o<i;)if(n(e[o],t))return o;return-1}function i(e){return e!=e}var a=Array.prototype.splice;function s(e,t,r,i){var s,u=i?o:n,c=-1,f=t.length,l=e;for(e===t&&(t=function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(t)),r&&(l=function(e,t){for(var r=-1,n=e?e.length:0,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}(e,(s=r,function(e){return s(e)})));++c<f;)for(var p=0,h=t[c],y=r?r(h):h;(p=u(l,y,p,i))>-1;)l!==e&&a.call(l,p,1),a.call(e,p,1);return e}var u=function(e,t){return e&&e.length&&t&&t.length?s(e,t):e},c=t(function(t,r){var n=200,o="__lodash_hash_undefined__",i=9007199254740991,a="[object Arguments]",s="[object Boolean]",u="[object Date]",c="[object Function]",f="[object GeneratorFunction]",l="[object Map]",p="[object Number]",h="[object Object]",y="[object RegExp]",g="[object Set]",d="[object String]",b="[object Symbol]",v="[object ArrayBuffer]",_="[object DataView]",m="[object Float32Array]",w="[object Float64Array]",j="[object Int8Array]",O="[object Int16Array]",$="[object Int32Array]",T="[object Uint8Array]",S="[object Uint8ClampedArray]",I="[object Uint16Array]",A="[object Uint32Array]",E=/\w*$/,x=/^\[object .+?Constructor\]$/,R=/^(?:0|[1-9]\d*)$/,k={};k[a]=k["[object Array]"]=k[v]=k[_]=k[s]=k[u]=k[m]=k[w]=k[j]=k[O]=k[$]=k[l]=k[p]=k[h]=k[y]=k[g]=k[d]=k[b]=k[T]=k[S]=k[I]=k[A]=!0,k["[object Error]"]=k[c]=k["[object WeakMap]"]=!1;var M="object"==typeof e&&e&&e.Object===Object&&e,N="object"==typeof self&&self&&self.Object===Object&&self,W=M||N||Function("return this")(),P=r&&!r.nodeType&&r,D=P&&t&&!t.nodeType&&t,H=D&&D.exports===P;function C(e,t){return e.set(t[0],t[1]),e}function L(e,t){return e.add(t),e}function K(e,t,r,n){var o=-1,i=e?e.length:0;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function J(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function V(e){var t=-1,r=Array(e.size);return e.forEach(function(e,n){r[++t]=[n,e]}),r}function Z(e,t){return function(r){return e(t(r))}}function F(e){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r}var B,q=Array.prototype,U=Function.prototype,z=Object.prototype,G=W["__core-js_shared__"],Q=(B=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+B:"",X=U.toString,Y=z.hasOwnProperty,ee=z.toString,te=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),re=H?W.Buffer:void 0,ne=W.Symbol,oe=W.Uint8Array,ie=Z(Object.getPrototypeOf,Object),ae=Object.create,se=z.propertyIsEnumerable,ue=q.splice,ce=Object.getOwnPropertySymbols,fe=re?re.isBuffer:void 0,le=Z(Object.keys,Object),pe=De(W,"DataView"),he=De(W,"Map"),ye=De(W,"Promise"),ge=De(W,"Set"),de=De(W,"WeakMap"),be=De(Object,"create"),ve=Je(pe),_e=Je(he),me=Je(ye),we=Je(ge),je=Je(de),Oe=ne?ne.prototype:void 0,$e=Oe?Oe.valueOf:void 0;function Te(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Se(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ie(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ae(e){this.__data__=new Se(e)}function Ee(e,t){var r=Ze(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&Fe(e)}(e)&&Y.call(e,"callee")&&(!se.call(e,"callee")||ee.call(e)==a)}(e)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],n=r.length,o=!!n;for(var i in e)!t&&!Y.call(e,i)||o&&("length"==i||Le(i,n))||r.push(i);return r}function xe(e,t,r){var n=e[t];Y.call(e,t)&&Ve(n,r)&&(void 0!==r||t in e)||(e[t]=r)}function Re(e,t){for(var r=e.length;r--;)if(Ve(e[r][0],t))return r;return-1}function ke(e,t,r,n,o,i,x){var R;if(n&&(R=i?n(e,o,i,x):n(e)),void 0!==R)return R;if(!Ue(e))return e;var M=Ze(e);if(M){if(R=function(e){var t=e.length,r=e.constructor(t);t&&"string"==typeof e[0]&&Y.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!t)return function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(e,R)}else{var N=Ce(e),W=N==c||N==f;if(Be(e))return function(e,t){if(t)return e.slice();var r=new e.constructor(e.length);return e.copy(r),r}(e,t);if(N==h||N==a||W&&!i){if(J(e))return i?e:{};if(R=function(e){return"function"!=typeof e.constructor||Ke(e)?{}:(t=ie(e),Ue(t)?ae(t):{});var t}(W?{}:e),!t)return function(e,t){return We(e,He(e),t)}(e,function(e,t){return e&&We(t,ze(t),e)}(R,e))}else{if(!k[N])return i?e:{};R=function(e,t,r,n){var o=e.constructor;switch(t){case v:return Ne(e);case s:case u:return new o(+e);case _:return function(e,t){var r=t?Ne(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,n);case m:case w:case j:case O:case $:case T:case S:case I:case A:return function(e,t){var r=t?Ne(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}(e,n);case l:return function(e,t,r){return K(t?r(V(e),!0):V(e),C,new e.constructor)}(e,n,r);case p:case d:return new o(e);case y:return(c=new(a=e).constructor(a.source,E.exec(a))).lastIndex=a.lastIndex,c;case g:return function(e,t,r){return K(t?r(F(e),!0):F(e),L,new e.constructor)}(e,n,r);case b:return i=e,$e?Object($e.call(i)):{}}var i;var a,c}(e,N,ke,t)}}x||(x=new Ae);var P=x.get(e);if(P)return P;if(x.set(e,R),!M)var D=r?function(e){return function(e,t,r){var n=t(e);return Ze(e)?n:function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}(n,r(e))}(e,ze,He)}(e):ze(e);return function(e,t){for(var r=-1,n=e?e.length:0;++r<n&&!1!==t(e[r],r,e););}(D||e,function(o,i){D&&(o=e[i=o]),xe(R,i,ke(o,t,r,n,i,e,x))}),R}function Me(e){return!(!Ue(e)||(t=e,Q&&Q in t))&&(qe(e)||J(e)?te:x).test(Je(e));var t}function Ne(e){var t=new e.constructor(e.byteLength);return new oe(t).set(new oe(e)),t}function We(e,t,r,n){r||(r={});for(var o=-1,i=t.length;++o<i;){var a=t[o],s=n?n(r[a],e[a],a,r,e):void 0;xe(r,a,void 0===s?e[a]:s)}return r}function Pe(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function De(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return Me(r)?r:void 0}Te.prototype.clear=function(){this.__data__=be?be(null):{}},Te.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},Te.prototype.get=function(e){var t=this.__data__;if(be){var r=t[e];return r===o?void 0:r}return Y.call(t,e)?t[e]:void 0},Te.prototype.has=function(e){var t=this.__data__;return be?void 0!==t[e]:Y.call(t,e)},Te.prototype.set=function(e,t){return this.__data__[e]=be&&void 0===t?o:t,this},Se.prototype.clear=function(){this.__data__=[]},Se.prototype.delete=function(e){var t=this.__data__,r=Re(t,e);return!(r<0||(r==t.length-1?t.pop():ue.call(t,r,1),0))},Se.prototype.get=function(e){var t=this.__data__,r=Re(t,e);return r<0?void 0:t[r][1]},Se.prototype.has=function(e){return Re(this.__data__,e)>-1},Se.prototype.set=function(e,t){var r=this.__data__,n=Re(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},Ie.prototype.clear=function(){this.__data__={hash:new Te,map:new(he||Se),string:new Te}},Ie.prototype.delete=function(e){return Pe(this,e).delete(e)},Ie.prototype.get=function(e){return Pe(this,e).get(e)},Ie.prototype.has=function(e){return Pe(this,e).has(e)},Ie.prototype.set=function(e,t){return Pe(this,e).set(e,t),this},Ae.prototype.clear=function(){this.__data__=new Se},Ae.prototype.delete=function(e){return this.__data__.delete(e)},Ae.prototype.get=function(e){return this.__data__.get(e)},Ae.prototype.has=function(e){return this.__data__.has(e)},Ae.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Se){var o=r.__data__;if(!he||o.length<n-1)return o.push([e,t]),this;r=this.__data__=new Ie(o)}return r.set(e,t),this};var He=ce?Z(ce,Object):function(){return[]},Ce=function(e){return ee.call(e)};function Le(e,t){return!!(t=null==t?i:t)&&("number"==typeof e||R.test(e))&&e>-1&&e%1==0&&e<t}function Ke(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||z)}function Je(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Ve(e,t){return e===t||e!=e&&t!=t}(pe&&Ce(new pe(new ArrayBuffer(1)))!=_||he&&Ce(new he)!=l||ye&&"[object Promise]"!=Ce(ye.resolve())||ge&&Ce(new ge)!=g||de&&"[object WeakMap]"!=Ce(new de))&&(Ce=function(e){var t=ee.call(e),r=t==h?e.constructor:void 0,n=r?Je(r):void 0;if(n)switch(n){case ve:return _;case _e:return l;case me:return"[object Promise]";case we:return g;case je:return"[object WeakMap]"}return t});var Ze=Array.isArray;function Fe(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=i}(e.length)&&!qe(e)}var Be=fe||function(){return!1};function qe(e){var t=Ue(e)?ee.call(e):"";return t==c||t==f}function Ue(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function ze(e){return Fe(e)?Ee(e):function(e){if(!Ke(e))return le(e);var t=[];for(var r in Object(e))Y.call(e,r)&&"constructor"!=r&&t.push(r);return t}(e)}t.exports=function(e){return ke(e,!0,!0)}}),f="[object Object]";var l,p,h=Function.prototype,y=Object.prototype,g=h.toString,d=y.hasOwnProperty,b=g.call(Object),v=y.toString,_=(l=Object.getPrototypeOf,p=Object,function(e){return l(p(e))});var m=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||v.call(e)!=f||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=_(e);if(null===t)return!0;var r=d.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&g.call(r)==b};const w=Array.isArray;function j(e){return"string"==typeof e&&e.length>0&&"."===e[0]?e.slice(1):e}function O(e,t){return function e(t,r,n){const o=c(t);let i,a,s,u,f;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,w(o))for(i=0,a=o.length;i<a;i++){const t=`${n.path}.${i}`;void 0!==o[i]?(n.parent=c(o),n.parentType="array",s=e(r(o[i],void 0,Object.assign({},n,{path:j(t)})),r,Object.assign({},n,{path:j(t)})),Number.isNaN(s)&&i<o.length?(o.splice(i,1),i-=1):o[i]=s):o.splice(i,1)}else if(m(o))for(i=0,a=(u=Object.keys(o)).length;i<a;i++){f=u[i];const t=`${n.path}.${f}`;0===n.depth&&null!=f&&(n.topmostKey=f),n.parent=c(o),n.parentType="object",s=e(r(f,o[f],Object.assign({},n,{path:j(t)})),r,Object.assign({},n,{path:j(t)})),Number.isNaN(s)?delete o[f]:o[f]=s}return o}(e,t,{})}var $="__lodash_hash_undefined__",T=9007199254740991,S="[object Function]",I="[object GeneratorFunction]",A=/^\[object .+?Constructor\]$/,E="object"==typeof e&&e&&e.Object===Object&&e,x="object"==typeof self&&self&&self.Object===Object&&self,R=E||x||Function("return this")();function k(e,t){return!!(e?e.length:0)&&function(e,t,r){if(t!=t)return function(e,t,r,n){var o=e.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,W,r);var n=r-1,o=e.length;for(;++n<o;)if(e[n]===t)return n;return-1}(e,t,0)>-1}function M(e,t,r){for(var n=-1,o=e?e.length:0;++n<o;)if(r(t,e[n]))return!0;return!1}function N(e,t){for(var r=-1,n=e?e.length:0,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function W(e){return e!=e}function P(e){return function(t){return e(t)}}function D(e,t){return e.has(t)}var H,C=Array.prototype,L=Function.prototype,K=Object.prototype,J=R["__core-js_shared__"],V=(H=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||""))?"Symbol(src)_1."+H:"",Z=L.toString,F=K.hasOwnProperty,B=K.toString,q=RegExp("^"+Z.call(F).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),U=C.splice,z=Math.max,G=Math.min,Q=se(R,"Map"),X=se(Object,"create");function Y(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function ee(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function te(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function re(e){var t=-1,r=e?e.length:0;for(this.__data__=new te;++t<r;)this.add(e[t])}function ne(e,t){for(var r,n,o=e.length;o--;)if((r=e[o][0])===(n=t)||r!=r&&n!=n)return o;return-1}function oe(e){return!(!ce(e)||(t=e,V&&V in t))&&(ue(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?q:A).test(function(e){if(null!=e){try{return Z.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e));var t}function ie(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&function(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=T}(e.length)&&!ue(e)}(e)}(e)?e:[]}function ae(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function se(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return oe(r)?r:void 0}function ue(e){var t=ce(e)?B.call(e):"";return t==S||t==I}function ce(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}Y.prototype.clear=function(){this.__data__=X?X(null):{}},Y.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},Y.prototype.get=function(e){var t=this.__data__;if(X){var r=t[e];return r===$?void 0:r}return F.call(t,e)?t[e]:void 0},Y.prototype.has=function(e){var t=this.__data__;return X?void 0!==t[e]:F.call(t,e)},Y.prototype.set=function(e,t){return this.__data__[e]=X&&void 0===t?$:t,this},ee.prototype.clear=function(){this.__data__=[]},ee.prototype.delete=function(e){var t=this.__data__,r=ne(t,e);return!(r<0||(r==t.length-1?t.pop():U.call(t,r,1),0))},ee.prototype.get=function(e){var t=this.__data__,r=ne(t,e);return r<0?void 0:t[r][1]},ee.prototype.has=function(e){return ne(this.__data__,e)>-1},ee.prototype.set=function(e,t){var r=this.__data__,n=ne(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},te.prototype.clear=function(){this.__data__={hash:new Y,map:new(Q||ee),string:new Y}},te.prototype.delete=function(e){return ae(this,e).delete(e)},te.prototype.get=function(e){return ae(this,e).get(e)},te.prototype.has=function(e){return ae(this,e).has(e)},te.prototype.set=function(e,t){return ae(this,e).set(e,t),this},re.prototype.add=re.prototype.push=function(e){return this.__data__.set(e,$),this},re.prototype.has=function(e){return this.__data__.has(e)};var fe=function(e,t){return t=z(void 0===t?e.length-1:t,0),function(){for(var r=arguments,n=-1,o=z(r.length-t,0),i=Array(o);++n<o;)i[n]=r[t+n];n=-1;for(var a=Array(t+1);++n<t;)a[n]=r[n];return a[t]=i,function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}(e,this,a)}}(function(e){var t=N(e,ie);return t.length&&t[0]===e[0]?function(e,t,r){for(var n=r?M:k,o=e[0].length,i=e.length,a=i,s=Array(i),u=1/0,c=[];a--;){var f=e[a];a&&t&&(f=N(f,P(t))),u=G(f.length,u),s[a]=!r&&(t||o>=120&&f.length>=120)?new re(a&&f):void 0}f=e[0];var l=-1,p=s[0];e:for(;++l<o&&c.length<u;){var h=f[l],y=t?t(h):h;if(h=r||0!==h?h:0,!(p?D(p,y):n(c,y,r))){for(a=i;--a;){var g=s[a];if(!(g?D(g,y):n(e[a],y,r)))continue e}p&&p.push(y),c.push(h)}}return c}(t):[]});function le(e){return"string"==typeof e?e.length>0?[e]:[]:e}var pe=t(function(e){e.exports=function(){var e=Object.prototype.toString;function t(e,t){return null!=e&&Object.prototype.hasOwnProperty.call(e,t)}function r(e){if(!e)return!0;if(o(e)&&0===e.length)return!0;if("string"!=typeof e){for(var r in e)if(t(e,r))return!1;return!0}return!1}function n(t){return e.call(t)}var o=Array.isArray||function(t){return"[object Array]"===e.call(t)};function i(e){var t=parseInt(e);return t.toString()===e?t:e}function a(e){e=e||{};var a=function(e){return Object.keys(a).reduce(function(t,r){return"create"===r?t:("function"==typeof a[r]&&(t[r]=a[r].bind(a,e)),t)},{})};function s(r,n){return e.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||t(r,n)}function u(e,t){if(s(e,t))return e[t]}function c(e,t,r,n){if("number"==typeof t&&(t=[t]),!t||0===t.length)return e;if("string"==typeof t)return c(e,t.split(".").map(i),r,n);var o=t[0],a=u(e,o);return 1===t.length?(void 0!==a&&n||(e[o]=r),a):(void 0===a&&("number"==typeof t[1]?e[o]=[]:e[o]={}),c(e[o],t.slice(1),r,n))}return a.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var a=0;a<n.length;a++){var s=i(n[a]);if(!("number"==typeof s&&o(r)&&s<r.length||(e.includeInheritedProps?s in Object(r):t(r,s))))return!1;r=r[s]}return!0},a.ensureExists=function(e,t,r){return c(e,t,r,!0)},a.set=function(e,t,r,n){return c(e,t,r,n)},a.insert=function(e,t,r,n){var i=a.get(e,t);n=~~n,o(i)||(i=[],a.set(e,t,i)),i.splice(n,0,r)},a.empty=function(e,t){var i,u;if(!r(t)&&null!=e&&(i=a.get(e,t))){if("string"==typeof i)return a.set(e,t,"");if(function(e){return"boolean"==typeof e||"[object Boolean]"===n(e)}(i))return a.set(e,t,!1);if("number"==typeof i)return a.set(e,t,0);if(o(i))i.length=0;else{if(!function(e){return"object"==typeof e&&"[object Object]"===n(e)}(i))return a.set(e,t,null);for(u in i)s(i,u)&&delete i[u]}}},a.push=function(e,t){var r=a.get(e,t);o(r)||(r=[],a.set(e,t,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},a.coalesce=function(e,t,r){for(var n,o=0,i=t.length;o<i;o++)if(void 0!==(n=a.get(e,t[o])))return n;return r},a.get=function(e,t,r){if("number"==typeof t&&(t=[t]),!t||0===t.length)return e;if(null==e)return r;if("string"==typeof t)return a.get(e,t.split("."),r);var n=i(t[0]),o=u(e,n);return void 0===o?r:1===t.length?o:a.get(e[n],t.slice(1),r)},a.del=function(e,t){if("number"==typeof t&&(t=[t]),null==e)return e;if(r(t))return e;if("string"==typeof t)return a.del(e,t.split("."));var n=i(t[0]);return s(e,n)?1!==t.length?a.del(e[n],t.slice(1)):(o(e)?e.splice(n,1):delete e[n],e):e},a}var s=a();return s.create=a,s.withInheritedProps=a({includeInheritedProps:!0}),s}()}),he=function(e){var t=e%100;if(t>=10&&t<=20)return"th";var r=e%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"};function ye(e){if("number"!=typeof e)throw new TypeError("Expected Number, got "+typeof e+" "+e);return e+he(e)}ye.indicator=he;var ge=ye,de=/[|\\{}()[\]^$+*?.]/g,be=function(e){if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(de,"\\$&")};const ve=new Map;function _e(e,t){const r=Object.assign({caseSensitive:!1},t),n=e+JSON.stringify(r);if(ve.has(n))return ve.get(n);const o="!"===e[0];o&&(e=e.slice(1)),e=be(e).replace(/\\\*/g,".*");const i=new RegExp(`^${e}$`,r.caseSensitive?"":"i");return i.negated=o,ve.set(n,i),i}var me=(e,t,r)=>{if(!Array.isArray(e)||!Array.isArray(t))throw new TypeError(`Expected two arrays, got ${typeof e} ${typeof t}`);if(0===t.length)return e;const n="!"===t[0][0];t=t.map(e=>_e(e,r));const o=[];for(const r of e){let e=n;for(const n of t)n.test(r)&&(e=!n.negated);e&&o.push(r)}return o};function we(e,t,n){return function e(t,n,o,i=!0){const a=Object.prototype.hasOwnProperty;function s(e){return null!=e}function c(e){return"Object"===r(e)}function f(e,t){return t=le(t),Array.from(e).filter(e=>!t.some(t=>me.isMatch(e,t,{caseSensitive:!0})))}const l=["any","anything","every","everything","all","whatever","whatevs"],p=Array.isArray;if(!s(t))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const h={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let y;if(y=s(o)&&c(o)?Object.assign({},h,o):Object.assign({},h),s(y.ignoreKeys)&&y.ignoreKeys?y.ignoreKeys=le(y.ignoreKeys):y.ignoreKeys=[],s(y.ignorePaths)&&y.ignorePaths?y.ignorePaths=le(y.ignorePaths):y.ignorePaths=[],s(y.acceptArraysIgnore)&&y.acceptArraysIgnore?y.acceptArraysIgnore=le(y.acceptArraysIgnore):y.acceptArraysIgnore=[],y.msg="string"==typeof y.msg?y.msg.trim():y.msg,":"===y.msg[y.msg.length-1]&&(y.msg=y.msg.slice(0,y.msg.length-1).trim()),y.schema&&(Object.keys(y.schema).forEach(e=>{if(c(y.schema[e])){const t={};O(y.schema[e],(r,n,o)=>{const i=void 0!==n?n:r;return p(i)||c(i)||(t[`${e}.${o.path}`]=i),i}),delete y.schema[e],y.schema=Object.assign(y.schema,t)}}),Object.keys(y.schema).forEach(e=>{p(y.schema[e])||(y.schema[e]=[y.schema[e]]),y.schema[e]=y.schema[e].map(String).map(e=>e.toLowerCase()).map(e=>e.trim())})),s(n)||(n={}),i&&e(y,h,{enforceStrictKeyset:!1},!1),y.enforceStrictKeyset)if(s(y.schema)&&Object.keys(y.schema).length>0){if(0!==f(u(Object.keys(t),Object.keys(n).concat(Object.keys(y.schema))),y.ignoreKeys).length){const e=u(Object.keys(t),Object.keys(n).concat(Object.keys(y.schema)));throw new TypeError(`${y.msg}: ${y.optsVarName}.enforceStrictKeyset is on and the following key${e.length>1?"s":""} ${e.length>1?"are":"is"} not covered by schema and/or reference objects: ${e.join(", ")}`)}}else{if(!(s(n)&&Object.keys(n).length>0))throw new TypeError(`${y.msg}: Both ${y.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==f(u(Object.keys(t),Object.keys(n)),y.ignoreKeys).length){const e=u(Object.keys(t),Object.keys(n));throw new TypeError(`${y.msg}: The input object has key${e.length>1?"s":""} which ${e.length>1?"are":"is"} not covered by the reference object: ${e.join(", ")}`)}if(0!==f(u(Object.keys(n),Object.keys(t)),y.ignoreKeys).length){const e=u(Object.keys(n),Object.keys(t));throw new TypeError(`${y.msg}: The reference object has key${e.length>1?"s":""} which ${e.length>1?"are":"is"} not present in the input object: ${e.join(", ")}`)}}const g=[];O(t,(e,o,i)=>{let s=o,u=e;if("array"===i.parentType&&(u=void 0,s=e),p(g)&&g.length&&g.some(e=>i.path.startsWith(e)))return s;if(u&&y.ignoreKeys.some(e=>me.isMatch(u,e)))return s;if(y.ignorePaths.some(e=>me.isMatch(i.path,e)))return s;const f=!(!c(s)&&!p(s)&&p(i.parent));let h=!1;c(y.schema)&&a.call(y.schema,pe.get(i.path))&&(h=!0);let d=!1;if(c(n)&&pe.has(n,pe.get(i.path))&&(d=!0),y.enforceStrictKeyset&&f&&!h&&!d)throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path} is neither covered by reference object (second input argument), nor ${y.optsVarName}.schema! To stop this error, turn off ${y.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${y.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(t,null,4)}\n\nref = ${JSON.stringify(n,null,4)}\n\ninnerObj = ${JSON.stringify(i,null,4)}\n\nopts = ${JSON.stringify(y,null,4)}\n\ncurrent = ${JSON.stringify(s,null,4)}\n\n`);if(h){const e=le(y.schema[i.path]).map(String).map(e=>e.toLowerCase());if(pe.set(y.schema,i.path,e),fe(e,l).length)g.push(i.path);else if(!0!==s&&!1!==s&&!e.includes(r(s).toLowerCase())||(!0===s||!1===s)&&!e.includes(String(s))&&!e.includes("boolean")){if(!p(s)||!y.acceptArrays)throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path} was customised to ${"string"!==r(s)?'"':""}${JSON.stringify(s,null,0)}${"string"!==r(s)?'"':""} (type: ${r(s).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(e,null,0)})`);for(let t=0,n=s.length;t<n;t++)if(!e.includes(r(s[t]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path}.${t}, the ${ge(t+1)} element (equal to ${JSON.stringify(s[t],null,0)}) is of a type ${r(s[t]).toLowerCase()}, but only the following are allowed by the ${y.optsVarName}.schema: ${e.join(", ")}`)}}else if(d){const t=pe.get(n,i.path);if(y.acceptArrays&&p(s)&&!y.acceptArraysIgnore.includes(e)){if(!s.every(t=>r(t).toLowerCase()===r(n[e]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path} was customised to be array, but not all of its elements are ${r(n[e]).toLowerCase()}-type`)}else if(r(s)!==r(t))throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path} was customised to ${"string"===r(s).toLowerCase()?"":'"'}${JSON.stringify(s,null,0)}${"string"===r(s).toLowerCase()?"":'"'} which is not ${r(t).toLowerCase()} but ${r(s).toLowerCase()}`)}return s})}(e,t,n)}me.isMatch=((e,t,r)=>{const n=_e(t,r),o=n.test(e);return n.negated?!o:o});var je=function(e,t){if("string"!=typeof e)return!1;if(t&&"includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(e)}return/^[1-9]\d*(\.0+)?$/.test(e)},Oe=function(e,t){if(t){if("object"!=typeof t)throw new TypeError(String(t)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero&&0===e)return!0}}return Number.isSafeInteger(e)&&e>=1},$e=t(function(e,t){(t=e.exports=function(e){return e+t.suffix(+e)}).suffix=function(e){return e%=100,1===Math.floor(e/10)?"th":e%10==1?"st":e%10==2?"nd":e%10==3?"rd":"th"}});$e.suffix;const Te=Array.isArray;const Se=Array.isArray;function Ie(e,t,r){function n(e){return null!=e}let o;if(null===t)return!1;if(Oe(e,{includeZero:!0}))o=e;else{if(!je(e,{includeZero:!0}))throw new TypeError(`ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_01] Input must mean an index, so it has to be either a natural number or a string containing natural number! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);o=parseInt(e,10)}if(!n(t))throw new TypeError("ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_02] We're missing the second input, rangesArr. It's meant to be an array of one or more range arrays.");if(!Se(t))throw new TypeError(`ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_03] Second input argument, rangesArr must be an array! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===t.length)throw new TypeError("ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_04] Second input argument, rangesArr must be not empty! Currently it's empty.");let i=null;if(Se(t)&&t.length>0&&!Se(t[0]))throw new TypeError(`ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_05] Second input argument, rangesArr must be an array of (index range) arrays! Currently it's equal to: ${t}.`);if(!t.every((e,t)=>!(!Oe(e[0],{includeZero:!0})||!Oe(e[1],{includeZero:!0}))||(i=t,!1)))throw new TypeError(`ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_06] Second input argument, rangesArr must consist of arrays which are natural number indexes representing string index ranges. However, ${$e(i)} range (${JSON.stringify(t[i],null,4)}) does not consist of only natural numbers!`);if(!t.every((e,t)=>!(e[0]>e[1])||(i=t,!1)))throw new TypeError(`ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_07] The ${$e(i)} range (${JSON.stringify(t[i],null,4)}) in the ranges array has beginning of the index bigger than ending! They can be equal but in the backwards order.`);if(n(r)&&!m(r))throw new TypeError(`ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_08] Options object must be a plain object! Currently its type is: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);const a={inclusiveRangeEnds:!1,returnMatchedRangeInsteadOfTrue:!1,skipIncomingRangeSorting:!1},s=Object.assign(Object.assign({},a),r);if(we(s,a,{msg:"ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_07*]"}),t.length<3){if(1===t.length){let e;return e=s.inclusiveRangeEnds?o>=t[0][0]&&o<=t[0][1]:o>t[0][0]&&o<t[0][1],s.returnMatchedRangeInsteadOfTrue&&e?t[0]:e}let e,r;return s.inclusiveRangeEnds?(e=o>=t[0][0]&&o<=t[0][1],r=o>=t[1][0]&&o<=t[1][1]):(e=o>t[0][0]&&o<t[0][1],r=o>t[1][0]&&o<t[1][1]),s.returnMatchedRangeInsteadOfTrue&&(e||r)?e?t[0]:t[1]:e||r}const u=s.skipIncomingRangeSorting?t:function(e,t){if(!Te(e))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===e.length)return e;const r={strictlyTwoElementsInRangeArrays:!1,progressFn:null},n=Object.assign({},r,t);let o,i;if(we(n,r,{msg:"ranges-sort: [THROW_ID_02*]",schema:{progressFn:["function","false","null"]}}),n.strictlyTwoElementsInRangeArrays&&!e.every((e,t)=>2===e.length||(o=t,i=e.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${$e(o)} range (${JSON.stringify(e[o],null,4)}) has not two but ${i} elements!`);if(!e.every((e,t)=>!(!Oe(e[0],{includeZero:!0})||!Oe(e[1],{includeZero:!0}))||(o=t,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${$e(o)} range (${JSON.stringify(e[o],null,4)}) does not consist of only natural numbers!`);const a=e.length*e.length;let s=0;return Array.from(e).sort((e,t)=>(n.progressFn&&(s++,n.progressFn(Math.floor(100*s/a))),e[0]===t[0]?e[1]<t[1]?-1:e[1]>t[1]?1:0:e[0]<t[0]?-1:1))}(t);if(o<u[0][0]||o>u[u.length-1][1])return!1;if(o===u[0][0])return!!s.inclusiveRangeEnds&&(!s.returnMatchedRangeInsteadOfTrue||u[0]);if(o===u[u.length-1][1])return!!s.inclusiveRangeEnds&&(!s.returnMatchedRangeInsteadOfTrue||u[u.length-1]);let c,f,l=0,p=u.length-1,h=Math.floor((p+l)/2);for(;Math.floor(p-l)>1&&0!==h;)if(o<u[h=Math.floor((p+l)/2)][0])p=h;else{if(!(o>u[h][1]))return o===u[h][0]||o===u[h][1]?!!s.inclusiveRangeEnds&&(!s.returnMatchedRangeInsteadOfTrue||u[h]):!s.returnMatchedRangeInsteadOfTrue||u[h];l=h}return s.inclusiveRangeEnds?(c=o>=t[l][0]&&o<=t[l][1],f=o>=t[p][0]&&o<=t[p][1]):(c=o>t[l][0]&&o<t[l][1],f=o>t[p][0]&&o<t[p][1]),s.returnMatchedRangeInsteadOfTrue&&(c||f)?c?t[l]:t[p]:c||f}return function(e,t){if(void 0===e)throw new Error("string-split-by-whitespace: [THROW_ID_01] The input is missing!");if("string"!=typeof e)return e;if(""===e.trim())return[];var r={ignoreRanges:[]},n=Object.assign({},r,t);if(we(n,r,{msg:"string-split-by-whitespace: [THROW_ID_02*]",ignorePaths:["ignoreRanges.*"]}),n.ignoreRanges.length>0&&!n.ignoreRanges.every(function(e){return Array.isArray(e)}))throw new Error("string-split-by-whitespace: [THROW_ID_03] The opts.ignoreRanges contains elements which are not arrays!");for(var o=null,i=[],a=0,s=e.length;a<s;a++)null!==o||""===e[a].trim()||0!==n.ignoreRanges.length&&(0===n.ignoreRanges.length||Ie(a,n.ignoreRanges.map(function(e){return[e[0],e[1]-1]}),{inclusiveRangeEnds:!0}))||(o=a),null!==o&&(""===e[a].trim()?(i.push(e.slice(o,a)),o=null):n.ignoreRanges.length&&Ie(a,n.ignoreRanges)?(i.push(e.slice(o,a-1)),o=null):void 0===e[a+1]&&i.push(e.slice(o,a+1)));return i}});
