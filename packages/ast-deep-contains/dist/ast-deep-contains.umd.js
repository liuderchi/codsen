/**
 * ast-deep-contains
 * an alternative for AVA's t.deepEqual
 * Version: 1.0.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ast-deep-contains
 */

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).astDeepContains=n()}(this,(function(){"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t,n){return t(n={exports:{}},n.exports),n.exports}var e=r((function(t){t.exports=function(){var t=Object.prototype.toString;function n(t,n){return null!=t&&Object.prototype.hasOwnProperty.call(t,n)}function r(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(n(t,r))return!1;return!0}return!1}function e(n){return t.call(n)}var o=Array.isArray||function(n){return"[object Array]"===t.call(n)};function u(t){var n=parseInt(t);return n.toString()===t?n:t}function i(t){t=t||{};var i=function(t){return Object.keys(i).reduce((function(n,r){return"create"===r?n:("function"==typeof i[r]&&(n[r]=i[r].bind(i,t)),n)}),{})};function c(r,e){return t.includeInheritedProps||"number"==typeof e&&Array.isArray(r)||n(r,e)}function a(t,n){if(c(t,n))return t[n]}function f(t,n,r,e){if("number"==typeof n&&(n=[n]),!n||0===n.length)return t;if("string"==typeof n)return f(t,n.split(".").map(u),r,e);var o=n[0],i=a(t,o);return 1===n.length?(void 0!==i&&e||(t[o]=r),i):(void 0===i&&("number"==typeof n[1]?t[o]=[]:t[o]={}),f(t[o],n.slice(1),r,e))}return i.has=function(r,e){if("number"==typeof e?e=[e]:"string"==typeof e&&(e=e.split(".")),!e||0===e.length)return!!r;for(var i=0;i<e.length;i++){var c=u(e[i]);if(!("number"==typeof c&&o(r)&&c<r.length||(t.includeInheritedProps?c in Object(r):n(r,c))))return!1;r=r[c]}return!0},i.ensureExists=function(t,n,r){return f(t,n,r,!0)},i.set=function(t,n,r,e){return f(t,n,r,e)},i.insert=function(t,n,r,e){var u=i.get(t,n);e=~~e,o(u)||(u=[],i.set(t,n,u)),u.splice(e,0,r)},i.empty=function(t,n){var u,a;if(!r(n)&&null!=t&&(u=i.get(t,n))){if("string"==typeof u)return i.set(t,n,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===e(t)}(u))return i.set(t,n,!1);if("number"==typeof u)return i.set(t,n,0);if(o(u))u.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===e(t)}(u))return i.set(t,n,null);for(a in u)c(u,a)&&delete u[a]}}},i.push=function(t,n){var r=i.get(t,n);o(r)||(r=[],i.set(t,n,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},i.coalesce=function(t,n,r){for(var e,o=0,u=n.length;o<u;o++)if(void 0!==(e=i.get(t,n[o])))return e;return r},i.get=function(t,n,r){if("number"==typeof n&&(n=[n]),!n||0===n.length)return t;if(null==t)return r;if("string"==typeof n)return i.get(t,n.split("."),r);var e=u(n[0]),o=a(t,e);return void 0===o?r:1===n.length?o:i.get(t[e],n.slice(1),r)},i.del=function(t,n){if("number"==typeof n&&(n=[n]),null==t)return t;if(r(n))return t;if("string"==typeof n)return i.del(t,n.split("."));var e=u(n[0]);return c(t,e)?1!==n.length?i.del(t[e],n.slice(1)):(o(t)?t.splice(e,1):delete t[e],t):t},i}var c=i();return c.create=i,c.withInheritedProps=i({includeInheritedProps:!0}),c}()})),o=r((function(t,r){var e=200,o="__lodash_hash_undefined__",u=9007199254740991,i="[object Arguments]",c="[object Boolean]",a="[object Date]",f="[object Function]",s="[object GeneratorFunction]",l="[object Map]",p="[object Number]",y="[object Object]",h="[object RegExp]",b="[object Set]",v="[object String]",g="[object Symbol]",d="[object ArrayBuffer]",_="[object DataView]",j="[object Float32Array]",O="[object Float64Array]",m="[object Int8Array]",w="[object Int16Array]",A="[object Int32Array]",S="[object Uint8Array]",x="[object Uint8ClampedArray]",k="[object Uint16Array]",P="[object Uint32Array]",N=/\w*$/,E=/^\[object .+?Constructor\]$/,I=/^(?:0|[1-9]\d*)$/,$={};$[i]=$["[object Array]"]=$[d]=$[_]=$[c]=$[a]=$[j]=$[O]=$[m]=$[w]=$[A]=$[l]=$[p]=$[y]=$[h]=$[b]=$[v]=$[g]=$[S]=$[x]=$[k]=$[P]=!0,$["[object Error]"]=$[f]=$["[object WeakMap]"]=!1;var C="object"==typeof n&&n&&n.Object===Object&&n,T="object"==typeof self&&self&&self.Object===Object&&self,F=C||T||Function("return this")(),B=r&&!r.nodeType&&r,J=B&&t&&!t.nodeType&&t,M=J&&J.exports===B;function U(t,n){return t.set(n[0],n[1]),t}function D(t,n){return t.add(n),t}function L(t,n,r,e){var o=-1,u=t?t.length:0;for(e&&u&&(r=t[++o]);++o<u;)r=n(r,t[o],o,t);return r}function W(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}function R(t){var n=-1,r=Array(t.size);return t.forEach((function(t,e){r[++n]=[e,t]})),r}function V(t,n){return function(r){return t(n(r))}}function z(t){var n=-1,r=Array(t.size);return t.forEach((function(t){r[++n]=t})),r}var G,K=Array.prototype,q=Function.prototype,H=Object.prototype,Q=F["__core-js_shared__"],X=(G=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"",Y=q.toString,Z=H.hasOwnProperty,tt=H.toString,nt=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=M?F.Buffer:void 0,et=F.Symbol,ot=F.Uint8Array,ut=V(Object.getPrototypeOf,Object),it=Object.create,ct=H.propertyIsEnumerable,at=K.splice,ft=Object.getOwnPropertySymbols,st=rt?rt.isBuffer:void 0,lt=V(Object.keys,Object),pt=Jt(F,"DataView"),yt=Jt(F,"Map"),ht=Jt(F,"Promise"),bt=Jt(F,"Set"),vt=Jt(F,"WeakMap"),gt=Jt(Object,"create"),dt=Wt(pt),_t=Wt(yt),jt=Wt(ht),Ot=Wt(bt),mt=Wt(vt),wt=et?et.prototype:void 0,At=wt?wt.valueOf:void 0;function St(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function xt(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function kt(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function Pt(t){this.__data__=new xt(t)}function Nt(t,n){var r=Vt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&zt(t)}(t)&&Z.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==i)}(t)?function(t,n){for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);return e}(t.length,String):[],e=r.length,o=!!e;for(var u in t)!n&&!Z.call(t,u)||o&&("length"==u||Dt(u,e))||r.push(u);return r}function Et(t,n,r){var e=t[n];Z.call(t,n)&&Rt(e,r)&&(void 0!==r||n in t)||(t[n]=r)}function It(t,n){for(var r=t.length;r--;)if(Rt(t[r][0],n))return r;return-1}function $t(t,n,r,e,o,u,E){var I;if(e&&(I=u?e(t,o,u,E):e(t)),void 0!==I)return I;if(!qt(t))return t;var C=Vt(t);if(C){if(I=function(t){var n=t.length,r=t.constructor(n);n&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!n)return function(t,n){var r=-1,e=t.length;n||(n=Array(e));for(;++r<e;)n[r]=t[r];return n}(t,I)}else{var T=Ut(t),F=T==f||T==s;if(Gt(t))return function(t,n){if(n)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,n);if(T==y||T==i||F&&!u){if(W(t))return u?t:{};if(I=function(t){return"function"!=typeof t.constructor||Lt(t)?{}:(n=ut(t),qt(n)?it(n):{});var n}(F?{}:t),!n)return function(t,n){return Ft(t,Mt(t),n)}(t,function(t,n){return t&&Ft(n,Ht(n),t)}(I,t))}else{if(!$[T])return u?t:{};I=function(t,n,r,e){var o=t.constructor;switch(n){case d:return Tt(t);case c:case a:return new o(+t);case _:return function(t,n){var r=n?Tt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,e);case j:case O:case m:case w:case A:case S:case x:case k:case P:return function(t,n){var r=n?Tt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,e);case l:return function(t,n,r){return L(n?r(R(t),!0):R(t),U,new t.constructor)}(t,e,r);case p:case v:return new o(t);case h:return(f=new(i=t).constructor(i.source,N.exec(i))).lastIndex=i.lastIndex,f;case b:return function(t,n,r){return L(n?r(z(t),!0):z(t),D,new t.constructor)}(t,e,r);case g:return u=t,At?Object(At.call(u)):{}}var u;var i,f}(t,T,$t,n)}}E||(E=new Pt);var B=E.get(t);if(B)return B;if(E.set(t,I),!C)var J=r?function(t){return function(t,n,r){var e=n(t);return Vt(t)?e:function(t,n){for(var r=-1,e=n.length,o=t.length;++r<e;)t[o+r]=n[r];return t}(e,r(t))}(t,Ht,Mt)}(t):Ht(t);return function(t,n){for(var r=-1,e=t?t.length:0;++r<e&&!1!==n(t[r],r,t););}(J||t,(function(o,u){J&&(o=t[u=o]),Et(I,u,$t(o,n,r,e,u,t,E))})),I}function Ct(t){return!(!qt(t)||(n=t,X&&X in n))&&(Kt(t)||W(t)?nt:E).test(Wt(t));var n}function Tt(t){var n=new t.constructor(t.byteLength);return new ot(n).set(new ot(t)),n}function Ft(t,n,r,e){r||(r={});for(var o=-1,u=n.length;++o<u;){var i=n[o],c=e?e(r[i],t[i],i,r,t):void 0;Et(r,i,void 0===c?t[i]:c)}return r}function Bt(t,n){var r,e,o=t.__data__;return("string"==(e=typeof(r=n))||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==r:null===r)?o["string"==typeof n?"string":"hash"]:o.map}function Jt(t,n){var r=function(t,n){return null==t?void 0:t[n]}(t,n);return Ct(r)?r:void 0}St.prototype.clear=function(){this.__data__=gt?gt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var n=this.__data__;if(gt){var r=n[t];return r===o?void 0:r}return Z.call(n,t)?n[t]:void 0},St.prototype.has=function(t){var n=this.__data__;return gt?void 0!==n[t]:Z.call(n,t)},St.prototype.set=function(t,n){return this.__data__[t]=gt&&void 0===n?o:n,this},xt.prototype.clear=function(){this.__data__=[]},xt.prototype.delete=function(t){var n=this.__data__,r=It(n,t);return!(r<0)&&(r==n.length-1?n.pop():at.call(n,r,1),!0)},xt.prototype.get=function(t){var n=this.__data__,r=It(n,t);return r<0?void 0:n[r][1]},xt.prototype.has=function(t){return It(this.__data__,t)>-1},xt.prototype.set=function(t,n){var r=this.__data__,e=It(r,t);return e<0?r.push([t,n]):r[e][1]=n,this},kt.prototype.clear=function(){this.__data__={hash:new St,map:new(yt||xt),string:new St}},kt.prototype.delete=function(t){return Bt(this,t).delete(t)},kt.prototype.get=function(t){return Bt(this,t).get(t)},kt.prototype.has=function(t){return Bt(this,t).has(t)},kt.prototype.set=function(t,n){return Bt(this,t).set(t,n),this},Pt.prototype.clear=function(){this.__data__=new xt},Pt.prototype.delete=function(t){return this.__data__.delete(t)},Pt.prototype.get=function(t){return this.__data__.get(t)},Pt.prototype.has=function(t){return this.__data__.has(t)},Pt.prototype.set=function(t,n){var r=this.__data__;if(r instanceof xt){var o=r.__data__;if(!yt||o.length<e-1)return o.push([t,n]),this;r=this.__data__=new kt(o)}return r.set(t,n),this};var Mt=ft?V(ft,Object):function(){return[]},Ut=function(t){return tt.call(t)};function Dt(t,n){return!!(n=null==n?u:n)&&("number"==typeof t||I.test(t))&&t>-1&&t%1==0&&t<n}function Lt(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||H)}function Wt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Rt(t,n){return t===n||t!=t&&n!=n}(pt&&Ut(new pt(new ArrayBuffer(1)))!=_||yt&&Ut(new yt)!=l||ht&&"[object Promise]"!=Ut(ht.resolve())||bt&&Ut(new bt)!=b||vt&&"[object WeakMap]"!=Ut(new vt))&&(Ut=function(t){var n=tt.call(t),r=n==y?t.constructor:void 0,e=r?Wt(r):void 0;if(e)switch(e){case dt:return _;case _t:return l;case jt:return"[object Promise]";case Ot:return b;case mt:return"[object WeakMap]"}return n});var Vt=Array.isArray;function zt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=u}(t.length)&&!Kt(t)}var Gt=st||function(){return!1};function Kt(t){var n=qt(t)?tt.call(t):"";return n==f||n==s}function qt(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function Ht(t){return zt(t)?Nt(t):function(t){if(!Lt(t))return lt(t);var n=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&n.push(r);return n}(t)}t.exports=function(t){return $t(t,!0,!0)}})),u="[object Object]";var i,c,a=Function.prototype,f=Object.prototype,s=a.toString,l=f.hasOwnProperty,p=s.call(Object),y=f.toString,h=(i=Object.getPrototypeOf,c=Object,function(t){return i(c(t))});var b=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||y.call(t)!=u||function(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}(t))return!1;var n=h(t);if(null===n)return!0;var r=l.call(n,"constructor")&&n.constructor;return"function"==typeof r&&r instanceof r&&s.call(r)==p};const v=Array.isArray;function g(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}var d=Array.isArray;function _(n){return null===n?"null":t(n)}function j(t){return"object"===_(t)}return function t(n,r,u,i,c){var a=Object.assign({},{skipContainers:!0,arrayStrictComparison:!1},c);_(n)!==_(r)?i("the first input arg is of a type ".concat(_(n).toLowerCase()," but the second is ").concat(_(r).toLowerCase(),". Values are - 1st:\n").concat(JSON.stringify(n,null,4),"\n2nd:\n").concat(JSON.stringify(r,null,4))):function(t,n){(function t(n,r,e,u){const i=o(n);let c,a,f,s,l;if((e=Object.assign({depth:-1,path:""},e)).depth+=1,v(i))for(c=0,a=i.length;c<a&&!u.now;c++){const n=`${e.path}.${c}`;void 0!==i[c]?(e.parent=o(i),e.parentType="array",f=t(r(i[c],void 0,Object.assign({},e,{path:g(n)}),u),r,Object.assign({},e,{path:g(n)}),u),Number.isNaN(f)&&c<i.length?(i.splice(c,1),c-=1):i[c]=f):i.splice(c,1)}else if(b(i))for(c=0,a=(s=Object.keys(i)).length;c<a&&!u.now;c++){l=s[c];const n=`${e.path}.${l}`;0===e.depth&&null!=l&&(e.topmostKey=l),e.parent=o(i),e.parentType="object",f=t(r(l,i[l],Object.assign({},e,{path:g(n)}),u),r,Object.assign({},e,{path:g(n)}),u),Number.isNaN(f)?delete i[l]:i[l]=f}return i})(t,n,{},{now:!1})}(r,(function(r,o,c,f){var s=void 0!==o?o:r,l=c.path;if(e.has(n,l))if(!a.arrayStrictComparison&&j(s)&&"array"===c.parentType&&c.parent.length>1)!function(){f.now=!0;var r=Array.from(c.path.includes(".")?e.get(n,function(t){for(var n=t.length;n--;)if("."===t[n])return t.slice(0,n);return t}(l)):n);r.length<c.parent.length?i("the first array: ".concat(JSON.stringify(r,null,4),"\nhas less objects than array we're matching against, ").concat(JSON.stringify(c.parent,null,4))):function(){for(var n=c.parent,e=r.map((function(t,n){return n})),o=(n.map((function(t,n){return n})),[]),f=function(t,n){var r,u,i=[],c=e[t],a=(r=e,u=t,Array.from(r).filter((function(t,n){return n!==u})));i.push(c),a.forEach((function(t){o.push(Array.from(i).concat(t))}))},s=0,l=e.length;s<l;s++)f(s);for(var p=o.map((function(t){return t.map((function(t,n){return[n,t]}))})),y=0,h=0,b=p.length;h<b;h++){var v=0;p[h].forEach((function(t){j(n[t[0]])&&j(r[t[1]])&&Object.keys(n[t[0]]).forEach((function(e){Object.keys(r[t[1]]).includes(e)&&(v+=1,r[t[1]][e]===n[t[0]][e]&&(v+=5))}))})),p[h].push(v),v>y&&(y=v)}for(var g=function(e,o){if(p[e][2]===y)return p[e].forEach((function(o,c){c<p[e].length-1&&t(r[o[1]],n[o[0]],u,i,a)})),"break"},d=0,_=p.length;d<_;d++){if("break"===g(d))break}}()}();else{var p=e.get(n,l);a.skipContainers&&(j(p)||d(p))||u(p,s,l)}else i("the first input: ".concat(JSON.stringify(n,null,4),'\ndoes not have the path "').concat(l,'", we were looking, would it contain a value ').concat(JSON.stringify(s,null,0),"."));return s}))}}));
