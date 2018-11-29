!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.rangesApply=e()}(this,function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},r=function(t,e){if("string"!=typeof t)return!1;if(e&&"includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(t)}return/^[1-9]\d*(\.0+)?$/.test(t)},n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(t,e){return t(e={exports:{}},e.exports),e.exports}var a=o(function(t,e){(e=t.exports=function(t){return t+e.suffix(+t)}).suffix=function(t){return t%=100,1===Math.floor(t/10)?"th":t%10==1?"st":t%10==2?"nd":t%10==3?"rd":"th"}}),i=(a.suffix,o(function(t,e){var r,o,a,i,c,s,u,f,l,p,y,h,g,d,b,m,v,_,w,j;t.exports=(r="function"==typeof Promise,o="object"==typeof self?self:n,a="undefined"!=typeof Symbol,i="undefined"!=typeof Map,c="undefined"!=typeof Set,s="undefined"!=typeof WeakMap,u="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,l=a&&void 0!==Symbol.iterator,p=a&&void 0!==Symbol.toStringTag,y=c&&"function"==typeof Set.prototype.entries,h=i&&"function"==typeof Map.prototype.entries,g=y&&Object.getPrototypeOf((new Set).entries()),d=h&&Object.getPrototypeOf((new Map).entries()),b=l&&"function"==typeof Array.prototype[Symbol.iterator],m=b&&Object.getPrototypeOf([][Symbol.iterator]()),v=l&&"function"==typeof String.prototype[Symbol.iterator],_=v&&Object.getPrototypeOf(""[Symbol.iterator]()),w=8,j=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===p||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var n=p&&t[Symbol.toStringTag];if("string"==typeof n)return n;var a=Object.getPrototypeOf(t);return a===RegExp.prototype?"RegExp":a===Date.prototype?"Date":r&&a===Promise.prototype?"Promise":c&&a===Set.prototype?"Set":i&&a===Map.prototype?"Map":u&&a===WeakSet.prototype?"WeakSet":s&&a===WeakMap.prototype?"WeakMap":f&&a===DataView.prototype?"DataView":i&&a===d?"Map Iterator":c&&a===g?"Set Iterator":b&&a===m?"Array Iterator":v&&a===_?"String Iterator":null===a?"Object":Object.prototype.toString.call(t).slice(w,j)})}));function c(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,a=r+(n?1:-1);n?a--:++a<o;)if(e(t[a],a,t))return a;return-1}(t,u,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function s(t,e,r,n){for(var o=r-1,a=t.length;++o<a;)if(n(t[o],e))return o;return-1}function u(t){return t!=t}var f=Array.prototype.splice;function l(t,e,r,n){var o,a=n?s:c,i=-1,u=e.length,l=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(l=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(o=r,function(t){return o(t)})));++i<u;)for(var p=0,y=e[i],h=r?r(y):y;(p=a(l,h,p,n))>-1;)l!==t&&f.call(l,p,1),f.call(t,p,1);return t}var p=function(t,e){return t&&t.length&&e&&e.length?l(t,e):t},y=o(function(t,e){var r=200,o="__lodash_hash_undefined__",a=9007199254740991,i="[object Arguments]",c="[object Boolean]",s="[object Date]",u="[object Function]",f="[object GeneratorFunction]",l="[object Map]",p="[object Number]",y="[object Object]",h="[object RegExp]",g="[object Set]",d="[object String]",b="[object Symbol]",m="[object ArrayBuffer]",v="[object DataView]",_="[object Float32Array]",w="[object Float64Array]",j="[object Int8Array]",O="[object Int16Array]",$="[object Int32Array]",S="[object Uint8Array]",A="[object Uint8ClampedArray]",T="[object Uint16Array]",E="[object Uint32Array]",k=/\w*$/,I=/^\[object .+?Constructor\]$/,N=/^(?:0|[1-9]\d*)$/,M={};M[i]=M["[object Array]"]=M[m]=M[v]=M[c]=M[s]=M[_]=M[w]=M[j]=M[O]=M[$]=M[l]=M[p]=M[y]=M[h]=M[g]=M[d]=M[b]=M[S]=M[A]=M[T]=M[E]=!0,M["[object Error]"]=M[u]=M["[object WeakMap]"]=!1;var x="object"==typeof n&&n&&n.Object===Object&&n,P="object"==typeof self&&self&&self.Object===Object&&self,W=x||P||Function("return this")(),C=e&&!e.nodeType&&e,D=C&&t&&!t.nodeType&&t,H=D&&D.exports===C;function L(t,e){return t.set(e[0],e[1]),t}function R(t,e){return t.add(e),t}function Z(t,e,r,n){var o=-1,a=t?t.length:0;for(n&&a&&(r=t[++o]);++o<a;)r=e(r,t[o],o,t);return r}function K(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function F(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function V(t,e){return function(r){return t(e(r))}}function J(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var q,B=Array.prototype,U=Function.prototype,z=Object.prototype,G=W["__core-js_shared__"],Q=(q=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"",X=U.toString,Y=z.hasOwnProperty,tt=z.toString,et=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=H?W.Buffer:void 0,nt=W.Symbol,ot=W.Uint8Array,at=V(Object.getPrototypeOf,Object),it=Object.create,ct=z.propertyIsEnumerable,st=B.splice,ut=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,lt=V(Object.keys,Object),pt=Dt(W,"DataView"),yt=Dt(W,"Map"),ht=Dt(W,"Promise"),gt=Dt(W,"Set"),dt=Dt(W,"WeakMap"),bt=Dt(Object,"create"),mt=Kt(pt),vt=Kt(yt),_t=Kt(ht),wt=Kt(gt),jt=Kt(dt),Ot=nt?nt.prototype:void 0,$t=Ot?Ot.valueOf:void 0;function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){this.__data__=new At(t)}function kt(t,e){var r=Vt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Jt(t)}(t)&&Y.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==i)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var a in t)!e&&!Y.call(t,a)||o&&("length"==a||Rt(a,n))||r.push(a);return r}function It(t,e,r){var n=t[e];Y.call(t,e)&&Ft(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Nt(t,e){for(var r=t.length;r--;)if(Ft(t[r][0],e))return r;return-1}function Mt(t,e,r,n,o,a,I){var N;if(n&&(N=a?n(t,o,a,I):n(t)),void 0!==N)return N;if(!Ut(t))return t;var x=Vt(t);if(x){if(N=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Y.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,N)}else{var P=Lt(t),W=P==u||P==f;if(qt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(P==y||P==i||W&&!a){if(K(t))return a?t:{};if(N=function(t){return"function"!=typeof t.constructor||Zt(t)?{}:(e=at(t),Ut(e)?it(e):{});var e}(W?{}:t),!e)return function(t,e){return Wt(t,Ht(t),e)}(t,function(t,e){return t&&Wt(e,zt(e),t)}(N,t))}else{if(!M[P])return a?t:{};N=function(t,e,r,n){var o=t.constructor;switch(e){case m:return Pt(t);case c:case s:return new o(+t);case v:return function(t,e){var r=e?Pt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case _:case w:case j:case O:case $:case S:case A:case T:case E:return function(t,e){var r=e?Pt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return Z(e?r(F(t),!0):F(t),L,new t.constructor)}(t,n,r);case p:case d:return new o(t);case h:return(u=new(i=t).constructor(i.source,k.exec(i))).lastIndex=i.lastIndex,u;case g:return function(t,e,r){return Z(e?r(J(t),!0):J(t),R,new t.constructor)}(t,n,r);case b:return a=t,$t?Object($t.call(a)):{}}var a;var i,u}(t,P,Mt,e)}}I||(I=new Et);var C=I.get(t);if(C)return C;if(I.set(t,N),!x)var D=r?function(t){return function(t,e,r){var n=e(t);return Vt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,zt,Ht)}(t):zt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(D||t,function(o,a){D&&(o=t[a=o]),It(N,a,Mt(o,e,r,n,a,t,I))}),N}function xt(t){return!(!Ut(t)||(e=t,Q&&Q in e))&&(Bt(t)||K(t)?et:I).test(Kt(t));var e}function Pt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Wt(t,e,r,n){r||(r={});for(var o=-1,a=e.length;++o<a;){var i=e[o],c=n?n(r[i],t[i],i,r,t):void 0;It(r,i,void 0===c?t[i]:c)}return r}function Ct(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Dt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return xt(r)?r:void 0}St.prototype.clear=function(){this.__data__=bt?bt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var e=this.__data__;if(bt){var r=e[t];return r===o?void 0:r}return Y.call(e,t)?e[t]:void 0},St.prototype.has=function(t){var e=this.__data__;return bt?void 0!==e[t]:Y.call(e,t)},St.prototype.set=function(t,e){return this.__data__[t]=bt&&void 0===e?o:e,this},At.prototype.clear=function(){this.__data__=[]},At.prototype.delete=function(t){var e=this.__data__,r=Nt(e,t);return!(r<0||(r==e.length-1?e.pop():st.call(e,r,1),0))},At.prototype.get=function(t){var e=this.__data__,r=Nt(e,t);return r<0?void 0:e[r][1]},At.prototype.has=function(t){return Nt(this.__data__,t)>-1},At.prototype.set=function(t,e){var r=this.__data__,n=Nt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Tt.prototype.clear=function(){this.__data__={hash:new St,map:new(yt||At),string:new St}},Tt.prototype.delete=function(t){return Ct(this,t).delete(t)},Tt.prototype.get=function(t){return Ct(this,t).get(t)},Tt.prototype.has=function(t){return Ct(this,t).has(t)},Tt.prototype.set=function(t,e){return Ct(this,t).set(t,e),this},Et.prototype.clear=function(){this.__data__=new At},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,e){var n=this.__data__;if(n instanceof At){var o=n.__data__;if(!yt||o.length<r-1)return o.push([t,e]),this;n=this.__data__=new Tt(o)}return n.set(t,e),this};var Ht=ut?V(ut,Object):function(){return[]},Lt=function(t){return tt.call(t)};function Rt(t,e){return!!(e=null==e?a:e)&&("number"==typeof t||N.test(t))&&t>-1&&t%1==0&&t<e}function Zt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||z)}function Kt(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ft(t,e){return t===e||t!=t&&e!=e}(pt&&Lt(new pt(new ArrayBuffer(1)))!=v||yt&&Lt(new yt)!=l||ht&&"[object Promise]"!=Lt(ht.resolve())||gt&&Lt(new gt)!=g||dt&&"[object WeakMap]"!=Lt(new dt))&&(Lt=function(t){var e=tt.call(t),r=e==y?t.constructor:void 0,n=r?Kt(r):void 0;if(n)switch(n){case mt:return v;case vt:return l;case _t:return"[object Promise]";case wt:return g;case jt:return"[object WeakMap]"}return e});var Vt=Array.isArray;function Jt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=a}(t.length)&&!Bt(t)}var qt=ft||function(){return!1};function Bt(t){var e=Ut(t)?tt.call(t):"";return e==u||e==f}function Ut(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function zt(t){return Jt(t)?kt(t):function(t){if(!Zt(t))return lt(t);var e=[];for(var r in Object(t))Y.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Mt(t,!0,!0)}}),h="[object Object]";var g,d,b=Function.prototype,m=Object.prototype,v=b.toString,_=m.hasOwnProperty,w=v.call(Object),j=m.toString,O=(g=Object.getPrototypeOf,d=Object,function(t){return g(d(t))});var $=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||j.call(t)!=h||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=O(t);if(null===e)return!0;var r=_.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&v.call(r)==w};const S=Array.isArray;function A(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function T(t,e){return function t(e,r,n){const o=y(e);let a,i,c,s,u;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,S(o))for(a=0,i=o.length;a<i;a++){const e=`${n.path}.${a}`;void 0!==o[a]?(n.parent=y(o),c=t(r(o[a],void 0,Object.assign({},n,{path:A(e)})),r,Object.assign({},n,{path:A(e)})),Number.isNaN(c)&&a<o.length?(o.splice(a,1),a-=1):o[a]=c):o.splice(a,1)}else if($(o))for(a=0,i=(s=Object.keys(o)).length;a<i;a++){u=s[a];const e=`${n.path}.${u}`;0===n.depth&&null!=u&&(n.topmostKey=u),n.parent=y(o),c=t(r(u,o[u],Object.assign({},n,{path:A(e)})),r,Object.assign({},n,{path:A(e)})),Number.isNaN(c)?delete o[u]:o[u]=c}return o}(t,e,{})}var E="__lodash_hash_undefined__",k=9007199254740991,I="[object Function]",N="[object GeneratorFunction]",M=/^\[object .+?Constructor\]$/,x="object"==typeof n&&n&&n.Object===Object&&n,P="object"==typeof self&&self&&self.Object===Object&&self,W=x||P||Function("return this")();function C(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,a=r+(n?1:-1);for(;n?a--:++a<o;)if(e(t[a],a,t))return a;return-1}(t,L,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function D(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function H(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function L(t){return t!=t}function R(t){return function(e){return t(e)}}function Z(t,e){return t.has(e)}var K,F=Array.prototype,V=Function.prototype,J=Object.prototype,q=W["__core-js_shared__"],B=(K=/[^.]+$/.exec(q&&q.keys&&q.keys.IE_PROTO||""))?"Symbol(src)_1."+K:"",U=V.toString,z=J.hasOwnProperty,G=J.toString,Q=RegExp("^"+U.call(z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),X=F.splice,Y=Math.max,tt=Math.min,et=lt(W,"Map"),rt=lt(Object,"create");function nt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function it(t){var e=-1,r=t?t.length:0;for(this.__data__=new at;++e<r;)this.add(t[e])}function ct(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function st(t){return!(!yt(t)||(e=t,B&&B in e))&&(pt(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?Q:M).test(function(t){if(null!=t){try{return U.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function ut(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=k}(t.length)&&!pt(t)}(t)}(t)?t:[]}function ft(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function lt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return st(r)?r:void 0}function pt(t){var e=yt(t)?G.call(t):"";return e==I||e==N}function yt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}nt.prototype.clear=function(){this.__data__=rt?rt(null):{}},nt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},nt.prototype.get=function(t){var e=this.__data__;if(rt){var r=e[t];return r===E?void 0:r}return z.call(e,t)?e[t]:void 0},nt.prototype.has=function(t){var e=this.__data__;return rt?void 0!==e[t]:z.call(e,t)},nt.prototype.set=function(t,e){return this.__data__[t]=rt&&void 0===e?E:e,this},ot.prototype.clear=function(){this.__data__=[]},ot.prototype.delete=function(t){var e=this.__data__,r=ct(e,t);return!(r<0||(r==e.length-1?e.pop():X.call(e,r,1),0))},ot.prototype.get=function(t){var e=this.__data__,r=ct(e,t);return r<0?void 0:e[r][1]},ot.prototype.has=function(t){return ct(this.__data__,t)>-1},ot.prototype.set=function(t,e){var r=this.__data__,n=ct(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},at.prototype.clear=function(){this.__data__={hash:new nt,map:new(et||ot),string:new nt}},at.prototype.delete=function(t){return ft(this,t).delete(t)},at.prototype.get=function(t){return ft(this,t).get(t)},at.prototype.has=function(t){return ft(this,t).has(t)},at.prototype.set=function(t,e){return ft(this,t).set(t,e),this},it.prototype.add=it.prototype.push=function(t){return this.__data__.set(t,E),this},it.prototype.has=function(t){return this.__data__.has(t)};var ht=function(t,e){return e=Y(void 0===e?t.length-1:e,0),function(){for(var r=arguments,n=-1,o=Y(r.length-e,0),a=Array(o);++n<o;)a[n]=r[e+n];n=-1;for(var i=Array(e+1);++n<e;)i[n]=r[n];return i[e]=a,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,i)}}(function(t){var e=H(t,ut);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?D:C,o=t[0].length,a=t.length,i=a,c=Array(a),s=1/0,u=[];i--;){var f=t[i];i&&e&&(f=H(f,R(e))),s=tt(f.length,s),c[i]=!r&&(e||o>=120&&f.length>=120)?new it(i&&f):void 0}f=t[0];var l=-1,p=c[0];t:for(;++l<o&&u.length<s;){var y=f[l],h=e?e(y):y;if(y=r||0!==y?y:0,!(p?Z(p,h):n(u,h,r))){for(i=a;--i;){var g=c[i];if(!(g?Z(g,h):n(t[i],h,r)))continue t}p&&p.push(h),u.push(y)}}return u}(e):[]});function gt(t){return"string"==typeof t?t.length>0?[t]:[]:t}var dt=o(function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function r(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function n(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function a(t){var e=parseInt(t);return e.toString()===t?e:t}function i(t){t=t||{};var i=function(t){return Object.keys(i).reduce(function(e,r){return"create"===r?e:("function"==typeof i[r]&&(e[r]=i[r].bind(i,t)),e)},{})};function c(r,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||e(r,n)}function s(t,e){if(c(t,e))return t[e]}function u(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return u(t,e.split(".").map(a),r,n);var o=e[0],i=s(t,o);return 1===e.length?(void 0!==i&&n||(t[o]=r),i):(void 0===i&&("number"==typeof e[1]?t[o]=[]:t[o]={}),u(t[o],e.slice(1),r,n))}return i.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var i=0;i<n.length;i++){var c=a(n[i]);if(!("number"==typeof c&&o(r)&&c<r.length||(t.includeInheritedProps?c in Object(r):e(r,c))))return!1;r=r[c]}return!0},i.ensureExists=function(t,e,r){return u(t,e,r,!0)},i.set=function(t,e,r,n){return u(t,e,r,n)},i.insert=function(t,e,r,n){var a=i.get(t,e);n=~~n,o(a)||(a=[],i.set(t,e,a)),a.splice(n,0,r)},i.empty=function(t,e){var a,s;if(!r(e)&&null!=t&&(a=i.get(t,e))){if("string"==typeof a)return i.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}(a))return i.set(t,e,!1);if("number"==typeof a)return i.set(t,e,0);if(o(a))a.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===n(t)}(a))return i.set(t,e,null);for(s in a)c(a,s)&&delete a[s]}}},i.push=function(t,e){var r=i.get(t,e);o(r)||(r=[],i.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},i.coalesce=function(t,e,r){for(var n,o=0,a=e.length;o<a;o++)if(void 0!==(n=i.get(t,e[o])))return n;return r},i.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return i.get(t,e.split("."),r);var n=a(e[0]),o=s(t,n);return void 0===o?r:1===e.length?o:i.get(t[n],e.slice(1),r)},i.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(r(e))return t;if("string"==typeof e)return i.del(t,e.split("."));var n=a(e[0]);return c(t,n)?1!==e.length?i.del(t[n],e.slice(1)):(o(t)?t.splice(n,1):delete t[n],t):t},i}var c=i();return c.create=i,c.withInheritedProps=i({includeInheritedProps:!0}),c}()}),bt=function(t){var e=t%100;if(e>=10&&e<=20)return"th";var r=t%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"};function mt(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return t+bt(t)}mt.indicator=bt;var vt=mt,_t=/[|\\{}()[\]^$+*?.]/g,wt=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(_t,"\\$&")};const jt=new Map;function Ot(t,e){const r=Object.assign({caseSensitive:!1},e),n=t+JSON.stringify(r);if(jt.has(n))return jt.get(n);const o="!"===t[0];o&&(t=t.slice(1)),t=wt(t).replace(/\\\*/g,".*");const a=new RegExp(`^${t}$`,r.caseSensitive?"":"i");return a.negated=o,jt.set(n,a),a}var $t=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>Ot(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};function St(t,e,r){return function t(e,r,n,o=!0){function a(t){return null!=t}function c(t){return"Object"===i(t)}function s(t,e){return e=gt(e),Array.from(t).filter(t=>!e.some(e=>$t.isMatch(t,e,{caseSensitive:!0})))}function u(t){if(t.includes(".")){const e=t.split(".");return e.pop(),e.join(".")}return t}const f=["any","anything","every","everything","all","whatever","whatevs"],l=Array.isArray;if(!a(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const y={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let h;if(h=a(n)&&c(n)?Object.assign({},y,n):Object.assign({},y),a(h.ignoreKeys)&&h.ignoreKeys?h.ignoreKeys=gt(h.ignoreKeys):h.ignoreKeys=[],a(h.ignorePaths)&&h.ignorePaths?h.ignorePaths=gt(h.ignorePaths):h.ignorePaths=[],a(h.acceptArraysIgnore)&&h.acceptArraysIgnore?h.acceptArraysIgnore=gt(h.acceptArraysIgnore):h.acceptArraysIgnore=[],h.msg="string"==typeof h.msg?h.msg.trim():h.msg,":"===h.msg[h.msg.length-1]&&(h.msg=h.msg.slice(0,h.msg.length-1).trim()),h.schema&&(Object.keys(h.schema).forEach(t=>{if(c(h.schema[t])){const e={};T(h.schema[t],(r,n,o)=>{const a=void 0!==n?n:r;return l(a)||c(a)||(e[`${t}.${o.path}`]=a),a}),delete h.schema[t],h.schema=Object.assign(h.schema,e)}}),Object.keys(h.schema).forEach(t=>{l(h.schema[t])||(h.schema[t]=[h.schema[t]]),h.schema[t]=h.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())})),a(r)||(r={}),o&&t(h,y,{enforceStrictKeyset:!1},!1),h.enforceStrictKeyset)if(a(h.schema)&&Object.keys(h.schema).length>0){if(0!==s(p(Object.keys(e),Object.keys(r).concat(Object.keys(h.schema))),h.ignoreKeys).length){const t=p(Object.keys(e),Object.keys(r).concat(Object.keys(h.schema)));throw new TypeError(`${h.msg}: ${h.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(a(r)&&Object.keys(r).length>0))throw new TypeError(`${h.msg}: Both ${h.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==s(p(Object.keys(e),Object.keys(r)),h.ignoreKeys).length){const t=p(Object.keys(e),Object.keys(r));throw new TypeError(`${h.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==s(p(Object.keys(r),Object.keys(e)),h.ignoreKeys).length){const t=p(Object.keys(r),Object.keys(e));throw new TypeError(`${h.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}const g=[];T(e,(t,e,n)=>{const o=void 0!==e?e:t;if(l(g)&&g.length&&g.some(t=>n.path.startsWith(t)))return o;if(!(!h.enforceStrictKeyset||!c(o)&&!l(o)&&l(n.parent)||a(h.schema)&&c(h.schema)&&(!c(h.schema)||Object.keys(h.schema).length&&(l(n.parent)||Object.prototype.hasOwnProperty.call(h.schema,n.path))&&(!l(n.parent)||dt.has(h.schema,u(n.path))))||a(r)&&c(r)&&(!c(r)||Object.keys(r).length&&(h.acceptArrays||dt.has(r,n.path))&&(!h.acceptArrays||(l(n.parent)||dt.has(r,n.path))&&(!l(n.parent)||dt.has(r,u(n.path)))))))throw new TypeError(`${h.msg}: ${h.optsVarName}.${n.path} is neither covered by reference object (second input argument), nor ${h.optsVarName}.schema! To stop this error, turn off ${h.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${h.optsVarName}.schema).`);if(c(h.schema)&&Object.keys(h.schema).length&&Object.prototype.hasOwnProperty.call(h.schema,n.path)){const t=gt(h.schema[n.path]).map(String).map(t=>t.toLowerCase());if(dt.set(h.schema,n.path,t),ht(t,f).length)g.push(n.path);else if(!0!==o&&!1!==o&&!t.includes(i(o).toLowerCase())||(!0===o||!1===o)&&!t.includes(String(o))&&!t.includes("boolean")){if(!l(o)||!h.acceptArrays)throw new TypeError(`${h.msg}: ${h.optsVarName}.${n.path} was customised to ${"string"!==i(o)?'"':""}${JSON.stringify(o,null,0)}${"string"!==i(o)?'"':""} (type: ${i(o).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let e=0,r=o.length;e<r;e++)if(!t.includes(i(o[e]).toLowerCase()))throw new TypeError(`${h.msg}: ${h.optsVarName}.${n.path}.${e}, the ${vt(e+1)} element (equal to ${JSON.stringify(o[e],null,0)}) is of a type ${i(o[e]).toLowerCase()}, but only the following are allowed by the ${h.optsVarName}.schema: ${t.join(", ")}`)}}else if(a(r)&&Object.keys(r).length&&dt.has(r,n.path)&&i(o)!==i(dt.get(r,n.path))&&(!h.ignoreKeys||!h.ignoreKeys.some(e=>$t.isMatch(t,e)))&&(!h.ignorePaths||!h.ignorePaths.some(t=>$t.isMatch(n.path,t)))){const e=dt.get(r,n.path);if(!h.acceptArrays||!l(o)||h.acceptArraysIgnore.includes(t))throw new TypeError(`${h.msg}: ${h.optsVarName}.${n.path} was customised to ${"string"===i(o).toLowerCase()?"":'"'}${JSON.stringify(o,null,0)}${"string"===i(o).toLowerCase()?"":'"'} which is not ${i(e).toLowerCase()} but ${i(o).toLowerCase()}`);if(!o.every(e=>i(e).toLowerCase()===i(r[t]).toLowerCase()))throw new TypeError(`${h.msg}: ${h.optsVarName}.${n.path} was customised to be array, but not all of its elements are ${i(r[t]).toLowerCase()}-type`)}return o})}(t,e,r)}$t.isMatch=((t,e,r)=>{const n=Ot(e,r),o=n.test(t);return n.negated?!o:o});const At=Array.isArray;function Tt(t,r){if(!At(t))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(0===t.length)return t;const n={strictlyTwoElementsInRangeArrays:!1,progressFn:null},o=Object.assign({},n,r);let i,c;if(St(o,n,{msg:"ranges-sort: [THROW_ID_02*]",schema:{progressFn:["function","false","null"]}}),o.strictlyTwoElementsInRangeArrays&&!t.every((t,e)=>2===t.length||(i=e,c=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${a(i)} range (${JSON.stringify(t[i],null,4)}) has not two but ${c} elements!`);if(!t.every((t,r)=>!(!e(t[0],{includeZero:!0})||!e(t[1],{includeZero:!0}))||(i=r,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${a(i)} range (${JSON.stringify(t[i],null,4)}) does not consist of only natural numbers!`);const s=t.length*t.length;let u=0;return Array.from(t).sort((t,e)=>(o.progressFn&&(u++,o.progressFn(Math.floor(100*u/s))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1))}var Et=Array.isArray;return function(n,o,i){var c=0,s=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof n)throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ".concat(t(n),", equal to: ").concat(JSON.stringify(n,null,4)));if(null===o)return n;if(!Et(o))throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ".concat(t(o),", equal to: ").concat(JSON.stringify(o,null,4)));if(i&&"function"!=typeof i)throw new TypeError("ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ".concat(t(i),", equal to: ").concat(JSON.stringify(i,null,4)));Et(o)&&(e(o[0],{includeZero:!0})||r(o[0],{includeZero:!0}))&&(e(o[1],{includeZero:!0})||r(o[1],{includeZero:!0}))&&(o=[o]);var u=o.length,f=0;o.forEach(function(n,l){if(i&&(c=Math.floor(f/u*10))!==s&&(s=c,i(c)),!Et(n))throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg., has ".concat(a(l)," element not an array: ").concat(JSON.stringify(n,null,4),", which is ").concat(t(n)));if(!e(n[0],{includeZero:!0})){if(!r(n[0],{includeZero:!0}))throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has ".concat(a(l)," element, array [").concat(n[0],",").concat(n[1],"]. That array has first element not an integer, but ").concat(t(n[0]),", equal to: ").concat(JSON.stringify(n[0],null,4),". Computer doesn't like this."));o[l][0]=Number.parseInt(o[l][0],10)}if(!e(n[1],{includeZero:!0})){if(!r(n[1],{includeZero:!0}))throw new TypeError("ranges-apply: [THROW_ID_07] ranges array, second input arg. has ".concat(a(l)," element, array [").concat(n[0],",").concat(n[1],"]. That array has second element not an integer, but ").concat(t(n[1]),", equal to: ").concat(JSON.stringify(n[1],null,4),". Computer doesn't like this."));o[l][1]=Number.parseInt(o[l][1],10)}f++});var l=function(t,e){if(!Array.isArray(t))return t;if(e&&"function"!=typeof e)throw new Error(`ranges-merge: [THROW_ID_01] the second input argument must be a function! It was given of a type: "${typeof e}", equal to ${JSON.stringify(e,null,4)}`);const r=y(t).filter(t=>void 0!==t[2]||t[0]!==t[1]);let n,o,a;const i=(n=e?Tt(r,{progressFn:t=>{(a=Math.floor(t/5))!==o&&(o=a,e(a))}}):Tt(r)).length-1;for(let t=i;t>0;t--)e&&(a=Math.floor(78*(1-t/i))+21)!==o&&a>o&&(o=a,e(a)),(n[t][0]<=n[t-1][0]||n[t][0]<=n[t-1][1])&&(n[t-1][0]=Math.min(n[t][0],n[t-1][0]),n[t-1][1]=Math.max(n[t][1],n[t-1][1]),void 0!==n[t][2]&&(n[t-1][0]>=n[t][0]||n[t-1][1]<=n[t][1])&&null!==n[t-1][2]&&(null===n[t][2]&&null!==n[t-1][2]?n[t-1][2]=null:void 0!==n[t-1][2]?n[t-1][2]+=n[t][2]:n[t-1][2]=n[t][2]),n.splice(t,1),t=n.length);return n}(o,function(t){i&&(c=10+Math.floor(t/10))!==s&&(s=c,i(c))}),p=l.length;if(p>0){var h=n.slice(l[p-1][1]);n=l.reduce(function(t,e,r,o){i&&(c=20+Math.floor(r/p*80))!==s&&(s=c,i(c));var a=0===r?0:o[r-1][1],u=o[r][0];return t+n.slice(a,u)+(null!=o[r][2]?o[r][2]:"")},""),n+=h}return n}});
