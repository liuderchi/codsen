/**
 * @name is-html-attribute-closing
 * @fileoverview Is a character on a given index a closing of an HTML attribute?
 * @version 2.2.5
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/is-html-attribute-closing/}
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).isHtmlAttributeClosing={})}(this,(function(t){"use strict";
/**
 * @name html-all-known-attributes
 * @fileoverview All HTML attributes known to the Humanity
 * @version 4.0.14
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/html-all-known-attributes/}
 */const e=new Set(["abbr","accept","accept-charset","accesskey","action","align","alink","allow","alt","archive","async","autocapitalize","autocomplete","autofocus","autoplay","axis","background","background-attachment","background-color","background-image","background-position","background-position-x","background-position-y","background-repeat","bgcolor","border","border-bottom","border-bottom-color","border-bottom-style","border-bottom-width","border-collapse","border-color","border-left","border-left-color","border-left-style","border-left-width","border-right","border-right-color","border-right-style","border-right-width","border-style","border-top","border-top-color","border-top-style","border-top-width","border-width","buffered","capture","cellpadding","cellspacing","challenge","char","charoff","charset","checked","cite","class","classid","clear","clip","code","codebase","codetype","color","cols","colspan","column-span","compact","content","contenteditable","contextmenu","controls","coords","crossorigin","csp","cursor","data","data-*","datetime","declare","decoding","default","defer","dir","direction","dirname","disabled","display","download","draggable","dropzone","enctype","enterkeyhint","face","filter","float","font","font-color","font-emphasize","font-emphasize-position","font-emphasize-style","font-family","font-size","font-style","font-variant","font-weight","for","form","formaction","formenctype","formmethod","formnovalidate","formtarget","frame","frameborder","frontuid","headers","height","hidden","high","horiz-align","href","hreflang","hspace","http-equiv","icon","id","importance","inputmode","integrity","intrinsicsize","ismap","itemprop","keytype","kind","label","lang","language","layout-flow","layout-grid","layout-grid-char","layout-grid-line","layout-grid-mode","layout-grid-type","left","letter-spacing","line-break","line-height","link","list","list-image-1","list-image-2","list-image-3","list-style","list-style-image","list-style-position","list-style-type","loading","longdesc","loop","low","manifest","margin","margin-bottom","margin-left","margin-right","margin-top","marginheight","marginwidth","max","maxlength","media","method","min","minlength","mso-ansi-font-size","mso-ansi-font-style","mso-ansi-font-weight","mso-ansi-language","mso-ascii-font-family","mso-background","mso-background-source","mso-baseline-position","mso-bidi-flag","mso-bidi-font-family","mso-bidi-font-size","mso-bidi-font-style","mso-bidi-font-weight","mso-bidi-language","mso-bookmark","mso-border-alt","mso-border-between","mso-border-between-color","mso-border-between-style","mso-border-between-width","mso-border-bottom-alt","mso-border-bottom-color-alt","mso-border-bottom-source","mso-border-bottom-style-alt","mso-border-bottom-width-alt","mso-border-color-alt","mso-border-effect","mso-border-left-alt","mso-border-left-color-alt","mso-border-left-source","mso-border-left-style-alt","mso-border-left-width-alt","mso-border-right-alt","mso-border-right-color-alt","mso-border-right-source","mso-border-right-style-alt","mso-border-right-width-alt","mso-border-shadow","mso-border-source","mso-border-style-alt","mso-border-top-alt","mso-border-top-color-alt","mso-border-top-source","mso-border-top-style-alt","mso-border-top-width-alt","mso-border-width-alt","mso-break-type","mso-build","mso-build-after-action","mso-build-after-color","mso-build-auto-secs","mso-build-avi","mso-build-dual-id","mso-build-order","mso-build-sound-name","mso-bullet-image","mso-cell-special","mso-cellspacing","mso-char-indent","mso-char-indent-count","mso-char-indent-size","mso-char-type","mso-char-wrap","mso-color-alt","mso-color-index","mso-color-source","mso-column-break-before","mso-column-separator","mso-columns","mso-comment-author","mso-comment-continuation","mso-comment-id","mso-comment-reference","mso-data-placement","mso-default-height","mso-default-width","mso-diagonal-down","mso-diagonal-down-color","mso-diagonal-down-source","mso-diagonal-down-style","mso-diagonal-down-width","mso-diagonal-up","mso-diagonal-up-color","mso-diagonal-up-source","mso-diagonal-up-style","mso-diagonal-up-width","mso-displayed-decimal-separator","mso-displayed-thousand-separator","mso-element","mso-element-anchor-horizontal","mso-element-anchor-lock","mso-element-anchor-vertical","mso-element-frame-height","mso-element-frame-hspace","mso-element-frame-vspace","mso-element-frame-width","mso-element-left","mso-element-linespan","mso-element-top","mso-element-wrap","mso-endnote-continuation-notice","mso-endnote-continuation-notice-id","mso-endnote-continuation-notice-src","mso-endnote-continuation-separator","mso-endnote-continuation-separator-id","mso-endnote-continuation-separator-src","mso-endnote-display","mso-endnote-id","mso-endnote-numbering","mso-endnote-numbering-restart","mso-endnote-numbering-start","mso-endnote-numbering-style","mso-endnote-position","mso-endnote-separator","mso-endnote-separator-id","mso-endnote-separator-src","mso-even-footer","mso-even-footer-id","mso-even-footer-src","mso-even-header","mso-even-header-id","mso-even-header-src","mso-facing-pages","mso-fareast-font-family","mso-fareast-hint","mso-fareast-language","mso-field-change","mso-field-change-author","mso-field-change-time","mso-field-change-value","mso-field-code","mso-field-lock","mso-fills-color","mso-first-footer","mso-first-footer-id","mso-first-footer-src","mso-first-header","mso-first-header-id","mso-first-header-src","mso-font-alt","mso-font-charset","mso-font-format","mso-font-info","mso-font-info-charset","mso-font-info-type","mso-font-kerning","mso-font-pitch","mso-font-signature","mso-font-signature-csb-one","mso-font-signature-csb-two","mso-font-signature-usb-four","mso-font-signature-usb-one","mso-font-signature-usb-three","mso-font-signature-usb-two","mso-font-src","mso-font-width","mso-footer","mso-footer-data","mso-footer-id","mso-footer-margin","mso-footer-src","mso-footnote-continuation-notice","mso-footnote-continuation-notice-id","mso-footnote-continuation-notice-src","mso-footnote-continuation-separator","mso-footnote-continuation-separator-id","mso-footnote-continuation-separator-src","mso-footnote-id","mso-footnote-numbering","mso-footnote-numbering-restart","mso-footnote-numbering-start","mso-footnote-numbering-style","mso-footnote-position","mso-footnote-separator","mso-footnote-separator-id","mso-footnote-separator-src","mso-foreground","mso-forms-protection","mso-generic-font-family","mso-grid-bottom","mso-grid-bottom-count","mso-grid-left","mso-grid-left-count","mso-grid-right","mso-grid-right-count","mso-grid-top","mso-grid-top-count","mso-gutter-direction","mso-gutter-margin","mso-gutter-position","mso-hansi-font-family","mso-header","mso-header-data","mso-header-id","mso-header-margin","mso-header-src","mso-height-alt","mso-height-rule","mso-height-source","mso-hide","mso-highlight","mso-horizontal-page-align","mso-hyphenate","mso-ignore","mso-kinsoku-overflow","mso-layout-grid-align","mso-layout-grid-char-alt","mso-layout-grid-origin","mso-level-inherit","mso-level-legacy","mso-level-legacy-indent","mso-level-legacy-space","mso-level-legal-format","mso-level-number-format","mso-level-number-position","mso-level-numbering","mso-level-reset-level","mso-level-start-at","mso-level-style-link","mso-level-suffix","mso-level-tab-stop","mso-level-text","mso-line-break-override","mso-line-grid","mso-line-height-alt","mso-line-height-rule","mso-line-numbers-count-by","mso-line-numbers-distance","mso-line-numbers-restart","mso-line-numbers-start","mso-line-spacing","mso-linked-frame","mso-list","mso-list-change","mso-list-change-author","mso-list-change-time","mso-list-change-values","mso-list-id","mso-list-ins","mso-list-ins-author","mso-list-ins-time","mso-list-name","mso-list-template-ids","mso-list-type","mso-margin-bottom-alt","mso-margin-left-alt","mso-margin-top-alt","mso-mirror-margins","mso-negative-indent-tab","mso-number-format","mso-outline-level","mso-outline-parent","mso-outline-parent-col","mso-outline-parent-row","mso-outline-parent-visibility","mso-outline-style","mso-padding-alt","mso-padding-between","mso-padding-bottom-alt","mso-padding-left-alt","mso-padding-right-alt","mso-padding-top-alt","mso-page-border-aligned","mso-page-border-art","mso-page-border-bottom-art","mso-page-border-display","mso-page-border-left-art","mso-page-border-offset-from","mso-page-border-right-art","mso-page-border-surround-footer","mso-page-border-surround-header","mso-page-border-top-art","mso-page-border-z-order","mso-page-numbers","mso-page-numbers-chapter-separator","mso-page-numbers-chapter-style","mso-page-numbers-start","mso-page-numbers-style","mso-page-orientation","mso-page-scale","mso-pagination","mso-panose-arm-style","mso-panose-contrast","mso-panose-family-type","mso-panose-letterform","mso-panose-midline","mso-panose-proportion","mso-panose-serif-style","mso-panose-stroke-variation","mso-panose-weight","mso-panose-x-height","mso-paper-source","mso-paper-source-first-page","mso-paper-source-other-pages","mso-pattern","mso-pattern-color","mso-pattern-style","mso-print-area","mso-print-color","mso-print-gridlines","mso-print-headings","mso-print-resolution","mso-print-sheet-order","mso-print-title-column","mso-print-title-row","mso-prop-change","mso-prop-change-author","mso-prop-change-time","mso-protection","mso-rotate","mso-row-margin-left","mso-row-margin-right","mso-ruby-merge","mso-ruby-visibility","mso-scheme-fill-color","mso-scheme-shadow-color","mso-shading","mso-shadow-color","mso-space-above","mso-space-below","mso-spacerun","mso-special-character","mso-special-format","mso-style-id","mso-style-name","mso-style-next","mso-style-parent","mso-style-type","mso-style-update","mso-subdocument","mso-symbol-font-family","mso-tab-count","mso-table-anchor-horizontal","mso-table-anchor-vertical","mso-table-bspace","mso-table-del-author","mso-table-del-time","mso-table-deleted","mso-table-dir","mso-table-ins-author","mso-table-ins-time","mso-table-inserted","mso-table-layout-alt","mso-table-left","mso-table-lspace","mso-table-overlap","mso-table-prop-author","mso-table-prop-change","mso-table-prop-time","mso-table-rspace","mso-table-top","mso-table-tspace","mso-table-wrap","mso-text-animation","mso-text-combine-brackets","mso-text-combine-id","mso-text-control","mso-text-fit-id","mso-text-indent-alt","mso-text-orientation","mso-text-raise","mso-title-page","mso-tny-compress","mso-unsynced","mso-vertical-align-alt","mso-vertical-align-special","mso-vertical-page-align","mso-width-alt","mso-width-source","mso-word-wrap","mso-xlrowspan","mso-zero-height","multiple","muted","name","nav-banner-image","navbutton_background_color","navbutton_home_hovered","navbutton_home_normal","navbutton_home_pushed","navbutton_horiz_hovered","navbutton_horiz_normal","navbutton_horiz_pushed","navbutton_next_hovered","navbutton_next_normal","navbutton_next_pushed","navbutton_prev_hovered","navbutton_prev_normal","navbutton_prev_pushed","navbutton_up_hovered","navbutton_up_normal","navbutton_up_pushed","navbutton_vert_hovered","navbutton_vert_normal","navbutton_vert_pushed","nohref","noresize","noshade","novalidate","nowrap","object","onblur","onchange","onclick","ondblclick","onfocus","onkeydown","onkeypress","onkeyup","onload","onmousedown","onmousemove","onmouseout","onmouseover","onmouseup","onreset","onselect","onsubmit","onunload","open","optimum","overflow","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","panose-1","pattern","ping","placeholder","position","poster","preload","profile","prompt","punctuation-trim","punctuation-wrap","radiogroup","readonly","referrerpolicy","rel","required","rev","reversed","right","row-span","rows","rowspan","ruby-align","ruby-overhang","ruby-position","rules","sandbox","scheme","scope","scoped","scrolling","selected","separator-image","shape","size","sizes","slot","span","spellcheck","src","srcdoc","srclang","srcset","standby","start","step","style","summary","tab-interval","tab-stops","tabindex","table-border-color-dark","table-border-color-light","table-layout","target","text","text-align","text-autospace","text-combine","text-decoration","text-effect","text-fit","text-indent","text-justify","text-justify-trim","text-kashida","text-line-through","text-shadow","text-transform","text-underline","text-underline-color","text-underline-style","title","top","top-bar-button","translate","type","unicode-bidi","urlId","usemap","valign","value","valuetype","version","vert-align","vertical-align","visibility","vlink","vnd.ms-excel.numberformat","vspace","white-space","width","word-break","word-spacing","wrap","xmlns","z-index"]);
/**
 * @name is-char-suitable-for-html-attr-name
 * @fileoverview Is given character suitable to be in an HTML attribute's name?
 * @version 2.0.14
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/is-char-suitable-for-html-attr-name/}
 */function o(t){return"string"==typeof t&&(t.charCodeAt(0)>96&&t.charCodeAt(0)<123||t.charCodeAt(0)>64&&t.charCodeAt(0)<91||t.charCodeAt(0)>47&&t.charCodeAt(0)<58||":"===t||"-"===t)}Function.prototype.toString.call(Object);var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t){var e={exports:{}};t(e,e.exports)}((function(t,e){var o="__lodash_hash_undefined__",n=9007199254740991,s="[object Arguments]",i="[object Boolean]",a="[object Date]",l="[object Function]",c="[object GeneratorFunction]",m="[object Map]",u="[object Number]",f="[object Object]",d="[object Promise]",h="[object RegExp]",p="[object Set]",g="[object String]",b="[object Symbol]",y="[object WeakMap]",v="[object ArrayBuffer]",_="[object DataView]",w="[object Float32Array]",x="[object Float64Array]",M="[object Int8Array]",j="[object Int16Array]",k="[object Int32Array]",A="[object Uint8Array]",O="[object Uint8ClampedArray]",C="[object Uint16Array]",B="[object Uint32Array]",z=/\w*$/,$=/^\[object .+?Constructor\]$/,I=/^(?:0|[1-9]\d*)$/,L={};L[s]=L["[object Array]"]=L[v]=L[_]=L[i]=L[a]=L[w]=L[x]=L[M]=L[j]=L[k]=L[m]=L[u]=L[f]=L[h]=L[p]=L[g]=L[b]=L[A]=L[O]=L[C]=L[B]=!0,L["[object Error]"]=L[l]=L[y]=!1;var P="object"==typeof self&&self&&self.Object===Object&&self,W="object"==typeof r&&r&&r.Object===Object&&r||P||Function("return this")(),E=e&&!e.nodeType&&e,N=E&&t&&!t.nodeType&&t,R=N&&N.exports===E;function S(t,e){return t.set(e[0],e[1]),t}function T(t,e){return t.add(e),t}function D(t,e,o,r){var n=-1,s=t?t.length:0;for(r&&s&&(o=t[++n]);++n<s;)o=e(o,t[n],n,t);return o}function F(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function H(t){var e=-1,o=Array(t.size);return t.forEach((function(t,r){o[++e]=[r,t]})),o}function q(t,e){return function(o){return t(e(o))}}function U(t){var e=-1,o=Array(t.size);return t.forEach((function(t){o[++e]=t})),o}var J,V=Array.prototype,Z=Function.prototype,G=Object.prototype,K=W["__core-js_shared__"],Q=(J=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||""))?"Symbol(src)_1."+J:"",X=Z.toString,Y=G.hasOwnProperty,tt=G.toString,et=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=R?W.Buffer:void 0,rt=W.Symbol,nt=W.Uint8Array,st=q(Object.getPrototypeOf,Object),it=Object.create,at=G.propertyIsEnumerable,lt=V.splice,ct=Object.getOwnPropertySymbols,mt=ot?ot.isBuffer:void 0,ut=q(Object.keys,Object),ft=Nt(W,"DataView"),dt=Nt(W,"Map"),ht=Nt(W,"Promise"),pt=Nt(W,"Set"),gt=Nt(W,"WeakMap"),bt=Nt(Object,"create"),yt=Ft(ft),vt=Ft(dt),_t=Ft(ht),wt=Ft(pt),xt=Ft(gt),Mt=rt?rt.prototype:void 0,jt=Mt?Mt.valueOf:void 0;function kt(t){var e=-1,o=t?t.length:0;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}function At(t){var e=-1,o=t?t.length:0;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}function Ot(t){var e=-1,o=t?t.length:0;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}function Ct(t){this.__data__=new At(t)}function Bt(t,e){var o=qt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ut(t)}(t)&&Y.call(t,"callee")&&(!at.call(t,"callee")||tt.call(t)==s)}(t)?function(t,e){for(var o=-1,r=Array(t);++o<t;)r[o]=e(o);return r}(t.length,String):[],r=o.length,n=!!r;for(var i in t)!e&&!Y.call(t,i)||n&&("length"==i||Tt(i,r))||o.push(i);return o}function zt(t,e,o){var r=t[e];Y.call(t,e)&&Ht(r,o)&&(void 0!==o||e in t)||(t[e]=o)}function $t(t,e){for(var o=t.length;o--;)if(Ht(t[o][0],e))return o;return-1}function It(t,e,o,r,n,d,y){var $;if(r&&($=d?r(t,n,d,y):r(t)),void 0!==$)return $;if(!Zt(t))return t;var I=qt(t);if(I){if($=function(t){var e=t.length,o=t.constructor(e);e&&"string"==typeof t[0]&&Y.call(t,"index")&&(o.index=t.index,o.input=t.input);return o}(t),!e)return function(t,e){var o=-1,r=t.length;e||(e=Array(r));for(;++o<r;)e[o]=t[o];return e}(t,$)}else{var P=St(t),W=P==l||P==c;if(Jt(t))return function(t,e){if(e)return t.slice();var o=new t.constructor(t.length);return t.copy(o),o}(t,e);if(P==f||P==s||W&&!d){if(F(t))return d?t:{};if($=function(t){return"function"!=typeof t.constructor||Dt(t)?{}:(e=st(t),Zt(e)?it(e):{});var e}(W?{}:t),!e)return function(t,e){return Wt(t,Rt(t),e)}(t,function(t,e){return t&&Wt(e,Gt(e),t)}($,t))}else{if(!L[P])return d?t:{};$=function(t,e,o,r){var n=t.constructor;switch(e){case v:return Pt(t);case i:case a:return new n(+t);case _:return function(t,e){var o=e?Pt(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.byteLength)}(t,r);case w:case x:case M:case j:case k:case A:case O:case C:case B:return function(t,e){var o=e?Pt(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.length)}(t,r);case m:return function(t,e,o){return D(e?o(H(t),!0):H(t),S,new t.constructor)}(t,r,o);case u:case g:return new n(t);case h:return function(t){var e=new t.constructor(t.source,z.exec(t));return e.lastIndex=t.lastIndex,e}(t);case p:return function(t,e,o){return D(e?o(U(t),!0):U(t),T,new t.constructor)}(t,r,o);case b:return s=t,jt?Object(jt.call(s)):{}}var s}(t,P,It,e)}}y||(y=new Ct);var E=y.get(t);if(E)return E;if(y.set(t,$),!I)var N=o?function(t){return function(t,e,o){var r=e(t);return qt(t)?r:function(t,e){for(var o=-1,r=e.length,n=t.length;++o<r;)t[n+o]=e[o];return t}(r,o(t))}(t,Gt,Rt)}(t):Gt(t);return function(t,e){for(var o=-1,r=t?t.length:0;++o<r&&!1!==e(t[o],o,t););}(N||t,(function(n,s){N&&(n=t[s=n]),zt($,s,It(n,e,o,r,s,t,y))})),$}function Lt(t){return!(!Zt(t)||(e=t,Q&&Q in e))&&(Vt(t)||F(t)?et:$).test(Ft(t));var e}function Pt(t){var e=new t.constructor(t.byteLength);return new nt(e).set(new nt(t)),e}function Wt(t,e,o,r){o||(o={});for(var n=-1,s=e.length;++n<s;){var i=e[n],a=r?r(o[i],t[i],i,o,t):void 0;zt(o,i,void 0===a?t[i]:a)}return o}function Et(t,e){var o,r,n=t.__data__;return("string"==(r=typeof(o=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==o:null===o)?n["string"==typeof e?"string":"hash"]:n.map}function Nt(t,e){var o=function(t,e){return null==t?void 0:t[e]}(t,e);return Lt(o)?o:void 0}kt.prototype.clear=function(){this.__data__=bt?bt(null):{}},kt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},kt.prototype.get=function(t){var e=this.__data__;if(bt){var r=e[t];return r===o?void 0:r}return Y.call(e,t)?e[t]:void 0},kt.prototype.has=function(t){var e=this.__data__;return bt?void 0!==e[t]:Y.call(e,t)},kt.prototype.set=function(t,e){return this.__data__[t]=bt&&void 0===e?o:e,this},At.prototype.clear=function(){this.__data__=[]},At.prototype.delete=function(t){var e=this.__data__,o=$t(e,t);return!(o<0)&&(o==e.length-1?e.pop():lt.call(e,o,1),!0)},At.prototype.get=function(t){var e=this.__data__,o=$t(e,t);return o<0?void 0:e[o][1]},At.prototype.has=function(t){return $t(this.__data__,t)>-1},At.prototype.set=function(t,e){var o=this.__data__,r=$t(o,t);return r<0?o.push([t,e]):o[r][1]=e,this},Ot.prototype.clear=function(){this.__data__={hash:new kt,map:new(dt||At),string:new kt}},Ot.prototype.delete=function(t){return Et(this,t).delete(t)},Ot.prototype.get=function(t){return Et(this,t).get(t)},Ot.prototype.has=function(t){return Et(this,t).has(t)},Ot.prototype.set=function(t,e){return Et(this,t).set(t,e),this},Ct.prototype.clear=function(){this.__data__=new At},Ct.prototype.delete=function(t){return this.__data__.delete(t)},Ct.prototype.get=function(t){return this.__data__.get(t)},Ct.prototype.has=function(t){return this.__data__.has(t)},Ct.prototype.set=function(t,e){var o=this.__data__;if(o instanceof At){var r=o.__data__;if(!dt||r.length<199)return r.push([t,e]),this;o=this.__data__=new Ot(r)}return o.set(t,e),this};var Rt=ct?q(ct,Object):function(){return[]},St=function(t){return tt.call(t)};function Tt(t,e){return!!(e=null==e?n:e)&&("number"==typeof t||I.test(t))&&t>-1&&t%1==0&&t<e}function Dt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||G)}function Ft(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ht(t,e){return t===e||t!=t&&e!=e}(ft&&St(new ft(new ArrayBuffer(1)))!=_||dt&&St(new dt)!=m||ht&&St(ht.resolve())!=d||pt&&St(new pt)!=p||gt&&St(new gt)!=y)&&(St=function(t){var e=tt.call(t),o=e==f?t.constructor:void 0,r=o?Ft(o):void 0;if(r)switch(r){case yt:return _;case vt:return m;case _t:return d;case wt:return p;case xt:return y}return e});var qt=Array.isArray;function Ut(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}(t.length)&&!Vt(t)}var Jt=mt||function(){return!1};function Vt(t){var e=Zt(t)?tt.call(t):"";return e==l||e==c}function Zt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Gt(t){return Ut(t)?Bt(t):function(t){if(!Dt(t))return ut(t);var e=[];for(var o in Object(t))Y.call(t,o)&&"constructor"!=o&&e.push(o);return e}(t)}t.exports=function(t){return It(t,!0,!0)}}));
/**
 * @name string-left-right
 * @fileoverview Looks up the first non-whitespace character to the left/right of a given index
 * @version 4.0.14
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-left-right/}
 */
const n=" ";function s(t,e=0){return function({str:t,idx:e=0,stopAtNewlines:o=!1,stopAtRawNbsp:r=!1}){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),!t[e+1])return null;if(t[e+1]&&(t[e+1].trim()||o&&"\n\r".includes(t[e+1])||r&&t[e+1]===n))return e+1;if(t[e+2]&&(t[e+2].trim()||o&&"\n\r".includes(t[e+2])||r&&t[e+2]===n))return e+2;for(let s=e+1,i=t.length;s<i;s++)if(t[s].trim()||o&&"\n\r".includes(t[s])||r&&t[s]===n)return s;return null}({str:t,idx:e,stopAtNewlines:!1,stopAtRawNbsp:!1})}function i(t,e=0){return function({str:t,idx:e,stopAtNewlines:o,stopAtRawNbsp:r}){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),e<1)return null;if(t[~-e]&&(t[~-e].trim()||o&&"\n\r".includes(t[~-e])||r&&t[~-e]===n))return~-e;if(t[e-2]&&(t[e-2].trim()||o&&"\n\r".includes(t[e-2])||r&&t[e-2]===n))return e-2;for(let s=e;s--;)if(t[s]&&(t[s].trim()||o&&"\n\r".includes(t[s])||r&&t[s]===n))return s;return null}({str:t,idx:e,stopAtNewlines:!1,stopAtRawNbsp:!1})}
/**
 * @name arrayiffy-if-string
 * @fileoverview Put non-empty strings into arrays, turn empty-ones into empty arrays. Bypass everything else.
 * @version 3.13.14
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/arrayiffy-if-string/}
 */
/**
 * @name string-match-left-right
 * @fileoverview Match substrings on the left or right of a given index, ignoring whitespace
 * @version 7.0.8
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-match-left-right/}
 */
function a(t){return t&&"object"==typeof t&&!Array.isArray(t)}function l(t){return"string"==typeof t}const c={cb:void 0,i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],maxMismatches:0,firstMustMatch:!1,lastMustMatch:!1,hungry:!1},m=t=>t+1;function u(t,e,o,r,n=!1,s=m){const i="function"==typeof o?o():o;if(+e<0&&n&&"EOL"===i)return i;const a={...c,...r};if(e>=t.length&&!n)return!1;let l=n?1:o.length,u=0,f=!1,d=!1,h=!1,p=a.maxMismatches,g=e,b=!1,y=!1,v=!1;function _(){return 1===u&&p<a.maxMismatches-1}for(;t[g];){const e=s(g);if(a.trimBeforeMatching&&""===t[g].trim()){if(!t[e]&&n&&"EOL"===o)return!0;g=s(g);continue}if(a&&!a.i&&a.trimCharsBeforeMatching&&a.trimCharsBeforeMatching.includes(t[g])||a&&a.i&&a.trimCharsBeforeMatching&&a.trimCharsBeforeMatching.map((t=>t.toLowerCase())).includes(t[g].toLowerCase())){if(n&&"EOL"===o&&!t[e])return!0;g=s(g);continue}const r=e>g?o[o.length-l]:o[l-1];if(!a.i&&t[g]===r||a.i&&t[g].toLowerCase()===r.toLowerCase()){if(b||(b=!0),h||(h=!0),l===o.length){if(y=!0,p!==a.maxMismatches)return!1}else 1===l&&(v=!0);if(l-=1,u++,_())return!1;if(!l)return(u!==o.length||p===a.maxMismatches||!f)&&g}else{if(f||u||(f=!0),!(a.maxMismatches&&p&&g))return!(0!==g||1!==l||a.lastMustMatch||!h)&&0;p-=1;for(let r=0;r<=p;r++){const n=e>g?o[o.length-l+1+r]:o[l-2-r],i=t[s(g)];if(n&&(!a.i&&t[g]===n||a.i&&t[g].toLowerCase()===n.toLowerCase())&&(!a.firstMustMatch||l!==o.length)){if(u++,_())return!1;l-=2,b=!0;break}if(i&&n&&(!a.i&&i===n||a.i&&i.toLowerCase()===n.toLowerCase())&&(!a.firstMustMatch||l!==o.length)){if(!u&&!a.hungry)return!1;l-=1,b=!0;break}if(void 0===n&&p>=0&&b&&(!a.firstMustMatch||y)&&(!a.lastMustMatch||v))return g}b||(d=g)}if(!1!==d&&d!==g&&(d=!1),l<1)return g;g=s(g)}return l>0?!(!n||"EOL"!==i)||!!(a&&a.maxMismatches>=l&&h)&&(d||0):void 0}function f(t,e,o,r){return function(t,e,o,r,n){if(a(n)&&Object.prototype.hasOwnProperty.call(n,"trimBeforeMatching")&&"boolean"!=typeof n.trimBeforeMatching)throw new Error(`string-match-left-right/${t}(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!${Array.isArray(n.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""}`);const s={...c,...n};var i;if("string"==typeof s.trimCharsBeforeMatching&&(s.trimCharsBeforeMatching="string"==typeof(i=s.trimCharsBeforeMatching)?i.length?[i]:[]:i),s.trimCharsBeforeMatching=s.trimCharsBeforeMatching.map((t=>l(t)?t:String(t))),!l(e))return!1;if(!e.length)return!1;if(!Number.isInteger(o)||o<0)throw new Error(`string-match-left-right/${t}(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ${typeof o}, equal to:\n${JSON.stringify(o,null,4)}`);let m,f;if(l(r))m=[r];else if(Array.isArray(r))m=r;else if(r){if("function"!=typeof r)throw new Error(`string-match-left-right/${t}(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ${typeof r}, equal to:\n${JSON.stringify(r,null,4)}`);m=[],m.push(r)}else m=r;if(n&&!a(n))throw new Error(`string-match-left-right/${t}(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type "${typeof n}", and equal to:\n${JSON.stringify(n,null,4)}`);let d=0,h="";if(s&&s.trimCharsBeforeMatching&&s.trimCharsBeforeMatching.some(((t,e)=>t.length>1&&(d=e,h=t,!0))))throw new Error(`string-match-left-right/${t}(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ${d} is longer than 1 character, ${h.length} (equals to ${h}). Please split it into separate characters and put into array as separate elements.`);if(!m||!Array.isArray(m)||Array.isArray(m)&&!m.length||Array.isArray(m)&&1===m.length&&l(m[0])&&!m[0].trim()){if("function"==typeof s.cb){let r,n=o;if("matchLeftIncl"!==t&&"matchRight"!==t||(n+=1),"L"===t[5])for(let t=n;t--;){const o=e[t];if((!s.trimBeforeMatching||s.trimBeforeMatching&&void 0!==o&&o.trim())&&(!s.trimCharsBeforeMatching||!s.trimCharsBeforeMatching.length||void 0!==o&&!s.trimCharsBeforeMatching.includes(o))){r=t;break}}else if(t.startsWith("matchRight"))for(let t=n;t<e.length;t++){const o=e[t];if((!s.trimBeforeMatching||s.trimBeforeMatching&&o.trim())&&(!s.trimCharsBeforeMatching||!s.trimCharsBeforeMatching.length||!s.trimCharsBeforeMatching.includes(o))){r=t;break}}if(void 0===r)return!1;const i=e[r],a=r+1;let l="";return a&&a>0&&(l=e.slice(0,a)),"L"===t[5]||r&&r>0&&(l=e.slice(r)),s.cb(i,l,r)}let r="";throw n||(r=" More so, the whole options object, the fourth input argument, is missing!"),new Error(`string-match-left-right/${t}(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!${r}`)}for(let r=0,n=m.length;r<n;r++){f="function"==typeof m[r];const n=m[r];let i,a,l="",c=o;"matchRight"===t?c+=1:"matchLeft"===t&&(c-=1);const d=u(e,c,n,s,f,(e=>"L"===t[5]?e-1:e+1));if(d&&f&&"function"==typeof n&&"EOL"===n())return!(!n()||s.cb&&!s.cb(i,l,a))&&n();if(Number.isInteger(d)&&(a=t.startsWith("matchLeft")?d-1:d+1,l="L"===t[5]?e.slice(0,d):e.slice(a)),a<0&&(a=void 0),e[a]&&(i=e[a]),Number.isInteger(d)&&(!s.cb||s.cb(i,l,a)))return n}return!1}("matchRight",t,e,o,r)}function d(t){return"'"===t?'"':"'"}function h(t,e,o,r=[]){for(let n=e,s=t.length;n<s;n++){if(r.some((e=>t.startsWith(e,n))))return!0;if(t[n]===o)return!1}return!0}function p(t,e,o,r){for(let n=e,s=t.length;n<s;n++){if(t.startsWith(o,n))return!0;if(t.startsWith(r,n))return!1}return!1}function g(t,e){if(!o(t[e])||!e)return!1;return/^[a-zA-Z0-9:-]*(\s*[=]?\s*((?:'[^']*')|(?:"[^"]*")))|( [^/>'"=]*['"])/.test(t.slice(e))}function b(t,e){if(!e||!o(t[e]))return!1;return/^[a-zA-Z0-9:-]*=(((?:'[^']*')|(?:"[^"]*"))|((?:['"][^'"]*['"]\s*\/?>)))/.test(t.slice(e))}function y(t,e){if(o(t[i(t,e)]))for(let r=e;r--;)if(t[r].trim().length&&!o(t[r]))return t.slice(r+1,e)}t.isAttrClosing=function(t,r,n){if("string"!=typeof t||!t.trim()||!Number.isInteger(r)||!Number.isInteger(n)||!t[r]||!t[n]||r>=n)return!1;const a="'\"".includes(t[r])?t[r]:null;let l,c=null;a&&(c=d(a));const m=(new Map).set("'",0).set('"',0).set("matchedPairs",0);let u,v,_,w,x=null,M=0,j=!1,k=!1,A=!1,O=!1;for(let C=r,B=t.length;C<B;C++){const B=s(t,C),z=i(t,C);if("'\"".includes(t[C])&&j&&u===r&&void 0!==v&&v<C&&C>=n){const a=C!==n||b(t,s(t,n))||"/>".includes(t[B]),c=!(C>n&&t[r]===t[n]&&t[r]===t[C]&&g(t,C+1)),m=C===n&&g(t,n+1),u=l&&l<C&&e.has(t.slice(l,C).trim());l&&t.slice(l,C).trim();const f=l&&l<C&&t[l-1]&&!t[l-1].trim()&&Array.from(t.slice(l,C).trim()).every((t=>o(t)))&&t[r]===t[n]&&!"/>".includes(t[B])&&h(t,C+1,"=",["'",'"']);let d;C===n&&(d=y(t,C));const p=C===n&&(!o(t[z])||d&&!e.has(d))&&"="!==t[z],v="/>".includes(t[B])&&C===n,_=o(t[B]),w=j&&C!==n,x=!(C>=n&&":"===t[i(t,n)]);return!!(a&&c&&(m||u||f||p)&&(v||_||w)&&x)}if("'\"".includes(t[C])){if("'"===t[C]&&'"'===t[C-1]&&'"'===t[C+1]||'"'===t[C]&&"'"===t[C-1]&&"'"===t[C+1])continue;x&&t[C]===t[x]?(m.set("matchedPairs",m.get("matchedPairs")+1),u=x,v=C,x=null,j=!0):j=!1,m.set(t[C],m.get(t[C])+1),M=m.get('"')+m.get("'")}if(">"===t[C]&&!A&&(A=!0,M&&m.get("matchedPairs")&&M===2*m.get("matchedPairs")&&C<n))return!1;if("<"===t[C]&&"%"!==t[B]&&A&&!O)return O=!0,!1;if(t[C].trim()&&!l)o(t[C])&&(l=C);else if(l&&!o(t[C])){if(w=_,_=t.slice(l,C),k=l>=n,"'\"".includes(t[C])&&0===m.get("matchedPairs")&&3===M&&t[r]===t[C]&&e.has(_)&&!"'\"".includes(t[B])){const o=C>n,r=!x,s=x+1>=C,i=t.slice(x+1,C).trim().split(/\s+/).every((t=>e.has(t))),a=!_||!w||!w.endsWith(":"),l=C===n,c=M<3,m=!!j,u=!x,f=x+1>=C,d=!t.slice(x+1,C).trim().split(/\s+/).every((t=>e.has(t)));return o&&(r||s||i)&&a||l&&(c||m||u||f||d)}if(_&&e.has(_)&&u===r&&v===n)return!0}if("'\"".includes(t[C])&&(!(m.get('"')%2)||!(m.get("'")%2))&&(m.get('"')+m.get("'"))%2&&(_&&e.has(_)||C>n+1&&e.has(t.slice(n+1,C).trim()))&&(t[C+1]!==t[C]||t[C]!==t[r])&&!(C>n+1&&":"===t[i(t,n)])&&!(_&&w&&w.trim().endsWith(":"))){const o=C>n,s=!!a,i=t[r]!==t[n],l=e.has(t.slice(r+1,n).trim()),c=!p(t,C+1,t[n],d(t[n]));return o&&!(s&&i&&l&&c)}if(("="===t[C]||!t[C].length&&"="===t[B])&&_&&e.has(_)){const e=C>n,o=!(!(j&&u===r&&v===n||b(t,l))&&j&&void 0!==u&&u<=n);return e&&o}if(C>n){if(a&&t[C]===a){const o=!!x,r=x===n,s=x+1<C&&t.slice(x+1,C).trim(),i=t.slice(x+1,C).trim().split(/\s+/).every((t=>e.has(t))),a=C>=n,l=!t[B]||!"'\"".includes(t[B]);return!!(o&&r&&s&&i&&a&&l)}if(a&&t[n]===c&&t[C]===c)return!1;if("/"===t[C]||">"===t[C]||"<"===t[C]){const s=t[r]===t[n]&&x===n&&!t.slice(r+1,n).includes(t[r]),i=m.get("matchedPairs")<2,a=y(t,C),l=(!a||!e.has(a))&&(!(C>n&&m.get("'")&&m.get('"')&&m.get("matchedPairs")>1)||"/>".includes(t[B])),c=M<3||m.get('"')+m.get("'")-2*m.get("matchedPairs")!=2,f=!j||j&&!(void 0!==u&&Array.from(t.slice(r+1,u).trim()).every((t=>o(t)))&&e.has(t.slice(r+1,u).trim())),d=!B&&M%2==0,p=t[r-2]&&"="===t[r-1]&&o(t[r-2]),g=!h(t,C+1,"<",["='",'="']);return s||(i||l)&&c&&(f||d||p||g)}if("="===t[C]&&f(t,C,["'",'"'],{trimBeforeMatching:!0,trimCharsBeforeMatching:["="]}))return!0}else{let a;if(t[C-1]&&t[C-1].trim()&&"="!==t[C-1])a=C-1;else for(let e=C;e--;)if(t[e].trim()&&"="!==t[e]){a=e;break}if("="===t[C]&&f(t,C,["'",'"'],{cb:t=>!"/>".includes(t),trimBeforeMatching:!0,trimCharsBeforeMatching:["="]})&&o(t[a])&&!t.slice(r+1).startsWith("http")&&!t.slice(r+1,C).includes("/")&&!t.endsWith("src=",r)&&!t.endsWith("href=",r))return!1;if(C===n&&b(t,C+1))return!0;if(C<n&&"'\"".includes(t[C])&&_&&t[i(t,r)]&&"="!==t[i(t,r)]&&u===r&&e.has(_))return!1;if(C===n&&"'\"".includes(t[C])&&("'"===t[z]||'"'===t[z])&&_&&w&&M%2==0&&w.endsWith(":"))return!0;if(C===n&&"'\"".includes(t[C])&&t.slice(r,n).includes(":")&&(">"===t[B]||"/"===t[B]&&">"===t[s(t,B)]))return!0}if("'\"".includes(t[C])&&C>n)return!!(k&&_&&e.has(_));"'\"".includes(t[C])&&(x=C),l&&!o(t[C])&&(l=null)}return!1},t.version="2.2.5",Object.defineProperty(t,"__esModule",{value:!0})}));
