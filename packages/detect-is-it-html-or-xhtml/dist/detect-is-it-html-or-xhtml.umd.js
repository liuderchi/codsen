!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.detectIsItHTMLOrXhtml=e()}(this,function(){"use strict";return function(t){function e(t){return null!=t}if(!e(t))return null;if("string"!=typeof t)throw new TypeError("detect-is-it-html-or-xhtml: Input must be string");var n=void 0,i=void 0,o=void 0,r=void 0,l=void 0,c=void 0,u=0,h=/<\s*img[^>]*>/gi,m=/<\s*br[^>]*>/gi,f=/<\s*hr[^>]*>/gi,s=/\/\s*>/g,d=null,g=null;if(d=/<\s*!\s*doctype[^>]*>/im.exec(t),e(d)){var a=/xhtml/gi,p=/svg/gi;g=d[0].match(a)||d[0].match(p)?"xhtml":"html"}else{if(o=t.match(h)||[],r=t.match(m)||[],l=t.match(f)||[],0===(c=o.concat(r).concat(l)).length)return null;for(n=0,i=c.length;n<i;n++)e(c[n].match(s))&&(u+=1);g=u>c.length/2?"xhtml":"html"}return g}});
