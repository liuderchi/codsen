/**
 * eslint-plugin-test-num
 * ESLint plugin to update unit test numbers automatically
 * Version: 1.3.12
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/eslint-plugin-test-num/
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).eslintPluginTestNum=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports}var u=i((function(e){e.exports=function(){var e=Object.prototype.toString;function r(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function n(t){if(!t)return!0;if(u(t)&&0===t.length)return!0;if("string"!=typeof t){for(var e in t)if(r(t,e))return!1;return!0}return!1}function o(t){return e.call(t)}function i(e){return"object"===t(e)&&"[object Object]"===o(e)}var u=Array.isArray||function(t){return"[object Array]"===e.call(t)};function s(t){return"boolean"==typeof t||"[object Boolean]"===o(t)}function a(t){var e=parseInt(t);return e.toString()===t?e:t}function c(t){var e,o=function t(e){return Object.keys(t).reduce((function(r,n){return"create"===n||"function"==typeof t[n]&&(r[n]=t[n].bind(t,e)),r}),{})};function c(t,r){if(e(t,r))return t[r]}function l(e,r,n,o){if("number"==typeof r&&(r=[r]),!r||0===r.length)return e;if("string"==typeof r)return l(e,r.split(".").map(a),n,o);var i=r[0],u=c(e,i);if(t.includeInheritedProps&&("__proto__"===i||"constructor"===i&&"function"==typeof u))throw new Error("For security reasons, object's magic properties cannot be set");return 1===r.length?(void 0!==u&&o||(e[i]=n),u):(void 0===u&&("number"==typeof r[1]?e[i]=[]:e[i]={}),l(e[i],r.slice(1),n,o))}return e=(t=t||{}).includeInheritedProps?function(){return!0}:function(t,e){return"number"==typeof e&&Array.isArray(t)||r(t,e)},o.has=function(e,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!e;for(var o=0;o<n.length;o++){var i=a(n[o]);if(!("number"==typeof i&&u(e)&&i<e.length||(t.includeInheritedProps?i in Object(e):r(e,i))))return!1;e=e[i]}return!0},o.ensureExists=function(t,e,r){return l(t,e,r,!0)},o.set=function(t,e,r,n){return l(t,e,r,n)},o.insert=function(t,e,r,n){var i=o.get(t,e);n=~~n,u(i)||(i=[],o.set(t,e,i)),i.splice(n,0,r)},o.empty=function(t,r){var a,c;if(!n(r)&&null!=t&&(a=o.get(t,r))){if("string"==typeof a)return o.set(t,r,"");if(s(a))return o.set(t,r,!1);if("number"==typeof a)return o.set(t,r,0);if(u(a))a.length=0;else{if(!i(a))return o.set(t,r,null);for(c in a)e(a,c)&&delete a[c]}}},o.push=function(t,e){var r=o.get(t,e);u(r)||(r=[],o.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},o.coalesce=function(t,e,r){for(var n,i=0,u=e.length;i<u;i++)if(void 0!==(n=o.get(t,e[i])))return n;return r},o.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return o.get(t,e.split("."),r);var n=a(e[0]),i=c(t,n);return void 0===i?r:1===e.length?i:o.get(t[n],e.slice(1),r)},o.del=function(t,r){if("number"==typeof r&&(r=[r]),null==t)return t;if(n(r))return t;if("string"==typeof r)return o.del(t,r.split("."));var i=a(r[0]);return e(t,i)?1!==r.length?o.del(t[i],r.slice(1)):(u(t)?t.splice(i,1):delete t[i],t):t},o}var l=c();return l.create=c,l.withInheritedProps=c({includeInheritedProps:!0}),l}()}));Function.prototype.toString.call(Object),i((function(e,r){var n="__lodash_hash_undefined__",i=9007199254740991,u="[object Arguments]",s="[object Boolean]",a="[object Date]",c="[object Function]",l="[object GeneratorFunction]",f="[object Map]",p="[object Number]",y="[object Object]",g="[object Promise]",d="[object RegExp]",h="[object Set]",v="[object String]",b="[object Symbol]",m="[object WeakMap]",_="[object ArrayBuffer]",j="[object DataView]",x="[object Float32Array]",w="[object Float64Array]",O="[object Int8Array]",S="[object Int16Array]",A="[object Int32Array]",E="[object Uint8Array]",q="[object Uint8ClampedArray]",I="[object Uint16Array]",P="[object Uint32Array]",N=/\w*$/,T=/^\[object .+?Constructor\]$/,k=/^(?:0|[1-9]\d*)$/,D={};D[u]=D["[object Array]"]=D[_]=D[j]=D[s]=D[a]=D[x]=D[w]=D[O]=D[S]=D[A]=D[f]=D[p]=D[y]=D[d]=D[h]=D[v]=D[b]=D[E]=D[q]=D[I]=D[P]=!0,D["[object Error]"]=D[c]=D[m]=!1;var L="object"==t(o)&&o&&o.Object===Object&&o,R="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,F=L||R||Function("return this")(),U=r&&!r.nodeType&&r,$=U&&e&&!e.nodeType&&e,B=$&&$.exports===U;function M(t,e){return t.set(e[0],e[1]),t}function C(t,e){return t.add(e),t}function z(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function V(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function W(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function G(t,e){return function(r){return t(e(r))}}function H(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var J,K=Array.prototype,Q=Function.prototype,X=Object.prototype,Y=F["__core-js_shared__"],Z=(J=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+J:"",tt=Q.toString,et=X.hasOwnProperty,rt=X.toString,nt=RegExp("^"+tt.call(et).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=B?F.Buffer:void 0,it=F.Symbol,ut=F.Uint8Array,st=G(Object.getPrototypeOf,Object),at=Object.create,ct=X.propertyIsEnumerable,lt=K.splice,ft=Object.getOwnPropertySymbols,pt=ot?ot.isBuffer:void 0,yt=G(Object.keys,Object),gt=$t(F,"DataView"),dt=$t(F,"Map"),ht=$t(F,"Promise"),vt=$t(F,"Set"),bt=$t(F,"WeakMap"),mt=$t(Object,"create"),_t=Vt(gt),jt=Vt(dt),xt=Vt(ht),wt=Vt(vt),Ot=Vt(bt),St=it?it.prototype:void 0,At=St?St.valueOf:void 0;function Et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function qt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function It(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Pt(t){this.__data__=new qt(t)}function Nt(e,r){var n=Gt(e)||function(e){return function(e){return function(e){return!!e&&"object"==t(e)}(e)&&Ht(e)}(e)&&et.call(e,"callee")&&(!ct.call(e,"callee")||rt.call(e)==u)}(e)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(e.length,String):[],o=n.length,i=!!o;for(var s in e)!r&&!et.call(e,s)||i&&("length"==s||Ct(s,o))||n.push(s);return n}function Tt(t,e,r){var n=t[e];et.call(t,e)&&Wt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function kt(t,e){for(var r=t.length;r--;)if(Wt(t[r][0],e))return r;return-1}function Dt(t,e,r,n,o,i,g){var m;if(n&&(m=i?n(t,o,i,g):n(t)),void 0!==m)return m;if(!Qt(t))return t;var T=Gt(t);if(T){if(m=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&et.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,m)}else{var k=Mt(t),L=k==c||k==l;if(Jt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(k==y||k==u||L&&!i){if(V(t))return i?t:{};if(m=function(t){return"function"!=typeof t.constructor||zt(t)?{}:(e=st(t),Qt(e)?at(e):{});var e}(L?{}:t),!e)return function(t,e){return Ft(t,Bt(t),e)}(t,function(t,e){return t&&Ft(e,Xt(e),t)}(m,t))}else{if(!D[k])return i?t:{};m=function(t,e,r,n){var o=t.constructor;switch(e){case _:return Rt(t);case s:case a:return new o(+t);case j:return function(t,e){var r=e?Rt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case x:case w:case O:case S:case A:case E:case q:case I:case P:return function(t,e){var r=e?Rt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case f:return function(t,e,r){return z(e?r(W(t),!0):W(t),M,new t.constructor)}(t,n,r);case p:case v:return new o(t);case d:return function(t){var e=new t.constructor(t.source,N.exec(t));return e.lastIndex=t.lastIndex,e}(t);case h:return function(t,e,r){return z(e?r(H(t),!0):H(t),C,new t.constructor)}(t,n,r);case b:return i=t,At?Object(At.call(i)):{}}var i}(t,k,Dt,e)}}g||(g=new Pt);var R=g.get(t);if(R)return R;if(g.set(t,m),!T)var F=r?function(t){return function(t,e,r){var n=e(t);return Gt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Xt,Bt)}(t):Xt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(F||t,(function(o,i){F&&(o=t[i=o]),Tt(m,i,Dt(o,e,r,n,i,t,g))})),m}function Lt(t){return!(!Qt(t)||(e=t,Z&&Z in e))&&(Kt(t)||V(t)?nt:T).test(Vt(t));var e}function Rt(t){var e=new t.constructor(t.byteLength);return new ut(e).set(new ut(t)),e}function Ft(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var u=e[o],s=n?n(r[u],t[u],u,r,t):void 0;Tt(r,u,void 0===s?t[u]:s)}return r}function Ut(e,r){var n,o,i=e.__data__;return("string"==(o=t(n=r))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?i["string"==typeof r?"string":"hash"]:i.map}function $t(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Lt(r)?r:void 0}Et.prototype.clear=function(){this.__data__=mt?mt(null):{}},Et.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Et.prototype.get=function(t){var e=this.__data__;if(mt){var r=e[t];return r===n?void 0:r}return et.call(e,t)?e[t]:void 0},Et.prototype.has=function(t){var e=this.__data__;return mt?void 0!==e[t]:et.call(e,t)},Et.prototype.set=function(t,e){return this.__data__[t]=mt&&void 0===e?n:e,this},qt.prototype.clear=function(){this.__data__=[]},qt.prototype.delete=function(t){var e=this.__data__,r=kt(e,t);return!(r<0)&&(r==e.length-1?e.pop():lt.call(e,r,1),!0)},qt.prototype.get=function(t){var e=this.__data__,r=kt(e,t);return r<0?void 0:e[r][1]},qt.prototype.has=function(t){return kt(this.__data__,t)>-1},qt.prototype.set=function(t,e){var r=this.__data__,n=kt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},It.prototype.clear=function(){this.__data__={hash:new Et,map:new(dt||qt),string:new Et}},It.prototype.delete=function(t){return Ut(this,t).delete(t)},It.prototype.get=function(t){return Ut(this,t).get(t)},It.prototype.has=function(t){return Ut(this,t).has(t)},It.prototype.set=function(t,e){return Ut(this,t).set(t,e),this},Pt.prototype.clear=function(){this.__data__=new qt},Pt.prototype.delete=function(t){return this.__data__.delete(t)},Pt.prototype.get=function(t){return this.__data__.get(t)},Pt.prototype.has=function(t){return this.__data__.has(t)},Pt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof qt){var n=r.__data__;if(!dt||n.length<199)return n.push([t,e]),this;r=this.__data__=new It(n)}return r.set(t,e),this};var Bt=ft?G(ft,Object):function(){return[]},Mt=function(t){return rt.call(t)};function Ct(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||k.test(t))&&t>-1&&t%1==0&&t<e}function zt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||X)}function Vt(t){if(null!=t){try{return tt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Wt(t,e){return t===e||t!=t&&e!=e}(gt&&Mt(new gt(new ArrayBuffer(1)))!=j||dt&&Mt(new dt)!=f||ht&&Mt(ht.resolve())!=g||vt&&Mt(new vt)!=h||bt&&Mt(new bt)!=m)&&(Mt=function(t){var e=rt.call(t),r=e==y?t.constructor:void 0,n=r?Vt(r):void 0;if(n)switch(n){case _t:return j;case jt:return f;case xt:return g;case wt:return h;case Ot:return m}return e});var Gt=Array.isArray;function Ht(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!Kt(t)}var Jt=pt||function(){return!1};function Kt(t){var e=Qt(t)?rt.call(t):"";return e==c||e==l}function Qt(e){var r=t(e);return!!e&&("object"==r||"function"==r)}function Xt(t){return Ht(t)?Nt(t):function(t){if(!zt(t))return yt(t);var e=[];for(var r in Object(t))et.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}e.exports=function(t){return Dt(t,!0,!0)}}));function s(t,e){if("string"==typeof t&&t.length)for(var r,o=n(n({},{offset:0}),e),i=null,u=0,s=t.length;u<=s;u++){if(null!==i&&(t[u]&&t[u].trim().length&&!/\d/.test(t[u])&&!["."].includes(t[u])||!t[u]))return{start:o.offset+i,end:o.offset+r+1,value:t.slice(i,r+1)};if(/^\d*$/.test(t[u])&&(r=u,null===i&&(i=u)),null===i&&t[u]&&t[u].trim().length&&!/[\d.'"`]/.test(t[u]))return}}var a=function(t,e,r){return"single"===t?e:"".concat(e,".").concat("".concat(r).padStart(2,"0"))},c=new Set(["ok","notOk","true","false","assert","assertNot","error","ifErr","ifError","rejects","resolves","resolveMatchSnapshot","throws","throw","doesNotThrow","notThrow","expectUncaughtException"]),l=new Set(["emits","rejects","resolveMatch","throws","throw","expectUncaughtException","equal","equals","isEqual","is","strictEqual","strictEquals","strictIs","isStrict","isStrictly","notEqual","inequal","notEqual","notEquals","notStrictEqual","notStrictEquals","isNotEqual","isNot","doesNotEqual","isInequal","same","equivalent","looseEqual","looseEquals","deepEqual","deepEquals","isLoose","looseIs","notSame","inequivalent","looseInequal","notDeep","deepInequal","notLoose","looseNot","strictSame","strictEquivalent","strictDeepEqual","sameStrict","deepIs","isDeeply","isDeep","strictDeepEquals","strictNotSame","strictInequivalent","strictDeepInequal","notSameStrict","deepNot","notDeeply","strictDeepInequals","notStrictSame","hasStrict","match","has","hasFields","matches","similar","like","isLike","includes","include","contains","notMatch","dissimilar","unsimilar","notSimilar","unlike","isUnlike","notLike","isNotLike","doesNotHave","isNotSimilar","isDissimilar","type","isa","isA"]);return{configs:{recommended:{plugins:["test-num"],rules:{"no-console":"off","test-num/correct-test-num":"error"}}},rules:{"correct-test-num":{create:function(t){var e=0;return{ExpressionStatement:function(r){if("CallExpression"===u.get(r,"expression.type")&&["test","only","skip","todo"].includes(u.get(r,"expression.callee.property.name"))&&["TemplateLiteral","Literal"].includes(u.get(r,"expression.arguments.0.type"))){var n,o="".concat(e+=1).padStart(2,"0");if(!n&&"TemplateLiteral"===u.get(r,"expression.arguments.0.type")&&u.has(r,"expression.arguments.0.quasis.0.value.raw")){var i=s(u.get(r,"expression.arguments.0.quasis.0.value.raw"),{offset:u.get(r,"expression.arguments.0.quasis.0.start"),returnRangesOnly:!0})||{},f=i.start,p=i.end,y=i.value;f&&p&&y&&y!==o&&(n={start:f,end:p,value:o,node:u.get(r,"expression.arguments.0.quasis.0")})}if(!n&&"Literal"===r.expression.arguments[0].type&&r.expression.arguments[0].raw){var g=s(r.expression.arguments[0].raw,{offset:r.expression.arguments[0].start,returnRangesOnly:!0})||{},d=g.start,h=g.end,v=g.value;d&&h&&v&&v!==o&&(n={start:d,end:h,value:o,node:r.expression.arguments[0]})}if(!n&&"ArrowFunctionExpression"===u.get(r,"expression.arguments.1.type")&&"BlockStatement"===u.get(r,"expression.arguments.1.body.type")&&u.get(r,"expression.arguments.1.body.body").length){var b,m="multiple";2===(b=u.get(r,"expression.arguments.1.body.body").filter((function(t){return"ExpressionStatement"===t.type&&"t"===u.get(t,"expression.callee.object.name")}))).length&&"end"===u.get(b[b.length-1],"expression.callee.property.name")&&(m="single");var _=u.get(r,"expression.arguments.1.body.body");if(Array.isArray(_))for(var j=0,x=0,w=_.length;x<w;x++){var O=u.get(_[x],"expression.callee.property.name");if(O){var S=void 0;if(l.has(O)&&u.has(_[x],"expression.arguments.2")?S=2:c.has(O)&&u.has(_[x],"expression.arguments.1")&&(S=1),S){if("continue"===function(){var e=void 0,r=void 0,n=void 0;"TemplateLiteral"===u.get(_[x],"expression.arguments.".concat(S,".type"))?(r="expression.arguments.".concat(S,".quasis.0"),e=u.get(_[x],"".concat(r,".value.raw")),n=u.get(_[x],"".concat(r,".start")),j+=1):"Literal"===u.get(_[x],"expression.arguments.".concat(S,".type"))&&(r="expression.arguments.".concat(S),e=u.get(_[x],"".concat(r,".raw")),n=u.get(_[x],"".concat(r,".start")),j+=1);var i=s(e,{offset:n,returnRangesOnly:!0})||{},c=i.start,l=i.end;if(!c||!l)return"continue";var f=a(m,o,j);s(e).value!==f&&t.report({node:u.get(_[x],r),messageId:"correctTestNum",fix:function(t){return t.replaceTextRange([c,l],f)}})}())continue}else{var A=void 0;l.has(O)&&Array.isArray(u.get(_[x],"expression.arguments"))&&2===u.get(_[x],"expression.arguments").length?A=2:c.has(O)&&Array.isArray(u.get(_[x],"expression.arguments"))&&1===u.get(_[x],"expression.arguments").length&&(A=1),A&&function(){var e=u.get(_[x],"expression.end")-1,r=a(m,o,j),n=t.getSourceCode().getText(),i=e,s=function(t){var e=t.str,r=t.idx,n=t.stopAtNewlines,o=t.stopAtRawNbsp;if("string"!=typeof e||!e.length)return null;if(r&&"number"==typeof r||(r=0),r<1)return null;if(e[~-r]&&(e[~-r].trim()||n&&"\n\r".includes(e[~-r])||o&&" "===e[~-r]))return~-r;if(e[r-2]&&(e[r-2].trim()||n&&"\n\r".includes(e[r-2])||o&&" "===e[r-2]))return r-2;for(var i=r;i--;)if(e[i]&&(e[i].trim()||n&&"\n\r".includes(e[i])||o&&" "===e[i]))return i;return null}({str:n,idx:i,stopAtNewlines:!1,stopAtRawNbsp:!1})+1,c=', "'.concat(r,'"');if(n.slice(s,i).includes("\n")){var l=Array.from(n.slice(s,i)).filter((function(t){return!"\r\n".includes(t)})).join("");c=",\n".concat(l,'  "').concat(r,'"\n').concat(l)}t.report({node:_[x],messageId:"correctTestNum",fix:function(t){return t.replaceTextRange([s,i],c)}})}()}}}}n&&t.report({messageId:"correctTestNum",node:n.node||r,fix:function(t){return t.replaceTextRange([n.start,n.end],n.value)}})}}}},meta:{type:"suggestion",messages:{correctTestNum:"Update the test number."},fixable:"code"}}}}}));
