/**
 * @name string-convert-indexes
 * @fileoverview Convert between native JS string character indexes and grapheme-count-based indexes
 * @version 4.0.14
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-convert-indexes/}
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).stringConvertIndexes={})}(this,(function(t){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t){var e={exports:{}};return t(e,e.exports),e.exports}var n=r((function(t,r){var n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",u="[object Boolean]",c="[object Date]",a="[object Function]",f="[object GeneratorFunction]",s="[object Map]",l="[object Number]",p="[object Object]",h="[object Promise]",d="[object RegExp]",y="[object Set]",v="[object String]",g="[object Symbol]",_="[object WeakMap]",b="[object ArrayBuffer]",j="[object DataView]",w="[object Float32Array]",O="[object Float64Array]",x="[object Int8Array]",m="[object Int16Array]",A="[object Int32Array]",$="[object Uint8Array]",S="[object Uint8ClampedArray]",I="[object Uint16Array]",T="[object Uint32Array]",E=/\w*$/,N=/^\[object .+?Constructor\]$/,C=/^(?:0|[1-9]\d*)$/,k={};k[i]=k["[object Array]"]=k[b]=k[j]=k[u]=k[c]=k[w]=k[O]=k[x]=k[m]=k[A]=k[s]=k[l]=k[p]=k[d]=k[y]=k[v]=k[g]=k[$]=k[S]=k[I]=k[T]=!0,k["[object Error]"]=k[a]=k[_]=!1;var D="object"==typeof self&&self&&self.Object===Object&&self,P="object"==typeof e&&e&&e.Object===Object&&e||D||Function("return this")(),R=r&&!r.nodeType&&r,B=R&&t&&!t.nodeType&&t,W=B&&B.exports===R;function F(t,e){return t.set(e[0],e[1]),t}function H(t,e){return t.add(e),t}function U(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function G(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function M(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function z(t,e){return function(r){return t(e(r))}}function J(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var K,L=Array.prototype,V=Function.prototype,q=Object.prototype,Q=P["__core-js_shared__"],X=(K=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+K:"",Y=V.toString,Z=q.hasOwnProperty,tt=q.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=W?P.Buffer:void 0,nt=P.Symbol,ot=P.Uint8Array,it=z(Object.getPrototypeOf,Object),ut=Object.create,ct=q.propertyIsEnumerable,at=L.splice,ft=Object.getOwnPropertySymbols,st=rt?rt.isBuffer:void 0,lt=z(Object.keys,Object),pt=Bt(P,"DataView"),ht=Bt(P,"Map"),dt=Bt(P,"Promise"),yt=Bt(P,"Set"),vt=Bt(P,"WeakMap"),gt=Bt(Object,"create"),_t=Gt(pt),bt=Gt(ht),jt=Gt(dt),wt=Gt(yt),Ot=Gt(vt),xt=nt?nt.prototype:void 0,mt=xt?xt.valueOf:void 0;function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function $t(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function It(t){this.__data__=new $t(t)}function Tt(t,e){var r=zt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Jt(t)}(t)&&Z.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==i)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var u in t)!e&&!Z.call(t,u)||o&&("length"==u||Ht(u,n))||r.push(u);return r}function Et(t,e,r){var n=t[e];Z.call(t,e)&&Mt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Nt(t,e){for(var r=t.length;r--;)if(Mt(t[r][0],e))return r;return-1}function Ct(t,e,r,n,o,h,_){var N;if(n&&(N=h?n(t,o,h,_):n(t)),void 0!==N)return N;if(!Vt(t))return t;var C=zt(t);if(C){if(N=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,N)}else{var D=Ft(t),P=D==a||D==f;if(Kt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(D==p||D==i||P&&!h){if(G(t))return h?t:{};if(N=function(t){return"function"!=typeof t.constructor||Ut(t)?{}:(e=it(t),Vt(e)?ut(e):{});var e}(P?{}:t),!e)return function(t,e){return Pt(t,Wt(t),e)}(t,function(t,e){return t&&Pt(e,qt(e),t)}(N,t))}else{if(!k[D])return h?t:{};N=function(t,e,r,n){var o=t.constructor;switch(e){case b:return Dt(t);case u:case c:return new o(+t);case j:return function(t,e){var r=e?Dt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case w:case O:case x:case m:case A:case $:case S:case I:case T:return function(t,e){var r=e?Dt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case s:return function(t,e,r){return U(e?r(M(t),!0):M(t),F,new t.constructor)}(t,n,r);case l:case v:return new o(t);case d:return function(t){var e=new t.constructor(t.source,E.exec(t));return e.lastIndex=t.lastIndex,e}(t);case y:return function(t,e,r){return U(e?r(J(t),!0):J(t),H,new t.constructor)}(t,n,r);case g:return i=t,mt?Object(mt.call(i)):{}}var i}(t,D,Ct,e)}}_||(_=new It);var R=_.get(t);if(R)return R;if(_.set(t,N),!C)var B=r?function(t){return function(t,e,r){var n=e(t);return zt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,qt,Wt)}(t):qt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(B||t,(function(o,i){B&&(o=t[i=o]),Et(N,i,Ct(o,e,r,n,i,t,_))})),N}function kt(t){return!(!Vt(t)||(e=t,X&&X in e))&&(Lt(t)||G(t)?et:N).test(Gt(t));var e}function Dt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Pt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var u=e[o],c=n?n(r[u],t[u],u,r,t):void 0;Et(r,u,void 0===c?t[u]:c)}return r}function Rt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Bt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return kt(r)?r:void 0}At.prototype.clear=function(){this.__data__=gt?gt(null):{}},At.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},At.prototype.get=function(t){var e=this.__data__;if(gt){var r=e[t];return r===n?void 0:r}return Z.call(e,t)?e[t]:void 0},At.prototype.has=function(t){var e=this.__data__;return gt?void 0!==e[t]:Z.call(e,t)},At.prototype.set=function(t,e){return this.__data__[t]=gt&&void 0===e?n:e,this},$t.prototype.clear=function(){this.__data__=[]},$t.prototype.delete=function(t){var e=this.__data__,r=Nt(e,t);return!(r<0)&&(r==e.length-1?e.pop():at.call(e,r,1),!0)},$t.prototype.get=function(t){var e=this.__data__,r=Nt(e,t);return r<0?void 0:e[r][1]},$t.prototype.has=function(t){return Nt(this.__data__,t)>-1},$t.prototype.set=function(t,e){var r=this.__data__,n=Nt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},St.prototype.clear=function(){this.__data__={hash:new At,map:new(ht||$t),string:new At}},St.prototype.delete=function(t){return Rt(this,t).delete(t)},St.prototype.get=function(t){return Rt(this,t).get(t)},St.prototype.has=function(t){return Rt(this,t).has(t)},St.prototype.set=function(t,e){return Rt(this,t).set(t,e),this},It.prototype.clear=function(){this.__data__=new $t},It.prototype.delete=function(t){return this.__data__.delete(t)},It.prototype.get=function(t){return this.__data__.get(t)},It.prototype.has=function(t){return this.__data__.has(t)},It.prototype.set=function(t,e){var r=this.__data__;if(r instanceof $t){var n=r.__data__;if(!ht||n.length<199)return n.push([t,e]),this;r=this.__data__=new St(n)}return r.set(t,e),this};var Wt=ft?z(ft,Object):function(){return[]},Ft=function(t){return tt.call(t)};function Ht(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||C.test(t))&&t>-1&&t%1==0&&t<e}function Ut(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||q)}function Gt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Mt(t,e){return t===e||t!=t&&e!=e}(pt&&Ft(new pt(new ArrayBuffer(1)))!=j||ht&&Ft(new ht)!=s||dt&&Ft(dt.resolve())!=h||yt&&Ft(new yt)!=y||vt&&Ft(new vt)!=_)&&(Ft=function(t){var e=tt.call(t),r=e==p?t.constructor:void 0,n=r?Gt(r):void 0;if(n)switch(n){case _t:return j;case bt:return s;case jt:return h;case wt:return y;case Ot:return _}return e});var zt=Array.isArray;function Jt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Lt(t)}var Kt=st||function(){return!1};function Lt(t){var e=Vt(t)?tt.call(t):"";return e==a||e==f}function Vt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function qt(t){return Jt(t)?Tt(t):function(t){if(!Ut(t))return lt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Ct(t,!0,!0)}}));var o,i,u=Object.prototype,c=Function.prototype.toString,a=u.hasOwnProperty,f=c.call(Object),s=u.toString,l=(o=Object.getPrototypeOf,i=Object,function(t){return o(i(t))});var p=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=s.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=l(t);if(null===e)return!0;var r=a.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&c.call(r)==f};
/**
 * @name ast-monkey-util
 * @fileoverview Utility library of AST helper functions
 * @version 1.3.14
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ast-monkey-util/}
 */function h(t){if(t.includes(".")){const e=t.lastIndexOf(".");if(!t.slice(0,e).includes("."))return t.slice(0,e);for(let r=e-1;r--;)if("."===t[r])return t.slice(r+1,e)}return null}
/**
 * @name ast-monkey-traverse
 * @fileoverview Utility library to traverse AST
 * @version 2.0.14
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ast-monkey-traverse/}
 */function d(t,e){return function t(e,r,o,i){const u=n(e);let c;const a={depth:-1,path:"",...o};if(a.depth+=1,Array.isArray(u))for(let e=0,o=u.length;e<o&&!i.now;e++){const o=a.path?`${a.path}.${e}`:`${e}`;void 0!==u[e]?(a.parent=n(u),a.parentType="array",a.parentKey=h(o),c=t(r(u[e],void 0,{...a,path:o},i),r,{...a,path:o},i),Number.isNaN(c)&&e<u.length?(u.splice(e,1),e-=1):u[e]=c):u.splice(e,1)}else if(p(u))for(const e in u){if(i.now&&null!=e)break;const o=a.path?`${a.path}.${e}`:e;0===a.depth&&null!=e&&(a.topmostKey=e),a.parent=n(u),a.parentType="object",a.parentKey=h(o),c=t(r(e,u[e],{...a,path:o},i),r,{...a,path:o},i),Number.isNaN(c)?delete u[e]:u[e]=c}return u}(t,e,{},{now:!1})}var y=r((function(t){t.exports&&(t.exports=function(){var t=3,e=4,r=12,n=13,o=16,i=17;function u(t,e){void 0===e&&(e=0);var r=t.charCodeAt(e);if(55296<=r&&r<=56319&&e<t.length-1){var n=r;return 56320<=(o=t.charCodeAt(e+1))&&o<=57343?1024*(n-55296)+(o-56320)+65536:n}if(56320<=r&&r<=57343&&e>=1){var o=r;return 55296<=(n=t.charCodeAt(e-1))&&n<=56319?1024*(n-55296)+(o-56320)+65536:o}return r}function c(u,c,a){var f=[u].concat(c).concat([a]),s=f[f.length-2],l=a,p=f.lastIndexOf(14);if(p>1&&f.slice(1,p).every((function(e){return e==t}))&&-1==[t,n,i].indexOf(u))return 2;var h=f.lastIndexOf(e);if(h>0&&f.slice(1,h).every((function(t){return t==e}))&&-1==[r,e].indexOf(s))return f.filter((function(t){return t==e})).length%2==1?3:4;if(0==s&&1==l)return 0;if(2==s||0==s||1==s)return 14==l&&c.every((function(e){return e==t}))?2:1;if(2==l||0==l||1==l)return 1;if(6==s&&(6==l||7==l||9==l||10==l))return 0;if(!(9!=s&&7!=s||7!=l&&8!=l))return 0;if((10==s||8==s)&&8==l)return 0;if(l==t||15==l)return 0;if(5==l)return 0;if(s==r)return 0;var d=-1!=f.indexOf(t)?f.lastIndexOf(t)-1:f.length-2;return-1!=[n,i].indexOf(f[d])&&f.slice(d+1,-1).every((function(e){return e==t}))&&14==l||15==s&&-1!=[o,i].indexOf(l)?0:-1!=c.indexOf(e)?2:s==e&&l==e?0:1}function a(u){return 1536<=u&&u<=1541||1757==u||1807==u||2274==u||3406==u||69821==u||70082<=u&&u<=70083||72250==u||72326<=u&&u<=72329||73030==u?r:13==u?0:10==u?1:0<=u&&u<=9||11<=u&&u<=12||14<=u&&u<=31||127<=u&&u<=159||173==u||1564==u||6158==u||8203==u||8206<=u&&u<=8207||8232==u||8233==u||8234<=u&&u<=8238||8288<=u&&u<=8292||8293==u||8294<=u&&u<=8303||55296<=u&&u<=57343||65279==u||65520<=u&&u<=65528||65529<=u&&u<=65531||113824<=u&&u<=113827||119155<=u&&u<=119162||917504==u||917505==u||917506<=u&&u<=917535||917632<=u&&u<=917759||918e3<=u&&u<=921599?2:768<=u&&u<=879||1155<=u&&u<=1159||1160<=u&&u<=1161||1425<=u&&u<=1469||1471==u||1473<=u&&u<=1474||1476<=u&&u<=1477||1479==u||1552<=u&&u<=1562||1611<=u&&u<=1631||1648==u||1750<=u&&u<=1756||1759<=u&&u<=1764||1767<=u&&u<=1768||1770<=u&&u<=1773||1809==u||1840<=u&&u<=1866||1958<=u&&u<=1968||2027<=u&&u<=2035||2070<=u&&u<=2073||2075<=u&&u<=2083||2085<=u&&u<=2087||2089<=u&&u<=2093||2137<=u&&u<=2139||2260<=u&&u<=2273||2275<=u&&u<=2306||2362==u||2364==u||2369<=u&&u<=2376||2381==u||2385<=u&&u<=2391||2402<=u&&u<=2403||2433==u||2492==u||2494==u||2497<=u&&u<=2500||2509==u||2519==u||2530<=u&&u<=2531||2561<=u&&u<=2562||2620==u||2625<=u&&u<=2626||2631<=u&&u<=2632||2635<=u&&u<=2637||2641==u||2672<=u&&u<=2673||2677==u||2689<=u&&u<=2690||2748==u||2753<=u&&u<=2757||2759<=u&&u<=2760||2765==u||2786<=u&&u<=2787||2810<=u&&u<=2815||2817==u||2876==u||2878==u||2879==u||2881<=u&&u<=2884||2893==u||2902==u||2903==u||2914<=u&&u<=2915||2946==u||3006==u||3008==u||3021==u||3031==u||3072==u||3134<=u&&u<=3136||3142<=u&&u<=3144||3146<=u&&u<=3149||3157<=u&&u<=3158||3170<=u&&u<=3171||3201==u||3260==u||3263==u||3266==u||3270==u||3276<=u&&u<=3277||3285<=u&&u<=3286||3298<=u&&u<=3299||3328<=u&&u<=3329||3387<=u&&u<=3388||3390==u||3393<=u&&u<=3396||3405==u||3415==u||3426<=u&&u<=3427||3530==u||3535==u||3538<=u&&u<=3540||3542==u||3551==u||3633==u||3636<=u&&u<=3642||3655<=u&&u<=3662||3761==u||3764<=u&&u<=3769||3771<=u&&u<=3772||3784<=u&&u<=3789||3864<=u&&u<=3865||3893==u||3895==u||3897==u||3953<=u&&u<=3966||3968<=u&&u<=3972||3974<=u&&u<=3975||3981<=u&&u<=3991||3993<=u&&u<=4028||4038==u||4141<=u&&u<=4144||4146<=u&&u<=4151||4153<=u&&u<=4154||4157<=u&&u<=4158||4184<=u&&u<=4185||4190<=u&&u<=4192||4209<=u&&u<=4212||4226==u||4229<=u&&u<=4230||4237==u||4253==u||4957<=u&&u<=4959||5906<=u&&u<=5908||5938<=u&&u<=5940||5970<=u&&u<=5971||6002<=u&&u<=6003||6068<=u&&u<=6069||6071<=u&&u<=6077||6086==u||6089<=u&&u<=6099||6109==u||6155<=u&&u<=6157||6277<=u&&u<=6278||6313==u||6432<=u&&u<=6434||6439<=u&&u<=6440||6450==u||6457<=u&&u<=6459||6679<=u&&u<=6680||6683==u||6742==u||6744<=u&&u<=6750||6752==u||6754==u||6757<=u&&u<=6764||6771<=u&&u<=6780||6783==u||6832<=u&&u<=6845||6846==u||6912<=u&&u<=6915||6964==u||6966<=u&&u<=6970||6972==u||6978==u||7019<=u&&u<=7027||7040<=u&&u<=7041||7074<=u&&u<=7077||7080<=u&&u<=7081||7083<=u&&u<=7085||7142==u||7144<=u&&u<=7145||7149==u||7151<=u&&u<=7153||7212<=u&&u<=7219||7222<=u&&u<=7223||7376<=u&&u<=7378||7380<=u&&u<=7392||7394<=u&&u<=7400||7405==u||7412==u||7416<=u&&u<=7417||7616<=u&&u<=7673||7675<=u&&u<=7679||8204==u||8400<=u&&u<=8412||8413<=u&&u<=8416||8417==u||8418<=u&&u<=8420||8421<=u&&u<=8432||11503<=u&&u<=11505||11647==u||11744<=u&&u<=11775||12330<=u&&u<=12333||12334<=u&&u<=12335||12441<=u&&u<=12442||42607==u||42608<=u&&u<=42610||42612<=u&&u<=42621||42654<=u&&u<=42655||42736<=u&&u<=42737||43010==u||43014==u||43019==u||43045<=u&&u<=43046||43204<=u&&u<=43205||43232<=u&&u<=43249||43302<=u&&u<=43309||43335<=u&&u<=43345||43392<=u&&u<=43394||43443==u||43446<=u&&u<=43449||43452==u||43493==u||43561<=u&&u<=43566||43569<=u&&u<=43570||43573<=u&&u<=43574||43587==u||43596==u||43644==u||43696==u||43698<=u&&u<=43700||43703<=u&&u<=43704||43710<=u&&u<=43711||43713==u||43756<=u&&u<=43757||43766==u||44005==u||44008==u||44013==u||64286==u||65024<=u&&u<=65039||65056<=u&&u<=65071||65438<=u&&u<=65439||66045==u||66272==u||66422<=u&&u<=66426||68097<=u&&u<=68099||68101<=u&&u<=68102||68108<=u&&u<=68111||68152<=u&&u<=68154||68159==u||68325<=u&&u<=68326||69633==u||69688<=u&&u<=69702||69759<=u&&u<=69761||69811<=u&&u<=69814||69817<=u&&u<=69818||69888<=u&&u<=69890||69927<=u&&u<=69931||69933<=u&&u<=69940||70003==u||70016<=u&&u<=70017||70070<=u&&u<=70078||70090<=u&&u<=70092||70191<=u&&u<=70193||70196==u||70198<=u&&u<=70199||70206==u||70367==u||70371<=u&&u<=70378||70400<=u&&u<=70401||70460==u||70462==u||70464==u||70487==u||70502<=u&&u<=70508||70512<=u&&u<=70516||70712<=u&&u<=70719||70722<=u&&u<=70724||70726==u||70832==u||70835<=u&&u<=70840||70842==u||70845==u||70847<=u&&u<=70848||70850<=u&&u<=70851||71087==u||71090<=u&&u<=71093||71100<=u&&u<=71101||71103<=u&&u<=71104||71132<=u&&u<=71133||71219<=u&&u<=71226||71229==u||71231<=u&&u<=71232||71339==u||71341==u||71344<=u&&u<=71349||71351==u||71453<=u&&u<=71455||71458<=u&&u<=71461||71463<=u&&u<=71467||72193<=u&&u<=72198||72201<=u&&u<=72202||72243<=u&&u<=72248||72251<=u&&u<=72254||72263==u||72273<=u&&u<=72278||72281<=u&&u<=72283||72330<=u&&u<=72342||72344<=u&&u<=72345||72752<=u&&u<=72758||72760<=u&&u<=72765||72767==u||72850<=u&&u<=72871||72874<=u&&u<=72880||72882<=u&&u<=72883||72885<=u&&u<=72886||73009<=u&&u<=73014||73018==u||73020<=u&&u<=73021||73023<=u&&u<=73029||73031==u||92912<=u&&u<=92916||92976<=u&&u<=92982||94095<=u&&u<=94098||113821<=u&&u<=113822||119141==u||119143<=u&&u<=119145||119150<=u&&u<=119154||119163<=u&&u<=119170||119173<=u&&u<=119179||119210<=u&&u<=119213||119362<=u&&u<=119364||121344<=u&&u<=121398||121403<=u&&u<=121452||121461==u||121476==u||121499<=u&&u<=121503||121505<=u&&u<=121519||122880<=u&&u<=122886||122888<=u&&u<=122904||122907<=u&&u<=122913||122915<=u&&u<=122916||122918<=u&&u<=122922||125136<=u&&u<=125142||125252<=u&&u<=125258||917536<=u&&u<=917631||917760<=u&&u<=917999?t:127462<=u&&u<=127487?e:2307==u||2363==u||2366<=u&&u<=2368||2377<=u&&u<=2380||2382<=u&&u<=2383||2434<=u&&u<=2435||2495<=u&&u<=2496||2503<=u&&u<=2504||2507<=u&&u<=2508||2563==u||2622<=u&&u<=2624||2691==u||2750<=u&&u<=2752||2761==u||2763<=u&&u<=2764||2818<=u&&u<=2819||2880==u||2887<=u&&u<=2888||2891<=u&&u<=2892||3007==u||3009<=u&&u<=3010||3014<=u&&u<=3016||3018<=u&&u<=3020||3073<=u&&u<=3075||3137<=u&&u<=3140||3202<=u&&u<=3203||3262==u||3264<=u&&u<=3265||3267<=u&&u<=3268||3271<=u&&u<=3272||3274<=u&&u<=3275||3330<=u&&u<=3331||3391<=u&&u<=3392||3398<=u&&u<=3400||3402<=u&&u<=3404||3458<=u&&u<=3459||3536<=u&&u<=3537||3544<=u&&u<=3550||3570<=u&&u<=3571||3635==u||3763==u||3902<=u&&u<=3903||3967==u||4145==u||4155<=u&&u<=4156||4182<=u&&u<=4183||4228==u||6070==u||6078<=u&&u<=6085||6087<=u&&u<=6088||6435<=u&&u<=6438||6441<=u&&u<=6443||6448<=u&&u<=6449||6451<=u&&u<=6456||6681<=u&&u<=6682||6741==u||6743==u||6765<=u&&u<=6770||6916==u||6965==u||6971==u||6973<=u&&u<=6977||6979<=u&&u<=6980||7042==u||7073==u||7078<=u&&u<=7079||7082==u||7143==u||7146<=u&&u<=7148||7150==u||7154<=u&&u<=7155||7204<=u&&u<=7211||7220<=u&&u<=7221||7393==u||7410<=u&&u<=7411||7415==u||43043<=u&&u<=43044||43047==u||43136<=u&&u<=43137||43188<=u&&u<=43203||43346<=u&&u<=43347||43395==u||43444<=u&&u<=43445||43450<=u&&u<=43451||43453<=u&&u<=43456||43567<=u&&u<=43568||43571<=u&&u<=43572||43597==u||43755==u||43758<=u&&u<=43759||43765==u||44003<=u&&u<=44004||44006<=u&&u<=44007||44009<=u&&u<=44010||44012==u||69632==u||69634==u||69762==u||69808<=u&&u<=69810||69815<=u&&u<=69816||69932==u||70018==u||70067<=u&&u<=70069||70079<=u&&u<=70080||70188<=u&&u<=70190||70194<=u&&u<=70195||70197==u||70368<=u&&u<=70370||70402<=u&&u<=70403||70463==u||70465<=u&&u<=70468||70471<=u&&u<=70472||70475<=u&&u<=70477||70498<=u&&u<=70499||70709<=u&&u<=70711||70720<=u&&u<=70721||70725==u||70833<=u&&u<=70834||70841==u||70843<=u&&u<=70844||70846==u||70849==u||71088<=u&&u<=71089||71096<=u&&u<=71099||71102==u||71216<=u&&u<=71218||71227<=u&&u<=71228||71230==u||71340==u||71342<=u&&u<=71343||71350==u||71456<=u&&u<=71457||71462==u||72199<=u&&u<=72200||72249==u||72279<=u&&u<=72280||72343==u||72751==u||72766==u||72873==u||72881==u||72884==u||94033<=u&&u<=94078||119142==u||119149==u?5:4352<=u&&u<=4447||43360<=u&&u<=43388?6:4448<=u&&u<=4519||55216<=u&&u<=55238?7:4520<=u&&u<=4607||55243<=u&&u<=55291?8:44032==u||44060==u||44088==u||44116==u||44144==u||44172==u||44200==u||44228==u||44256==u||44284==u||44312==u||44340==u||44368==u||44396==u||44424==u||44452==u||44480==u||44508==u||44536==u||44564==u||44592==u||44620==u||44648==u||44676==u||44704==u||44732==u||44760==u||44788==u||44816==u||44844==u||44872==u||44900==u||44928==u||44956==u||44984==u||45012==u||45040==u||45068==u||45096==u||45124==u||45152==u||45180==u||45208==u||45236==u||45264==u||45292==u||45320==u||45348==u||45376==u||45404==u||45432==u||45460==u||45488==u||45516==u||45544==u||45572==u||45600==u||45628==u||45656==u||45684==u||45712==u||45740==u||45768==u||45796==u||45824==u||45852==u||45880==u||45908==u||45936==u||45964==u||45992==u||46020==u||46048==u||46076==u||46104==u||46132==u||46160==u||46188==u||46216==u||46244==u||46272==u||46300==u||46328==u||46356==u||46384==u||46412==u||46440==u||46468==u||46496==u||46524==u||46552==u||46580==u||46608==u||46636==u||46664==u||46692==u||46720==u||46748==u||46776==u||46804==u||46832==u||46860==u||46888==u||46916==u||46944==u||46972==u||47e3==u||47028==u||47056==u||47084==u||47112==u||47140==u||47168==u||47196==u||47224==u||47252==u||47280==u||47308==u||47336==u||47364==u||47392==u||47420==u||47448==u||47476==u||47504==u||47532==u||47560==u||47588==u||47616==u||47644==u||47672==u||47700==u||47728==u||47756==u||47784==u||47812==u||47840==u||47868==u||47896==u||47924==u||47952==u||47980==u||48008==u||48036==u||48064==u||48092==u||48120==u||48148==u||48176==u||48204==u||48232==u||48260==u||48288==u||48316==u||48344==u||48372==u||48400==u||48428==u||48456==u||48484==u||48512==u||48540==u||48568==u||48596==u||48624==u||48652==u||48680==u||48708==u||48736==u||48764==u||48792==u||48820==u||48848==u||48876==u||48904==u||48932==u||48960==u||48988==u||49016==u||49044==u||49072==u||49100==u||49128==u||49156==u||49184==u||49212==u||49240==u||49268==u||49296==u||49324==u||49352==u||49380==u||49408==u||49436==u||49464==u||49492==u||49520==u||49548==u||49576==u||49604==u||49632==u||49660==u||49688==u||49716==u||49744==u||49772==u||49800==u||49828==u||49856==u||49884==u||49912==u||49940==u||49968==u||49996==u||50024==u||50052==u||50080==u||50108==u||50136==u||50164==u||50192==u||50220==u||50248==u||50276==u||50304==u||50332==u||50360==u||50388==u||50416==u||50444==u||50472==u||50500==u||50528==u||50556==u||50584==u||50612==u||50640==u||50668==u||50696==u||50724==u||50752==u||50780==u||50808==u||50836==u||50864==u||50892==u||50920==u||50948==u||50976==u||51004==u||51032==u||51060==u||51088==u||51116==u||51144==u||51172==u||51200==u||51228==u||51256==u||51284==u||51312==u||51340==u||51368==u||51396==u||51424==u||51452==u||51480==u||51508==u||51536==u||51564==u||51592==u||51620==u||51648==u||51676==u||51704==u||51732==u||51760==u||51788==u||51816==u||51844==u||51872==u||51900==u||51928==u||51956==u||51984==u||52012==u||52040==u||52068==u||52096==u||52124==u||52152==u||52180==u||52208==u||52236==u||52264==u||52292==u||52320==u||52348==u||52376==u||52404==u||52432==u||52460==u||52488==u||52516==u||52544==u||52572==u||52600==u||52628==u||52656==u||52684==u||52712==u||52740==u||52768==u||52796==u||52824==u||52852==u||52880==u||52908==u||52936==u||52964==u||52992==u||53020==u||53048==u||53076==u||53104==u||53132==u||53160==u||53188==u||53216==u||53244==u||53272==u||53300==u||53328==u||53356==u||53384==u||53412==u||53440==u||53468==u||53496==u||53524==u||53552==u||53580==u||53608==u||53636==u||53664==u||53692==u||53720==u||53748==u||53776==u||53804==u||53832==u||53860==u||53888==u||53916==u||53944==u||53972==u||54e3==u||54028==u||54056==u||54084==u||54112==u||54140==u||54168==u||54196==u||54224==u||54252==u||54280==u||54308==u||54336==u||54364==u||54392==u||54420==u||54448==u||54476==u||54504==u||54532==u||54560==u||54588==u||54616==u||54644==u||54672==u||54700==u||54728==u||54756==u||54784==u||54812==u||54840==u||54868==u||54896==u||54924==u||54952==u||54980==u||55008==u||55036==u||55064==u||55092==u||55120==u||55148==u||55176==u?9:44033<=u&&u<=44059||44061<=u&&u<=44087||44089<=u&&u<=44115||44117<=u&&u<=44143||44145<=u&&u<=44171||44173<=u&&u<=44199||44201<=u&&u<=44227||44229<=u&&u<=44255||44257<=u&&u<=44283||44285<=u&&u<=44311||44313<=u&&u<=44339||44341<=u&&u<=44367||44369<=u&&u<=44395||44397<=u&&u<=44423||44425<=u&&u<=44451||44453<=u&&u<=44479||44481<=u&&u<=44507||44509<=u&&u<=44535||44537<=u&&u<=44563||44565<=u&&u<=44591||44593<=u&&u<=44619||44621<=u&&u<=44647||44649<=u&&u<=44675||44677<=u&&u<=44703||44705<=u&&u<=44731||44733<=u&&u<=44759||44761<=u&&u<=44787||44789<=u&&u<=44815||44817<=u&&u<=44843||44845<=u&&u<=44871||44873<=u&&u<=44899||44901<=u&&u<=44927||44929<=u&&u<=44955||44957<=u&&u<=44983||44985<=u&&u<=45011||45013<=u&&u<=45039||45041<=u&&u<=45067||45069<=u&&u<=45095||45097<=u&&u<=45123||45125<=u&&u<=45151||45153<=u&&u<=45179||45181<=u&&u<=45207||45209<=u&&u<=45235||45237<=u&&u<=45263||45265<=u&&u<=45291||45293<=u&&u<=45319||45321<=u&&u<=45347||45349<=u&&u<=45375||45377<=u&&u<=45403||45405<=u&&u<=45431||45433<=u&&u<=45459||45461<=u&&u<=45487||45489<=u&&u<=45515||45517<=u&&u<=45543||45545<=u&&u<=45571||45573<=u&&u<=45599||45601<=u&&u<=45627||45629<=u&&u<=45655||45657<=u&&u<=45683||45685<=u&&u<=45711||45713<=u&&u<=45739||45741<=u&&u<=45767||45769<=u&&u<=45795||45797<=u&&u<=45823||45825<=u&&u<=45851||45853<=u&&u<=45879||45881<=u&&u<=45907||45909<=u&&u<=45935||45937<=u&&u<=45963||45965<=u&&u<=45991||45993<=u&&u<=46019||46021<=u&&u<=46047||46049<=u&&u<=46075||46077<=u&&u<=46103||46105<=u&&u<=46131||46133<=u&&u<=46159||46161<=u&&u<=46187||46189<=u&&u<=46215||46217<=u&&u<=46243||46245<=u&&u<=46271||46273<=u&&u<=46299||46301<=u&&u<=46327||46329<=u&&u<=46355||46357<=u&&u<=46383||46385<=u&&u<=46411||46413<=u&&u<=46439||46441<=u&&u<=46467||46469<=u&&u<=46495||46497<=u&&u<=46523||46525<=u&&u<=46551||46553<=u&&u<=46579||46581<=u&&u<=46607||46609<=u&&u<=46635||46637<=u&&u<=46663||46665<=u&&u<=46691||46693<=u&&u<=46719||46721<=u&&u<=46747||46749<=u&&u<=46775||46777<=u&&u<=46803||46805<=u&&u<=46831||46833<=u&&u<=46859||46861<=u&&u<=46887||46889<=u&&u<=46915||46917<=u&&u<=46943||46945<=u&&u<=46971||46973<=u&&u<=46999||47001<=u&&u<=47027||47029<=u&&u<=47055||47057<=u&&u<=47083||47085<=u&&u<=47111||47113<=u&&u<=47139||47141<=u&&u<=47167||47169<=u&&u<=47195||47197<=u&&u<=47223||47225<=u&&u<=47251||47253<=u&&u<=47279||47281<=u&&u<=47307||47309<=u&&u<=47335||47337<=u&&u<=47363||47365<=u&&u<=47391||47393<=u&&u<=47419||47421<=u&&u<=47447||47449<=u&&u<=47475||47477<=u&&u<=47503||47505<=u&&u<=47531||47533<=u&&u<=47559||47561<=u&&u<=47587||47589<=u&&u<=47615||47617<=u&&u<=47643||47645<=u&&u<=47671||47673<=u&&u<=47699||47701<=u&&u<=47727||47729<=u&&u<=47755||47757<=u&&u<=47783||47785<=u&&u<=47811||47813<=u&&u<=47839||47841<=u&&u<=47867||47869<=u&&u<=47895||47897<=u&&u<=47923||47925<=u&&u<=47951||47953<=u&&u<=47979||47981<=u&&u<=48007||48009<=u&&u<=48035||48037<=u&&u<=48063||48065<=u&&u<=48091||48093<=u&&u<=48119||48121<=u&&u<=48147||48149<=u&&u<=48175||48177<=u&&u<=48203||48205<=u&&u<=48231||48233<=u&&u<=48259||48261<=u&&u<=48287||48289<=u&&u<=48315||48317<=u&&u<=48343||48345<=u&&u<=48371||48373<=u&&u<=48399||48401<=u&&u<=48427||48429<=u&&u<=48455||48457<=u&&u<=48483||48485<=u&&u<=48511||48513<=u&&u<=48539||48541<=u&&u<=48567||48569<=u&&u<=48595||48597<=u&&u<=48623||48625<=u&&u<=48651||48653<=u&&u<=48679||48681<=u&&u<=48707||48709<=u&&u<=48735||48737<=u&&u<=48763||48765<=u&&u<=48791||48793<=u&&u<=48819||48821<=u&&u<=48847||48849<=u&&u<=48875||48877<=u&&u<=48903||48905<=u&&u<=48931||48933<=u&&u<=48959||48961<=u&&u<=48987||48989<=u&&u<=49015||49017<=u&&u<=49043||49045<=u&&u<=49071||49073<=u&&u<=49099||49101<=u&&u<=49127||49129<=u&&u<=49155||49157<=u&&u<=49183||49185<=u&&u<=49211||49213<=u&&u<=49239||49241<=u&&u<=49267||49269<=u&&u<=49295||49297<=u&&u<=49323||49325<=u&&u<=49351||49353<=u&&u<=49379||49381<=u&&u<=49407||49409<=u&&u<=49435||49437<=u&&u<=49463||49465<=u&&u<=49491||49493<=u&&u<=49519||49521<=u&&u<=49547||49549<=u&&u<=49575||49577<=u&&u<=49603||49605<=u&&u<=49631||49633<=u&&u<=49659||49661<=u&&u<=49687||49689<=u&&u<=49715||49717<=u&&u<=49743||49745<=u&&u<=49771||49773<=u&&u<=49799||49801<=u&&u<=49827||49829<=u&&u<=49855||49857<=u&&u<=49883||49885<=u&&u<=49911||49913<=u&&u<=49939||49941<=u&&u<=49967||49969<=u&&u<=49995||49997<=u&&u<=50023||50025<=u&&u<=50051||50053<=u&&u<=50079||50081<=u&&u<=50107||50109<=u&&u<=50135||50137<=u&&u<=50163||50165<=u&&u<=50191||50193<=u&&u<=50219||50221<=u&&u<=50247||50249<=u&&u<=50275||50277<=u&&u<=50303||50305<=u&&u<=50331||50333<=u&&u<=50359||50361<=u&&u<=50387||50389<=u&&u<=50415||50417<=u&&u<=50443||50445<=u&&u<=50471||50473<=u&&u<=50499||50501<=u&&u<=50527||50529<=u&&u<=50555||50557<=u&&u<=50583||50585<=u&&u<=50611||50613<=u&&u<=50639||50641<=u&&u<=50667||50669<=u&&u<=50695||50697<=u&&u<=50723||50725<=u&&u<=50751||50753<=u&&u<=50779||50781<=u&&u<=50807||50809<=u&&u<=50835||50837<=u&&u<=50863||50865<=u&&u<=50891||50893<=u&&u<=50919||50921<=u&&u<=50947||50949<=u&&u<=50975||50977<=u&&u<=51003||51005<=u&&u<=51031||51033<=u&&u<=51059||51061<=u&&u<=51087||51089<=u&&u<=51115||51117<=u&&u<=51143||51145<=u&&u<=51171||51173<=u&&u<=51199||51201<=u&&u<=51227||51229<=u&&u<=51255||51257<=u&&u<=51283||51285<=u&&u<=51311||51313<=u&&u<=51339||51341<=u&&u<=51367||51369<=u&&u<=51395||51397<=u&&u<=51423||51425<=u&&u<=51451||51453<=u&&u<=51479||51481<=u&&u<=51507||51509<=u&&u<=51535||51537<=u&&u<=51563||51565<=u&&u<=51591||51593<=u&&u<=51619||51621<=u&&u<=51647||51649<=u&&u<=51675||51677<=u&&u<=51703||51705<=u&&u<=51731||51733<=u&&u<=51759||51761<=u&&u<=51787||51789<=u&&u<=51815||51817<=u&&u<=51843||51845<=u&&u<=51871||51873<=u&&u<=51899||51901<=u&&u<=51927||51929<=u&&u<=51955||51957<=u&&u<=51983||51985<=u&&u<=52011||52013<=u&&u<=52039||52041<=u&&u<=52067||52069<=u&&u<=52095||52097<=u&&u<=52123||52125<=u&&u<=52151||52153<=u&&u<=52179||52181<=u&&u<=52207||52209<=u&&u<=52235||52237<=u&&u<=52263||52265<=u&&u<=52291||52293<=u&&u<=52319||52321<=u&&u<=52347||52349<=u&&u<=52375||52377<=u&&u<=52403||52405<=u&&u<=52431||52433<=u&&u<=52459||52461<=u&&u<=52487||52489<=u&&u<=52515||52517<=u&&u<=52543||52545<=u&&u<=52571||52573<=u&&u<=52599||52601<=u&&u<=52627||52629<=u&&u<=52655||52657<=u&&u<=52683||52685<=u&&u<=52711||52713<=u&&u<=52739||52741<=u&&u<=52767||52769<=u&&u<=52795||52797<=u&&u<=52823||52825<=u&&u<=52851||52853<=u&&u<=52879||52881<=u&&u<=52907||52909<=u&&u<=52935||52937<=u&&u<=52963||52965<=u&&u<=52991||52993<=u&&u<=53019||53021<=u&&u<=53047||53049<=u&&u<=53075||53077<=u&&u<=53103||53105<=u&&u<=53131||53133<=u&&u<=53159||53161<=u&&u<=53187||53189<=u&&u<=53215||53217<=u&&u<=53243||53245<=u&&u<=53271||53273<=u&&u<=53299||53301<=u&&u<=53327||53329<=u&&u<=53355||53357<=u&&u<=53383||53385<=u&&u<=53411||53413<=u&&u<=53439||53441<=u&&u<=53467||53469<=u&&u<=53495||53497<=u&&u<=53523||53525<=u&&u<=53551||53553<=u&&u<=53579||53581<=u&&u<=53607||53609<=u&&u<=53635||53637<=u&&u<=53663||53665<=u&&u<=53691||53693<=u&&u<=53719||53721<=u&&u<=53747||53749<=u&&u<=53775||53777<=u&&u<=53803||53805<=u&&u<=53831||53833<=u&&u<=53859||53861<=u&&u<=53887||53889<=u&&u<=53915||53917<=u&&u<=53943||53945<=u&&u<=53971||53973<=u&&u<=53999||54001<=u&&u<=54027||54029<=u&&u<=54055||54057<=u&&u<=54083||54085<=u&&u<=54111||54113<=u&&u<=54139||54141<=u&&u<=54167||54169<=u&&u<=54195||54197<=u&&u<=54223||54225<=u&&u<=54251||54253<=u&&u<=54279||54281<=u&&u<=54307||54309<=u&&u<=54335||54337<=u&&u<=54363||54365<=u&&u<=54391||54393<=u&&u<=54419||54421<=u&&u<=54447||54449<=u&&u<=54475||54477<=u&&u<=54503||54505<=u&&u<=54531||54533<=u&&u<=54559||54561<=u&&u<=54587||54589<=u&&u<=54615||54617<=u&&u<=54643||54645<=u&&u<=54671||54673<=u&&u<=54699||54701<=u&&u<=54727||54729<=u&&u<=54755||54757<=u&&u<=54783||54785<=u&&u<=54811||54813<=u&&u<=54839||54841<=u&&u<=54867||54869<=u&&u<=54895||54897<=u&&u<=54923||54925<=u&&u<=54951||54953<=u&&u<=54979||54981<=u&&u<=55007||55009<=u&&u<=55035||55037<=u&&u<=55063||55065<=u&&u<=55091||55093<=u&&u<=55119||55121<=u&&u<=55147||55149<=u&&u<=55175||55177<=u&&u<=55203?10:9757==u||9977==u||9994<=u&&u<=9997||127877==u||127938<=u&&u<=127940||127943==u||127946<=u&&u<=127948||128066<=u&&u<=128067||128070<=u&&u<=128080||128110==u||128112<=u&&u<=128120||128124==u||128129<=u&&u<=128131||128133<=u&&u<=128135||128170==u||128372<=u&&u<=128373||128378==u||128400==u||128405<=u&&u<=128406||128581<=u&&u<=128583||128587<=u&&u<=128591||128675==u||128692<=u&&u<=128694||128704==u||128716==u||129304<=u&&u<=129308||129310<=u&&u<=129311||129318==u||129328<=u&&u<=129337||129341<=u&&u<=129342||129489<=u&&u<=129501?n:127995<=u&&u<=127999?14:8205==u?15:9792==u||9794==u||9877<=u&&u<=9878||9992==u||10084==u||127752==u||127806==u||127859==u||127891==u||127908==u||127912==u||127979==u||127981==u||128139==u||128187<=u&&u<=128188||128295==u||128300==u||128488==u||128640==u||128658==u?o:128102<=u&&u<=128105?i:11}return this.nextBreak=function(t,e){if(void 0===e&&(e=0),e<0)return 0;if(e>=t.length-1)return t.length;for(var r,n,o=a(u(t,e)),i=[],f=e+1;f<t.length;f++)if(!(55296<=(r=t).charCodeAt(n=f-1)&&r.charCodeAt(n)<=56319&&56320<=r.charCodeAt(n+1)&&r.charCodeAt(n+1)<=57343)){var s=a(u(t,f));if(c(o,i,s))return f;i.push(s)}return t.length},this.splitGraphemes=function(t){for(var e,r=[],n=0;(e=this.nextBreak(t,n))<t.length;)r.push(t.slice(n,e)),n=e;return n<t.length&&r.push(t.slice(n)),r},this.iterateGraphemes=function(t){var e=0,r={next:function(){var r,n;return(n=this.nextBreak(t,e))<t.length?(r=t.slice(e,n),e=n,{value:r,done:!1}):e<t.length?(r=t.slice(e),e=t.length,{value:r,done:!1}):{value:void 0,done:!0}}.bind(this)};return"undefined"!=typeof Symbol&&Symbol.iterator&&(r[Symbol.iterator]=function(){return r}),r},this.countGraphemes=function(t){for(var e,r=0,n=0;(e=this.nextBreak(t,n))<t.length;)n=e,r++;return n<t.length&&r++,r},this})}));function v(t,e,r){function n(t){return!(!["string","number"].includes(typeof t)||"string"==typeof t&&!/^\d*$/.test(t)||"number"==typeof t&&(!Number.isInteger(t)||t<0))}function o(t,e){let n=0,o=0;for(let r=0,i=t.length;r<i;r++){if(o+=t[r].length,e>=n&&e<o)return r;n+=t[r].length}throw new Error(`string-convert-indexes: [THROW_ID_05] the "indexes" value, ${r}, is not covered by graphemes length!`)}function i(t,e){if(e>=t.length)throw new Error(`string-convert-indexes: [THROW_ID_06] the index to convert, ${e}, is not covered by graphemes length!`);return t.slice(0,e).join("").length}if("string"!=typeof e||!e)throw new TypeError(`string-convert-indexes: [THROW_ID_01] the first input argument, input string, must be a non-zero-length string! Currently it's: ${typeof e}, equal to:\n${e}`);if(0===r)return 0;if("0"===r)return"0";const u=(new y).splitGraphemes(e);if(["string","number"].includes(typeof r)){if(n(r))return"u"===t?"string"==typeof r?String(i(u,+r)):i(u,+r):"string"==typeof r?String(o(u,+r)):o(u,+r);throw new Error(`string-convert-indexes: [THROW_ID_02] the second input argument, "indexes" is not suitable to describe string index - it was given as ${JSON.stringify(r,null,4)} (${typeof r})`)}if(r&&"object"==typeof r)return d(r,"u"===t?(t,e,r)=>{const o=void 0!==e?e:t;if(["string","number"].includes(typeof o)){if(n(o))return"string"==typeof o?String(i(u,+o)):i(u,+o);throw new Error(`string-convert-indexes: [THROW_ID_03] bad value was encountered, ${JSON.stringify(o,null,4)}, its path is ${r.path}`)}return o}:(t,e,r)=>{const i=void 0!==e?e:t;if(["string","number"].includes(typeof i)){if(n(i))return"string"==typeof i?String(o(u,+i)):o(u,+i);throw new Error(`string-convert-indexes: [THROW_ID_04] bad value was encountered, ${JSON.stringify(i,null,4)}, its path is ${r.path}`)}return i});throw new Error(`string-convert-indexes: [THROW_ID_07] the first input argument, a source string should be a string but it was given as ${e}, type ${typeof e}`)}t.nativeToUnicode=function(t,e){return v("n",t,e)},t.unicodeToNative=function(t,e){return v("u",t,e)},t.version="4.0.14",Object.defineProperty(t,"__esModule",{value:!0})}));
