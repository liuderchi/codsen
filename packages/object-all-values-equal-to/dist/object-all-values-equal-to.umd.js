/**
 * @name object-all-values-equal-to
 * @fileoverview Does the AST/nested-plain-object/array/whatever contain only one kind of value?
 * @version 2.0.14
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/object-all-values-equal-to/}
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).objectAllValuesEqualTo={})}(this,(function(t){"use strict";var e,r,n=Object.prototype,o=Function.prototype.toString,i=n.hasOwnProperty,a=o.call(Object),u=n.toString,c=(e=Object.getPrototypeOf,r=Object,function(t){return e(r(t))});var s=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=u.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=c(t);if(null===e)return!0;var r=i.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&o.call(r)==a},f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var l=function(t){var e={exports:{}};return t(e,e.exports),e.exports}((function(t,e){var r="__lodash_hash_undefined__",n=9007199254740991,o="[object Arguments]",i="[object Array]",a="[object Boolean]",u="[object Date]",c="[object Error]",s="[object Function]",l="[object Map]",h="[object Number]",p="[object Object]",_="[object Promise]",y="[object RegExp]",v="[object Set]",d="[object String]",b="[object Symbol]",g="[object WeakMap]",j="[object ArrayBuffer]",w="[object DataView]",O=/^\[object .+?Constructor\]$/,m=/^(?:0|[1-9]\d*)$/,A={};A["[object Float32Array]"]=A["[object Float64Array]"]=A["[object Int8Array]"]=A["[object Int16Array]"]=A["[object Int32Array]"]=A["[object Uint8Array]"]=A["[object Uint8ClampedArray]"]=A["[object Uint16Array]"]=A["[object Uint32Array]"]=!0,A[o]=A[i]=A[j]=A[a]=A[w]=A[u]=A[c]=A[s]=A[l]=A[h]=A[p]=A[y]=A[v]=A[d]=A[g]=!1;var z="object"==typeof f&&f&&f.Object===Object&&f,T="object"==typeof self&&self&&self.Object===Object&&self,S=z||T||Function("return this")(),P=e&&!e.nodeType&&e,x=P&&t&&!t.nodeType&&t,E=x&&x.exports===P,k=E&&z.process,$=function(){try{return k&&k.binding&&k.binding("util")}catch(t){}}(),F=$&&$.isTypedArray;function I(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}function M(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function q(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var D,R=Array.prototype,U=Object.prototype,B=S["__core-js_shared__"],L=Function.prototype.toString,N=U.hasOwnProperty,W=(D=/[^.]+$/.exec(B&&B.keys&&B.keys.IE_PROTO||""))?"Symbol(src)_1."+D:"",C=U.toString,H=RegExp("^"+L.call(N).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),V=E?S.Buffer:void 0,G=S.Symbol,J=S.Uint8Array,K=U.propertyIsEnumerable,Q=R.splice,X=G?G.toStringTag:void 0,Y=Object.getOwnPropertySymbols,Z=V?V.isBuffer:void 0,tt=function(t,e){return function(r){return t(e(r))}}(Object.keys,Object),et=xt(S,"DataView"),rt=xt(S,"Map"),nt=xt(S,"Promise"),ot=xt(S,"Set"),it=xt(S,"WeakMap"),at=xt(Object,"create"),ut=Ft(et),ct=Ft(rt),st=Ft(nt),ft=Ft(ot),lt=Ft(it),ht=G?G.prototype:void 0,pt=ht?ht.valueOf:void 0;function _t(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function yt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function vt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function dt(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new vt;++e<r;)this.add(t[e])}function bt(t){var e=this.__data__=new yt(t);this.size=e.size}function gt(t,e){var r=qt(t),n=!r&&Mt(t),o=!r&&!n&&Dt(t),i=!r&&!n&&!o&&Nt(t),a=r||n||o||i,u=a?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],c=u.length;for(var s in t)!e&&!N.call(t,s)||a&&("length"==s||o&&("offset"==s||"parent"==s)||i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||$t(s,c))||u.push(s);return u}function jt(t,e){for(var r=t.length;r--;)if(It(t[r][0],e))return r;return-1}function wt(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":X&&X in Object(t)?function(t){var e=N.call(t,X),r=t[X];try{t[X]=void 0;var n=!0}catch(t){}var o=C.call(t);n&&(e?t[X]=r:delete t[X]);return o}(t):function(t){return C.call(t)}(t)}function Ot(t){return Lt(t)&&wt(t)==o}function mt(t,e,r,n,s){return t===e||(null==t||null==e||!Lt(t)&&!Lt(e)?t!=t&&e!=e:function(t,e,r,n,s,f){var _=qt(t),g=qt(e),O=_?i:kt(t),m=g?i:kt(e),A=(O=O==o?p:O)==p,z=(m=m==o?p:m)==p,T=O==m;if(T&&Dt(t)){if(!Dt(e))return!1;_=!0,A=!1}if(T&&!A)return f||(f=new bt),_||Nt(t)?Tt(t,e,r,n,s,f):function(t,e,r,n,o,i,s){switch(r){case w:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case j:return!(t.byteLength!=e.byteLength||!i(new J(t),new J(e)));case a:case u:case h:return It(+t,+e);case c:return t.name==e.name&&t.message==e.message;case y:case d:return t==e+"";case l:var f=M;case v:if(f||(f=q),t.size!=e.size&&!(1&n))return!1;var p=s.get(t);if(p)return p==e;n|=2,s.set(t,e);var _=Tt(f(t),f(e),n,o,i,s);return s.delete(t),_;case b:if(pt)return pt.call(t)==pt.call(e)}return!1}(t,e,O,r,n,s,f);if(!(1&r)){var S=A&&N.call(t,"__wrapped__"),P=z&&N.call(e,"__wrapped__");if(S||P){var x=S?t.value():t,E=P?e.value():e;return f||(f=new bt),s(x,E,r,n,f)}}if(!T)return!1;return f||(f=new bt),function(t,e,r,n,o,i){var a=1&r,u=St(t),c=u.length,s=St(e);if(c!=s.length&&!a)return!1;var f=c;for(;f--;){var l=u[f];if(!(a?l in e:N.call(e,l)))return!1}var h=i.get(t);if(h&&i.get(e))return h==e;var p=!0;i.set(t,e),i.set(e,t);var _=a;for(;++f<c;){var y=t[l=u[f]],v=e[l];if(n)var d=a?n(v,y,l,e,t,i):n(y,v,l,t,e,i);if(!(void 0===d?y===v||o(y,v,r,n,i):d)){p=!1;break}_||(_="constructor"==l)}if(p&&!_){var b=t.constructor,g=e.constructor;b==g||!("constructor"in t)||!("constructor"in e)||"function"==typeof b&&b instanceof b&&"function"==typeof g&&g instanceof g||(p=!1)}return i.delete(t),i.delete(e),p}(t,e,r,n,s,f)}(t,e,r,n,mt,s))}function At(t){return!(!Bt(t)||function(t){return!!W&&W in t}(t))&&(Rt(t)?H:O).test(Ft(t))}function zt(t){if((e=t)!==("function"==typeof(r=e&&e.constructor)&&r.prototype||U))return tt(t);var e,r,n=[];for(var o in Object(t))N.call(t,o)&&"constructor"!=o&&n.push(o);return n}function Tt(t,e,r,n,o,i){var a=1&r,u=t.length,c=e.length;if(u!=c&&!(a&&c>u))return!1;var s=i.get(t);if(s&&i.get(e))return s==e;var f=-1,l=!0,h=2&r?new dt:void 0;for(i.set(t,e),i.set(e,t);++f<u;){var p=t[f],_=e[f];if(n)var y=a?n(_,p,f,e,t,i):n(p,_,f,t,e,i);if(void 0!==y){if(y)continue;l=!1;break}if(h){if(!I(e,(function(t,e){if(!h.has(e)&&(p===t||o(p,t,r,n,i)))return h.push(e)}))){l=!1;break}}else if(p!==_&&!o(p,_,r,n,i)){l=!1;break}}return i.delete(t),i.delete(e),l}function St(t){return function(t,e,r){var n=e(t);return qt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Wt,Et)}function Pt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function xt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return At(r)?r:void 0}_t.prototype.clear=function(){this.__data__=at?at(null):{},this.size=0},_t.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},_t.prototype.get=function(t){var e=this.__data__;if(at){var n=e[t];return n===r?void 0:n}return N.call(e,t)?e[t]:void 0},_t.prototype.has=function(t){var e=this.__data__;return at?void 0!==e[t]:N.call(e,t)},_t.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=at&&void 0===e?r:e,this},yt.prototype.clear=function(){this.__data__=[],this.size=0},yt.prototype.delete=function(t){var e=this.__data__,r=jt(e,t);return!(r<0)&&(r==e.length-1?e.pop():Q.call(e,r,1),--this.size,!0)},yt.prototype.get=function(t){var e=this.__data__,r=jt(e,t);return r<0?void 0:e[r][1]},yt.prototype.has=function(t){return jt(this.__data__,t)>-1},yt.prototype.set=function(t,e){var r=this.__data__,n=jt(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this},vt.prototype.clear=function(){this.size=0,this.__data__={hash:new _t,map:new(rt||yt),string:new _t}},vt.prototype.delete=function(t){var e=Pt(this,t).delete(t);return this.size-=e?1:0,e},vt.prototype.get=function(t){return Pt(this,t).get(t)},vt.prototype.has=function(t){return Pt(this,t).has(t)},vt.prototype.set=function(t,e){var r=Pt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this},dt.prototype.add=dt.prototype.push=function(t){return this.__data__.set(t,r),this},dt.prototype.has=function(t){return this.__data__.has(t)},bt.prototype.clear=function(){this.__data__=new yt,this.size=0},bt.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},bt.prototype.get=function(t){return this.__data__.get(t)},bt.prototype.has=function(t){return this.__data__.has(t)},bt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof yt){var n=r.__data__;if(!rt||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new vt(n)}return r.set(t,e),this.size=r.size,this};var Et=Y?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var a=t[r];e(a,r,t)&&(i[o++]=a)}return i}(Y(t),(function(e){return K.call(t,e)})))}:function(){return[]},kt=wt;function $t(t,e){return!!(e=null==e?n:e)&&("number"==typeof t||m.test(t))&&t>-1&&t%1==0&&t<e}function Ft(t){if(null!=t){try{return L.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function It(t,e){return t===e||t!=t&&e!=e}(et&&kt(new et(new ArrayBuffer(1)))!=w||rt&&kt(new rt)!=l||nt&&kt(nt.resolve())!=_||ot&&kt(new ot)!=v||it&&kt(new it)!=g)&&(kt=function(t){var e=wt(t),r=e==p?t.constructor:void 0,n=r?Ft(r):"";if(n)switch(n){case ut:return w;case ct:return l;case st:return _;case ft:return v;case lt:return g}return e});var Mt=Ot(function(){return arguments}())?Ot:function(t){return Lt(t)&&N.call(t,"callee")&&!K.call(t,"callee")},qt=Array.isArray;var Dt=Z||function(){return!1};function Rt(t){if(!Bt(t))return!1;var e=wt(t);return e==s||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}function Ut(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}function Bt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Lt(t){return null!=t&&"object"==typeof t}var Nt=F?function(t){return function(e){return t(e)}}(F):function(t){return Lt(t)&&Ut(t.length)&&!!A[wt(t)]};function Wt(t){return null!=(e=t)&&Ut(e.length)&&!Rt(e)?gt(t):zt(t);var e}t.exports=function(t,e){return mt(t,e)}}));function h(t,e,r){if(Array.isArray(t)){if(0===t.length)return!0;if(r.arraysMustNotContainPlaceholders&&t.length>0&&t.some((t=>l(t,e))))return!1;for(let n=t.length;n--;)if(!h(t[n],e,r))return!1;return!0}if(s(t)){const n=Object.keys(t);if(0===n.length)return!0;for(let o=n.length;o--;)if(!h(t[n[o]],e,r))return!1;return!0}return l(t,e)}t.allEq=function(t,e,r){if(void 0===t)throw new Error("object-all-values-equal-to: [THROW_ID_01] The first input is undefined! Please provide the first argument.");if(void 0===e)throw new Error("object-all-values-equal-to: [THROW_ID_02] The second input is undefined! Please provide the second argument.");if(r&&!s(r))throw new Error(`object-all-values-equal-to: [THROW_ID_03] The third argument, options object, was given not as a plain object but as a ${typeof r}, equal to:\n${JSON.stringify(r,null,4)}`);return h(t,e,{arraysMustNotContainPlaceholders:!0,...r})},t.version="2.0.14",Object.defineProperty(t,"__esModule",{value:!0})}));
