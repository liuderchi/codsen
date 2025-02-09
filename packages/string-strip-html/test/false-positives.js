import { test } from "uvu";
// eslint-disable-next-line no-unused-vars
import { equal, is, ok, throws, type, not, match } from "uvu/assert";

import { stripHtml } from "./util/noLog.js";

// false positives
// -----------------------------------------------------------------------------

test("01 - false positives - equations: very sneaky considering b is a legit tag name", () => {
  equal(
    stripHtml("Equations are: a < b and c > d").result,
    "Equations are: a < b and c > d",
    "01"
  );
});

test("02 - false positives - inwards-pointing arrows", () => {
  equal(
    stripHtml("Look here: ---> a <---").result,
    "Look here: ---> a <---",
    "02"
  );
});

test("03 - false positives - arrows mixed with tags", () => {
  equal(
    stripHtml(
      "Look here: ---> a <--- and here: ---> b <--- oh, and few tags: <div><article>\nzz</article></div>"
    ).result,
    "Look here: ---> a <--- and here: ---> b <--- oh, and few tags:\nzz",
    "03"
  );
});

test("04 - false positives - opening bracket", () => {
  equal(stripHtml("<").result, "<", "04");
});

test("05 - false positives - closing bracket", () => {
  equal(stripHtml(">").result, ">", "05");
});

test("06 - false positives - three openings", () => {
  equal(stripHtml(">>>").result, ">>>", "06");
});

test("07 - false positives - three closings", () => {
  equal(stripHtml("<<<").result, "<<<", "07");
});

test("08 - false positives - spaced three openings", () => {
  equal(stripHtml(" <<< ").result, "<<<", "08");
});

test("09 - false positives - tight recognised opening tag name, missing closing", () => {
  equal(stripHtml("<a").result, "", "09");
});

test("10 - false positives - unrecognised opening tag, missing closing", () => {
  equal(stripHtml("<yo").result, "", "10");
});

test("11 - false positives - missing opening, recognised tag", () => {
  equal(stripHtml("a>").result, "a>", "11");
});

test("12 - false positives - missing opening, unrecognised tag", () => {
  equal(stripHtml("yo>").result, "yo>", "12");
});

test("13 - false positives - conditionals that appear on Outlook only", () => {
  equal(
    stripHtml(`<!--[if (gte mso 9)|(IE)]>
  <table width="540" align="center" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td>
<![endif]-->
zzz
<!--[if (gte mso 9)|(IE)]>
      </td>
    </tr>
  </table>
<![endif]-->`).result,
    "zzz",
    "13"
  );
});

test("14 - false positives - conditionals that are visible for Outlook only", () => {
  equal(
    stripHtml(`<!--[if !mso]><!-->
  shown for everything except Outlook
  <!--<![endif]-->`).result,
    "shown for everything except Outlook",
    "14 - checking also for whitespace control"
  );
});

test("15 - false positives - conditionals that are visible for Outlook only", () => {
  equal(
    stripHtml(`a<!--[if !mso]><!-->
  shown for everything except Outlook
  <!--<![endif]-->b`).result,
    "a\nshown for everything except Outlook\nb",
    "15 - checking also for whitespace control"
  );
});

test("16 - false positives - conditionals that are visible for Outlook only", () => {
  equal(
    stripHtml(`<!--[if !mso]><!--><table width="100%" border="0" cellpadding="0" cellspacing="0">
    <tr>
      <td>
        shown for everything except Outlook
      </td>
    </tr>
  </table><!--<![endif]-->`).result,
    "shown for everything except Outlook",
    "16 - all those line breaks in-between the tags need to be taken care of too"
  );
});

test("17 - false positives - consecutive tags", () => {
  equal(
    stripHtml(
      "Text <ul><li>First point</li><li>Second point</li><li>Third point</li></ul>Text straight after"
    ).result,
    "Text First point Second point Third point Text straight after",
    "17"
  );
});

test("18 - digit is the first character following the opening bracket, quote", () => {
  let input = `"<5 text here`;
  equal(stripHtml(input).result, input, "18");
});

test("19 - digit is the first character following the opening bracket", () => {
  let input = `<5 text here`;
  equal(stripHtml(input).result, input, "19");
});

test("20 - digit is the first character following the opening bracket", () => {
  let input = `< 5 text here`;
  equal(stripHtml(input).result, input, "20");
});

test("21 - numbers compared", () => {
  let input = `1 < 5 for sure`;
  equal(stripHtml(input).result, input, "21");
});

test("22 - numbers compared, tight", () => {
  let input = `1 <5 for sure`;
  equal(stripHtml(input).result, input, "22");
});

test("23 - number letter", () => {
  let input = `aaa 1 < 5s bbb`;
  equal(stripHtml(input).result, input, "23");
});

test("24 - number letter, tight", () => {
  let input = `aaa 1 <5s bbb`;
  equal(stripHtml(input).result, input, "24");
});

test("25 - number letter, tight around", () => {
  let input = `aaa 1<5s bbb`;
  equal(stripHtml(input).result, input, "25");
});

test("26 - tag name with closing bracket in front", () => {
  let input = `>table`;
  equal(stripHtml(input).result, input, "26");
});

test("27", () => {
  let input = `{"Operator":"<=","IsValid":true}`;
  equal(stripHtml(input).result, input, "27");
});

test("28", () => {
  let input = `<a">`;
  equal(stripHtml(input).result, "", "28");
});

test("29", () => {
  let input = `<a"">`;
  equal(stripHtml(input).result, "", "29");
});

test("30", () => {
  let input = `<a'>`;
  equal(stripHtml(input).result, "", "30");
});

test("31", () => {
  let input = `<a''>`;
  equal(stripHtml(input).result, "", "31");
});

test("32", () => {
  let input = `H4<bE77]7oQL`;
  equal(stripHtml(input).result, "H4", "32");
});

test.run();
