/**
 * emlint
 * Non-parsing, email template-oriented linter
 * Version: 1.2.6
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/emlint
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var fixBrokenEntities = _interopDefault(require('string-fix-broken-named-entities'));
var stringLeftRight = require('string-left-right');
var checkTypes = _interopDefault(require('check-types-mini'));
var isObj = _interopDefault(require('lodash.isplainobject'));
var clone = _interopDefault(require('lodash.clonedeep'));
var merge = _interopDefault(require('ranges-merge'));

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var knownBooleanHTMLAttributes = [
	"async",
	"autofocus",
	"autoplay",
	"checked",
	"compact",
	"contenteditable",
	"controls",
	"default",
	"defer",
	"disabled",
	"formNoValidate",
	"frameborder",
	"hidden",
	"ismap",
	"itemscope",
	"loop",
	"multiple",
	"muted",
	"nohref",
	"nomodule",
	"noresize",
	"noshade",
	"novalidate",
	"nowrap",
	"open",
	"readonly",
	"required",
	"reversed",
	"scoped",
	"scrolling",
	"seamless",
	"selected",
	"typemustmatch"
];

var knownHTMLTags = [
	"abbr",
	"address",
	"area",
	"article",
	"aside",
	"audio",
	"base",
	"bdi",
	"bdo",
	"blockquote",
	"body",
	"br",
	"button",
	"canvas",
	"caption",
	"center",
	"cite",
	"code",
	"col",
	"colgroup",
	"data",
	"datalist",
	"dd",
	"del",
	"details",
	"dfn",
	"dialog",
	"div",
	"dl",
	"doctype",
	"dt",
	"em",
	"embed",
	"fieldset",
	"figcaption",
	"figure",
	"footer",
	"form",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"head",
	"header",
	"hgroup",
	"hr",
	"html",
	"iframe",
	"img",
	"input",
	"ins",
	"kbd",
	"keygen",
	"label",
	"legend",
	"li",
	"link",
	"main",
	"map",
	"mark",
	"math",
	"menu",
	"menuitem",
	"meta",
	"meter",
	"nav",
	"noscript",
	"object",
	"ol",
	"optgroup",
	"option",
	"output",
	"param",
	"picture",
	"pre",
	"progress",
	"rb",
	"rp",
	"rt",
	"rtc",
	"ruby",
	"samp",
	"script",
	"section",
	"select",
	"slot",
	"small",
	"source",
	"span",
	"strong",
	"style",
	"sub",
	"summary",
	"sup",
	"svg",
	"table",
	"tbody",
	"td",
	"template",
	"textarea",
	"tfoot",
	"th",
	"thead",
	"time",
	"title",
	"tr",
	"track",
	"ul",
	"var",
	"video",
	"wbr",
	"xml"
];

var version = "1.2.6";

var errorsRules = {
	"bad-named-html-entity-multiple-encoding": {
	description: "HTML named entity was encoded multiple times, causing repeated amp;",
	excerpt: "repeated amp; because of over-encoding",
	scope: "html"
},
	"bad-named-html-entity-malformed-nbsp": {
	description: "HTML named entity &nbsp; (a non-breaking space) is malformed",
	excerpt: "malformed &nbsp;",
	scope: "html"
},
	"bad-cdata-tag-character-case": {
	description: "CDATA opening tag name characters are in wrong letter case",
	excerpt: "wrong letter case",
	scope: "html"
},
	"bad-named-html-entity-missing-semicolon": {
	description: "HTML named entity is missing a semicolon",
	excerpt: "missing semicolon on a named HTML entity",
	scope: "html"
},
	"file-empty": {
	description: "the contents are empty",
	excerpt: "the contents are empty",
	scope: "all"
},
	"file-missing-ending": {
	description: "the ending part of the contents is missing",
	excerpt: "ending part is missing",
	scope: "all"
},
	"file-mixed-line-endings-file-is-CR-mainly": {
	description: "mixed line endings detected, majority EOL's are CR",
	excerpt: "mixed line endings detected, majority EOL's are CR",
	scope: "all"
},
	"file-mixed-line-endings-file-is-CRLF-mainly": {
	description: "mixed line endings detected, majority EOL's are CRLF",
	excerpt: "mixed line endings detected, majority EOL's are CRLF",
	scope: "all"
},
	"file-mixed-line-endings-file-is-LF-mainly": {
	description: "mixed line endings detected, majority EOL's are LF",
	excerpt: "mixed line endings detected, majority EOL's are LF",
	scope: "all"
},
	"file-wrong-type-line-ending-CR": {
	description: "Carriage Return (ASCII #13) line ending detected",
	excerpt: "Carriage Return line ending",
	scope: "all"
},
	"file-wrong-type-line-ending-CRLF": {
	description: "CRLF (Carriage Return + Line Feed) line ending detected",
	excerpt: "CRLF line ending",
	scope: "all"
},
	"file-wrong-type-line-ending-LF": {
	description: "Line Feed (ASCII #10) line ending detected",
	excerpt: "Line Feed line ending",
	scope: "all"
},
	"tag-attribute-closing-quotation-mark-missing": {
	description: "The closing quotation mark is missing",
	excerpt: "the closing quotation mark is missing",
	scope: "html"
},
	"tag-attribute-left-double-quotation-mark": {
	description: "There's a left double quotation mark, https://www.fileformat.info/info/unicode/char/201C/index.htm",
	excerpt: "a left double quotation mark instead of a normal quotation mark",
	scope: "html"
},
	"tag-attribute-left-single-quotation-mark": {
	description: "There's a left single quotation mark, https://www.fileformat.info/info/unicode/char/2018/index.htm",
	excerpt: "a left single quotation mark instead of a normal quotation mark",
	scope: "html"
},
	"tag-attribute-mismatching-quotes-is-double": {
	description: "attribute's opening quote is single, but closing-one is double",
	excerpt: "there should be a single quote here instead",
	scope: "html"
},
	"tag-attribute-mismatching-quotes-is-single": {
	description: "attribute's opening quote is double, but closing-one is single",
	excerpt: "there should be a double quote here instead",
	scope: "html"
},
	"tag-attribute-missing-equal": {
	description: "The equal is missing between attribute's name and quotes",
	excerpt: "missing equal character",
	scope: "html"
},
	"tag-attribute-opening-quotation-mark-missing": {
	description: "The opening quotation mark is missing",
	excerpt: "the opening quotation mark is missing",
	scope: "html"
},
	"tag-attribute-quote-and-onwards-missing": {
	description: "One of the attributes ends with an equal sign, there are no quotes on it",
	excerpt: "attributes ends with an equal sign, there are no quotes on it",
	scope: "html"
},
	"tag-attribute-repeated-equal": {
	description: "The equal after attribute's name is repeated",
	excerpt: "repeated equal character",
	scope: "html"
},
	"tag-attribute-right-double-quotation-mark": {
	description: "There's a right double quotation mark, https://www.fileformat.info/info/unicode/char/201d/index.htm",
	excerpt: "a right double quotation mark instead of a normal quotation mark",
	scope: "html"
},
	"tag-attribute-right-single-quotation-mark": {
	description: "There's a right single quotation mark, https://www.fileformat.info/info/unicode/char/2019/index.htm",
	excerpt: "a right single quotation mark instead of a normal quotation mark",
	scope: "html"
},
	"tag-attribute-space-between-equals-and-opening-quotes": {
	description: "There's a space between attribute's equal sign and opening quotes",
	excerpt: "space between attribute's equal sign and opening quotes",
	scope: "html"
},
	"tag-attribute-space-between-name-and-equals": {
	description: "There's a space between attribute's name and equal sign",
	excerpt: "space between attribute's name and equal sign",
	scope: "html"
},
	"tag-excessive-whitespace-inside-tag": {
	description: "There's an excessive whitespace inside the tag",
	excerpt: "space between attribute's name and equal sign",
	scope: "html"
},
	"tag-generic-error": {
	description: "Something is wrong here",
	excerpt: "something is wrong here",
	scope: "html"
},
	"tag-missing-closing-bracket": {
	description: "Tag's closing bracket is missing",
	excerpt: "missing closing bracket",
	scope: "html"
},
	"tag-missing-space-before-attribute": {
	description: "The space before attribute's name is missing",
	excerpt: "missing space",
	scope: "html"
},
	"tag-name-lowercase": {
	description: "Normally all tags are in lowercase",
	excerpt: "tag name contains uppercase characters",
	scope: "html"
},
	"tag-space-after-opening-bracket": {
	description: "Many browsers, including Chrome will not consider this a tag",
	excerpt: "space between opening bracket and tag name",
	scope: "html"
},
	"tag-stray-character": {
	description: "This chunk seems to be astray and can be deleted",
	excerpt: "delete this",
	scope: "html"
},
	"tag-stray-quotes": {
	description: "These quotes can be deleted",
	excerpt: "delete this",
	scope: "html"
},
	"tag-whitespace-closing-slash-and-bracket": {
	description: "There's a whitespace between closing slash and closing bracket",
	excerpt: "whitespace between slash and closing bracket",
	scope: "html"
}
};

var errorsCharacters = {
	"bad-character-acknowledge": {
	description: "https://www.fileformat.info/info/unicode/char/0006/index.htm",
	excerpt: "bad character - acknowledge",
	scope: "all"
},
	"bad-character-application-program-command": {
	description: "http://www.fileformat.info/info/unicode/char/009f/index.htm",
	excerpt: "bad character - application program command",
	scope: "all"
},
	"bad-character-backspace": {
	description: "https://www.fileformat.info/info/unicode/char/0008/index.htm",
	excerpt: "bad character - backspace",
	scope: "all"
},
	"bad-character-bell": {
	description: "https://www.fileformat.info/info/unicode/char/0007/index.htm",
	excerpt: "bad character - bell",
	scope: "all"
},
	"bad-character-en-quad": {
	description: "https://www.fileformat.info/info/unicode/char/2000/index.htm",
	excerpt: "bad character - en quad",
	scope: "all"
},
	"bad-character-em-quad": {
	description: "https://www.fileformat.info/info/unicode/char/2001/index.htm",
	excerpt: "bad character - em quad",
	scope: "all"
},
	"bad-character-en-space": {
	description: "https://www.fileformat.info/info/unicode/char/2000/index.htm",
	excerpt: "bad character - en space",
	scope: "all"
},
	"bad-character-em-space": {
	description: "https://www.fileformat.info/info/unicode/char/2001/index.htm",
	excerpt: "bad character - em space",
	scope: "all"
},
	"bad-character-three-per-em-space": {
	description: "https://www.fileformat.info/info/unicode/char/2004/index.htm",
	excerpt: "bad character - three-per-em space",
	scope: "all"
},
	"bad-character-four-per-em-space": {
	description: "https://www.fileformat.info/info/unicode/char/2005/index.htm",
	excerpt: "bad character - four-per-em space",
	scope: "all"
},
	"bad-character-six-per-em-space": {
	description: "https://www.fileformat.info/info/unicode/char/2005/index.htm",
	excerpt: "bad character - six-per-em space",
	scope: "all"
},
	"bad-character-figure-space": {
	description: "https://www.fileformat.info/info/unicode/char/2007/index.htm",
	excerpt: "bad character - figure space",
	scope: "all"
},
	"bad-character-punctuation-space": {
	description: "https://www.fileformat.info/info/unicode/char/2008/index.htm",
	excerpt: "bad character - punctuation space",
	scope: "all"
},
	"bad-character-thin-space": {
	description: "https://www.fileformat.info/info/unicode/char/2009/index.htm",
	excerpt: "bad character - thin space",
	scope: "all"
},
	"bad-character-hair-space": {
	description: "https://www.fileformat.info/info/unicode/char/200a/index.htm",
	excerpt: "bad character - hair space",
	scope: "all"
},
	"bad-character-narrow-no-break-space": {
	description: "https://www.fileformat.info/info/unicode/char/202f/index.htm",
	excerpt: "bad character - narrow no-break space",
	scope: "all"
},
	"bad-character-line-separator": {
	description: "https://www.fileformat.info/info/unicode/char/2028/index.htm",
	excerpt: "bad character - line separator",
	scope: "all"
},
	"bad-character-paragraph-separator": {
	description: "https://www.fileformat.info/info/unicode/char/2029/index.htm",
	excerpt: "bad character - paragraph separator",
	scope: "all"
},
	"bad-character-medium-mathematical-space": {
	description: "https://www.fileformat.info/info/unicode/char/205f/index.htm",
	excerpt: "bad character - medium mathematical space",
	scope: "all"
},
	"bad-character-ideographic-space": {
	description: "https://www.fileformat.info/info/unicode/char/3000/index.htm",
	excerpt: "bad character - ideographic space",
	scope: "all"
},
	"bad-character-ogham-space-mark": {
	description: "https://www.fileformat.info/info/unicode/char/1680/index.htm",
	excerpt: "bad character - ogham space mark",
	scope: "all"
},
	"bad-character-break-permitted-here": {
	description: "http://www.fileformat.info/info/unicode/char/0082/index.htm",
	excerpt: "bad character - break permitted here",
	scope: "all"
},
	"bad-character-cancel": {
	description: "https://www.fileformat.info/info/unicode/char/0018/index.htm",
	excerpt: "bad character - cancel",
	scope: "all"
},
	"bad-character-generic": {
	description: "This character is invalid",
	excerpt: "bad character",
	scope: "all"
},
	"bad-character-cancel-character": {
	description: "http://www.fileformat.info/info/unicode/char/0094/index.htm",
	excerpt: "bad character - cancel character",
	scope: "all"
},
	"bad-character-character-tabulation": {
	description: "https://www.fileformat.info/info/unicode/char/0009/index.htm",
	excerpt: "bad character - character tabulation",
	scope: "all"
},
	"bad-character-character-tabulation-set": {
	description: "http://www.fileformat.info/info/unicode/char/0088/index.htm",
	excerpt: "bad character - character tabulation set",
	scope: "all"
},
	"bad-character-character-tabulation-with-justification": {
	description: "http://www.fileformat.info/info/unicode/char/0089/index.htm",
	excerpt: "bad character - character tabulation with justification",
	scope: "all"
},
	"bad-character-control-sequence-introducer": {
	description: "http://www.fileformat.info/info/unicode/char/009b/index.htm",
	excerpt: "bad character - control sequence introducer",
	scope: "all"
},
	"bad-character-data-link-escape": {
	description: "https://www.fileformat.info/info/unicode/char/0010/index.htm",
	excerpt: "bad character - data link escape",
	scope: "all"
},
	"bad-character-delete": {
	description: "http://www.fileformat.info/info/unicode/char/007f/index.htm",
	excerpt: "bad character - delete",
	scope: "all"
},
	"bad-character-device-control-four": {
	description: "https://www.fileformat.info/info/unicode/char/0014/index.htm",
	excerpt: "bad character - device control four",
	scope: "all"
},
	"bad-character-device-control-one": {
	description: "https://www.fileformat.info/info/unicode/char/0011/index.htm",
	excerpt: "bad character - device control one",
	scope: "all"
},
	"bad-character-device-control-string": {
	description: "http://www.fileformat.info/info/unicode/char/0090/index.htm",
	excerpt: "bad character - device control string",
	scope: "all"
},
	"bad-character-device-control-three": {
	description: "https://www.fileformat.info/info/unicode/char/0013/index.htm",
	excerpt: "bad character - device control three",
	scope: "all"
},
	"bad-character-device-control-two": {
	description: "https://www.fileformat.info/info/unicode/char/0012/index.htm",
	excerpt: "bad character - device control two",
	scope: "all"
},
	"bad-character-end-of-medium": {
	description: "https://www.fileformat.info/info/unicode/char/0019/index.htm",
	excerpt: "bad character - end of medium",
	scope: "all"
},
	"bad-character-end-of-protected-area": {
	description: "http://www.fileformat.info/info/unicode/char/0097/index.htm",
	excerpt: "bad character - end of protected area",
	scope: "all"
},
	"bad-character-end-of-selected-area": {
	description: "http://www.fileformat.info/info/unicode/char/0087/index.htm",
	excerpt: "bad character - end of selected area",
	scope: "all"
},
	"bad-character-end-of-text": {
	description: "https://www.fileformat.info/info/unicode/char/0003/index.htm",
	excerpt: "bad character - end of text (ETX)",
	scope: "all"
},
	"bad-character-end-of-transmission": {
	description: "https://www.fileformat.info/info/unicode/char/0004/index.htm",
	excerpt: "bad character - end of transmission",
	scope: "all"
},
	"bad-character-end-of-transmission-block": {
	description: "https://www.fileformat.info/info/unicode/char/0017/index.htm",
	excerpt: "bad character - end of transmission block",
	scope: "all"
},
	"bad-character-enquiry": {
	description: "https://www.fileformat.info/info/unicode/char/0005/index.htm",
	excerpt: "bad character - enquiry",
	scope: "all"
},
	"bad-character-escape": {
	description: "https://www.fileformat.info/info/unicode/char/001b/index.htm",
	excerpt: "bad character - escape",
	scope: "all"
},
	"bad-character-form-feed": {
	description: "https://www.fileformat.info/info/unicode/char/000c/index.htm",
	excerpt: "bad character - form feed",
	scope: "all"
},
	"bad-character-grave-accent": {
	description: "https://www.fileformat.info/info/unicode/char/0060/index.htm",
	excerpt: "bad character - grave accent",
	scope: "html"
},
	"bad-character-high-octet-preset": {
	description: "http://www.fileformat.info/info/unicode/char/0081/index.htm",
	excerpt: "bad character - high octet preset",
	scope: "all"
},
	"bad-character-index": {
	description: "http://www.fileformat.info/info/unicode/char/0084/index.htm",
	excerpt: "bad character - index",
	scope: "all"
},
	"bad-character-information-separator-four": {
	description: "https://www.fileformat.info/info/unicode/char/001c/index.htm",
	excerpt: "bad character - information separator four",
	scope: "all"
},
	"bad-character-information-separator-one": {
	description: "https://www.fileformat.info/info/unicode/char/001f/index.htm",
	excerpt: "bad character - information separator one",
	scope: "all"
},
	"bad-character-information-separator-three": {
	description: "https://www.fileformat.info/info/unicode/char/001d/index.htm",
	excerpt: "bad character - information separator three",
	scope: "all"
},
	"bad-character-information-separator-two": {
	description: "https://www.fileformat.info/info/unicode/char/001e/index.htm",
	excerpt: "bad character - information separator two",
	scope: "all"
},
	"bad-character-line-tabulation": {
	description: "https://www.fileformat.info/info/unicode/char/000b/index.htm",
	excerpt: "bad character - line tabulation",
	scope: "all"
},
	"bad-character-line-tabulation-set": {
	description: "http://www.fileformat.info/info/unicode/char/008a/index.htm",
	excerpt: "bad character - line tabulation set",
	scope: "all"
},
	"bad-character-message-waiting": {
	description: "http://www.fileformat.info/info/unicode/char/0095/index.htm",
	excerpt: "bad character - message waiting",
	scope: "all"
},
	"bad-character-negative-acknowledge": {
	description: "https://www.fileformat.info/info/unicode/char/0015/index.htm",
	excerpt: "bad character - negative acknowledge",
	scope: "all"
},
	"bad-character-next-line": {
	description: "http://www.fileformat.info/info/unicode/char/0085/index.htm",
	excerpt: "bad character - next line",
	scope: "all"
},
	"bad-character-no-break-here": {
	description: "http://www.fileformat.info/info/unicode/char/0083/index.htm",
	excerpt: "bad character - no break here",
	scope: "all"
},
	"bad-character-null": {
	description: "https://www.fileformat.info/info/unicode/char/0000/index.htm",
	excerpt: "bad character - null",
	scope: "all"
},
	"bad-character-operating-system-command": {
	description: "http://www.fileformat.info/info/unicode/char/009d/index.htm",
	excerpt: "bad character - operating system command",
	scope: "all"
},
	"bad-character-padding": {
	description: "http://www.fileformat.info/info/unicode/char/0080/index.htm",
	excerpt: "bad character - padding",
	scope: "all"
},
	"bad-character-partial-line-backward": {
	description: "http://www.fileformat.info/info/unicode/char/008c/index.htm",
	excerpt: "bad character - partial line backward",
	scope: "all"
},
	"bad-character-partial-line-forward": {
	description: "http://www.fileformat.info/info/unicode/char/008b/index.htm",
	excerpt: "bad character - partial line forward",
	scope: "all"
},
	"bad-character-private-message": {
	description: "http://www.fileformat.info/info/unicode/char/009e/index.htm",
	excerpt: "bad character - private message",
	scope: "all"
},
	"bad-character-private-use-1": {
	description: "http://www.fileformat.info/info/unicode/char/0091/index.htm",
	excerpt: "bad character - private use 1",
	scope: "all"
},
	"bad-character-private-use-2": {
	description: "http://www.fileformat.info/info/unicode/char/0092/index.htm",
	excerpt: "bad character - private use 2",
	scope: "all"
},
	"bad-character-reverse-line-feed": {
	description: "http://www.fileformat.info/info/unicode/char/008d/index.htm",
	excerpt: "bad character - reverse line feed",
	scope: "all"
},
	"bad-character-set-transmit-state": {
	description: "http://www.fileformat.info/info/unicode/char/0093/index.htm",
	excerpt: "bad character - set transmit state",
	scope: "all"
},
	"bad-character-shift-in": {
	description: "https://www.fileformat.info/info/unicode/char/000f/index.htm",
	excerpt: "bad character - shift in",
	scope: "all"
},
	"bad-character-shift-out": {
	description: "https://www.fileformat.info/info/unicode/char/000e/index.htm",
	excerpt: "bad character - shift out",
	scope: "all"
},
	"bad-character-single-character-intro-introducer": {
	description: "http://www.fileformat.info/info/unicode/char/009a/index.htm",
	excerpt: "bad character - single character intro introducer",
	scope: "all"
},
	"bad-character-single-graphic-character-introducer": {
	description: "http://www.fileformat.info/info/unicode/char/0099/index.htm",
	excerpt: "bad character - single graphic character introducer",
	scope: "all"
},
	"bad-character-single-shift-three": {
	description: "http://www.fileformat.info/info/unicode/char/008f/index.htm",
	excerpt: "bad character - single shift three",
	scope: "all"
},
	"bad-character-single-shift-two": {
	description: "http://www.fileformat.info/info/unicode/char/008e/index.htm",
	excerpt: "bad character - single shift two",
	scope: "all"
},
	"bad-character-start-of-heading": {
	description: "https://www.fileformat.info/info/unicode/char/0001/index.htm",
	excerpt: "bad character - start of heading",
	scope: "all"
},
	"bad-character-start-of-protected-area": {
	description: "http://www.fileformat.info/info/unicode/char/0096/index.htm",
	excerpt: "bad character - start of protected area",
	scope: "all"
},
	"bad-character-start-of-selected-area": {
	description: "http://www.fileformat.info/info/unicode/char/0086/index.htm",
	excerpt: "bad character - start of selected area",
	scope: "all"
},
	"bad-character-start-of-string": {
	description: "http://www.fileformat.info/info/unicode/char/0098/index.htm",
	excerpt: "bad character - start of string",
	scope: "all"
},
	"bad-character-start-of-text": {
	description: "https://www.fileformat.info/info/unicode/char/0002/index.htm",
	excerpt: "bad character - start of text",
	scope: "all"
},
	"bad-character-string-terminator": {
	description: "http://www.fileformat.info/info/unicode/char/009c/index.htm",
	excerpt: "bad character - string terminator",
	scope: "all"
},
	"bad-character-substitute": {
	description: "https://www.fileformat.info/info/unicode/char/001a/index.htm",
	excerpt: "bad character - substitute",
	scope: "all"
},
	"bad-character-synchronous-idle": {
	description: "https://www.fileformat.info/info/unicode/char/0016/index.htm",
	excerpt: "bad character - synchronous idle",
	scope: "all"
},
	"bad-character-unencoded-ampersand": {
	description: "There is unencoded ampersand",
	excerpt: "unencoded ampersand",
	scope: "html"
},
	"bad-character-unencoded-closing-bracket": {
	description: "There is unencoded closing bracket",
	excerpt: "unencoded closing bracket",
	scope: "html"
},
	"bad-character-unencoded-double-quotes": {
	description: "There is unencoded double quotes",
	excerpt: "unencoded double quotes",
	scope: "html"
},
	"bad-character-unencoded-non-breaking-space": {
	description: "http://www.fileformat.info/info/unicode/char/00a0/index.htm",
	excerpt: "bad character - unencoded non-breaking space",
	scope: "all"
},
	"bad-character-unencoded-opening-bracket": {
	description: "There is unencoded opening bracket",
	excerpt: "unencoded opening bracket",
	scope: "html"
},
	"bad-character-zero-width-space": {
	description: "https://www.fileformat.info/info/unicode/char/200b/index.htm",
	excerpt: "bad character - zero width space",
	scope: "all"
}
};

var lowAsciiCharacterNames = ["null", "start-of-heading", "start-of-text", "end-of-text", "end-of-transmission", "enquiry", "acknowledge", "bell", "backspace", "character-tabulation", "line-feed", "line-tabulation", "form-feed", "carriage-return", "shift-out", "shift-in", "data-link-escape", "device-control-one", "device-control-two", "device-control-three", "device-control-four", "negative-acknowledge", "synchronous-idle", "end-of-transmission-block", "cancel", "end-of-medium", "substitute", "escape", "information-separator-four", "information-separator-three", "information-separator-two", "information-separator-one", "space", "exclamation-mark"];
var c1CharacterNames = ["delete", "padding", "high-octet-preset", "break-permitted-here", "no-break-here", "index", "next-line", "start-of-selected-area", "end-of-selected-area", "character-tabulation-set", "character-tabulation-with-justification", "line-tabulation-set", "partial-line-forward", "partial-line-backward", "reverse-line-feed", "single-shift-two", "single-shift-three", "device-control-string", "private-use-1", "private-use-2", "set-transmit-state", "cancel-character", "message-waiting", "start-of-protected-area", "end-of-protected-area", "start-of-string", "single-graphic-character-introducer", "single-character-intro-introducer", "control-sequence-introducer", "string-terminator", "operating-system-command", "private-message", "application-program-command"];
function charSuitableForAttrName(char) {
  var res = !"\"'><=".includes(char);
  return res;
}
function onlyTheseLeadToThat(str) {
  var charWePassValidatorFuncArr = arguments.length > 2 ? arguments[2] : undefined;
  var breakingCharValidatorFuncArr = arguments.length > 3 ? arguments[3] : undefined;
  var terminatorCharValidatorFuncArr = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  if (typeof charWePassValidatorFuncArr === "function") {
    charWePassValidatorFuncArr = [charWePassValidatorFuncArr];
  }
  if (typeof breakingCharValidatorFuncArr === "function") {
    breakingCharValidatorFuncArr = [breakingCharValidatorFuncArr];
  }
  if (typeof terminatorCharValidatorFuncArr === "function") {
    terminatorCharValidatorFuncArr = [terminatorCharValidatorFuncArr];
  }
  var lastRes = false;
  var _loop = function _loop(i, len) {
    if (breakingCharValidatorFuncArr.some(function (func) {
      return func(str[i], i);
    })) {
      if (!terminatorCharValidatorFuncArr) {
        return {
          v: i
        };
      }
      lastRes = i;
    }
    if (terminatorCharValidatorFuncArr !== null && lastRes && terminatorCharValidatorFuncArr.some(function (func) {
      return func(str[i], i);
    })) {
      return {
        v: lastRes
      };
    }
    if (!charWePassValidatorFuncArr.some(function (func) {
      return func(str[i], i);
    }) && !breakingCharValidatorFuncArr.some(function (func) {
      return func(str[i], i);
    })) {
      return {
        v: false
      };
    }
  };
  for (var i = 0, len = str.length; i < len; i++) {
    var _ret = _loop(i, len);
    if (_typeof(_ret) === "object") return _ret.v;
  }
}
function onlyAttrFriendlyCharsLeadingToEqual(str) {
  var idx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return onlyTheseLeadToThat(str, idx, charSuitableForAttrName,
  function (char) {
    return char === "=";
  }
  );
}
function charIsQuote(char) {
  var res = "\"'`\u2018\u2019\u201C\u201D".includes(char);
  return res;
}
function isTagChar(char) {
  if (typeof char !== "string" || char.length > 1) {
    throw new Error("emlint/util/isTagChar(): input is not a single string character!");
  }
  return !"><=".includes(char);
}
function isLowerCaseLetter(char) {
  return isStr(char) && char.length === 1 && char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123;
}
function isUppercaseLetter(char) {
  return isStr(char) && char.length === 1 && char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91;
}
function isStr(something) {
  return typeof something === "string";
}
function isLatinLetter(char) {
  return isStr(char) && char.length === 1 && (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91 || char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123);
}
function charSuitableForTagName(char) {
  return isLowerCaseLetter(char) || char === ":";
}
function withinTagInnerspace(str, idx, closingQuotePos) {
  if (typeof idx !== "number") {
    if (idx == null) {
      idx = 0;
    } else {
      throw new Error("emlint/util.js/withinTagInnerspace(): second argument is of a type ".concat(_typeof(idx)));
    }
  }
  var quotes = {
    at: null,
    last: false,
    precedes: false,
    within: false
  };
  var beginningOfAString = true;
  var r2_1 = false;
  var r2_2 = false;
  var r2_3 = false;
  var r2_4 = false;
  var r3_1 = false;
  var r3_2 = false;
  var r3_3 = false;
  var r3_4 = false;
  var r3_5 = false;
  var r4_1 = false;
  var r5_1 = false;
  var r5_2 = false;
  var r5_3 = false;
  var r6_1 = false;
  var r6_2 = false;
  var r6_3 = false;
  var r7_1 = false;
  for (var i = idx, len = str.length; i < len; i++) {
    var charcode = str[i].charCodeAt(0);
    if (!str[i].trim().length) {
      if (quotes.last) {
        quotes.precedes = true;
      }
    }
    if (str[i] === ">") ;
    if (str[i] === "/") ;
    if (str[i] === ">") ;
    if (charIsQuote(str[i])) {
      if (quotes.at === null) {
        quotes.within = true;
        quotes.at = i;
      } else if (str[i] === str[quotes.at] || i === closingQuotePos) {
        quotes.within = false;
      }
      quotes.last = true;
    } else if (quotes.last) {
      quotes.precedes = true;
      quotes.last = false;
    } else {
      quotes.precedes = false;
    }
    if (quotes.at && !quotes.within && quotes.precedes && str[i] !== str[quotes.at]) {
      quotes.at = null;
    }
    if (!quotes.within && beginningOfAString && str[i] === "/" && ">".includes(str[stringLeftRight.right(str, i)])) {
      return true;
    }
    if (!quotes.within && beginningOfAString && str[i] === ">" && !r3_1) {
      r3_1 = true;
      if (!str[i + 1] || !stringLeftRight.right(str, i) || !str.slice(i).includes("'") && !str.slice(i).includes('"')) {
        return true;
      } else if (str[stringLeftRight.right(str, i)] === "<") {
        return true;
      }
    }
    else if (r3_1 && !r3_2 && str[i].trim().length && !isTagChar(str[i])) {
        if (str[i] === "<") {
          r3_2 = true;
        } else {
          r3_1 = false;
        }
      }
      else if (r3_2 && !r3_3 && str[i].trim().length) {
          if (charSuitableForTagName(str[i]) || str[i] === "/") {
            r3_3 = true;
          } else {
            r3_1 = false;
            r3_2 = false;
          }
        }
        else if (r3_3 && !r3_4 && str[i].trim().length && !charSuitableForTagName(str[i])) {
            if ("<>".includes(str[i]) || str[i] === "/" && "<>".includes(stringLeftRight.right(str, i))) {
              return true;
            } else if ("='\"".includes(str[i])) {
              r3_1 = false;
              r3_2 = false;
              r3_3 = false;
            }
          }
          else if (r3_3 && !r3_4 && !str[i].trim().length) {
              r3_4 = true;
            }
            else if (r3_4 && !r3_5 && str[i].trim().length) {
                if (charSuitableForAttrName(str[i])) {
                  r3_5 = true;
                } else {
                  r3_1 = false;
                  r3_2 = false;
                  r3_3 = false;
                  r3_4 = false;
                }
              }
              else if (r3_5) {
                  if (!str[i].trim().length || str[i] === "=" || charIsQuote(str[i])) {
                    return true;
                  }
                }
    if (!quotes.within && beginningOfAString && charSuitableForAttrName(str[i]) && !r2_1 && (str[stringLeftRight.left(str, i)] !== "=" || onlyAttrFriendlyCharsLeadingToEqual(str, i))) {
      r2_1 = true;
    }
    else if (!r2_2 && r2_1 && str[i].trim().length && !charSuitableForAttrName(str[i])) {
        if (str[i] === "=") {
          r2_2 = true;
        } else if (str[i] === ">" || str[i] === "/" && str[stringLeftRight.right(str, i)] === ">") {
          var closingBracketAt = i;
          if (str[i] === "/") {
            closingBracketAt = str[stringLeftRight.right(str, i)];
          }
          if (stringLeftRight.right(str, closingBracketAt)) {
            r3_1 = true;
            r2_1 = false;
          } else {
            return true;
          }
        } else {
          r2_1 = false;
        }
      }
      else if (!r2_3 && r2_2 && str[i].trim().length) {
          if ("'\"".includes(str[i])) {
            r2_3 = true;
          } else {
            r2_1 = false;
            r2_2 = false;
          }
        }
        else if (r2_3 && charIsQuote(str[i])) {
            if (str[i] === str[quotes.at]) {
              r2_4 = true;
            } else {
              if (closingQuotePos != null && closingQuotePos === i) {
                if (isStr(str[quotes.at]) && "\"'".includes(str[quotes.at]) && "\"'".includes(str[i])) {
                  r2_4 = true;
                } else if (isStr(str[quotes.at]) && "\u2018\u2019".includes(str[quotes.at]) && "\u2018\u2019".includes(str[i])) {
                  r2_4 = true;
                } else if (isStr(str[quotes.at]) && "\u201C\u201D".includes(str[quotes.at]) && "\u201C\u201D".includes(str[i])) {
                  r2_4 = true;
                }
              } else if (closingQuotePos == null && withinTagInnerspace(str, null, i)) {
                if (quotes.within) {
                  quotes.within = false;
                }
                r2_4 = true;
              }
            }
          }
          else if (r2_4 && !quotes.within && str[i].trim().length && str[i] !== "/") {
              if (str[i] === ">") {
                return true;
              } else if (charSuitableForAttrName(str[i])) {
                return true;
              }
            }
    if (!quotes.within && beginningOfAString && !r4_1 && charSuitableForAttrName(str[i]) && (str[stringLeftRight.left(str, i)] !== "=" || onlyAttrFriendlyCharsLeadingToEqual(str, i))) {
      r4_1 = true;
    }
    else if (r4_1 && str[i].trim().length && (!charSuitableForAttrName(str[i]) || str[i] === "/")) {
        if (str[i] === "/" && str[stringLeftRight.right(str, i)] === ">") {
          return true;
        }
        r4_1 = false;
      }
    if (beginningOfAString && !quotes.within && !r5_1 && str[i].trim().length && charSuitableForAttrName(str[i])) {
      r5_1 = true;
    }
    else if (r5_1 && !r5_2 && str[i].trim().length && !charSuitableForAttrName(str[i])) {
        if (str[i] === "=") {
          r5_2 = true;
        } else {
          r5_1 = false;
        }
      }
      else if (r5_2 && !r5_3 && str[i].trim().length) {
          if (str[i] === ">") {
            r5_3 = true;
          } else {
            r5_1 = false;
            r5_2 = false;
          }
        }
        else if (r5_3 && str[i].trim().length && !isTagChar(str[i])) {
            if (str[i] === "<") {
              r3_2 = true;
            } else {
              r5_1 = false;
              r5_2 = false;
              r5_3 = false;
            }
          }
    if (!quotes.within && !r6_1 && (charSuitableForAttrName(str[i]) || !str[i].trim().length) && !charSuitableForAttrName(str[i - 1]) && str[i - 1] !== "=") {
      r6_1 = true;
    }
    if (!quotes.within && r6_1 && !r6_2 && str[i].trim().length && !charSuitableForAttrName(str[i])) {
      if (str[i] === "=") {
        r6_2 = true;
      } else {
        r6_1 = false;
      }
    }
    else if (!r6_3 && r6_2 && str[i].trim().length) {
        if (charIsQuote(str[i])) {
          r6_3 = true;
        } else {
          r6_1 = false;
          r6_2 = false;
        }
      }
      else if (r6_3 && charIsQuote(str[i])) {
          if (str[i] === str[quotes.at]) {
            return true;
          }
          else if (str[i + 1] && "/>".includes(str[stringLeftRight.right(str, i)])) {
              return true;
            }
        }
    if (beginningOfAString && str[i].trim().length && charSuitableForAttrName(str[i]) && !r7_1
    ) {
        r7_1 = true;
      }
    if (r7_1 && !str[i].trim().length && str[i + 1] && charSuitableForAttrName(str[i + 1])) {
      r7_1 = false;
    }
    if (!quotes.within && str[i].trim().length && !charSuitableForAttrName(str[i]) && r7_1
    ) {
        if (str[i] === "=") {
          return true;
        }
        r7_1 = false;
      }
    if (beginningOfAString && str[i].trim().length) {
      beginningOfAString = false;
    }
  }
  return false;
}
function tagOnTheRight(str) {
  var idx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var r1 = /^<\s*\w+\s*\/?\s*>/g;
  var r2 = /^<\s*\w+\s+\w+\s*=\s*['"]/g;
  var r3 = /^<\s*\/?\s*\w+\s*\/?\s*>/g;
  var r4 = /^<\s*\w+(?:\s*\w+)*\s*\w+=['"]/g;
  var whatToTest = idx ? str.slice(idx) : str;
  var passed = false;
  if (r1.test(whatToTest)) {
    passed = true;
  } else if (r2.test(whatToTest)) {
    passed = true;
  } else if (r3.test(whatToTest)) {
    passed = true;
  } else if (r4.test(whatToTest)) {
    passed = true;
  }
  var res = isStr(str) && idx < str.length && passed;
  return res;
}
function attributeOnTheRight(str) {
  var idx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var closingQuoteAt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var startingQuoteVal = str[idx];
  if (startingQuoteVal !== "'" && startingQuoteVal !== '"') {
    throw new Error("1 emlint/util/attributeOnTheRight(): first character is not a single/double quote!\nstartingQuoteVal = ".concat(JSON.stringify(startingQuoteVal, null, 0), "\nstr = ").concat(JSON.stringify(str, null, 4), "\nidx = ").concat(JSON.stringify(idx, null, 0)));
  }
  var closingQuoteMatched = false;
  var lastClosingBracket = null;
  var lastOpeningBracket = null;
  var lastSomeQuote = null;
  var lastEqual = null;
  for (var i = idx, len = str.length; i < len; i++) {
    var charcode = str[i].charCodeAt(0);
    if (i === closingQuoteAt && i > idx || closingQuoteAt === null && i > idx && str[i] === startingQuoteVal) {
      closingQuoteAt = i;
      if (!closingQuoteMatched) {
        closingQuoteMatched = true;
      }
    }
    if (str[i] === ">") {
      lastClosingBracket = i;
    }
    if (str[i] === "<") {
      lastOpeningBracket = i;
    }
    if (str[i] === "=") {
      lastEqual = i;
    }
    if (str[i] === "'" || str[i] === '"') {
      lastSomeQuote = i;
    }
    if (str[i] === "=" && (str[i + 1] === "'" || str[i + 1] === '"')) {
      if (closingQuoteMatched) {
        if (!lastClosingBracket || lastClosingBracket < closingQuoteAt) {
          return closingQuoteAt;
        }
      } else {
        if (closingQuoteAt) {
          return false;
        }
        if (lastSomeQuote !== 0 && str[i + 1] !== lastSomeQuote) {
          var correctionsRes1 = attributeOnTheRight(str, idx, lastSomeQuote);
          if (correctionsRes1) {
            return lastSomeQuote;
          }
        }
        var correctionsRes2 = attributeOnTheRight(str, i + 1);
        if (correctionsRes2) {
          return false;
        }
      }
    }
    if (closingQuoteMatched && lastClosingBracket && lastClosingBracket > closingQuoteMatched) {
      return closingQuoteAt;
    }
    if (closingQuoteMatched && lastClosingBracket === null && lastOpeningBracket === null && (lastSomeQuote === null || lastSomeQuote && closingQuoteAt >= lastSomeQuote) && lastEqual === null) {
      return closingQuoteAt;
    }
    if (!str[i + 1]) ;
  }
  if (lastSomeQuote && closingQuoteAt === null) {
    var correctionsRes3 = attributeOnTheRight(str, idx, lastSomeQuote);
    if (correctionsRes3) {
      return lastSomeQuote;
    }
  }
  return false;
}
function findClosingQuote(str) {
  var idx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var lastNonWhitespaceCharWasQuoteAt = null;
  var lastQuoteAt = null;
  var startingQuote = "\"'".includes(str[idx]) ? str[idx] : null;
  var lastClosingBracketAt = null;
  for (var i = idx, len = str.length; i < len; i++) {
    var charcode = str[i].charCodeAt(0);
    if (charcode === 34 || charcode === 39) {
      if (str[i] === startingQuote && i > idx) {
        return i;
      }
      lastNonWhitespaceCharWasQuoteAt = i;
      lastQuoteAt = i;
      if (i > idx && (str[i] === "'" || str[i] === '"') && withinTagInnerspace(str, i + 1)) {
        return i;
      }
      if (tagOnTheRight(str, i + 1)) {
        return i;
      }
    }
    else if (str[i].trim().length) {
        if (str[i] === ">") {
          lastClosingBracketAt = i;
          if (lastNonWhitespaceCharWasQuoteAt !== null) {
            var temp = withinTagInnerspace(str, i);
            if (temp) {
              if (lastNonWhitespaceCharWasQuoteAt === idx) {
                return lastNonWhitespaceCharWasQuoteAt + 1;
              }
              return lastNonWhitespaceCharWasQuoteAt;
            }
          }
        } else if (str[i] === "=") {
          var whatFollowsEq = stringLeftRight.right(str, i);
          if (whatFollowsEq && charIsQuote(str[whatFollowsEq])) {
            if (lastQuoteAt && withinTagInnerspace(str, lastQuoteAt + 1)) {
              return lastQuoteAt + 1;
            } else if (!lastQuoteAt) {
              var startingPoint = str[i - 1].trim().length ? i - 1 : stringLeftRight.left(str, i);
              var res = void 0;
              for (var y = startingPoint; y--;) {
                if (!str[y].trim().length) {
                  res = stringLeftRight.left(str, y) + 1;
                  break;
                }
              }
              return res;
            }
          } else if (str[i + 1].trim().length) {
            var _temp = void 0;
            for (var _y = i; _y--;) {
              if (!str[_y].trim().length) {
                _temp = stringLeftRight.left(str, _y);
                break;
              }
            }
            if (charIsQuote(_temp)) {
              return _temp;
            }
            return _temp + 1;
          }
        } else if (str[i] !== "/") {
          if (str[i] === "<" && tagOnTheRight(str, i)) {
            if (lastClosingBracketAt !== null) {
              return lastClosingBracketAt;
            }
          }
          if (lastNonWhitespaceCharWasQuoteAt !== null) {
            lastNonWhitespaceCharWasQuoteAt = null;
          }
        }
      }
  }
  return null;
}
function encodeChar(str, i) {
  if (str[i] === "&" && (!str[i + 1] || str[i + 1] !== "a") && (!str[i + 2] || str[i + 2] !== "m") && (!str[i + 3] || str[i + 3] !== "p") && (!str[i + 3] || str[i + 3] !== ";")) {
    return {
      name: "bad-character-unencoded-ampersand",
      position: [[i, i + 1, "&amp;"]]
    };
  } else if (str[i] === "<") {
    return {
      name: "bad-character-unencoded-opening-bracket",
      position: [[i, i + 1, "&lt;"]]
    };
  } else if (str[i] === ">") {
    return {
      name: "bad-character-unencoded-closing-bracket",
      position: [[i, i + 1, "&gt;"]]
    };
  } else if (str[i] === '"') {
    return {
      name: "bad-character-unencoded-double-quotes",
      position: [[i, i + 1, "&quot;"]]
    };
  } else if (str[i] === "`") {
    return {
      name: "bad-character-grave-accent",
      position: [[i, i + 1, "&#x60;"]]
    };
  } else if (str[i] === "\xA3") {
    return {
      name: "bad-character-unencoded-pound",
      position: [[i, i + 1, "&pound;"]]
    };
  } else if (str[i] === "\u20AC") {
    return {
      name: "bad-character-unencoded-euro",
      position: [[i, i + 1, "&euro;"]]
    };
  } else if (str[i] === "\xA2") {
    return {
      name: "bad-character-unencoded-cent",
      position: [[i, i + 1, "&cent;"]]
    };
  }
  return null;
}

var isArr = Array.isArray;
var attributeOnTheRight$1 = attributeOnTheRight,
    withinTagInnerspace$1 = withinTagInnerspace,
    findClosingQuote$1 = findClosingQuote,
    tagOnTheRight$1 = tagOnTheRight,
    charIsQuote$1 = charIsQuote,
    encodeChar$1 = encodeChar,
    isStr$1 = isStr;
function lint(str, originalOpts) {
  function pingTag(logTag) {}
  if (!isStr$1(str)) {
    throw new Error("emlint: [THROW_ID_01] the first input argument must be a string. It was given as:\n".concat(JSON.stringify(str, null, 4), " (type ").concat(_typeof(str), ")"));
  }
  var defaults = {
    rules: {},
    style: {
      line_endings_CR_LF_CRLF: null
    }
  };
  var opts;
  if (originalOpts) {
    if (isObj(originalOpts)) {
      opts = Object.assign({}, defaults, originalOpts);
      checkTypes(opts, defaults, {
        enforceStrictKeyset: true,
        msg: "emlint: [THROW_ID_03*]",
        ignorePaths: "rules.*",
        schema: {
          rules: ["string", "object", "false", "null", "undefined"],
          style: ["object", "null", "undefined"],
          "style.line_endings_CR_LF_CRLF": ["string", "null", "undefined"]
        }
      });
      if (opts.style && isStr$1(opts.style.line_endings_CR_LF_CRLF)) {
        if (opts.style.line_endings_CR_LF_CRLF.toLowerCase() === "cr") {
          if (opts.style.line_endings_CR_LF_CRLF !== "CR") {
            opts.style.line_endings_CR_LF_CRLF === "CR";
          }
        } else if (opts.style.line_endings_CR_LF_CRLF.toLowerCase() === "lf") {
          if (opts.style.line_endings_CR_LF_CRLF !== "LF") {
            opts.style.line_endings_CR_LF_CRLF === "LF";
          }
        } else if (opts.style.line_endings_CR_LF_CRLF.toLowerCase() === "crlf") {
          if (opts.style.line_endings_CR_LF_CRLF !== "CRLF") {
            opts.style.line_endings_CR_LF_CRLF === "CRLF";
          }
        } else {
          throw new Error("emlint: [THROW_ID_04] opts.style.line_endings_CR_LF_CRLF should be either falsey or string \"CR\" or \"LF\" or \"CRLF\". It was given as:\n".concat(JSON.stringify(opts.style.line_endings_CR_LF_CRLF, null, 4), " (type is string)"));
        }
      }
    } else {
      throw new Error("emlint: [THROW_ID_02] the second input argument must be a plain object. It was given as:\n".concat(JSON.stringify(originalOpts, null, 4), " (type ").concat(_typeof(originalOpts), ")"));
    }
  } else {
    opts = clone(defaults);
  }
  var rawEnforcedEOLChar;
  if (opts.style && isStr$1(opts.style.line_endings_CR_LF_CRLF)) {
    if (opts.style.line_endings_CR_LF_CRLF.toLowerCase() === "cr") {
      rawEnforcedEOLChar = "\r";
    } else if (opts.style.line_endings_CR_LF_CRLF.toLowerCase() === "crlf") {
      rawEnforcedEOLChar = "\r\n";
    } else {
      rawEnforcedEOLChar = "\n";
    }
  }
  var doNothingUntil = null;
  var doNothingUntilReason = null;
  var logTag;
  var defaultLogTag = {
    tagStartAt: null,
    tagEndAt: null,
    tagNameStartAt: null,
    tagNameEndAt: null,
    tagName: null,
    recognised: null,
    closing: null,
    pureHTML: true,
    attributes: []
  };
  function resetLogTag() {
    logTag = clone(defaultLogTag);
  }
  resetLogTag();
  var logAttr;
  var defaultLogAttr = {
    attrStartAt: null,
    attrEndAt: null,
    attrNameStartAt: null,
    attrNameEndAt: null,
    attrName: null,
    attrValue: null,
    attrValueStartAt: null,
    attrValueEndAt: null,
    attrEqualAt: null,
    attrOpeningQuote: {
      pos: null,
      val: null
    },
    attrClosingQuote: {
      pos: null,
      val: null
    },
    recognised: null,
    pureHTML: true
  };
  function resetLogAttr() {
    logAttr = clone(defaultLogAttr);
  }
  resetLogAttr();
  var logEspTag;
  var defaultEspTag = {
    headStartAt: null,
    headEndAt: null,
    headVal: null,
    tailStartAt: null,
    tailEndAt: null,
    tailVal: null,
    startAt: null,
    endAt: null,
    recognised: null
  };
  function resetEspTag() {
    logEspTag = clone(defaultEspTag);
  }
  resetEspTag();
  var logWhitespace;
  var defaultLogWhitespace = {
    startAt: null,
    includesLinebreaks: false,
    lastLinebreakAt: null
  };
  function resetLogWhitespace() {
    logWhitespace = clone(defaultLogWhitespace);
  }
  resetLogWhitespace();
  var tagIssueStaging = [];
  var rawIssueStaging = [];
  var retObj = {
    issues: [],
    applicableRules: {}
  };
  Object.keys(errorsRules).concat(Object.keys(errorsCharacters)).sort().forEach(function (ruleName) {
    retObj.applicableRules[ruleName] = false;
  });
  function submit(issueObj, whereTo) {
    if (whereTo !== "raw" && whereTo !== "tag") {
      retObj.applicableRules[issueObj.name] = true;
    }
    if (!opts.rules.hasOwnProperty(issueObj.name) || opts.rules[issueObj.name]) {
      if (whereTo === "raw") {
        rawIssueStaging.push(issueObj);
      } else if (whereTo === "tag") {
        tagIssueStaging.push(issueObj);
      } else {
        retObj.issues.push(issueObj);
      }
    }
  }
  var logLineEndings = {
    cr: [],
    lf: [],
    crlf: []
  };
  var espChars = "{}%-$_()";
  var withinQuotes = null;
  var withinQuotesEndAt = null;
  if (str.length === 0) {
    submit({
      name: "file-empty",
      position: [[0, 0]]
    });
  }
  var _loop = function _loop(_i, len) {
    var charcode = str[_i].charCodeAt(0);
    if (doNothingUntil && doNothingUntil !== true && _i >= doNothingUntil) {
      doNothingUntil = null;
      doNothingUntilReason = null;
    }
    if (str[_i + 4] && str[_i].toLowerCase() === "c" && str[_i + 1].toLowerCase() === "d" && str[_i + 2].toLowerCase() === "a" && str[_i + 3].toLowerCase() === "t" && str[_i + 4].toLowerCase() === "a" && str[stringLeftRight.right(str, _i + 4)] === "[") {
      var leftSquareBracketAt = null;
      var exclMarkAt = null;
      var leftOpeningBracketAt = null;
      var openingBracketAt = stringLeftRight.right(str, _i + 4);
      var whatsOnTheLeftOfC = stringLeftRight.left(str, _i);
      if (whatsOnTheLeftOfC !== null && str[whatsOnTheLeftOfC] === "[") {
        leftSquareBracketAt = whatsOnTheLeftOfC;
        var whatsOnTheLeftOfBracket = stringLeftRight.left(str, whatsOnTheLeftOfC);
        if (whatsOnTheLeftOfBracket !== null && str[whatsOnTheLeftOfBracket] === "!") {
          exclMarkAt = whatsOnTheLeftOfBracket;
          var whatsOnTheLeftOfExclMark = stringLeftRight.left(str, whatsOnTheLeftOfBracket);
          if (whatsOnTheLeftOfExclMark !== null && str[whatsOnTheLeftOfExclMark] === "<") {
            leftOpeningBracketAt = whatsOnTheLeftOfExclMark;
            if (str.slice(_i, _i + 5) !== "CDATA") {
              submit({
                name: "bad-cdata-tag-character-case",
                position: [[_i, _i + 5, "CDATA"]]
              });
            }
            if (leftSquareBracketAt < _i - 1) {
              submit({
                name: "bad-cdata-whitespace",
                position: [[leftSquareBracketAt + 1, _i]]
              });
            }
            if (exclMarkAt < leftSquareBracketAt - 1) {
              submit({
                name: "bad-cdata-whitespace",
                position: [[exclMarkAt + 1, leftSquareBracketAt]]
              });
            }
            if (leftOpeningBracketAt < exclMarkAt - 1) {
              submit({
                name: "bad-cdata-whitespace",
                position: [[leftOpeningBracketAt + 1, exclMarkAt]]
              });
            }
            if (openingBracketAt !== _i + 5) {
              submit({
                name: "bad-cdata-whitespace",
                position: [[_i + 5, openingBracketAt]]
              });
            }
            doNothingUntil = true;
            doNothingUntilReason = "cdata";
            if (rawIssueStaging.length) {
              rawIssueStaging.forEach(function (issueObj) {
                if (issueObj.position[0][0] < leftOpeningBracketAt) {
                  submit(issueObj);
                }
              });
              rawIssueStaging = [];
            }
          }
        }
      }
    }
    if (doNothingUntil && doNothingUntilReason === "cdata" && str[_i] === "]" && str[_i + 1] === "]" && str[_i + 2] === ">") {
      doNothingUntil = _i + 3;
    }
    if (doNothingUntil === null || doNothingUntil !== null && doNothingUntilReason !== "script tag" || doNothingUntilReason === "script tag" && (str[_i - 1] !== "\\" || str[_i - 2] === "\\")) {
      if (withinQuotes === null && "\"'`".includes(str[_i])) {
        withinQuotes = _i;
      } else if (withinQuotes !== null && str[withinQuotes] === str[_i] && (!withinQuotesEndAt || withinQuotesEndAt === _i)) {
        withinQuotes = null;
        withinQuotesEndAt = null;
      }
    }
    if (withinQuotesEndAt && withinQuotesEndAt === _i) {
      withinQuotes = null;
      withinQuotesEndAt = null;
    }
    if (logEspTag.headStartAt !== null && !espChars.includes(str[_i])) {
      logEspTag.headEndAt = _i;
      logEspTag.headVal = str.slice(logEspTag.headStartAt, _i);
    }
    if (logEspTag.startAt === null && espChars.includes(str[_i]) && str[_i + 1] && espChars.includes(str[_i + 1])) {
      logEspTag.headStartAt = _i;
      logEspTag.startAt = _i;
    }
    if (!doNothingUntil && logTag.tagNameEndAt !== null) {
      if (logAttr.attrNameStartAt !== null && logAttr.attrNameEndAt === null && logAttr.attrName === null && !isLatinLetter(str[_i]) && (str[_i] !== ":" || !isLatinLetter(str[_i + 1]))) {
        logAttr.attrNameEndAt = _i;
        logAttr.attrName = str.slice(logAttr.attrNameStartAt, logAttr.attrNameEndAt);
        if (str[_i] !== "=") {
          if (str[stringLeftRight.right(str, _i)] === "=") ;
        }
      }
      if (logAttr.attrNameEndAt !== null && logAttr.attrEqualAt === null && _i >= logAttr.attrNameEndAt && str[_i].trim().length) {
        var temp;
        if (str[_i] === "'" || str[_i] === '"') {
          temp = attributeOnTheRight$1(str, _i);
        }
        if (str[_i] === "=") {
          logAttr.attrEqualAt = _i;
          if (str[_i + 1]) {
            var nextCharOnTheRightAt = stringLeftRight.right(str, _i);
            if (str[nextCharOnTheRightAt] === "=") {
              var nextEqualStartAt = _i + 1;
              var nextEqualEndAt = nextCharOnTheRightAt + 1;
              doNothingUntil = nextEqualEndAt;
              doNothingUntilReason = "repeated equals";
              while (nextEqualStartAt && nextEqualEndAt) {
                submit({
                  name: "tag-attribute-repeated-equal",
                  position: [[nextEqualStartAt, nextEqualEndAt]]
                });
                var _temp = stringLeftRight.right(str, nextEqualEndAt - 1);
                if (str[_temp] === "=") {
                  nextEqualStartAt = nextEqualEndAt;
                  nextEqualEndAt = _temp + 1;
                  doNothingUntil = nextEqualEndAt;
                  doNothingUntilReason = "already processed equals";
                } else {
                  nextEqualStartAt = null;
                }
              }
            }
          }
        } else if (temp) {
          submit({
            name: "tag-attribute-missing-equal",
            position: [[_i, _i, "="]]
          });
          logAttr.attrEqualAt = _i;
          logAttr.attrValueStartAt = _i + 1;
          logAttr.attrValueEndAt = temp;
          logAttr.attrOpeningQuote.pos = _i;
          logAttr.attrOpeningQuote.val = str[_i];
          logAttr.attrClosingQuote.pos = temp;
          logAttr.attrClosingQuote.val = str[temp];
          logAttr.attrValue = str.slice(_i + 1, temp);
        } else {
          logTag.attributes.push(clone(logAttr));
          resetLogAttr();
        }
        if (logWhitespace.startAt !== null) {
          if (str[_i] === "=") {
            submit({
              name: "tag-attribute-space-between-name-and-equals",
              position: [[logWhitespace.startAt, _i]]
            });
            resetLogWhitespace();
          } else if (isLatinLetter(str[_i])) {
            logTag.attributes.push(clone(logAttr));
            resetLogAttr();
            if (logWhitespace.startAt !== null) {
              if (str[logWhitespace.startAt] === " ") {
                if (logWhitespace.startAt + 1 < _i) {
                  submit({
                    name: "tag-excessive-whitespace-inside-tag",
                    position: [[logWhitespace.startAt + 1, _i]]
                  });
                }
              } else {
                submit({
                  name: "tag-excessive-whitespace-inside-tag",
                  position: [[logWhitespace.startAt, _i, " "]]
                });
              }
            }
          }
        }
      }
      if (logAttr.attrStartAt === null && isLatinLetter(str[_i])) {
        logAttr.attrStartAt = _i;
        logAttr.attrNameStartAt = _i;
        if (logWhitespace.startAt !== null && logWhitespace.startAt < _i - 1) {
          if (str[logWhitespace.startAt] === " ") {
            submit({
              name: "tag-excessive-whitespace-inside-tag",
              position: [[logWhitespace.startAt + 1, _i]]
            });
          } else {
            submit({
              name: "tag-excessive-whitespace-inside-tag",
              position: [[logWhitespace.startAt, _i, " "]]
            });
          }
        }
        if (str[_i - 1]) {
          if (charIsQuote$1(str[_i - 1])) {
            for (var y = _i - 1; y--;) {
              if (!charIsQuote$1(str[y])) {
                if (!str[y].trim().length) {
                  submit({
                    name: "tag-stray-character",
                    position: [[y + 1, _i]]
                  });
                }
                break;
              }
            }
          }
        }
      }
      if (logAttr.attrEqualAt !== null && logAttr.attrOpeningQuote.pos === null) {
        if (logAttr.attrEqualAt < _i && str[_i].trim().length) {
          if (charcode === 34 || charcode === 39) {
            if (logWhitespace.startAt && logWhitespace.startAt < _i) {
              submit({
                name: "tag-attribute-space-between-equals-and-opening-quotes",
                position: [[logWhitespace.startAt, _i]]
              });
            }
            resetLogWhitespace();
            logAttr.attrOpeningQuote.pos = _i;
            logAttr.attrOpeningQuote.val = str[_i];
            var closingQuotePeek = findClosingQuote$1(str, _i);
            if (closingQuotePeek) {
              if (str[closingQuotePeek] !== str[_i]) {
                if (str[closingQuotePeek] === "'" || str[closingQuotePeek] === '"') {
                  var isDouble = str[closingQuotePeek] === '"';
                  var name = "tag-attribute-mismatching-quotes-is-".concat(isDouble ? "double" : "single");
                  submit({
                    name: name,
                    position: [[closingQuotePeek, closingQuotePeek + 1, "".concat(isDouble ? "'" : '"')]]
                  });
                } else {
                  var compensation = "";
                  var fromPositionToInsertAt = str[closingQuotePeek - 1].trim().length ? closingQuotePeek : stringLeftRight.left(str, closingQuotePeek) + 1;
                  var toPositionToInsertAt = closingQuotePeek;
                  if (str[stringLeftRight.left(str, closingQuotePeek)] === "/") {
                    toPositionToInsertAt = stringLeftRight.left(str, closingQuotePeek);
                    if (toPositionToInsertAt + 1 < closingQuotePeek) {
                      submit({
                        name: "tag-whitespace-closing-slash-and-bracket",
                        position: [[toPositionToInsertAt + 1, closingQuotePeek]]
                      });
                    }
                    fromPositionToInsertAt = stringLeftRight.left(str, toPositionToInsertAt) + 1;
                  }
                  submit({
                    name: "tag-attribute-closing-quotation-mark-missing",
                    position: [[fromPositionToInsertAt, toPositionToInsertAt, "".concat(str[_i]).concat(compensation)]]
                  });
                }
              }
              logAttr.attrClosingQuote.pos = closingQuotePeek;
              logAttr.attrClosingQuote.val = str[_i];
              logAttr.attrValue = str.slice(_i + 1, closingQuotePeek);
              logAttr.attrValueStartAt = _i + 1;
              logAttr.attrValueEndAt = closingQuotePeek;
              logAttr.attrEndAt = closingQuotePeek;
              for (var _y = _i + 1; _y < closingQuotePeek; _y++) {
                var newIssue = encodeChar$1(str, _y);
                if (newIssue) {
                  tagIssueStaging.push(newIssue);
                }
              }
              if (rawIssueStaging.length) ;
              if (logAttr.attrNameStartAt && str[logAttr.attrNameStartAt - 1].trim().length && (!opts.rules || opts.rules["tag-stray-character"] !== false) && !retObj.issues.some(function (issueObj) {
                i = _i;
                return (issueObj.name === "tag-stray-quotes" || issueObj.name === "tag-stray-character") && issueObj.position[0][1] === logAttr.attrNameStartAt;
              })) {
                submit({
                  name: "tag-missing-space-before-attribute",
                  position: [[logAttr.attrNameStartAt, logAttr.attrNameStartAt, " "]]
                });
              }
              logTag.attributes.push(clone(logAttr));
              if (str[closingQuotePeek].trim().length) {
                doNothingUntil = closingQuotePeek - (charIsQuote$1(str[closingQuotePeek]) ? 0 : 1) + 1;
              } else {
                doNothingUntil = stringLeftRight.left(str, closingQuotePeek) + 1;
              }
              doNothingUntilReason = "closing quote looked up";
              if (withinQuotes !== null) {
                withinQuotesEndAt = logAttr.attrClosingQuote.pos;
              }
              resetLogAttr();
              if (_i === len - 1 && logTag.tagStartAt !== null && (logAttr.attrEqualAt !== null && logAttr.attrOpeningQuote.pos !== null || logTag.attributes.some(function (attrObj) {
                return attrObj.attrEqualAt !== null && attrObj.attrOpeningQuote.pos !== null;
              }))) {
                submit({
                  name: "tag-missing-closing-bracket",
                  position: [[_i + 1, _i + 1, ">"]]
                });
              }
              i = _i;
              return "continue";
            }
          } else if (charcode === 8220 || charcode === 8221) {
            logAttr.attrOpeningQuote.pos = _i;
            logAttr.attrOpeningQuote.val = "\"";
            var _name = charcode === 8220 ? "tag-attribute-left-double-quotation-mark" : "tag-attribute-right-double-quotation-mark";
            submit({
              name: _name,
              position: [[_i, _i + 1, "\""]]
            });
            logAttr.attrValueStartAt = _i + 1;
            withinQuotes = _i;
          } else if (charcode === 8216 || charcode === 8217) {
            logAttr.attrOpeningQuote.pos = _i;
            logAttr.attrOpeningQuote.val = "'";
            var _name2 = charcode === 8216 ? "tag-attribute-left-single-quotation-mark" : "tag-attribute-right-single-quotation-mark";
            submit({
              name: _name2,
              position: [[_i, _i + 1, "'"]]
            });
            logAttr.attrValueStartAt = _i + 1;
            withinQuotes = _i;
          } else if (!withinTagInnerspace$1(str, _i)) {
            var _closingQuotePeek = findClosingQuote$1(str, _i);
            var quoteValToPut = charIsQuote$1(str[_closingQuotePeek]) ? str[_closingQuotePeek] : "\"";
            submit({
              name: "tag-attribute-opening-quotation-mark-missing",
              position: [[stringLeftRight.left(str, _i) + 1, _i, quoteValToPut]]
            });
            logAttr.attrOpeningQuote = {
              pos: _i,
              val: quoteValToPut
            };
            logAttr.attrValueStartAt = _i;
            withinQuotes = _i;
            var innerTagEndsAt = null;
            for (var _y2 = _i; _y2 < len; _y2++) {
              if (str[_y2] === ">" && (str[stringLeftRight.left(str, _y2)] !== "/" && withinTagInnerspace$1(str, _y2) || str[stringLeftRight.left(str, _y2)] === "/")) {
                var leftAt = stringLeftRight.left(str, _y2);
                innerTagEndsAt = _y2;
                if (str[leftAt] === "/") {
                  innerTagEndsAt = leftAt;
                }
              }
              var dealBrakerCharacters = "=<";
              if (innerTagEndsAt !== null && dealBrakerCharacters.includes(str[_y2])) {
                break;
              }
            }
            var innerTagContents;
            if (_i < innerTagEndsAt) {
              innerTagContents = str.slice(_i, innerTagEndsAt);
            } else {
              innerTagContents = "";
            }
            var startingPoint = innerTagEndsAt;
            var attributeOnTheRightBeginsAt;
            if (innerTagContents.includes("=")) {
              var temp1 = innerTagContents.split("=")[0];
              if (temp1.split("").some(function (char) {
                return !char.trim().length;
              })) {
                for (var z = _i + temp1.length; z--;) {
                  if (!str[z].trim().length) {
                    attributeOnTheRightBeginsAt = z + 1;
                    break;
                  }
                  if (z === _i) {
                    break;
                  }
                }
                var temp2 = stringLeftRight.left(str, attributeOnTheRightBeginsAt);
                if (!charIsQuote$1(temp2)) {
                  startingPoint = temp2 + 1;
                }
              }
            }
            var caughtAttrEnd = null;
            var caughtAttrStart = null;
            var finalClosingQuotesShouldBeAt = null;
            var boolAttrFound = false;
            for (var _z = startingPoint; _z--; _z > _i) {
              if (str[_z] === "=") {
                break;
              }
              if (caughtAttrEnd === null && str[_z].trim().length) {
                caughtAttrEnd = _z + 1;
                if (boolAttrFound) {
                  finalClosingQuotesShouldBeAt = caughtAttrEnd;
                  boolAttrFound = false;
                }
              }
              if (!str[_z].trim().length && caughtAttrEnd) {
                caughtAttrStart = _z + 1;
                if (str[stringLeftRight.right(str, caughtAttrEnd)] === "=") {
                  var _temp2 = stringLeftRight.left(str, caughtAttrStart);
                  if (!charIsQuote$1(str[_temp2])) {
                    attributeOnTheRightBeginsAt = stringLeftRight.right(str, _temp2 + 1);
                  }
                  break;
                } else {
                  if (knownBooleanHTMLAttributes.includes(str.slice(caughtAttrStart, caughtAttrEnd))) {
                    boolAttrFound = true;
                  } else {
                    break;
                  }
                }
                caughtAttrEnd = null;
                caughtAttrStart = null;
              }
            }
            if (!finalClosingQuotesShouldBeAt && attributeOnTheRightBeginsAt) {
              finalClosingQuotesShouldBeAt = stringLeftRight.left(str, attributeOnTheRightBeginsAt) + 1;
            }
            if (caughtAttrEnd && logAttr.attrOpeningQuote && !finalClosingQuotesShouldBeAt && str[stringLeftRight.left(str, caughtAttrEnd)] !== logAttr.attrOpeningQuote.val) {
              finalClosingQuotesShouldBeAt = caughtAttrEnd;
            }
            if (finalClosingQuotesShouldBeAt) {
              submit({
                name: "tag-attribute-closing-quotation-mark-missing",
                position: [[finalClosingQuotesShouldBeAt, finalClosingQuotesShouldBeAt, logAttr.attrOpeningQuote.val]]
              });
              logAttr.attrClosingQuote.pos = finalClosingQuotesShouldBeAt;
              logAttr.attrValueEndAt = finalClosingQuotesShouldBeAt;
              logAttr.attrEndAt = finalClosingQuotesShouldBeAt + 1;
            } else {
              logAttr.attrClosingQuote.pos = stringLeftRight.left(str, caughtAttrEnd);
              logAttr.attrValueEndAt = logAttr.attrClosingQuote.pos;
              logAttr.attrEndAt = caughtAttrEnd;
            }
            logAttr.attrClosingQuote.val = logAttr.attrOpeningQuote.val;
            logAttr.attrValue = str.slice(logAttr.attrOpeningQuote.pos, logAttr.attrClosingQuote.pos);
            if (logAttr.attrValueStartAt < logAttr.attrValueEndAt) {
              for (var _z2 = logAttr.attrValueStartAt; _z2 < logAttr.attrValueEndAt; _z2++) {
                var _temp3 = encodeChar$1(str, _z2);
                if (_temp3) {
                  submit(_temp3);
                }
              }
            }
            if (!doNothingUntil) {
              doNothingUntil = logAttr.attrClosingQuote.pos;
              doNothingUntilReason = "missing opening quotes";
              logWhitespace.startAt = null;
            }
            logTag.attributes.push(clone(logAttr));
            resetLogAttr();
            i = _i;
            return "continue";
          } else {
            var start = logAttr.attrStartAt;
            var _temp4 = stringLeftRight.right(str, _i);
            if (str[_i] === "/" && _temp4 && str[_temp4] === ">" || str[_i] === ">") {
              for (var _y3 = logAttr.attrStartAt; _y3--;) {
                if (str[_y3].trim().length) {
                  start = _y3 + 1;
                  break;
                }
              }
            }
            submit({
              name: "tag-attribute-quote-and-onwards-missing",
              position: [[start, _i]]
            });
            resetLogWhitespace();
            resetLogAttr();
            _i--;
            i = _i;
            return "continue";
          }
          if (logWhitespace.startAt !== null) {
            if (str[_i] === "'" || str[_i] === '"') {
              submit({
                name: "tag-attribute-space-between-equals-and-opening-quotes",
                position: [[logWhitespace.startAt, _i]]
              });
            } else if (withinTagInnerspace$1(str, _i + 1)) {
              submit({
                name: "tag-attribute-quote-and-onwards-missing",
                position: [[logAttr.attrStartAt, _i]]
              });
              resetLogAttr();
            }
          }
        } else if (!str[_i + 1] || !stringLeftRight.right(str, _i)) {
          submit({
            name: "file-missing-ending",
            position: [[_i + 1, _i + 1]]
          });
          i = _i;
          return "continue";
        }
      }
      if (logAttr.attrEqualAt !== null && logAttr.attrOpeningQuote.pos !== null && (logAttr.attrClosingQuote.pos === null || _i === logAttr.attrClosingQuote.pos) && _i > logAttr.attrOpeningQuote.pos && charIsQuote$1(str[_i])) {
        if (charcode === 34 || charcode === 39) {
          var issueName = "tag-attribute-mismatching-quotes-is-".concat(charcode === 34 ? "double" : "single");
          if (str[_i] !== logAttr.attrOpeningQuote.val && (!retObj.issues.length || !retObj.issues.some(function (issueObj) {
            i = _i;
            return issueObj.name === issueName && issueObj.position.length === 1 && issueObj.position[0][0] === _i && issueObj.position[0][1] === _i + 1;
          }))) {
            submit({
              name: issueName,
              position: [[_i, _i + 1, "".concat(charcode === 34 ? "'" : '"')]]
            });
          }
          logAttr.attrClosingQuote.pos = _i;
          logAttr.attrClosingQuote.val = str[_i];
          if (logAttr.attrValue === null) {
            if (logAttr.attrOpeningQuote.pos && logAttr.attrClosingQuote.pos && logAttr.attrOpeningQuote.pos + 1 < logAttr.attrClosingQuote.pos) {
              logAttr.attrValue = str.slice(logAttr.attrValueStartAt, _i);
            } else {
              logAttr.attrValue = "";
            }
          }
          logAttr.attrEndAt = _i;
          logAttr.attrValueEndAt = _i;
          if (withinQuotes) {
            withinQuotes = null;
          }
          logTag.attributes.push(clone(logAttr));
          resetLogAttr();
        } else if (isStr$1(logAttr.attrOpeningQuote.val) && (charcode === 8220 || charcode === 8221)) {
          var _name3 = charcode === 8220 ? "tag-attribute-left-double-quotation-mark" : "tag-attribute-right-double-quotation-mark";
          submit({
            name: _name3,
            position: [[_i, _i + 1, '"']]
          });
          logAttr.attrEndAt = _i;
          logAttr.attrClosingQuote.pos = _i;
          logAttr.attrClosingQuote.val = '"';
          logTag.attributes.push(clone(logAttr));
          resetLogAttr();
        } else if (isStr$1(logAttr.attrOpeningQuote.val) && (charcode === 8216 || charcode === 8217) && (stringLeftRight.right(str, _i) !== null && (str[stringLeftRight.right(str, _i)] === ">" || str[stringLeftRight.right(str, _i)] === "/") || withinTagInnerspace$1(str, _i + 1))) {
          var _name4 = charcode === 8216 ? "tag-attribute-left-single-quotation-mark" : "tag-attribute-right-single-quotation-mark";
          submit({
            name: _name4,
            position: [[_i, _i + 1, "'"]]
          });
          logAttr.attrEndAt = _i;
          logAttr.attrClosingQuote.pos = _i;
          logAttr.attrClosingQuote.val = "'";
          withinQuotes = null;
          withinQuotesEndAt = null;
          logTag.attributes.push(clone(logAttr));
          resetLogAttr();
        }
      }
      if (logAttr.attrOpeningQuote.val && logAttr.attrOpeningQuote.pos < _i && logAttr.attrClosingQuote.pos === null && (
      str[_i] === "/" && stringLeftRight.right(str, _i) && str[stringLeftRight.right(str, _i)] === ">" || str[_i] === ">")) {
        submit({
          name: "tag-attribute-closing-quotation-mark-missing",
          position: [[_i, _i, logAttr.attrOpeningQuote.val]]
        });
        logAttr.attrClosingQuote.pos = _i;
        logAttr.attrClosingQuote.val = logAttr.attrOpeningQuote.val;
        logTag.attributes.push(clone(logAttr));
        resetLogAttr();
      }
    }
    if (!doNothingUntil) {
      if (charcode < 32) {
        var _name5 = "bad-character-".concat(lowAsciiCharacterNames[charcode]);
        if (charcode === 9) {
          submit({
            name: _name5,
            position: [[_i, _i + 1, "  "]]
          });
        } else if (charcode === 13) {
          if (isStr$1(str[_i + 1]) && str[_i + 1].charCodeAt(0) === 10) {
            if (opts.style && opts.style.line_endings_CR_LF_CRLF && opts.style.line_endings_CR_LF_CRLF !== "CRLF") {
              submit({
                name: "file-wrong-type-line-ending-CRLF",
                position: [[_i, _i + 2, rawEnforcedEOLChar]]
              });
            } else {
              logLineEndings.crlf.push([_i, _i + 2]);
            }
          } else {
            if (opts.style && opts.style.line_endings_CR_LF_CRLF && opts.style.line_endings_CR_LF_CRLF !== "CR") {
              submit({
                name: "file-wrong-type-line-ending-CR",
                position: [[_i, _i + 1, rawEnforcedEOLChar]]
              });
            } else {
              logLineEndings.cr.push([_i, _i + 1]);
            }
          }
        } else if (charcode === 10) {
          if (!(isStr$1(str[_i - 1]) && str[_i - 1].charCodeAt(0) === 13)) {
            if (opts.style && opts.style.line_endings_CR_LF_CRLF && opts.style.line_endings_CR_LF_CRLF !== "LF") {
              submit({
                name: "file-wrong-type-line-ending-LF",
                position: [[_i, _i + 1, rawEnforcedEOLChar]]
              });
            } else {
              logLineEndings.lf.push([_i, _i + 1]);
            }
          }
        } else {
          var nearestNonWhitespaceCharIdxOnTheLeft = stringLeftRight.left(str, _i);
          var nearestNonWhitespaceCharIdxOnTheRight = stringLeftRight.right(str, _i);
          var addThis;
          if (nearestNonWhitespaceCharIdxOnTheLeft < _i - 1 && (nearestNonWhitespaceCharIdxOnTheRight > _i + 1 || nearestNonWhitespaceCharIdxOnTheRight === null && str[_i + 1] && str[_i + 1] !== "\n" && str[_i + 1] !== "\r" && !str[_i + 1].trim().length)
          ) {
              var tempWhitespace = str.slice(nearestNonWhitespaceCharIdxOnTheLeft + 1, nearestNonWhitespaceCharIdxOnTheRight);
              if (tempWhitespace.includes("\n") || tempWhitespace.includes("\r")) {
                if (opts.style && opts.style.line_endings_CR_LF_CRLF) {
                  addThis = opts.style.line_endings_CR_LF_CRLF;
                } else {
                  addThis = "\n";
                }
              } else {
                addThis = " ";
              }
            }
          if (addThis) {
            submit({
              name: _name5,
              position: [[nearestNonWhitespaceCharIdxOnTheLeft + 1, nearestNonWhitespaceCharIdxOnTheRight, addThis]]
            });
          } else {
            submit({
              name: _name5,
              position: [[_i, _i + 1]]
            });
          }
        }
      } else if (charcode > 126 && charcode < 160) {
        var _name6 = "bad-character-".concat(c1CharacterNames[charcode - 127]);
        submit({
          name: _name6,
          position: [[_i, _i + 1]]
        });
      } else if (charcode === 160) {
        var _name7 = "bad-character-unencoded-non-breaking-space";
        submit({
          name: _name7,
          position: [[_i, _i + 1, "&nbsp;"]]
        });
      } else if (charcode === 5760) {
        var _name8 = "bad-character-ogham-space-mark";
        submit({
          name: _name8,
          position: [[_i, _i + 1, " "]]
        });
      } else if (charcode === 8192) {
        var _name9 = "bad-character-en-quad";
        submit({
          name: _name9,
          position: [[_i, _i + 1, " "]]
        });
      } else if (charcode === 8193) {
        var _name10 = "bad-character-em-quad";
        submit({
          name: _name10,
          position: [[_i, _i + 1, " "]]
        });
      } else if (charcode === 8194) {
        var _name11 = "bad-character-en-space";
        submit({
          name: _name11,
          position: [[_i, _i + 1, " "]]
        });
      } else if (charcode === 8195) {
        var _name12 = "bad-character-em-space";
        submit({
          name: _name12,
          position: [[_i, _i + 1, " "]]
        });
      } else if (charcode === 8196) {
        var _name13 = "bad-character-three-per-em-space";
        submit({
          name: _name13,
          position: [[_i, _i + 1, " "]]
        });
      } else if (charcode === 8197) {
        var _name14 = "bad-character-four-per-em-space";
        submit({
          name: _name14,
          position: [[_i, _i + 1, " "]]
        });
      } else if (charcode === 8198) {
        var _name15 = "bad-character-six-per-em-space";
        submit({
          name: _name15,
          position: [[_i, _i + 1, " "]]
        });
      } else if (charcode === 8199) {
        var _name16 = "bad-character-figure-space";
        submit({
          name: _name16,
          position: [[_i, _i + 1, " "]]
        });
      } else if (charcode === 8200) {
        var _name17 = "bad-character-punctuation-space";
        submit({
          name: _name17,
          position: [[_i, _i + 1, " "]]
        });
      } else if (charcode === 8201) {
        var _name18 = "bad-character-thin-space";
        submit({
          name: _name18,
          position: [[_i, _i + 1, " "]]
        });
      } else if (charcode === 8202) {
        var _name19 = "bad-character-hair-space";
        submit({
          name: _name19,
          position: [[_i, _i + 1, " "]]
        });
      } else if (charcode === 8203) {
        var _name20 = "bad-character-zero-width-space";
        submit({
          name: _name20,
          position: [[_i, _i + 1]]
        });
      } else if (charcode === 8232) {
        var _name21 = "bad-character-line-separator";
        submit({
          name: _name21,
          position: [[_i, _i + 1, "\n"]]
        });
      } else if (charcode === 8233) {
        var _name22 = "bad-character-paragraph-separator";
        submit({
          name: _name22,
          position: [[_i, _i + 1, "\n"]]
        });
      } else if (charcode === 8239) {
        var _name23 = "bad-character-narrow-no-break-space";
        submit({
          name: _name23,
          position: [[_i, _i + 1, " "]]
        });
      } else if (charcode === 8287) {
        var _name24 = "bad-character-medium-mathematical-space";
        submit({
          name: _name24,
          position: [[_i, _i + 1, " "]]
        });
      } else if (charcode === 12288) {
        var _name25 = "bad-character-ideographic-space";
        submit({
          name: _name25,
          position: [[_i, _i + 1, " "]]
        });
      } else if (encodeChar$1(str, _i)) {
        var _newIssue = encodeChar$1(str, _i);
        submit(_newIssue, "raw");
      } else if (charcode >= 888 && charcode <= 8591) {
        if (charcode === 888 || charcode === 889 || charcode >= 896 && charcode <= 899 || charcode === 907 || charcode === 909 || charcode === 930 || charcode === 1328 || charcode === 1367 || charcode === 1368 || charcode === 1419 || charcode === 1419 || charcode === 1420 || charcode === 1424 || charcode >= 1480 && charcode <= 1487 || charcode >= 1515 && charcode <= 1519 || charcode >= 1525 && charcode <= 1535 || charcode === 1565 || charcode === 1806 || charcode === 1867 || charcode === 1868 || charcode >= 1970 && charcode <= 1983 || charcode >= 2043 && charcode <= 2047 || charcode === 2094 || charcode === 2095 || charcode === 2111 || charcode === 2140 || charcode === 2141 || charcode === 2143 || charcode >= 2155 && charcode <= 2207 || charcode === 2229 || charcode >= 2238 && charcode <= 2258 || charcode === 2436 || charcode === 2445 || charcode === 2446 || charcode === 2449 || charcode === 2450 || charcode === 2473 || charcode === 2481 || charcode === 2483 || charcode === 2484 || charcode === 2485 || charcode === 2490 || charcode === 2491 || charcode === 2501 || charcode === 2502 || charcode === 2505 || charcode === 2506 || charcode >= 2511 && charcode <= 2518 || charcode >= 2520 && charcode <= 2523 || charcode === 2526 || charcode >= 8384 && charcode <= 8399 || charcode >= 8433 && charcode <= 8447 || charcode === 8588 || charcode === 8589 || charcode === 8590 || charcode === 8591) {
          var _name26 = "bad-character-generic";
          submit({
            name: _name26,
            position: [[_i, _i + 1]]
          });
        }
      }
    }
    if (!doNothingUntil && logWhitespace.startAt !== null && str[_i].trim().length) {
      if (logTag.tagNameStartAt !== null && logAttr.attrStartAt === null && (!logAttr.attrClosingQuote.pos || logAttr.attrClosingQuote.pos <= _i) && (str[_i] === ">" || str[_i] === "/" && "<>".includes(str[stringLeftRight.right(str, _i)]))) {
        var _name27 = "tag-excessive-whitespace-inside-tag";
        if (str[logWhitespace.startAt - 1] === "/") {
          _name27 = "tag-whitespace-closing-slash-and-bracket";
        }
        submit({
          name: _name27,
          position: [[logWhitespace.startAt, _i]]
        });
      }
    }
    if (!doNothingUntil && !str[_i].trim().length && logWhitespace.startAt === null) {
      logWhitespace.startAt = _i;
    }
    if (!doNothingUntil && str[_i] === "\n" || str[_i] === "\r") {
      if (logWhitespace.startAt !== null && !logWhitespace.includesLinebreaks) {
        logWhitespace.includesLinebreaks = true;
      }
      logWhitespace.lastLinebreakAt = _i;
    }
    if (!doNothingUntil && logTag.tagNameStartAt !== null && logTag.tagNameEndAt === null && !isLatinLetter(str[_i]) && str[_i] !== "<" && str[_i] !== "/") {
      logTag.tagNameEndAt = _i;
      logTag.tagName = str.slice(logTag.tagNameStartAt, _i);
      logTag.recognised = knownHTMLTags.includes(logTag.tagName.toLowerCase());
      if (charIsQuote$1(str[_i]) || str[_i] === "=") {
        var addSpace;
        var strayCharsEndAt = _i + 1;
        if (str[_i + 1].trim().length) {
          if (charIsQuote$1(str[_i + 1]) || str[_i + 1] === "=") {
            for (var _y4 = _i + 1; _y4 < len; _y4++) {
              if (!charIsQuote$1(str[_y4]) && str[_y4] !== "=") {
                if (str[_y4].trim().length) {
                  addSpace = true;
                  strayCharsEndAt = _y4;
                }
                break;
              }
            }
          } else {
            addSpace = true;
          }
        }
        if (addSpace) {
          submit({
            name: "tag-stray-character",
            position: [[_i, strayCharsEndAt, " "]]
          });
        } else {
          submit({
            name: "tag-stray-character",
            position: [[_i, strayCharsEndAt]]
          });
        }
      }
    }
    if (!doNothingUntil && logTag.tagStartAt !== null && logTag.tagNameStartAt === null && isLatinLetter(str[_i]) && logTag.tagStartAt < _i) {
      logTag.tagNameStartAt = _i;
      if (logTag.closing === null) {
        logTag.closing = false;
      }
      if (logTag.tagStartAt < _i - 1 && logWhitespace.startAt !== null) {
        tagIssueStaging.push({
          name: "tag-space-after-opening-bracket",
          position: [[logTag.tagStartAt + 1, _i]]
        });
      }
    }
    if (!doNothingUntil && logTag.tagNameStartAt !== null && logTag.tagNameEndAt === null && isUppercaseLetter(str[_i]) && !str.slice(logTag.tagNameStartAt).toLowerCase().startsWith("doctype")) {
      submit({
        name: "tag-name-lowercase",
        position: [[_i, _i + 1, str[_i].toLowerCase()]]
      });
    }
    if (!doNothingUntil && str[_i] === "/" && logTag.tagStartAt !== null && logTag.tagNameStartAt === null) {
      if (logTag.closing === null) {
        logTag.closing = true;
      }
    }
    if (!doNothingUntil && str[_i] === "<") {
      if (logTag.tagStartAt === null) {
        logTag.tagStartAt = _i;
      } else if (tagOnTheRight$1(str, _i)) {
        if (logTag.tagStartAt !== null && logTag.attributes.length && logTag.attributes.some(function (attrObj) {
          return attrObj.attrEqualAt !== null && attrObj.attrOpeningQuote.pos !== null;
        })) {
          var lastNonWhitespaceOnLeft = stringLeftRight.left(str, _i);
          if (str[lastNonWhitespaceOnLeft] === ">") {
            logTag.tagEndAt = lastNonWhitespaceOnLeft + 1;
          } else {
            submit({
              name: "tag-missing-closing-bracket",
              position: [[lastNonWhitespaceOnLeft + 1, _i, ">"]]
            });
          }
          if (rawIssueStaging.length) {
            rawIssueStaging.forEach(function (issueObj) {
              if (issueObj.position[0][0] < logTag.tagStartAt) {
                submit(issueObj);
              }
            });
          }
          pingTag(clone(logTag));
          resetLogTag();
          resetLogAttr();
          rawIssueStaging = [];
          logTag.tagStartAt = _i;
        } else {
          if (rawIssueStaging.length) {
            rawIssueStaging.forEach(function (issueObj) {
              if (
              issueObj.position[0][0] < _i
              ) {
                  submit(issueObj);
                }
            });
            rawIssueStaging = [];
          }
          if (tagIssueStaging.length) {
            tagIssueStaging = [];
          }
        }
      }
    }
    if (!doNothingUntil && charcode === 62 && logTag.tagStartAt !== null && (!logAttr.attrClosingQuote || logAttr.attrClosingQuote.pos < _i)) {
      if (tagIssueStaging.length) {
        tagIssueStaging.forEach(function (issue) {
          submit(issue);
        });
        tagIssueStaging = [];
      }
      if (rawIssueStaging.length) {
        rawIssueStaging.forEach(function (issueObj) {
          if (issueObj.position[0][0] < logTag.tagStartAt || logTag.attributes.some(function (attrObj) {
            i = _i;
            return attrObj.attrValueStartAt < issueObj.position[0][0] && attrObj.attrValueEndAt > issueObj.position[0][0];
          }) && !retObj.issues.some(function (existingIssue) {
            i = _i;
            return existingIssue.position[0][0] === issueObj.position[0][0] && existingIssue.position[0][1] === issueObj.position[0][1];
          })) {
            submit(issueObj);
          }
        });
        rawIssueStaging = [];
      }
      if (logTag.tagName === "script") {
        doNothingUntil = true;
        doNothingUntilReason = "script tag";
      }
      resetLogTag();
      resetLogAttr();
    }
    if (doNothingUntil && doNothingUntilReason === "script tag" && str[_i] === "t" && str[_i - 1] === "p" && str[_i - 2] === "i" && str[_i - 3] === "r" && str[_i - 4] === "c" && str[_i - 5] === "s" && withinQuotes === null) {
      var charOnTheRight = stringLeftRight.right(str, _i);
      var charOnTheLeft = stringLeftRight.left(str, _i - 5);
      if (str[charOnTheLeft] === "/") {
        var charFurtherOnTheLeft = stringLeftRight.left(str, charOnTheLeft);
      } else if (str[charOnTheLeft] === "<") ;
      doNothingUntil = charOnTheRight + 1;
    }
    if (!doNothingUntil && str[_i].trim().length) {
      resetLogWhitespace();
    }
    if (!str[_i + 1]) {
      if (rawIssueStaging.length) {
        if (logTag.tagStartAt !== null && logTag.attributes.some(function (attrObj) {
          return attrObj.attrEqualAt !== null && attrObj.attrOpeningQuote !== null;
        })) {
          rawIssueStaging.forEach(function (issueObj) {
            if (issueObj.position[0][0] < logTag.tagStartAt) {
              submit(issueObj);
            }
          });
          rawIssueStaging = [];
          submit({
            name: "tag-missing-closing-bracket",
            position: [[logWhitespace.startAt ? logWhitespace.startAt : _i + 1, _i + 1, ">"]]
          });
        } else if (!retObj.issues.some(function (issueObj) {
          return issueObj.name === "file-missing-ending";
        })) {
          rawIssueStaging.forEach(function (issueObj) {
            submit(issueObj);
          });
          rawIssueStaging = [];
        }
      }
    }
    var retObj_mini = clone(retObj);
    Object.keys(retObj_mini.applicableRules).forEach(function (rule) {
      if (!retObj_mini.applicableRules[rule]) {
        delete retObj_mini.applicableRules[rule];
      }
    });
    i = _i;
  };
  for (var i = 0, len = str.length; i < len; i++) {
    var _ret = _loop(i, len);
    if (_ret === "continue") continue;
  }
  if ((!opts.style || !opts.style.line_endings_CR_LF_CRLF) && (logLineEndings.cr.length && logLineEndings.lf.length || logLineEndings.lf.length && logLineEndings.crlf.length || logLineEndings.cr.length && logLineEndings.crlf.length)) {
    if (logLineEndings.cr.length > logLineEndings.crlf.length && logLineEndings.cr.length > logLineEndings.lf.length) {
      if (logLineEndings.crlf.length) {
        logLineEndings.crlf.forEach(function (eolEntryArr) {
          submit({
            name: "file-mixed-line-endings-file-is-CR-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\r"]]
          });
        });
      }
      if (logLineEndings.lf.length) {
        logLineEndings.lf.forEach(function (eolEntryArr) {
          submit({
            name: "file-mixed-line-endings-file-is-CR-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\r"]]
          });
        });
      }
    } else if (logLineEndings.lf.length > logLineEndings.crlf.length && logLineEndings.lf.length > logLineEndings.cr.length) {
      if (logLineEndings.crlf.length) {
        logLineEndings.crlf.forEach(function (eolEntryArr) {
          submit({
            name: "file-mixed-line-endings-file-is-LF-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\n"]]
          });
        });
      }
      if (logLineEndings.cr.length) {
        logLineEndings.cr.forEach(function (eolEntryArr) {
          submit({
            name: "file-mixed-line-endings-file-is-LF-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\n"]]
          });
        });
      }
    } else if (logLineEndings.crlf.length > logLineEndings.lf.length && logLineEndings.crlf.length > logLineEndings.cr.length) {
      if (logLineEndings.cr.length) {
        logLineEndings.cr.forEach(function (eolEntryArr) {
          submit({
            name: "file-mixed-line-endings-file-is-CRLF-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\r\n"]]
          });
        });
      }
      if (logLineEndings.lf.length) {
        logLineEndings.lf.forEach(function (eolEntryArr) {
          submit({
            name: "file-mixed-line-endings-file-is-CRLF-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\r\n"]]
          });
        });
      }
    } else if (logLineEndings.crlf.length === logLineEndings.lf.length && logLineEndings.lf.length === logLineEndings.cr.length) {
      logLineEndings.crlf.forEach(function (eolEntryArr) {
        submit({
          name: "file-mixed-line-endings-file-is-LF-mainly",
          position: [[eolEntryArr[0], eolEntryArr[1], "\n"]]
        });
      });
      logLineEndings.cr.forEach(function (eolEntryArr) {
        submit({
          name: "file-mixed-line-endings-file-is-LF-mainly",
          position: [[eolEntryArr[0], eolEntryArr[1], "\n"]]
        });
      });
    } else if (logLineEndings.cr.length === logLineEndings.crlf.length && logLineEndings.cr.length > logLineEndings.lf.length) {
      if (logLineEndings.cr.length) {
        logLineEndings.cr.forEach(function (eolEntryArr) {
          submit({
            name: "file-mixed-line-endings-file-is-CRLF-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\r\n"]]
          });
        });
      }
      if (logLineEndings.lf.length) {
        logLineEndings.lf.forEach(function (eolEntryArr) {
          submit({
            name: "file-mixed-line-endings-file-is-CRLF-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\r\n"]]
          });
        });
      }
    } else if (logLineEndings.lf.length === logLineEndings.crlf.length && logLineEndings.lf.length > logLineEndings.cr.length || logLineEndings.cr.length === logLineEndings.lf.length && logLineEndings.cr.length > logLineEndings.crlf.length) {
      if (logLineEndings.cr.length) {
        logLineEndings.cr.forEach(function (eolEntryArr) {
          submit({
            name: "file-mixed-line-endings-file-is-LF-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\n"]]
          });
        });
      }
      if (logLineEndings.crlf.length) {
        logLineEndings.crlf.forEach(function (eolEntryArr) {
          submit({
            name: "file-mixed-line-endings-file-is-LF-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\n"]]
          });
        });
      }
    }
  }
  var htmlEntityFixes = fixBrokenEntities(str, {
    cb: function cb(oodles) {
      return {
        name: oodles.ruleName,
        position: [oodles.rangeValEncoded != null ? [oodles.rangeFrom, oodles.rangeTo, oodles.rangeValEncoded] : [oodles.rangeFrom, oodles.rangeTo]]
      };
    }
  });
  if (isArr(htmlEntityFixes) && htmlEntityFixes.length) {
    retObj.issues = retObj.issues.filter(function (issueObj) {
      return issueObj.name !== "bad-character-unencoded-ampersand" || htmlEntityFixes.every(function (entityFixObj) {
        return issueObj.position[0][0] !== entityFixObj.position[0][0];
      });
    }).concat(htmlEntityFixes ? htmlEntityFixes : []).filter(function (issueObj) {
      return !opts.rules || opts.rules[issueObj.name] !== false;
    });
  }
  if (!retObj.issues.some(function (issueObj) {
    return issueObj.name === "bad-character-unencoded-ampersand";
  })) {
    retObj.applicableRules["bad-character-unencoded-ampersand"] = false;
  }
  if (isArr(htmlEntityFixes) && htmlEntityFixes.length) {
    htmlEntityFixes.forEach(function (issueObj) {
      if (!retObj.applicableRules[issueObj.name]) {
        retObj.applicableRules[issueObj.name] = true;
      }
    });
  }
  retObj.fix = isArr(retObj.issues) && retObj.issues.length ? merge(retObj.issues.reduce(function (acc, obj) {
    return acc.concat(obj.position);
  }, [])) : null;
  return retObj;
}

exports.lint = lint;
exports.version = version;
