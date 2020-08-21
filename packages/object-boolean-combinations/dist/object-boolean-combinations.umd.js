/**
 * object-boolean-combinations
 * Generate an array full of object copies, each containing a unique Boolean value combination. Includes overrides.
 * Version: 2.11.62
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/object-boolean-combinations
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).objectBooleanCombinations=r()}(this,(function(){"use strict";function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(r)}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var n="__lodash_hash_undefined__",e=9007199254740991,o=/^\[object .+?Constructor\]$/,u="object"==t(r)&&r&&r.Object===Object&&r,c="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,i=u||c||Function("return this")();function a(t,r,n){switch(n.length){case 0:return t.call(r);case 1:return t.call(r,n[0]);case 2:return t.call(r,n[0],n[1]);case 3:return t.call(r,n[0],n[1],n[2])}return t.apply(r,n)}function f(t,r){return!!(t?t.length:0)&&function(t,r,n){if(r!=r)return function(t,r,n,e){var o=t.length,u=n+(e?1:-1);for(;e?u--:++u<o;)if(r(t[u],u,t))return u;return-1}(t,h,n);var e=n-1,o=t.length;for(;++e<o;)if(t[e]===r)return e;return-1}(t,r,0)>-1}function s(t,r,n){for(var e=-1,o=t?t.length:0;++e<o;)if(n(r,t[e]))return!0;return!1}function l(t,r){for(var n=-1,e=t?t.length:0,o=Array(e);++n<e;)o[n]=r(t[n],n,t);return o}function h(t){return t!=t}function p(t){return function(r){return t(r)}}function _(t,r){return t.has(r)}var y,v,d,b=Array.prototype,g=Function.prototype,j=Object.prototype,w=i["__core-js_shared__"],O=(y=/[^.]+$/.exec(w&&w.keys&&w.keys.IE_PROTO||""))?"Symbol(src)_1."+y:"",m=g.toString,A=j.hasOwnProperty,S=j.toString,x=RegExp("^"+m.call(A).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),E=b.splice,$=Math.max,k=Math.min,P=C(i,"Map"),F=C(Object,"create");function I(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function T(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function M(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function R(t){var r=-1,n=t?t.length:0;for(this.__data__=new M;++r<n;)this.add(t[r])}function D(t,r){for(var n,e,o=t.length;o--;)if((n=t[o][0])===(e=r)||n!=n&&e!=e)return o;return-1}function B(t){return!(!q(t)||(r=t,O&&O in r))&&(H(t)||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t)?x:o).test(function(t){if(null!=t){try{return m.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var r}function U(r){return function(r){return function(r){return!!r&&"object"==t(r)}(r)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=e}(t.length)&&!H(t)}(r)}(r)?r:[]}function W(r,n){var e,o,u=r.__data__;return("string"==(o=t(e=n))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==e:null===e)?u["string"==typeof n?"string":"hash"]:u.map}function C(t,r){var n=function(t,r){return null==t?void 0:t[r]}(t,r);return B(n)?n:void 0}function H(t){var r=q(t)?S.call(t):"";return"[object Function]"==r||"[object GeneratorFunction]"==r}function q(r){var n=t(r);return!!r&&("object"==n||"function"==n)}I.prototype.clear=function(){this.__data__=F?F(null):{}},I.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},I.prototype.get=function(t){var r=this.__data__;if(F){var e=r[t];return e===n?void 0:e}return A.call(r,t)?r[t]:void 0},I.prototype.has=function(t){var r=this.__data__;return F?void 0!==r[t]:A.call(r,t)},I.prototype.set=function(t,r){return this.__data__[t]=F&&void 0===r?n:r,this},T.prototype.clear=function(){this.__data__=[]},T.prototype.delete=function(t){var r=this.__data__,n=D(r,t);return!(n<0)&&(n==r.length-1?r.pop():E.call(r,n,1),!0)},T.prototype.get=function(t){var r=this.__data__,n=D(r,t);return n<0?void 0:r[n][1]},T.prototype.has=function(t){return D(this.__data__,t)>-1},T.prototype.set=function(t,r){var n=this.__data__,e=D(n,t);return e<0?n.push([t,r]):n[e][1]=r,this},M.prototype.clear=function(){this.__data__={hash:new I,map:new(P||T),string:new I}},M.prototype.delete=function(t){return W(this,t).delete(t)},M.prototype.get=function(t){return W(this,t).get(t)},M.prototype.has=function(t){return W(this,t).has(t)},M.prototype.set=function(t,r){return W(this,t).set(t,r),this},R.prototype.add=R.prototype.push=function(t){return this.__data__.set(t,n),this},R.prototype.has=function(t){return this.__data__.has(t)};var z=(v=function(t){var r=l(t,U);return r.length&&r[0]===t[0]?function(t,r,n){for(var e=n?s:f,o=t[0].length,u=t.length,c=u,i=Array(u),a=1/0,h=[];c--;){var y=t[c];c&&r&&(y=l(y,p(r))),a=k(y.length,a),i[c]=!n&&(r||o>=120&&y.length>=120)?new R(c&&y):void 0}y=t[0];var v=-1,d=i[0];t:for(;++v<o&&h.length<a;){var b=y[v],g=r?r(b):b;if(b=n||0!==b?b:0,!(d?_(d,g):e(h,g,n))){for(c=u;--c;){var j=i[c];if(!(j?_(j,g):e(t[c],g,n)))continue t}d&&d.push(g),h.push(b)}}return h}(r):[]},d=$(void 0===d?v.length-1:d,0),function(){for(var t=arguments,r=-1,n=$(t.length-d,0),e=Array(n);++r<n;)e[r]=t[d+r];r=-1;for(var o=Array(d+1);++r<d;)o[r]=t[r];return o[d]=e,a(v,this,o)});function G(t,r,n){switch(n.length){case 0:return t.call(r);case 1:return t.call(r,n[0]);case 2:return t.call(r,n[0],n[1]);case 3:return t.call(r,n[0],n[1],n[2])}return t.apply(r,n)}function L(t,r,n){if(r!=r)return function(t,r,n,e){for(var o=t.length,u=n+(e?1:-1);e?u--:++u<o;)if(r(t[u],u,t))return u;return-1}(t,N,n);for(var e=n-1,o=t.length;++e<o;)if(t[e]===r)return e;return-1}function V(t,r,n,e){for(var o=n-1,u=t.length;++o<u;)if(e(t[o],r))return o;return-1}function N(t){return t!=t}var J=Array.prototype.splice,K=Math.max;function Q(t,r,n,e){var o=e?V:L,u=-1,c=r.length,i=t;for(t===r&&(r=function(t,r){var n=-1,e=t.length;r||(r=Array(e));for(;++n<e;)r[n]=t[n];return r}(r)),n&&(i=function(t,r){for(var n=-1,e=t?t.length:0,o=Array(e);++n<e;)o[n]=r(t[n],n,t);return o}(t,function(t){return function(r){return t(r)}}(n)));++u<c;)for(var a=0,f=r[u],s=n?n(f):f;(a=o(i,s,a,e))>-1;)i!==t&&J.call(i,a,1),J.call(t,a,1);return t}var X=function(t,r){return r=K(void 0===r?t.length-1:r,0),function(){for(var n=arguments,e=-1,o=K(n.length-r,0),u=Array(o);++e<o;)u[e]=n[r+e];e=-1;for(var c=Array(r+1);++e<r;)c[e]=n[e];return c[r]=u,G(t,this,c)}}((function(t,r){return t&&t.length&&r&&r.length?Q(t,r):t}));var Y=Function.prototype,Z=Object.prototype,tt=Y.toString,rt=Z.hasOwnProperty,nt=tt.call(Object),et=Z.toString,ot=function(t,r){return function(n){return t(r(n))}}(Object.getPrototypeOf,Object);var ut=function(r){if(!function(r){return!!r&&"object"==t(r)}(r)||"[object Object]"!=et.call(r)||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(r))return!1;var n=ot(r);if(null===n)return!0;var e=rt.call(n,"constructor")&&n.constructor;return"function"==typeof e&&e instanceof e&&tt.call(e)==nt},ct=function(t,r,n){return t(n={path:r,exports:{},require:function(t,r){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==r&&n.path)}},n.exports),n.exports}((function(n,e){var o="__lodash_hash_undefined__",u=9007199254740991,c="[object Arguments]",i="[object Boolean]",a="[object Date]",f="[object Function]",s="[object GeneratorFunction]",l="[object Map]",h="[object Number]",p="[object Object]",_="[object Promise]",y="[object RegExp]",v="[object Set]",d="[object String]",b="[object Symbol]",g="[object WeakMap]",j="[object ArrayBuffer]",w="[object DataView]",O="[object Float32Array]",m="[object Float64Array]",A="[object Int8Array]",S="[object Int16Array]",x="[object Int32Array]",E="[object Uint8Array]",$="[object Uint8ClampedArray]",k="[object Uint16Array]",P="[object Uint32Array]",F=/\w*$/,I=/^\[object .+?Constructor\]$/,T=/^(?:0|[1-9]\d*)$/,M={};M[c]=M["[object Array]"]=M[j]=M[w]=M[i]=M[a]=M[O]=M[m]=M[A]=M[S]=M[x]=M[l]=M[h]=M[p]=M[y]=M[v]=M[d]=M[b]=M[E]=M[$]=M[k]=M[P]=!0,M["[object Error]"]=M[f]=M[g]=!1;var R="object"==t(r)&&r&&r.Object===Object&&r,D="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,B=R||D||Function("return this")(),U=e&&!e.nodeType&&e,W=U&&n&&!n.nodeType&&n,C=W&&W.exports===U;function H(t,r){return t.set(r[0],r[1]),t}function q(t,r){return t.add(r),t}function z(t,r,n,e){var o=-1,u=t?t.length:0;for(e&&u&&(n=t[++o]);++o<u;)n=r(n,t[o],o,t);return n}function G(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function L(t){var r=-1,n=Array(t.size);return t.forEach((function(t,e){n[++r]=[e,t]})),n}function V(t,r){return function(n){return t(r(n))}}function N(t){var r=-1,n=Array(t.size);return t.forEach((function(t){n[++r]=t})),n}var J=Array.prototype,K=Function.prototype,Q=Object.prototype,X=B["__core-js_shared__"],Y=function(){var t=/[^.]+$/.exec(X&&X.keys&&X.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Z=K.toString,tt=Q.hasOwnProperty,rt=Q.toString,nt=RegExp("^"+Z.call(tt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=C?B.Buffer:void 0,ot=B.Symbol,ut=B.Uint8Array,ct=V(Object.getPrototypeOf,Object),it=Object.create,at=Q.propertyIsEnumerable,ft=J.splice,st=Object.getOwnPropertySymbols,lt=et?et.isBuffer:void 0,ht=V(Object.keys,Object),pt=Ut(B,"DataView"),_t=Ut(B,"Map"),yt=Ut(B,"Promise"),vt=Ut(B,"Set"),dt=Ut(B,"WeakMap"),bt=Ut(Object,"create"),gt=zt(pt),jt=zt(_t),wt=zt(yt),Ot=zt(vt),mt=zt(dt),At=ot?ot.prototype:void 0,St=At?At.valueOf:void 0;function xt(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function Et(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function $t(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function kt(t){this.__data__=new Et(t)}function Pt(r,n){var e=Lt(r)||function(r){return function(r){return function(r){return!!r&&"object"==t(r)}(r)&&Vt(r)}(r)&&tt.call(r,"callee")&&(!at.call(r,"callee")||rt.call(r)==c)}(r)?function(t,r){for(var n=-1,e=Array(t);++n<t;)e[n]=r(n);return e}(r.length,String):[],o=e.length,u=!!o;for(var i in r)!n&&!tt.call(r,i)||u&&("length"==i||Ht(i,o))||e.push(i);return e}function Ft(t,r,n){var e=t[r];tt.call(t,r)&&Gt(e,n)&&(void 0!==n||r in t)||(t[r]=n)}function It(t,r){for(var n=t.length;n--;)if(Gt(t[n][0],r))return n;return-1}function Tt(t,r,n,e,o,u,_){var g;if(e&&(g=u?e(t,o,u,_):e(t)),void 0!==g)return g;if(!Kt(t))return t;var I=Lt(t);if(I){if(g=function(t){var r=t.length,n=t.constructor(r);r&&"string"==typeof t[0]&&tt.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(t),!r)return function(t,r){var n=-1,e=t.length;r||(r=Array(e));for(;++n<e;)r[n]=t[n];return r}(t,g)}else{var T=Ct(t),R=T==f||T==s;if(Nt(t))return function(t,r){if(r)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(t,r);if(T==p||T==c||R&&!u){if(G(t))return u?t:{};if(g=function(t){return"function"!=typeof t.constructor||qt(t)?{}:(r=ct(t),Kt(r)?it(r):{});var r}(R?{}:t),!r)return function(t,r){return Dt(t,Wt(t),r)}(t,function(t,r){return t&&Dt(r,Qt(r),t)}(g,t))}else{if(!M[T])return u?t:{};g=function(t,r,n,e){var o=t.constructor;switch(r){case j:return Rt(t);case i:case a:return new o(+t);case w:return function(t,r){var n=r?Rt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,e);case O:case m:case A:case S:case x:case E:case $:case k:case P:return function(t,r){var n=r?Rt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,e);case l:return function(t,r,n){return z(r?n(L(t),!0):L(t),H,new t.constructor)}(t,e,n);case h:case d:return new o(t);case y:return function(t){var r=new t.constructor(t.source,F.exec(t));return r.lastIndex=t.lastIndex,r}(t);case v:return function(t,r,n){return z(r?n(N(t),!0):N(t),q,new t.constructor)}(t,e,n);case b:return u=t,St?Object(St.call(u)):{}}var u}(t,T,Tt,r)}}_||(_=new kt);var D=_.get(t);if(D)return D;if(_.set(t,g),!I)var B=n?function(t){return function(t,r,n){var e=r(t);return Lt(t)?e:function(t,r){for(var n=-1,e=r.length,o=t.length;++n<e;)t[o+n]=r[n];return t}(e,n(t))}(t,Qt,Wt)}(t):Qt(t);return function(t,r){for(var n=-1,e=t?t.length:0;++n<e&&!1!==r(t[n],n,t););}(B||t,(function(o,u){B&&(o=t[u=o]),Ft(g,u,Tt(o,r,n,e,u,t,_))})),g}function Mt(t){return!(!Kt(t)||function(t){return!!Y&&Y in t}(t))&&(Jt(t)||G(t)?nt:I).test(zt(t))}function Rt(t){var r=new t.constructor(t.byteLength);return new ut(r).set(new ut(t)),r}function Dt(t,r,n,e){n||(n={});for(var o=-1,u=r.length;++o<u;){var c=r[o],i=e?e(n[c],t[c],c,n,t):void 0;Ft(n,c,void 0===i?t[c]:i)}return n}function Bt(r,n){var e,o,u=r.__data__;return("string"==(o=t(e=n))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==e:null===e)?u["string"==typeof n?"string":"hash"]:u.map}function Ut(t,r){var n=function(t,r){return null==t?void 0:t[r]}(t,r);return Mt(n)?n:void 0}xt.prototype.clear=function(){this.__data__=bt?bt(null):{}},xt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},xt.prototype.get=function(t){var r=this.__data__;if(bt){var n=r[t];return n===o?void 0:n}return tt.call(r,t)?r[t]:void 0},xt.prototype.has=function(t){var r=this.__data__;return bt?void 0!==r[t]:tt.call(r,t)},xt.prototype.set=function(t,r){return this.__data__[t]=bt&&void 0===r?o:r,this},Et.prototype.clear=function(){this.__data__=[]},Et.prototype.delete=function(t){var r=this.__data__,n=It(r,t);return!(n<0)&&(n==r.length-1?r.pop():ft.call(r,n,1),!0)},Et.prototype.get=function(t){var r=this.__data__,n=It(r,t);return n<0?void 0:r[n][1]},Et.prototype.has=function(t){return It(this.__data__,t)>-1},Et.prototype.set=function(t,r){var n=this.__data__,e=It(n,t);return e<0?n.push([t,r]):n[e][1]=r,this},$t.prototype.clear=function(){this.__data__={hash:new xt,map:new(_t||Et),string:new xt}},$t.prototype.delete=function(t){return Bt(this,t).delete(t)},$t.prototype.get=function(t){return Bt(this,t).get(t)},$t.prototype.has=function(t){return Bt(this,t).has(t)},$t.prototype.set=function(t,r){return Bt(this,t).set(t,r),this},kt.prototype.clear=function(){this.__data__=new Et},kt.prototype.delete=function(t){return this.__data__.delete(t)},kt.prototype.get=function(t){return this.__data__.get(t)},kt.prototype.has=function(t){return this.__data__.has(t)},kt.prototype.set=function(t,r){var n=this.__data__;if(n instanceof Et){var e=n.__data__;if(!_t||e.length<199)return e.push([t,r]),this;n=this.__data__=new $t(e)}return n.set(t,r),this};var Wt=st?V(st,Object):function(){return[]},Ct=function(t){return rt.call(t)};function Ht(t,r){return!!(r=null==r?u:r)&&("number"==typeof t||T.test(t))&&t>-1&&t%1==0&&t<r}function qt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||Q)}function zt(t){if(null!=t){try{return Z.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Gt(t,r){return t===r||t!=t&&r!=r}(pt&&Ct(new pt(new ArrayBuffer(1)))!=w||_t&&Ct(new _t)!=l||yt&&Ct(yt.resolve())!=_||vt&&Ct(new vt)!=v||dt&&Ct(new dt)!=g)&&(Ct=function(t){var r=rt.call(t),n=r==p?t.constructor:void 0,e=n?zt(n):void 0;if(e)switch(e){case gt:return w;case jt:return l;case wt:return _;case Ot:return v;case mt:return g}return r});var Lt=Array.isArray;function Vt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=u}(t.length)&&!Jt(t)}var Nt=lt||function(){return!1};function Jt(t){var r=Kt(t)?rt.call(t):"";return r==f||r==s}function Kt(r){var n=t(r);return!!r&&("object"==n||"function"==n)}function Qt(t){return Vt(t)?Pt(t):function(t){if(!qt(t))return ht(t);var r=[];for(var n in Object(t))tt.call(t,n)&&"constructor"!=n&&r.push(n);return r}(t)}n.exports=function(t){return Tt(t,!0,!0)}}));return function(t,r){function n(t){return null!=t}if(!n(t))throw new Error("[THROW_ID_01] missing input object");if(!ut(t))throw new Error("[THROW_ID_02] the first input object must be a true object");if(n(r)&&!ut(r))throw new Error("[THROW_ID_03] the second override object must be a true object");var e,o=ct(t),u=ct(r),c=Object.keys(o),i=[],a=!1;n(u)&&0!==Object.keys(u).length&&(a=!0),a&&(e=z(Object.keys(u),Object.keys(o))).forEach((function(t){return X(c,t)}));var f=function(t){for(var r=[],n=0;n<1<<t;n++){for(var e=[],o=0;o<t;o++)e.push(n&1<<o?1:0);r.push(e)}return r}(Object.keys(c).length),s={};return f.forEach((function(t,r){s={},c.forEach((function(t,n){s[t]=1===f[r][n]?1:0})),i.push(s)})),a&&i.forEach((function(t){return e.forEach((function(r){t[r]=u[r]}))})),i}}));
