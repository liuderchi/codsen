!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.rangesInvert=e()}(this,function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,e){return t(e={exports:{}},e.exports),e.exports}var o=n(function(t,e){(e=t.exports=function(t){return t+e.suffix(+t)}).suffix=function(t){return 1===Math.floor(t/10)?"th":t%10==1?"st":t%10==2?"nd":t%10==3?"rd":"th"}}),i=(o.suffix,n(function(t,e){var n,o,i,a,c,s,u,f,l,p,y,h,g,d,b,m,v,_,w,j;t.exports=(n="function"==typeof Promise,o="object"==typeof self?self:r,i="undefined"!=typeof Symbol,a="undefined"!=typeof Map,c="undefined"!=typeof Set,s="undefined"!=typeof WeakMap,u="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,l=i&&void 0!==Symbol.iterator,p=i&&void 0!==Symbol.toStringTag,y=c&&"function"==typeof Set.prototype.entries,h=a&&"function"==typeof Map.prototype.entries,g=y&&Object.getPrototypeOf((new Set).entries()),d=h&&Object.getPrototypeOf((new Map).entries()),b=l&&"function"==typeof Array.prototype[Symbol.iterator],m=b&&Object.getPrototypeOf([][Symbol.iterator]()),v=l&&"function"==typeof String.prototype[Symbol.iterator],_=v&&Object.getPrototypeOf(""[Symbol.iterator]()),w=8,j=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===p||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var r=p&&t[Symbol.toStringTag];if("string"==typeof r)return r;var i=Object.getPrototypeOf(t);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":n&&i===Promise.prototype?"Promise":c&&i===Set.prototype?"Set":a&&i===Map.prototype?"Map":u&&i===WeakSet.prototype?"WeakSet":s&&i===WeakMap.prototype?"WeakMap":f&&i===DataView.prototype?"DataView":a&&i===d?"Map Iterator":c&&i===g?"Set Iterator":b&&i===m?"Array Iterator":v&&i===_?"String Iterator":null===i?"Object":Object.prototype.toString.call(t).slice(w,j)})}));function a(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,s,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function c(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}function s(t){return t!=t}var u=Array.prototype.splice;function f(t,e,r,n){var o,i=n?c:a,s=-1,f=e.length,l=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(l=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(o=r,function(t){return o(t)})));++s<f;)for(var p=0,y=e[s],h=r?r(y):y;(p=i(l,h,p,n))>-1;)l!==t&&u.call(l,p,1),u.call(t,p,1);return t}var l=function(t,e){return t&&t.length&&e&&e.length?f(t,e):t},p=n(function(t,e){var n=200,o="__lodash_hash_undefined__",i=9007199254740991,a="[object Arguments]",c="[object Function]",s="[object GeneratorFunction]",u="[object Map]",f="[object Object]",l="[object Set]",p="[object DataView]",y=/^\[object .+?Constructor\]$/,h=/^(?:0|[1-9]\d*)$/,g="object"==typeof r&&r&&r.Object===Object&&r,d="object"==typeof self&&self&&self.Object===Object&&self,b=g||d||Function("return this")(),m=e&&!e.nodeType&&e,v=m&&t&&!t.nodeType&&t,_=v&&v.exports===m;function w(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function j(t,e){return function(r){return t(e(r))}}var O,S=Array.prototype,$=Function.prototype,A=Object.prototype,T=b["__core-js_shared__"],E=(O=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||""))?"Symbol(src)_1."+O:"",k=$.toString,I=A.hasOwnProperty,N=A.toString,P=RegExp("^"+k.call(I).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),x=_?b.Buffer:void 0,R=b.Symbol,M=(b.Uint8Array,j(Object.getPrototypeOf,Object)),H=Object.create,L=A.propertyIsEnumerable,W=S.splice,C=Object.getOwnPropertySymbols,D=x?x.isBuffer:void 0,K=j(Object.keys,Object),V=lt(b,"DataView"),F=lt(b,"Map"),J=lt(b,"Promise"),Z=lt(b,"Set"),B=lt(b,"WeakMap"),q=lt(Object,"create"),G=dt(V),Y=dt(F),Q=dt(J),U=dt(Z),z=dt(B),X=R?R.prototype:void 0;X&&X.valueOf;function tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function rt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function nt(t){this.__data__=new et(t)}function ot(t,e){var r=mt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&vt(t)}(t)&&I.call(t,"callee")&&(!L.call(t,"callee")||N.call(t)==a)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var i in t)!e&&!I.call(t,i)||o&&("length"==i||ht(i,n))||r.push(i);return r}function it(t,e,r){var n=t[e];I.call(t,e)&&bt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function at(t,e){for(var r=t.length;r--;)if(bt(t[r][0],e))return r;return-1}function ct(t,e,r,n,o,i,u){var l;if(n&&(l=i?n(t,o,i,u):n(t)),void 0!==l)return l;if(!jt(t))return t;var p=mt(t);if(p){if(l=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&I.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,l)}else{var y=yt(t),h=y==c||y==s;if(_t(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(y!=f&&y!=a&&(!h||i))return i?t:{};if(w(t))return i?t:{};if(l=function(t){return"function"!=typeof t.constructor||gt(t)?{}:(e=M(t),jt(e)?H(e):{});var e}(h?{}:t),!e)return function(t,e){return ut(t,pt(t),e)}(t,function(t,e){return t&&ut(e,Ot(e),t)}(l,t))}u||(u=new nt);var g=u.get(t);if(g)return g;if(u.set(t,l),!p)var d=r?function(t){return function(t,e,r){var n=e(t);return mt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Ot,pt)}(t):Ot(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(d||t,function(o,i){d&&(o=t[i=o]),it(l,i,ct(o,e,r,n,i,t,u))}),l}function st(t){return!(!jt(t)||(e=t,E&&E in e))&&(wt(t)||w(t)?P:y).test(dt(t));var e}function ut(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;it(r,a,void 0===c?t[a]:c)}return r}function ft(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function lt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return st(r)?r:void 0}tt.prototype.clear=function(){this.__data__=q?q(null):{}},tt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},tt.prototype.get=function(t){var e=this.__data__;if(q){var r=e[t];return r===o?void 0:r}return I.call(e,t)?e[t]:void 0},tt.prototype.has=function(t){var e=this.__data__;return q?void 0!==e[t]:I.call(e,t)},tt.prototype.set=function(t,e){return this.__data__[t]=q&&void 0===e?o:e,this},et.prototype.clear=function(){this.__data__=[]},et.prototype.delete=function(t){var e=this.__data__,r=at(e,t);return!(r<0||(r==e.length-1?e.pop():W.call(e,r,1),0))},et.prototype.get=function(t){var e=this.__data__,r=at(e,t);return r<0?void 0:e[r][1]},et.prototype.has=function(t){return at(this.__data__,t)>-1},et.prototype.set=function(t,e){var r=this.__data__,n=at(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},rt.prototype.clear=function(){this.__data__={hash:new tt,map:new(F||et),string:new tt}},rt.prototype.delete=function(t){return ft(this,t).delete(t)},rt.prototype.get=function(t){return ft(this,t).get(t)},rt.prototype.has=function(t){return ft(this,t).has(t)},rt.prototype.set=function(t,e){return ft(this,t).set(t,e),this},nt.prototype.clear=function(){this.__data__=new et},nt.prototype.delete=function(t){return this.__data__.delete(t)},nt.prototype.get=function(t){return this.__data__.get(t)},nt.prototype.has=function(t){return this.__data__.has(t)},nt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof et){var o=r.__data__;if(!F||o.length<n-1)return o.push([t,e]),this;r=this.__data__=new rt(o)}return r.set(t,e),this};var pt=C?j(C,Object):function(){return[]},yt=function(t){return N.call(t)};function ht(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||h.test(t))&&t>-1&&t%1==0&&t<e}function gt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||A)}function dt(t){if(null!=t){try{return k.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function bt(t,e){return t===e||t!=t&&e!=e}(V&&yt(new V(new ArrayBuffer(1)))!=p||F&&yt(new F)!=u||J&&"[object Promise]"!=yt(J.resolve())||Z&&yt(new Z)!=l||B&&"[object WeakMap]"!=yt(new B))&&(yt=function(t){var e=N.call(t),r=e==f?t.constructor:void 0,n=r?dt(r):void 0;if(n)switch(n){case G:return p;case Y:return u;case Q:return"[object Promise]";case U:return l;case z:return"[object WeakMap]"}return e});var mt=Array.isArray;function vt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!wt(t)}var _t=D||function(){return!1};function wt(t){var e=jt(t)?N.call(t):"";return e==c||e==s}function jt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Ot(t){return vt(t)?ot(t):function(t){if(!gt(t))return K(t);var e=[];for(var r in Object(t))I.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return ct(t,!0,!0)}}),y="[object Object]";var h,g,d=Function.prototype,b=Object.prototype,m=d.toString,v=b.hasOwnProperty,_=m.call(Object),w=b.toString,j=(h=Object.getPrototypeOf,g=Object,function(t){return h(g(t))});var O=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||w.call(t)!=y||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=j(t);if(null===e)return!0;var r=v.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&m.call(r)==_};const S=Array.isArray;function $(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function A(t,e){return function t(e,r,n){const o=p(e);let i,a,c,s,u;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,S(o))for(i=0,a=o.length;i<a;i++){const e=`${n.path}.${i}`;void 0!==o[i]?(n.parent=p(o),c=t(r(o[i],void 0,Object.assign({},n,{path:$(e)})),r,Object.assign({},n,{path:$(e)})),Number.isNaN(c)&&i<o.length?(o.splice(i,1),i-=1):o[i]=c):o.splice(i,1)}else if(O(o))for(i=0,a=(s=Object.keys(o)).length;i<a;i++){u=s[i];const e=`${n.path}.${u}`;0===n.depth&&null!=u&&(n.topmostKey=u),n.parent=p(o),c=t(r(u,o[u],Object.assign({},n,{path:$(e)})),r,Object.assign({},n,{path:$(e)})),Number.isNaN(c)?delete o[u]:o[u]=c}return o}(t,e,{})}var T="__lodash_hash_undefined__",E=9007199254740991,k="[object Function]",I="[object GeneratorFunction]",N=/^\[object .+?Constructor\]$/,P="object"==typeof r&&r&&r.Object===Object&&r,x="object"==typeof self&&self&&self.Object===Object&&self,R=P||x||Function("return this")();function M(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,W,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function H(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function L(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function W(t){return t!=t}function C(t){return function(e){return t(e)}}function D(t,e){return t.has(e)}var K,V=Array.prototype,F=Function.prototype,J=Object.prototype,Z=R["__core-js_shared__"],B=(K=/[^.]+$/.exec(Z&&Z.keys&&Z.keys.IE_PROTO||""))?"Symbol(src)_1."+K:"",q=F.toString,G=J.hasOwnProperty,Y=J.toString,Q=RegExp("^"+q.call(G).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),U=V.splice,z=Math.max,X=Math.min,tt=ft(R,"Map"),et=ft(Object,"create");function rt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function nt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function it(t){var e=-1,r=t?t.length:0;for(this.__data__=new ot;++e<r;)this.add(t[e])}function at(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function ct(t){return!(!pt(t)||(e=t,B&&B in e))&&(lt(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?Q:N).test(function(t){if(null!=t){try{return q.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function st(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=E}(t.length)&&!lt(t)}(t)}(t)?t:[]}function ut(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function ft(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return ct(r)?r:void 0}function lt(t){var e=pt(t)?Y.call(t):"";return e==k||e==I}function pt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}rt.prototype.clear=function(){this.__data__=et?et(null):{}},rt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},rt.prototype.get=function(t){var e=this.__data__;if(et){var r=e[t];return r===T?void 0:r}return G.call(e,t)?e[t]:void 0},rt.prototype.has=function(t){var e=this.__data__;return et?void 0!==e[t]:G.call(e,t)},rt.prototype.set=function(t,e){return this.__data__[t]=et&&void 0===e?T:e,this},nt.prototype.clear=function(){this.__data__=[]},nt.prototype.delete=function(t){var e=this.__data__,r=at(e,t);return!(r<0||(r==e.length-1?e.pop():U.call(e,r,1),0))},nt.prototype.get=function(t){var e=this.__data__,r=at(e,t);return r<0?void 0:e[r][1]},nt.prototype.has=function(t){return at(this.__data__,t)>-1},nt.prototype.set=function(t,e){var r=this.__data__,n=at(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},ot.prototype.clear=function(){this.__data__={hash:new rt,map:new(tt||nt),string:new rt}},ot.prototype.delete=function(t){return ut(this,t).delete(t)},ot.prototype.get=function(t){return ut(this,t).get(t)},ot.prototype.has=function(t){return ut(this,t).has(t)},ot.prototype.set=function(t,e){return ut(this,t).set(t,e),this},it.prototype.add=it.prototype.push=function(t){return this.__data__.set(t,T),this},it.prototype.has=function(t){return this.__data__.has(t)};var yt=function(t,e){return e=z(void 0===e?t.length-1:e,0),function(){for(var r=arguments,n=-1,o=z(r.length-e,0),i=Array(o);++n<o;)i[n]=r[e+n];n=-1;for(var a=Array(e+1);++n<e;)a[n]=r[n];return a[e]=i,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,a)}}(function(t){var e=L(t,st);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?H:M,o=t[0].length,i=t.length,a=i,c=Array(i),s=1/0,u=[];a--;){var f=t[a];a&&e&&(f=L(f,C(e))),s=X(f.length,s),c[a]=!r&&(e||o>=120&&f.length>=120)?new it(a&&f):void 0}f=t[0];var l=-1,p=c[0];t:for(;++l<o&&u.length<s;){var y=f[l],h=e?e(y):y;if(y=r||0!==y?y:0,!(p?D(p,h):n(u,h,r))){for(a=i;--a;){var g=c[a];if(!(g?D(g,h):n(t[a],h,r)))continue t}p&&p.push(h),u.push(y)}}return u}(e):[]});function ht(t){return"string"==typeof t?t.length>0?[t]:[]:t}var gt=n(function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function r(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function n(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function i(t){var e=parseInt(t);return e.toString()===t?e:t}function a(t){t=t||{};var a=function(t){return Object.keys(a).reduce(function(e,r){return"create"===r?e:("function"==typeof a[r]&&(e[r]=a[r].bind(a,t)),e)},{})};function c(r,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||e(r,n)}function s(t,e){if(c(t,e))return t[e]}function u(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return u(t,e.split(".").map(i),r,n);var o=e[0],a=s(t,o);return 1===e.length?(void 0!==a&&n||(t[o]=r),a):(void 0===a&&("number"==typeof e[1]?t[o]=[]:t[o]={}),u(t[o],e.slice(1),r,n))}return a.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var a=0;a<n.length;a++){var c=i(n[a]);if(!("number"==typeof c&&o(r)&&c<r.length||(t.includeInheritedProps?c in Object(r):e(r,c))))return!1;r=r[c]}return!0},a.ensureExists=function(t,e,r){return u(t,e,r,!0)},a.set=function(t,e,r,n){return u(t,e,r,n)},a.insert=function(t,e,r,n){var i=a.get(t,e);n=~~n,o(i)||(i=[],a.set(t,e,i)),i.splice(n,0,r)},a.empty=function(t,e){var i,s;if(!r(e)&&null!=t&&(i=a.get(t,e))){if("string"==typeof i)return a.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}(i))return a.set(t,e,!1);if("number"==typeof i)return a.set(t,e,0);if(o(i))i.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===n(t)}(i))return a.set(t,e,null);for(s in i)c(i,s)&&delete i[s]}}},a.push=function(t,e){var r=a.get(t,e);o(r)||(r=[],a.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},a.coalesce=function(t,e,r){for(var n,o=0,i=e.length;o<i;o++)if(void 0!==(n=a.get(t,e[o])))return n;return r},a.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return a.get(t,e.split("."),r);var n=i(e[0]),o=s(t,n);return void 0===o?r:1===e.length?o:a.get(t[n],e.slice(1),r)},a.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(r(e))return t;if("string"==typeof e)return a.del(t,e.split("."));var n=i(e[0]);return c(t,n)?1!==e.length?a.del(t[n],e.slice(1)):(o(t)?t.splice(n,1):delete t[n],t):t},a}var c=a();return c.create=a,c.withInheritedProps=a({includeInheritedProps:!0}),c}()}),dt=function(t){var e=t%100;if(e>=10&&e<=20)return"th";var r=t%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"};function bt(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return t+dt(t)}bt.indicator=dt;var mt=bt;function vt(t,e,r){return function t(e,r,n,o=!0){function a(t){return null!=t}function c(t){return"Object"===i(t)}function s(t){if(t.includes(".")){const e=t.split(".");return e.pop(),e.join(".")}return t}const u=["any","anything","every","everything","all","whatever","whatevs"],f=Array.isArray;if(!a(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const p={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let y;if(y=a(n)&&c(n)?Object.assign({},p,n):Object.assign({},p),a(y.ignoreKeys)&&y.ignoreKeys?y.ignoreKeys=ht(y.ignoreKeys):y.ignoreKeys=[],a(y.ignorePaths)&&y.ignorePaths?y.ignorePaths=ht(y.ignorePaths):y.ignorePaths=[],a(y.acceptArraysIgnore)&&y.acceptArraysIgnore?y.acceptArraysIgnore=ht(y.acceptArraysIgnore):y.acceptArraysIgnore=[],y.msg="string"==typeof y.msg?y.msg.trim():y.msg,":"===y.msg[y.msg.length-1]&&(y.msg=y.msg.slice(0,y.msg.length-1).trim()),y.schema&&Object.keys(y.schema).forEach(t=>{f(y.schema[t])||(y.schema[t]=[y.schema[t]]),y.schema[t]=y.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())}),a(r)||(r={}),o&&t(y,p,{enforceStrictKeyset:!1},!1),y.enforceStrictKeyset)if(a(y.schema)&&Object.keys(y.schema).length>0){if(0!==l(Object.keys(e),Object.keys(r).concat(Object.keys(y.schema))).length){const t=l(Object.keys(e),Object.keys(r).concat(Object.keys(y.schema)));throw new TypeError(`${y.msg}: ${y.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(a(r)&&Object.keys(r).length>0))throw new TypeError(`${y.msg}: Both ${y.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==l(Object.keys(e),Object.keys(r)).length){const t=l(Object.keys(e),Object.keys(r));throw new TypeError(`${y.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==l(Object.keys(r),Object.keys(e)).length){const t=l(Object.keys(r),Object.keys(e));throw new TypeError(`${y.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}A(e,(t,e,n)=>{const o=void 0!==e?e:t;if(!(!y.enforceStrictKeyset||!c(o)&&!f(o)&&f(n.parent)||a(y.schema)&&c(y.schema)&&(!c(y.schema)||Object.keys(y.schema).length&&(f(n.parent)||Object.prototype.hasOwnProperty.call(y.schema,n.path))&&(!f(n.parent)||gt.has(y.schema,s(n.path))))||a(r)&&c(r)&&(!c(r)||Object.keys(r).length&&(y.acceptArrays||gt.has(r,n.path))&&(!y.acceptArrays||(f(n.parent)||gt.has(r,n.path))&&(!f(n.parent)||gt.has(r,s(n.path)))))))throw new TypeError(`${y.msg}: ${y.optsVarName}.${n.path} is neither covered by reference object (second input argument), nor ${y.optsVarName}.schema! To stop this error, turn off ${y.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${y.optsVarName}.schema).`);if(c(y.schema)&&Object.keys(y.schema).length&&Object.prototype.hasOwnProperty.call(y.schema,n.path)){const t=ht(y.schema[n.path]).map(String).map(t=>t.toLowerCase());if(gt.set(y.schema,n.path,t),!(yt(t,u).length||(!0===o||!1===o||t.includes(i(o).toLowerCase()))&&(!0!==o&&!1!==o||t.includes(String(o))||t.includes("boolean")))){if(!f(o)||!y.acceptArrays)throw new TypeError(`${y.msg}: ${y.optsVarName}.${n.path} was customised to ${"string"!==i(o)?'"':""}${JSON.stringify(o,null,0)}${"string"!==i(o)?'"':""} (${i(o).toLowerCase()}) which is not among the allowed types in schema (${t.join(", ")})`);for(let e=0,r=o.length;e<r;e++)if(!t.includes(i(o[e]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${n.path}.${e}, the ${mt(e+1)} element (equal to ${JSON.stringify(o[e],null,0)}) is of a type ${i(o[e]).toLowerCase()}, but only the following are allowed by the ${y.optsVarName}.schema: ${t.join(", ")}`)}}else if(a(r)&&Object.keys(r).length&&gt.has(r,n.path)&&i(o)!==i(gt.get(r,n.path))&&(!y.ignoreKeys||!y.ignoreKeys.includes(t))&&(!y.ignorePaths||!y.ignorePaths.includes(n.path))){const e=gt.get(r,n.path);if(!y.acceptArrays||!f(o)||y.acceptArraysIgnore.includes(t))throw new TypeError(`${y.msg}: ${y.optsVarName}.${n.path} was customised to ${"string"===i(o).toLowerCase()?"":'"'}${JSON.stringify(o,null,0)}${"string"===i(o).toLowerCase()?"":'"'} which is not ${i(e).toLowerCase()} but ${i(o).toLowerCase()}`);if(!o.every(e=>i(e).toLowerCase()===i(r[t]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${n.path} was customised to be array, but not all of its elements are ${i(r[t]).toLowerCase()}-type`)}return o})}(t,e,r)}const _t=Array.isArray;function wt(t){if(!Array.isArray(t))return t;const r=function(t,r){if(!_t(t))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(0===t.length)return t;const n={strictlyTwoElementsInRangeArrays:!1},i=Object.assign({},n,r);let a,c;if(vt(i,n,{msg:"ranges-sort: [THROW_ID_02*]"}),i.strictlyTwoElementsInRangeArrays&&!t.every((t,e)=>2===t.length||(a=e,c=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${o(a)} range (${JSON.stringify(t[a],null,4)}) has not two but ${c} elements!`);if(!t.every((t,r)=>!(!e(t[0],{includeZero:!0})||!e(t[1],{includeZero:!0}))||(a=r,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${o(a)} range (${JSON.stringify(t[a],null,4)}) does not consist of only natural numbers!`);return Array.from(t).sort((t,e)=>t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1)}(t);for(let t=r.length-1;t>0;t--)(r[t][0]<=r[t-1][0]||r[t][0]<=r[t-1][1])&&(r[t-1][0]=Math.min(r[t][0],r[t-1][0]),r[t-1][1]=Math.max(r[t][1],r[t-1][1]),void 0!==r[t][2]&&(r[t-1][0]>=r[t][0]||r[t-1][1]<=r[t][1])&&null!==r[t-1][2]&&(null===r[t][2]&&null!==r[t-1][2]?r[t-1][2]=null:void 0!==r[t-1][2]?r[t-1][2]+=r[t][2]:r[t-1][2]=r[t][2]),r.splice(t,1),t=r.length);return r}var jt=Array.isArray;return function(r,n,i){if(!jt(r))throw new TypeError("ranges-invert: [THROW_ID_01] Input's first argument must be an array, consisting of range arrays! Currently its type is: ".concat(t(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(!e(n,{includeZero:!0}))throw new TypeError("ranges-invert: [THROW_ID_02] Input's second argument must be a natural number or zero (coming from String.length)! Currently its type is: ".concat(t(n),", equal to: ").concat(JSON.stringify(n,null,4)));if(0===r.length)return r;var a,c,s={strictlyTwoElementsInRangeArrays:!1},u=Object.assign({},s,i);if(vt(u,s,{msg:"ranges-invert: [THROW_ID_03*]"}),u.strictlyTwoElementsInRangeArrays&&!r.every(function(t,e){return 2===t.length||(a=e,c=t.length,!1)}))throw new TypeError("ranges-invert: [THROW_ID_04] Because opts.strictlyTwoElementsInRangeArrays was enabled, all ranges must be strictly two-element-long. However, the ".concat(o(a)," range (").concat(JSON.stringify(r[a],null,0),") has not two but ").concat(c," elements!"));if(!r.every(function(t,r){return!(!e(t[0],{includeZero:!0})||!e(t[1],{includeZero:!0}))||(a=r,!1)})){if(Array.isArray(r)&&"number"==typeof r[0]&&"number"==typeof r[1])throw new TypeError("ranges-invert: [THROW_ID_07] The first argument should be AN ARRAY OF RANGES, not a single range! Currently arrOfRanges = ".concat(JSON.stringify(r,null,0),"!"));throw new TypeError("ranges-invert: [THROW_ID_05] The first argument should be AN ARRAY OF ARRAYS! Each sub-array means string slice indexes. In our case, here ".concat(o(a+1)," range (").concat(JSON.stringify(r[a],null,0),") does not consist of only natural numbers!"))}if(r.some(function(t,e){return t[1]>n&&(a=e,!0)}))throw new TypeError("ranges-invert: [THROW_ID_06] The reference string length strLen=".concat(n," does not cover all the ranges. For example, the ").concat(o(a)," range, ").concat(JSON.stringify(r[a],null,0)," - ending of this range, ").concat(r[a][1]," > ").concat(n," (strLen)."));var f=wt(Array.from(r).filter(function(t){return t[0]!==t[1]}));return 0===f.length?[[0,n]]:f.reduce(function(t,e,r,o){var i=[];0===r&&0!==o[0][0]&&i.push([0,o[0][0]]);var a=r<o.length-1?o[r+1][0]:n;return e[1]!==a&&i.push([e[1],a]),t.concat(i)},[])}});
