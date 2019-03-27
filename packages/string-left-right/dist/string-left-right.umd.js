/**
 * string-left-right
 * Look what's to the left or the right of a given index within a string
 * Version: 2.1.6
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-left-right
 */

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t=t||self).stringLeftRight={})}(this,function(t){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o="[object Object]";var r,c,l=Function.prototype,i=Object.prototype,a=l.toString,u=i.hasOwnProperty,s=a.call(Object),f=i.toString,g=(r=Object.getPrototypeOf,c=Object,function(t){return r(c(t))});var h=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||f.call(t)!=o||function(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}(t))return!1;var n=g(t);if(null===n)return!0;var e=u.call(n,"constructor")&&n.constructor;return"function"==typeof e&&e instanceof e&&a.call(e)==s},p="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var y,m=(function(t,n){var e=200,o="__lodash_hash_undefined__",r=9007199254740991,c="[object Arguments]",l="[object Boolean]",i="[object Date]",a="[object Function]",u="[object GeneratorFunction]",s="[object Map]",f="[object Number]",g="[object Object]",h="[object RegExp]",y="[object Set]",m="[object String]",d="[object Symbol]",v="[object ArrayBuffer]",b="[object DataView]",_="[object Float32Array]",j="[object Float64Array]",O="[object Int8Array]",w="[object Int16Array]",S="[object Int32Array]",N="[object Uint8Array]",R="[object Uint8ClampedArray]",A="[object Uint16Array]",E="[object Uint32Array]",T=/\w*$/,I=/^\[object .+?Constructor\]$/,U=/^(?:0|[1-9]\d*)$/,J={};J[c]=J["[object Array]"]=J[v]=J[b]=J[l]=J[i]=J[_]=J[j]=J[O]=J[w]=J[S]=J[s]=J[f]=J[g]=J[h]=J[y]=J[m]=J[d]=J[N]=J[R]=J[A]=J[E]=!0,J["[object Error]"]=J[a]=J["[object WeakMap]"]=!1;var x="object"==typeof p&&p&&p.Object===Object&&p,L="object"==typeof self&&self&&self.Object===Object&&self,F=x||L||Function("return this")(),q=n&&!n.nodeType&&n,P=q&&t&&!t.nodeType&&t,C=P&&P.exports===q;function k(t,n){return t.set(n[0],n[1]),t}function M(t,n){return t.add(n),t}function $(t,n,e,o){var r=-1,c=t?t.length:0;for(o&&c&&(e=t[++r]);++r<c;)e=n(e,t[r],r,t);return e}function W(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}function D(t){var n=-1,e=Array(t.size);return t.forEach(function(t,o){e[++n]=[o,t]}),e}function B(t,n){return function(e){return t(n(e))}}function H(t){var n=-1,e=Array(t.size);return t.forEach(function(t){e[++n]=t}),e}var z,V=Array.prototype,G=Function.prototype,K=Object.prototype,Q=F["__core-js_shared__"],X=(z=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"",Y=G.toString,Z=K.hasOwnProperty,tt=K.toString,nt=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=C?F.Buffer:void 0,ot=F.Symbol,rt=F.Uint8Array,ct=B(Object.getPrototypeOf,Object),lt=Object.create,it=K.propertyIsEnumerable,at=V.splice,ut=Object.getOwnPropertySymbols,st=et?et.isBuffer:void 0,ft=B(Object.keys,Object),gt=Pt(F,"DataView"),ht=Pt(F,"Map"),pt=Pt(F,"Promise"),yt=Pt(F,"Set"),mt=Pt(F,"WeakMap"),dt=Pt(Object,"create"),vt=Wt(gt),bt=Wt(ht),_t=Wt(pt),jt=Wt(yt),Ot=Wt(mt),wt=ot?ot.prototype:void 0,St=wt?wt.valueOf:void 0;function Nt(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var o=t[n];this.set(o[0],o[1])}}function Rt(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var o=t[n];this.set(o[0],o[1])}}function At(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var o=t[n];this.set(o[0],o[1])}}function Et(t){this.__data__=new Rt(t)}function Tt(t,n){var e=Bt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ht(t)}(t)&&Z.call(t,"callee")&&(!it.call(t,"callee")||tt.call(t)==c)}(t)?function(t,n){for(var e=-1,o=Array(t);++e<t;)o[e]=n(e);return o}(t.length,String):[],o=e.length,r=!!o;for(var l in t)!n&&!Z.call(t,l)||r&&("length"==l||Mt(l,o))||e.push(l);return e}function It(t,n,e){var o=t[n];Z.call(t,n)&&Dt(o,e)&&(void 0!==e||n in t)||(t[n]=e)}function Ut(t,n){for(var e=t.length;e--;)if(Dt(t[e][0],n))return e;return-1}function Jt(t,n,e,o,r,p,I){var U;if(o&&(U=p?o(t,r,p,I):o(t)),void 0!==U)return U;if(!Gt(t))return t;var x=Bt(t);if(x){if(U=function(t){var n=t.length,e=t.constructor(n);n&&"string"==typeof t[0]&&Z.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!n)return function(t,n){var e=-1,o=t.length;n||(n=Array(o));for(;++e<o;)n[e]=t[e];return n}(t,U)}else{var L=kt(t),F=L==a||L==u;if(zt(t))return function(t,n){if(n)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,n);if(L==g||L==c||F&&!p){if(W(t))return p?t:{};if(U=function(t){return"function"!=typeof t.constructor||$t(t)?{}:(n=ct(t),Gt(n)?lt(n):{});var n}(F?{}:t),!n)return function(t,n){return Ft(t,Ct(t),n)}(t,function(t,n){return t&&Ft(n,Kt(n),t)}(U,t))}else{if(!J[L])return p?t:{};U=function(t,n,e,o){var r=t.constructor;switch(n){case v:return Lt(t);case l:case i:return new r(+t);case b:return function(t,n){var e=n?Lt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,o);case _:case j:case O:case w:case S:case N:case R:case A:case E:return function(t,n){var e=n?Lt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,o);case s:return function(t,n,e){return $(n?e(D(t),!0):D(t),k,new t.constructor)}(t,o,e);case f:case m:return new r(t);case h:return(u=new(a=t).constructor(a.source,T.exec(a))).lastIndex=a.lastIndex,u;case y:return function(t,n,e){return $(n?e(H(t),!0):H(t),M,new t.constructor)}(t,o,e);case d:return c=t,St?Object(St.call(c)):{}}var c;var a,u}(t,L,Jt,n)}}I||(I=new Et);var q=I.get(t);if(q)return q;if(I.set(t,U),!x)var P=e?function(t){return function(t,n,e){var o=n(t);return Bt(t)?o:function(t,n){for(var e=-1,o=n.length,r=t.length;++e<o;)t[r+e]=n[e];return t}(o,e(t))}(t,Kt,Ct)}(t):Kt(t);return function(t,n){for(var e=-1,o=t?t.length:0;++e<o&&!1!==n(t[e],e,t););}(P||t,function(r,c){P&&(r=t[c=r]),It(U,c,Jt(r,n,e,o,c,t,I))}),U}function xt(t){return!(!Gt(t)||(n=t,X&&X in n))&&(Vt(t)||W(t)?nt:I).test(Wt(t));var n}function Lt(t){var n=new t.constructor(t.byteLength);return new rt(n).set(new rt(t)),n}function Ft(t,n,e,o){e||(e={});for(var r=-1,c=n.length;++r<c;){var l=n[r],i=o?o(e[l],t[l],l,e,t):void 0;It(e,l,void 0===i?t[l]:i)}return e}function qt(t,n){var e,o,r=t.__data__;return("string"==(o=typeof(e=n))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==e:null===e)?r["string"==typeof n?"string":"hash"]:r.map}function Pt(t,n){var e=function(t,n){return null==t?void 0:t[n]}(t,n);return xt(e)?e:void 0}Nt.prototype.clear=function(){this.__data__=dt?dt(null):{}},Nt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Nt.prototype.get=function(t){var n=this.__data__;if(dt){var e=n[t];return e===o?void 0:e}return Z.call(n,t)?n[t]:void 0},Nt.prototype.has=function(t){var n=this.__data__;return dt?void 0!==n[t]:Z.call(n,t)},Nt.prototype.set=function(t,n){return this.__data__[t]=dt&&void 0===n?o:n,this},Rt.prototype.clear=function(){this.__data__=[]},Rt.prototype.delete=function(t){var n=this.__data__,e=Ut(n,t);return!(e<0||(e==n.length-1?n.pop():at.call(n,e,1),0))},Rt.prototype.get=function(t){var n=this.__data__,e=Ut(n,t);return e<0?void 0:n[e][1]},Rt.prototype.has=function(t){return Ut(this.__data__,t)>-1},Rt.prototype.set=function(t,n){var e=this.__data__,o=Ut(e,t);return o<0?e.push([t,n]):e[o][1]=n,this},At.prototype.clear=function(){this.__data__={hash:new Nt,map:new(ht||Rt),string:new Nt}},At.prototype.delete=function(t){return qt(this,t).delete(t)},At.prototype.get=function(t){return qt(this,t).get(t)},At.prototype.has=function(t){return qt(this,t).has(t)},At.prototype.set=function(t,n){return qt(this,t).set(t,n),this},Et.prototype.clear=function(){this.__data__=new Rt},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,n){var o=this.__data__;if(o instanceof Rt){var r=o.__data__;if(!ht||r.length<e-1)return r.push([t,n]),this;o=this.__data__=new At(r)}return o.set(t,n),this};var Ct=ut?B(ut,Object):function(){return[]},kt=function(t){return tt.call(t)};function Mt(t,n){return!!(n=null==n?r:n)&&("number"==typeof t||U.test(t))&&t>-1&&t%1==0&&t<n}function $t(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||K)}function Wt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Dt(t,n){return t===n||t!=t&&n!=n}(gt&&kt(new gt(new ArrayBuffer(1)))!=b||ht&&kt(new ht)!=s||pt&&"[object Promise]"!=kt(pt.resolve())||yt&&kt(new yt)!=y||mt&&"[object WeakMap]"!=kt(new mt))&&(kt=function(t){var n=tt.call(t),e=n==g?t.constructor:void 0,o=e?Wt(e):void 0;if(o)switch(o){case vt:return b;case bt:return s;case _t:return"[object Promise]";case jt:return y;case Ot:return"[object WeakMap]"}return n});var Bt=Array.isArray;function Ht(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}(t.length)&&!Vt(t)}var zt=st||function(){return!1};function Vt(t){var n=Gt(t)?tt.call(t):"";return n==a||n==u}function Gt(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function Kt(t){return Ht(t)?Tt(t):function(t){if(!$t(t))return ft(t);var n=[];for(var e in Object(t))Z.call(t,e)&&"constructor"!=e&&n.push(e);return n}(t)}t.exports=function(t){return Jt(t,!0,!0)}}(y={exports:{}},y.exports),y.exports);function d(t){return"number"==typeof t}function v(t){return"string"==typeof t}function b(t,n){if("string"!=typeof t||!t.length)return null;if(n&&"number"==typeof n||(n=0),!t[n+1])return null;if(t[n+1]&&t[n+1].trim().length)return n+1;if(t[n+2]&&t[n+2].trim().length)return n+2;for(var e=n+1,o=t.length;e<o;e++)if(t[e].trim().length)return e;return null}function _(t,n){if("string"!=typeof t||!t.length)return null;if(n&&"number"==typeof n||(n=0),n<1)return null;if(t[n-1]&&t[n-1].trim().length)return n-1;if(t[n-2]&&t[n-2].trim().length)return n-2;for(var e=n;e--;)if(t[e]&&t[e].trim().length)return e;return null}function j(t,n,e,o,r){if(console.log("150 seq() called:"),console.log("151 args: ".concat(JSON.stringify(Array.prototype.slice.call(arguments),null,4))),"string"!=typeof n||!n.length)return null;if(e&&"number"==typeof e||(e=0),"right"===t&&!n[e+1]||"left"===t&&!n[e-1])return console.log("163 RETURN null"),null;var c=e;console.log("171 Set lastFinding = ".concat(c,". Starting the loop."));for(var l,i,a,u=[],s=0,f=r.length;s<f;s++)if(v(r[s])&&r[s].length){console.log("190 ".concat("[".concat(36,"m","============= args[".concat(s,"]=").concat(r[s]),"[",39,"m")));var g=(a=r[s]).endsWith("?")?{value:a.slice(0,a.length-1),optional:!0}:{value:a,optional:!1},h=g.value,p=g.optional;console.log("196 ".concat("[".concat(33,"m","value","[",39,"m")," = ",JSON.stringify(h,null,4))),console.log("203 ".concat("[".concat(33,"m","optional","[",39,"m")," = ",JSON.stringify(p,null,4)));var y="right"===t?b(n,c):_(n,c);if(!(o.i&&n[y].toLowerCase()===h.toLowerCase()||!o.i&&n[y]===h)){if(p){console.log("251 ".concat("[".concat(32,"m","CONTINUE","[",39,"m")," because it was optional"));continue}return console.log("255 RETURN null"),null}console.log("217 SET whattsOnTheSide = ".concat(y," (").concat(n[y],")")),"right"===t&&y>c+1?(console.log("224 push gap [".concat(c+1,", ").concat(y,"]")),u.push([c+1,y])):"left"===t&&y<c-1&&(console.log("227 unshift gap [".concat(y+1,", ").concat(c,"]")),u.unshift([y+1,c])),console.log("230 ".concat("[".concat(32,"m",h," MATCHED![",39,"m"))),c=y,"right"===t?(void 0===l&&(l=y),i=y):(void 0===i&&(i=y),l=y),console.log("248 SET lastFinding = ".concat(c))}else console.log("181 continue because ".concat(JSON.stringify(r[s],null,4)," is not a non-empty string"));return console.log("259 FINAL gaps = ".concat(JSON.stringify(u,null,4))),void 0===l?null:{gaps:u,leftmostChar:l,rightmostChar:i}}function O(t,n){for(var e=arguments.length,o=new Array(e>2?e-2:0),r=2;r<e;r++)o[r-2]=arguments[r];if(!o.length)return console.log("297 leftSeq() calling left()"),_(t,n);var c,l={i:!1};return c=h(o[0])?Object.assign({},l,o.shift()):l,console.log("310 leftSeq() ".concat("[".concat(33,"m","opts","[",39,"m")," = ",JSON.stringify(c,null,4))),console.log("317 leftSeq() calling seq()"),j("left",t,n,c,Array.from(o).reverse())}function w(t,n){for(var e=arguments.length,o=new Array(e>2?e-2:0),r=2;r<e;r++)o[r-2]=arguments[r];if(!o.length)return console.log("324 rightSeq() calling right()"),b(t,n);var c,l={i:!1};return c=h(o[0])?Object.assign({},l,o.shift()):l,console.log("337 rightSeq() ".concat("[".concat(33,"m","opts","[",39,"m")," = ",JSON.stringify(c,null,4))),console.log("343 rightSeq() calling seq()"),j("right",t,n,c,o)}function S(t,n,o,r,c){if("string"!=typeof n||!n.length)return null;if(o&&"number"==typeof o||(o=0),"right"===t&&!n[o+1]||"left"===t&&(d(o)&&o<1||"0"===o))return console.log("391 there's no space to go further in this direction"),null;var l,i;console.log("400 ".concat("[".concat(33,"m","opts","[",39,"m")," = ",JSON.stringify(r,null,4),"; ","[".concat(33,"m","args","[",39,"m")," = ").concat(JSON.stringify(c,null,4)));do{console.log(),console.log("416 ".concat("[".concat(90,"m","███████████████████████████████████████ v","[",39,"m"),"\n")),l="right"===t?w.apply(void 0,[n,d(i)?i:o].concat(e(c))):O.apply(void 0,[n,d(i)?i:o].concat(e(c))),console.log(),console.log("433 ".concat("[".concat(90,"m","███████████████████████████████████████ ^","[",39,"m"),"\n")),console.log("436 ".concat("[".concat(36,"m","lastRes = ".concat(JSON.stringify(l,null,4)),"[",39,"m"))),l&&(i="right"===t?l.rightmostChar:l.leftmostChar,console.log("446 ".concat("[".concat(36,"m","another sequence; confirmed! Now set ","[",39,"m")," ","[".concat(33,"m","lastIdx","[",39,"m")," = ",JSON.stringify(i,null,4),";")))}while(l);if(null!=i&&"right"===t&&i++,console.log(),console.log("459 ".concat("[".concat(90,"m","███████████████████████████████████████","[",39,"m")," fin\n")),console.log("461 ".concat("[".concat(33,"m","lastIdx","[",39,"m")," = ",i)),!i)return null;if("right"===t){if(n[i]&&n[i].trim().length)return console.log("483 RETURN ".concat(i)),i;var a=b(n,i);if(console.log("490 SET ".concat("[".concat(33,"m","whatsOnTheRight","[",39,"m")," = ",a)),0===r.mode){if(a===i+1)return console.log("497 ".concat("[".concat(32,"m","RETURN","[",39,"m")," ",i)),i;if(!(n.slice(i,a||n.length).trim().length||n.slice(i,a||n.length).includes("\n")||n.slice(i,a||n.length).includes("\r")))return console.log("516 ".concat("[".concat(32,"m","RETURN","[",39,"m")," ",a?a-1:n.length)),a?a-1:n.length;console.log("505 loop");for(var u=i,s=n.length;u<s;u++)if("\n\r".includes(n[u]))return console.log("510 RETURN ".concat(u)),u}else{if(1===r.mode)return console.log("524 RETURN ".concat(i)),i;if(2===r.mode){var f=n.slice(i);if(console.log("530 ".concat("[".concat(33,"m","remainderString","[",39,"m")," = ",JSON.stringify(f,null,4))),f.trim().length||f.includes("\n")||f.includes("\r"))for(var g=i,h=n.length;g<h;g++)if(n[g].trim().length||"\n\r".includes(n[g]))return console.log("544 RETURN ".concat(g)),g;return console.log("550 RETURN ".concat(n.length)),n.length}}return console.log("556 RETURN ".concat(a||n.length)),a||n.length}if(n[i]&&n[i-1].trim().length)return console.log("578 RETURN ".concat(i)),i;var p=_(n,i);if(console.log("586 SET ".concat("[".concat(33,"m","whatsOnTheLeft","[",39,"m")," = ",p)),0===r.mode){if(p===i-2)return console.log("592 ".concat("[".concat(32,"m","RETURN","[",39,"m")," ",i)),i;if(n.slice(0,i).trim().length||n.slice(0,i).includes("\n")||n.slice(0,i).includes("\r")){console.log("600 ".concat("[".concat(36,"m","loop backwards from ".concat(i),"[",39,"m")));for(var y=i;y--;)if(console.log("606 ".concat("[".concat(36,"m","str[".concat(y,"] = ").concat(JSON.stringify(n[y],null,0)),"[",39,"m"))),"\n\r".includes(n[y])||n[y].trim().length)return console.log("613 RETURN ".concat(y+1+(n[y].trim().length?1:0))),y+1+(n[y].trim().length?1:0)}return console.log("619 ".concat("[".concat(32,"m","RETURN","[",39,"m")," 0")),0}if(1===r.mode)return console.log("623 RETURN ".concat(i)),i;if(2===r.mode){var m=n.slice(0,i);if(m.trim().length||m.includes("\n")||m.includes("\r"))for(var v=i;v--;)if(n[v].trim().length||"\n\r".includes(n[v]))return console.log("636 RETURN ".concat(v+1)),v+1;return console.log("642 RETURN 0"),0}return console.log("648 RETURN ".concat(null!==p?p+1:0)),null!==p?p+1:0}t.chompLeft=function(t,e){for(var o=arguments.length,r=new Array(o>2?o-2:0),c=2;c<o;c++)r[c-2]=arguments[c];if(console.log("688 chompLeft(): received ".concat("[".concat(33,"m","args","[",39,"m")," = ",JSON.stringify(r,null,4))),!r.length||1===r.length&&h(r[0]))return console.log("696 return null because there's nothing to match"),null;console.log("699 chompLeft()");var l={mode:0};if(h(r[0])){var i=Object.assign({},l,m(r[0]));if(i.mode){if(v(i.mode)&&"0123".includes(i.mode))i.mode=Number.parseInt(i.mode,10);else if(!d(i.mode))throw new Error("string-left-right/chompLeft(): [THROW_ID_01] the opts.mode is wrong! It should be 0, 1, 2 or 3. It was given as ".concat(i.mode," (type ").concat(n(i.mode),")"))}else i.mode=0;return console.log("728 FINAL opts = ".concat(JSON.stringify(i,null,4))),S("left",t,e,i,m(r).slice(1))}return v(r[0])?(console.log("736 FINAL opts = ".concat(JSON.stringify(l,null,4))),S("left",t,e,l,m(r))):(console.log("731 FINAL opts = ".concat(JSON.stringify(l,null,4))),S("left",t,e,l,m(r).slice(1)))},t.chompRight=function(t,e){for(var o=arguments.length,r=new Array(o>2?o-2:0),c=2;c<o;c++)r[c-2]=arguments[c];if(console.log("768 chompRight(): received ".concat("[".concat(33,"m","args","[",39,"m")," = ",JSON.stringify(r,null,4))),!r.length||1===r.length&&h(r[0]))return console.log("776 return null because there's nothing to match"),null;console.log("779 chompRight()");var l={mode:0};if(h(r[0])){var i=Object.assign({},l,m(r[0]));if(i.mode){if(v(i.mode)&&"0123".includes(i.mode))i.mode=Number.parseInt(i.mode,10);else if(!d(i.mode))throw new Error("string-left-right/chompRight(): [THROW_ID_02] the opts.mode is wrong! It should be 0, 1, 2 or 3. It was given as ".concat(i.mode," (type ").concat(n(i.mode),")"))}else i.mode=0;return console.log("808 FINAL opts = ".concat(JSON.stringify(i,null,4))),S("right",t,e,i,m(r).slice(1))}return v(r[0])?(console.log("816 FINAL opts = ".concat(JSON.stringify(l,null,4))),S("right",t,e,l,m(r))):(console.log("811 FINAL opts = ".concat(JSON.stringify(l,null,4))),S("right",t,e,l,m(r).slice(1)))},t.left=_,t.leftSeq=O,t.right=b,t.rightSeq=w,Object.defineProperty(t,"__esModule",{value:!0})});
