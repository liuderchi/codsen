import { test } from "uvu";
// eslint-disable-next-line no-unused-vars
import { equal, is, ok, throws, type, not, match } from "uvu/assert";

import { stripHtml } from "./util/noLog.js";

// api peculiarities
// -----------------------------------------------------------------------------

test("01 - opts.dumpLinkHrefsNearby - null", () => {
  equal(
    stripHtml(
      'Let\'s watch <a href="https://www.rt.com/" target="_blank">RT news</a> this evening',
      {
        dumpLinkHrefsNearby: null,
      }
    ).result,
    "Let's watch RT news this evening",
    "01 - control, default behaviour"
  );
});

test("02 - opts.dumpLinkHrefsNearby - undefined", () => {
  equal(
    stripHtml(
      'Let\'s watch <a href="https://www.rt.com/" target="_blank">RT news</a> this evening',
      {
        dumpLinkHrefsNearby: undefined,
      }
    ).result,
    "Let's watch RT news this evening",
    "02 - control, default behaviour"
  );
});

test("03 - opts.dumpLinkHrefsNearby - {}", () => {
  equal(
    stripHtml(
      'Let\'s watch <a href="https://www.rt.com/" target="_blank">RT news</a> this evening',
      {
        dumpLinkHrefsNearby: {},
      }
    ).result,
    "Let's watch RT news this evening",
    "03 - control, default behaviour"
  );
});

test("04 - opts.dumpLinkHrefsNearby - {}", () => {
  throws(
    () => {
      stripHtml(
        'Let\'s watch <a href="https://www.rt.com/" target="_blank">RT news</a> this evening',
        {
          dumpLinkHrefsNearby: true,
        }
      );
    },
    /THROW_ID_04/,
    "04"
  );
});

// opts.dumpLinkHrefsNearby
// -----------------------------------------------------------------------------

test("05 - opts.dumpLinkHrefsNearby - clean code, double quotes", () => {
  equal(
    stripHtml(
      'Let\'s watch <a href="https://www.rt.com/" target="_blank">RT news</a> this evening'
    ).result,
    "Let's watch RT news this evening",
    "05 - control, default behaviour"
  );
});

test("06 - opts.dumpLinkHrefsNearby - clean code, double quotes", () => {
  equal(
    stripHtml(
      'Let\'s watch <a href="https://www.rt.com/" target="_blank">RT news</a> this evening',
      {
        dumpLinkHrefsNearby: { enabled: false },
      }
    ).result,
    "Let's watch RT news this evening",
    "06 - control, hardcoded default"
  );
});

test("07 - opts.dumpLinkHrefsNearby - clean code, double quotes", () => {
  equal(
    stripHtml(
      'Let\'s watch <a href="https://www.rt.com/" target="_blank">RT news</a> this evening',
      {
        dumpLinkHrefsNearby: { enabled: true },
      }
    ).result,
    "Let's watch RT news https://www.rt.com/ this evening",
    "07 - control, default behaviour"
  );
});

test("08 - opts.dumpLinkHrefsNearby - clean code, double quotes", () => {
  equal(
    stripHtml(
      'Let\'s sell some juicy gossip to the <a href="mailto:gossip@thesun.co.uk" target="_blank">The Sun</a> right now!',
      { dumpLinkHrefsNearby: { enabled: true } }
    ).result,
    "Let's sell some juicy gossip to the The Sun mailto:gossip@thesun.co.uk right now!",
    "08 - mailto links without customisation"
  );
});

test("09 - opts.dumpLinkHrefsNearby - clean code, double quotes", () => {
  equal(
    stripHtml(
      'Here\'s the <a href="mailto:bob@thesun.co.uk?cc=gossip@thesun.co.uk&subject=look%20what%20Kate%20did%20last%20night" target="_blank">chief editor\'s</a> email.',
      { dumpLinkHrefsNearby: { enabled: true } }
    ).result,
    "Here's the chief editor's mailto:bob@thesun.co.uk?cc=gossip@thesun.co.uk&subject=look%20what%20Kate%20did%20last%20night email.",
    "09 - mailto links with customisation"
  );
});

test("10 - opts.dumpLinkHrefsNearby - clean code, single quotes", () => {
  equal(
    stripHtml(
      "Let's watch <a href='https://www.rt.com/' target='_blank'>RT news</a> this evening"
    ).result,
    "Let's watch RT news this evening",
    "10 - control, default behaviour"
  );
});

test("11 - opts.dumpLinkHrefsNearby - clean code, single quotes", () => {
  equal(
    stripHtml(
      "Let's watch <a href='https://www.rt.com/' target='_blank'>RT news</a> this evening",
      {
        dumpLinkHrefsNearby: { enabled: false },
      }
    ).result,
    "Let's watch RT news this evening",
    "11 - control, hardcoded default"
  );
});

test("12 - opts.dumpLinkHrefsNearby - clean code, single quotes", () => {
  equal(
    stripHtml(
      "Let's watch <a href='https://www.rt.com/' target='_blank'>RT news</a> this evening",
      {
        dumpLinkHrefsNearby: { enabled: true },
      }
    ).result,
    "Let's watch RT news https://www.rt.com/ this evening",
    "12 - control, default behaviour"
  );
});

test("13 - opts.dumpLinkHrefsNearby - clean code, single quotes", () => {
  equal(
    stripHtml(
      "Let's sell some juicy gossip to the <a href='mailto:gossip@thesun.co.uk' target='_blank'>The Sun</a> right now!",
      { dumpLinkHrefsNearby: { enabled: true } }
    ).result,
    "Let's sell some juicy gossip to the The Sun mailto:gossip@thesun.co.uk right now!",
    "13 - mailto links without customisation"
  );
});

test("14 - opts.dumpLinkHrefsNearby - clean code, single quotes", () => {
  equal(
    stripHtml(
      "Here's the <a href='mailto:bob@thesun.co.uk?cc=gossip@thesun.co.uk&subject=look%20what%20Kate%20did%20last%20night' target='_blank'>chief editor's</a> email.",
      { dumpLinkHrefsNearby: { enabled: true } }
    ).result,
    "Here's the chief editor's mailto:bob@thesun.co.uk?cc=gossip@thesun.co.uk&subject=look%20what%20Kate%20did%20last%20night email.",
    "14 - mailto links with customisation"
  );
});

test("15 - opts.dumpLinkHrefsNearby - dirty code, HTML is chopped but href captured", () => {
  equal(
    stripHtml('Let\'s watch <a href="https://www.rt.com/" targ').result,
    "Let's watch",
    "15 - control, default behaviour"
  );
});

test("16 - opts.dumpLinkHrefsNearby - dirty code, HTML is chopped but href captured", () => {
  equal(
    stripHtml('Let\'s watch <a href="https://www.rt.com/" targ', {
      dumpLinkHrefsNearby: { enabled: true },
    }).result,
    "Let's watch https://www.rt.com/",
    "16 - only href contents are left after stripping"
  );
});

test("17 - opts.dumpLinkHrefsNearby - linked image", () => {
  equal(
    stripHtml(
      `a <a href="https://codsen.com" target="_blank"><img src="http://404.codsen.com/spacer.gif" width="111" height="222" border="0" style="display:block;" alt="linked image"/></a> b`
    ).result,
    "a b",
    "17 - control, default"
  );
});

test("18 - opts.dumpLinkHrefsNearby - linked image, dumpLinkHrefsNearby=off", () => {
  equal(
    stripHtml(
      `a <a href="https://codsen.com" target="_blank"><img src="http://404.codsen.com/spacer.gif" width="111" height="222" border="0" style="display:block;" alt="linked image"/></a> b`,
      { dumpLinkHrefsNearby: { enabled: false } }
    ).result,
    "a b",
    "18 - control, hardcoded default"
  );
});

test("19 - opts.dumpLinkHrefsNearby - linked image, dumpLinkHrefsNearby=on", () => {
  equal(
    stripHtml(
      `a <a href="https://codsen.com" target="_blank"><img src="http://404.codsen.com/spacer.gif" width="111" height="222" border="0" style="display:block;" alt="linked image"/></a> b`,
      { dumpLinkHrefsNearby: { enabled: true } }
    ).result,
    "a https://codsen.com b",
    "19 - dumps href of a linked image"
  );
});

test("20 - opts.dumpLinkHrefsNearby - .putOnNewLine, control", () => {
  equal(
    stripHtml(
      `a <a href="https://codsen.com" target="_blank"><img src="http://404.codsen.com/spacer.gif" width="111" height="222" border="0" style="display:block;" alt="linked image"/></a> b`
    ).result,
    "a b",
    "20 - control, default, off"
  );
});

test("21 - opts.dumpLinkHrefsNearby - .putOnNewLine, control", () => {
  equal(
    stripHtml(
      `a <a href="https://codsen.com" target="_blank"><img src="http://404.codsen.com/spacer.gif" width="111" height="222" border="0" style="display:block;" alt="linked image"/></a> b`,
      {
        dumpLinkHrefsNearby: {
          enabled: true,
          putOnNewLine: false, // <-------------   !
        },
      }
    ).result,
    "a https://codsen.com b",
    "21 - dumpLinkHrefsNearby = on; putOnNewLine = off"
  );
});

test("22 - opts.dumpLinkHrefsNearby - .putOnNewLine, control", () => {
  equal(
    stripHtml(
      `a <a href="https://codsen.com" target="_blank"><img src="http://404.codsen.com/spacer.gif" width="111" height="222" border="0" style="display:block;" alt="linked image"/></a> b`,
      {
        dumpLinkHrefsNearby: {
          enabled: true,
          putOnNewLine: true, // <-------------   !
        },
      }
    ).result,
    "a\n\nhttps://codsen.com\n\nb",
    "22 - dumpLinkHrefsNearby = on; putOnNewLine = on"
  );
});

test("23 - opts.dumpLinkHrefsNearby - .putOnNewLine", () => {
  equal(
    stripHtml(
      `a <a href="https://codsen.com" target="_blank"><img src="http://404.codsen.com/spacer.gif" width="111" height="222" border="0" style="display:block;" alt="linked image"/></a> b`,
      {
        dumpLinkHrefsNearby: {
          enabled: true,
          putOnNewLine: true,
          wrapHeads: "[", // <-------------  !
          wrapTails: "]", // <-------------  !
        },
      }
    ).result,
    "a\n\n[https://codsen.com]\n\nb",
    "23 - dumpLinkHrefsNearby = on; putOnNewLine = on; wrapHeads = on; wrapTails = on;"
  );
});

test("24 - opts.dumpLinkHrefsNearby - wrapHeads/wrapTails - control", () => {
  equal(
    stripHtml(`a<a href="https://codsen.com" target="_blank"><div>z</div></a>b`)
      .result,
    "a z b",
    "24 - control, default"
  );
});

test("25 - opts.dumpLinkHrefsNearby - wrapHeads/wrapTails - default dump", () => {
  equal(
    stripHtml(
      `a<a href="https://codsen.com" target="_blank"><div>z</div></a>b`,
      {
        dumpLinkHrefsNearby: {
          enabled: true,
        },
      }
    ).result,
    "a z https://codsen.com b",
    "25 - heads only"
  );
});

test("26 - opts.dumpLinkHrefsNearby - wrapHeads/wrapTails wrap heads only", () => {
  equal(
    stripHtml(
      `a<a href="https://codsen.com" target="_blank"><div>z</div></a>b`,
      {
        dumpLinkHrefsNearby: {
          enabled: true,
          wrapHeads: "[",
        },
      }
    ).result,
    "a z [https://codsen.com b",
    "26 - heads only"
  );
});

test("27 - opts.dumpLinkHrefsNearby - wrapHeads/wrapTails wrap teads only", () => {
  equal(
    stripHtml(
      `a<a href="https://codsen.com" target="_blank"><div>z</div></a>b`,
      {
        dumpLinkHrefsNearby: {
          enabled: true,
          wrapTails: "]",
        },
      }
    ).result,
    "a z https://codsen.com] b",
    "27 - tails only"
  );
});

test("28 - opts.dumpLinkHrefsNearby - wrapHeads/wrapTails wrap both", () => {
  equal(
    stripHtml(
      `a<a href="https://codsen.com" target="_blank"><div>z</div></a>b`,
      {
        dumpLinkHrefsNearby: {
          enabled: true,
          wrapHeads: "[",
          wrapTails: "]",
        },
      }
    ).result,
    "a z [https://codsen.com] b",
    "28 - tails only"
  );
});

test("29 - opts.dumpLinkHrefsNearby - wrapHeads/wrapTails + ignoreTags", () => {
  equal(
    stripHtml(
      `a<a href="https://codsen.com" target="_blank"><div>z</div></a>b`,
      {
        ignoreTags: "div",
        dumpLinkHrefsNearby: {
          enabled: true,
          wrapHeads: "[",
          wrapTails: "]",
        },
      }
    ).result,
    "a <div>z</div> [https://codsen.com] b",
    "29 - ignore on a div only"
  );
});

test("30 - opts.dumpLinkHrefsNearby - wrapHeads/wrapTails + ignoreTags", () => {
  equal(
    stripHtml(
      `a<a href="https://codsen.com" target="_blank"><div>z</div></a>b`,
      {
        ignoreTags: "", // <--------- it's an empty string! Will be ignored.
        dumpLinkHrefsNearby: {
          enabled: true,
          wrapHeads: "[",
          wrapTails: "]",
        },
      }
    ).result,
    "a z [https://codsen.com] b",
    "30 - ignore on a div only"
  );
});

test("31 - opts.dumpLinkHrefsNearby - wrapHeads/wrapTails + stripTogetherWithTheirContents", () => {
  equal(
    stripHtml(
      `a<a href="https://codsen.com" target="_blank"><div>z</div></a>b`,
      {
        stripTogetherWithTheirContents: "div",
        dumpLinkHrefsNearby: {
          enabled: true,
          wrapHeads: "[",
          wrapTails: "]",
        },
      }
    ).result,
    "a [https://codsen.com] b",
    "31 - whole div pair is removed"
  );
});

test.run();
